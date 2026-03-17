"use client";

import { useRef, useState, useMemo, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-register";
import { useContactForm } from "@/context/ContactFormContext";
import { getCurrency, getCluster } from "@/content/clusters";

/* ─── Pricing Model ─── */

const PROJECT_TYPES = [
  { id: "new", label: "New Website / Redesign" },
  { id: "migration", label: "Migration to Webflow" },
] as const;

/* Migration tiers match /services/ pages */
const MIGRATION_TIERS = [
  { id: "straightforward", label: "Straightforward", key: "straightforward" as const },
  { id: "animated", label: "Animated", key: "animated" as const, featured: true },
  { id: "brand-elevation", label: "Brand Elevation", key: "brandElevation" as const },
] as const;

/* New Website: $950/page base with volume discounts */
const NEW_BASE_PER_PAGE = 950;
function getNewSitePerPage(pages: number): number {
  if (pages >= 30) return NEW_BASE_PER_PAGE * 0.85; // ~$807
  if (pages >= 15) return NEW_BASE_PER_PAGE * 0.92; // ~$874
  return NEW_BASE_PER_PAGE;
}

const ADD_ONS = [
  { id: "animations", label: "Animations & Interactions", priceAdd: 2000, description: "Scroll animations, page transitions, and micro-interactions" },
  { id: "multilingual", label: "Multilingual", priceAdd: 3000, description: "Multi-language support with CMS-powered switching" },
  { id: "app-build", label: "In-Website App Build", priceAdd: 4000, description: "Custom calculator, configurator, or interactive tool (e.g. mortgage calculator)" },
] as const;

const AUTOMATION_PACKS = [
  { id: "none", label: "No automations", priceAdd: 0 },
  { id: "automation-3", label: "3 Pack", priceAdd: 1500 },
  { id: "automation-10", label: "10 Pack", priceAdd: 3500 },
  { id: "automation-20", label: "20 Pack", priceAdd: 6000 },
] as const;

const MONTHLY_ADD_ONS = [
  { id: "seo-monthly", label: "SEO Package", priceMonthly: 2500, description: "Ongoing technical SEO, content strategy, link building, and monthly reporting" },
] as const;

const TIMELINE_OPTIONS = [
  { id: "standard", label: "Standard", weeks: "6–8 weeks", multiplier: 1.0 },
  { id: "rush", label: "Rush", weeks: "3–4 weeks", multiplier: 1.35 },
] as const;

interface CostCalculatorProps {
  slug: string;
  region: string;
  locality: string;
}

export function CostCalculator({ slug, region }: CostCalculatorProps) {
  const currency = getCurrency(slug);
  const cluster = getCluster(slug);
  const { openModal } = useContactForm();
  const ref = useRef<HTMLElement>(null);

  const [projectType, setProjectType] = useState<string>("new");
  const [pageCount, setPageCount] = useState(10);
  const [migrationTier, setMigrationTier] = useState<string>("animated");
  const [isEcommerce, setIsEcommerce] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set());
  const [automationPack, setAutomationPack] = useState<string>("none");
  const [selectedMonthly, setSelectedMonthly] = useState<Set<string>>(new Set());
  const [timeline, setTimeline] = useState<string>("standard");

  const fmt = useMemo(
    () => (amount: number) =>
      new Intl.NumberFormat(currency.locale, {
        style: "currency",
        currency: currency.code,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount),
    [currency.locale, currency.code]
  );

  /* Calculate estimate */
  const estimate = useMemo(() => {
    const timelineMultiplier = TIMELINE_OPTIONS.find((t) => t.id === timeline)?.multiplier ?? 1;
    let baseCost: number;
    let perPage: number;

    if (projectType === "migration") {
      const tier = MIGRATION_TIERS.find((t) => t.id === migrationTier);
      perPage = tier ? cluster.migrationPricePerPage[tier.key] : cluster.migrationPricePerPage.animated;
      baseCost = pageCount * perPage;
    } else {
      perPage = getNewSitePerPage(pageCount);
      baseCost = pageCount * perPage;
    }

    // E-commerce adds a flat fee
    const ecommerceCost = isEcommerce ? 4000 : 0;

    // Add-ons
    const addOnCost = ADD_ONS.filter((a) => selectedAddOns.has(a.id)).reduce(
      (sum, a) => sum + a.priceAdd, 0
    ) + (AUTOMATION_PACKS.find((a) => a.id === automationPack)?.priceAdd ?? 0);

    // Monthly
    const monthlyCost = MONTHLY_ADD_ONS.filter((m) => selectedMonthly.has(m.id)).reduce(
      (sum, m) => sum + m.priceMonthly, 0
    );

    const oneTimeSubtotal = (baseCost + ecommerceCost + addOnCost) * timelineMultiplier;
    const localizedOneTime = Math.round(oneTimeSubtotal * currency.exchangeRate);
    const localizedMonthly = Math.round(monthlyCost * currency.exchangeRate);
    const localizedPerPage = Math.round(perPage * currency.exchangeRate);

    return { localizedOneTime, localizedMonthly, localizedPerPage, perPage, oneTimeSubtotal, monthlyCost, baseCost, ecommerceCost, addOnCost };
  }, [projectType, pageCount, migrationTier, isEcommerce, selectedAddOns, automationPack, selectedMonthly, timeline, currency.exchangeRate, cluster.migrationPricePerPage]);

  const toggleAddOn = useCallback((id: string) => {
    setSelectedAddOns((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleMonthly = useCallback((id: string) => {
    setSelectedMonthly((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleGetQuote = useCallback(() => {
    const features: string[] = [];
    if (isEcommerce) features.push("E-Commerce");
    ADD_ONS.filter((a) => selectedAddOns.has(a.id)).forEach((a) => features.push(a.label));
    if (automationPack !== "none") {
      const pack = AUTOMATION_PACKS.find((a) => a.id === automationPack);
      if (pack) features.push(`Automation ${pack.label}`);
    }
    MONTHLY_ADD_ONS.filter((m) => selectedMonthly.has(m.id)).forEach((m) => features.push(`${m.label} ($${m.priceMonthly}/mo)`));

    const tierLabel = projectType === "migration"
      ? MIGRATION_TIERS.find((t) => t.id === migrationTier)?.label ?? "Animated"
      : (pageCount >= 30 ? "Corporate" : pageCount >= 15 ? "Growth" : "Marketing");

    const details = [
      `Project: ${projectType === "migration" ? "Migration to Webflow" : "New Website / Redesign"}`,
      `Pages: ${pageCount}`,
      `Per page: ${fmt(estimate.localizedPerPage)}`,
      projectType === "migration" ? `Migration tier: ${tierLabel}` : `Package: ${tierLabel}`,
      `Timeline: ${TIMELINE_OPTIONS.find((t) => t.id === timeline)?.label} (${TIMELINE_OPTIONS.find((t) => t.id === timeline)?.weeks})`,
      ...(features.length > 0 ? [`Features: ${features.join(", ")}`] : []),
      `One-time estimate: ${fmt(estimate.localizedOneTime)}`,
      ...(estimate.localizedMonthly > 0 ? [`Monthly: ${fmt(estimate.localizedMonthly)}/mo`] : []),
    ].join(" | ");

    openModal({
      packageName: `${tierLabel} — ${projectType === "migration" ? "Migration" : "New Website"}`,
      pageCount,
      estimatedTotal: fmt(estimate.localizedOneTime),
      calculatorDetails: details,
    });
  }, [openModal, projectType, pageCount, migrationTier, isEcommerce, selectedAddOns, automationPack, selectedMonthly, timeline, estimate, fmt]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".calc-heading", {
          y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        });
        gsap.from(".calc-section", {
          y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%", once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="theme-dark section-space-main">
      <div className="u-container max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="calc-heading eyebrow text-brand mb-4">Pricing Calculator</p>
          <h2 className="calc-heading font-sans font-medium text-fluid-h2 leading-[1.1] text-white max-w-[28ch] mx-auto mb-6">
            How much does a website cost{" "}
            <span className="opacity-40">in {region}?</span>
          </h2>
          <p className="calc-heading font-sans text-fluid-main text-white opacity-50 leading-relaxed max-w-[55ch] mx-auto">
            Get an instant estimate for your Webflow project. Adjust the
            options below to see your personalized investment range.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,340px] gap-8">
          {/* Left — Controls */}
          <div className="space-y-10">
            {/* Project Type */}
            <div className="calc-section">
              <label className="block font-mono text-xs uppercase tracking-wider text-white opacity-40 mb-4">
                Project Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className="rounded-sm px-4 py-3 text-center transition-all"
                    style={{
                      backgroundColor: projectType === type.id ? "rgba(247,156,66,0.15)" : "rgba(255,255,255,0.05)",
                      border: projectType === type.id ? "1px solid rgba(247,156,66,0.5)" : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span className="font-sans text-sm font-medium" style={{ color: projectType === type.id ? "#F79C42" : "rgba(255,255,255,0.7)" }}>
                      {type.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Migration Tier (only for migration) */}
            {projectType === "migration" && (
              <div className="calc-section">
                <label className="block font-mono text-xs uppercase tracking-wider text-white opacity-40 mb-4">
                  Migration Package
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {MIGRATION_TIERS.map((tier) => {
                    const price = cluster.migrationPricePerPage[tier.key];
                    return (
                      <button
                        key={tier.id}
                        onClick={() => setMigrationTier(tier.id)}
                        className="rounded-sm px-4 py-4 text-center transition-all"
                        style={{
                          backgroundColor: migrationTier === tier.id ? "rgba(247,156,66,0.15)" : "rgba(255,255,255,0.05)",
                          border: migrationTier === tier.id ? "1px solid rgba(247,156,66,0.5)" : "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <span className="font-sans text-sm font-medium block" style={{ color: migrationTier === tier.id ? "#F79C42" : "rgba(255,255,255,0.7)" }}>
                          {tier.label}
                        </span>
                        <span className="font-mono text-xs text-white opacity-40 block mt-1">
                          {fmt(Math.round(price * currency.exchangeRate))}/page
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Page Count */}
            <div className="calc-section">
              <label className="block font-mono text-xs uppercase tracking-wider text-white opacity-40 mb-4">
                Number of Pages
              </label>
              <div className="flex items-center gap-6">
                <span className="font-display text-fluid-h2 text-brand min-w-[3ch] text-right">
                  {pageCount}
                </span>
                <div className="flex-1">
                  <input
                    type="range"
                    min={3}
                    max={60}
                    value={pageCount}
                    onChange={(e) => setPageCount(Number(e.target.value))}
                    className="migration-range-slider w-full"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="font-mono text-xs text-white opacity-30">3</span>
                    <span className="font-mono text-xs text-white opacity-30">60</span>
                  </div>
                </div>
              </div>
              {projectType === "new" && pageCount >= 15 && (
                <p className="font-mono text-xs text-brand opacity-60 mt-2">
                  {pageCount >= 30 ? "Corporate volume discount applied (15% off)" : "Growth volume discount applied (8% off)"}
                </p>
              )}
            </div>

            {/* E-Commerce Toggle */}
            <div className="calc-section">
              <label className="block font-mono text-xs uppercase tracking-wider text-white opacity-40 mb-4">
                E-Commerce
              </label>
              <button
                onClick={() => setIsEcommerce(!isEcommerce)}
                className="w-full flex items-center gap-4 rounded-sm px-5 py-4 text-left transition-all"
                style={{
                  backgroundColor: isEcommerce ? "rgba(247,156,66,0.1)" : "rgba(255,255,255,0.05)",
                  border: isEcommerce ? "1px solid rgba(247,156,66,0.4)" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-5 h-5 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{
                    backgroundColor: isEcommerce ? "#F79C42" : "transparent",
                    border: isEcommerce ? "1px solid #F79C42" : "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {isEcommerce && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-sans text-sm font-medium text-white block">E-Commerce Store</span>
                  <span className="font-sans text-xs text-white opacity-40 block mt-0.5">
                    Product pages, cart, checkout, and Stripe integration
                  </span>
                </div>
                <span className="font-mono text-xs text-brand opacity-70 flex-shrink-0">
                  +{fmt(Math.round(4000 * currency.exchangeRate))}
                </span>
              </button>
            </div>

            {/* Add-Ons */}
            <div className="calc-section">
              <label className="block font-mono text-xs uppercase tracking-wider text-white opacity-40 mb-4">
                Add-Ons
              </label>
              <div className="space-y-3">
                {ADD_ONS.map((addon) => {
                  const checked = selectedAddOns.has(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className="w-full flex items-center gap-4 rounded-sm px-5 py-4 text-left transition-all"
                      style={{
                        backgroundColor: checked ? "rgba(247,156,66,0.1)" : "rgba(255,255,255,0.05)",
                        border: checked ? "1px solid rgba(247,156,66,0.4)" : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        className="w-5 h-5 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors"
                        style={{
                          backgroundColor: checked ? "#F79C42" : "transparent",
                          border: checked ? "1px solid #F79C42" : "1px solid rgba(255,255,255,0.2)",
                        }}
                      >
                        {checked && (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-sans text-sm font-medium text-white block">{addon.label}</span>
                        <span className="font-sans text-xs text-white opacity-40 block mt-0.5">{addon.description}</span>
                      </div>
                      <span className="font-mono text-xs text-brand opacity-70 flex-shrink-0">
                        +{fmt(Math.round(addon.priceAdd * currency.exchangeRate))}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Automation Integration */}
            <div className="calc-section">
              <label className="block font-mono text-xs uppercase tracking-wider text-white opacity-40 mb-4">
                Automation Integration
              </label>
              <div
                className="rounded-sm transition-all"
                style={{
                  backgroundColor: automationPack !== "none" ? "rgba(247,156,66,0.1)" : "rgba(255,255,255,0.05)",
                  border: automationPack !== "none" ? "1px solid rgba(247,156,66,0.4)" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <select
                  value={automationPack}
                  onChange={(e) => setAutomationPack(e.target.value)}
                  className="w-full bg-transparent px-5 py-4 font-sans text-sm text-white appearance-none cursor-pointer focus:outline-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                >
                  {AUTOMATION_PACKS.map((pack) => (
                    <option key={pack.id} value={pack.id} className="bg-[#1a1a1a] text-white">
                      {pack.id === "none"
                        ? "No automations"
                        : `${pack.label} — ${fmt(Math.round(pack.priceAdd * currency.exchangeRate))}`}
                    </option>
                  ))}
                </select>
              </div>
              <p className="font-sans text-xs text-white opacity-30 mt-2">
                Zapier, Make, or native integrations — workflow mapping included
              </p>
            </div>

            {/* Monthly Services */}
            <div className="calc-section">
              <label className="block font-mono text-xs uppercase tracking-wider text-white opacity-40 mb-4">
                Monthly Services
              </label>
              <div className="space-y-3">
                {MONTHLY_ADD_ONS.map((addon) => {
                  const checked = selectedMonthly.has(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleMonthly(addon.id)}
                      className="w-full flex items-center gap-4 rounded-sm px-5 py-4 text-left transition-all"
                      style={{
                        backgroundColor: checked ? "rgba(247,156,66,0.1)" : "rgba(255,255,255,0.05)",
                        border: checked ? "1px solid rgba(247,156,66,0.4)" : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        className="w-5 h-5 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors"
                        style={{
                          backgroundColor: checked ? "#F79C42" : "transparent",
                          border: checked ? "1px solid #F79C42" : "1px solid rgba(255,255,255,0.2)",
                        }}
                      >
                        {checked && (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-sans text-sm font-medium text-white block">{addon.label}</span>
                        <span className="font-sans text-xs text-white opacity-40 block mt-0.5">{addon.description}</span>
                      </div>
                      <span className="font-mono text-xs text-brand opacity-70 flex-shrink-0">
                        {fmt(Math.round(addon.priceMonthly * currency.exchangeRate))}/mo
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeline */}
            <div className="calc-section">
              <label className="block font-mono text-xs uppercase tracking-wider text-white opacity-40 mb-4">
                Timeline
              </label>
              <div className="grid grid-cols-2 gap-3">
                {TIMELINE_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setTimeline(opt.id)}
                    className="rounded-sm px-5 py-4 text-left transition-all"
                    style={{
                      backgroundColor: timeline === opt.id ? "rgba(247,156,66,0.15)" : "rgba(255,255,255,0.05)",
                      border: timeline === opt.id ? "1px solid rgba(247,156,66,0.5)" : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span className="font-sans text-sm font-medium block" style={{ color: timeline === opt.id ? "#F79C42" : "rgba(255,255,255,0.7)" }}>
                      {opt.label}
                    </span>
                    <span className="font-mono text-xs text-white opacity-40 block mt-1">
                      {opt.weeks}{opt.id === "rush" && " (+35%)"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Estimate Card (sticky) */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div
              className="rounded-sm p-8"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(247,156,66,0.3)" }}
            >
              <p className="font-mono text-xs uppercase tracking-wider text-white opacity-40 mb-6">
                Your Estimate
              </p>

              {/* Total */}
              <p className="font-display text-fluid-h1 leading-none text-brand mb-2">
                {fmt(estimate.localizedOneTime)}
              </p>
              <p className="font-mono text-xs text-white opacity-30 mb-1">
                {pageCount} pages &bull;{" "}
                {fmt(estimate.localizedPerPage)}/page &bull;{" "}
                {TIMELINE_OPTIONS.find((t) => t.id === timeline)?.weeks}
              </p>
              {estimate.localizedMonthly > 0 && (
                <p className="font-mono text-xs text-brand opacity-60 mb-1">
                  + {fmt(estimate.localizedMonthly)}/month (SEO)
                </p>
              )}

              {/* Breakdown */}
              <div className="space-y-3 mt-6 mb-8">
                <div className="flex justify-between">
                  <span className="font-sans text-sm text-white opacity-50">
                    {projectType === "migration" ? `Migration (${MIGRATION_TIERS.find((t) => t.id === migrationTier)?.label})` : "Website build"} ({pageCount} pg)
                  </span>
                  <span className="font-mono text-sm text-white opacity-70">
                    {fmt(Math.round(estimate.baseCost * currency.exchangeRate))}
                  </span>
                </div>
                {isEcommerce && (
                  <div className="flex justify-between">
                    <span className="font-sans text-sm text-white opacity-50">E-Commerce</span>
                    <span className="font-mono text-sm text-white opacity-70">{fmt(Math.round(4000 * currency.exchangeRate))}</span>
                  </div>
                )}
                {ADD_ONS.filter((a) => selectedAddOns.has(a.id)).map((a) => (
                  <div key={a.id} className="flex justify-between">
                    <span className="font-sans text-sm text-white opacity-50">{a.label}</span>
                    <span className="font-mono text-sm text-white opacity-70">{fmt(Math.round(a.priceAdd * currency.exchangeRate))}</span>
                  </div>
                ))}
                {automationPack !== "none" && (() => {
                  const pack = AUTOMATION_PACKS.find((a) => a.id === automationPack);
                  return pack ? (
                    <div className="flex justify-between">
                      <span className="font-sans text-sm text-white opacity-50">Automation {pack.label}</span>
                      <span className="font-mono text-sm text-white opacity-70">{fmt(Math.round(pack.priceAdd * currency.exchangeRate))}</span>
                    </div>
                  ) : null;
                })()}
                {timeline === "rush" && (
                  <div className="flex justify-between">
                    <span className="font-sans text-sm text-white opacity-50">Rush delivery</span>
                    <span className="font-mono text-sm text-brand opacity-70">+35%</span>
                  </div>
                )}
                <div className="border-t pt-3 mt-3 flex justify-between" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <span className="font-sans text-sm font-medium text-white">One-time total</span>
                  <span className="font-mono text-sm font-medium text-brand">{fmt(estimate.localizedOneTime)}</span>
                </div>
                {estimate.localizedMonthly > 0 && (
                  <div className="flex justify-between">
                    <span className="font-sans text-sm font-medium text-white">Monthly</span>
                    <span className="font-mono text-sm font-medium text-brand">{fmt(estimate.localizedMonthly)}/mo</span>
                  </div>
                )}
              </div>

              {/* CTA */}
              <button onClick={handleGetQuote} className="btn justify-center w-full">
                <span className="text-sm">Get Your Custom Quote</span>
                <span className="btn-arrow">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <p className="font-sans text-xs text-white opacity-30 text-center mt-4">
                Free consultation — no obligation
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="font-sans text-sm text-white opacity-30 text-center mt-12 max-w-[55ch] mx-auto">
          This calculator provides a starting estimate. Final pricing depends
          on project complexity, custom functionality, and specific requirements.
          Schedule a free strategy call for an exact quote.
        </p>
      </div>
    </section>
  );
}

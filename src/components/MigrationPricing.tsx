"use client";

import { useRef, useState, useCallback, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-register";
import { useContactForm } from "@/context/ContactFormContext";
import { MigrationPackage } from "@/content/services";
import { getCurrency, getCluster } from "@/content/clusters";

function formatCurrencyAmount(amount: number, locale: string, currencyCode: string): string {
  return amount.toLocaleString(locale, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

interface MigrationPricingProps {
  packages: MigrationPackage[];
  region: string;
  slug?: string;
}

export function MigrationPricing({ packages, region, slug }: MigrationPricingProps) {
  const currency = getCurrency(slug || "arizona");
  const cluster = getCluster(slug || "arizona");
  const formatCurrency = useMemo(
    () => (amount: number) => formatCurrencyAmount(amount, currency.locale, currency.code),
    [currency.locale, currency.code]
  );

  // Use cluster-specific pricing for migration packages
  const localizedPackages = packages.map((pkg) => {
    if (pkg.slug === "straightforward") return { ...pkg, pricePerPage: cluster.migrationPricePerPage.straightforward };
    if (pkg.slug === "animated") return { ...pkg, pricePerPage: cluster.migrationPricePerPage.animated };
    if (pkg.slug === "brand-elevation") return { ...pkg, pricePerPage: cluster.migrationPricePerPage.brandElevation };
    return pkg;
  });
  const { openModal } = useContactForm();
  const ref = useRef<HTMLElement>(null);
  const [pageCount, setPageCount] = useState(10);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".migration-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        });

        gsap.from(".migration-slider", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%", once: true },
        });

        gsap.from(".migration-card", {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 65%", once: true },
        });
      });
    },
    { scope: ref }
  );

  const handleSelectPackage = useCallback(
    (pkg: MigrationPackage) => {
      const total = formatCurrency(pkg.pricePerPage * pageCount);
      openModal({
        packageName: pkg.name,
        pageCount,
        estimatedTotal: total,
      });
    },
    [openModal, pageCount, formatCurrency]
  );

  return (
    <section ref={ref} id="pricing" className="theme-dark section-space-main">
      <div className="u-container">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="migration-heading eyebrow text-brand mb-4">
            Migration Pricing
          </p>
          <h2 className="migration-heading font-sans font-medium text-fluid-h2 leading-[1.1] text-white max-w-[28ch] mx-auto mb-6">
            Transparent, per-page pricing{" "}
            <span className="opacity-40">for {region} businesses</span>
          </h2>
          <p className="migration-heading font-sans text-fluid-main text-white opacity-50 leading-relaxed max-w-[55ch] mx-auto">
            Choose your migration package and see your estimated investment
            instantly. Every package includes 301 redirects, content migration,
            and post-launch support.
          </p>
        </div>

        {/* Page Count Slider */}
        <div className="migration-slider max-w-xl mx-auto mb-16 px-4">
          <label className="block text-center mb-6">
            <span className="font-sans text-fluid-main text-white opacity-70">
              How many pages does your website have?
            </span>
            <span className="block font-display text-fluid-h2 text-brand mt-2">
              {pageCount} {pageCount === 1 ? "page" : "pages"}
            </span>
          </label>
          <input
            type="range"
            min={1}
            max={100}
            value={pageCount}
            onChange={(e) => setPageCount(Number(e.target.value))}
            className="migration-range-slider w-full"
          />
          <div className="flex justify-between mt-2">
            <span className="font-mono text-xs text-white opacity-30">1</span>
            <span className="font-mono text-xs text-white opacity-30">
              100
            </span>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {localizedPackages.map((pkg) => {
            const total = pkg.pricePerPage * pageCount;
            return (
              <div
                key={pkg.slug}
                className="migration-card rounded-sm p-8 flex flex-col"
                style={{
                  backgroundColor: pkg.featured
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(255,255,255,0.05)",
                  border: pkg.featured
                    ? `1px solid ${pkg.color}`
                    : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-full h-1 rounded-full mb-6"
                  style={{ backgroundColor: pkg.color }}
                />
                <p className="font-mono text-sm text-white opacity-50 uppercase tracking-wider mb-2">
                  {pkg.name}
                </p>
                <p
                  className="font-display text-fluid-h3 leading-none mb-1"
                  style={{ color: pkg.color }}
                >
                  {formatCurrency(pkg.pricePerPage)}
                  <span className="text-lg opacity-60">/page</span>
                </p>
                <p className="font-sans text-fluid-main text-white opacity-50 leading-relaxed mb-6 mt-4">
                  {pkg.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="font-sans text-sm text-white opacity-70 flex items-start gap-3"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <path
                          d="M3 8.5L6.5 12L13 4"
                          stroke={pkg.color}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Dynamic Total — bottom-aligned */}
                <div
                  className="rounded-md px-5 py-4 mb-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <p className="font-mono text-xs text-white opacity-40 uppercase tracking-wider mb-2">
                    Estimated Total
                  </p>
                  <p
                    className="font-display text-fluid-h2 leading-none mb-1"
                    style={{ color: pkg.color }}
                  >
                    {formatCurrency(total)}
                  </p>
                  <p className="font-mono text-xs text-white opacity-30 mt-1">
                    {pageCount} {pageCount === 1 ? "page" : "pages"} &times;{" "}
                    {formatCurrency(pkg.pricePerPage)}
                  </p>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleSelectPackage(pkg)}
                  className={pkg.featured ? "btn justify-center" : "btn-secondary"}
                  style={{ width: "100%" }}
                >
                  <span className="text-sm">Select This Package</span>
                  <span className="btn-arrow">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M1 13L13 1M13 1H3M13 1V11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <p className="font-sans text-sm text-white opacity-30 text-center mt-8 max-w-[55ch] mx-auto">
          Prices are starting points for standard pages. Complex pages with
          custom functionality may be quoted separately. Schedule a free strategy
          call for a custom quote.
        </p>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-register";
import { warmPalette } from "@/lib/colors";

const benefits = [
  {
    title: "Lightning-Fast Performance",
    description:
      "Webflow sites are built on clean, semantic code with global CDN hosting. The result: 95+ Lighthouse scores out of the box, faster page loads, and better Core Web Vitals — all of which directly improve your Google rankings.",
    color: warmPalette[0],
  },
  {
    title: "No Plugin Dependencies",
    description:
      "WordPress sites rely on dozens of plugins that slow your site down, create security vulnerabilities, and break with every update. Webflow has zero plugin dependencies — everything is built natively into the platform.",
    color: warmPalette[1],
  },
  {
    title: "Visual CMS for Your Team",
    description:
      "Webflow's Editor lets your marketing team update content, images, and blog posts without touching code. It is the most intuitive CMS available — no developer needed for day-to-day changes.",
    color: warmPalette[2],
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Webflow handles SSL certificates, DDoS protection, and infrastructure security automatically. No manual patches, no vulnerable plugins, no database exploits. Your site stays secure without ongoing maintenance.",
    color: warmPalette[3],
  },
  {
    title: "SEO Built Into the Platform",
    description:
      "Meta tags, Open Graph controls, auto-generated sitemaps, clean URLs, 301 redirects, and alt text management are all built in. No SEO plugins required — Webflow gives you full control over every ranking factor.",
    color: warmPalette[4],
  },
  {
    title: "Total Design Freedom",
    description:
      "Unlike template-based platforms, Webflow gives designers and developers full creative control. Every pixel, every interaction, every responsive breakpoint is customizable — your site looks exactly like your brand demands.",
    color: warmPalette[5],
  },
];

export function WhyWebflow() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".why-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        });

        gsap.from(".why-card", {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 65%", once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} id="why-webflow" className="theme-dark section-space-large">
      <div className="u-container">
        <div className="text-center mb-16">
          <p className="why-heading eyebrow text-brand mb-4">Why Webflow</p>
          <h2 className="why-heading font-sans font-medium text-fluid-h2 leading-[1.1] text-white max-w-[28ch] mx-auto mb-6">
            The platform built for businesses that want to{" "}
            <span className="opacity-40">grow, not maintain.</span>
          </h2>
          <p className="why-heading font-sans text-fluid-main text-white opacity-50 leading-relaxed max-w-[55ch] mx-auto">
            Webflow combines the design freedom of custom code with the ease of a
            visual builder — delivering faster, more secure, and higher-ranking
            websites than any other platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="why-card p-8 rounded-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="w-2 h-2 rounded-full mb-5"
                style={{ backgroundColor: benefit.color }}
              />
              <h3 className="font-sans font-medium text-fluid-h6 text-white mb-3">
                {benefit.title}
              </h3>
              <p className="font-sans text-fluid-main text-white opacity-50 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

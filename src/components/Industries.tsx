"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-register";
import { getIndustriesServed } from "@/content/shared";
import {
  Heart,
  Building,
  Plane,
  Cpu,
  Briefcase,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Building,
  Plane,
  Cpu,
  Briefcase,
  ShoppingBag,
};

interface IndustriesProps {
  locality: string;
  region: string;
}

export function Industries({ locality, region }: IndustriesProps) {
  const ref = useRef<HTMLElement>(null);
  const industries = getIndustriesServed(locality, region);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".ind-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        });

        gsap.from(".ind-card", {
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
    <section ref={ref} id="industries" className="theme-dark section-space-main">
      <div className="u-container">
        <div className="text-center mb-16">
          <p className="ind-heading eyebrow text-brand mb-4">Who We Help</p>
          <h2 className="ind-heading font-sans font-medium text-fluid-h2 leading-[1.1] text-white max-w-[28ch] mx-auto mb-6">
            Webflow websites for {locality} businesses{" "}
            <span className="opacity-40">in every industry</span>
          </h2>
          <p className="ind-heading font-sans text-fluid-main text-white opacity-50 leading-relaxed max-w-[55ch] mx-auto">
            We have built Webflow sites for businesses across {region} — from
            healthcare to hospitality, real estate to SaaS.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon];
            return (
              <div
                key={industry.name}
                className="ind-card p-8 rounded-sm"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderLeft: `3px solid ${industry.color}`,
                }}
              >
                {Icon && (
                  <Icon
                    size={24}
                    className="mb-5"
                    style={{ color: industry.color }}
                  />
                )}
                <h3 className="font-sans font-medium text-fluid-h6 text-white mb-3">
                  {industry.name}
                </h3>
                <p className="font-sans text-fluid-main text-white opacity-50 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-register";
import { warmPalette } from "@/lib/colors";
import { MapPin, Users, Handshake } from "lucide-react";

const trustSignals = [
  {
    icon: MapPin,
    label: "Based in Phoenix, AZ",
    color: warmPalette[0],
  },
  {
    icon: Users,
    label: "50+ Arizona businesses served",
    color: warmPalette[4],
  },
  {
    icon: Handshake,
    label: "In-person strategy sessions available",
    color: warmPalette[3],
  },
];

export function LocalTrust() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".local-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        });

        gsap.from(".local-content", {
          y: 30,
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
    <section
      ref={ref}
      id="phoenix"
      className="section-space-main"
      style={{ backgroundColor: "#FFF9F0" }}
    >
      <div className="u-container">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left: Copy */}
          <div>
            <p className="local-heading eyebrow text-brand mb-4">
              Phoenix, Arizona
            </p>
            <h2 className="local-heading font-sans font-medium text-fluid-h3 leading-[1.1] text-dark mb-8">
              Built for businesses in the Valley of the Sun
            </h2>

            <div className="local-content space-y-5">
              <p className="font-sans text-fluid-main text-dark opacity-60 leading-relaxed">
                Phoenix is one of the fastest-growing business markets in the
                country — and the competition for online visibility is fierce.
                Whether you are a healthcare practice in Scottsdale, a real estate
                firm in Tempe, or a SaaS startup in downtown Phoenix, your website
                is often the first impression customers have of your business.
              </p>
              <p className="font-sans text-fluid-main text-dark opacity-60 leading-relaxed">
                As a Webflow agency rooted in Arizona, we understand the local
                market dynamics that drive results for businesses across the Valley.
                From the seasonal patterns of the hospitality industry in Mesa and
                Chandler to the competitive healthcare corridor along the I-17, we
                build websites that are tuned to how Arizona customers search, browse,
                and buy.
              </p>
              <p className="font-sans text-fluid-main text-dark opacity-60 leading-relaxed">
                We combine Webflow specialization with deep Phoenix-area market
                knowledge — giving your business a website that is not just
                beautifully designed, but strategically built to rank in local
                search results across Phoenix, Scottsdale, Tempe, Mesa, Chandler,
                and Gilbert.
              </p>
            </div>
          </div>

          {/* Right: Trust signals */}
          <div className="local-content space-y-4 lg:mt-16">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div
                  key={signal.label}
                  className="flex items-center gap-4 p-5 rounded-sm"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.02)",
                    borderLeft: `3px solid ${signal.color}`,
                  }}
                >
                  <Icon
                    size={22}
                    className="flex-shrink-0"
                    style={{ color: signal.color }}
                  />
                  <span className="font-sans font-medium text-fluid-main text-dark">
                    {signal.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

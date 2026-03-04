"use client";

import { useContactForm } from "@/context/ContactFormContext";

const footerTags = [
  { label: "Web Design", color: "#d8e3fd" },
  { label: "Google Ads", color: "#fff1c6" },
  { label: "SEO", color: "#ffe5cd" },
  { label: "Webflow Development", color: "#d8e3fd" },
  { label: "CRO", color: "#d5ffcd" },
  { label: "AI Automation", color: "#e6d8fd" },
  { label: "Retainer Services", color: "#fdd8f4" },
  { label: "API Integration", color: "#fdd8d9" },
  { label: "Branding", color: "#d1fffd" },
  { label: "UI/UX Design", color: "#fff1c6" },
];

export function Footer() {
  const { openModal } = useContactForm();
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 50%, #FFCC80 100%)",
        color: "#0c0c0c",
      }}
    >
      {/* Big CTA section */}
      <div className="section-space-large">
        <div className="u-container text-center">
          <p className="font-mono text-fluid-small uppercase tracking-wider opacity-60 mb-6">
            Ready to get started?
          </p>
          <h2 className="font-sans font-medium text-fluid-h1 leading-[1.05] max-w-[16ch] mx-auto mb-8">
            Let&apos;s build something great together.
          </h2>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-3 bg-brand text-dark rounded-sm px-8 py-4 font-sans font-medium text-fluid-main transition-all hover:brightness-110"
            style={{ transitionDuration: "0.3s" }}
          >
            Start a Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 14L14 2M14 2H5M14 2V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.15)" }}>
        <div className="u-container py-8">
          {/* Tag cloud */}
          <div className="flex flex-wrap gap-2 mb-8">
            {footerTags.map((tag) => (
              <span
                key={tag.label}
                className="font-mono text-xs md:text-xs px-4 py-2 md:px-3 md:py-1.5 rounded-full"
                style={{ backgroundColor: tag.color, color: "#0c0c0c" }}
              >
                {tag.label}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span className="font-sans font-medium text-base flex items-center gap-2">
              <img
                src="/images/logo.svg"
                alt="Phoenix Webflow Agency"
                className="h-5 w-auto"
              />
              Phoenix Webflow Agency
            </span>
            <p className="font-sans text-fluid-small opacity-40">
              &copy; {new Date().getFullYear()} Phoenix Webflow Agency. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

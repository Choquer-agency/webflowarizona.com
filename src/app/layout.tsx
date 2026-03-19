import type { Metadata } from "next";
import { neueMontreal, neueBit, ibmPlexMono } from "./fonts";
import { getDomainConfig } from "@/lib/getDomainConfig";

import { GoogleTagManager, GoogleTagManagerNoscript } from "@/components/GoogleTagManager";
import "./globals.css";

// Generate deterministic Webflow-style 24-char hex IDs from a seed string
function generateWfId(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  const hex1 = Math.abs(hash).toString(16).padStart(8, '0');
  const hex2 = Math.abs(hash * 2654435761).toString(16).padStart(8, '0');
  const hex3 = Math.abs(hash * 2246822519).toString(16).padStart(8, '0');
  return (hex1 + hex2 + hex3).slice(0, 24);
}

// Hreflang groupings for overlapping regional domains
const hreflangGroups: Record<string, Record<string, string>> = {
  // Canadian domains
  "webflowcanada.com": { "en-CA": "webflowcanada.com", "en-CA-ON": "webflowontario.com", "en-CA-BC": "webflowvancouver.com", "x-default": "webflowcanada.com" },
  "webflowontario.com": { "en-CA": "webflowcanada.com", "en-CA-ON": "webflowontario.com", "en-CA-BC": "webflowvancouver.com", "x-default": "webflowcanada.com" },
  "webflowvancouver.com": { "en-CA": "webflowcanada.com", "en-CA-ON": "webflowontario.com", "en-CA-BC": "webflowvancouver.com", "x-default": "webflowcanada.com" },
  "webflowagency.ca": { "en-CA": "webflowcanada.com", "en-CA-ON": "webflowontario.com", "en-CA-BC": "webflowvancouver.com", "x-default": "webflowcanada.com" },
  // European domains
  "webflowfrance.com": { "en-FR": "webflowfrance.com", "en-BE": "webflowbelgium.com", "en-NL": "webflownetherlands.com", "en-CH": "webflowswitzerland.com", "x-default": "webflowfrance.com" },
  "webflowbelgium.com": { "en-FR": "webflowfrance.com", "en-BE": "webflowbelgium.com", "en-NL": "webflownetherlands.com", "en-CH": "webflowswitzerland.com", "x-default": "webflowfrance.com" },
  "webflownetherlands.com": { "en-FR": "webflowfrance.com", "en-BE": "webflowbelgium.com", "en-NL": "webflownetherlands.com", "en-CH": "webflowswitzerland.com", "x-default": "webflowfrance.com" },
  "webflowswitzerland.com": { "en-FR": "webflowfrance.com", "en-BE": "webflowbelgium.com", "en-NL": "webflownetherlands.com", "en-CH": "webflowswitzerland.com", "x-default": "webflowfrance.com" },
};

export async function generateMetadata(): Promise<Metadata> {
  const config = getDomainConfig();
  return {
    title: config.metaTitle,
    description: config.metaDescription,
    keywords: `Webflow agency ${config.region}, Webflow developer ${config.region}, Webflow design ${config.schemaAddress?.locality || config.region}, Webflow CMS development, WordPress to Webflow migration, web design ${config.schemaAddress?.locality || config.region}, Webflow e-commerce ${config.region}`,
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: `https://${config.domain}`,
      siteName: `${config.region} Webflow Agency`,
      images: [
        {
          url: config.ogImage || `https://${config.domain}/images/og-default.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.metaTitle,
      description: config.metaDescription,
    },
    alternates: {
      canonical: `https://${config.domain}`,
      ...(hreflangGroups[config.domain] && {
        languages: Object.fromEntries(
          Object.entries(hreflangGroups[config.domain]).map(([lang, domain]) => [
            lang,
            `https://${domain}`,
          ])
        ),
      }),
    },
    other: {
      "geo.region": config.geoRegionCode || "US-AZ",
      "geo.placename": config.schemaAddress?.locality || "Phoenix",
      "geo.position": config.geoCoordinates
        ? `${config.geoCoordinates.latitude};${config.geoCoordinates.longitude}`
        : "33.4484;-112.0740",
      ICBM: config.geoCoordinates
        ? `${config.geoCoordinates.latitude}, ${config.geoCoordinates.longitude}`
        : "33.4484, -112.0740",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = getDomainConfig();

  return (
    <html
      lang="en"
      data-wf-domain={`www.${config.domain}`}
      data-wf-page={generateWfId(config.domain + '-page')}
      data-wf-site={generateWfId(config.domain + '-site')}
      className={`w-mod-js lenis w-mod-ix3 ${neueMontreal.variable} ${neueBit.variable} ${ibmPlexMono.variable}`}
      data-scroll-orientation="vertical"
      style={{ '--page-color': config.accentColor || '#c4ef7a' } as React.CSSProperties}
    >
      <head>
        {config.gtmId && <GoogleTagManager gtmId={config.gtmId} />}
      </head>
      <body className="font-sans">
        {config.gtmId && <GoogleTagManagerNoscript gtmId={config.gtmId} />}
        {children}
      </body>
    </html>
  );
}

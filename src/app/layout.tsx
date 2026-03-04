import type { Metadata } from "next";
import { neueMontreal, neueBit, ibmPlexMono } from "./fonts";
import { getDomainConfig } from "@/lib/getDomainConfig";
import { generateSchema } from "@/lib/schema";
import { GoogleTagManager, GoogleTagManagerNoscript } from "@/components/GoogleTagManager";
import "./globals.css";

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
          url: config.ogImage || "/images/og-default.jpg",
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
  const schema = generateSchema(config);

  return (
    <html
      lang="en"
      className={`${neueMontreal.variable} ${neueBit.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {config.gtmId && <GoogleTagManager gtmId={config.gtmId} />}
      </head>
      <body className="font-sans">
        {config.gtmId && <GoogleTagManagerNoscript gtmId={config.gtmId} />}
        {children}
      </body>
    </html>
  );
}

import { Metadata } from "next";
import { getDomainConfig } from "@/lib/getDomainConfig";
import { ClientLayout } from "@/components/ClientLayout";
import { Nav } from "@/components/Nav";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { MobileCta } from "@/components/MobileCta";
import { Footer } from "@/components/Footer";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const config = getDomainConfig();
  const title = `About ${config.locality} Webflow Agency | Bryce Choquer — Founder`;
  const description = `Meet Bryce Choquer, founder of ${config.locality} Webflow Agency. 8+ years, 150+ projects, and a certified Webflow Expert Partner helping ${config.region} businesses grow online.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://${config.domain}/about`,
      siteName: `${config.locality} Webflow Agency`,
      images: [
        {
          url: `https://${config.domain}/images/og-default.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://${config.domain}/about`,
    },
  };
}

export default function AboutPage() {
  const config = getDomainConfig();

  return (
    <ClientLayout domain={config.domain} region={config.region}>
      <Nav locality={config.locality} />
      <About locality={config.locality} region={config.region} />
      <MobileCta />
      <Stats />
      <Portfolio />
      <Testimonials locality={config.locality} />
      <CtaBanner />
      <Footer locality={config.locality} />
    </ClientLayout>
  );
}

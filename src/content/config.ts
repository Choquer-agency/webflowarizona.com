export interface DomainConfig {
  slug: string;
  domain: string;
  region: string;
  regionAdjective: string;
  country: "US" | "CA" | "UK" | "EU" | "AU" | "NZ" | "SG" | "HK" | "NO" | "CH" | "FR" | "BE" | "NL" | "SE";

  // SEO
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;

  // Copy
  heroH1: string;
  heroSubhead: string;

  // Schema.org
  schemaAddress?: {
    locality: string;
    region: string;
    country: string;
  };

  // Contact
  telephone?: string;
  email?: string;

  // Geo
  geoCoordinates?: {
    latitude: number;
    longitude: number;
  };

  // Google Tag Manager
  gtmId?: string;

  // Optional per-region accent override
  accentColor?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "webflow" | "pricing" | "process" | "local" | "general";
}

export interface WebflowService {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
}

export interface ComparisonRow {
  feature: string;
  webflow: string | boolean;
  wordpress: string | boolean;
  customCode: string | boolean;
}

export interface IndustryItem {
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface PricingTier {
  name: string;
  priceRange: string;
  description: string;
  includes: string[];
  color: string;
  featured?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
  featured?: boolean;
}

export interface PortfolioProject {
  name: string;
  category: string;
  image: string;
  url?: string;
  description?: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const defaultConfig: DomainConfig = {
  slug: "arizona",
  domain: "webflowarizona.com",
  region: "Arizona",
  regionAdjective: "Arizona-based",
  country: "US",
  metaTitle: "Webflow Agency Arizona | Expert Webflow Design & Development",
  metaDescription:
    "Arizona's premier Webflow agency. We design, build, and launch high-performance Webflow websites for businesses ready to grow. Get a free strategy call today.",
  heroH1: "Arizona's Premier Webflow Agency",
  heroSubhead:
    "We design, build, and launch high-performance Webflow websites for Arizona businesses ready to grow. No templates. No shortcuts.",
  schemaAddress: {
    locality: "Phoenix",
    region: "AZ",
    country: "US",
  },
  telephone: "+17782374700",
  email: "bryce@choquer.agency",
  geoCoordinates: {
    latitude: 33.4484,
    longitude: -112.074,
  },
  gtmId: "GTM-MG2LRHKS",
};

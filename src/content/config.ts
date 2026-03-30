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

  // Location details
  locality: string; // e.g. "Phoenix", "Portland", "Singapore"
  stateCode: string; // e.g. "AZ", "OR", "SG"
  nearbyAreas: string; // e.g. "Scottsdale, Tempe, Mesa, Chandler, and Gilbert"

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

  // Geo region code for meta tags (e.g. "US-AZ", "US-CA", "SG")
  geoRegionCode?: string;

  // Google Tag Manager
  gtmId?: string;

  // Optional per-region accent override
  accentColor?: string;

  // Market cluster for differentiated content
  cluster?: string;
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
  caseStudy?: {
    challenge: string;
    approach: string;
    result: string;
  };
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
  metaTitle: "Webflow Design Company Phoenix AZ | Arizona Agency",
  metaDescription:
    "Phoenix AZ Webflow design company. We build high-performance websites for Arizona businesses. Certified Webflow Expert. Free strategy call.",
  locality: "Phoenix",
  stateCode: "AZ",
  nearbyAreas: "Scottsdale, Tempe, Mesa, Chandler, and Gilbert",
  heroH1: "Phoenix AZ's Webflow Design Agency",
  heroSubhead:
    "Webflow sites that rank on Google, convert visitors into leads, and grow your business \u2014 built by a certified Webflow Expert Partner.",
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
  geoRegionCode: "US-AZ",
  gtmId: "GTM-MG2LRHKS",
};

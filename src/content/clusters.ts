/* ─── Market Cluster System ───
 * Groups 30 domains into 7 clusters with meaningfully different content.
 * Each cluster has unique pain points, industries, process emphasis,
 * pricing (localized currency), and FAQ additions.
 */

export type MarketClusterId =
  | "us-west-tech"
  | "us-southwest"
  | "canada"
  | "europe-north"
  | "europe-west"
  | "uk"
  | "asia-pacific";

export interface CurrencyConfig {
  code: string;
  symbol: string;
  locale: string;
  exchangeRate: number; // multiplier from USD base
}

export interface ClusterPainPoint {
  title: string;
  description: string;
}

export interface ClusterProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ClusterPricingTier {
  name: string;
  priceRange: string;
  description: string;
  includes: string[];
  color: string;
  featured?: boolean;
}

export interface ClusterIndustry {
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface ClusterFAQ {
  category: "webflow" | "pricing" | "process" | "local" | "general";
  question: string;
  answer: string;
}

export interface ClusterComparisonExtra {
  feature: string;
  webflow: string | boolean;
  wordpress: string | boolean;
  customCode: string | boolean;
}

export interface MarketCluster {
  id: MarketClusterId;
  defaultCurrency: CurrencyConfig;
  painPoints: ClusterPainPoint[];
  processSteps: ClusterProcessStep[];
  pricingTiers: ClusterPricingTier[];
  industries: (locality: string, region: string) => ClusterIndustry[];
  faqAdditions: (locality: string, region: string) => ClusterFAQ[];
  platformComparisonExtras: ClusterComparisonExtra[];
  webflowServiceOverrides: Record<string, string>; // slug -> longDescription override
  migrationPricePerPage: { straightforward: number; animated: number; brandElevation: number };
}

/* ─── Slug → Cluster Mapping ─── */

export const slugToCluster: Record<string, MarketClusterId> = {
  // US West Tech
  california: "us-west-tech",
  "san-francisco": "us-west-tech",
  oregon: "us-west-tech",
  washington: "us-west-tech",
  colorado: "us-west-tech",

  // US Southwest
  arizona: "us-west-tech" === "us-west-tech" ? "us-southwest" : "us-southwest", // default
  nevada: "us-southwest",
  texas: "us-southwest",
  idaho: "us-southwest",
  montana: "us-southwest",
  hawaii: "us-southwest",
  florida: "us-southwest",

  // Canada
  ontario: "canada",
  vancouver: "canada",
  canada: "canada",
  "agency-ca": "canada",
  // "expert-ca": "canada", // domain removed (Vercel limit)

  // Europe North
  norway: "europe-north",
  sweden: "europe-north",

  // Europe West
  switzerland: "europe-west",
  france: "europe-west",
  belgium: "europe-west",
  netherlands: "europe-west",
  // "agency-eu": "europe-west", // domain removed (Vercel limit)
  // "expert-eu": "europe-west", // domain removed (Vercel limit)

  // UK
  // "agency-uk": "uk", // domain removed (Vercel limit)

  // Asia-Pacific
  singapore: "asia-pacific",
  "hong-kong": "asia-pacific",
  "new-zealand": "asia-pacific",
};

// Fix the arizona entry
slugToCluster["arizona"] = "us-southwest";

export function getClusterId(slug: string): MarketClusterId {
  return slugToCluster[slug] || "us-southwest";
}

export function getCluster(slug: string): MarketCluster {
  const id = getClusterId(slug);
  return clusterDefinitions[id];
}

/* ─── Currency Configs ─── */

const currencies: Record<string, CurrencyConfig> = {
  USD: { code: "USD", symbol: "$", locale: "en-US", exchangeRate: 1 },
  CAD: { code: "CAD", symbol: "C$", locale: "en-CA", exchangeRate: 1.36 },
  EUR: { code: "EUR", symbol: "€", locale: "en-IE", exchangeRate: 0.92 },
  GBP: { code: "GBP", symbol: "£", locale: "en-GB", exchangeRate: 0.79 },
  CHF: { code: "CHF", symbol: "CHF", locale: "de-CH", exchangeRate: 0.88 },
  NOK: { code: "NOK", symbol: "kr", locale: "nb-NO", exchangeRate: 10.5 },
  SEK: { code: "SEK", symbol: "kr", locale: "sv-SE", exchangeRate: 10.3 },
  SGD: { code: "SGD", symbol: "S$", locale: "en-SG", exchangeRate: 1.34 },
  HKD: { code: "HKD", symbol: "HK$", locale: "en-HK", exchangeRate: 7.8 },
  NZD: { code: "NZD", symbol: "NZ$", locale: "en-NZ", exchangeRate: 1.65 },
};

/* Per-domain currency override for mixed-currency clusters */
export const domainCurrencyOverrides: Record<string, CurrencyConfig> = {
  switzerland: currencies.CHF,
  norway: currencies.NOK,
  sweden: currencies.SEK,
  singapore: currencies.SGD,
  "hong-kong": currencies.HKD,
  "new-zealand": currencies.NZD,
};

export function getCurrency(slug: string): CurrencyConfig {
  if (domainCurrencyOverrides[slug]) return domainCurrencyOverrides[slug];
  const cluster = getCluster(slug);
  return cluster.defaultCurrency;
}

/* ─── Helper: Format localized price range ─── */

function priceRange(low: number, high: number | null, currency: CurrencyConfig): string {
  const fmt = (n: number) =>
    n.toLocaleString(currency.locale, {
      style: "currency",
      currency: currency.code,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  return high ? `${fmt(low)} – ${fmt(high)}` : `${fmt(low)}+`;
}

function localizePrice(usdAmount: number, currency: CurrencyConfig): number {
  const raw = usdAmount * currency.exchangeRate;
  // Round to nearest 500 for amounts > 1000, nearest 50 otherwise
  if (raw > 1000) return Math.round(raw / 500) * 500;
  return Math.round(raw / 50) * 50;
}

/* ─── Cluster Definitions ─── */

export const clusterDefinitions: Record<MarketClusterId, MarketCluster> = {
  /* ════════════════════════════════════════════════════
   * US WEST TECH — CA, SF, OR, WA, CO
   * ════════════════════════════════════════════════════ */
  "us-west-tech": {
    id: "us-west-tech",
    defaultCurrency: currencies.USD,
    painPoints: [
      {
        title: "Your site doesn't match your product",
        description:
          "You've raised funding, shipped features, and grown your team — but your website still looks like a weekend hackathon project. Investors and prospects notice.",
      },
      {
        title: "Developers building marketing pages",
        description:
          "Your engineering team is spending cycles on landing pages and blog updates instead of shipping product. That's an expensive misallocation.",
      },
      {
        title: "Disconnected from your stack",
        description:
          "Your site doesn't talk to HubSpot, Segment, or your CRM. Every lead requires manual data entry. Your marketing ops are held together with duct tape.",
      },
      {
        title: "Competing against well-funded brands",
        description:
          "In a market where your competitor's site looks like a billion-dollar company, yours needs to look just as sharp — or you lose the deal before the demo.",
      },
      {
        title: "Still running on WordPress?",
        description:
          "Plugin conflicts, security vulnerabilities, and a clunky CMS that your marketing team refuses to touch. WordPress is slowing down your go-to-market.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Discovery & Strategy",
        description:
          "We dig into your product positioning, competitive landscape, and growth targets. We audit your current site's performance, conversion funnels, and tech stack integrations to build a strategy that aligns with your GTM motion.",
      },
      {
        step: 2,
        title: "Design System",
        description:
          "A complete design system in Figma — components, typography, color tokens, and responsive layouts — approved by your team before development begins. Built to scale as your product and marketing evolve.",
      },
      {
        step: 3,
        title: "Build & Integrate",
        description:
          "Clean Webflow development with CMS architecture, marketing automation integrations (HubSpot, Segment, Salesforce), analytics setup, and performance optimization. Your marketing team can ship pages without engineering tickets.",
      },
      {
        step: 4,
        title: "Launch & Iterate",
        description:
          "Full handoff with CMS training, conversion tracking verification, and a 30-day optimization sprint. We monitor Core Web Vitals, form submissions, and page performance to ensure your site converts from day one.",
      },
    ],
    pricingTiers: (() => {
      const c = currencies.USD;
      return [
        {
          name: "Marketing Site",
          priceRange: priceRange(5000, 12000, c),
          description:
            "For startups and growing companies that need a professional web presence that converts visitors into pipeline.",
          includes: [
            "5–10 custom-designed pages",
            "Responsive design for all devices",
            "CMS setup for blog and resources",
            "HubSpot or analytics integration",
            "On-page SEO optimization",
            "30-day post-launch support",
          ],
          color: "#BCEFFF",
        },
        {
          name: "Growth Site",
          priceRange: priceRange(12000, 25000, c),
          description:
            "For companies ready to turn their website into a lead generation engine with advanced integrations and conversion optimization.",
          includes: [
            "10–20 custom-designed pages",
            "Advanced CMS architecture",
            "Custom animations & interactions",
            "CRM & marketing automation integration",
            "CRO-optimized layouts with A/B testing",
            "90-day post-launch support",
          ],
          color: "#F79C42",
          featured: true,
        },
        {
          name: "Enterprise / E-Commerce",
          priceRange: priceRange(25000, null, c),
          description:
            "Complex builds with multi-product e-commerce, API integrations, gated content, and enterprise-grade marketing infrastructure.",
          includes: [
            "Unlimited pages",
            "Webflow E-commerce or membership setup",
            "Multi-collection CMS architecture",
            "API & automation integrations",
            "Performance monitoring dashboard",
            "Ongoing retainer support",
          ],
          color: "#C4EF7A",
        },
      ];
    })(),
    industries: (locality, region) => [
      {
        name: "SaaS & Technology",
        icon: "Cpu",
        description: `High-converting marketing sites, product pages, and documentation portals for ${region}'s competitive SaaS ecosystem. Built to integrate with your existing tech stack.`,
        color: "#C4EF7A",
      },
      {
        name: "Biotech & Healthtech",
        icon: "Heart",
        description: `HIPAA-aware marketing sites, clinical trial portals, and investor-facing pages for ${locality}-area biotech and healthtech companies navigating complex compliance requirements.`,
        color: "#BCEFFF",
      },
      {
        name: "Fintech",
        icon: "Building",
        description: `Trust-building websites for ${region} fintech startups — from payment platforms to lending apps. Designed to convert skeptical buyers in a regulated industry.`,
        color: "#F79C42",
      },
      {
        name: "Clean Energy & Climate",
        icon: "Plane",
        description: `Brand-forward sites for ${region}'s clean energy startups and sustainability companies. Showcase impact metrics, technology, and investor decks with credibility.`,
        color: "#FFDF40",
      },
      {
        name: "DTC & E-Commerce",
        icon: "ShoppingBag",
        description: `Design-forward online stores for ${region} brands selling directly to consumers. Custom product pages, subscription flows, and brand storytelling on Webflow.`,
        color: "#DEDA8D",
      },
      {
        name: "Professional Services",
        icon: "Briefcase",
        description: `Law firms, consulting practices, and financial advisors across ${locality}. Credibility-first sites that generate qualified inbound leads through SEO and content.`,
        color: "#71CFA3",
      },
    ],
    faqAdditions: (locality, region) => [
      {
        category: "webflow" as const,
        question: "Can Webflow integrate with HubSpot, Segment, or Salesforce?",
        answer: `Yes. Webflow integrates natively with HubSpot forms and tracking, and connects to Segment, Salesforce, and virtually any marketing automation platform through native integrations, Zapier, or custom API connections. For ${region} SaaS companies, this means your marketing site feeds leads directly into your CRM and analytics stack without engineering involvement.`,
      },
      {
        category: "webflow" as const,
        question: "Is Webflow suitable for SaaS product marketing sites?",
        answer: `Webflow is the platform of choice for SaaS marketing sites. Companies like Jasper, Lattice, and Dropbox use Webflow for their marketing pages. It lets your marketing team ship landing pages, case studies, and feature announcements without engineering tickets — while maintaining design consistency and brand standards across every page.`,
      },
      {
        category: "process" as const,
        question: `Can your team work alongside our in-house engineers in ${locality}?`,
        answer: `Absolutely. We regularly collaborate with in-house engineering teams across ${region}. We own the marketing site in Webflow while your engineers focus on the product. We handle the design system, CMS architecture, and marketing integrations — and we document everything so your team can maintain and extend the site independently.`,
      },
    ],
    platformComparisonExtras: [],
    webflowServiceOverrides: {
      "webflow-development":
        "Your Webflow site, built with clean class naming, responsive layouts, accessible markup, and performance scores above 95. Every build includes HubSpot or CRM integration, analytics setup, conversion tracking, and CMS training for your marketing team.",
      "webflow-cms":
        "From resource libraries to changelog feeds to multi-author blogs, we design CMS structures that let your marketing team ship content without engineering tickets. Dynamic pages, conditional visibility, and API-connected collections — all without plugins.",
      "webflow-migration":
        "We handle the full migration from WordPress or any legacy platform: content transfer, 301 redirect mapping, SEO equity preservation, and integration reconnection. Your marketing team gets a modern CMS they'll actually use, and your engineers stop fielding Jira tickets for copy changes.",
    },
    migrationPricePerPage: { straightforward: 325, animated: 495, brandElevation: 800 },
  },

  /* ════════════════════════════════════════════════════
   * US SOUTHWEST — AZ, NV, TX, ID, MT, HI, FL
   * ════════════════════════════════════════════════════ */
  "us-southwest": {
    id: "us-southwest",
    defaultCurrency: currencies.USD,
    painPoints: [
      {
        title: "Cookie-cutter templates",
        description:
          "You deserve a site built for your brand, not recycled from a theme store. Your competitors are using the same templates — and your customers can tell.",
      },
      {
        title: "Developers who disappear",
        description:
          "You've been burned by freelancers who vanish mid-project and miss every deadline. You need a partner who shows up, communicates, and delivers.",
      },
      {
        title: "Sites that don't perform",
        description:
          "A beautiful website that doesn't rank on Google, doesn't generate leads, and doesn't grow your revenue is just an expensive business card.",
      },
      {
        title: "Agencies that don't get your market",
        description:
          "National agencies treat every market the same. They don't understand local search dynamics, seasonal patterns, or the industries that drive your region's economy.",
      },
      {
        title: "Still stuck on WordPress?",
        description:
          "Plugin updates, security patches, and slow load times — WordPress is costing you time, money, and rankings. There's a better way to build.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Discovery",
        description:
          "Your business, understood inside and out. A focused strategy session where we dig into your goals, audience, competitors, and what success looks like in your local market.",
      },
      {
        step: 2,
        title: "Design",
        description:
          "Your experience, mapped before a single pixel is placed. Wireframes, moodboards, and a full design system — all approved by you before a single line of code is written.",
      },
      {
        step: 3,
        title: "Build",
        description:
          "Your site, built right — in Webflow. Clean, semantic, performant development with CMS, animations, local SEO, Google Business Profile integration, and conversion tracking baked in.",
      },
      {
        step: 4,
        title: "Launch & Grow",
        description:
          "Your keys, handed over — with ongoing support. Full handoff, team training, and retainer options to help your site generate more leads and rank higher month after month.",
      },
    ],
    pricingTiers: (() => {
      const c = currencies.USD;
      return [
        {
          name: "Marketing Site",
          priceRange: priceRange(5000, 12000, c),
          description:
            "Perfect for local businesses that need a professional online presence that ranks in local search and converts visitors into customers.",
          includes: [
            "5–10 custom-designed pages",
            "Responsive design for all devices",
            "Basic CMS setup",
            "On-page SEO optimization",
            "Contact form integration",
            "30-day post-launch support",
          ],
          color: "#BCEFFF",
        },
        {
          name: "Growth Site",
          priceRange: priceRange(12000, 25000, c),
          description:
            "For businesses ready to use their website as a lead generation and growth engine with advanced features and integrations.",
          includes: [
            "10–20 custom-designed pages",
            "Advanced CMS architecture",
            "Custom animations & interactions",
            "Third-party integrations",
            "CRO-optimized layouts",
            "90-day post-launch support",
          ],
          color: "#F79C42",
          featured: true,
        },
        {
          name: "Enterprise / E-Commerce",
          priceRange: priceRange(25000, null, c),
          description:
            "Complex builds with e-commerce, multi-collection CMS, and enterprise-grade integrations for established businesses scaling online.",
          includes: [
            "Unlimited pages",
            "Webflow E-commerce setup",
            "Multi-collection CMS architecture",
            "API & automation integrations",
            "Performance monitoring dashboard",
            "Ongoing retainer support",
          ],
          color: "#C4EF7A",
        },
      ];
    })(),
    industries: (locality, region) => [
      {
        name: "Healthcare & Medical",
        icon: "Heart",
        description: `HIPAA-aware marketing sites, patient portals, and provider directories for ${locality}-area healthcare practices and medical groups looking to grow their patient base.`,
        color: "#BCEFFF",
      },
      {
        name: "Real Estate",
        icon: "Building",
        description: `Property showcase sites, IDX integrations, and lead generation platforms for ${region}'s competitive real estate market — from residential agents to commercial developers.`,
        color: "#F79C42",
      },
      {
        name: "Construction & Trades",
        icon: "Briefcase",
        description: `Portfolio-driven sites for contractors, builders, and trade professionals across ${region}. Showcase your work, generate quote requests, and rank in local search.`,
        color: "#FFDF40",
      },
      {
        name: "Hospitality & Tourism",
        icon: "Plane",
        description: `Booking-driven websites for hotels, resorts, restaurants, and tour operators across the ${locality} metro and greater ${region}. Designed for seasonal traffic patterns.`,
        color: "#C4EF7A",
      },
      {
        name: "Legal & Professional Services",
        icon: "Cpu",
        description: `Credibility-first websites for law firms, accounting practices, and consultants in ${locality}. Built to generate qualified inbound leads through search and content.`,
        color: "#71CFA3",
      },
      {
        name: "E-Commerce & Retail",
        icon: "ShoppingBag",
        description: `Design-forward online stores for ${region} brands ready to sell directly to customers with Webflow's native commerce platform and zero transaction fees.`,
        color: "#DEDA8D",
      },
    ],
    faqAdditions: (locality, region) => [
      {
        category: "local" as const,
        question: `How do you help ${region} businesses rank in local search?`,
        answer: `Local SEO is built into every project. We optimize your site for "${locality}" and surrounding area keywords, implement LocalBusiness schema markup, set up and optimize your Google Business Profile, and build location-specific landing pages for your service areas. Our ${region} clients see an average 47% traffic increase within six months.`,
      },
      {
        category: "process" as const,
        question: "Can you build a site that generates leads for a seasonal business?",
        answer: `Yes. Many of our clients operate in seasonal industries — tourism, real estate, outdoor services, and events. We design conversion funnels that capture demand during peak season and nurture leads during off-season with content, email capture, and retargeting infrastructure built into your Webflow site.`,
      },
      {
        category: "general" as const,
        question: "Do you work with businesses outside major metro areas?",
        answer: `Absolutely. We work with businesses across ${region} — from ${locality} to smaller markets like ${region === "Arizona" ? "Flagstaff, Prescott, and Yuma" : region === "Texas" ? "Waco, Lubbock, and Amarillo" : region === "Florida" ? "Naples, Sarasota, and Pensacola" : "rural and suburban communities throughout the region"}. Local businesses in smaller markets often see even faster SEO results because there's less competition.`,
      },
    ],
    platformComparisonExtras: [],
    webflowServiceOverrides: {
      "webflow-development":
        "Your Webflow site, built with clean class naming, responsive layouts, accessible markup, and performance scores above 95. Every build includes local SEO optimization, Google Business Profile integration, analytics setup, and CMS training for your team.",
      "webflow-cms":
        "From blog systems to service-area pages to portfolio galleries, we design CMS structures that are intuitive for your team and powerful for local SEO. Dynamic pages, location-based filtering, and conditional visibility — all without plugins or third-party dependencies.",
    },
    migrationPricePerPage: { straightforward: 325, animated: 495, brandElevation: 800 },
  },

  /* ════════════════════════════════════════════════════
   * CANADA — ON, Vancouver, Canada, agency-ca, expert-ca
   * ════════════════════════════════════════════════════ */
  canada: {
    id: "canada",
    defaultCurrency: currencies.CAD,
    painPoints: [
      {
        title: "Outsourcing to US agencies",
        description:
          "You're paying US-dollar rates for an agency that doesn't understand the Canadian market, Canadian privacy law, or bilingual requirements. There's a better option.",
      },
      {
        title: "Bilingual isn't optional",
        description:
          "If you serve customers in Quebec or do business with the federal government, your site needs French and English. Most agencies treat bilingual as an afterthought.",
      },
      {
        title: "PIPEDA compliance gaps",
        description:
          "Canada's privacy law requires proper consent mechanisms, cookie policies, and data handling disclosures. Your current site probably doesn't comply — and that's a liability.",
      },
      {
        title: "Developers who disappear",
        description:
          "You've been burned by freelancers or offshore teams who vanish mid-project. You need a partner who communicates, delivers on time, and understands your market.",
      },
      {
        title: "Still running on WordPress?",
        description:
          "Plugin conflicts, security patches, and a CMS your team won't touch. WordPress is holding back your digital presence while your competitors move to modern platforms.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Discovery & Strategy",
        description:
          "We dig into your business goals, target audience (English, French, or both), competitive landscape, and what success looks like in the Canadian market. We audit your existing site and identify opportunities.",
      },
      {
        step: 2,
        title: "Design",
        description:
          "Wireframes, moodboards, and a complete design system in Figma — designed to accommodate bilingual content where needed. Every layout approved by your team before development starts.",
      },
      {
        step: 3,
        title: "Build",
        description:
          "Clean Webflow development with CMS architecture designed for bilingual content management, PIPEDA-compliant forms and cookie consent, analytics setup, and SEO optimization for Canadian search.",
      },
      {
        step: 4,
        title: "Launch & Grow",
        description:
          "Full handoff with CMS training for your team, conversion tracking verification, and ongoing support. We monitor performance and help you grow your organic presence in the Canadian market.",
      },
    ],
    pricingTiers: (() => {
      const c = currencies.CAD;
      return [
        {
          name: "Marketing Site",
          priceRange: priceRange(localizePrice(5000, c), localizePrice(12000, c), c),
          description:
            "For Canadian businesses that need a professional, bilingual-ready web presence that ranks in local search and converts visitors into customers.",
          includes: [
            "5–10 custom-designed pages",
            "Responsive design for all devices",
            "Bilingual-ready CMS setup",
            "PIPEDA-compliant forms & consent",
            "On-page SEO optimization",
            "30-day post-launch support",
          ],
          color: "#BCEFFF",
        },
        {
          name: "Growth Site",
          priceRange: priceRange(localizePrice(12000, c), localizePrice(25000, c), c),
          description:
            "For businesses ready to turn their website into a growth engine with bilingual content, advanced integrations, and conversion optimization.",
          includes: [
            "10–20 custom-designed pages",
            "Full bilingual CMS architecture",
            "Custom animations & interactions",
            "CRM & marketing automation integration",
            "CRO-optimized layouts",
            "90-day post-launch support",
          ],
          color: "#F79C42",
          featured: true,
        },
        {
          name: "Enterprise / E-Commerce",
          priceRange: priceRange(localizePrice(25000, c), null, c),
          description:
            "Complex builds with e-commerce, bilingual CMS, multi-currency support, and enterprise-grade integrations for established Canadian businesses.",
          includes: [
            "Unlimited pages",
            "Webflow E-commerce with CAD pricing",
            "Multi-collection bilingual CMS",
            "API & automation integrations",
            "Performance monitoring dashboard",
            "Ongoing retainer support",
          ],
          color: "#C4EF7A",
        },
      ];
    })(),
    industries: (locality, region) => [
      {
        name: "Fintech & Financial Services",
        icon: "Building",
        description: `Trust-building websites for Canadian fintech startups, banks, and insurance companies. Designed to convey credibility and comply with Canadian financial disclosure requirements.`,
        color: "#F79C42",
      },
      {
        name: "Mining & Natural Resources",
        icon: "Cpu",
        description: `Corporate sites and investor portals for ${region}'s mining, energy, and resource companies. Showcase projects, ESG commitments, and investor relations with authority.`,
        color: "#C4EF7A",
      },
      {
        name: "Cannabis & Regulated Industries",
        icon: "Briefcase",
        description: `Compliant, brand-forward websites for Canadian cannabis companies and regulated industries. Age-gating, compliance pages, and e-commerce built on Webflow.`,
        color: "#71CFA3",
      },
      {
        name: "Real Estate & PropTech",
        icon: "Building",
        description: `Property showcase sites and lead generation platforms for ${locality}'s competitive real estate market — from residential brokerages to commercial developers.`,
        color: "#BCEFFF",
      },
      {
        name: "Technology & SaaS",
        icon: "Cpu",
        description: `High-converting marketing sites for Canadian tech companies and SaaS startups. Built to integrate with your CRM, support bilingual content, and convert trial signups.`,
        color: "#FFDF40",
      },
      {
        name: "Professional Services",
        icon: "Briefcase",
        description: `Law firms, accounting practices, and consultants across ${locality}. Bilingual-ready sites that generate qualified inbound leads through Canadian search.`,
        color: "#DEDA8D",
      },
    ],
    faqAdditions: (locality, region) => [
      {
        category: "webflow" as const,
        question: "Can Webflow handle bilingual French and English websites?",
        answer: `Yes. We build bilingual Webflow sites using CMS-powered language switching that lets your team manage French and English content independently. Each language version gets its own URL path for proper SEO indexing. This is critical for ${region} businesses that serve Quebec or work with federal government contracts.`,
      },
      {
        category: "pricing" as const,
        question: "How does pricing work in Canadian dollars?",
        answer: `All our pricing is quoted in Canadian dollars (CAD). We don't charge in USD with an exchange rate surprise at invoicing — the price you see is the price you pay. Payment plans are available for larger projects.`,
      },
      {
        category: "general" as const,
        question: "Are your websites PIPEDA compliant?",
        answer: `Every site we build for Canadian businesses includes PIPEDA-compliant cookie consent mechanisms, privacy policy templates, data handling disclosures, and form consent checkboxes. We also integrate with privacy-respecting analytics tools and ensure your contact forms handle personal information in accordance with Canadian privacy law.`,
      },
      {
        category: "local" as const,
        question: `Why choose a Canadian Webflow agency over a US-based one?`,
        answer: `A Canadian agency understands your market — bilingual requirements, PIPEDA compliance, Canadian search behavior, and the industries that drive ${region}'s economy. We quote in CAD, work in your timezone, and have a portfolio of Canadian clients. You get local expertise without the cross-border complexity.`,
      },
    ],
    platformComparisonExtras: [
      {
        feature: "Bilingual content management",
        webflow: "CMS-powered language switching",
        wordpress: "WPML plugin ($49+/yr)",
        customCode: "Manual implementation",
      },
    ],
    webflowServiceOverrides: {
      "webflow-development":
        "Your Webflow site, built with clean class naming, responsive layouts, accessible markup, and performance scores above 95. Every build includes bilingual CMS architecture, PIPEDA-compliant forms, analytics setup, and CMS training for your team.",
      "webflow-cms":
        "From bilingual blog systems to resource libraries, we design CMS structures that let your team manage French and English content independently. Dynamic pages, language-aware filtering, and conditional visibility — all without plugins.",
    },
    migrationPricePerPage: {
      straightforward: localizePrice(325, currencies.CAD),
      animated: localizePrice(495, currencies.CAD),
      brandElevation: localizePrice(800, currencies.CAD),
    },
  },

  /* ════════════════════════════════════════════════════
   * EUROPE NORTH — Norway, Sweden
   * ════════════════════════════════════════════════════ */
  "europe-north": {
    id: "europe-north",
    defaultCurrency: currencies.NOK,
    painPoints: [
      {
        title: "Design standards are higher here",
        description:
          "Scandinavian audiences expect clean, minimal, thoughtfully crafted digital experiences. A generic template won't cut it in a market that values design quality above all.",
      },
      {
        title: "Accessibility isn't optional",
        description:
          "WCAG compliance is increasingly enforced across the Nordics. Your website needs to meet accessibility standards — not as an afterthought, but as a core requirement.",
      },
      {
        title: "GDPR violations are expensive",
        description:
          "European regulators are issuing record fines for non-compliant websites. Your cookie consent, data handling, and analytics setup need to be bulletproof.",
      },
      {
        title: "Offshore agencies don't understand your market",
        description:
          "Hiring a cheap overseas agency means missed cultural nuances, timezone headaches, and a site that feels foreign to your Scandinavian audience.",
      },
      {
        title: "WordPress is a maintenance burden",
        description:
          "Plugin updates, security patches, and hosting management — WordPress requires constant attention. Webflow eliminates the operational overhead so you can focus on business.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Discovery & Strategy",
        description:
          "We research your market, competitors, and target audience. We audit your existing digital presence and define a strategy that aligns with Scandinavian design expectations and your business goals.",
      },
      {
        step: 2,
        title: "Design",
        description:
          "Clean, minimal design rooted in Scandinavian aesthetics. Full design system in Figma with accessibility built in from the start — WCAG 2.1 AA compliant color contrast, focus states, and semantic structure.",
      },
      {
        step: 3,
        title: "Build",
        description:
          "Performant Webflow development with GDPR-compliant cookie consent, privacy-respecting analytics, accessible markup, and CMS architecture that supports multilingual content if needed.",
      },
      {
        step: 4,
        title: "Launch & Grow",
        description:
          "Full handoff with team training, GDPR documentation, and ongoing support. We monitor Core Web Vitals and search performance to help your site grow in the Nordic market.",
      },
    ],
    pricingTiers: (() => {
      // Use EUR for display simplicity in the tier definitions, individual domains override
      const c = currencies.EUR;
      return [
        {
          name: "Marketing Site",
          priceRange: priceRange(localizePrice(5000, c), localizePrice(12000, c), c),
          description:
            "For Nordic businesses that need a professional, accessible web presence that reflects Scandinavian design standards and meets GDPR requirements.",
          includes: [
            "5–10 custom-designed pages",
            "WCAG 2.1 AA accessibility",
            "GDPR-compliant cookie consent",
            "Privacy-respecting analytics",
            "On-page SEO optimization",
            "30-day post-launch support",
          ],
          color: "#BCEFFF",
        },
        {
          name: "Growth Site",
          priceRange: priceRange(localizePrice(12000, c), localizePrice(25000, c), c),
          description:
            "For companies ready to scale with advanced CMS architecture, integrations, and conversion optimization — all built to Nordic standards.",
          includes: [
            "10–20 custom-designed pages",
            "Advanced CMS architecture",
            "Custom animations & interactions",
            "CRM & marketing automation integration",
            "GDPR-compliant forms and data handling",
            "90-day post-launch support",
          ],
          color: "#F79C42",
          featured: true,
        },
        {
          name: "Enterprise / E-Commerce",
          priceRange: priceRange(localizePrice(25000, c), null, c),
          description:
            "Complex builds with e-commerce, multilingual CMS, and enterprise-grade integrations for established Nordic businesses scaling digitally.",
          includes: [
            "Unlimited pages",
            "Webflow E-commerce with local currency",
            "Multi-collection CMS architecture",
            "API & automation integrations",
            "Accessibility audit & certification",
            "Ongoing retainer support",
          ],
          color: "#C4EF7A",
        },
      ];
    })(),
    industries: (locality, region) => [
      {
        name: "Maritime & Shipping",
        icon: "Plane",
        description: `Corporate sites and digital platforms for ${region}'s maritime industry. Showcase fleet capabilities, sustainability commitments, and investor relations with authority.`,
        color: "#BCEFFF",
      },
      {
        name: "Energy & Renewables",
        icon: "Cpu",
        description: `Brand-forward sites for ${region}'s energy sector — from oil and gas to wind and solar. Communicate ESG strategy, project portfolios, and corporate responsibility.`,
        color: "#C4EF7A",
      },
      {
        name: "SaaS & Startups",
        icon: "Cpu",
        description: `High-converting marketing sites for ${locality}'s growing tech startup ecosystem. Built to integrate with your stack and convert trial signups into paying customers.`,
        color: "#F79C42",
      },
      {
        name: "Architecture & Design",
        icon: "Briefcase",
        description: `Portfolio-driven sites for ${region}'s world-renowned architecture and design firms. Immersive project galleries, team profiles, and award showcases on Webflow.`,
        color: "#FFDF40",
      },
      {
        name: "Manufacturing & Industrial",
        icon: "Briefcase",
        description: `Corporate sites for ${region}'s manufacturing and industrial companies. Product catalogs, distributor portals, and recruitment pages built for B2B audiences.`,
        color: "#71CFA3",
      },
      {
        name: "Tourism & Hospitality",
        icon: "Plane",
        description: `Booking-driven sites for hotels, tour operators, and experience providers across ${region}. Designed to capture seasonal demand and convert international visitors.`,
        color: "#DEDA8D",
      },
    ],
    faqAdditions: (locality, region) => [
      {
        category: "general" as const,
        question: "Is Webflow GDPR compliant?",
        answer: `Webflow itself is GDPR-ready with data processing agreements, EU data residency options, and built-in tools for managing user data. We go further by implementing cookie consent banners that meet ePrivacy Directive requirements, configuring privacy-respecting analytics (like Plausible or cookieless GA4), and ensuring all forms include proper consent mechanisms and data handling disclosures.`,
      },
      {
        category: "webflow" as const,
        question: "Can you build a website that meets WCAG 2.1 AA standards?",
        answer: `Yes. Accessibility is a core part of our development process, not a retrofit. Every site we build includes semantic HTML structure, proper heading hierarchy, keyboard navigation, focus indicators, sufficient color contrast, alt text for images, and ARIA labels where needed. We test with screen readers and automated accessibility tools before launch.`,
      },
      {
        category: "local" as const,
        question: `Why choose a Webflow agency that understands the ${region} market?`,
        answer: `${region} audiences have high expectations for design quality, accessibility, and privacy. A generic international agency won't understand the cultural nuances of Scandinavian digital design or the regulatory requirements of operating in the Nordics. We build sites that meet these standards while connecting with your local audience.`,
      },
    ],
    platformComparisonExtras: [
      {
        feature: "GDPR compliance tools",
        webflow: "Built-in + integrations",
        wordpress: "Plugin required (CookieYes, etc.)",
        customCode: "Manual implementation",
      },
      {
        feature: "Accessibility (WCAG 2.1)",
        webflow: "Semantic output + audit tools",
        wordpress: "Varies by theme",
        customCode: "Depends on developer",
      },
    ],
    webflowServiceOverrides: {
      "webflow-development":
        "Your Webflow site, built with clean semantic markup, WCAG 2.1 AA accessibility, responsive layouts, and performance scores above 95. Every build includes GDPR-compliant analytics, cookie consent, and CMS training for your team.",
    },
    migrationPricePerPage: {
      straightforward: localizePrice(325, currencies.EUR),
      animated: localizePrice(495, currencies.EUR),
      brandElevation: localizePrice(800, currencies.EUR),
    },
  },

  /* ════════════════════════════════════════════════════
   * EUROPE WEST — CH, FR, BE, NL, agency-eu, expert-eu
   * ════════════════════════════════════════════════════ */
  "europe-west": {
    id: "europe-west",
    defaultCurrency: currencies.EUR,
    painPoints: [
      {
        title: "Multilingual is a requirement, not a feature",
        description:
          "Your customers speak French, German, Dutch, or English — sometimes all four. Most agencies treat multilingual as a bolt-on. We build it into the architecture from day one.",
      },
      {
        title: "GDPR is non-negotiable",
        description:
          "European regulators are issuing record fines for non-compliant websites. Your cookie consent, analytics, and data handling need to be bulletproof — not an afterthought.",
      },
      {
        title: "Design that matches European standards",
        description:
          "European businesses expect sophisticated, refined digital experiences. A template-based site signals a lack of investment in your brand and undermines credibility.",
      },
      {
        title: "Agencies that don't understand your market",
        description:
          "Hiring a US or UK agency means cultural blind spots, timezone friction, and a site that doesn't resonate with your European audience.",
      },
      {
        title: "WordPress is an operational liability",
        description:
          "Plugin vulnerabilities, constant updates, and a CMS that makes multilingual content management painful. Webflow eliminates the maintenance burden entirely.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Discovery & Strategy",
        description:
          "We analyze your market positioning, language requirements, competitive landscape, and digital goals. We define a content architecture that supports multilingual audiences and complies with European regulations.",
      },
      {
        step: 2,
        title: "Design",
        description:
          "Sophisticated design rooted in European aesthetics. Full design system in Figma with layouts that accommodate varying text lengths across languages — German text runs 30% longer than English.",
      },
      {
        step: 3,
        title: "Build",
        description:
          "Webflow development with multilingual CMS architecture, GDPR-compliant cookie consent and analytics, accessible markup, and integrations with European payment processors and marketing tools.",
      },
      {
        step: 4,
        title: "Launch & Grow",
        description:
          "Full handoff with multilingual CMS training, GDPR compliance documentation, and ongoing support. We monitor performance across all language versions and optimize for European search engines.",
      },
    ],
    pricingTiers: (() => {
      const c = currencies.EUR;
      return [
        {
          name: "Marketing Site",
          priceRange: priceRange(localizePrice(5000, c), localizePrice(12000, c), c),
          description:
            "For European businesses that need a professional, multilingual-ready web presence that meets GDPR requirements and reflects continental design standards.",
          includes: [
            "5–10 custom-designed pages",
            "Multilingual-ready CMS architecture",
            "GDPR-compliant cookie consent & forms",
            "Privacy-respecting analytics",
            "On-page SEO optimization",
            "30-day post-launch support",
          ],
          color: "#BCEFFF",
        },
        {
          name: "Growth Site",
          priceRange: priceRange(localizePrice(12000, c), localizePrice(25000, c), c),
          description:
            "For companies scaling across European markets with multilingual content, advanced integrations, and conversion optimization.",
          includes: [
            "10–20 custom-designed pages",
            "Full multilingual CMS (2–4 languages)",
            "Custom animations & interactions",
            "CRM & marketing automation integration",
            "CRO-optimized layouts",
            "90-day post-launch support",
          ],
          color: "#F79C42",
          featured: true,
        },
        {
          name: "Enterprise / E-Commerce",
          priceRange: priceRange(localizePrice(25000, c), null, c),
          description:
            "Complex multilingual builds with e-commerce, multi-currency support, and enterprise-grade integrations for established European businesses.",
          includes: [
            "Unlimited pages",
            "Webflow E-commerce with EUR pricing",
            "Multi-language, multi-collection CMS",
            "API & automation integrations",
            "GDPR audit & compliance documentation",
            "Ongoing retainer support",
          ],
          color: "#C4EF7A",
        },
      ];
    })(),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    industries: (locality, region) => [
      {
        name: "Fintech & Banking",
        icon: "Building",
        description: `Trust-first websites for European fintech startups and financial institutions. Designed to convey regulatory credibility and convert in a compliance-heavy industry.`,
        color: "#F79C42",
      },
      {
        name: "Luxury & Fashion",
        icon: "ShoppingBag",
        description: `Immersive, design-forward digital experiences for European luxury and fashion brands. Full-bleed imagery, editorial layouts, and e-commerce that matches the craftsmanship of your products.`,
        color: "#DEDA8D",
      },
      {
        name: "Manufacturing & Industrial",
        icon: "Briefcase",
        description: `Corporate sites and product catalogs for European manufacturers. Multi-language support, distributor portals, and technical documentation built on Webflow's CMS.`,
        color: "#71CFA3",
      },
      {
        name: "Pharma & Life Sciences",
        icon: "Heart",
        description: `Compliance-aware websites for pharmaceutical companies and life sciences organizations across Europe. Clinical trial pages, regulatory documentation, and investor relations.`,
        color: "#BCEFFF",
      },
      {
        name: "EU Institutions & NGOs",
        icon: "Cpu",
        description: `Multilingual, accessible websites for organizations serving European institutions, NGOs, and public sector clients. Built to meet WCAG standards and support 4+ languages.`,
        color: "#FFDF40",
      },
      {
        name: "Professional Services",
        icon: "Briefcase",
        description: `Law firms, consulting practices, and advisory firms across ${locality}. Multilingual sites that generate qualified inbound leads across European markets.`,
        color: "#C4EF7A",
      },
    ],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    faqAdditions: (locality, region) => [
      {
        category: "webflow" as const,
        question: "Can Webflow handle 3 or more languages?",
        answer: `Yes. We build multilingual Webflow sites using CMS-powered language management. Each language gets its own content entries and URL paths (e.g., /fr/, /de/, /nl/) for proper SEO indexing. Your team can manage content in each language independently through Webflow's visual editor. We've built sites supporting up to 5 languages simultaneously.`,
      },
      {
        category: "general" as const,
        question: "How do you ensure GDPR compliance on Webflow sites?",
        answer: `GDPR compliance is standard on every European project. We implement cookie consent management (with prior consent for non-essential cookies), privacy-respecting analytics (Plausible, Fathom, or cookieless GA4), proper data processing consent on forms, privacy policy and cookie policy pages, and data subject request handling. We also provide compliance documentation for your records.`,
      },
      {
        category: "pricing" as const,
        question: "Do you charge in euros?",
        answer: `Yes. All pricing for European clients is quoted and invoiced in euros (EUR). Swiss clients can also be invoiced in CHF. No exchange rate surprises — the price quoted is the price paid.`,
      },
      {
        category: "process" as const,
        question: "How do you handle text expansion across languages?",
        answer: `German text runs approximately 30% longer than English. French is about 15% longer. We design layouts from the start to accommodate text expansion — flexible containers, responsive typography, and CMS structures that handle varying content lengths gracefully. This prevents layout breaks when your team adds translations.`,
      },
    ],
    platformComparisonExtras: [
      {
        feature: "GDPR compliance tools",
        webflow: "Built-in + integrations",
        wordpress: "Plugin required (CookieYes, etc.)",
        customCode: "Manual implementation",
      },
      {
        feature: "Multilingual content management",
        webflow: "CMS-powered language switching",
        wordpress: "WPML plugin ($49+/yr)",
        customCode: "Manual implementation",
      },
    ],
    webflowServiceOverrides: {
      "webflow-development":
        "Your Webflow site, built with clean semantic markup, multilingual CMS architecture, GDPR-compliant analytics, responsive layouts, and performance scores above 95. Every build includes cookie consent, privacy-respecting tracking, and CMS training for your team.",
      "webflow-cms":
        "From multilingual blog systems to product catalogs, we design CMS structures that let your team manage content in multiple languages independently. Dynamic pages, language-aware filtering, and conditional visibility — all without plugins.",
    },
    migrationPricePerPage: {
      straightforward: localizePrice(325, currencies.EUR),
      animated: localizePrice(495, currencies.EUR),
      brandElevation: localizePrice(800, currencies.EUR),
    },
  },

  /* ════════════════════════════════════════════════════
   * UK — agency-uk
   * ════════════════════════════════════════════════════ */
  uk: {
    id: "uk",
    defaultCurrency: currencies.GBP,
    painPoints: [
      {
        title: "London's agency market is oversaturated",
        description:
          "There are thousands of web agencies in the UK — most of them generalists. Finding a specialist Webflow partner who actually delivers results is harder than it should be.",
      },
      {
        title: "UK GDPR compliance isn't optional",
        description:
          "Post-Brexit, the UK has its own data protection regime (UK GDPR). Your website needs proper cookie consent, data handling disclosures, and ICO-compliant privacy practices.",
      },
      {
        title: "Your site doesn't reflect your brand",
        description:
          "British businesses expect polished, professional digital experiences. A template site signals a lack of investment and undermines the credibility you've spent years building.",
      },
      {
        title: "Agencies that over-promise and under-deliver",
        description:
          "You've worked with agencies that talk a big game in the pitch and then hand your project to juniors. You need a partner who does the work, not just sells it.",
      },
      {
        title: "Still on WordPress?",
        description:
          "Plugin bloat, security vulnerabilities, and a CMS that requires developer intervention for basic updates. WordPress is draining your budget and your patience.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Discovery & Strategy",
        description:
          "We dig into your business, brand positioning, competitive landscape, and what success looks like in the UK market. We audit your current site and identify what's working, what's not, and where the opportunities are.",
      },
      {
        step: 2,
        title: "Design",
        description:
          "Full design system in Figma — refined, brand-aligned, and built for the standards British audiences expect. Wireframes and visual design approved by your team before a single line of code is written.",
      },
      {
        step: 3,
        title: "Build",
        description:
          "Clean Webflow development with UK GDPR-compliant cookie consent, privacy-respecting analytics, accessible markup, and integrations with UK payment processors and marketing platforms.",
      },
      {
        step: 4,
        title: "Launch & Grow",
        description:
          "Full handoff with CMS training, ICO compliance documentation, and ongoing retainer support. We monitor Core Web Vitals and search performance to ensure long-term growth in UK search.",
      },
    ],
    pricingTiers: (() => {
      const c = currencies.GBP;
      return [
        {
          name: "Marketing Site",
          priceRange: priceRange(localizePrice(5000, c), localizePrice(12000, c), c),
          description:
            "For UK businesses that need a polished web presence that ranks, converts, and reflects the credibility of your brand.",
          includes: [
            "5–10 custom-designed pages",
            "Responsive design for all devices",
            "UK GDPR-compliant cookie consent",
            "Privacy-respecting analytics",
            "On-page SEO optimization",
            "30-day post-launch support",
          ],
          color: "#BCEFFF",
        },
        {
          name: "Growth Site",
          priceRange: priceRange(localizePrice(12000, c), localizePrice(25000, c), c),
          description:
            "For UK companies ready to turn their website into a lead generation engine with advanced CMS, integrations, and conversion optimization.",
          includes: [
            "10–20 custom-designed pages",
            "Advanced CMS architecture",
            "Custom animations & interactions",
            "CRM & marketing automation integration",
            "CRO-optimized layouts",
            "90-day post-launch support",
          ],
          color: "#F79C42",
          featured: true,
        },
        {
          name: "Enterprise / E-Commerce",
          priceRange: priceRange(localizePrice(25000, c), null, c),
          description:
            "Complex builds with e-commerce in GBP, multi-collection CMS, and enterprise-grade integrations for established UK businesses.",
          includes: [
            "Unlimited pages",
            "Webflow E-commerce with GBP pricing",
            "Multi-collection CMS architecture",
            "API & automation integrations",
            "UK GDPR compliance documentation",
            "Ongoing retainer support",
          ],
          color: "#C4EF7A",
        },
      ];
    })(),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    industries: (locality, region) => [
      {
        name: "Fintech",
        icon: "Building",
        description: `Trust-building websites for London's fintech ecosystem. From challenger banks to payment platforms — designed to convert in a market where credibility is everything.`,
        color: "#F79C42",
      },
      {
        name: "Creative & Media",
        icon: "Briefcase",
        description: `Portfolio-driven sites for UK creative agencies, production companies, and media brands. Showcase work beautifully with immersive galleries and case studies on Webflow.`,
        color: "#FFDF40",
      },
      {
        name: "Legal & Professional Services",
        icon: "Briefcase",
        description: `Credibility-first websites for City law firms, accounting practices, and management consultancies. Designed to generate qualified inbound leads through UK search.`,
        color: "#71CFA3",
      },
      {
        name: "E-Commerce & DTC",
        icon: "ShoppingBag",
        description: `Design-forward online stores for British brands selling directly to consumers. GBP pricing, Royal Mail integrations, and brand storytelling on Webflow.`,
        color: "#DEDA8D",
      },
      {
        name: "PropTech & Real Estate",
        icon: "Building",
        description: `Property showcase sites and lead generation platforms for London and UK-wide real estate companies, property developers, and PropTech startups.`,
        color: "#BCEFFF",
      },
      {
        name: "EdTech",
        icon: "Cpu",
        description: `Enrollment-driving sites for UK EdTech companies, online course platforms, and educational institutions. Membership areas, resource libraries, and student portals.`,
        color: "#C4EF7A",
      },
    ],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    faqAdditions: (locality, region) => [
      {
        category: "pricing" as const,
        question: "How much does a Webflow website cost in the UK?",
        answer: `A professionally built Webflow website in the UK typically ranges from £4,000 to £40,000+, depending on scope and complexity. A marketing site with 5–10 pages starts around £4,000–£9,500. Growth sites with advanced CMS and integrations run £9,500–£20,000. Enterprise and e-commerce builds start at £20,000. All pricing is quoted and invoiced in GBP.`,
      },
      {
        category: "general" as const,
        question: "Are your websites UK GDPR compliant?",
        answer: `Every site we build includes ICO-compliant cookie consent, privacy policy implementation, data handling disclosures, and consent mechanisms on all forms. We integrate with privacy-respecting analytics tools and ensure your site meets UK GDPR and the Privacy and Electronic Communications Regulations (PECR).`,
      },
      {
        category: "local" as const,
        question: "Why choose a Webflow specialist over a generalist UK agency?",
        answer: `Generalist agencies spread their expertise across WordPress, Shopify, Squarespace, and custom builds — and they're mediocre at all of them. We focus exclusively on Webflow, which means faster builds, cleaner code, better performance, and a team that knows the platform inside and out. Our Webflow specialization lets us deliver in 4–8 weeks what generalist agencies take 12–16 weeks to produce.`,
      },
    ],
    platformComparisonExtras: [
      {
        feature: "UK GDPR compliance",
        webflow: "Built-in + integrations",
        wordpress: "Plugin required",
        customCode: "Manual implementation",
      },
    ],
    webflowServiceOverrides: {
      "webflow-development":
        "Your Webflow site, built with clean semantic markup, UK GDPR-compliant analytics, responsive layouts, and performance scores above 95. Every build includes ICO-compliant cookie consent, accessible markup, and CMS training for your team.",
    },
    migrationPricePerPage: {
      straightforward: localizePrice(325, currencies.GBP),
      animated: localizePrice(495, currencies.GBP),
      brandElevation: localizePrice(800, currencies.GBP),
    },
  },

  /* ════════════════════════════════════════════════════
   * ASIA-PACIFIC — SG, HK, NZ
   * ════════════════════════════════════════════════════ */
  "asia-pacific": {
    id: "asia-pacific",
    defaultCurrency: currencies.SGD,
    painPoints: [
      {
        title: "Timezone gaps with Western agencies",
        description:
          "Hiring a US or European agency means feedback cycles measured in days, not hours. You need a partner who overlaps with Asia-Pacific business hours and understands your pace.",
      },
      {
        title: "Mobile-first isn't optional",
        description:
          "Over 70% of web traffic in Asia-Pacific comes from mobile devices. If your site isn't designed mobile-first, you're losing the majority of your audience before they even see your content.",
      },
      {
        title: "Your site doesn't perform in APAC",
        description:
          "Slow load times in Singapore, Hong Kong, or Auckland because your site is hosted on US servers. CDN configuration and APAC-optimized hosting are table stakes, not extras.",
      },
      {
        title: "Template sites undermine credibility",
        description:
          "In competitive Asia-Pacific markets, a generic template site signals that you're not serious. Your website needs to match the sophistication of your business.",
      },
      {
        title: "WordPress is slowing you down",
        description:
          "Plugin conflicts, security vulnerabilities, and a CMS that doesn't support the speed your market demands. Modern businesses in the region are moving to faster platforms.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Discovery & Strategy",
        description:
          "We analyze your market positioning, target audience, competitive landscape, and digital goals. We audit your existing site's performance across APAC networks and identify opportunities for conversion and speed improvements.",
      },
      {
        step: 2,
        title: "Design",
        description:
          "Mobile-first design that prioritizes the way Asia-Pacific audiences actually browse. Full design system in Figma with responsive layouts optimized for the devices and screen sizes your customers use.",
      },
      {
        step: 3,
        title: "Build",
        description:
          "Performant Webflow development with CDN-optimized delivery across Asia-Pacific, mobile-first responsive layouts, fast-loading imagery, and CMS architecture that supports your content strategy.",
      },
      {
        step: 4,
        title: "Launch & Grow",
        description:
          "Full handoff with CMS training, performance monitoring focused on APAC load times, and ongoing support. We optimize for search engines relevant to your market — Google, as well as regional discovery platforms.",
      },
    ],
    pricingTiers: (() => {
      const c = currencies.SGD;
      return [
        {
          name: "Marketing Site",
          priceRange: priceRange(localizePrice(5000, c), localizePrice(12000, c), c),
          description:
            "For Asia-Pacific businesses that need a fast, mobile-first web presence that converts visitors in a mobile-dominant market.",
          includes: [
            "5–10 custom-designed pages",
            "Mobile-first responsive design",
            "APAC-optimized CDN delivery",
            "CMS setup for blog and content",
            "On-page SEO optimization",
            "30-day post-launch support",
          ],
          color: "#BCEFFF",
        },
        {
          name: "Growth Site",
          priceRange: priceRange(localizePrice(12000, c), localizePrice(25000, c), c),
          description:
            "For companies ready to scale across Asia-Pacific markets with advanced CMS, integrations, and mobile-optimized conversion funnels.",
          includes: [
            "10–20 custom-designed pages",
            "Advanced CMS architecture",
            "Custom animations & interactions",
            "CRM & marketing automation integration",
            "CRO-optimized mobile layouts",
            "90-day post-launch support",
          ],
          color: "#F79C42",
          featured: true,
        },
        {
          name: "Enterprise / E-Commerce",
          priceRange: priceRange(localizePrice(25000, c), null, c),
          description:
            "Complex builds with e-commerce, multi-currency support, and enterprise-grade integrations for established Asia-Pacific businesses.",
          includes: [
            "Unlimited pages",
            "Webflow E-commerce with local currency",
            "Multi-collection CMS architecture",
            "API & automation integrations",
            "APAC performance monitoring",
            "Ongoing retainer support",
          ],
          color: "#C4EF7A",
        },
      ];
    })(),
    industries: (locality, region) => [
      {
        name: "Fintech & Financial Services",
        icon: "Building",
        description: `Trust-building websites for ${region}'s fintech ecosystem. From digital banks to payment platforms — designed to convert in one of the world's most competitive financial markets.`,
        color: "#F79C42",
      },
      {
        name: "Logistics & Trade",
        icon: "Plane",
        description: `Corporate sites and customer portals for ${region}'s logistics, shipping, and trade companies. Showcase capabilities, track records, and service networks across the region.`,
        color: "#BCEFFF",
      },
      {
        name: "Luxury & Retail",
        icon: "ShoppingBag",
        description: `Design-forward e-commerce and brand experiences for luxury retailers in ${locality}. Immersive product showcases, editorial content, and seamless mobile shopping on Webflow.`,
        color: "#DEDA8D",
      },
      {
        name: "F&B & Hospitality",
        icon: "Plane",
        description: `Booking-driven websites for restaurants, hotels, and F&B brands across ${region}. Mobile-first design with reservation integrations and location-based content.`,
        color: "#FFDF40",
      },
      {
        name: "Professional Services",
        icon: "Briefcase",
        description: `Credibility-first websites for law firms, consulting practices, and advisory firms in ${locality}. Built to generate qualified inbound leads from regional and international clients.`,
        color: "#71CFA3",
      },
      {
        name: "EdTech & E-Learning",
        icon: "Cpu",
        description: `Enrollment-driving sites for ${region}'s EdTech companies and online learning platforms. Membership areas, course catalogs, and student portals built on Webflow.`,
        color: "#C4EF7A",
      },
    ],
    faqAdditions: (locality, region) => [
      {
        category: "process" as const,
        question: "What timezone do you work in?",
        answer: `We work across timezones and maintain significant overlap with Asia-Pacific business hours. For ${region} clients, we schedule calls, reviews, and handoffs during your working hours. Most communication happens asynchronously through structured updates, so timezone differences don't slow down your project.`,
      },
      {
        category: "webflow" as const,
        question: "Will my Webflow site load fast in Asia-Pacific?",
        answer: `Yes. Webflow sites are served via a global CDN with edge locations across Asia-Pacific, including Singapore, Hong Kong, Sydney, and Tokyo. Combined with our performance optimization practices — compressed images, minimal JavaScript, and efficient code — your site loads in under 2 seconds for visitors across the region.`,
      },
      {
        category: "local" as const,
        question: `Why choose a Webflow agency that understands the ${region} market?`,
        answer: `Asia-Pacific is a mobile-first market with unique browsing patterns, high design expectations, and specific performance requirements. A Western agency building for desktop-first audiences won't deliver the mobile-optimized, fast-loading experience your ${locality} customers expect. We build sites optimized for how people actually browse in this region.`,
      },
    ],
    platformComparisonExtras: [
      {
        feature: "APAC CDN performance",
        webflow: "Edge locations across APAC",
        wordpress: "Depends on hosting provider",
        customCode: "Depends on infrastructure",
      },
    ],
    webflowServiceOverrides: {
      "webflow-development":
        "Your Webflow site, built mobile-first with clean semantic markup, APAC-optimized CDN delivery, responsive layouts, and performance scores above 95. Every build includes analytics setup, conversion tracking, and CMS training for your team.",
    },
    migrationPricePerPage: {
      straightforward: localizePrice(325, currencies.SGD),
      animated: localizePrice(495, currencies.SGD),
      brandElevation: localizePrice(800, currencies.SGD),
    },
  },
};

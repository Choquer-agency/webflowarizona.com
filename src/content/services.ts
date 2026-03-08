import { FAQItem, ProcessStep } from "./config";

export interface MigrationPackage {
  name: string;
  slug: string;
  pricePerPage: number;
  description: string;
  includes: string[];
  color: string;
  featured?: boolean;
}

export interface ServicePageConfig {
  slug: string;
  title: string;
  metaTitle: (locality: string, region: string) => string;
  metaDescription: (locality: string, region: string) => string;
  heroH1: (locality: string, region: string) => string;
  heroSubhead: (locality: string, region: string) => string;
  heroQualifier: (locality: string, region: string) => string;
  painPoints: { title: string; description: string }[];
  processSteps: ProcessStep[];
  faqs: (locality: string, region: string) => FAQItem[];
  showComparison: boolean;
  showPortfolio: boolean;
  migrationPackages?: MigrationPackage[];
}

/* ─── Migration Packages ─── */

export const migrationPackages: MigrationPackage[] = [
  {
    name: "Straightforward Migration",
    slug: "straightforward",
    pricePerPage: 325,
    description:
      "An exact visual replica of your current website, rebuilt on Webflow with clean code and modern performance.",
    includes: [
      "Pixel-for-pixel visual replica on Webflow",
      "All pages and content migrated",
      "Blog & CMS content transferred",
      "Fully responsive across all devices",
      "Fundamental on-page SEO setup",
      "301 redirect mapping for all URLs",
      "2 rounds of revisions",
      "30-day post-launch support",
    ],
    color: "#BCEFFF",
  },
  {
    name: "Animated Migration",
    slug: "animated",
    pricePerPage: 495,
    description:
      "Everything in Pixel-Perfect, plus subtle animations and interactions that bring your brand to life on Webflow.",
    includes: [
      "Everything in Pixel-Perfect Migration",
      "Subtle scroll-triggered animations",
      "Smooth page transitions",
      "Interactive hover states & micro-interactions",
      "Animated CTAs and navigation elements",
      "Loading animations",
      "3 rounds of revisions",
      "60-day post-launch support",
    ],
    color: "#F79C42",
    featured: true,
  },
  {
    name: "Brand Elevation",
    slug: "brand-elevation",
    pricePerPage: 800,
    description:
      "A full brand refresh built on Webflow. We take your existing content and elevate the entire experience — design, motion, and identity.",
    includes: [
      "Everything in Animated Migration",
      "Refreshed visual identity & brand direction",
      "Modernized typography and color palette",
      "Enhanced imagery and layout composition",
      "Strategic content refinement",
      "Custom illustrations or iconography direction",
      "5 rounds of revisions",
      "90-day post-launch support",
    ],
    color: "#C4EF7A",
  },
];

/* ─── Service Page Configs ─── */

export const serviceMap: Record<string, ServicePageConfig> = {
  "wordpress-migration": {
    slug: "wordpress-migration",
    title: "WordPress to Webflow Migration",
    metaTitle: (locality, region) =>
      `WordPress to Webflow Migration in ${locality} | ${region} Migration Experts`,
    metaDescription: (locality, region) =>
      `Migrate your WordPress site to Webflow with zero downtime. Expert migration services for ${region} businesses in ${locality}. SEO-safe 301 redirects, content migration, and modern redesign.`,
    heroH1: (_locality, region) =>
      `Migrate from WordPress to Webflow in ${region}`,
    heroSubhead: (_locality, region) =>
      `Leave plugin updates, security patches, and slow load times behind. We handle the full migration — content, SEO, redirects, and design — so your ${region} business launches on a faster, modern platform without missing a beat.`,
    heroQualifier: (_locality, region) =>
      `For ${region} businesses ready to leave WordPress behind and invest in a website that performs.`,
    painPoints: [
      {
        title: "Plugin overload",
        description:
          "Your site depends on 20+ plugins that break with every update. One bad update and your entire site goes down.",
      },
      {
        title: "Slow page speeds",
        description:
          "Bloated themes and plugins tank your Core Web Vitals. Google penalizes slow sites — and visitors leave before the page loads.",
      },
      {
        title: "Security vulnerabilities",
        description:
          "WordPress is the #1 target for hackers. Constant security patches, brute-force attacks, and malware scans drain your time and budget.",
      },
      {
        title: "Developer dependency",
        description:
          "Need to change a heading? Update a photo? On WordPress, even simple edits often require a developer — and their invoice.",
      },
      {
        title: "Costly maintenance",
        description:
          "Hosting fees, plugin licenses, security monitoring, backups, staging environments — the hidden costs of WordPress add up fast.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Site Audit & Content Mapping",
        description:
          "We crawl your existing WordPress site, audit every page, catalog all content, and map out your URL structure for a clean migration with zero content loss.",
      },
      {
        step: 2,
        title: "Design & UX Modernization",
        description:
          "Depending on your package, we either replicate your design pixel-for-pixel, add modern animations, or give your brand a full visual refresh — all designed natively for Webflow.",
      },
      {
        step: 3,
        title: "Build & Data Migration",
        description:
          "Your new site is built in Webflow with clean code, responsive layouts, and CMS collections. All content, blogs, and media are migrated and verified.",
      },
      {
        step: 4,
        title: "QA, Launch & 301 Redirects",
        description:
          "Thorough cross-browser and device testing, 301 redirect mapping for every URL, DNS cutover with zero downtime, and 90 days of search performance monitoring.",
      },
    ],
    faqs: (locality, region) => [
      {
        category: "process",
        question: "How long does a WordPress to Webflow migration take?",
        answer: `Most WordPress to Webflow migrations take 4–6 weeks, depending on site complexity. A straightforward 10–20 page marketing site with a blog can be migrated in 4 weeks. Larger sites with custom post types, e-commerce, or complex integrations may take 6–8 weeks. We provide a detailed timeline during the site audit phase.`,
      },
      {
        category: "general",
        question: "Will I lose my SEO rankings during migration?",
        answer: `No — preserving your SEO equity is a core part of our migration process. We implement 301 redirects for every URL, migrate all meta titles, descriptions, and alt text, and monitor your search performance for 90 days post-launch. Most clients see their rankings recover within 2–4 weeks and improve within 90 days due to Webflow's superior page speed and clean code output.`,
      },
      {
        category: "webflow",
        question: "Can you migrate my WordPress plugins to Webflow?",
        answer: `WordPress plugins don't transfer directly to Webflow, but most plugin functionality has native Webflow equivalents or better alternatives. Contact forms, SEO tools, analytics, CMS collections, and e-commerce are all built into Webflow. For third-party integrations (CRM, email marketing, booking systems), we connect them via native integrations, Zapier, or custom API connections.`,
      },
      {
        category: "pricing",
        question: `How much does a WordPress to Webflow migration cost in ${region}?`,
        answer: `Migration pricing depends on your package and page count. Pixel-Perfect Migration starts at $325/page for an exact visual replica. Animated Migration is $495/page and includes scroll animations and micro-interactions. Brand Elevation is $800/page for a full visual refresh. Use the pricing calculator above to get an instant estimate based on your site size.`,
      },
      {
        category: "process",
        question: "What happens to my existing content during migration?",
        answer: `Every piece of content is migrated: pages, blog posts, images, documents, and media files. Blog content is transferred into Webflow's CMS collections with all metadata preserved (author, date, categories, tags). We perform a content audit before migration to identify outdated or redundant content, giving you a clean start on Webflow.`,
      },
      {
        category: "process",
        question: "Do you handle 301 redirects?",
        answer: `Yes — 301 redirect mapping is included in every migration package. We create a comprehensive redirect map matching every old WordPress URL to its new Webflow equivalent. This preserves your backlink equity, prevents 404 errors, and ensures visitors and search engines find your content at its new location. We also monitor for broken links post-launch.`,
      },
      {
        category: "webflow",
        question: `Is Webflow better than WordPress for ${region} businesses?`,
        answer: `For most ${region} businesses, yes. Webflow eliminates the plugin maintenance, security patches, and developer dependency that come with WordPress. Sites load 30–50% faster, hosting is included and managed, and your team can make content updates without touching code. The only exception is businesses that need extremely niche WordPress plugins with no Webflow alternative — which is increasingly rare.`,
      },
      {
        category: "webflow",
        question: "Can I still have a blog on Webflow?",
        answer: `Absolutely. Webflow's CMS is purpose-built for blogs and dynamic content. You get a visual editor that's far more intuitive than the WordPress dashboard, automatic RSS feeds, category and tag filtering, and the ability to design your blog layout with full creative control. Many of our ${locality} clients find they publish more frequently after migrating because the editing experience is so much smoother.`,
      },
    ],
    showComparison: true,
    showPortfolio: true,
    migrationPackages,
  },
};

export function getServiceConfig(slug: string): ServicePageConfig | undefined {
  return serviceMap[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(serviceMap);
}

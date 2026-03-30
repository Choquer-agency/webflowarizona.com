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
  sourcePlatform: string; // "WordPress", "Squarespace", "Wix", "Shopify"
  eyebrow: string; // Hero eyebrow text
  problemEyebrow: string; // Problem section eyebrow
  problemHeading: string; // Problem section heading
  processHeading: string; // Process section heading
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
    sourcePlatform: "WordPress",
    eyebrow: "WordPress Migration Experts",
    problemEyebrow: "Why Leave WordPress?",
    problemHeading: "WordPress is holding your business back.",
    processHeading: "From WordPress to Webflow in four steps.",
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
  "squarespace-migration": {
    slug: "squarespace-migration",
    title: "Squarespace to Webflow Migration",
    sourcePlatform: "Squarespace",
    eyebrow: "Squarespace Migration Experts",
    problemEyebrow: "Why Leave Squarespace?",
    problemHeading: "Squarespace is limiting your growth.",
    processHeading: "From Squarespace to Webflow in four steps.",
    metaTitle: (locality, region) =>
      `Squarespace to Webflow Migration | ${locality}, ${region}`,
    metaDescription: (locality, region) =>
      `Migrate your Squarespace site to Webflow with zero downtime and SEO preserved. Expert migration services for ${region} businesses in ${locality}.`,
    heroH1: (_locality, region) =>
      `Migrate from Squarespace to Webflow in ${region}`,
    heroSubhead: (_locality, region) =>
      `Break free from rigid templates and limited customization. We migrate your Squarespace site to Webflow — giving your ${region} business full design control, faster page speeds, and a platform that scales with you.`,
    heroQualifier: (_locality, region) =>
      `For ${region} businesses that have outgrown Squarespace and are ready for a professional upgrade.`,
    painPoints: [
      {
        title: "Template limitations",
        description:
          "Squarespace templates look great until you need something custom. Want a unique layout? A complex interaction? You're stuck.",
      },
      {
        title: "No code access",
        description:
          "Custom functionality requires hacky CSS injections and third-party workarounds. There's no clean way to extend your site.",
      },
      {
        title: "Poor page speed",
        description:
          "Squarespace sites consistently score low on Core Web Vitals. Heavy scripts and unoptimized images hurt your Google rankings.",
      },
      {
        title: "Limited CMS",
        description:
          "Blog posts and a few collection types — that's it. No multi-reference fields, no conditional visibility, no real content architecture.",
      },
      {
        title: "No real SEO control",
        description:
          "Basic meta tags are there, but you can't control schema markup, fine-tune URL structures, or implement advanced technical SEO.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Site Audit & Content Export",
        description:
          "We audit your Squarespace site, export all content and media, map your URL structure, and identify any third-party integrations that need to be reconnected.",
      },
      {
        step: 2,
        title: "Design & UX Upgrade",
        description:
          "Depending on your package, we replicate your current design, add animations, or create a fresh visual identity — all with the design freedom Squarespace never gave you.",
      },
      {
        step: 3,
        title: "Build & Content Migration",
        description:
          "Your new Webflow site is built with clean code, custom CMS collections, and responsive layouts. All pages, blog posts, and media are migrated and verified.",
      },
      {
        step: 4,
        title: "QA, Launch & Redirects",
        description:
          "Full cross-browser testing, 301 redirect mapping from Squarespace URLs, DNS cutover with zero downtime, and 90 days of post-launch performance monitoring.",
      },
    ],
    faqs: (locality, region) => [
      {
        category: "process",
        question: "How long does a Squarespace to Webflow migration take?",
        answer: `Most Squarespace to Webflow migrations take 3–6 weeks. Simpler sites with 5–15 pages can be done in 3–4 weeks. Larger sites with e-commerce, extensive blogs, or custom integrations take 5–6 weeks. We provide a detailed timeline after auditing your existing site.`,
      },
      {
        category: "general",
        question: "Will I lose my SEO rankings when migrating from Squarespace?",
        answer: `No. We implement 301 redirects for every URL, migrate all meta titles and descriptions, and preserve your sitemap structure. Most clients see rankings recover within 2–4 weeks and improve within 90 days thanks to Webflow's faster page speeds and cleaner code.`,
      },
      {
        category: "webflow",
        question: "What can Webflow do that Squarespace can't?",
        answer: `Full design freedom without template constraints, custom animations and interactions, advanced CMS with multi-reference fields, clean semantic code output, superior page speed scores, native form handling, and the ability to hand off content editing to your team without breaking the design. Webflow gives you agency-level control that Squarespace simply can't match.`,
      },
      {
        category: "pricing",
        question: `How much does a Squarespace to Webflow migration cost in ${region}?`,
        answer: `Migration pricing is based on your package and page count. Straightforward Migration starts at $325/page, Animated Migration is $495/page with scroll animations and interactions, and Brand Elevation is $800/page for a full visual refresh. Use the pricing calculator above for an instant estimate.`,
      },
      {
        category: "process",
        question: "Can you migrate my Squarespace e-commerce store to Webflow?",
        answer: `Yes. We migrate product listings, categories, and images to Webflow E-commerce. Webflow supports up to 15,000 products with Stripe integration, custom checkout flows, and full design control over product pages — something Squarespace's rigid e-commerce templates can't offer.`,
      },
      {
        category: "process",
        question: "What happens to my Squarespace blog content?",
        answer: `All blog posts are migrated to Webflow's CMS with metadata preserved — titles, dates, categories, images, and body content. Webflow's CMS gives you far more flexibility with blog layouts, filtering, and dynamic content than Squarespace ever offered.`,
      },
      {
        category: "webflow",
        question: `Why are ${region} businesses switching from Squarespace to Webflow?`,
        answer: `${region} businesses outgrow Squarespace when they need custom designs, better performance, or more advanced functionality. Webflow offers full creative control, faster load times, built-in SEO tools, and a CMS that scales — all without the template constraints that hold Squarespace sites back. Our ${locality} clients consistently see improved engagement and conversions after migrating.`,
      },
      {
        category: "general",
        question: "Do I need to know code to manage my Webflow site after migration?",
        answer: `No. Webflow's Editor lets your team update text, images, blog posts, and CMS content without touching code. It's more intuitive than Squarespace's editor and gives you more control. We provide a full training session after launch so your team is confident managing the site.`,
      },
    ],
    showComparison: false,
    showPortfolio: true,
    migrationPackages,
  },

  "wix-migration": {
    slug: "wix-migration",
    title: "Wix to Webflow Migration",
    sourcePlatform: "Wix",
    eyebrow: "Wix Migration Experts",
    problemEyebrow: "Why Leave Wix?",
    problemHeading: "Wix is costing you credibility and performance.",
    processHeading: "From Wix to Webflow in four steps.",
    metaTitle: (locality, region) =>
      `Wix to Webflow Migration | ${locality}, ${region}`,
    metaDescription: (locality, region) =>
      `Migrate from Wix to Webflow with zero downtime and SEO preserved. Expert migration for ${region} businesses in ${locality}. Clean code, full design control.`,
    heroH1: (_locality, region) =>
      `Migrate from Wix to Webflow in ${region}`,
    heroSubhead: (_locality, region) =>
      `Stop fighting with drag-and-drop limitations and bloated code. We migrate your Wix site to Webflow — giving your ${region} business a professional, fast, and SEO-optimized website that actually converts.`,
    heroQualifier: (_locality, region) =>
      `For ${region} businesses ready to graduate from Wix to a platform built for growth.`,
    painPoints: [
      {
        title: "Bloated, messy code",
        description:
          "Wix generates heavy, unreadable code that search engines struggle to crawl. Your site is slower and ranks worse than it should.",
      },
      {
        title: "Unprofessional perception",
        description:
          "Wix branding, generic templates, and cookie-cutter layouts signal 'small-time' to potential clients. Your website should elevate your brand, not undermine it.",
      },
      {
        title: "SEO ceiling",
        description:
          "Wix offers basic SEO tools, but you can't control schema markup, URL structures are messy, and page speed scores are consistently poor.",
      },
      {
        title: "No design freedom",
        description:
          "The drag-and-drop editor feels flexible until you need pixel-perfect layouts, custom animations, or responsive designs that actually work on mobile.",
      },
      {
        title: "Platform lock-in",
        description:
          "You can't export your Wix site. No code export, no clean content export. The longer you stay, the harder it is to leave.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Site Audit & Content Extraction",
        description:
          "Since Wix doesn't offer clean exports, we manually audit and extract all content, images, and media from your existing site and map your URL structure.",
      },
      {
        step: 2,
        title: "Design & UX Upgrade",
        description:
          "We redesign your site natively for Webflow — either matching your current look, adding animations, or creating a complete brand refresh depending on your package.",
      },
      {
        step: 3,
        title: "Build & Content Migration",
        description:
          "Your new Webflow site is built from scratch with clean, semantic code, proper CMS architecture, and responsive layouts. All content is migrated and quality-checked.",
      },
      {
        step: 4,
        title: "QA, Launch & Redirects",
        description:
          "Comprehensive testing across browsers and devices, 301 redirect mapping, DNS cutover with zero downtime, and 90 days of search performance monitoring post-launch.",
      },
    ],
    faqs: (locality, region) => [
      {
        category: "process",
        question: "How long does a Wix to Webflow migration take?",
        answer: `Wix migrations typically take 4–6 weeks because Wix doesn't allow clean content exports — we extract everything manually. A 5–15 page site takes about 4 weeks. Larger sites with blogs, e-commerce, or complex content take 5–6 weeks.`,
      },
      {
        category: "general",
        question: "Will my SEO rankings drop when migrating from Wix?",
        answer: `We implement 301 redirects for all URLs and migrate all SEO metadata. Most clients actually see rankings improve after migrating because Webflow generates clean code, loads faster, and scores significantly higher on Core Web Vitals — all factors Google uses for ranking.`,
      },
      {
        category: "process",
        question: "Can I export my content from Wix?",
        answer: `Wix makes it difficult to export content cleanly — there's no full-site export feature. That's why our migration process includes manual content extraction. We pull all text, images, blog posts, and media from your Wix site and rebuild everything properly in Webflow's CMS.`,
      },
      {
        category: "pricing",
        question: `How much does a Wix to Webflow migration cost in ${region}?`,
        answer: `Migration pricing depends on your package and page count. Straightforward Migration starts at $325/page, Animated Migration is $495/page with scroll animations, and Brand Elevation is $800/page for a full rebrand. Use the pricing calculator above to estimate your investment.`,
      },
      {
        category: "webflow",
        question: "What makes Webflow better than Wix?",
        answer: `Webflow generates clean, semantic code (Wix doesn't). Webflow scores 90+ on Lighthouse (Wix averages 40–60). Webflow gives you full design freedom without template constraints. Webflow's CMS is built for real content architecture. And Webflow doesn't plaster its branding on your professional website.`,
      },
      {
        category: "webflow",
        question: `Why are ${region} businesses leaving Wix for Webflow?`,
        answer: `${region} businesses switch when they realize Wix is holding them back — poor search rankings, slow load times, and a site that looks like every other Wix template. Webflow gives them a professional, high-performance website that ranks better, converts more, and makes their brand look credible. Our ${locality} clients consistently see measurable improvements in traffic and leads after migrating.`,
      },
      {
        category: "process",
        question: "Can you migrate my Wix blog to Webflow?",
        answer: `Yes. We extract all blog posts from Wix (titles, body content, images, dates, categories) and rebuild them in Webflow's CMS. The result is a faster, better-designed blog with full layout control and proper SEO structure that Wix simply can't match.`,
      },
      {
        category: "general",
        question: "Will my Wix domain work with Webflow?",
        answer: `Yes. If you own your domain (even if purchased through Wix), you can point it to Webflow. We handle the DNS configuration during the migration process. If your domain is locked to Wix, we'll help you transfer it.`,
      },
    ],
    showComparison: false,
    showPortfolio: true,
    migrationPackages,
  },

  "shopify-migration": {
    slug: "shopify-migration",
    title: "Shopify to Webflow Migration",
    sourcePlatform: "Shopify",
    eyebrow: "Shopify Migration Experts",
    problemEyebrow: "Why Leave Shopify?",
    problemHeading: "Shopify is great for selling. Not for branding.",
    processHeading: "From Shopify to Webflow in four steps.",
    metaTitle: (locality, region) =>
      `Shopify to Webflow Migration in ${locality} | ${region} Migration Experts`,
    metaDescription: (locality, region) =>
      `Migrate from Shopify to Webflow for full brand control and a website that does more than just sell. Expert migration services for ${region} businesses in ${locality}.`,
    heroH1: (_locality, region) =>
      `Migrate from Shopify to Webflow in ${region}`,
    heroSubhead: (_locality, region) =>
      `Shopify is built for transactions, not for storytelling. We migrate your ${region} business to Webflow — where you get full design control, a real content platform, and e-commerce that matches your brand, not a template.`,
    heroQualifier: (_locality, region) =>
      `For ${region} brands that need more than a storefront — they need a website that builds trust, tells their story, and converts.`,
    painPoints: [
      {
        title: "Template-locked design",
        description:
          "Shopify themes all look the same. Customizing beyond the theme settings requires Liquid code and expensive Shopify developers.",
      },
      {
        title: "Content limitations",
        description:
          "Shopify is a store, not a website. Building landing pages, resource centers, or rich brand experiences requires apps and workarounds.",
      },
      {
        title: "App dependency",
        description:
          "Need reviews? An app. Need size guides? An app. Need custom fields? An app. Monthly fees stack up and every app slows your site down.",
      },
      {
        title: "Poor page speed",
        description:
          "Theme bloat plus a dozen apps means your Shopify store loads slowly. Google penalizes slow e-commerce sites — costing you sales and rankings.",
      },
      {
        title: "High transaction fees",
        description:
          "Unless you use Shopify Payments, you pay 0.5–2% transaction fees on top of your plan. Webflow E-commerce charges 0% transaction fees on all plans.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Store Audit & Product Export",
        description:
          "We audit your Shopify store, export all products, collections, blog content, and customer-facing pages, and map your URL structure for SEO-safe migration.",
      },
      {
        step: 2,
        title: "Design & Brand Experience",
        description:
          "We design your new site in Webflow with full creative control — custom product pages, brand storytelling sections, and an experience that goes far beyond a Shopify theme.",
      },
      {
        step: 3,
        title: "Build & Product Migration",
        description:
          "Your Webflow E-commerce store is built with custom product pages, collection filtering, cart and checkout flows, and Stripe integration. All products and content are migrated.",
      },
      {
        step: 4,
        title: "QA, Launch & Redirects",
        description:
          "Thorough testing of the full purchase flow, 301 redirect mapping for all URLs, DNS cutover, and 90 days of post-launch monitoring for both SEO and e-commerce performance.",
      },
    ],
    faqs: (locality, region) => [
      {
        category: "process",
        question: "How long does a Shopify to Webflow migration take?",
        answer: `Shopify to Webflow e-commerce migrations typically take 5–8 weeks. A smaller catalog (under 100 products) with a marketing site can be done in 5–6 weeks. Larger catalogs with complex product variants, custom checkout flows, or extensive blog content take 6–8 weeks.`,
      },
      {
        category: "general",
        question: "Can Webflow handle e-commerce as well as Shopify?",
        answer: `Webflow E-commerce supports up to 15,000 products with Stripe integration, discount codes, inventory management, and fully custom checkout flows. Where it excels over Shopify is design freedom — every product page, cart, and checkout is fully customizable without apps or Liquid code. For brands under 15,000 SKUs that prioritize design and brand experience, Webflow is the better platform.`,
      },
      {
        category: "webflow",
        question: "What about Shopify apps — can Webflow replace them?",
        answer: `Most Shopify app functionality has native Webflow equivalents or better alternatives. Reviews, size guides, custom fields, email signups, and analytics are all handled natively or through lightweight integrations (Klaviyo, Judge.me, Zapier). The result is a faster, cleaner site without the monthly app fees.`,
      },
      {
        category: "pricing",
        question: `How much does a Shopify to Webflow migration cost in ${region}?`,
        answer: `Migration pricing depends on your package and page count. Straightforward Migration starts at $325/page, Animated Migration is $495/page, and Brand Elevation is $800/page. Product migration is included. Use the pricing calculator above for an instant estimate.`,
      },
      {
        category: "general",
        question: "Will I lose sales during the migration?",
        answer: `No. We build your new Webflow store in parallel while your Shopify store stays live. The cutover happens in minutes with zero downtime — your customers won't notice the switch. We also set up 301 redirects to ensure no traffic is lost.`,
      },
      {
        category: "webflow",
        question: `When should a ${region} business stay on Shopify vs. move to Webflow?`,
        answer: `Stay on Shopify if you have 15,000+ SKUs, need advanced inventory management across multiple warehouses, or rely heavily on Shopify POS for in-store sales. Move to Webflow if your brand needs a real website (not just a store), you want full design control, you're tired of app fees, or your catalog is under 15,000 products. Most ${locality} businesses we work with fall into the second category.`,
      },
      {
        category: "process",
        question: "Can you migrate my product reviews from Shopify?",
        answer: `Yes. We export reviews from your Shopify review app (Judge.me, Stamped, Yotpo, etc.) and integrate them into your Webflow site. Reviews are critical for conversion, so preserving them is a standard part of our migration process.`,
      },
      {
        category: "general",
        question: "Does Webflow charge transaction fees?",
        answer: `No. Webflow E-commerce charges 0% transaction fees on all plans. You only pay Stripe's standard processing fee (2.9% + 30¢). Compare that to Shopify's 0.5–2% transaction fee if you don't use Shopify Payments — the savings add up quickly for high-volume stores.`,
      },
    ],
    showComparison: false,
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

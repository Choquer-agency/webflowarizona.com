import {
  ServiceItem,
  ProcessStep,
  Testimonial,
  PortfolioProject,
  FAQItem,
  WebflowService,
  ComparisonRow,
  IndustryItem,
  PricingTier,
} from "./config";
import { getCluster, getCurrency } from "./clusters";

/* ─── Services (static — not used by components directly) ─── */

export const services: ServiceItem[] = [
  {
    icon: "Code",
    title: "Webflow Development",
    description:
      "Custom websites built natively in Webflow. No shortcuts, no page builders inside page builders.",
  },
  {
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "Strategy-led design that guides visitors toward action, not just admiration.",
  },
  {
    icon: "Fingerprint",
    title: "Branding & Identity",
    description:
      "Logos, color systems, typography, and brand guidelines that make you unmistakable.",
  },
  {
    icon: "Search",
    title: "SEO",
    description:
      "Technical SEO, on-page optimization, and content strategy built into every launch.",
  },
  {
    icon: "BarChart3",
    title: "Google Ads",
    description:
      "Performance campaigns that turn ad spend into measurable pipeline.",
  },
  {
    icon: "Megaphone",
    title: "Social Media Ads",
    description:
      "Paid social on Meta, LinkedIn, and TikTok, built for conversion, not just awareness.",
  },
];

/* ─── Process Steps (cluster-aware) ─── */

export function getProcessSteps(slug: string): ProcessStep[] {
  const cluster = getCluster(slug);
  return cluster.processSteps;
}

// Backward-compatible static alias
export const processSteps: ProcessStep[] = getProcessSteps("arizona");

/* ─── Testimonials (static — real quotes, identical across domains) ─── */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getTestimonials(locality: string): Testimonial[] {
  return [
    {
      quote: `They didn't just build us a website. They built us a sales machine. We went from 2 inbound leads a month to 40 in the first 90 days.`,
      name: "Rachel Moran",
      title: "Marketing Director",
      company: "Pinnacle Fertility",
      featured: true,
    },
    {
      quote: `The team understood our vision from day one. The site they delivered exceeded every expectation — fast, beautiful, and converting.`,
      name: "Tom Vasquez",
      title: "Owner",
      company: "Pedigree Painting",
    },
    {
      quote: `We've worked with five agencies before. None of them came close. The attention to detail and the speed of delivery were unmatched.`,
      name: "Kate Nguyen",
      title: "Operations Manager",
      company: "DFI Forensics",
    },
    {
      quote: `Our old site was embarrassing. They gave us something we're genuinely proud to share. Traffic is up 200% and counting.`,
      name: "David Harmon",
      title: "General Manager",
      company: "Far North Crane",
    },
  ];
}

export const testimonials = getTestimonials("Phoenix");

/* ─── Portfolio (static — real projects, identical across domains) ─── */

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "LC Notary",
    category: "Notary Services",
    image: "/images/portfolio/project-1.webp",
    description: "Ranked #1 locally for notary services in their target market.",
    caseStudy: {
      challenge: "LC Notary was competing against dozens of established notary services in their area with no online visibility and zero organic traffic.",
      approach: "We built a locally optimized Webflow site with service-area pages, Google Business Profile integration, and a streamlined booking flow designed to convert mobile searchers into appointments.",
      result: "Ranked #1 in Google for notary services in their target market within four months. Organic leads now account for over 70% of their new business.",
    },
  },
  {
    name: "Pinnacle Fertility",
    category: "Healthcare",
    image: "/images/portfolio/project-2.webp",
    description: "Managed their entire web portfolio with an average organic growth of 221% across accounts.",
    caseStudy: {
      challenge: "Pinnacle Fertility had multiple clinic locations with outdated websites that weren\u2019t ranking for key fertility-related search terms. Each location operated independently online, with inconsistent branding and poor organic visibility.",
      approach: "We rebuilt their entire web portfolio in Webflow with a unified design system, location-specific SEO strategies, and a CMS architecture that let their marketing team update content across all sites without developer help.",
      result: "221% average organic growth across all accounts, with several clinic locations ranking on page one for high-intent fertility keywords in their local markets.",
    },
  },
  {
    name: "Pedigree Painting",
    category: "Painting Services",
    image: "/images/portfolio/project-3.webp",
    description: "Took them from zero to $1.3 million in revenue over three years.",
    caseStudy: {
      challenge: "Pedigree Painting was a brand-new painting company with no online presence, no website, and no established reputation in a competitive local market.",
      approach: "We built a conversion-focused Webflow site from scratch with local SEO baked in, a portfolio showcase system, an integrated quote request flow, and Google Ads campaigns to drive immediate lead volume while organic rankings grew.",
      result: "$0 to $1.3 million in revenue over three years. The website became their primary lead source, consistently generating qualified inbound inquiries from homeowners in their service area.",
    },
  },
  {
    name: "Penni Payments",
    category: "Fintech",
    image: "/images/portfolio/project-4.webp",
    description: "Built a new website for a new product line, helping them reposition and elevate their brand.",
    caseStudy: {
      challenge: "Penni Payments was launching a new product line and needed a website that clearly communicated their value proposition to a new audience while elevating the overall brand perception.",
      approach: "We designed and built a conversion-focused Webflow site with product-specific landing pages, animated feature breakdowns, and a CMS-powered resource center to support their sales team.",
      result: "The new site reduced bounce rate by 35% and increased demo requests by 2.4x in the first quarter after launch. Their sales team reported significantly warmer inbound leads.",
    },
  },
  {
    name: "Far North Crane",
    category: "Crane & Rigging",
    image: "/images/portfolio/project-5.webp",
    description: "Continues to lead their market as a crane service working on major commercial projects.",
    caseStudy: {
      challenge: "Far North Crane had an outdated website that didn\u2019t reflect the scale of their commercial operations. General contractors couldn\u2019t easily find their services or request quotes online.",
      approach: "We built a Webflow site showcasing their fleet, project portfolio, and service capabilities with a prominent quote request form and local SEO targeting commercial construction keywords.",
      result: "Organic traffic increased 180% within six months. The site now generates a steady pipeline of commercial project inquiries, helping them secure contracts on major developments.",
    },
  },
  {
    name: "Broudy Tennis",
    category: "Sports & Education",
    image: "/images/portfolio/project-6.webp",
    description: "Elevated his brand and helped him start selling tennis course subscriptions online.",
    caseStudy: {
      challenge: "Broudy Tennis had a strong personal brand but no way to monetize it online. Course content was being given away for free with no structured sales funnel or subscription model.",
      approach: "We built a Webflow site with integrated membership and e-commerce functionality, a content preview system to drive conversions, and SEO-optimized landing pages for each course offering.",
      result: "Launched a profitable online subscription business from scratch. Monthly recurring revenue grew to five figures within the first year, with the website converting at 4.2% on course pages.",
    },
  },
  {
    name: "DFI Forensics",
    category: "Digital Forensics",
    image: "/images/portfolio/project-7.webp",
    description: "Ranked in the top positions locally for digital forensics — and still owns that position today.",
    caseStudy: {
      challenge: "DFI Forensics operated in a niche industry with very specific search terms. Their previous site was invisible in search results and relied entirely on referrals for new business.",
      approach: "We built a technically optimized Webflow site targeting high-intent forensics keywords with service-specific pages, case study content, and schema markup for enhanced search visibility.",
      result: "Ranked #1 locally for digital forensics within three months and has held that position for over two years. Organic search now drives 60% of their qualified leads.",
    },
  },
  {
    name: "JDG Interior Design",
    category: "Interior Design",
    image: "/images/portfolio/project-8.webp",
    description: "Visuals are everything — we built a site that showcases the quality of their work beautifully.",
    caseStudy: {
      challenge: "JDG Interior Design had stunning project photography but their website didn\u2019t do it justice. The existing site was slow, poorly organized, and failed to convert visitors into consultation requests.",
      approach: "We designed a visually immersive Webflow site with full-bleed project galleries, lazy-loaded high-res imagery, and a CMS-powered portfolio that the team can update after every project completion.",
      result: "Page load times dropped by 60%, average session duration increased by 45%, and consultation requests tripled within the first two months of launch.",
    },
  },
];

/* ─── Stats (static — identical across domains) ─── */

export const stats = {
  projectsCompleted: 150,
  clientsServed: 80,
  yearsExperience: 8,
  avgLighthouse: 96,
};

/* ─── Pain Points (cluster-aware) ─── */

export function getPainPoints(slug: string): { title: string; description: string }[] {
  const cluster = getCluster(slug);
  return cluster.painPoints;
}

// Backward-compatible static alias
export const painPoints = getPainPoints("arizona");

/* ─── Solution Cards (static — low crawl impact) ─── */

export const solutionCards = [
  {
    icon: "Target",
    title: "Strategy\nFirst",
    description:
      "Every project starts with your business goals, not a template.",
  },
  {
    icon: "Zap",
    title: "Built to\nPerform",
    description:
      "Optimized for speed, SEO, and conversions from day one.",
  },
  {
    icon: "Handshake",
    title: "Partners,\nNot Vendors",
    description:
      "We stick around long after launch to help you grow.",
  },
];

/* ─── Expanded FAQs (SEO + AEO, cluster-enhanced) ─── */

export function getExpandedFaqs(locality: string, region: string, slug?: string): FAQItem[] {
  const currency = getCurrency(slug || "arizona");

  // Format price range for the FAQ answer based on currency
  const formatPriceExample = () => {
    if (currency.code === "USD") return "$5,000 to $50,000+, depending on scope and complexity. A marketing site with 5–10 pages starts around $5,000–$12,000. E-commerce builds run $12,000–$30,000. Enterprise-level Webflow projects with custom CMS architecture, integrations, and advanced animations start at $25,000";
    const fmt = (n: number) => n.toLocaleString(currency.locale, { style: "currency", currency: currency.code, minimumFractionDigits: 0, maximumFractionDigits: 0 });
    const low = Math.round(5000 * currency.exchangeRate / 500) * 500;
    const mid = Math.round(12000 * currency.exchangeRate / 500) * 500;
    const midHigh = Math.round(30000 * currency.exchangeRate / 1000) * 1000;
    const high = Math.round(25000 * currency.exchangeRate / 1000) * 1000;
    return `${fmt(low)} to ${fmt(high * 2)}+, depending on scope and complexity. A marketing site with 5–10 pages starts around ${fmt(low)}–${fmt(mid)}. E-commerce builds run ${fmt(mid)}–${fmt(midHigh)}. Enterprise-level Webflow projects with custom CMS architecture, integrations, and advanced animations start at ${fmt(high)}`;
  };

  const baseFaqs: FAQItem[] = [
    // Core FAQs
    {
      category: "general",
      question: "How does Conversion Rate Optimization (CRO) improve my website's performance?",
      answer: "Most websites lose leads due to friction — confusing navigation, weak CTAs, or slow load times. We analyze user behavior, heatmaps, and drop-off points, then implement data-driven changes that remove barriers and increase conversions, turning more visitors into customers.",
    },
    {
      category: "process",
      question: "How long does it take to see results from SEO and CRO?",
      answer: "Clients see an average 47% traffic increase within six months. SEO takes time as Google indexes improvements, while CRO delivers quicker wins by optimizing your site for better engagement. Our dual approach ensures consistent, measurable growth from day one.",
    },
    {
      category: "general",
      question: "What industries do you specialize in?",
      answer: "We don't need to specialize in your industry — we specialize in Google's algorithm and user behavior. With 150+ websites across 50+ industries, we know how people search, interact, and convert, allowing us to apply winning strategies to any business.",
    },
    {
      category: "general",
      question: "Do you guarantee results?",
      answer: "Yes — we guarantee at least a 20% traffic increase in six months, or we work for free. We've never worked for free because our SEO and CRO strategies consistently deliver measurable growth that drives leads and revenue.",
    },
    {
      category: "process",
      question: "How do you integrate into our company's team?",
      answer: "We embed ourselves into your company by working directly with your sales, reception, and marketing teams to understand your customers. This allows us to optimize your site and messaging to align with real customer needs, increasing conversions and closing more deals.",
    },
    // AEO-targeted FAQs
    {
      category: "webflow",
      question: "What is Webflow?",
      answer: "Webflow is a professional web design and development platform that combines a visual builder with the power of clean, production-ready code. Unlike WordPress or Squarespace, Webflow generates semantic HTML, CSS, and JavaScript — meaning your site loads faster, ranks better in search engines, and requires no plugins to maintain. It is the platform of choice for over 300,000 businesses worldwide, from startups to Fortune 500 companies.",
    },
    {
      category: "pricing",
      question: `How much does a Webflow website cost in ${locality}?`,
      answer: `A professionally designed and developed Webflow website in ${locality} typically ranges from ${formatPriceExample()}. Every project includes strategy, design, development, SEO optimization, and a 30-day post-launch support period.`,
    },
    {
      category: "webflow",
      question: "Why choose Webflow over WordPress?",
      answer: "Webflow eliminates the maintenance burden that comes with WordPress. There are no plugins to update, no security patches to worry about, and no database to manage. Webflow sites load 30–50% faster out of the box, include built-in hosting on AWS infrastructure, and give your team a visual CMS editor that is far more intuitive than the WordPress dashboard. For businesses that want a modern, secure, and fast website without ongoing developer dependency, Webflow is the clear choice.",
    },
    {
      category: "webflow",
      question: "Can Webflow handle e-commerce?",
      answer: `Yes. Webflow E-commerce supports up to 15,000 products with fully customizable product pages, cart, and checkout flows. It integrates with Stripe for payment processing, handles physical and digital products, supports discount codes, and includes inventory management. For ${region} businesses that need a design-forward online store without the plugin headaches of WooCommerce or the template constraints of Shopify, Webflow E-commerce is an excellent fit.`,
    },
    {
      category: "webflow",
      question: "Is Webflow good for SEO?",
      answer: "Webflow is one of the most SEO-friendly platforms available. It generates clean, semantic HTML by default and offers built-in controls for meta titles, descriptions, Open Graph tags, alt text, canonical URLs, 301 redirects, auto-generated sitemaps, and robots.txt — all without a single plugin. Webflow sites also score exceptionally well on Core Web Vitals due to their lightweight architecture and global CDN hosting. Our clients see an average 47% traffic increase within six months.",
    },
    {
      category: "process",
      question: "How long does it take to build a Webflow website?",
      answer: "Most Webflow projects take 4 to 8 weeks from kickoff to launch. A focused marketing site with 5–8 pages can be completed in 4–5 weeks. Larger builds with custom CMS collections, e-commerce, and complex animations typically take 6–8 weeks. Timeline depends on content readiness, feedback cycles, and project scope. We provide a detailed timeline during the discovery phase so there are no surprises.",
    },
    {
      category: "webflow",
      question: "Do I need a developer for Webflow?",
      answer: "While Webflow's visual builder allows non-developers to make basic content edits, a professional Webflow developer is essential for building a high-performance site. Custom interactions, CMS architecture, responsive design, third-party integrations, and SEO optimization all require expertise. Once we build your site, your team can manage day-to-day content updates through Webflow's intuitive Editor — no code required.",
    },
    {
      category: "webflow",
      question: "Can you migrate my WordPress site to Webflow?",
      answer: `Yes. We specialize in WordPress-to-Webflow migrations for ${region} businesses. The process includes content auditing and migration, 301 redirect mapping to preserve your SEO equity, design modernization, CMS structure setup in Webflow, and thorough QA testing. Most migrations take 4–6 weeks. We ensure zero downtime during the cutover and monitor search performance closely for the first 90 days post-migration.`,
    },
    {
      category: "webflow",
      question: "What is Webflow CMS?",
      answer: "Webflow CMS is a built-in content management system that lets you create dynamic, database-driven content without code. You define custom content structures — blog posts, team members, case studies, product listings — and Webflow automatically generates pages from templates. Unlike WordPress, which relies on dozens of plugins, Webflow CMS is native to the platform, meaning faster load times, no security vulnerabilities from third-party code, and a much simpler editing experience for your team.",
    },
    {
      category: "general",
      question: "Why hire a Webflow agency instead of a freelancer?",
      answer: `A Webflow agency brings a full team — strategists, designers, developers, and SEO specialists — to every project. Freelancers are often one person wearing many hats, which leads to blind spots in design, performance, or search optimization. An agency also provides continuity: if your project lead is unavailable, the work continues. ${locality} Webflow Agency offers dedicated project management, structured timelines, quality assurance processes, and ongoing retainer support that individual freelancers simply cannot match.`,
    },
    {
      category: "local",
      question: `Why should I hire a Webflow agency in ${locality}?`,
      answer: `Working with a local ${locality} Webflow agency means you get a team that understands the ${region} market — the competitive landscape, local search dynamics, and what ${locality} customers expect from a business website. We are available for in-person strategy sessions, understand the seasonal patterns of ${region} industries, and have a portfolio of local success stories. Local expertise combined with Webflow specialization gives your business a measurable advantage.`,
    },
    {
      category: "webflow",
      question: "What is the difference between Webflow and Squarespace?",
      answer: "Webflow gives you full design freedom and clean code output. Squarespace is a template-based builder with limited customization. Webflow supports complex animations, custom CMS structures, and client-friendly content editing without the constraints of a rigid template system. For businesses that need a unique, high-performance website rather than a generic template, Webflow is the professional choice.",
    },
  ];

  // Add cluster-specific FAQs
  const cluster = getCluster(slug || "arizona");
  const clusterFaqs = cluster.faqAdditions(locality, region);

  return [...baseFaqs, ...clusterFaqs];
}

// Backward-compatible static aliases
export const expandedFaqs = getExpandedFaqs("Phoenix", "Arizona", "arizona");

/* ─── Webflow Services Breakdown (cluster-aware) ─── */

const baseWebflowServices: WebflowService[] = [
  {
    slug: "webflow-design",
    title: "Webflow Design",
    description: "Strategy-led UI/UX design built natively for the Webflow platform.",
    longDescription: "Every project starts with research, wireframing, and a complete design system in Figma — then translated pixel-perfectly into Webflow. No handoff gaps. No lost-in-translation moments. Your brand gets a site that looks exactly like it was designed to.",
    icon: "Palette",
  },
  {
    slug: "webflow-development",
    title: "Webflow Development",
    description: "Clean, semantic, performant Webflow builds with custom interactions and integrations.",
    longDescription: "Your Webflow site, built with clean class naming, responsive layouts, accessible markup, and performance scores above 95. Every build includes SEO optimization, analytics setup, and CMS training for your team.",
    icon: "Code",
  },
  {
    slug: "webflow-cms",
    title: "Webflow CMS Development",
    description: "Custom content structures that make your team self-sufficient.",
    longDescription: "From blog systems to complex multi-reference architectures, we design CMS structures that are intuitive for editors and powerful for developers. Dynamic pages, filters, and conditional visibility — all without plugins or third-party dependencies.",
    icon: "Database",
  },
  {
    slug: "webflow-ecommerce",
    title: "Webflow E-Commerce",
    description: "Design-forward online stores built on Webflow's native commerce engine.",
    longDescription: "Custom product pages, cart flows, and checkout experiences that match your brand. Stripe integration, inventory management, discount codes, and marketing automation — built in from day one without the overhead of WooCommerce or Shopify plugins.",
    icon: "ShoppingCart",
  },
  {
    slug: "webflow-migration",
    title: "WordPress to Webflow Migration",
    description: "Seamless migration from WordPress, Squarespace, or any legacy platform to Webflow.",
    longDescription: "We handle the full migration: content transfer, 301 redirect mapping, SEO equity preservation, design modernization, and post-migration monitoring. Zero downtime during cutover and 90 days of search performance tracking post-launch.",
    icon: "ArrowRightLeft",
  },
  {
    slug: "webflow-maintenance",
    title: "Webflow Maintenance & Support",
    description: "Ongoing retainer support to keep your Webflow site performing at its best.",
    longDescription: "Monthly performance audits, content updates, feature additions, and priority support. We monitor Core Web Vitals, uptime, and conversion metrics so your site keeps improving long after launch. Plans start at $500/month.",
    icon: "Wrench",
  },
];

export function getWebflowServices(slug: string): WebflowService[] {
  const cluster = getCluster(slug);
  const overrides = cluster.webflowServiceOverrides;

  return baseWebflowServices.map((svc) => {
    if (overrides[svc.slug]) {
      return { ...svc, longDescription: overrides[svc.slug] };
    }
    return svc;
  });
}

// Backward-compatible static alias
export const webflowServices: WebflowService[] = getWebflowServices("arizona");

/* ─── Platform Comparison (cluster-aware) ─── */

const basePlatformComparison: ComparisonRow[] = [
  { feature: "Visual design freedom", webflow: "Full creative control", wordpress: "Theme-limited", customCode: "Full creative control" },
  { feature: "Clean code output", webflow: true, wordpress: false, customCode: true },
  { feature: "Built-in CMS", webflow: true, wordpress: "Plugin-dependent", customCode: false },
  { feature: "Hosting included", webflow: true, wordpress: false, customCode: false },
  { feature: "Security maintenance", webflow: "Managed by Webflow", wordpress: "Manual updates required", customCode: "Manual" },
  { feature: "SEO controls", webflow: "Built-in", wordpress: "Plugin required", customCode: "Manual" },
  { feature: "Page speed", webflow: "95+ avg Lighthouse", wordpress: "Varies widely", customCode: "Depends on developer" },
  { feature: "E-commerce", webflow: "Native", wordpress: "WooCommerce plugin", customCode: "Custom build required" },
  { feature: "Content editor experience", webflow: "Visual & intuitive", wordpress: "Dashboard-based", customCode: "Usually none" },
  { feature: "Time to launch", webflow: "4–8 weeks", wordpress: "6–12 weeks", customCode: "8–16+ weeks" },
  { feature: "Ongoing maintenance cost", webflow: "Low", wordpress: "Medium–High", customCode: "High" },
  { feature: "Plugin / dependency risk", webflow: "None", wordpress: "High", customCode: "Varies" },
];

export function getPlatformComparison(slug: string): ComparisonRow[] {
  const cluster = getCluster(slug);
  const extras = cluster.platformComparisonExtras;
  if (extras.length === 0) return basePlatformComparison;
  return [...basePlatformComparison, ...extras];
}

// Backward-compatible static alias
export const platformComparison: ComparisonRow[] = getPlatformComparison("arizona");

/* ─── Industries Served (cluster-aware) ─── */

export function getIndustriesServed(locality: string, region: string, slug?: string): IndustryItem[] {
  const cluster = getCluster(slug || "arizona");
  return cluster.industries(locality, region);
}

// Backward-compatible static alias
export const industriesServed = getIndustriesServed("Phoenix", "Arizona", "arizona");

/* ─── Pricing Tiers (cluster-aware) ─── */

export function getPricingTiers(slug: string): PricingTier[] {
  const cluster = getCluster(slug);
  return cluster.pricingTiers;
}

// Backward-compatible static alias
export const pricingTiers: PricingTier[] = getPricingTiers("arizona");

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

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We learn your business inside and out. A focused strategy session where we dig into your goals, audience, competitors, and what success looks like.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "We map the experience before we build it. Wireframes, moodboards, and a full design system — all approved by you before a single line of code is written.",
  },
  {
    step: 3,
    title: "Build",
    description:
      "We build it right, in Webflow. Clean, semantic, performant Webflow development with CMS, animations, integrations, and SEO baked in.",
  },
  {
    step: 4,
    title: "Launch & Grow",
    description:
      "We hand you the keys — and stick around. Full handoff, team training, and ongoing support to help your site perform better month after month.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Phoenix Webflow didn't just build us a website. They built us a sales machine. We went from 2 inbound leads a month to 40 in the first 90 days.",
    name: "Sarah Chen",
    title: "VP of Marketing",
    company: "Elevate SaaS",
    featured: true,
  },
  {
    quote:
      "The team at Phoenix Webflow understood our vision from day one. The site they delivered exceeded every expectation — fast, beautiful, and converting like crazy.",
    name: "Marcus Rivera",
    title: "Founder & CEO",
    company: "Desert Digital Co.",
  },
  {
    quote:
      "We've worked with five agencies before Phoenix Webflow. None of them came close. The attention to detail and the speed of delivery were unmatched.",
    name: "Emily Watson",
    title: "Head of Brand",
    company: "Pinnacle Ventures",
  },
  {
    quote:
      "Our old site was embarrassing. Phoenix Webflow gave us something we're genuinely proud to share. Traffic is up 200% and counting.",
    name: "James Park",
    title: "Director of Operations",
    company: "Horizon Health",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "LC Notary",
    category: "Notary Services",
    image: "/images/portfolio/project-1.jpg",
    description: "Ranked #1 locally for notary services in their target market.",
  },
  {
    name: "Pinnacle Fertility",
    category: "Healthcare",
    image: "/images/portfolio/project-2.jpg",
    description: "Managed their entire web portfolio with an average organic growth of 221% across accounts.",
  },
  {
    name: "Pedigree Painting",
    category: "Painting Services",
    image: "/images/portfolio/project-3.jpg",
    description: "Took them from zero to $1.3 million in revenue over three years.",
  },
  {
    name: "Penni Payments",
    category: "Fintech",
    image: "/images/portfolio/project-4.jpg",
    description: "Built a new website for a new product line, helping them reposition and elevate their brand.",
  },
  {
    name: "Far North Crane",
    category: "Crane & Rigging",
    image: "/images/portfolio/project-5.jpg",
    description: "Continues to lead their market as a crane service working on major commercial projects.",
  },
  {
    name: "Broudy Tennis",
    category: "Sports & Education",
    image: "/images/portfolio/project-6.jpg",
    description: "Elevated his brand and helped him start selling tennis course subscriptions online.",
  },
  {
    name: "DFI Forensics",
    category: "Digital Forensics",
    image: "/images/portfolio/project-7.jpg",
    description: "Ranked in the top positions locally for digital forensics — and still owns that position today.",
  },
  {
    name: "JDG Interior Design",
    category: "Interior Design",
    image: "/images/portfolio/project-8.jpg",
    description: "Visuals are everything — we built a site that showcases the quality of their work beautifully.",
  },
];

export const stats = {
  projectsCompleted: 150,
  clientsServed: 80,
  yearsExperience: 8,
  avgLighthouse: 96,
};

export const painPoints = [
  {
    title: "Cookie-cutter templates",
    description:
      "You deserve a site built for your brand, not recycled from a theme store.",
  },
  {
    title: "Developers who disappear",
    description:
      "You've been burned by freelancers who vanish mid-project and miss every deadline.",
  },
  {
    title: "Sites that don't perform",
    description:
      "A beautiful website that doesn't rank, doesn't convert, and doesn't grow — is just an expensive business card.",
  },
  {
    title: "Agencies that don't specialize",
    description:
      "Working with a generalist agency on a Webflow project is like hiring a GP for surgery.",
  },
];

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

/* ─── Expanded FAQs (SEO + AEO) ─── */

export const expandedFaqs: FAQItem[] = [
  // Existing FAQs (migrated)
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
  // New AEO-targeted FAQs
  {
    category: "webflow",
    question: "What is Webflow?",
    answer: "Webflow is a professional web design and development platform that combines a visual builder with the power of clean, production-ready code. Unlike WordPress or Squarespace, Webflow generates semantic HTML, CSS, and JavaScript — meaning your site loads faster, ranks better in search engines, and requires no plugins to maintain. It is the platform of choice for over 300,000 businesses worldwide, from startups to Fortune 500 companies.",
  },
  {
    category: "pricing",
    question: "How much does a Webflow website cost in Phoenix?",
    answer: "A professionally designed and developed Webflow website in Phoenix typically ranges from $5,000 to $50,000+, depending on scope and complexity. A marketing site with 5–10 pages starts around $5,000–$12,000. E-commerce builds run $12,000–$30,000. Enterprise-level Webflow projects with custom CMS architecture, integrations, and advanced animations start at $25,000. Every project includes strategy, design, development, SEO optimization, and a 30-day post-launch support period.",
  },
  {
    category: "webflow",
    question: "Why choose Webflow over WordPress?",
    answer: "Webflow eliminates the maintenance burden that comes with WordPress. There are no plugins to update, no security patches to worry about, and no database to manage. Webflow sites load 30–50% faster out of the box, include built-in hosting on AWS infrastructure, and give your team a visual CMS editor that is far more intuitive than the WordPress dashboard. For businesses that want a modern, secure, and fast website without ongoing developer dependency, Webflow is the clear choice.",
  },
  {
    category: "webflow",
    question: "Can Webflow handle e-commerce?",
    answer: "Yes. Webflow E-commerce supports up to 15,000 products with fully customizable product pages, cart, and checkout flows. It integrates with Stripe for payment processing, handles physical and digital products, supports discount codes, and includes inventory management. For Arizona businesses that need a design-forward online store without the plugin headaches of WooCommerce or the template constraints of Shopify, Webflow E-commerce is an excellent fit.",
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
    answer: "Yes. We specialize in WordPress-to-Webflow migrations for Arizona businesses. The process includes content auditing and migration, 301 redirect mapping to preserve your SEO equity, design modernization, CMS structure setup in Webflow, and thorough QA testing. Most migrations take 4–6 weeks. We ensure zero downtime during the cutover and monitor search performance closely for the first 90 days post-migration.",
  },
  {
    category: "webflow",
    question: "What is Webflow CMS?",
    answer: "Webflow CMS is a built-in content management system that lets you create dynamic, database-driven content without code. You define custom content structures — blog posts, team members, case studies, product listings — and Webflow automatically generates pages from templates. Unlike WordPress, which relies on dozens of plugins, Webflow CMS is native to the platform, meaning faster load times, no security vulnerabilities from third-party code, and a much simpler editing experience for your team.",
  },
  {
    category: "general",
    question: "Why hire a Webflow agency instead of a freelancer?",
    answer: "A Webflow agency brings a full team — strategists, designers, developers, and SEO specialists — to every project. Freelancers are often one person wearing many hats, which leads to blind spots in design, performance, or search optimization. An agency also provides continuity: if your project lead is unavailable, the work continues. Phoenix Webflow Agency offers dedicated project management, structured timelines, quality assurance processes, and ongoing retainer support that individual freelancers simply cannot match.",
  },
  {
    category: "local",
    question: "Why should I hire a Webflow agency in Phoenix?",
    answer: "Working with a local Phoenix Webflow agency means you get a team that understands the Arizona market — the competitive landscape, local search dynamics, and what Phoenix customers expect from a business website. We are available for in-person strategy sessions, understand the seasonal patterns of Arizona industries, and have a portfolio of local success stories. Local expertise combined with Webflow specialization gives your business a measurable advantage.",
  },
  {
    category: "webflow",
    question: "What is the difference between Webflow and Squarespace?",
    answer: "Webflow gives you full design freedom and clean code output. Squarespace is a template-based builder with limited customization. Webflow supports complex animations, custom CMS structures, and client-friendly content editing without the constraints of a rigid template system. For businesses that need a unique, high-performance website rather than a generic template, Webflow is the professional choice.",
  },
];

/* ─── Webflow Services Breakdown ─── */

export const webflowServices: WebflowService[] = [
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
    longDescription: "We build production-grade Webflow sites with clean class naming, responsive layouts, accessible markup, and performance scores above 95. Every build includes SEO optimization, analytics setup, and CMS training for your team.",
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

/* ─── Platform Comparison ─── */

export const platformComparison: ComparisonRow[] = [
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

/* ─── Industries Served ─── */

export const industriesServed: IndustryItem[] = [
  {
    name: "Healthcare & Medical",
    icon: "Heart",
    description: "HIPAA-aware marketing sites, patient portals, and provider directories for Phoenix-area healthcare practices and medical groups.",
    color: "#BCEFFF",
  },
  {
    name: "Real Estate",
    icon: "Building",
    description: "Property showcase sites, IDX integrations, and lead generation platforms for Arizona's competitive real estate market.",
    color: "#F79C42",
  },
  {
    name: "Hospitality & Tourism",
    icon: "Plane",
    description: "Booking-driven websites for hotels, resorts, restaurants, and tour operators across the Phoenix metro and greater Arizona.",
    color: "#FFDF40",
  },
  {
    name: "SaaS & Technology",
    icon: "Cpu",
    description: "High-converting marketing sites, product pages, and documentation portals for Arizona's growing tech startup ecosystem.",
    color: "#C4EF7A",
  },
  {
    name: "Professional Services",
    icon: "Briefcase",
    description: "Law firms, accounting practices, consulting firms, and financial services across the Phoenix metropolitan area.",
    color: "#71CFA3",
  },
  {
    name: "E-Commerce & Retail",
    icon: "ShoppingBag",
    description: "Design-forward online stores for Arizona brands ready to sell directly to customers with Webflow's native commerce platform.",
    color: "#DEDA8D",
  },
];

/* ─── Pricing Tiers ─── */

export const pricingTiers: PricingTier[] = [
  {
    name: "Marketing Site",
    priceRange: "$5,000 – $12,000",
    description: "Perfect for businesses that need a professional online presence that ranks and converts.",
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
    priceRange: "$12,000 – $25,000",
    description: "For businesses ready to use their website as a lead generation and growth engine.",
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
    priceRange: "$25,000+",
    description: "Complex builds with e-commerce, multi-collection CMS, and enterprise-grade integrations.",
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

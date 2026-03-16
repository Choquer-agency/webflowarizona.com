/* eslint-disable @typescript-eslint/no-unused-vars */
import { FAQItem, ProcessStep } from "./config";
import { getCluster, getCurrency } from "./clusters";

/* ─── Industry Page Config ─── */

export interface IndustryPageConfig {
  slug: string;
  title: string;
  eyebrow: string;
  metaTitle: (locality: string, region: string) => string;
  metaDescription: (locality: string, region: string) => string;
  heroH1: (locality: string, region: string) => string;
  heroSubhead: (locality: string, region: string) => string;
  heroQualifier: (locality: string, region: string) => string;
  /** Why businesses in this industry struggle with their current website */
  painPoints: (locality: string, region: string, slug: string) => { title: string; description: string }[];
  /** Why Webflow is the right platform for this industry */
  whyWebflow: (locality: string, region: string, slug: string) => { title: string; description: string }[];
  processSteps: ProcessStep[];
  faqs: (locality: string, region: string, slug: string) => FAQItem[];
  ctaLabel: string;
  /** Maps cluster IDs to color accent for this industry */
  color: string;
  icon: string;
}

/* ─── Industry Page Configs ─── */

export const industryMap: Record<string, IndustryPageConfig> = {
  healthcare: {
    slug: "healthcare",
    title: "Healthcare & Medical",
    eyebrow: "Healthcare Web Design",
    color: "#BCEFFF",
    icon: "Heart",
    ctaLabel: "Get a Free Healthcare Website Quote",
    metaTitle: (locality, region) =>
      `Healthcare Web Design in ${locality} | ${region} Webflow Agency`,
    metaDescription: (locality, region) =>
      `HIPAA-aware Webflow websites for healthcare practices in ${locality}, ${region}. Patient portals, provider directories, and medical practice websites that build trust and generate appointments.`,
    heroH1: (locality, region) =>
      `Webflow websites for healthcare in ${region}`,
    heroSubhead: (_locality, region) =>
      `Your ${region} practice deserves a website that builds patient trust from the first click. We design HIPAA-aware, high-performance healthcare websites on Webflow — fast, secure, and built to convert visitors into booked appointments.`,
    heroQualifier: (_locality, region) =>
      `For ${region} healthcare practices, clinics, and medical groups ready to invest in a website that actually generates patients.`,
    painPoints: (locality, _region, slug) => {
      const cluster = getCluster(slug);
      const base = [
        {
          title: "Outdated design erodes trust",
          description:
            "Patients judge your practice by your website. A dated, slow site signals that your care might be dated too. First impressions happen online before they walk through your door.",
        },
        {
          title: "No online booking integration",
          description:
            "If patients can't book an appointment from your website in 30 seconds, they'll find a practice that lets them. Phone-only booking is losing you patients every day.",
        },
        {
          title: "Poor mobile experience",
          description:
            "Over 70% of healthcare searches happen on mobile. If your site isn't mobile-optimized, you're invisible to the majority of potential patients searching for care.",
        },
      ];
      if (cluster.id === "us-west-tech" || cluster.id === "us-southwest") {
        base.push({
          title: "HIPAA compliance gaps",
          description:
            `Your website handles patient inquiries, contact forms, and potentially PHI. A non-compliant site puts your ${locality} practice at risk for penalties that can reach $50,000+ per violation.`,
        });
      } else if (cluster.id === "asia-pacific") {
        base.push({
          title: "Regulatory compliance gaps",
          description:
            "Healthcare websites must meet local regulatory standards for medical advertising and patient data handling. A non-compliant site risks penalties and damages patient trust.",
        });
      } else {
        base.push({
          title: "GDPR & patient data risks",
          description:
            "Healthcare websites handle sensitive patient inquiries and personal data. Non-compliant forms and tracking can result in significant fines and reputational damage.",
        });
      }
      base.push({
        title: "Invisible in local search",
        description:
          `When someone searches "doctor near me" or "clinic in ${locality}", your competitors show up first because their sites are optimized for local SEO. Yours isn't.`,
      });
      return base;
    },
    whyWebflow: (locality, region, slug) => {
      const cluster = getCluster(slug);
      const items = [
        {
          title: "Lightning-fast load times",
          description:
            "Webflow sites score 90+ on Core Web Vitals. For healthcare, speed isn't just UX — Google uses it to rank local practices. Faster site = higher in search results = more patients.",
        },
        {
          title: "Easy content updates",
          description:
            "Your office manager can update hours, add providers, post health articles, and manage location pages — all without calling a developer or submitting a ticket.",
        },
        {
          title: "Built-in SEO for local search",
          description:
            `Clean semantic code, schema markup for medical practices, and optimized meta tags help your ${locality} practice rank for the searches that matter: "dentist near me", "${locality} family doctor", "${region} specialist".`,
        },
        {
          title: "Secure by default",
          description:
            "Webflow includes SSL, enterprise-grade hosting, automatic backups, and DDoS protection. No plugins to patch, no security vulnerabilities to monitor, no server maintenance.",
        },
      ];
      if (cluster.id === "canada") {
        items.push({
          title: "Bilingual-ready",
          description:
            "Serve French and English-speaking patients with CMS-powered language switching. Each language gets its own URL path for proper SEO indexing across Canadian search.",
        });
      }
      return items;
    },
    processSteps: [
      {
        step: 1,
        title: "Practice Audit & Strategy",
        description:
          "We audit your current site, analyze your local competition, map your patient journey, and define the content strategy that will drive appointment bookings.",
      },
      {
        step: 2,
        title: "Design & Patient Experience",
        description:
          "Custom design focused on patient trust — provider profiles, service pages, location information, and a booking flow that converts visitors into appointments.",
      },
      {
        step: 3,
        title: "Build & Compliance Check",
        description:
          "Your site is built on Webflow with compliant forms, secure contact handling, accessibility standards, and CMS collections for providers, services, and blog content.",
      },
      {
        step: 4,
        title: "Launch & Local SEO",
        description:
          "We launch with 301 redirects (if migrating), local schema markup, Google Business Profile optimization, and 90 days of search performance monitoring.",
      },
    ],
    faqs: (locality, region, slug) => {
      const cluster = getCluster(slug);
      const faqs: FAQItem[] = [
        {
          category: "process",
          question: `How long does it take to build a healthcare website in ${region}?`,
          answer: `Most healthcare websites take 4–6 weeks from kickoff to launch. A standard practice site with 8–15 pages, provider profiles, and a blog takes about 4 weeks. Larger multi-location practices with booking integrations and patient portals take 5–6 weeks. We provide a detailed timeline during the strategy phase.`,
        },
        {
          category: "webflow",
          question: "Is Webflow HIPAA compliant for healthcare websites?",
          answer: `Webflow is not a HIPAA-covered entity, but we build healthcare sites with compliance best practices: forms route through HIPAA-compliant processors, no PHI is stored in Webflow's CMS, and all patient-facing forms include proper consent and disclosure language. For practices that need full HIPAA compliance, we integrate with compliant third-party form processors and patient portals.`,
        },
        {
          category: "general",
          question: "Can patients book appointments directly from the website?",
          answer: `Yes. We integrate your Webflow site with your existing booking system — whether that's Zocdoc, Calendly, Acuity, or your EHR's native scheduling. Patients can book directly from any page, and the booking flow matches your site's design. No redirects to third-party pages that break trust.`,
        },
        {
          category: "pricing",
          question: `How much does a healthcare website cost in ${region}?`,
          answer: `Healthcare website pricing depends on scope and complexity. A standard practice site with 8–15 pages starts at ${formatPrice(5000, slug)}–${formatPrice(12000, slug)}. Multi-location practices with custom CMS, booking integration, and patient portals run ${formatPrice(12000, slug)}–${formatPrice(25000, slug)}. We provide a detailed quote after the strategy consultation.`,
        },
        {
          category: "webflow",
          question: `Can my ${locality} staff update the website without a developer?`,
          answer: `Absolutely. Webflow's visual editor lets your staff update text, images, provider bios, office hours, blog posts, and service descriptions without touching code. We provide training after launch so your team is confident managing day-to-day content updates.`,
        },
        {
          category: "general",
          question: "Will you migrate our existing website content?",
          answer: `Yes. We migrate all content from your existing site — pages, blog posts, provider profiles, images, and documents. We also audit your content during migration to identify outdated information, improve SEO, and ensure everything is accurate before launch.`,
        },
      ];
      if (cluster.id === "canada") {
        faqs.push({
          category: "local",
          question: "Can you build a bilingual healthcare website for Canadian patients?",
          answer: `Yes. We build bilingual Webflow sites with CMS-powered French/English switching. Each language version gets its own URL for proper SEO in both languages. This is essential for practices in Quebec or those serving bilingual patient populations across ${region}.`,
        });
      }
      return faqs;
    },
  },

  trades: {
    slug: "trades",
    title: "Trades & Home Services",
    eyebrow: "Trades & Contractor Web Design",
    color: "#FFDF40",
    icon: "Briefcase",
    ctaLabel: "Get a Free Trades Website Quote",
    metaTitle: (locality, region) =>
      `Trades & Contractor Web Design in ${locality} | ${region} Webflow Agency`,
    metaDescription: (locality, region) =>
      `Professional Webflow websites for plumbers, electricians, HVAC companies, roofers, and contractors in ${locality}, ${region}. Generate more leads with a site that ranks in local search.`,
    heroH1: (_locality, region) =>
      `Webflow websites for trades & contractors in ${region}`,
    heroSubhead: (_locality, region) =>
      `Your ${region} trade business lives and dies by referrals and local search. We build Webflow websites that do both — showcase your work, rank in Google, and generate quote requests while you're on the job.`,
    heroQualifier: (_locality, region) =>
      `For plumbers, electricians, HVAC companies, roofers, and contractors across ${region} ready to stop losing jobs to competitors with better websites.`,
    painPoints: (locality, _region, slug) => {
      const cluster = getCluster(slug);
      const base = [
        {
          title: "Losing jobs to online competitors",
          description:
            `When homeowners search "plumber near me" or "electrician in ${locality}", the contractor with the best website gets the call. If that's not you, you're losing jobs every single day.`,
        },
        {
          title: "No way to show your work",
          description:
            "Your best marketing is the work you've already done. But without a portfolio on your site, potential customers can't see the quality of your craftsmanship before they call.",
        },
        {
          title: "Phone is your only lead source",
          description:
            "If your website doesn't have a quote request form, online booking, or even a working contact page — you're relying 100% on word-of-mouth and yard signs.",
        },
        {
          title: "DIY site looks unprofessional",
          description:
            "A Wix or GoDaddy template with stock photos tells customers you're small-time. Homeowners trust contractors whose online presence matches the quality of their work.",
        },
      ];
      if (cluster.id === "canada") {
        base.push({
          title: "No licensing or certification visibility",
          description:
            "Canadian homeowners check credentials before hiring. If your licenses, certifications, and insurance aren't front-and-center on your website, you're losing trust to competitors who display theirs.",
        });
      } else {
        base.push({
          title: "Zero presence in map results",
          description:
            `Google Maps is where homeowners find contractors. Without local SEO, schema markup, and a Google Business Profile that's connected to your site, you're invisible in ${locality} map results.`,
        });
      }
      return base;
    },
    whyWebflow: (locality, _region, _slug) => [
        {
          title: "Rank higher in local search",
          description:
            `Webflow's clean code and fast load times give your ${locality} business a ranking advantage. Combined with local schema markup and optimized service area pages, your site shows up where it matters: Google Maps and "near me" searches.`,
        },
        {
          title: "Showcase your work beautifully",
          description:
            "Before-and-after project galleries, job-specific case studies, and photo portfolios that load instantly. Show homeowners the quality of your work before they ever pick up the phone.",
        },
        {
          title: "Generate leads 24/7",
          description:
            "Quote request forms, service-specific landing pages, and click-to-call buttons that work while you're on the job. Every page is designed to convert visitors into booked estimates.",
        },
        {
          title: "Update it yourself — no developer needed",
          description:
            "Add new project photos, update your service areas, post seasonal promotions, and manage your blog from your phone or tablet. Webflow's editor is built for business owners, not developers.",
        },
    ],
    processSteps: [
      {
        step: 1,
        title: "Business & Market Audit",
        description:
          "We analyze your service area, competitors, and the specific searches homeowners use to find contractors like you. This informs the site structure and SEO strategy.",
      },
      {
        step: 2,
        title: "Design for Trust & Conversion",
        description:
          "Custom design focused on what trade customers care about: project photos, reviews, licensing, service areas, and a dead-simple way to request a quote.",
      },
      {
        step: 3,
        title: "Build & Optimize",
        description:
          "Your site is built on Webflow with service area pages, project portfolio CMS, review integration, contact forms, and local SEO baked into every page.",
      },
      {
        step: 4,
        title: "Launch & Local Domination",
        description:
          "We launch with Google Business Profile optimization, local schema markup, and service area targeting. Then we monitor your search rankings for 90 days to ensure you're climbing.",
      },
    ],
    faqs: (locality, region, slug) => [
      {
        category: "pricing",
        question: `How much does a contractor website cost in ${region}?`,
        answer: `A professional trade business website typically costs ${formatPrice(3500, slug)}–${formatPrice(10000, slug)}, depending on the number of service pages, portfolio features, and integrations. A standard 5–10 page site with quote forms and a project gallery starts around ${formatPrice(3500, slug)}. Multi-service businesses with booking integration and service area pages run ${formatPrice(7000, slug)}–${formatPrice(10000, slug)}.`,
      },
      {
        category: "process",
        question: "How long does it take to build a trades website?",
        answer: `Most trade and contractor websites take 3–4 weeks from kickoff to launch. A straightforward site with service pages, portfolio, and contact forms can be done in 3 weeks. Businesses with multiple service areas, booking integration, and extensive project galleries may take 4–5 weeks.`,
      },
      {
        category: "general",
        question: `Will my ${locality} business rank higher on Google with a new site?`,
        answer: `Yes — that's the primary goal. We build every page with local SEO best practices: service area targeting, local schema markup, optimized meta tags, and fast load times. Combined with Google Business Profile optimization, our clients typically see significant ranking improvements within 60–90 days. We monitor your search performance post-launch and provide a performance report.`,
      },
      {
        category: "webflow",
        question: "Can I add new project photos and updates myself?",
        answer: `Absolutely. Webflow's visual editor lets you add new project photos, update service descriptions, post blog articles, and manage your portfolio from any device. We train you on everything after launch — it takes about 15 minutes to learn.`,
      },
      {
        category: "general",
        question: "Do you handle the content and photos, or do I need to provide them?",
        answer: `We work with what you have. If you've got project photos on your phone, we'll optimize and organize them into a professional portfolio. We write all the copy for your service pages, about page, and blog — based on a quick interview about your business. You don't need to write anything.`,
      },
      {
        category: "process",
        question: "Can you set up online booking for estimates?",
        answer: `Yes. We integrate your site with scheduling tools like Calendly, Housecall Pro, Jobber, or ServiceTitan so customers can book estimates directly from your website. The booking flow matches your site's design and feeds into your existing workflow.`,
      },
    ],
  },

  saas: {
    slug: "saas",
    title: "SaaS & Technology",
    eyebrow: "SaaS Web Design",
    color: "#F79C42",
    icon: "Cpu",
    ctaLabel: "Get a Free SaaS Website Quote",
    metaTitle: (locality, region) =>
      `SaaS & Tech Web Design in ${locality} | ${region} Webflow Agency`,
    metaDescription: (locality, region) =>
      `High-converting Webflow marketing sites for SaaS companies and tech startups in ${locality}, ${region}. Designed to drive signups, demos, and product-led growth.`,
    heroH1: (_locality, region) =>
      `Webflow websites for SaaS companies in ${region}`,
    heroSubhead: (_locality, region) =>
      `Your SaaS product is great. Your marketing site should be too. We build Webflow marketing sites for ${region} tech companies that convert visitors into signups, demos, and paying customers.`,
    heroQualifier: (_locality, region) =>
      `For ${region} SaaS startups and tech companies that need a marketing site their team can ship and iterate on — without engineering tickets.`,
    painPoints: (_locality, _region, _slug) => [
      {
        title: "Marketing blocked by engineering",
        description:
          "Every landing page, copy change, and campaign update goes through an engineering sprint. Your marketing team ships at the speed of your dev backlog — not the market.",
      },
      {
        title: "Generic template site",
        description:
          "Your product is unique but your site looks like every other SaaS template. In a crowded market, a generic site means you're competing on features instead of brand.",
      },
      {
        title: "Slow page loads kill conversions",
        description:
          "Every 100ms of load time costs you signups. Heavy frameworks, unoptimized images, and bloated code are silently destroying your conversion rate.",
      },
      {
        title: "No content velocity",
        description:
          "You need to ship landing pages for campaigns, comparison pages for competitors, and feature announcements for launches — but each one takes weeks instead of hours.",
      },
      {
        title: "CRM disconnected from site",
        description:
          `Your forms don't feed your CRM. Your site doesn't track product-qualified leads. Marketing and sales are working from different data because your site isn't connected to your stack.`,
      },
    ],
    whyWebflow: (_locality, _region, _slug) => [
      {
        title: "Ship pages without engineering",
        description:
          "Your marketing team can build and publish landing pages, blog posts, comparison pages, and campaign microsites without a single engineering ticket. Ship at the speed of your market.",
      },
      {
        title: "Integrate with your stack",
        description:
          "Webflow connects natively to HubSpot, Segment, Salesforce, Marketo, and virtually any tool in your stack. Form submissions feed your CRM. Events fire to your analytics. No middleware needed.",
      },
      {
        title: "Performance that converts",
        description:
          "Webflow sites score 90+ on Core Web Vitals. Clean code, global CDN, and optimized rendering mean your site loads fast everywhere — and fast sites convert more signups.",
      },
      {
        title: "Design that differentiates",
        description:
          "Custom animations, interactive product demos, and brand-forward design that sets you apart from every other SaaS company using the same template. Your brand deserves better.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Product & Market Discovery",
        description:
          "We learn your product, ICP, competitive landscape, and conversion goals. We audit your current site's performance and map the user journey from visitor to signup.",
      },
      {
        step: 2,
        title: "Conversion-Focused Design",
        description:
          "Custom design built around your product's value props — hero messaging, feature sections, social proof, and CTAs optimized for your primary conversion action.",
      },
      {
        step: 3,
        title: "Build & Integrate",
        description:
          "Your site is built on Webflow with CMS collections for blog, changelog, and docs. Forms connect to your CRM. Analytics events fire to Segment or GA4. Everything is wired up.",
      },
      {
        step: 4,
        title: "Launch & Optimize",
        description:
          "We launch, monitor Core Web Vitals, and hand off the site to your marketing team with full training. Your team can now ship pages independently.",
      },
    ],
    faqs: (locality, region, slug) => [
      {
        category: "webflow",
        question: "Can our marketing team really update the site without developers?",
        answer: `Yes — that's the entire point of building on Webflow. Your marketing team can create new landing pages, update copy, publish blog posts, add case studies, and manage CMS content through a visual editor. No code, no engineering tickets, no deploy pipelines. Companies like Jasper, Lattice, and Dropbox use Webflow for exactly this reason.`,
      },
      {
        category: "webflow",
        question: "Does Webflow integrate with HubSpot, Segment, and Salesforce?",
        answer: `Yes. Webflow integrates natively with HubSpot forms and tracking. For Segment, Salesforce, Marketo, and other tools, we connect via native integrations, Zapier, or custom webhooks. Form submissions can route directly to your CRM with full attribution data.`,
      },
      {
        category: "pricing",
        question: `How much does a SaaS marketing website cost in ${region}?`,
        answer: `SaaS marketing sites typically range from ${formatPrice(8000, slug)}–${formatPrice(30000, slug)} depending on scope. A focused marketing site with 10–15 pages, blog, and CRM integration starts at ${formatPrice(8000, slug)}–${formatPrice(15000, slug)}. Larger builds with custom animations, product tours, multi-product pages, and advanced integrations run ${formatPrice(15000, slug)}–${formatPrice(30000, slug)}.`,
      },
      {
        category: "process",
        question: "How long does it take to build a SaaS website on Webflow?",
        answer: `Most SaaS marketing sites take 5–7 weeks. A standard marketing site with homepage, product pages, pricing, blog, and integrations takes 5 weeks. Larger builds with custom animations, interactive elements, and multi-product architecture take 6–7 weeks.`,
      },
      {
        category: "general",
        question: "Will the site be optimized for conversions?",
        answer: `Conversion optimization is built into every decision — from information architecture to CTA placement. We structure pages around your primary conversion action (demo request, free trial, signup), include social proof throughout, and build A/B testing infrastructure so your team can optimize post-launch.`,
      },
      {
        category: "webflow",
        question: "Can Webflow handle our blog, changelog, and documentation?",
        answer: `Webflow's CMS handles blogs and changelogs natively with rich text, categories, authors, and custom fields. For documentation, Webflow works well for marketing-facing docs. If you need developer-facing docs with code blocks and versioning, we can integrate Webflow with a dedicated docs tool like GitBook or Mintlify.`,
      },
    ],
  },

  ecommerce: {
    slug: "ecommerce",
    title: "E-Commerce & Online Retail",
    eyebrow: "E-Commerce Web Design",
    color: "#DEDA8D",
    icon: "ShoppingBag",
    ctaLabel: "Get a Free E-Commerce Quote",
    metaTitle: (locality, region) =>
      `E-Commerce Web Design in ${locality} | ${region} Webflow Agency`,
    metaDescription: (locality, region) =>
      `Design-forward Webflow e-commerce stores for ${locality}, ${region} brands. Custom product pages, zero transaction fees, and a shopping experience that matches your brand.`,
    heroH1: (_locality, region) =>
      `Webflow e-commerce for ${region} brands`,
    heroSubhead: (_locality, region) =>
      `Your brand is more than a store. We build Webflow e-commerce sites for ${region} businesses that combine stunning design with seamless shopping — fully custom product pages, zero transaction fees, and a brand experience that converts.`,
    heroQualifier: (_locality, region) =>
      `For ${region} DTC brands and online retailers who want full design control and a store that reflects the quality of their products.`,
    painPoints: (_locality, _region, _slug) => [
      {
        title: "Template-locked store design",
        description:
          "Every Shopify or WooCommerce store looks the same. When your store looks like every competitor's, you're competing on price instead of brand. Design differentiation drives premium pricing.",
      },
      {
        title: "App fees eating your margins",
        description:
          "Reviews app, size guide app, upsell app, email capture app — each one costs $20–$100/month and adds script bloat that slows your site. It adds up fast.",
      },
      {
        title: "Slow site = lost sales",
        description:
          "Every second of load time costs you 7% in conversions. Bloated themes and app scripts make most e-commerce sites painfully slow — especially on mobile where most shoppers browse.",
      },
      {
        title: "No brand storytelling",
        description:
          "Your product pages exist in a vacuum. There's no space for your brand story, your process, your values — the things that turn one-time buyers into loyal customers.",
      },
      {
        title: "Transaction fees on every sale",
        description:
          "Shopify charges 0.5–2% transaction fees unless you use their payment processor. On $500K in annual sales, that's $2,500–$10,000 in fees you don't need to pay.",
      },
    ],
    whyWebflow: (_locality, _region, _slug) => [
      {
        title: "Zero transaction fees",
        description:
          "Webflow E-commerce charges 0% transaction fees on all plans. You only pay Stripe's standard processing (2.9% + 30¢). Keep more of every sale.",
      },
      {
        title: "Full design control",
        description:
          "Every product page, collection page, cart, and checkout is fully customizable. No theme limitations. Your store looks exactly like your brand — not a template.",
      },
      {
        title: "Built-in performance",
        description:
          "No app bloat, no plugin scripts, no theme overhead. Webflow e-commerce sites load fast because there's nothing unnecessary slowing them down.",
      },
      {
        title: "Content + commerce together",
        description:
          "Build editorial lookbooks, brand story pages, ingredient breakdowns, and rich content alongside your products. Tell your brand story where it matters — next to the buy button.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Store Audit & Strategy",
        description:
          "We analyze your products, customer journey, competitive landscape, and conversion goals. If migrating, we map all products, collections, and URLs for a seamless transition.",
      },
      {
        step: 2,
        title: "Brand-Forward Design",
        description:
          "Custom design for every page type — product, collection, cart, checkout, about, and editorial. Your store is designed to feel like a brand experience, not a catalog.",
      },
      {
        step: 3,
        title: "Build & Product Migration",
        description:
          "Your store is built on Webflow E-commerce with Stripe integration, inventory management, discount codes, and email marketing connections. All products migrated and verified.",
      },
      {
        step: 4,
        title: "Launch & Growth Setup",
        description:
          "We launch with SEO-optimized product pages, conversion tracking, abandoned cart recovery, and email capture. Plus 90 days of post-launch performance monitoring.",
      },
    ],
    faqs: (locality, region, slug) => [
      {
        category: "webflow",
        question: "How many products can Webflow E-commerce handle?",
        answer: `Webflow E-commerce supports up to 15,000 products on their Enterprise plan. Most ${region} brands we work with have 50–500 products, which fits comfortably within standard plans. For catalogs over 15,000 SKUs, we'd recommend a headless approach or staying on a dedicated e-commerce platform.`,
      },
      {
        category: "pricing",
        question: `How much does an e-commerce website cost in ${region}?`,
        answer: `E-commerce website pricing depends on catalog size and complexity. A DTC brand site with 50–200 products starts at ${formatPrice(10000, slug)}–${formatPrice(18000, slug)}. Larger stores with advanced filtering, subscription flows, and custom checkout run ${formatPrice(18000, slug)}–${formatPrice(35000, slug)}. All pricing includes product migration if you're moving from another platform.`,
      },
      {
        category: "general",
        question: "Can you migrate my Shopify store to Webflow?",
        answer: `Yes. We migrate products, collections, images, and blog content from Shopify to Webflow E-commerce. The migration includes 301 redirects for all URLs, SEO preservation, and Stripe payment setup. Your store stays live on Shopify until the Webflow site is ready to go — zero downtime.`,
      },
      {
        category: "webflow",
        question: "Does Webflow support subscriptions and recurring payments?",
        answer: `Webflow E-commerce supports memberships and recurring payments through Stripe integration. For more complex subscription logic (tiered plans, usage-based billing), we integrate with tools like Memberstack or Stripe Billing to extend Webflow's native capabilities.`,
      },
      {
        category: "process",
        question: "How long does it take to build a Webflow e-commerce site?",
        answer: `Most e-commerce builds take 5–8 weeks. A standard DTC store with 50–200 products takes 5–6 weeks. Larger catalogs with custom filtering, editorial content, and complex product variants take 6–8 weeks. Migration from another platform adds 1–2 weeks for product transfer and QA.`,
      },
      {
        category: "general",
        question: "Can I manage products and orders without a developer?",
        answer: `Yes. Webflow's e-commerce dashboard lets you add products, manage inventory, process orders, create discount codes, and update product content without any technical knowledge. We train your team on everything after launch.`,
      },
    ],
  },

  hospitality: {
    slug: "hospitality",
    title: "Hospitality & Tourism",
    eyebrow: "Hospitality Web Design",
    color: "#C4EF7A",
    icon: "Plane",
    ctaLabel: "Get a Free Hospitality Website Quote",
    metaTitle: (locality, region) =>
      `Hospitality & Tourism Web Design in ${locality} | ${region} Webflow Agency`,
    metaDescription: (locality, region) =>
      `Webflow websites for restaurants, hotels, resorts, and tour operators in ${locality}, ${region}. Booking integrations, stunning imagery, and mobile-first design that drives reservations.`,
    heroH1: (_locality, region) =>
      `Webflow websites for hospitality in ${region}`,
    heroSubhead: (_locality, region) =>
      `In hospitality, your website is the first impression. We build Webflow sites for ${region} restaurants, hotels, and tourism businesses that capture the experience of being there — and convert browsers into bookings.`,
    heroQualifier: (_locality, region) =>
      `For ${region} restaurants, hotels, resorts, and tour operators ready for a website as memorable as the experience you offer.`,
    painPoints: (locality, _region, _slug) => [
      {
        title: "Photos don't do you justice",
        description:
          "Your current site compresses beautiful photography into tiny thumbnails on a slow-loading template. The website experience should make people feel like they're already there.",
      },
      {
        title: "No direct booking flow",
        description:
          "If guests have to leave your site to book a room or a table, you're losing them to OTAs and competitors. Every redirect is a drop-off point.",
      },
      {
        title: "Seasonal content is stale",
        description:
          "Menus change, events rotate, seasonal packages come and go — but your site still shows last year's offerings because updating it requires a developer.",
      },
      {
        title: "Terrible mobile experience",
        description:
          `Travelers search on mobile. If your ${locality} hotel or restaurant site isn't fast, beautiful, and easy to navigate on a phone, you're invisible to the majority of potential guests.`,
      },
      {
        title: "OTAs own your brand",
        description:
          "Booking.com and TripAdvisor show your property — but with their branding, their upsells, and their commission. Your own website should be the best place to book.",
      },
    ],
    whyWebflow: (_locality, _region, _slug) => [
      {
        title: "Immersive visual experiences",
        description:
          "Full-bleed imagery, smooth scroll transitions, and cinematic page layouts that showcase your property or restaurant the way it deserves. No template constraints.",
      },
      {
        title: "Integrated booking",
        description:
          "Embed your booking engine directly into your Webflow site — whether it's OpenTable, Resy, Cloudbeds, or a custom integration. Guests book without ever leaving your brand.",
      },
      {
        title: "Easy seasonal updates",
        description:
          "Your team can update menus, seasonal packages, event calendars, and room rates in minutes. Webflow's CMS makes content management intuitive for non-technical staff.",
      },
      {
        title: "Mobile-first performance",
        description:
          "Webflow sites score 90+ on mobile Lighthouse. Fast load times and responsive design mean your site works beautifully on the devices travelers actually use.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Brand & Guest Journey Audit",
        description:
          "We immerse ourselves in your brand, photograph your property (or work with your existing assets), and map the guest journey from search to booking to arrival.",
      },
      {
        step: 2,
        title: "Immersive Design",
        description:
          "Custom design that captures the experience of your space — full-screen imagery, atmospheric scrolling, and layouts designed to evoke the feeling of being there.",
      },
      {
        step: 3,
        title: "Build & Integrate Booking",
        description:
          "Your site is built on Webflow with CMS for menus, events, rooms, and packages. Booking engines are embedded seamlessly. Forms connect to your PMS or reservation system.",
      },
      {
        step: 4,
        title: "Launch & Visibility",
        description:
          "We launch with local SEO, Google Business Profile optimization, and schema markup for restaurants or hotels. Your site becomes your best direct booking channel.",
      },
    ],
    faqs: (locality, region, slug) => [
      {
        category: "pricing",
        question: `How much does a hospitality website cost in ${region}?`,
        answer: `Hospitality website pricing depends on the type of business and scope. A restaurant site with menu CMS and reservation integration starts at ${formatPrice(5000, slug)}–${formatPrice(10000, slug)}. Hotel and resort sites with room galleries, booking engine integration, and event pages run ${formatPrice(12000, slug)}–${formatPrice(25000, slug)}.`,
      },
      {
        category: "webflow",
        question: "Can we embed our booking system into the Webflow site?",
        answer: `Yes. We integrate directly with booking platforms like OpenTable, Resy, TheFork, Cloudbeds, and SiteMinder. The booking widget is embedded within your site's design — no redirects to third-party pages. Guests stay on your brand from browse to book.`,
      },
      {
        category: "process",
        question: "How long does it take to build a hospitality website?",
        answer: `Most hospitality websites take 4–6 weeks. A restaurant site with menu CMS and reservations can be done in 4 weeks. Hotels and resorts with room galleries, multiple booking integrations, and event calendars take 5–6 weeks.`,
      },
      {
        category: "general",
        question: "Can our staff update menus and events without a developer?",
        answer: `Absolutely. Webflow's CMS lets your staff update menus, pricing, seasonal specials, event calendars, and photo galleries from any device. We set up CMS collections specifically for your content types and train your team after launch.`,
      },
      {
        category: "general",
        question: "Will the site help us reduce OTA dependency?",
        answer: `That's a core goal. By building a direct booking experience that's better than OTA listings, optimizing for local and destination search, and implementing retargeting and email capture, your own website becomes the preferred booking channel. Our hospitality clients typically see a 20–40% increase in direct bookings within 6 months.`,
      },
      {
        category: "webflow",
        question: "Can you build a multi-language hospitality site?",
        answer: `Yes. We build multilingual Webflow sites for hotels and tourism businesses that serve international guests. Each language version gets its own URL path for proper SEO in every market, and your team can manage translations through the CMS.`,
      },
    ],
  },

  "professional-services": {
    slug: "professional-services",
    title: "Professional Services",
    eyebrow: "Professional Services Web Design",
    color: "#71CFA3",
    icon: "Building",
    ctaLabel: "Get a Free Consultation",
    metaTitle: (locality, region) =>
      `Professional Services Web Design in ${locality} | ${region} Webflow Agency`,
    metaDescription: (locality, region) =>
      `Credibility-first Webflow websites for law firms, accounting practices, and consultants in ${locality}, ${region}. Generate qualified inbound leads through search and content.`,
    heroH1: (_locality, region) =>
      `Webflow websites for professional services in ${region}`,
    heroSubhead: (_locality, region) =>
      `Your ${region} firm's reputation is built on expertise. Your website should prove it. We build Webflow sites for law firms, accountants, and consultants that establish credibility and generate qualified inbound leads.`,
    heroQualifier: (_locality, region) =>
      `For ${region} law firms, accounting practices, and consulting firms ready for a website that generates business — not just sits there.`,
    painPoints: (locality, _region, _slug) => [
      {
        title: "Your site doesn't generate leads",
        description:
          "Your website is a digital brochure — it exists, but it doesn't bring in clients. Referrals dry up, and your site isn't picking up the slack because it's not built to convert.",
      },
      {
        title: "Competitors outrank you",
        description:
          `When someone searches "business lawyer in ${locality}" or "CPA near me", your competitors appear first. Their sites are optimized for search. Yours isn't.`,
      },
      {
        title: "Outdated design undermines credibility",
        description:
          "Clients Google you before they hire you. An outdated website with stock photos and 2015 design patterns makes your firm look behind the times — regardless of your actual expertise.",
      },
      {
        title: "Content is static and stale",
        description:
          "Your team has expertise worth sharing — legal insights, tax updates, industry perspectives — but your site makes publishing content so difficult that the blog hasn't been updated in months.",
      },
      {
        title: "No way to demonstrate expertise",
        description:
          "You win clients through expertise, but your website doesn't showcase it. No case results, no client outcomes, no thought leadership — just a list of practice areas.",
      },
    ],
    whyWebflow: (locality, _region, _slug) => [
      {
        title: "Credibility-first design",
        description:
          "Clean, authoritative design that communicates expertise before a word is read. Professional typography, strategic whitespace, and layouts that let your credentials and outcomes speak.",
      },
      {
        title: "Content publishing your team will use",
        description:
          "Webflow's editor makes publishing articles, case studies, and updates as easy as writing an email. Your team publishes consistently because the tool doesn't fight them.",
      },
      {
        title: "SEO that drives inbound leads",
        description:
          `Clean code, fast load times, and proper schema markup help your ${locality} firm rank for the searches that matter. Every page is built with search intent in mind.`,
      },
      {
        title: "Secure and maintenance-free",
        description:
          "No plugins to update, no security patches, no server management. Webflow handles hosting, SSL, CDN, and backups — so you can focus on clients, not IT.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Firm Audit & Positioning",
        description:
          "We analyze your firm's positioning, competitive landscape, and target clients. We identify the search terms your ideal clients use and build a content strategy around them.",
      },
      {
        step: 2,
        title: "Credibility-Focused Design",
        description:
          "Custom design that communicates authority — team profiles, practice area pages, case results (where permitted), client testimonials, and a thought leadership section.",
      },
      {
        step: 3,
        title: "Build & Content Structure",
        description:
          "Your site is built on Webflow with CMS collections for team members, practice areas, blog/insights, and case results. Forms connect to your intake system.",
      },
      {
        step: 4,
        title: "Launch & Authority Building",
        description:
          "We launch with local SEO, professional schema markup (Attorney, AccountingService, etc.), and a content calendar for ongoing thought leadership. Plus 90 days of performance monitoring.",
      },
    ],
    faqs: (locality, region, slug) => [
      {
        category: "pricing",
        question: `How much does a professional services website cost in ${region}?`,
        answer: `Professional services websites typically range from ${formatPrice(6000, slug)}–${formatPrice(20000, slug)}. A law firm or accounting practice site with 10–20 pages, team profiles, and CMS starts at ${formatPrice(6000, slug)}–${formatPrice(12000, slug)}. Larger firms with multiple practice areas, client portals, and extensive content architecture run ${formatPrice(12000, slug)}–${formatPrice(20000, slug)}.`,
      },
      {
        category: "process",
        question: "How long does it take to build a professional services website?",
        answer: `Most professional services sites take 4–6 weeks. A standard firm site with team pages, practice areas, and a blog takes 4–5 weeks. Larger firms with multiple offices, extensive attorney/CPA profiles, and content migration take 5–6 weeks.`,
      },
      {
        category: "general",
        question: "Can we publish articles and insights without a developer?",
        answer: `Yes. Webflow's CMS lets your team publish articles, case studies, and firm updates through a visual editor — no code or developer needed. We set up author profiles, categories, and publishing workflows so your team can focus on writing, not formatting.`,
      },
      {
        category: "webflow",
        question: "Will the site be ADA/WCAG accessible?",
        answer: `Accessibility is built into every site we build. We implement proper heading hierarchy, keyboard navigation, focus indicators, sufficient color contrast, alt text, and ARIA labels. For law firms particularly, ADA compliance isn't just ethical — it reduces liability.`,
      },
      {
        category: "general",
        question: `Will the site help our ${locality} firm rank in local search?`,
        answer: `Yes. We build every page with local SEO fundamentals: practice area + location targeting, local schema markup (Attorney, LegalService, AccountingService), Google Business Profile optimization, and a content strategy built around the searches your ideal clients make. Our professional services clients typically see 40–60% more organic traffic within 6 months.`,
      },
      {
        category: "webflow",
        question: "Can Webflow integrate with our client intake system?",
        answer: `Yes. We connect Webflow forms to your intake system — whether that's Clio, PracticePanther, LawPay, or a general CRM like HubSpot or Salesforce. Form submissions route directly to your system with all relevant data fields mapped.`,
      },
    ],
  },
};

/* ─── Helpers ─── */

function formatPrice(usdAmount: number, slug: string): string {
  const currency = getCurrency(slug || "arizona");
  const converted = Math.round(usdAmount * currency.exchangeRate);
  return new Intl.NumberFormat(currency.locale, {
    style: "currency",
    currency: currency.code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(converted);
}

export function getIndustryConfig(slug: string): IndustryPageConfig | undefined {
  return industryMap[slug];
}

export function getAllIndustrySlugs(): string[] {
  return Object.keys(industryMap);
}

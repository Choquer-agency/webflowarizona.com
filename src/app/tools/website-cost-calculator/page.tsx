import { Metadata } from "next";
import { getDomainConfig } from "@/lib/getDomainConfig";
import { ClientLayout } from "@/components/ClientLayout";
import { Nav } from "@/components/Nav";
import { CostCalculator } from "@/components/CostCalculator";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { FAQItem } from "@/content/config";
import { getCurrency } from "@/content/clusters";

export const dynamic = "force-dynamic";

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

function getCalculatorFaqs(locality: string, region: string, slug: string): FAQItem[] {
  return [
    {
      category: "pricing",
      question: `How much does a Webflow website cost in ${region}?`,
      answer: `A professionally built Webflow website in ${region} typically ranges from ${formatPrice(5000, slug)} to ${formatPrice(40000, slug)}, depending on scope and complexity. A marketing site with 5–10 pages starts around ${formatPrice(5000, slug)}–${formatPrice(10000, slug)}. Growth sites with 15–30 pages, animations, and integrations run ${formatPrice(12000, slug)}–${formatPrice(25000, slug)}. Enterprise builds with 30+ pages and e-commerce start at ${formatPrice(25000, slug)}+. Use the calculator above for a personalized estimate.`,
    },
    {
      category: "pricing",
      question: "What factors affect the cost of a website?",
      answer: "The main cost drivers are: number of pages, project type (new build vs redesign vs migration), features needed (CMS, e-commerce, animations, multilingual support), timeline (standard vs rush delivery), and the level of custom design. A simple marketing site costs significantly less than an e-commerce store with custom product pages and checkout flows.",
    },
    {
      category: "pricing",
      question: "Is there a monthly cost after the website is built?",
      answer: `Webflow hosting plans range from $14–$39/month for standard sites, or $29–$212/month for e-commerce. This includes hosting, SSL, CDN, automatic backups, and security — all managed by Webflow. There are no plugin fees, server costs, or maintenance charges like you'd have with WordPress. Your total monthly cost is just the Webflow hosting plan.`,
    },
    {
      category: "process",
      question: "How long does it take to build a Webflow website?",
      answer: "Most Webflow websites take 4–8 weeks from kickoff to launch. A standard 5–10 page marketing site takes 4–5 weeks. Growth sites with CMS, animations, and integrations take 5–6 weeks. E-commerce stores and complex builds take 6–8 weeks. Rush delivery (3–4 weeks) is available for an additional 35%.",
    },
    {
      category: "general",
      question: "What's included in the price?",
      answer: "Every project includes: custom design, responsive development on Webflow, CMS setup and content migration, on-page SEO optimization, schema markup, cross-browser testing, launch support, and post-launch training for your team. We also include 90 days of post-launch support for bug fixes and minor adjustments.",
    },
    {
      category: "pricing",
      question: `Do you offer payment plans for ${region} businesses?`,
      answer: `Yes. We offer flexible payment terms: typically 50% upfront and 50% at launch, or three equal installments for larger projects. We're happy to discuss a payment structure that works for your ${locality} business during the strategy call.`,
    },
    {
      category: "general",
      question: "How accurate is this calculator?",
      answer: "The calculator provides a reliable starting estimate based on typical project scope. Final pricing can vary based on specific requirements, custom functionality, third-party integrations, and content complexity. We recommend using the estimate as a conversation starter — schedule a free strategy call for an exact, detailed quote.",
    },
  ];
}

export async function generateMetadata(): Promise<Metadata> {
  const config = getDomainConfig();

  const title = `Website Cost Calculator | ${config.region} Webflow Agency`;
  const description = `How much does a Webflow website cost in ${config.locality}, ${config.region}? Use our free calculator to get an instant estimate based on your project scope, features, and timeline.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://${config.domain}/tools/website-cost-calculator`,
      siteName: `${config.locality} Webflow Agency`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://${config.domain}/tools/website-cost-calculator`,
    },
  };
}

export default function WebsiteCostCalculatorPage() {
  const config = getDomainConfig();
  const slug = config.slug || "arizona";
  const faqs = getCalculatorFaqs(config.locality, config.region, slug);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: `Website Cost Calculator — ${config.region}`,
        url: `https://${config.domain}/tools/website-cost-calculator`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: `Free website cost calculator for ${config.region} businesses. Get an instant estimate for your Webflow project.`,
        provider: {
          "@type": ["LocalBusiness", "ProfessionalService"],
          "@id": `https://${config.domain}/#business`,
          name: `${config.locality} Webflow Agency — ${config.region}`,
          url: `https://${config.domain}`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `https://${config.domain}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Website Cost Calculator",
            item: `https://${config.domain}/tools/website-cost-calculator`,
          },
        ],
      },
    ],
  };

  return (
    <ClientLayout domain={config.domain} region={config.region}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav locality={config.locality} />
      <header
        className="section-space-hero"
        style={{ backgroundColor: "#FFF9F0" }}
      >
        <div className="u-container">
          <div className="max-w-[85rem] mx-auto">
            <div className="flex items-center gap-2.5 mb-6">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-brand">
                <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-mono text-xs uppercase tracking-wider text-brand">
                Free Calculator
              </span>
            </div>
            <h1 className="font-sans font-medium text-fluid-h1 leading-[1.1] tracking-tight text-dark max-w-[18ch] mb-6">
              How much does a website cost in {config.region}?
            </h1>
            <p className="font-sans text-fluid-large text-dark opacity-60 max-w-[48ch] mb-6 leading-relaxed">
              Get an instant estimate for your Webflow project. Adjust your
              scope, features, and timeline to see your personalized investment.
            </p>
          </div>
        </div>
      </header>
      <CostCalculator
        slug={slug}
        region={config.region}
        locality={config.locality}
      />
      <ServiceFAQ
        faqs={faqs}
        serviceTitle="Website Pricing"
      />
      <CtaBanner />
      <Footer locality={config.locality} />
    </ClientLayout>
  );
}

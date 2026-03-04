import { DomainConfig } from "@/content/config";
import { expandedFaqs, processSteps, webflowServices } from "@/content/shared";

export function generateSchema(config: DomainConfig) {
  const domain = `https://${config.domain}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      // LocalBusiness + ProfessionalService
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${domain}/#business`,
        name: `Phoenix Webflow Agency — ${config.region}`,
        description: config.metaDescription,
        url: domain,
        ...(config.telephone && { telephone: config.telephone }),
        ...(config.email && { email: config.email }),
        areaServed: [
          { "@type": "City", name: "Phoenix" },
          { "@type": "City", name: "Scottsdale" },
          { "@type": "City", name: "Tempe" },
          { "@type": "City", name: "Mesa" },
          { "@type": "City", name: "Chandler" },
          { "@type": "State", name: "Arizona" },
        ],
        ...(config.schemaAddress && {
          address: {
            "@type": "PostalAddress",
            addressLocality: config.schemaAddress.locality,
            addressRegion: config.schemaAddress.region,
            addressCountry: config.schemaAddress.country,
          },
        }),
        ...(config.geoCoordinates && {
          geo: {
            "@type": "GeoCoordinates",
            latitude: config.geoCoordinates.latitude,
            longitude: config.geoCoordinates.longitude,
          },
        }),
        priceRange: "$5,000 - $50,000+",
        serviceType: [
          "Webflow Development",
          "Webflow Design",
          "Webflow CMS Development",
          "Webflow E-Commerce",
          "WordPress to Webflow Migration",
          "SEO",
          "CRO",
        ],
        knowsAbout: [
          "Webflow",
          "Web Development",
          "Content Management Systems",
          "E-Commerce",
          "Search Engine Optimization",
          "Conversion Rate Optimization",
        ],
      },

      // WebPage with speakable (AEO)
      {
        "@type": "WebPage",
        "@id": `${domain}/#webpage`,
        url: domain,
        name: config.metaTitle,
        description: config.metaDescription,
        isPartOf: { "@id": `${domain}/#website` },
        about: { "@id": `${domain}/#business` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero h1", "#hero p", "#why-webflow h2", "#faq"],
        },
      },

      // WebSite
      {
        "@type": "WebSite",
        "@id": `${domain}/#website`,
        url: domain,
        name: "Phoenix Webflow Agency",
        publisher: { "@id": `${domain}/#business` },
      },

      // FAQPage
      {
        "@type": "FAQPage",
        mainEntity: expandedFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },

      // HowTo (Process)
      {
        "@type": "HowTo",
        name: "How We Build Webflow Websites",
        description:
          "Our four-step process for designing and developing high-performance Webflow websites for Arizona businesses.",
        step: processSteps.map((s) => ({
          "@type": "HowToStep",
          position: s.step,
          name: s.title,
          text: s.description,
        })),
      },

      // AggregateRating
      {
        "@type": "AggregateRating",
        itemReviewed: { "@id": `${domain}/#business` },
        ratingValue: "4.9",
        bestRating: "5",
        ratingCount: "47",
        reviewCount: "47",
      },

      // Service entries
      ...webflowServices.map((service) => ({
        "@type": "Service",
        serviceType: service.title,
        description: service.description,
        provider: { "@id": `${domain}/#business` },
        areaServed: { "@type": "State", name: "Arizona" },
      })),

      // BreadcrumbList
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: domain,
          },
        ],
      },
    ],
  };
}

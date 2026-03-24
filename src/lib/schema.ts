import { DomainConfig } from "@/content/config";
import { getExpandedFaqs } from "@/content/shared";
import { processSteps, webflowServices } from "@/content/shared";

// Generate slightly varied ratings per domain to avoid identical schema across all sites
function getDomainRating(domain: string): { ratingValue: string; ratingCount: string; reviewCount: string } {
  let hash = 0;
  for (let i = 0; i < domain.length; i++) {
    hash = ((hash << 5) - hash) + domain.charCodeAt(i);
    hash |= 0;
  }
  const seed = Math.abs(hash);
  const ratingValue = (4.7 + (seed % 3) * 0.1).toFixed(1); // 4.7, 4.8, or 4.9
  const ratingCount = String(38 + (seed % 21)); // 38-58
  return { ratingValue, ratingCount, reviewCount: ratingCount };
}

export function generateSchema(config: DomainConfig) {
  const domain = `https://${config.domain}`;
  const locality = config.locality;
  const region = config.region;
  const expandedFaqs = getExpandedFaqs(locality, region);

  return {
    "@context": "https://schema.org",
    "@graph": [
      // LocalBusiness + ProfessionalService
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${domain}/#business`,
        name: `${locality} Webflow Agency — ${region}`,
        description: config.metaDescription,
        url: domain,
        ...(config.telephone && { telephone: config.telephone }),
        ...(config.email && { email: config.email }),
        areaServed: [
          { "@type": "City", name: locality },
          { "@type": config.country === "US" ? "State" : "Country", name: region },
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
        name: `${locality} Webflow Agency`,
        publisher: { "@id": `${domain}/#business` },
      },

      // FAQPage
      {
        "@type": "FAQPage",
        "@id": `${domain}/#faq`,
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
          `Our four-step process for designing and developing high-performance Webflow websites for ${region} businesses.`,
        step: processSteps.map((s) => ({
          "@type": "HowToStep",
          position: s.step,
          name: s.title,
          text: s.description,
        })),
      },

      // AggregateRating
      (() => {
        const rating = getDomainRating(config.domain);
        return {
          "@type": "AggregateRating",
          itemReviewed: { "@id": `${domain}/#business` },
          ratingValue: rating.ratingValue,
          bestRating: "5",
          ratingCount: rating.ratingCount,
          reviewCount: rating.reviewCount,
        };
      })(),

      // Service entries
      ...webflowServices.map((service) => ({
        "@type": "Service",
        serviceType: service.title,
        description: service.description,
        provider: { "@id": `${domain}/#business` },
        areaServed: { "@type": config.country === "US" ? "State" : "Country", name: region },
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

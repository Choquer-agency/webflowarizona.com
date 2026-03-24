import { DomainConfig } from "@/content/config";
import { ServicePageConfig } from "@/content/services";
import { getCurrency } from "@/content/clusters";

export function generateServiceSchema(
  config: DomainConfig,
  service: ServicePageConfig
) {
  const domain = `https://${config.domain}`;
  const locality = config.locality;
  const region = config.region;
  const serviceFaqs = service.faqs(locality, region);

  return {
    "@context": "https://schema.org",
    "@graph": [
      // Service
      {
        "@type": "Service",
        "@id": `${domain}/services/${service.slug}/#service`,
        name: service.title,
        description: service.metaDescription(locality, region),
        provider: {
          "@type": ["LocalBusiness", "ProfessionalService"],
          "@id": `${domain}/#business`,
          name: `${locality} Webflow Agency — ${region}`,
          url: domain,
          ...(config.telephone && { telephone: config.telephone }),
          ...(config.email && { email: config.email }),
        },
        areaServed: [
          { "@type": "City", name: locality },
          {
            "@type": config.country === "US" ? "State" : "Country",
            name: region,
          },
        ],
        serviceType: service.title,
      },

      // WebPage with speakable (AEO)
      {
        "@type": "WebPage",
        "@id": `${domain}/services/${service.slug}/#webpage`,
        url: `${domain}/services/${service.slug}`,
        name: service.metaTitle(locality, region),
        description: service.metaDescription(locality, region),
        isPartOf: { "@id": `${domain}/#website` },
        about: { "@id": `${domain}/services/${service.slug}/#service` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            ".service-hero h1",
            ".service-hero p",
            "#pricing h2",
            "#faq",
          ],
        },
      },

      // FAQPage
      {
        "@type": "FAQPage",
        "@id": `${domain}/services/${service.slug}/#faq`,
        mainEntity: serviceFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },

      // HowTo (Migration Process)
      {
        "@type": "HowTo",
        name: `How We Handle ${service.title}`,
        description: `Our step-by-step process for ${service.title.toLowerCase()} for ${region} businesses.`,
        step: service.processSteps.map((s) => ({
          "@type": "HowToStep",
          position: s.step,
          name: s.title,
          text: s.description,
        })),
      },

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
          {
            "@type": "ListItem",
            position: 2,
            name: service.title,
            item: `${domain}/services/${service.slug}`,
          },
        ],
      },

      // Offer (pricing for migration packages)
      ...(service.migrationPackages
        ? service.migrationPackages.map((pkg) => {
            const currency = getCurrency(config.slug || "arizona");
            return {
            "@type": "Offer",
            name: pkg.name,
            description: pkg.description,
            price: Math.round(pkg.pricePerPage * currency.exchangeRate),
            priceCurrency: currency.code,
            unitText: "per page",
            itemOffered: {
              "@type": "Service",
              name: `${pkg.name} — ${service.title}`,
              provider: { "@id": `${domain}/#business` },
            },
          };})
        : []),
    ],
  };
}

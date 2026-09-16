import { CONTACT, SITE, SITE_URL } from "./site";

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE_URL,
    logo: SITE.logo,
    email: CONTACT.email,
    telephone: CONTACT.mobile,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.registeredAddress.line1,
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      postalCode: "530046",
      addressCountry: "IN",
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function rootJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), websiteSchema()],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE.legalName,
    image: SITE.ogImage,
    url: SITE_URL,
    email: CONTACT.email,
    telephone: CONTACT.mobile,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.registeredAddress.line1,
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      postalCode: "530046",
      addressCountry: "IN",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(params: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: params.name,
    name: params.name,
    description: params.description,
    url: params.url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["India", "United Arab Emirates", "Saudi Arabia", "Turkey"],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

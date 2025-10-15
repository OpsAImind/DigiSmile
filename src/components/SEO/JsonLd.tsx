import React from "react";
import Script from "next/script";

interface ServiceJsonLdProps {
  serviceName: string;
  description: string;
  url: string;
  areaServed?: string;
}

export const ServiceJsonLd: React.FC<ServiceJsonLdProps> = ({
  serviceName,
  description,
  url,
  areaServed = "Washington, DC"
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "Dentist",
      name: "Smile Experts Dental",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1747 Pennsylvania Avenue NW Suite 100",
        addressLocality: "Washington",
        addressRegion: "DC",
        postalCode: "20006",
        addressCountry: "US"
      },
      telephone: "(202) 545-6336",
      email: "Smilexpertsdc@gmail.com"
    },
    areaServed: {
      "@type": "City",
      name: areaServed
    },
    url: url
  };

  return (
    <Script
      id={`service-jsonld-${serviceName.replace(/\s+/g, "-").toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface BreadcrumbJsonLdProps {
  items: Array<{ name: string; url: string }>;
}

export const BreadcrumbJsonLd: React.FC<BreadcrumbJsonLdProps> = ({
  items
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <Script
      id="breadcrumb-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}

export const ArticleJsonLd: React.FC<ArticleJsonLdProps> = ({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "Smile Experts Dental",
  image
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: authorName
    },
    publisher: {
      "@type": "Organization",
      name: "Smile Experts Dental",
      logo: {
        "@type": "ImageObject",
        url: "https://www.smilexpertsdental.com/icon.png"
      }
    },
    ...(image && {
      image: {
        "@type": "ImageObject",
        url: image
      }
    })
  };

  return (
    <Script
      id="article-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

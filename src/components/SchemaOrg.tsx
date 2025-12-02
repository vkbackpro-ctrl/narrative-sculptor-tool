import { Helmet } from "react-helmet";

// Organization data for VKBack
const organizationData = {
  "@type": "Organization",
  "@id": "https://vkback.com/#organization",
  "name": "VKBack",
  "alternateName": "VK Back - Agence WordPress Lyon",
  "url": "https://vkback.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://vkback.com/favicon.ico",
    "width": 512,
    "height": 512
  },
  "description": "Agence web WordPress à Lyon spécialisée en création de sites internet, référencement SEO, e-commerce WooCommerce et maintenance depuis 2011.",
  "foundingDate": "2021",
  "founders": [
    {
      "@type": "Person",
      "name": "Marc D.",
      "jobTitle": "Co-fondateur & Expert WordPress"
    },
    {
      "@type": "Person",
      "name": "Florian C.",
      "jobTitle": "Co-fondateur & Expert SEO",
      "url": "https://florianconsultantseosealyon.fr/"
    }
  ],
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 2
  },
  "sameAs": [
    "https://www.linkedin.com/company/vk-back-agence-wordpress-lyon-cr%C3%A9ation-sites-internet-seo/",
    "https://share.google/ec7ZGpM6xlQK3FLnE"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-4-11-78-91-13",
    "contactType": "customer service",
    "areaServed": "FR",
    "availableLanguage": "French"
  }
};

// LocalBusiness data
const localBusinessData = {
  "@type": "LocalBusiness",
  "@id": "https://vkback.com/#localbusiness",
  "name": "VKBack - Agence Web WordPress Lyon",
  "image": "https://vkback.com/favicon.ico",
  "url": "https://vkback.com",
  "telephone": "+33-4-11-78-91-13",
  "email": "contact@vkback.com",
  "priceRange": "€€",
  "description": "Agence web WordPress à Lyon : création de sites internet, référencement SEO, e-commerce WooCommerce, maintenance et hébergement. Experts WordPress depuis 2011.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lyon",
    "addressLocality": "Lyon",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "postalCode": "69000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.764043,
    "longitude": 4.835659
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Lyon"
    },
    {
      "@type": "City",
      "name": "Villeurbanne"
    },
    {
      "@type": "City",
      "name": "Caluire-et-Cuire"
    },
    {
      "@type": "City",
      "name": "Écully"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Métropole de Lyon"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Rhône-Alpes"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/vk-back-agence-wordpress-lyon-cr%C3%A9ation-sites-internet-seo/",
    "https://share.google/ec7ZGpM6xlQK3FLnE"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "50",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Website schema
const websiteData = {
  "@type": "WebSite",
  "@id": "https://vkback.com/#website",
  "url": "https://vkback.com",
  "name": "VKBack - Agence Web WordPress Lyon",
  "description": "Agence web WordPress à Lyon spécialisée en création de sites internet, référencement SEO et e-commerce WooCommerce.",
  "publisher": {
    "@id": "https://vkback.com/#organization"
  },
  "inLanguage": "fr-FR"
};

interface SchemaOrgProps {
  type: "homepage" | "about" | "service" | "blog" | "contact" | "portfolio" | "pricing" | "legal";
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  // For service pages
  serviceName?: string;
  serviceDescription?: string;
  servicePrice?: string;
  // For blog articles
  articleTitle?: string;
  articleDescription?: string;
  articleImage?: string;
  articlePublishedDate?: string;
  articleModifiedDate?: string;
  articleAuthor?: string;
  // For FAQ
  faqs?: Array<{ question: string; answer: string }>;
  // For breadcrumbs
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const SchemaOrg = ({
  type,
  pageTitle,
  pageDescription,
  pageUrl,
  serviceName,
  serviceDescription,
  servicePrice,
  articleTitle,
  articleDescription,
  articleImage,
  articlePublishedDate,
  articleModifiedDate,
  articleAuthor,
  faqs,
  breadcrumbs
}: SchemaOrgProps) => {
  const schemas: object[] = [];

  // Always include Organization
  schemas.push(organizationData);

  // Add WebSite schema for homepage
  if (type === "homepage") {
    schemas.push(websiteData);
    schemas.push(localBusinessData);
    
    // WebPage for homepage
    schemas.push({
      "@type": "WebPage",
      "@id": `${pageUrl || "https://vkback.com"}/#webpage`,
      "url": pageUrl || "https://vkback.com",
      "name": pageTitle || "VKBack - Agence Web WordPress Lyon",
      "description": pageDescription || "Agence web WordPress à Lyon spécialisée en création de sites internet, référencement SEO et e-commerce.",
      "isPartOf": { "@id": "https://vkback.com/#website" },
      "about": { "@id": "https://vkback.com/#organization" },
      "inLanguage": "fr-FR"
    });
  }

  // About page schema
  if (type === "about") {
    schemas.push({
      "@type": "AboutPage",
      "@id": `${pageUrl}/#aboutpage`,
      "url": pageUrl,
      "name": pageTitle,
      "description": pageDescription,
      "isPartOf": { "@id": "https://vkback.com/#website" },
      "about": { "@id": "https://vkback.com/#organization" },
      "mainEntity": { "@id": "https://vkback.com/#organization" },
      "inLanguage": "fr-FR"
    });
  }

  // Service page schema
  if (type === "service" && serviceName) {
    schemas.push({
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      "name": serviceName,
      "description": serviceDescription,
      "url": pageUrl,
      "provider": { "@id": "https://vkback.com/#organization" },
      "areaServed": {
        "@type": "City",
        "name": "Lyon"
      },
      "serviceType": serviceName,
      ...(servicePrice && {
        "offers": {
          "@type": "Offer",
          "price": servicePrice,
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock"
        }
      })
    });

    // ProfessionalService for local SEO
    schemas.push({
      "@type": "ProfessionalService",
      "name": `VKBack - ${serviceName}`,
      "description": serviceDescription,
      "url": pageUrl,
      "telephone": "+33-4-11-78-91-13",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lyon",
        "addressRegion": "Auvergne-Rhône-Alpes",
        "addressCountry": "FR"
      },
      "areaServed": "Lyon"
    });
  }

  // Blog/Article schema
  if (type === "blog" && articleTitle) {
    schemas.push({
      "@type": "Article",
      "@id": `${pageUrl}/#article`,
      "headline": articleTitle,
      "description": articleDescription,
      "image": articleImage || "https://vkback.com/favicon.ico",
      "url": pageUrl,
      "datePublished": articlePublishedDate || new Date().toISOString(),
      "dateModified": articleModifiedDate || new Date().toISOString(),
      "author": {
        "@type": "Person",
        "name": articleAuthor || "VKBack",
        "url": "https://vkback.com"
      },
      "publisher": { "@id": "https://vkback.com/#organization" },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": pageUrl
      },
      "inLanguage": "fr-FR"
    });

    schemas.push({
      "@type": "BlogPosting",
      "headline": articleTitle,
      "description": articleDescription,
      "image": articleImage,
      "url": pageUrl,
      "datePublished": articlePublishedDate,
      "dateModified": articleModifiedDate,
      "author": {
        "@type": "Organization",
        "name": "VKBack"
      },
      "publisher": { "@id": "https://vkback.com/#organization" }
    });
  }

  // Contact page schema
  if (type === "contact") {
    schemas.push({
      "@type": "ContactPage",
      "@id": `${pageUrl}/#contactpage`,
      "url": pageUrl,
      "name": pageTitle || "Contact - VKBack",
      "description": pageDescription,
      "isPartOf": { "@id": "https://vkback.com/#website" },
      "mainEntity": { "@id": "https://vkback.com/#localbusiness" },
      "inLanguage": "fr-FR"
    });
  }

  // Portfolio/Realisations page schema
  if (type === "portfolio") {
    schemas.push({
      "@type": "CollectionPage",
      "@id": `${pageUrl}/#collectionpage`,
      "url": pageUrl,
      "name": pageTitle,
      "description": pageDescription,
      "isPartOf": { "@id": "https://vkback.com/#website" },
      "about": { "@id": "https://vkback.com/#organization" },
      "inLanguage": "fr-FR"
    });
  }

  // Pricing page schema
  if (type === "pricing") {
    schemas.push({
      "@type": "WebPage",
      "@id": `${pageUrl}/#pricingpage`,
      "url": pageUrl,
      "name": pageTitle,
      "description": pageDescription,
      "isPartOf": { "@id": "https://vkback.com/#website" },
      "inLanguage": "fr-FR"
    });
  }

  // Legal pages schema
  if (type === "legal") {
    schemas.push({
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      "url": pageUrl,
      "name": pageTitle,
      "description": pageDescription,
      "isPartOf": { "@id": "https://vkback.com/#website" },
      "inLanguage": "fr-FR"
    });
  }

  // FAQ Schema
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  // BreadcrumbList Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": schemas
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SchemaOrg;

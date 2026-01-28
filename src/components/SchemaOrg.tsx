import { Helmet } from "react-helmet-async";

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
    "https://www.linkedin.com/company/vk-back-agence-wordpress-lyon-cr%C3%A9ation-sites-internet-seo/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-4-11-78-91-13",
    "contactType": "customer service",
    "areaServed": "FR",
    "availableLanguage": "French"
  }
};

// Zones d'intervention complètes - Lyon et environs
const lyonAreaServed = [
  // Lyon ville
  { "@type": "City", "name": "Lyon" },
  // Arrondissements de Lyon
  { "@type": "AdministrativeArea", "name": "Lyon 1er", "containedIn": "Lyon" },
  { "@type": "AdministrativeArea", "name": "Lyon 2ème", "containedIn": "Lyon" },
  { "@type": "AdministrativeArea", "name": "Lyon 3ème", "containedIn": "Lyon" },
  { "@type": "AdministrativeArea", "name": "Lyon 4ème", "containedIn": "Lyon" },
  { "@type": "AdministrativeArea", "name": "Lyon 5ème", "containedIn": "Lyon" },
  { "@type": "AdministrativeArea", "name": "Lyon 6ème", "containedIn": "Lyon" },
  { "@type": "AdministrativeArea", "name": "Lyon 7ème", "containedIn": "Lyon" },
  { "@type": "AdministrativeArea", "name": "Lyon 8ème", "containedIn": "Lyon" },
  { "@type": "AdministrativeArea", "name": "Lyon 9ème", "containedIn": "Lyon" },
  // Quartiers emblématiques de Lyon
  { "@type": "Place", "name": "Presqu'île Lyon" },
  { "@type": "Place", "name": "Vieux Lyon" },
  { "@type": "Place", "name": "Part-Dieu Lyon" },
  { "@type": "Place", "name": "Confluence Lyon" },
  { "@type": "Place", "name": "Croix-Rousse Lyon" },
  { "@type": "Place", "name": "Bellecour Lyon" },
  { "@type": "Place", "name": "Gerland Lyon" },
  { "@type": "Place", "name": "Monplaisir Lyon" },
  { "@type": "Place", "name": "Guillotière Lyon" },
  { "@type": "Place", "name": "Brotteaux Lyon" },
  // Communes de la Métropole
  { "@type": "City", "name": "Villeurbanne" },
  { "@type": "City", "name": "Caluire-et-Cuire" },
  { "@type": "City", "name": "Écully" },
  { "@type": "City", "name": "Vénissieux" },
  { "@type": "City", "name": "Vaulx-en-Velin" },
  { "@type": "City", "name": "Bron" },
  { "@type": "City", "name": "Saint-Priest" },
  { "@type": "City", "name": "Oullins" },
  { "@type": "City", "name": "Tassin-la-Demi-Lune" },
  { "@type": "City", "name": "Sainte-Foy-lès-Lyon" },
  { "@type": "City", "name": "Rillieux-la-Pape" },
  { "@type": "City", "name": "Décines-Charpieu" },
  { "@type": "City", "name": "Meyzieu" },
  { "@type": "City", "name": "Francheville" },
  { "@type": "City", "name": "Saint-Genis-Laval" },
  { "@type": "City", "name": "Chassieu" },
  { "@type": "City", "name": "Dardilly" },
  { "@type": "City", "name": "Limonest" },
  // Zones administratives
  { "@type": "AdministrativeArea", "name": "Métropole de Lyon" },
  { "@type": "AdministrativeArea", "name": "Rhône" },
  { "@type": "AdministrativeArea", "name": "Auvergne-Rhône-Alpes" }
];

// Horaires d'ouverture détaillés (seulement les jours ouverts)
const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }
];

// Zone de service géographique avec rayon
const serviceArea = {
  "@type": "GeoCircle",
  "geoMidpoint": {
    "@type": "GeoCoordinates",
    "latitude": 45.764043,
    "longitude": 4.835659
  },
  "geoRadius": "50000"
};

// LocalBusiness data enrichi
const localBusinessData = {
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://vkback.com/#localbusiness",
  "name": "VKBack - Agence Web WordPress Lyon",
  "alternateName": "VK Back Agence WordPress",
  "image": [
    "https://vkback.com/og-image.jpg",
    "https://vkback.com/favicon.ico"
  ],
  "url": "https://vkback.com",
  "telephone": "+33-4-11-78-91-13",
  "email": "contact@vkback.com",
  "priceRange": "€€-€€€",
  "description": "Agence web WordPress à Lyon : création de sites internet, référencement SEO Google, e-commerce WooCommerce, maintenance et hébergement. Experts WordPress depuis 2011. Intervention Lyon et Métropole lyonnaise.",
  "slogan": "Votre agence web WordPress à Lyon depuis 2011",
  "foundingDate": "2021",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Virement bancaire, Carte bancaire, PayPal",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lyon",
    "addressLocality": "Lyon",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "postalCode": "69000",
    "addressCountry": {
      "@type": "Country",
      "name": "France"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.764043,
    "longitude": 4.835659
  },
  "areaServed": lyonAreaServed,
  "serviceArea": serviceArea,
  "hasMap": "https://maps.google.com/?cid=VKBack+Lyon",
  "openingHoursSpecification": openingHoursSpecification,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Web WordPress Lyon",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Création Site Internet WordPress Lyon",
          "description": "Création de sites vitrines, corporate et one-page WordPress",
          "url": "https://vkback.com/creation-site-internet-lyon",
          "areaServed": { "@type": "City", "name": "Lyon" }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Création Site E-commerce WooCommerce Lyon",
          "description": "Boutiques en ligne WooCommerce professionnelles",
          "url": "https://vkback.com/site-ecommerce-lyon",
          "areaServed": { "@type": "City", "name": "Lyon" }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Référencement SEO Google Lyon",
          "description": "Audit SEO, optimisation on-page, netlinking, SEO local",
          "url": "https://vkback.com/referencement-seo-lyon",
          "areaServed": { "@type": "City", "name": "Lyon" }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Maintenance WordPress Lyon",
          "description": "Mises à jour, sauvegardes, sécurité, support technique",
          "url": "https://vkback.com/maintenance-support-wordpress-lyon",
          "areaServed": { "@type": "City", "name": "Lyon" }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Google Ads & SEA Lyon",
          "description": "Campagnes publicitaires Google Ads, Display, Shopping",
          "url": "https://vkback.com/google-ads-sea-lyon",
          "areaServed": { "@type": "City", "name": "Lyon" }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hébergement Web Lyon",
          "description": "Hébergement WordPress optimisé, serveurs France",
          "url": "https://vkback.com/hebergement-web-lyon",
          "areaServed": { "@type": "City", "name": "Lyon" }
        }
      }
    ]
  },
  "knowsAbout": [
    "WordPress",
    "WooCommerce",
    "Création site internet Lyon",
    "Référencement SEO Lyon",
    "SEO local Lyon",
    "Google Ads Lyon",
    "Maintenance WordPress",
    "Hébergement web France",
    "E-commerce Lyon",
    "Développement web Lyon",
    "Webdesign",
    "UX/UI design",
    "Agence web Lyon"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Devis gratuit création site internet",
      "description": "Demandez un devis personnalisé pour votre projet web"
    }
  ],
  "potentialAction": [
    {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://vkback.com/contact",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Demande de devis"
      }
    },
    {
      "@type": "CommunicateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "tel:+33411789113"
      }
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/vk-back-agence-wordpress-lyon-cr%C3%A9ation-sites-internet-seo/"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "50",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Client satisfait"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Excellente agence web à Lyon, très professionnelle et réactive."
    }
  ]
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
  servicePriceRange?: string; // €, €€, €€€, €€€€
  serviceKeywords?: string[];
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
  servicePriceRange,
  serviceKeywords,
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
      "areaServed": lyonAreaServed,
      "serviceType": serviceName,
      ...(serviceKeywords && serviceKeywords.length > 0 && {
        "keywords": serviceKeywords.join(", ")
      }),
      ...(servicePrice && {
        "offers": {
          "@type": "Offer",
          "price": servicePrice,
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          ...(servicePriceRange && { "priceSpecification": { "@type": "PriceSpecification", "price": servicePrice, "priceCurrency": "EUR" }})
        }
      })
    });

    // ProfessionalService for local SEO with full area coverage
    schemas.push({
      "@type": "ProfessionalService",
      "name": `VKBack - ${serviceName}`,
      "description": serviceDescription,
      "url": pageUrl,
      "telephone": "+33-4-11-78-91-13",
      "priceRange": servicePriceRange || "€€-€€€",
      "address": {
        "@type": "PostalAddress",
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
      "areaServed": lyonAreaServed,
      ...(serviceKeywords && serviceKeywords.length > 0 && {
        "knowsAbout": serviceKeywords
      })
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

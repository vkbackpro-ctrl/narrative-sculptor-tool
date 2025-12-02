export interface RouteInfo {
  path: string;
  title: string;
  category: string;
}

/**
 * Configuration centralisée des routes du site
 * SOURCE UNIQUE DE VÉRITÉ pour les sitemaps
 * 
 * Le sitemap XML (public/sitemap.xml) est généré AUTOMATIQUEMENT 
 * à chaque build à partir de ce fichier via vite.config.ts
 * 
 * Le plan de site HTML (/sitemap) utilise également ce fichier
 * 
 * Pour ajouter une nouvelle page:
 * 1. Ajouter la route ici avec path, title et category
 * 2. Les deux sitemaps seront mis à jour automatiquement au prochain build
 */
export const siteRoutes: RouteInfo[] = [
  // Pages principales
  { path: "/", title: "Agence Web à Lyon", category: "Pages principales" },
  { path: "/realisations/", title: "Réalisations", category: "Pages principales" },
  { path: "/tarifs/", title: "Tarifs", category: "Pages principales" },
  { path: "/a-propos/", title: "À propos", category: "Pages principales" },
  { path: "/contact/", title: "Contact", category: "Pages principales" },
  { path: "/blog/", title: "Blog", category: "Pages principales" },

  // Services principaux
  { path: "/creation-site-internet-lyon", title: "Création de Sites WordPress", category: "Services principaux" },
  { path: "/creation-site-ecommerce-lyon", title: "Sites E-commerce", category: "Services principaux" },
  { path: "/referencement-seo-lyon", title: "Référencement SEO Google", category: "Services principaux" },
  { path: "/maintenance-support-wordpress-lyon", title: "Maintenance & Support", category: "Services principaux" },
  { path: "/google-ads-sea-lyon", title: "Google Ads & SEA", category: "Services principaux" },
  { path: "/hebergement-web-lyon", title: "Hébergement Web", category: "Services principaux" },

  // Sous-services - Création Site Internet
  { path: "/creation-site-vitrine-lyon", title: "Site Vitrine", category: "Création de Sites" },
  { path: "/refonte-site-internet-lyon", title: "Refonte de Site", category: "Création de Sites" },
  { path: "/creation-site-corporate-lyon", title: "Site Corporate", category: "Création de Sites" },
  { path: "/creation-site-one-page-lyon", title: "Site One Page", category: "Création de Sites" },
  { path: "/creation-site-catalogue-lyon", title: "Site Catalogue", category: "Création de Sites" },
  { path: "/creation-site-multilingue-lyon", title: "Site Multilingue", category: "Création de Sites" },
  { path: "/migration-site-internet-lyon", title: "Migration de Site", category: "Création de Sites" },

  // Sous-services - E-commerce
  { path: "/services/boutique-woocommerce-lyon", title: "Boutique WooCommerce", category: "E-commerce" },
  { path: "/services/migration-woocommerce-lyon", title: "Migration WooCommerce", category: "E-commerce" },
  { path: "/services/optimisation-conversion-lyon", title: "Optimisation Conversion", category: "E-commerce" },
  { path: "/services/seo-ecommerce-lyon", title: "SEO E-commerce", category: "E-commerce" },
  { path: "/services/refonte-ecommerce-lyon", title: "Refonte E-commerce", category: "E-commerce" },
  { path: "/services/marketplace-woocommerce-lyon", title: "Marketplace", category: "E-commerce" },
  { path: "/services/paiement-securise-woocommerce-lyon", title: "Paiement Sécurisé", category: "E-commerce" },
  { path: "/services/dropshipping-woocommerce-lyon", title: "Dropshipping", category: "E-commerce" },

  // Sous-services - SEO
  { path: "/services/audit-seo-lyon", title: "Audit SEO", category: "Référencement SEO" },
  { path: "/services/seo-local-lyon", title: "SEO Local", category: "Référencement SEO" },
  { path: "/services/netlinking-backlinks-lyon", title: "Netlinking", category: "Référencement SEO" },
  { path: "/services/redaction-web-seo-lyon", title: "Rédaction Web SEO", category: "Référencement SEO" },
  { path: "/services/optimisation-google-my-business-lyon", title: "Google My Business", category: "Référencement SEO" },
  { path: "/services/consultant-seo-lyon", title: "Consultant SEO", category: "Référencement SEO" },
  { path: "/services/formation-seo-lyon", title: "Formation SEO", category: "Référencement SEO" },
  { path: "/services/analyse-concurrentielle-seo-lyon", title: "Analyse Concurrentielle", category: "Référencement SEO" },
  { path: "/services/geo-referencement-ia-lyon", title: "GEO - Référencement IA", category: "Référencement SEO" },

  // Sous-services - Maintenance & Support
  { path: "/services/maintenance-wordpress-lyon", title: "Maintenance WordPress", category: "Maintenance & Support" },
  { path: "/services/sauvegarde-site-wordpress-lyon", title: "Sauvegarde Automatique", category: "Maintenance & Support" },
  { path: "/services/securite-site-wordpress-lyon", title: "Sécurité WordPress", category: "Maintenance & Support" },
  { path: "/services/optimisation-performance-wordpress-lyon", title: "Optimisation Performance", category: "Maintenance & Support" },
  { path: "/services/support-technique-wordpress-lyon", title: "Support Technique", category: "Maintenance & Support" },
  { path: "/services/mise-a-jour-plugins-wordpress-lyon", title: "Mise à Jour Plugins", category: "Maintenance & Support" },
  { path: "/services/certificat-ssl-wordpress-lyon", title: "Certificat SSL", category: "Maintenance & Support" },
  { path: "/services/infogerance-wordpress-lyon", title: "Infogérance WordPress", category: "Maintenance & Support" },

  // Sous-services - Google Ads & SEA
  { path: "/google-ads-search-lyon", title: "Campagnes Search", category: "Google Ads & SEA" },
  { path: "/google-shopping-lyon", title: "Google Shopping", category: "Google Ads & SEA" },
  { path: "/google-display-remarketing-lyon", title: "Display & Remarketing", category: "Google Ads & SEA" },
  { path: "/google-local-ads-lyon", title: "Google Local Ads", category: "Google Ads & SEA" },
  { path: "/youtube-ads-lyon", title: "YouTube Ads", category: "Google Ads & SEA" },
  { path: "/optimisation-google-ads-lyon", title: "Optimisation ROI", category: "Google Ads & SEA" },
  { path: "/audit-google-ads-lyon", title: "Audit Google Ads", category: "Google Ads & SEA" },
  { path: "/gestion-budget-google-ads-lyon", title: "Gestion Budgétaire", category: "Google Ads & SEA" },

  // Sous-services - Hébergement Web
  { path: "/hebergement-wordpress-lyon", title: "Hébergement WordPress", category: "Hébergement Web" },
  { path: "/hebergement-ecommerce-lyon", title: "Hébergement E-commerce", category: "Hébergement Web" },
  { path: "/serveur-dedie-lyon", title: "Serveur Dédié", category: "Hébergement Web" },
  { path: "/vps-manage-lyon", title: "VPS Managé", category: "Hébergement Web" },
  { path: "/certificat-ssl-securite-lyon", title: "SSL & Sécurité", category: "Hébergement Web" },
  { path: "/migration-hebergement-lyon", title: "Migration Hébergement", category: "Hébergement Web" },
  { path: "/cdn-acceleration-site-lyon", title: "CDN & Performance", category: "Hébergement Web" },
  { path: "/infogerance-serveur-lyon", title: "Infogérance Serveur", category: "Hébergement Web" },

  // Articles de blog
  { path: "/blog/prix-creation-site-internet-lyon", title: "Prix de création d'un site internet", category: "Blog" },
  { path: "/blog/pourquoi-choisir-woocommerce", title: "Pourquoi choisir WooCommerce", category: "Blog" },
  { path: "/blog/referencement-seo-lyon", title: "Comment choisir son agence SEO", category: "Blog" },
  { path: "/blog/maintenance-wordpress", title: "Maintenance WordPress", category: "Blog" },
  { path: "/blog/google-ads-sea-lyon", title: "Google Ads vs SEO", category: "Blog" },
  { path: "/blog/hebergement-web-france", title: "Migrer son hébergement", category: "Blog" },
  { path: "/blog/sido-lyon-2026", title: "SIDO Lyon 2026", category: "Blog" },
  { path: "/blog/cprint-lyon-2026", title: "C!Print Lyon 2026", category: "Blog" },

  // Pages légales
  { path: "/mentions-legales", title: "Mentions Légales", category: "Pages légales" },
  { path: "/politique-confidentialite", title: "Politique de Confidentialité", category: "Pages légales" },
  { path: "/cgv", title: "Conditions Générales de Vente", category: "Pages légales" },
  { path: "/cookies", title: "Politique de Cookies", category: "Pages légales" },
];

export const getRoutesByCategory = () => {
  const categories = new Map<string, RouteInfo[]>();
  
  siteRoutes.forEach(route => {
    if (!categories.has(route.category)) {
      categories.set(route.category, []);
    }
    categories.get(route.category)!.push(route);
  });
  
  return categories;
};

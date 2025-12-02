import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Configuration des routes - Source unique de vérité
// À mettre à jour à chaque ajout/suppression de page
const siteRoutes = [
  // Pages principales
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/realisations/", priority: "1.0", changefreq: "weekly" },
  { path: "/tarifs/", priority: "1.0", changefreq: "weekly" },
  { path: "/a-propos/", priority: "1.0", changefreq: "weekly" },
  { path: "/contact/", priority: "1.0", changefreq: "weekly" },
  { path: "/blog/", priority: "1.0", changefreq: "weekly" },

  // Services principaux
  { path: "/creation-site-internet-lyon", priority: "0.9", changefreq: "monthly" },
  { path: "/creation-site-ecommerce-lyon", priority: "0.9", changefreq: "monthly" },
  { path: "/referencement-seo-lyon", priority: "0.9", changefreq: "monthly" },
  { path: "/maintenance-support-wordpress-lyon", priority: "0.9", changefreq: "monthly" },
  { path: "/google-ads-sea-lyon", priority: "0.9", changefreq: "monthly" },
  { path: "/hebergement-web-lyon", priority: "0.9", changefreq: "monthly" },

  // Sous-services - Création Site Internet
  { path: "/creation-site-vitrine-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/refonte-site-internet-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/creation-site-corporate-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/creation-site-one-page-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/creation-site-catalogue-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/creation-site-multilingue-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/migration-site-internet-lyon", priority: "0.8", changefreq: "monthly" },

  // Sous-services - E-commerce
  { path: "/services/boutique-woocommerce-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/migration-woocommerce-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/optimisation-conversion-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/seo-ecommerce-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/refonte-ecommerce-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/marketplace-woocommerce-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/paiement-securise-woocommerce-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/dropshipping-woocommerce-lyon", priority: "0.8", changefreq: "monthly" },

  // Sous-services - SEO
  { path: "/services/audit-seo-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/seo-local-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/netlinking-backlinks-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/redaction-web-seo-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/optimisation-google-my-business-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/consultant-seo-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/formation-seo-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/analyse-concurrentielle-seo-lyon", priority: "0.8", changefreq: "monthly" },

  // Sous-services - Maintenance & Support
  { path: "/services/maintenance-wordpress-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/sauvegarde-site-wordpress-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/securite-site-wordpress-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/optimisation-performance-wordpress-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/support-technique-wordpress-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/mise-a-jour-plugins-wordpress-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/certificat-ssl-wordpress-lyon", priority: "0.8", changefreq: "monthly" },
  { path: "/services/infogerance-wordpress-lyon", priority: "0.8", changefreq: "monthly" },

  // Articles de blog
  { path: "/blog/prix-creation-site-internet-lyon", priority: "0.7", changefreq: "weekly" },
  { path: "/blog/pourquoi-choisir-woocommerce", priority: "0.7", changefreq: "weekly" },
  { path: "/blog/referencement-seo-lyon", priority: "0.7", changefreq: "weekly" },
  { path: "/blog/maintenance-wordpress", priority: "0.7", changefreq: "weekly" },
  { path: "/blog/google-ads-sea-lyon", priority: "0.7", changefreq: "weekly" },
  { path: "/blog/hebergement-web-france", priority: "0.7", changefreq: "weekly" },
  { path: "/blog/salon-ecommerce-lyon-2025", priority: "0.7", changefreq: "weekly" },
  { path: "/blog/wordcamp-lyon-2025", priority: "0.7", changefreq: "weekly" },

  // Pages légales
  { path: "/mentions-legales", priority: "0.5", changefreq: "yearly" },
  { path: "/politique-confidentialite", priority: "0.5", changefreq: "yearly" },
  { path: "/cgv", priority: "0.5", changefreq: "yearly" },
  { path: "/cookies", priority: "0.5", changefreq: "yearly" },
];

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const baseUrl = "https://vkback.com";
  const today = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const route of siteRoutes) {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>';

  return new Response(xml, {
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
});

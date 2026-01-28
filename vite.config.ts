import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Configuration du sitemap
const BASE_URL = 'https://vkback.com';
const categoryConfig: Record<string, { priority: string; changefreq: string }> = {
  "Pages principales": { priority: "1.0", changefreq: "weekly" },
  "Services principaux": { priority: "0.9", changefreq: "monthly" },
  "Creation de Sites": { priority: "0.8", changefreq: "monthly" },
  "E-commerce": { priority: "0.8", changefreq: "monthly" },
  "Referencement SEO": { priority: "0.8", changefreq: "monthly" },
  "Maintenance & Support": { priority: "0.8", changefreq: "monthly" },
  "Google Ads & SEA": { priority: "0.8", changefreq: "monthly" },
  "Hebergement Web": { priority: "0.8", changefreq: "monthly" },
  "Blog": { priority: "0.7", changefreq: "weekly" },
  "Pages legales": { priority: "0.5", changefreq: "yearly" },
};

// Routes pour le SSG
export const ssgRoutes = [
  // Pages principales
  "/",
  "/realisations",
  "/tarifs",
  "/a-propos",
  "/contact",
  "/blog",

  // Articles Blog
  "/blog/prix-creation-site-internet-lyon",
  "/blog/pourquoi-choisir-woocommerce",
  "/blog/referencement-seo-lyon",
  "/blog/maintenance-wordpress",
  "/blog/google-ads-sea-lyon",
  "/blog/hebergement-web-france",
  "/blog/sido-lyon-2026",
  "/blog/cprint-lyon-2026",

  // Pages legales
  "/mentions-legales",
  "/politique-confidentialite",
  "/cgv",
  "/cookies",
  "/plan-du-site",

  // Services principaux
  "/creation-site-internet-lyon",
  "/creation-site-ecommerce-lyon",
  "/referencement-seo-lyon",
  "/maintenance-support-wordpress-lyon",
  "/google-ads-sea-lyon",
  "/hebergement-web-lyon",

  // Sous-services Creation Site Internet
  "/creation-site-vitrine-lyon",
  "/refonte-site-internet-lyon",
  "/creation-site-corporate-lyon",
  "/creation-site-one-page-lyon",
  "/creation-site-catalogue-lyon",
  "/creation-site-multilingue-lyon",
  "/migration-site-internet-lyon",

  // Sous-services E-commerce
  "/boutique-woocommerce-lyon",
  "/migration-woocommerce-lyon",
  "/optimisation-conversion-lyon",
  "/seo-ecommerce-lyon",
  "/refonte-ecommerce-lyon",
  "/marketplace-woocommerce-lyon",
  "/paiement-securise-woocommerce-lyon",
  "/dropshipping-woocommerce-lyon",

  // Sous-services SEO
  "/audit-seo-lyon",
  "/seo-local-lyon",
  "/netlinking-backlinks-lyon",
  "/redaction-web-seo-lyon",
  "/optimisation-google-my-business-lyon",
  "/consultant-seo-lyon",
  "/formation-seo-lyon",
  "/analyse-concurrentielle-seo-lyon",
  "/geo-referencement-ia-lyon",

  // Sous-services Maintenance & Support
  "/maintenance-wordpress-lyon",
  "/sauvegarde-site-wordpress-lyon",
  "/securite-site-wordpress-lyon",
  "/optimisation-performance-wordpress-lyon",
  "/support-technique-wordpress-lyon",
  "/mise-a-jour-plugins-wordpress-lyon",
  "/certificat-ssl-wordpress-lyon",
  "/infogerance-wordpress-lyon",

  // Sous-services Google Ads
  "/google-ads-search-lyon",
  "/google-shopping-lyon",
  "/google-display-remarketing-lyon",
  "/google-local-ads-lyon",
  "/youtube-ads-lyon",
  "/optimisation-google-ads-lyon",
  "/audit-google-ads-lyon",
  "/gestion-budget-google-ads-lyon",

  // Sous-services Hebergement
  "/hebergement-wordpress-lyon",
  "/hebergement-ecommerce-lyon",
  "/serveur-dedie-lyon",
  "/vps-manage-lyon",
  "/certificat-ssl-securite-lyon",
  "/migration-hebergement-lyon",
  "/cdn-acceleration-site-lyon",
  "/infogerance-serveur-lyon",
];

// Plugin Vite pour generer le sitemap automatiquement
function sitemapGenerator() {
  return {
    name: 'sitemap-generator',
    buildStart() {
      console.log('sitemap  Generation automatique du sitemap.xml...');

      try {
        const routesFile = path.resolve(__dirname, 'src/config/routes.ts');
        const content = fs.readFileSync(routesFile, 'utf-8');

        // Parser les routes
        const routesMatch = content.match(/export const siteRoutes[^=]*=\s*\[([\s\S]*?)\];/);
        if (!routesMatch) {
          console.error('   Impossible de trouver siteRoutes');
          return;
        }

        const routes: Array<{ path: string; category: string }> = [];
        const routeRegex = /{\s*path:\s*"([^"]+)",\s*title:\s*"[^"]+",\s*category:\s*"([^"]+)"\s*}/g;
        let match;

        while ((match = routeRegex.exec(routesMatch[1])) !== null) {
          routes.push({ path: match[1], category: match[2] });
        }

        // Generer le XML
        const today = new Date().toISOString().split('T')[0];
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

        for (const route of routes) {
          const config = categoryConfig[route.category] || { priority: "0.6", changefreq: "monthly" };
          xml += '  <url>\n';
          xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
          xml += `    <lastmod>${today}</lastmod>\n`;
          xml += `    <changefreq>${config.changefreq}</changefreq>\n`;
          xml += `    <priority>${config.priority}</priority>\n`;
          xml += '  </url>\n';
        }

        xml += '</urlset>\n';

        // Ecrire le fichier
        const outputFile = path.resolve(__dirname, 'public/sitemap.xml');
        fs.writeFileSync(outputFile, xml, 'utf-8');

        console.log(`   Sitemap genere avec ${routes.length} URLs`);
      } catch (error) {
        console.error('   Erreur generation sitemap:', error);
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    // Disable source maps in production to prevent exposing source code
    sourcemap: mode === "development",
  },
  plugins: [
    react(),
    sitemapGenerator(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

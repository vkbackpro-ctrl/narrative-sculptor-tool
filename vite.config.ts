import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import vitePrerender from 'vite-plugin-prerender';

// Configuration du sitemap
const BASE_URL = 'https://vkback.com';
const categoryConfig: Record<string, { priority: string; changefreq: string }> = {
  "Pages principales": { priority: "1.0", changefreq: "weekly" },
  "Services principaux": { priority: "0.9", changefreq: "monthly" },
  "Création de Sites": { priority: "0.8", changefreq: "monthly" },
  "E-commerce": { priority: "0.8", changefreq: "monthly" },
  "Référencement SEO": { priority: "0.8", changefreq: "monthly" },
  "Maintenance & Support": { priority: "0.8", changefreq: "monthly" },
  "Blog": { priority: "0.7", changefreq: "weekly" },
  "Pages légales": { priority: "0.5", changefreq: "yearly" },
};

// Toutes les routes à pré-rendre
const prerenderRoutes = [
  // Pages principales
  "/", "/realisations/", "/tarifs/", "/a-propos/", "/contact/", "/blog/",
  // Services principaux
  "/creation-site-internet-lyon", "/creation-site-ecommerce-lyon", "/referencement-seo-lyon",
  "/maintenance-support-wordpress-lyon", "/google-ads-sea-lyon", "/hebergement-web-lyon",
  // Création Sites
  "/creation-site-vitrine-lyon", "/refonte-site-internet-lyon", "/creation-site-corporate-lyon",
  "/creation-site-one-page-lyon", "/creation-site-catalogue-lyon", "/creation-site-multilingue-lyon",
  "/migration-site-internet-lyon",
  // E-commerce
  "/services/boutique-woocommerce-lyon", "/services/migration-woocommerce-lyon",
  "/services/optimisation-conversion-lyon", "/services/seo-ecommerce-lyon",
  "/services/refonte-ecommerce-lyon", "/services/marketplace-woocommerce-lyon",
  "/services/paiement-securise-woocommerce-lyon", "/services/dropshipping-woocommerce-lyon",
  // SEO
  "/services/audit-seo-lyon", "/services/seo-local-lyon", "/services/netlinking-backlinks-lyon",
  "/services/redaction-web-seo-lyon", "/services/optimisation-google-my-business-lyon",
  "/services/consultant-seo-lyon", "/services/formation-seo-lyon",
  "/services/analyse-concurrentielle-seo-lyon", "/services/geo-referencement-ia-lyon",
  // Maintenance
  "/services/maintenance-wordpress-lyon", "/services/sauvegarde-site-wordpress-lyon",
  "/services/securite-site-wordpress-lyon", "/services/optimisation-performance-wordpress-lyon",
  "/services/support-technique-wordpress-lyon", "/services/mise-a-jour-plugins-wordpress-lyon",
  "/services/certificat-ssl-wordpress-lyon", "/services/infogerance-wordpress-lyon",
  // Google Ads
  "/google-ads-search-lyon", "/google-shopping-lyon", "/google-display-remarketing-lyon",
  "/google-local-ads-lyon", "/youtube-ads-lyon", "/optimisation-google-ads-lyon",
  "/audit-google-ads-lyon", "/gestion-budget-google-ads-lyon",
  // Hébergement
  "/hebergement-wordpress-lyon", "/hebergement-ecommerce-lyon", "/serveur-dedie-lyon",
  "/vps-manage-lyon", "/certificat-ssl-securite-lyon", "/migration-hebergement-lyon",
  "/cdn-acceleration-site-lyon", "/infogerance-serveur-lyon",
  // Blog
  "/blog/prix-creation-site-internet-lyon", "/blog/pourquoi-choisir-woocommerce",
  "/blog/referencement-seo-lyon", "/blog/maintenance-wordpress", "/blog/google-ads-sea-lyon",
  "/blog/hebergement-web-france", "/blog/sido-lyon-2026", "/blog/cprint-lyon-2026",
  // Pages légales
  "/mentions-legales", "/politique-confidentialite", "/cgv", "/cookies"
];

// Plugin Vite pour générer le sitemap automatiquement
function sitemapGenerator() {
  return {
    name: 'sitemap-generator',
    buildStart() {
      console.log('🗺️  Génération automatique du sitemap.xml...');
      
      try {
        const routesFile = path.resolve(__dirname, 'src/config/routes.ts');
        const content = fs.readFileSync(routesFile, 'utf-8');
        
        // Parser les routes
        const routesMatch = content.match(/export const siteRoutes[^=]*=\s*\[([\s\S]*?)\];/);
        if (!routesMatch) {
          console.error('   ❌ Impossible de trouver siteRoutes');
          return;
        }
        
        const routes: Array<{ path: string; category: string }> = [];
        const routeRegex = /{\s*path:\s*"([^"]+)",\s*title:\s*"[^"]+",\s*category:\s*"([^"]+)"\s*}/g;
        let match;
        
        while ((match = routeRegex.exec(routesMatch[1])) !== null) {
          routes.push({ path: match[1], category: match[2] });
        }
        
        // Générer le XML
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
        
        // Écrire le fichier
        const outputFile = path.resolve(__dirname, 'public/sitemap.xml');
        fs.writeFileSync(outputFile, xml, 'utf-8');
        
        console.log(`   ✅ Sitemap généré avec ${routes.length} URLs`);
      } catch (error) {
        console.error('   ❌ Erreur génération sitemap:', error);
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
  plugins: [
    react(),
    sitemapGenerator(),
    mode === "development" && componentTagger(),
    mode === "production" && vitePrerender({
      staticDir: path.resolve(__dirname, 'dist'),
      routes: prerenderRoutes,
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

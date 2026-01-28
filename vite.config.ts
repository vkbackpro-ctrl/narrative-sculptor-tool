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
  "Création de Sites": { priority: "0.8", changefreq: "monthly" },
  "E-commerce": { priority: "0.8", changefreq: "monthly" },
  "Référencement SEO": { priority: "0.8", changefreq: "monthly" },
  "Maintenance & Support": { priority: "0.8", changefreq: "monthly" },
  "Google Ads & SEA": { priority: "0.8", changefreq: "monthly" },
  "Hébergement Web": { priority: "0.8", changefreq: "monthly" },
  "Blog": { priority: "0.7", changefreq: "weekly" },
  "Pages légales": { priority: "0.5", changefreq: "yearly" },
};

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
  build: {
    // Disable source maps in production to prevent exposing source code
    sourcemap: mode === "development",
    // Ensure dead code elimination for DEV blocks
    minify: mode === "production" ? "esbuild" : false,
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

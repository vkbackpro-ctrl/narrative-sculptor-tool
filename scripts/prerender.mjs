import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist');

// Routes to pre-render
const routes = [
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

async function prerender() {
  console.log('Starting static route generation...\n');

  // Read the index.html template
  const indexPath = path.join(distPath, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.error('Error: dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const indexHtml = fs.readFileSync(indexPath, 'utf-8');

  let successCount = 0;
  let errorCount = 0;

  for (const route of routes) {
    try {
      // Skip root route (already has index.html)
      if (route === '/') {
        successCount++;
        console.log(`  [OK] ${route} (exists)`);
        continue;
      }

      // Create directory structure
      const outputDir = path.join(distPath, route);
      const outputFile = path.join(outputDir, 'index.html');

      // Create directory if it doesn't exist
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Copy index.html for this route
      // This enables SPA routing - each route serves the same HTML
      // The noscript content provides SEO, React handles interactivity
      fs.writeFileSync(outputFile, indexHtml);

      successCount++;
      console.log(`  [OK] ${route}`);
    } catch (error) {
      errorCount++;
      console.error(`  [ERROR] ${route}: ${error.message}`);
    }
  }

  console.log(`\n========================================`);
  console.log(`Static route generation complete!`);
  console.log(`  Success: ${successCount} routes`);
  console.log(`  Errors: ${errorCount} routes`);
  console.log(`========================================`);

  if (errorCount > 0) {
    process.exit(1);
  }
}

prerender().catch((error) => {
  console.error('Pre-render failed:', error);
  process.exit(1);
});

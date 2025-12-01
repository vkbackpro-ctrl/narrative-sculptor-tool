import { useEffect } from "react";
import { siteRoutes } from "@/config/routes";

// Configuration des priorités et fréquences par catégorie
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

const SitemapXML = () => {
  useEffect(() => {
    // Domaine du site - à adapter selon l'environnement
    const baseUrl = window.location.origin;
    const today = new Date().toISOString().split('T')[0];

    // Génération du XML
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    siteRoutes.forEach(route => {
      const config = categoryConfig[route.category] || { priority: "0.6", changefreq: "monthly" };
      
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${config.changefreq}</changefreq>\n`;
      xml += `    <priority>${config.priority}</priority>\n`;
      xml += '  </url>\n';
    });

    xml += '</urlset>';

    // Création d'un blob et téléchargement automatique
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Remplacement du contenu de la page avec le XML
    document.open();
    document.write(xml);
    document.close();
    
    // Nettoyage
    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);

  return null;
};

export default SitemapXML;

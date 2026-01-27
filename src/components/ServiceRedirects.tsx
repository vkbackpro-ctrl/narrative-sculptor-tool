import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Map of old URLs to new URLs (without /services/ prefix)
const redirectMap: Record<string, string> = {
  // E-commerce subservices
  "/services/boutique-woocommerce-lyon": "/boutique-woocommerce-lyon",
  "/services/migration-woocommerce-lyon": "/migration-woocommerce-lyon",
  "/services/optimisation-conversion-lyon": "/optimisation-conversion-lyon",
  "/services/seo-ecommerce-lyon": "/seo-ecommerce-lyon",
  "/services/refonte-ecommerce-lyon": "/refonte-ecommerce-lyon",
  "/services/marketplace-woocommerce-lyon": "/marketplace-woocommerce-lyon",
  "/services/paiement-securise-woocommerce-lyon": "/paiement-securise-woocommerce-lyon",
  "/services/dropshipping-woocommerce-lyon": "/dropshipping-woocommerce-lyon",
  
  // SEO subservices
  "/services/audit-seo-lyon": "/audit-seo-lyon",
  "/services/seo-local-lyon": "/seo-local-lyon",
  "/services/netlinking-backlinks-lyon": "/netlinking-backlinks-lyon",
  "/services/redaction-web-seo-lyon": "/redaction-web-seo-lyon",
  "/services/optimisation-google-my-business-lyon": "/optimisation-google-my-business-lyon",
  "/services/consultant-seo-lyon": "/consultant-seo-lyon",
  "/services/formation-seo-lyon": "/formation-seo-lyon",
  "/services/analyse-concurrentielle-seo-lyon": "/analyse-concurrentielle-seo-lyon",
  "/services/geo-referencement-ia-lyon": "/geo-referencement-ia-lyon",
  
  // Maintenance subservices
  "/services/maintenance-wordpress-lyon": "/maintenance-wordpress-lyon",
  "/services/sauvegarde-site-wordpress-lyon": "/sauvegarde-site-wordpress-lyon",
  "/services/securite-site-wordpress-lyon": "/securite-site-wordpress-lyon",
  "/services/optimisation-performance-wordpress-lyon": "/optimisation-performance-wordpress-lyon",
  "/services/support-technique-wordpress-lyon": "/support-technique-wordpress-lyon",
  "/services/mise-a-jour-plugins-wordpress-lyon": "/mise-a-jour-plugins-wordpress-lyon",
  "/services/certificat-ssl-wordpress-lyon": "/certificat-ssl-wordpress-lyon",
  "/services/infogerance-wordpress-lyon": "/infogerance-wordpress-lyon",
};

const ServiceRedirects = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;
    const newPath = redirectMap[currentPath];
    
    if (newPath) {
      // Use replace to simulate 301 redirect (doesn't add to history)
      navigate(newPath, { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
};

export default ServiceRedirects;

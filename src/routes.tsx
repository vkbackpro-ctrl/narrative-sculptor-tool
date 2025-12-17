import { lazy } from "react";
import type { RouteRecord } from "vite-react-ssg";
import Layout from "./components/Layout";

// Pages principales (chargées immédiatement pour SSG)
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy loading pour les autres pages
const CreationSiteInternet = lazy(() => import("./pages/services/CreationSiteInternet"));
const SitesEcommerce = lazy(() => import("./pages/services/SitesEcommerce"));
const ReferencementSEO = lazy(() => import("./pages/services/ReferencementSEO"));
const SiteVitrine = lazy(() => import("./pages/services/SiteVitrine"));
const RefonteSite = lazy(() => import("./pages/services/RefonteSite"));
const SiteCorporate = lazy(() => import("./pages/services/SiteCorporate"));
const MaintenanceSupport = lazy(() => import("./pages/services/MaintenanceSupport"));
const GoogleAdsSEA = lazy(() => import("./pages/services/GoogleAdsSEA"));
const HebergementWeb = lazy(() => import("./pages/services/HebergementWeb"));

// Sous-services Création Site Internet
const SiteOnePage = lazy(() => import("./pages/services/subservices/SiteOnePage"));
const SiteCatalogue = lazy(() => import("./pages/services/subservices/SiteCatalogue"));
const SiteMultilingue = lazy(() => import("./pages/services/subservices/SiteMultilingue"));
const MigrationSite = lazy(() => import("./pages/services/subservices/MigrationSite"));

// Sous-services E-commerce
const BoutiqueWooCommerce = lazy(() => import("./pages/services/subservices/BoutiqueWooCommerce"));
const MigrationWooCommerce = lazy(() => import("./pages/services/subservices/MigrationWooCommerce"));
const OptimisationConversion = lazy(() => import("./pages/services/subservices/OptimisationConversion"));
const SEOEcommerce = lazy(() => import("./pages/services/subservices/SEOEcommerce"));
const RefonteEcommerce = lazy(() => import("./pages/services/subservices/RefonteEcommerce"));
const Marketplace = lazy(() => import("./pages/services/subservices/Marketplace"));
const PaiementSecurise = lazy(() => import("./pages/services/subservices/PaiementSecurise"));
const Dropshipping = lazy(() => import("./pages/services/subservices/Dropshipping"));

// Sous-services SEO
const AuditSEO = lazy(() => import("./pages/services/subservices/AuditSEO"));
const SEOLocal = lazy(() => import("./pages/services/subservices/SEOLocal"));
const Netlinking = lazy(() => import("./pages/services/subservices/Netlinking"));
const RedactionWeb = lazy(() => import("./pages/services/subservices/RedactionWeb"));
const GoogleMyBusiness = lazy(() => import("./pages/services/subservices/GoogleMyBusiness"));
const ConsultantSEO = lazy(() => import("./pages/services/subservices/ConsultantSEO"));
const FormationSEO = lazy(() => import("./pages/services/subservices/FormationSEO"));
const AnalyseConcurrence = lazy(() => import("./pages/services/subservices/AnalyseConcurrence"));
const GEO = lazy(() => import("./pages/services/subservices/GEO"));

// Sous-services Maintenance & Support
const MaintenanceWordPress = lazy(() => import("./pages/services/subservices/MaintenanceWordPress"));
const SauvegardeAutomatique = lazy(() => import("./pages/services/subservices/SauvegardeAutomatique"));
const SecuriteWordPress = lazy(() => import("./pages/services/subservices/SecuriteWordPress"));
const OptimisationPerformance = lazy(() => import("./pages/services/subservices/OptimisationPerformance"));
const SupportTechnique = lazy(() => import("./pages/services/subservices/SupportTechnique"));
const MiseAJourPlugins = lazy(() => import("./pages/services/subservices/MiseAJourPlugins"));
const CertificatSSL = lazy(() => import("./pages/services/subservices/CertificatSSL"));
const InfogeranceWordPress = lazy(() => import("./pages/services/subservices/InfogeranceWordPress"));

// Sous-services Google Ads
const CampagnesSearch = lazy(() => import("./pages/services/subservices/googleads/CampagnesSearch"));
const GoogleShopping = lazy(() => import("./pages/services/subservices/googleads/GoogleShopping"));
const DisplayRemarketing = lazy(() => import("./pages/services/subservices/googleads/DisplayRemarketing"));
const GoogleLocalAds = lazy(() => import("./pages/services/subservices/googleads/GoogleLocalAds"));
const YouTubeAds = lazy(() => import("./pages/services/subservices/googleads/YouTubeAds"));
const OptimisationGoogleAds = lazy(() => import("./pages/services/subservices/googleads/OptimisationGoogleAds"));
const AuditGoogleAds = lazy(() => import("./pages/services/subservices/googleads/AuditGoogleAds"));
const GestionBudget = lazy(() => import("./pages/services/subservices/googleads/GestionBudget"));

// Sous-services Hébergement
const HebergementWordPress = lazy(() => import("./pages/services/subservices/hebergement/HebergementWordPress"));
const HebergementEcommerce = lazy(() => import("./pages/services/subservices/hebergement/HebergementEcommerce"));
const ServeurDedie = lazy(() => import("./pages/services/subservices/hebergement/ServeurDedie"));
const VPSManage = lazy(() => import("./pages/services/subservices/hebergement/VPSManage"));
const SSLSecurite = lazy(() => import("./pages/services/subservices/hebergement/SSLSecurite"));
const MigrationHebergement = lazy(() => import("./pages/services/subservices/hebergement/MigrationHebergement"));
const CDNPerformance = lazy(() => import("./pages/services/subservices/hebergement/CDNPerformance"));
const InfogeranceServeur = lazy(() => import("./pages/services/subservices/hebergement/InfogeranceServeur"));

// Pages principales lazy
const Realisations = lazy(() => import("./pages/Realisations"));
const Tarifs = lazy(() => import("./pages/Tarifs"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));

// Articles Blog
const PrixCreationSiteInternet = lazy(() => import("./pages/blog/PrixCreationSiteInternet"));
const PourquoiChoisirWooCommerce = lazy(() => import("./pages/blog/PourquoiChoisirWooCommerce"));
const ReferencementSEOLyon = lazy(() => import("./pages/blog/ReferencementSEOLyon"));
const MaintenanceWordPressBlog = lazy(() => import("./pages/blog/MaintenanceWordPress"));
const GoogleAdsSEALyon = lazy(() => import("./pages/blog/GoogleAdsSEALyon"));
const HebergementWebFrance = lazy(() => import("./pages/blog/HebergementWebFrance"));
const SalonEcommerceLyon = lazy(() => import("./pages/blog/SalonEcommerceLyon"));
const WordCampLyon = lazy(() => import("./pages/blog/WordCampLyon"));

// Pages légales
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
const CGV = lazy(() => import("./pages/CGV"));
const Cookies = lazy(() => import("./pages/Cookies"));
const Sitemap = lazy(() => import("./pages/Sitemap"));

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      // Page d'accueil
      { index: true, element: <Index /> },
      
      // Pages principales
      { path: "realisations/", element: <Realisations /> },
      { path: "tarifs/", element: <Tarifs /> },
      { path: "a-propos/", element: <About /> },
      { path: "contact/", element: <Contact /> },
      { path: "blog/", element: <Blog /> },
      
      // Articles Blog
      { path: "blog/prix-creation-site-internet-lyon", element: <PrixCreationSiteInternet /> },
      { path: "blog/pourquoi-choisir-woocommerce", element: <PourquoiChoisirWooCommerce /> },
      { path: "blog/referencement-seo-lyon", element: <ReferencementSEOLyon /> },
      { path: "blog/maintenance-wordpress", element: <MaintenanceWordPressBlog /> },
      { path: "blog/google-ads-sea-lyon", element: <GoogleAdsSEALyon /> },
      { path: "blog/hebergement-web-france", element: <HebergementWebFrance /> },
      { path: "blog/sido-lyon-2026", element: <WordCampLyon /> },
      { path: "blog/cprint-lyon-2026", element: <SalonEcommerceLyon /> },
      
      // Pages légales
      { path: "mentions-legales", element: <MentionsLegales /> },
      { path: "politique-confidentialite", element: <PolitiqueConfidentialite /> },
      { path: "cgv", element: <CGV /> },
      { path: "cookies", element: <Cookies /> },
      { path: "plan-du-site", element: <Sitemap /> },
      { path: "sitemap", element: <Sitemap /> },
      
      // Services principaux
      { path: "creation-site-internet-lyon", element: <CreationSiteInternet /> },
      { path: "creation-site-ecommerce-lyon", element: <SitesEcommerce /> },
      { path: "referencement-seo-lyon", element: <ReferencementSEO /> },
      { path: "maintenance-support-wordpress-lyon", element: <MaintenanceSupport /> },
      { path: "google-ads-sea-lyon", element: <GoogleAdsSEA /> },
      { path: "hebergement-web-lyon", element: <HebergementWeb /> },
      
      // Sous-services Création Site Internet
      { path: "creation-site-vitrine-lyon", element: <SiteVitrine /> },
      { path: "refonte-site-internet-lyon", element: <RefonteSite /> },
      { path: "creation-site-corporate-lyon", element: <SiteCorporate /> },
      { path: "creation-site-one-page-lyon", element: <SiteOnePage /> },
      { path: "creation-site-catalogue-lyon", element: <SiteCatalogue /> },
      { path: "creation-site-multilingue-lyon", element: <SiteMultilingue /> },
      { path: "migration-site-internet-lyon", element: <MigrationSite /> },
      
      // Sous-services E-commerce
      { path: "services/boutique-woocommerce-lyon", element: <BoutiqueWooCommerce /> },
      { path: "services/migration-woocommerce-lyon", element: <MigrationWooCommerce /> },
      { path: "services/optimisation-conversion-lyon", element: <OptimisationConversion /> },
      { path: "services/seo-ecommerce-lyon", element: <SEOEcommerce /> },
      { path: "services/refonte-ecommerce-lyon", element: <RefonteEcommerce /> },
      { path: "services/marketplace-woocommerce-lyon", element: <Marketplace /> },
      { path: "services/paiement-securise-woocommerce-lyon", element: <PaiementSecurise /> },
      { path: "services/dropshipping-woocommerce-lyon", element: <Dropshipping /> },
      
      // Sous-services SEO
      { path: "services/audit-seo-lyon", element: <AuditSEO /> },
      { path: "services/seo-local-lyon", element: <SEOLocal /> },
      { path: "services/netlinking-backlinks-lyon", element: <Netlinking /> },
      { path: "services/redaction-web-seo-lyon", element: <RedactionWeb /> },
      { path: "services/optimisation-google-my-business-lyon", element: <GoogleMyBusiness /> },
      { path: "services/consultant-seo-lyon", element: <ConsultantSEO /> },
      { path: "services/formation-seo-lyon", element: <FormationSEO /> },
      { path: "services/analyse-concurrentielle-seo-lyon", element: <AnalyseConcurrence /> },
      { path: "services/geo-referencement-ia-lyon", element: <GEO /> },
      
      // Sous-services Maintenance & Support
      { path: "services/maintenance-wordpress-lyon", element: <MaintenanceWordPress /> },
      { path: "services/sauvegarde-site-wordpress-lyon", element: <SauvegardeAutomatique /> },
      { path: "services/securite-site-wordpress-lyon", element: <SecuriteWordPress /> },
      { path: "services/optimisation-performance-wordpress-lyon", element: <OptimisationPerformance /> },
      { path: "services/support-technique-wordpress-lyon", element: <SupportTechnique /> },
      { path: "services/mise-a-jour-plugins-wordpress-lyon", element: <MiseAJourPlugins /> },
      { path: "services/certificat-ssl-wordpress-lyon", element: <CertificatSSL /> },
      { path: "services/infogerance-wordpress-lyon", element: <InfogeranceWordPress /> },
      
      // Sous-services Google Ads
      { path: "google-ads-search-lyon", element: <CampagnesSearch /> },
      { path: "google-shopping-lyon", element: <GoogleShopping /> },
      { path: "google-display-remarketing-lyon", element: <DisplayRemarketing /> },
      { path: "google-local-ads-lyon", element: <GoogleLocalAds /> },
      { path: "youtube-ads-lyon", element: <YouTubeAds /> },
      { path: "optimisation-google-ads-lyon", element: <OptimisationGoogleAds /> },
      { path: "audit-google-ads-lyon", element: <AuditGoogleAds /> },
      { path: "gestion-budget-google-ads-lyon", element: <GestionBudget /> },
      
      // Sous-services Hébergement
      { path: "hebergement-wordpress-lyon", element: <HebergementWordPress /> },
      { path: "hebergement-ecommerce-lyon", element: <HebergementEcommerce /> },
      { path: "serveur-dedie-lyon", element: <ServeurDedie /> },
      { path: "vps-manage-lyon", element: <VPSManage /> },
      { path: "certificat-ssl-securite-lyon", element: <SSLSecurite /> },
      { path: "migration-hebergement-lyon", element: <MigrationHebergement /> },
      { path: "cdn-acceleration-site-lyon", element: <CDNPerformance /> },
      { path: "infogerance-serveur-lyon", element: <InfogeranceServeur /> },
      
      // 404
      { path: "*", element: <NotFound /> },
    ],
  },
];

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTopOnNavigate from "@/components/ScrollToTopOnNavigate";
import TrailingSlashRedirect from "@/components/TrailingSlashRedirect";
import GlobalSEO from "@/components/GlobalSEO";

// Pages principales (chargées immédiatement)
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
const SitemapXML = lazy(() => import("./pages/SitemapXML"));
const TestSitemap = lazy(() => import("./pages/TestSitemap"));
const TestLinks = lazy(() => import("./pages/TestLinks"));

const queryClient = new QueryClient();

// Composant de chargement
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <GlobalSEO />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnNavigate />
        <TrailingSlashRedirect />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Pages principales */}
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* Articles Blog */}
            <Route path="/blog/prix-creation-site-internet-lyon" element={<PrixCreationSiteInternet />} />
            <Route path="/blog/pourquoi-choisir-woocommerce" element={<PourquoiChoisirWooCommerce />} />
            <Route path="/blog/referencement-seo-lyon" element={<ReferencementSEOLyon />} />
            <Route path="/blog/maintenance-wordpress" element={<MaintenanceWordPressBlog />} />
            <Route path="/blog/google-ads-sea-lyon" element={<GoogleAdsSEALyon />} />
            <Route path="/blog/hebergement-web-france" element={<HebergementWebFrance />} />
            <Route path="/blog/sido-lyon-2026" element={<WordCampLyon />} />
            <Route path="/blog/cprint-lyon-2026" element={<SalonEcommerceLyon />} />
            
            {/* Pages légales */}
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/plan-du-site" element={<Sitemap />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/sitemap.xml" element={<SitemapXML />} />
            <Route path="/sitemaps.xml" element={<SitemapXML />} />
            <Route path="/test-sitemap" element={<TestSitemap />} />
            <Route path="/test-links" element={<TestLinks />} />
            
            {/* Services Routes - Sans le préfixe /services/ */}
            <Route path="/creation-site-internet-lyon" element={<CreationSiteInternet />} />
            <Route path="/creation-site-ecommerce-lyon" element={<SitesEcommerce />} />
            <Route path="/referencement-seo-lyon" element={<ReferencementSEO />} />
            <Route path="/maintenance-support-wordpress-lyon" element={<MaintenanceSupport />} />
            <Route path="/google-ads-sea-lyon" element={<GoogleAdsSEA />} />
            <Route path="/hebergement-web-lyon" element={<HebergementWeb />} />
            
            {/* Sous-services de Création Site Internet */}
            <Route path="/creation-site-vitrine-lyon" element={<SiteVitrine />} />
            <Route path="/refonte-site-internet-lyon" element={<RefonteSite />} />
            <Route path="/creation-site-corporate-lyon" element={<SiteCorporate />} />
            <Route path="/creation-site-one-page-lyon" element={<SiteOnePage />} />
            <Route path="/creation-site-catalogue-lyon" element={<SiteCatalogue />} />
            <Route path="/creation-site-multilingue-lyon" element={<SiteMultilingue />} />
            <Route path="/migration-site-internet-lyon" element={<MigrationSite />} />
            
            {/* Sous-services E-commerce */}
            <Route path="/boutique-woocommerce-lyon" element={<BoutiqueWooCommerce />} />
            <Route path="/migration-woocommerce-lyon" element={<MigrationWooCommerce />} />
            <Route path="/optimisation-conversion-lyon" element={<OptimisationConversion />} />
            <Route path="/seo-ecommerce-lyon" element={<SEOEcommerce />} />
            <Route path="/refonte-ecommerce-lyon" element={<RefonteEcommerce />} />
            <Route path="/marketplace-woocommerce-lyon" element={<Marketplace />} />
            <Route path="/paiement-securise-woocommerce-lyon" element={<PaiementSecurise />} />
            <Route path="/dropshipping-woocommerce-lyon" element={<Dropshipping />} />
            
            {/* Sous-services SEO */}
            <Route path="/audit-seo-lyon" element={<AuditSEO />} />
            <Route path="/seo-local-lyon" element={<SEOLocal />} />
            <Route path="/netlinking-backlinks-lyon" element={<Netlinking />} />
            <Route path="/redaction-web-seo-lyon" element={<RedactionWeb />} />
            <Route path="/optimisation-google-my-business-lyon" element={<GoogleMyBusiness />} />
            <Route path="/consultant-seo-lyon" element={<ConsultantSEO />} />
            <Route path="/formation-seo-lyon" element={<FormationSEO />} />
            <Route path="/analyse-concurrentielle-seo-lyon" element={<AnalyseConcurrence />} />
            <Route path="/geo-referencement-ia-lyon" element={<GEO />} />
            
            {/* Sous-services Maintenance & Support */}
            <Route path="/maintenance-wordpress-lyon" element={<MaintenanceWordPress />} />
            <Route path="/sauvegarde-site-wordpress-lyon" element={<SauvegardeAutomatique />} />
            <Route path="/securite-site-wordpress-lyon" element={<SecuriteWordPress />} />
            <Route path="/optimisation-performance-wordpress-lyon" element={<OptimisationPerformance />} />
            <Route path="/support-technique-wordpress-lyon" element={<SupportTechnique />} />
            <Route path="/mise-a-jour-plugins-wordpress-lyon" element={<MiseAJourPlugins />} />
            <Route path="/certificat-ssl-wordpress-lyon" element={<CertificatSSL />} />
            <Route path="/infogerance-wordpress-lyon" element={<InfogeranceWordPress />} />
            
            {/* Sous-services Google Ads */}
            <Route path="/google-ads-search-lyon" element={<CampagnesSearch />} />
            <Route path="/google-shopping-lyon" element={<GoogleShopping />} />
            <Route path="/google-display-remarketing-lyon" element={<DisplayRemarketing />} />
            <Route path="/google-local-ads-lyon" element={<GoogleLocalAds />} />
            <Route path="/youtube-ads-lyon" element={<YouTubeAds />} />
            <Route path="/optimisation-google-ads-lyon" element={<OptimisationGoogleAds />} />
            <Route path="/audit-google-ads-lyon" element={<AuditGoogleAds />} />
            <Route path="/gestion-budget-google-ads-lyon" element={<GestionBudget />} />
            
            {/* Sous-services Hébergement */}
            <Route path="/hebergement-wordpress-lyon" element={<HebergementWordPress />} />
            <Route path="/hebergement-ecommerce-lyon" element={<HebergementEcommerce />} />
            <Route path="/serveur-dedie-lyon" element={<ServeurDedie />} />
            <Route path="/vps-manage-lyon" element={<VPSManage />} />
            <Route path="/certificat-ssl-securite-lyon" element={<SSLSecurite />} />
            <Route path="/migration-hebergement-lyon" element={<MigrationHebergement />} />
            <Route path="/cdn-acceleration-site-lyon" element={<CDNPerformance />} />
            <Route path="/infogerance-serveur-lyon" element={<InfogeranceServeur />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

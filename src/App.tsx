import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTopOnNavigate from "@/components/ScrollToTopOnNavigate";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CreationSiteInternet from "./pages/services/CreationSiteInternet";
import SitesEcommerce from "./pages/services/SitesEcommerce";
import ReferencementSEO from "./pages/services/ReferencementSEO";
import SiteVitrine from "./pages/services/SiteVitrine";
import RefonteSite from "./pages/services/RefonteSite";
import SiteCorporate from "./pages/services/SiteCorporate";
import MaintenanceSupport from "./pages/services/MaintenanceSupport";
import GoogleAdsSEA from "./pages/services/GoogleAdsSEA";
import HebergementWeb from "./pages/services/HebergementWeb";
import SiteOnePage from "./pages/services/subservices/SiteOnePage";
import SiteCatalogue from "./pages/services/subservices/SiteCatalogue";
import SiteMultilingue from "./pages/services/subservices/SiteMultilingue";
import MigrationSite from "./pages/services/subservices/MigrationSite";
import BoutiqueWooCommerce from "./pages/services/subservices/BoutiqueWooCommerce";
import MigrationWooCommerce from "./pages/services/subservices/MigrationWooCommerce";
import OptimisationConversion from "./pages/services/subservices/OptimisationConversion";
import SEOEcommerce from "./pages/services/subservices/SEOEcommerce";
import RefonteEcommerce from "./pages/services/subservices/RefonteEcommerce";
import Marketplace from "./pages/services/subservices/Marketplace";
import PaiementSecurise from "./pages/services/subservices/PaiementSecurise";
import Dropshipping from "./pages/services/subservices/Dropshipping";
import AuditSEO from "./pages/services/subservices/AuditSEO";
import SEOLocal from "./pages/services/subservices/SEOLocal";
import Netlinking from "./pages/services/subservices/Netlinking";
import RedactionWeb from "./pages/services/subservices/RedactionWeb";
import GoogleMyBusiness from "./pages/services/subservices/GoogleMyBusiness";
import ConsultantSEO from "./pages/services/subservices/ConsultantSEO";
import FormationSEO from "./pages/services/subservices/FormationSEO";
import AnalyseConcurrence from "./pages/services/subservices/AnalyseConcurrence";
import Realisations from "./pages/Realisations";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PrixCreationSiteInternet from "./pages/blog/PrixCreationSiteInternet";
import PourquoiChoisirWooCommerce from "./pages/blog/PourquoiChoisirWooCommerce";
import ReferencementSEOLyon from "./pages/blog/ReferencementSEOLyon";
import MaintenanceWordPress from "./pages/blog/MaintenanceWordPress";
import GoogleAdsSEALyon from "./pages/blog/GoogleAdsSEALyon";
import HebergementWebFrance from "./pages/blog/HebergementWebFrance";
import SalonEcommerceLyon from "./pages/blog/SalonEcommerceLyon";
import WordCampLyon from "./pages/blog/WordCampLyon";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import CGV from "./pages/CGV";
import Cookies from "./pages/Cookies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnNavigate />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Pages principales */}
          <Route path="/realisations/" element={<Realisations />} />
          <Route path="/tarifs/" element={<Tarifs />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/blog/" element={<Blog />} />
          
          {/* Articles Blog */}
          <Route path="/blog/prix-creation-site-internet-lyon" element={<PrixCreationSiteInternet />} />
          <Route path="/blog/pourquoi-choisir-woocommerce" element={<PourquoiChoisirWooCommerce />} />
          <Route path="/blog/referencement-seo-lyon" element={<ReferencementSEOLyon />} />
          <Route path="/blog/maintenance-wordpress" element={<MaintenanceWordPress />} />
          <Route path="/blog/google-ads-sea-lyon" element={<GoogleAdsSEALyon />} />
          <Route path="/blog/hebergement-web-france" element={<HebergementWebFrance />} />
          <Route path="/blog/salon-ecommerce-lyon-2025" element={<SalonEcommerceLyon />} />
          <Route path="/blog/wordcamp-lyon-2025" element={<WordCampLyon />} />
          
          {/* Pages légales */}
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/cookies" element={<Cookies />} />
          
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
          <Route path="/services/boutique-woocommerce-lyon" element={<BoutiqueWooCommerce />} />
          <Route path="/services/migration-woocommerce-lyon" element={<MigrationWooCommerce />} />
          <Route path="/services/optimisation-conversion-lyon" element={<OptimisationConversion />} />
          <Route path="/services/seo-ecommerce-lyon" element={<SEOEcommerce />} />
          <Route path="/services/refonte-ecommerce-lyon" element={<RefonteEcommerce />} />
          <Route path="/services/marketplace-woocommerce-lyon" element={<Marketplace />} />
          <Route path="/services/paiement-securise-woocommerce-lyon" element={<PaiementSecurise />} />
          <Route path="/services/dropshipping-woocommerce-lyon" element={<Dropshipping />} />
          
          {/* Sous-services SEO */}
          <Route path="/services/audit-seo-lyon" element={<AuditSEO />} />
          <Route path="/services/seo-local-lyon" element={<SEOLocal />} />
          <Route path="/services/netlinking-backlinks-lyon" element={<Netlinking />} />
          <Route path="/services/redaction-web-seo-lyon" element={<RedactionWeb />} />
          <Route path="/services/optimisation-google-my-business-lyon" element={<GoogleMyBusiness />} />
          <Route path="/services/consultant-seo-lyon" element={<ConsultantSEO />} />
          <Route path="/services/formation-seo-lyon" element={<FormationSEO />} />
          <Route path="/services/analyse-concurrentielle-seo-lyon" element={<AnalyseConcurrence />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

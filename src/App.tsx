import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Realisations from "./pages/Realisations";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PrixCreationSiteInternet from "./pages/blog/PrixCreationSiteInternet";
import WooCommercePrestaShop from "./pages/blog/WooCommercePrestaShop";
import ReferencementSEOLyon from "./pages/blog/ReferencementSEOLyon";
import MaintenanceWordPress from "./pages/blog/MaintenanceWordPress";
import GoogleAdsSEALyon from "./pages/blog/GoogleAdsSEALyon";
import HebergementWebFrance from "./pages/blog/HebergementWebFrance";
import SalonEcommerceLyon from "./pages/blog/SalonEcommerceLyon";
import WordCampLyon from "./pages/blog/WordCampLyon";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import CGV from "./pages/CGV";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Pages principales */}
          <Route path="/realisations/" element={<Realisations />} />
          <Route path="/tarifs/" element={<Tarifs />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/blog/" element={<Blog />} />
          
          {/* Articles Blog */}
          <Route path="/blog/prix-creation-site-internet-lyon" element={<PrixCreationSiteInternet />} />
          <Route path="/blog/woocommerce-prestashop-comparatif" element={<WooCommercePrestaShop />} />
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
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

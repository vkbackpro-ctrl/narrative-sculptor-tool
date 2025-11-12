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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
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

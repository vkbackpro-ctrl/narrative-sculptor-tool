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
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTopOnNavigate from "@/components/ScrollToTopOnNavigate";
import GlobalSEO from "@/components/GlobalSEO";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

// Composant de chargement
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const Layout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <GlobalSEO />
        <Toaster />
        <Sonner />
        <ScrollToTopOnNavigate />
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default Layout;

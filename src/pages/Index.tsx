import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioSection from "@/components/PortfolioSection";
import SomervilleBeforeAfter from "@/components/SomervilleBeforeAfter";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Agence Web Lyon | Création Site Internet & SEO | VKBack</title>
        <meta 
          name="description" 
          content="VKBack, agence web à Lyon depuis 2014. Création sites internet WordPress, e-commerce WooCommerce, SEO local. Développement sur-mesure. +200 clients ⭐ Devis gratuit" 
        />
        <meta name="keywords" content="agence web lyon, création site internet lyon, agence digitale lyon, SEO lyon, développement web lyon" />
        <link rel="canonical" href="https://vkback.com/" />
      </Helmet>
      <Header />
      <StickyCtaButton />
      <main>
        <HeroSection />
        
        <ServicesGrid />
        
        <ClientLogos />
        
        <Testimonials />
        
        <PortfolioSection />
        
        <SomervilleBeforeAfter />
        
        <BlogSection />
        
        <FAQSection />
        
        <TeamSection />
        
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

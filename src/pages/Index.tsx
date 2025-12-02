import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyVKBack from "@/components/WhyVKBack";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import ClientLogos from "@/components/ClientLogos";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FadeInSection from "@/components/FadeInSection";
import StickyCtaButton from "@/components/StickyCtaButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Agence Web Lyon | Création Site Internet & SEO | VKBack</title>
        <meta 
          name="description" 
          content="VKBack, agence web à Lyon avec 14 ans d'expérience. Création sites internet WordPress, e-commerce WooCommerce, SEO local. Développement sur-mesure. +200 clients ⭐ Devis gratuit" 
        />
        <meta name="keywords" content="agence web lyon, création site internet lyon, agence digitale lyon, SEO lyon, développement web lyon" />
        <link rel="canonical" href="https://vkback.com/" />
      </Helmet>
      <Header />
      <StickyCtaButton />
      <main>
        <HeroSection />
        
        <FadeInSection>
          <PainPointsSection />
        </FadeInSection>
        
        <FadeInSection scale>
          <ServicesGrid />
        </FadeInSection>
        
        <FadeInSection>
          <ClientLogos />
        </FadeInSection>
        
        <FadeInSection scale>
          <Testimonials />
        </FadeInSection>
        
        <FadeInSection direction="right" delay={100}>
          <WhyVKBack />
        </FadeInSection>
        
        <div className="section-separator" />
        
        <FadeInSection scale delay={200}>
          <PortfolioSection />
        </FadeInSection>
        
        <div className="section-separator" />
        
        <FadeInSection direction="left">
          <ProcessTimeline />
        </FadeInSection>
        
        <div className="section-separator" />
        
        <FadeInSection direction="up" scale>
          <TechStack />
        </FadeInSection>
        
        <div className="section-separator" />
        
        <FadeInSection direction="right">
          <BlogSection />
        </FadeInSection>
        
        <FadeInSection>
          <FAQSection />
        </FadeInSection>
        
        <FadeInSection>
          <TeamSection />
        </FadeInSection>
        
        <FadeInSection>
          <ContactSection />
        </FadeInSection>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

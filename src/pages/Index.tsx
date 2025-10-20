import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyVKBack from "@/components/WhyVKBack";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";
import TechStack from "@/components/TechStack";
import ClientLogos from "@/components/ClientLogos";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FadeInSection from "@/components/FadeInSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        
        <FadeInSection scale>
          <ServicesGrid />
        </FadeInSection>
        
        <FadeInSection direction="right" delay={100}>
          <WhyVKBack />
        </FadeInSection>
        
        <FadeInSection scale delay={200}>
          <PortfolioCarousel />
        </FadeInSection>
        
        <BeforeAfterSection />
        
        <FadeInSection direction="left">
          <ProcessTimeline />
        </FadeInSection>
        
        <FadeInSection scale>
          <Testimonials />
        </FadeInSection>
        
        <FadeInSection>
          <StatsSection />
        </FadeInSection>
        
        <FadeInSection direction="up" scale>
          <TechStack />
        </FadeInSection>
        
        <FadeInSection>
          <ClientLogos />
        </FadeInSection>
        
        <FadeInSection direction="right">
          <BlogSection />
        </FadeInSection>
        
        <FadeInSection>
          <FAQSection />
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

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyVKBack from "@/components/WhyVKBack";
import PortfolioSection from "@/components/PortfolioSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";
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
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <StickyCtaButton />
      <main>
        <HeroSection />
        
        <FadeInSection scale>
          <ServicesGrid />
        </FadeInSection>
        
        <FadeInSection>
          <ClientLogos />
        </FadeInSection>
        
        <FadeInSection direction="right" delay={100}>
          <WhyVKBack />
        </FadeInSection>
        
        <FadeInSection scale delay={200}>
          <PortfolioSection />
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

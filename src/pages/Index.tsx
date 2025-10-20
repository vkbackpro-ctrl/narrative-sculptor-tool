import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyVKBack from "@/components/WhyVKBack";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";
import ClientLogos from "@/components/ClientLogos";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <WhyVKBack />
        <PortfolioCarousel />
        <ProcessTimeline />
        <Testimonials />
        <StatsSection />
        <ClientLogos />
        <BlogSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

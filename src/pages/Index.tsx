import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyVKBack from "@/components/WhyVKBack";
import Portfolio from "@/components/Portfolio";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";
import ServiceArea from "@/components/ServiceArea";
import BlogSection from "@/components/BlogSection";
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
        <Portfolio />
        <ProcessTimeline />
        <Testimonials />
        <StatsSection />
        <ServiceArea />
        <BlogSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

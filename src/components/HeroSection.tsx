import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Star, ArrowRight, Sparkles } from "lucide-react";
import heroOption1 from "@/assets/hero-option-1-lyon-panorama.jpg";
import heroOption2 from "@/assets/hero-option-2-mockup-devices.jpg";
import heroOption3 from "@/assets/hero-option-3-team-meeting.jpg";
import heroOption4 from "@/assets/hero-option-4-abstract-tech.jpg";
import heroOption5 from "@/assets/hero-option-5-wordpress-dashboard.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const heroImages = [
  { src: heroOption1, alt: "Vue panoramique de Lyon - Agence web locale" },
  { src: heroOption2, alt: "Sites web responsive multi-appareils" },
  { src: heroOption3, alt: "Équipe VKBack travaillant sur WordPress à Lyon" },
  { src: heroOption4, alt: "Développement web moderne et créatif" },
  { src: heroOption5, alt: "Interface WordPress professionnelle" },
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-container overflow-hidden relative max-w-full">
      {/* Decorative geometric shapes */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl shape-circle" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl shape-circle" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/10 rotate-45 shape-square" />
      
      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Content */}
      <motion.div 
        className="space-y-4 sm:space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Badge variant="secondary" className="text-xs sm:text-sm animate-bounce-subtle bg-gradient-to-r from-secondary to-secondary/80 border-none">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 inline" />
            Agence Web à Lyon depuis 10+ ans
          </Badge>
        </motion.div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="block mb-2">Création de Sites Internet</span>
          <span className="relative inline-block">
            <motion.span 
              className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-primary animate-gradient"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              WordPress
            </motion.span>
            <motion.div
              className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </span>
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            à Lyon
          </span>
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Agence locale experte en WordPress, SEO et e-commerce. Accompagnement 
          personnalisé de A à Z. <strong className="text-foreground">Devis gratuit sous 24h.</strong>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button 
            size="lg" 
            className="btn-cta text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group relative overflow-hidden hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
            onClick={() => {
              if (navigator.vibrate) navigator.vibrate(50);
            }}
          >
            <span className="relative z-10 flex items-center justify-center">
              Demander un devis gratuit
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            Voir nos réalisations
          </Button>
        </motion.div>

        {/* Trust Badges - Enhanced */}
        <motion.div 
          className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 pt-4 sm:pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="flex items-center gap-2 sm:gap-3 bg-primary/10 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl group hover:bg-primary/20 transition-all cursor-pointer border border-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-1.5 sm:p-2 bg-primary rounded-full">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold block">10+ ans</span>
              <span className="text-[10px] sm:text-xs text-muted-foreground">d'expérience</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-2 sm:gap-3 bg-primary/10 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl group hover:bg-primary/20 transition-all cursor-pointer border border-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-1.5 sm:p-2 bg-primary rounded-full">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold block">200+</span>
              <span className="text-[10px] sm:text-xs text-muted-foreground">sites créés</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-2 sm:gap-3 bg-accent/20 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl group hover:bg-accent/30 transition-all cursor-pointer border border-accent/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-1.5 sm:p-2 bg-accent rounded-full">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground fill-accent-foreground" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold block">4.9/5</span>
              <span className="text-[10px] sm:text-xs text-muted-foreground">sur Google</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Column - Image Carousel */}
      <motion.div 
        className="relative mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating shapes - Hidden on mobile for performance */}
          <motion.div
            className="hidden lg:block absolute -top-4 sm:-top-6 right-0 sm:right-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl sm:rounded-2xl z-20"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="hidden lg:block absolute -bottom-6 sm:-bottom-8 left-0 sm:left-0 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-gradient-to-br from-primary to-primary-light rounded-full z-20"
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Image Carousel */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={heroImages[currentImageIndex].src}
                alt={heroImages[currentImageIndex].alt}
                className="w-full h-auto"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Image indicators */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-primary w-6 sm:w-8' 
                      : 'bg-white/50 hover:bg-white/80 w-1.5 sm:w-2'
                  }`}
                  aria-label={`Voir image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

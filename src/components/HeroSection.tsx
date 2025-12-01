import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Star, ArrowRight, Sparkles, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroOption1 from "@/assets/agence-web-lyon-panorama-bellecour.jpg";
import heroOption2 from "@/assets/creation-site-internet-responsive-devices.jpg";
import heroOption3 from "@/assets/agence-web-lyon-equipe-reunion.jpg";
import heroOption4 from "@/assets/developpement-web-technologie-moderne.jpg";
import heroOption5 from "@/assets/wordpress-creation-site-lyon-dashboard.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const heroImages = [
  { src: heroOption1, alt: "Agence web à Lyon - Vue panoramique Place Bellecour et Fourvière pour création sites internet locaux" },
  { src: heroOption2, alt: "Création site internet responsive Lyon - Affichage adaptatif ordinateur, tablette et mobile WordPress" },
  { src: heroOption3, alt: "Équipe agence web VKBack Lyon - Réunion création site internet WordPress et stratégie digitale" },
  { src: heroOption4, alt: "Développement web moderne Lyon - Technologies innovantes création sites internet performants" },
  { src: heroOption5, alt: "WordPress création site Lyon - Interface dashboard administration CMS professionnel" },
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
    <section className="section-container overflow-hidden relative">
      {/* Decorative geometric shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl shape-circle" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl shape-circle" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/10 rotate-45 shape-square" />
      
      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Content */}
      <motion.div 
        className="space-y-4 sm:space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Pain Point Hook - Reinforced */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">
            Votre site internet ne génère pas assez de clients ?
          </p>
          <p className="text-base sm:text-lg text-muted-foreground">
            Vous n'êtes pas seul. On peut changer ça.
          </p>
        </motion.div>


        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="block mb-2">Agence Web</span>
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
              à Lyon
            </motion.span>
            <motion.div
              className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </span>
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Depuis 2014
          </span>
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Sites WordPress qui convertissent. Référencement qui positionne. 
          Maintenance qui sécurise. <strong className="text-foreground">Devis gratuit sous 24h.</strong>
        </motion.p>

        {/* Trust Badges - Moved up before CTAs */}
        <motion.div 
          className="flex flex-wrap gap-2 sm:gap-2.5 pt-4 sm:pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 bg-primary/10 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-primary/20">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-[10px] sm:text-xs font-bold">10+ ans</span>
          </div>
          
          <div className="flex items-center gap-1.5 sm:gap-2 bg-primary/10 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-primary/20">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-[10px] sm:text-xs font-bold">200+ sites</span>
          </div>
          
          <div className="flex items-center gap-1.5 sm:gap-2 bg-accent/20 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-accent/30">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent fill-accent" />
            <span className="text-[10px] sm:text-xs font-bold">4.9/5 Google</span>
          </div>
        </motion.div>

        {/* CTA Buttons - Moved down after trust badges */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <Button 
            asChild
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
          >
            <Link to="/contact">
              <span className="flex items-center justify-center">
                Demander un devis gratuit
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 hover:bg-accent hover:text-accent-foreground transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            <Link to="/realisations">
              Voir nos réalisations
            </Link>
          </Button>
        </motion.div>

        {/* Phone CTA - Micro-conversion */}
        <motion.div
          className="flex justify-center sm:justify-start pt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="tel:0411789113"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-muted-foreground hover:text-primary transition-colors group"
            onClick={() => {
              // Tracking des appels
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'click_to_call', {
                  event_category: 'engagement',
                  event_label: 'Hero Section',
                  value: 1
                });
              }
            }}
            data-tracking="hero-phone-cta"
          >
            <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <span className="border-b border-dashed border-current">
              Appeler agence web Lyon : <strong className="font-bold text-foreground">04 11 78 91 13</strong>
            </span>
          </a>
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
            className="hidden lg:block absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl sm:rounded-2xl z-20"
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
            className="hidden lg:block absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-6 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-gradient-to-br from-primary to-primary-light rounded-full z-20"
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

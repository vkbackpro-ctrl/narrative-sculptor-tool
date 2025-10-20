import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-vkback.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="section-container overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="secondary" className="text-sm animate-bounce-subtle">
              <Star className="w-4 h-4 mr-1 inline" />
              Agence Web à Lyon depuis 10+ ans
            </Badge>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Création de Sites Internet{" "}
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
              WordPress
            </span>{" "}
            à Lyon
          </motion.h1>

          <motion.p 
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Agence locale experte en WordPress, SEO et e-commerce. Accompagnement 
            personnalisé de A à Z. Devis gratuit sous 24h.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              size="lg" 
              className="btn-cta text-lg px-8 group"
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Voir nos réalisations
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            className="flex flex-wrap gap-6 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2 group">
              <CheckCircle2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">10+ ans d'expérience</span>
            </div>
            <div className="flex items-center gap-2 group">
              <CheckCircle2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">200+ sites créés</span>
            </div>
            <div className="flex items-center gap-2 group">
              <Star className="w-5 h-5 text-accent fill-accent group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Note 4.9/5 sur Google</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <img
              src={heroImage}
              alt="Création de sites internet WordPress professionnels à Lyon"
              className="relative rounded-2xl shadow-2xl w-full h-auto hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

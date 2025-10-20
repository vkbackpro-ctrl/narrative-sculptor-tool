import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Star, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/mockup-devices.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="section-container overflow-hidden relative">
      {/* Decorative geometric shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl shape-circle" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl shape-circle" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/10 rotate-45 shape-square" />
      
      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
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
            <Badge variant="secondary" className="text-sm animate-bounce-subtle bg-gradient-to-r from-secondary to-secondary/80 border-none">
              <Sparkles className="w-4 h-4 mr-1 inline" />
              Agence Web à Lyon depuis 10+ ans
            </Badge>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Création de Sites Internet{" "}
            <span className="relative inline-block">
              <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-primary">
                WordPress
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>{" "}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              à Lyon
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Agence locale experte en WordPress, SEO et e-commerce. Accompagnement 
            personnalisé de A à Z. <strong className="text-foreground">Devis gratuit sous 24h.</strong>
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
              className="btn-cta text-lg px-8 py-6 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg hover:shadow-xl"
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
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">10+ ans d'expérience</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">200+ sites créés</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="p-2 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-colors">
                <Star className="w-5 h-5 text-accent fill-accent" />
              </div>
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
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 rounded-3xl blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Floating shapes */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl"
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
              className="absolute -bottom-8 -left-6 w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-full"
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
            
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src={heroImage}
                alt="Création de sites internet WordPress professionnels à Lyon"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

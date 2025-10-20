import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Star } from "lucide-react";
import heroImage from "@/assets/hero-vkback.jpg";

const HeroSection = () => {
  return (
    <section className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <Badge variant="secondary" className="text-sm">
            <Star className="w-4 h-4 mr-1 inline" />
            Agence Web à Lyon depuis 10+ ans
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Création de Sites Internet{" "}
            <span className="gradient-text">WordPress</span> à Lyon
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Agence locale experte en WordPress, SEO et e-commerce. Accompagnement 
            personnalisé de A à Z. Devis gratuit sous 24h.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="btn-cta text-lg px-8">
              Demander un devis gratuit
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Voir nos réalisations
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">10+ ans d'expérience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">200+ sites créés</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="text-sm font-medium">Note 4.9/5 sur Google</span>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative">
          <img
            src={heroImage}
            alt="Création de sites internet WordPress professionnels à Lyon"
            className="rounded-2xl shadow-2xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

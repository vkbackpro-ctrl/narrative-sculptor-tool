import { Award, Shield, Star, TrendingUp } from "lucide-react";
import { Badge } from "./ui/badge";
import FadeInSection from "./FadeInSection";

const CertificationBadges = () => {
  const certifications = [
    {
      icon: Award,
      title: "WordPress Certified",
      description: "Expert certifié WordPress",
    },
    {
      icon: Shield,
      title: "RGPD Compliant",
      description: "Respect des normes RGPD",
    },
    {
      icon: Star,
      title: "4.9/5 sur Google",
      description: "Note moyenne clients",
    },
    {
      icon: TrendingUp,
      title: "SEO Certifié",
      description: "Expert référencement",
    },
  ];

  return (
    <section className="section-container bg-muted/30">
      <FadeInSection>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold font-playfair mb-4">
            Certifications & Garanties
          </h2>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <FadeInSection key={cert.title} delay={index * 100}>
            <div className="text-center group">
              <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-3 group-hover:scale-110 transition-transform">
                <cert.icon className="w-8 h-8 text-primary" />
              </div>
              <Badge variant="outline" className="mb-2 text-xs">
                {cert.title}
              </Badge>
              <p className="text-xs text-muted-foreground">{cert.description}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default CertificationBadges;

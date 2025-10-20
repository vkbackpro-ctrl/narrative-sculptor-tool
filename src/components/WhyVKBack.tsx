import { Award, MapPin, Users, CheckCircle } from "lucide-react";
import FadeInSection from "./FadeInSection";

const features = [
  {
    icon: Award,
    title: "Expertise WordPress & SEO",
    description: "10+ ans d'expérience dans la création de sites WordPress et le référencement naturel. Développeurs certifiés, code propre, sites performants.",
  },
  {
    icon: MapPin,
    title: "Agence Locale Lyonnaise",
    description: "Basés à Lyon, nous connaissons le tissu économique local. Rendez-vous chez vous ou en visio pour un accompagnement de proximité.",
  },
  {
    icon: Users,
    title: "Accompagnement de A à Z",
    description: "Un interlocuteur dédié de la conception à la mise en ligne. Formation complète incluse pour que vous soyez autonome.",
  },
  {
    icon: CheckCircle,
    title: "Tarifs Transparents",
    description: "Devis gratuit sous 24h, tarifs clairs sans frais cachés. Solutions adaptées à tous les budgets, de 990€ à plus.",
  },
];

const WhyVKBack = () => {
  return (
    <section className="section-container bg-muted/30">
      <FadeInSection>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Pourquoi Choisir <span className="gradient-text">VKBack</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une agence web lyonnaise qui combine expertise technique et accompagnement humain
          </p>
        </div>
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <FadeInSection key={feature.title} delay={index * 100}>
            <div className="flex gap-6 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      {/* Local presence banner */}
      <FadeInSection delay={400}>
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Basés au cœur de Lyon
            </h3>
            <p className="text-lg text-muted-foreground">
              Notre équipe passionnée vous accompagne depuis Lyon pour créer des sites web qui font la différence. 
              Proximité, réactivité et expertise locale pour votre succès digital.
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default WhyVKBack;

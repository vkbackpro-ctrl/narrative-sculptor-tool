import { Award, MapPin, Users, CheckCircle } from "lucide-react";
import FadeInSection from "./FadeInSection";
import lyonCityscape from "@/assets/lyon-cityscape.jpg";
import teamWorkspace from "@/assets/team-lyon-workspace.jpg";

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
      {/* Lyon Cityscape Header */}
      <FadeInSection>
        <div className="relative h-[300px] rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <img 
            src={lyonCityscape} 
            alt="Vue panoramique de Lyon avec la basilique de Fourvière"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              Pourquoi Choisir VKBack ?
            </h2>
            <p className="text-lg text-white/95 max-w-3xl mx-auto drop-shadow-md">
              Une agence web lyonnaise qui combine expertise technique et accompagnement humain
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Team Image Section */}
      <FadeInSection delay={200}>
        <div className="relative h-[400px] rounded-3xl overflow-hidden mb-12 shadow-xl">
          <img 
            src={teamWorkspace} 
            alt="Notre équipe travaillant dans nos bureaux à Lyon avec vue sur la basilique de Fourvière"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="p-12 max-w-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Basés au cœur de Lyon
              </h3>
              <p className="text-lg text-white/95">
                Notre équipe passionnée vous accompagne depuis Lyon pour créer des sites web qui font la différence. Proximité, réactivité et expertise locale pour votre succès digital.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-secondary" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyVKBack;

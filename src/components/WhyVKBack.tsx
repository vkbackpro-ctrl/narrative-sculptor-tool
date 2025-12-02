import { Award, MapPin, Users, CheckCircle } from "lucide-react";
import FadeInSection from "./FadeInSection";
import teamMeeting from "@/assets/team-meeting-lyon.jpg";
import lyonCity from "@/assets/lyon-place-bellecour.jpg";

const features = [
  {
    icon: Award,
    title: "Expertise WordPress & SEO",
    description: "14 ans d'expérience dans la création de sites WordPress et le référencement naturel. Développeurs certifiés, code propre, sites performants.",
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
    description: "Devis gratuit sous 24h, tarifs clairs sans frais cachés. Solutions adaptées à tous les budgets, de 4 000€ à plus.",
  },
];

const WhyVKBack = () => {
  return (
    <section className="section-container bg-muted/30">
      {/* Lyon Hero Image */}
      <FadeInSection>
        <div className="relative h-[240px] sm:h-[280px] md:h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden mb-12 sm:mb-16 shadow-xl sm:shadow-2xl">
          <img 
            src={lyonCity} 
            alt="Vue panoramique de Lyon - Place Bellecour et Basilique de Fourvière"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              Pourquoi Choisir <span className="text-secondary">VKBack</span> ?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium max-w-3xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] bg-background/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl inline-block">
              Une agence web lyonnaise qui combine expertise technique et accompagnement humain
            </p>
          </div>
        </div>
      </FadeInSection>

      <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 mb-12 sm:mb-16">
        {features.map((feature, index) => (
          <FadeInSection key={feature.title} delay={index * 100}>
            <div className="flex gap-4 sm:gap-6 group">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      {/* Team Image with overlay */}
      <FadeInSection delay={400}>
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
          <img 
            src={teamMeeting} 
            alt="Notre équipe VKBack lors d'une réunion projet à Lyon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-2xl">
              <MapPin className="w-10 h-10 text-white mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Basés au cœur de Lyon
              </h3>
              <p className="text-lg text-white/95 leading-relaxed">
                Notre équipe passionnée vous accompagne depuis Lyon pour créer des sites web qui font la différence. 
                Proximité, réactivité et expertise locale pour votre succès digital.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default WhyVKBack;

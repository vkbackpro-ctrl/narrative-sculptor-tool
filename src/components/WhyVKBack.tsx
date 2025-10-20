import { Award, MapPin, Users, CheckCircle } from "lucide-react";

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
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Pourquoi Choisir VK Back ?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          L'agence web lyonnaise qui accompagne les TPE et PME dans leur réussite digitale
        </p>
      </div>

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

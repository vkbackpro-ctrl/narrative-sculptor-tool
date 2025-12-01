import { MessageCircle, FileText, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Échange & Analyse",
    description: "Premier contact par téléphone ou visio. Nous analysons vos besoins, votre cible, vos objectifs pour définir la solution idéale.",
  },
  {
    number: "2",
    icon: FileText,
    title: "Proposition & Devis",
    description: "Devis détaillé sous 24-48h avec planning, tarifs transparents, cahier des charges complet. Aucun engagement.",
  },
  {
    number: "3",
    icon: Code,
    title: "Création & Développement",
    description: "Maquettes graphiques, validation, développement, intégration contenu. Suivi régulier, vous êtes impliqué à chaque étape.",
  },
  {
    number: "4",
    icon: Rocket,
    title: "Formation & Mise en Ligne",
    description: "Tests approfondis, formation complète (2-4h), mise en ligne, support post-lancement. Vous êtes autonome !",
  },
];

const ProcessTimeline = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Notre Processus de Création
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Un accompagnement structuré en 4 étapes pour votre tranquillité
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            <div className="flex flex-col items-center text-center p-6">
              {/* Step Number */}
              <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold mb-6 shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mb-6">
                <step.icon className="w-16 h-16 text-secondary" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Arrow connector (hidden on last item and on mobile) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[calc(100%+0.5rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
            )}
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <span className="text-2xl">💡</span>
          <span>Délai moyen : 4 à 8 semaines selon la complexité du projet</span>
        </p>
      </div>
    </section>
  );
};

export default ProcessTimeline;

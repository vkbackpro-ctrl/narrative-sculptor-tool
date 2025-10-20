import FadeInSection from "./FadeInSection";

const technologies = [
  {
    name: "WordPress",
    description: "CMS leader mondial",
    icon: "https://cdn.simpleicons.org/wordpress/21759B"
  },
  {
    name: "WooCommerce",
    description: "Solution e-commerce",
    icon: "https://cdn.simpleicons.org/woocommerce/96588A"
  },
  {
    name: "Google Analytics",
    description: "Analyse de données",
    icon: "https://cdn.simpleicons.org/googleanalytics/E37400"
  },
  {
    name: "Google Ads",
    description: "Publicité en ligne",
    icon: "https://cdn.simpleicons.org/googleads/4285F4"
  },
  {
    name: "PHP",
    description: "Développement backend",
    icon: "https://cdn.simpleicons.org/php/777BB4"
  },
  {
    name: "MySQL",
    description: "Base de données",
    icon: "https://cdn.simpleicons.org/mysql/4479A1"
  },
  {
    name: "JavaScript",
    description: "Développement frontend",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E"
  },
  {
    name: "Divi",
    description: "Page builder WordPress",
    icon: "https://cdn.simpleicons.org/divi/6B3D99"
  },
  {
    name: "Stripe",
    description: "Paiement en ligne",
    icon: "https://cdn.simpleicons.org/stripe/008CDD"
  },
  {
    name: "SEOPress",
    description: "Optimisation SEO",
    icon: "https://cdn.simpleicons.org/wordpress/21759B"
  },
  {
    name: "Adobe XD",
    description: "Design graphique",
    icon: "https://cdn.simpleicons.org/adobexd/FF61F6"
  },
  {
    name: "PayPal",
    description: "Paiement sécurisé",
    icon: "https://cdn.simpleicons.org/paypal/00457C"
  }
];

const TechStack = () => {
  return (
    <section className="section-container bg-muted/30">
      <FadeInSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies & Outils
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous utilisons les meilleures technologies du marché pour créer des sites web performants et évolutifs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <FadeInSection key={tech.name} delay={index * 0.05}>
              <div className="group bg-background rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{tech.name}</h3>
                    <p className="text-xs text-muted-foreground">{tech.description}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default TechStack;

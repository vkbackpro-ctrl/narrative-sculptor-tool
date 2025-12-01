import FadeInSection from "./FadeInSection";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "Zalot", industry: "Immobilier" },
  { name: "Sinéville", industry: "Construction" },
  { name: "La Maison des Sons", industry: "Audio" },
  { name: "Matchers", industry: "Recrutement" },
  { name: "Kwest", industry: "Digital" },
  { name: "Selva", industry: "Design" },
  { name: "GRDF", industry: "Énergie" },
  { name: "Grand Gite Lyon", industry: "Tourisme" },
  { name: "AirAgent", industry: "Immobilier" },
  { name: "Atech", industry: "Technologie" },
  { name: "Marabooth", industry: "Événementiel" },
  { name: "Kaïvara", industry: "Cosmétique" },
  { name: "Le Sandwich Jaune", industry: "Restauration" },
  { name: "Estelle Charlier", industry: "Immobilier" },
  { name: "Université de Lille", industry: "Éducation" },
];

const ClientLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 6; // Afficher 6 logos à la fois

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000); // Défilement automatique toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  // Créer un tableau circulaire pour le carousel infini
  const getVisibleClients = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % clients.length;
      visible.push(clients[index]);
    }
    return visible;
  };

  return (
    <section className="section-container bg-muted/30">
      <FadeInSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ils Nous Font Confiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des entreprises lyonnaises de tous secteurs nous confient leur présence web
          </p>
        </div>
      </FadeInSection>

      <FadeInSection delay={200}>
        <div className="max-w-6xl mx-auto overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {getVisibleClients().map((client, index) => (
              <motion.div
                key={`${client.name}-${currentIndex}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-full aspect-square flex items-center justify-center mb-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-primary">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-sm text-center line-clamp-2 mb-1">
                  {client.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {client.industry}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(clients.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Aller au groupe de clients ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={400}>
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            + de 200 clients satisfaits depuis 2014
          </p>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ClientLogos;

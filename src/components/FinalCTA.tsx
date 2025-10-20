import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import QuoteForm from "./QuoteForm";
import FadeInSection from "./FadeInSection";

const FinalCTA = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="section-container bg-gradient-to-br from-primary via-primary to-primary-light text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10">
        <FadeInSection>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Prêt à Lancer Votre Projet Web ?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Discutons de votre projet ! Devis gratuit sous 24h, sans engagement.
            </p>

            {!showForm ? (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90 text-lg px-8 group"
                  onClick={() => setShowForm(true)}
                >
                  Demander un devis gratuit
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  04 XX XX XX XX
                </Button>
              </div>
            ) : (
              <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 mt-8">
                <QuoteForm />
              </div>
            )}

            <p className="text-sm opacity-80 mt-8">
              Réponse garantie sous 2h en journée • Lun-Ven : 9h-18h
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FinalCTA;

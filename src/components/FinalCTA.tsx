import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-container bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Prêt à Lancer Votre Projet Web ?
        </h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90">
          Discutons de votre projet ! Devis gratuit sous 24h, sans engagement.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8">
            <Mail className="w-5 h-5 mr-2" />
            Demander un devis gratuit
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8">
            <Phone className="w-5 h-5 mr-2" />
            04 XX XX XX XX
          </Button>
        </div>

        <p className="text-sm opacity-80">
          Réponse garantie sous 2h en journée • Lun-Ven : 9h-18h
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;

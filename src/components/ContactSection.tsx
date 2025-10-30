import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import FadeInSection from "./FadeInSection";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les 24h.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="section-container bg-muted/30">
      <FadeInSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Parlons de votre <span className="gradient-text">Projet</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prêt à booster votre visibilité ? Contactez-moi pour discuter de votre projet
          </p>
        </div>
      </FadeInSection>

      <div className="max-w-3xl mx-auto">
        <FadeInSection delay={200}>
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
            {/* Contact Header */}
            <div className="mb-6 pb-6 border-b">
              <h3 className="font-semibold text-lg">Envoyez-nous un message</h3>
              <p className="text-sm text-muted-foreground">Réponse garantie sous 24h</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Votre nom complet <span className="text-destructive">*</span>
                </label>
                <Input 
                  placeholder="Ex: Jean Dupont" 
                  required 
                  className="bg-background"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Votre email professionnel <span className="text-destructive">*</span>
                </label>
                <Input 
                  type="email" 
                  placeholder="Ex: jean.dupont@entreprise.fr" 
                  required 
                  className="bg-background"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Votre téléphone
                </label>
                <Input 
                  type="tel" 
                  placeholder="Ex: 06 12 34 56 78" 
                  className="bg-background"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Budget estimé
                </label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Sélectionnez votre budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1000-3000">1 000€ - 3 000€</SelectItem>
                    <SelectItem value="3000-5000">3 000€ - 5 000€</SelectItem>
                    <SelectItem value="5000-10000">5 000€ - 10 000€</SelectItem>
                    <SelectItem value="10000+">10 000€+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Décrivez votre projet <span className="text-destructive">*</span>
                </label>
                <Textarea 
                  placeholder="Parlez-moi de vos objectifs, votre secteur d'activité, vos besoins..."
                  required
                  className="min-h-[120px] bg-background"
                />
                <p className="text-xs text-muted-foreground mt-1">0/1000 caractères</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                <Shield className="w-4 h-4 text-primary" />
                <p>Vos données sont sécurisées et ne seront jamais partagées</p>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full text-lg py-6 btn-cta"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;

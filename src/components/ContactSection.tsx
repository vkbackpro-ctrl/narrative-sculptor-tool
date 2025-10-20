import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, Clock, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import contactPerson from "@/assets/contact-person.jpg";
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

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Column - Contact Form */}
        <FadeInSection delay={200}>
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
            {/* Contact Person */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b">
              <img 
                src={contactPerson} 
                alt="Votre contact VKBack"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">Envoyez-moi un message</h3>
                <p className="text-sm text-muted-foreground">Réponse garantie sous 24h</p>
              </div>
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

        {/* Right Column - Contact Info & CTA */}
        <div className="space-y-6">
          <FadeInSection delay={300}>
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
              <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 rounded-full h-fit">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adresse</h4>
                    <p className="text-muted-foreground">Lyon, Rhône-Alpes</p>
                    <p className="text-sm text-muted-foreground">Interventions sur Lyon et région</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 rounded-full h-fit">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:contact@vkback.fr" className="text-primary hover:underline">
                      contact@vkback.fr
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 rounded-full h-fit">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <a href="tel:0652161669" className="text-primary hover:underline">
                      06 52 16 16 69
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 rounded-full h-fit">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horaires</h4>
                    <p className="text-muted-foreground">Lun - Ven: 9h - 18h</p>
                    <p className="text-sm text-muted-foreground">Sam - Dim: Sur rendez-vous</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* CTA Card */}
          <FadeInSection delay={400}>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Démarrons votre projet</h3>
              <p className="mb-6 text-primary-foreground/90">
                Discutons de vos objectifs et élaborons ensemble une stratégie SEO/SEA sur mesure pour votre entreprise.
              </p>
              <Button 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 shadow-lg"
              >
                Obtenir un devis
              </Button>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

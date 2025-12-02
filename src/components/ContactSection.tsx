import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Clock, Star, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import FadeInSection from "./FadeInSection";
import SimpleCaptcha from "./SimpleCaptcha";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const captchaResetRef = useRef<(() => void) | null>(null);
  const { toast } = useToast();

  const handleCaptchaVerify = (verified: boolean) => {
    setIsCaptchaVerified(verified);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isCaptchaVerified) {
      toast({
        title: "Erreur",
        description: "Veuillez glisser le curseur pour vérifier que vous êtes humain.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        budget: formData.get('budget') as string,
        message: formData.get('message') as string,
      };

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les 24h.",
      });
      
      setIsCaptchaVerified(false);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  name="name"
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
                  name="email"
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
                  name="phone"
                  type="tel" 
                  placeholder="Ex: 06 12 34 56 78" 
                  className="bg-background"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Budget estimé
                </label>
                <Select name="budget">
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
                  name="message"
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

              {/* Simple Captcha */}
              <div className="pt-4">
                <SimpleCaptcha 
                  onVerify={handleCaptchaVerify}
                  onReset={() => captchaResetRef.current?.()}
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting || !isCaptchaVerified}
                className="w-full text-lg py-6 btn-cta"
              >
                {isSubmitting ? "Envoi..." : (
                  <>
                    <span className="hidden sm:inline">Envoyer le message</span>
                    <span className="sm:hidden">Envoyer</span>
                  </>
                )}
              </Button>

              {/* Section Réassurance */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Clock className="w-6 h-6 text-primary" />
                    <span className="text-xs font-medium">Réponse sous 24h</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    <span className="text-xs font-medium">Devis gratuit</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Star className="w-6 h-6 text-accent" />
                    <span className="text-xs font-medium">4.9/5 Google</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Award className="w-6 h-6 text-primary" />
                    <span className="text-xs font-medium">14 ans expertise</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;

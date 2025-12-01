import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, FileText } from "lucide-react";
import SimpleCaptcha from "./SimpleCaptcha";

const QuoteForm = () => {
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

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Demande envoyée !",
      description: "Nous vous répondrons dans les 24h. Merci !",
    });

    setIsSubmitting(false);
    setIsCaptchaVerified(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Nom complet *"
            required
            className="pl-10 h-12"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Email *"
            required
            className="pl-10 h-12"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            type="tel"
            placeholder="Téléphone *"
            required
            className="pl-10 h-12"
          />
        </div>
        <Input
          type="text"
          placeholder="Entreprise"
          className="h-12"
        />
      </div>

      <div className="relative">
        <FileText className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <Textarea
          placeholder="Décrivez votre projet... *"
          required
          className="pl-10 min-h-32 resize-none"
        />
      </div>

      {/* Simple Captcha */}
      <div>
        <SimpleCaptcha 
          onVerify={handleCaptchaVerify}
          onReset={() => captchaResetRef.current?.()}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full btn-cta text-lg"
        disabled={isSubmitting || !isCaptchaVerified}
      >
        {isSubmitting ? "Envoi en cours..." : "Obtenir mon devis gratuit"}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        En soumettant ce formulaire, vous acceptez d'être contacté par VK Back concernant votre projet.
      </p>
    </form>
  );
};

export default QuoteForm;

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
  const [formLoadTime] = useState(() => Date.now()); // Track when form was loaded for bot detection
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
        company: formData.get('company') as string,
        message: formData.get('message') as string,
        website: formData.get('website') as string, // Honeypot field
        formLoadTime: formLoadTime, // Time-based bot detection
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
        title: "Demande envoyée !",
        description: "Nous vous répondrons dans les 24h. Merci !",
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
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            name="name"
            type="text"
            placeholder="Nom complet *"
            required
            className="pl-10 h-12"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            name="email"
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
            name="phone"
            type="tel"
            placeholder="Téléphone *"
            required
            className="pl-10 h-12"
          />
        </div>
        <Input
          name="company"
          type="text"
          placeholder="Entreprise"
          className="h-12"
        />
      </div>

      <div className="relative">
        <FileText className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <Textarea
          name="message"
          placeholder="Décrivez votre projet... *"
          required
          className="pl-10 min-h-32 resize-none"
        />
      </div>

      {/* Honeypot field - hidden from users, filled by bots */}
      <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden="true">
        <Input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
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

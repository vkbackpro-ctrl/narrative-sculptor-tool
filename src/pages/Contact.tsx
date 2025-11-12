import { Helmet } from "react-helmet";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import FadeInSection from "@/components/FadeInSection";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Récupération des données du formulaire
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string
    };

    // Validation basique
    if (!data.name || !data.email || !data.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulation envoi (à remplacer par votre logique d'envoi réelle)
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les 24h.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Agence Web Lyon - Devis Gratuit 24h - VKBack</title>
        <meta 
          name="description" 
          content="Contactez VKBack, agence web à Lyon. Devis gratuit sous 24h pour votre projet de site internet. Téléphone, email ou formulaire de contact." 
        />
        <meta name="keywords" content="contact agence web lyon, devis site internet, agence wordpress lyon contact" />
        <link rel="canonical" href="https://vkback.fr/contact/" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Contact" }
        ]} 
      />

      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <FadeInSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Contactez-Nous
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Une question sur votre projet de site internet ? Besoin d&apos;un devis personnalisé ? 
                Notre équipe vous répond <strong>sous 24h</strong>.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Informations de contact */}
              <div className="space-y-6">
                <FadeInSection>
                  <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>
                  
                  <Card className="border-2">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Adresse</CardTitle>
                          <CardDescription>Lyon, Rhône-Alpes</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Téléphone</CardTitle>
                          <CardDescription>
                            <a href="tel:+33411789113" className="hover:text-primary transition-colors">
                              04 11 78 91 13
                            </a>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Email</CardTitle>
                          <CardDescription>
                            <a href="mailto:contact@vkback.com" className="hover:text-primary transition-colors">
                              contact@vkback.com
                            </a>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Horaires</CardTitle>
                          <CardDescription>
                            Lun - Ven : 9h - 18h<br />
                            Sam - Dim : Fermé
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </FadeInSection>

                {/* Google Map */}
                <FadeInSection delay={100}>
                  <Card className="border-2 overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6228708084984!2d4.832020076531654!3d45.76404097108086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localisation VKBack Lyon"
                    />
                  </Card>
                </FadeInSection>
              </div>

              {/* Formulaire de contact */}
              <div className="lg:col-span-2">
                <FadeInSection delay={200}>
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
                      <CardDescription>
                        Décrivez-nous votre projet et nous vous répondrons rapidement avec un devis personnalisé.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nom complet *</Label>
                            <Input 
                              id="name" 
                              name="name"
                              placeholder="Jean Dupont" 
                              required 
                              disabled={isSubmitting}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input 
                              id="email" 
                              name="email"
                              type="email" 
                              placeholder="jean.dupont@email.com" 
                              required 
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Téléphone</Label>
                            <Input 
                              id="phone" 
                              name="phone"
                              type="tel" 
                              placeholder="06 12 34 56 78" 
                              disabled={isSubmitting}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subject">Sujet</Label>
                            <Input 
                              id="subject" 
                              name="subject"
                              placeholder="Création site internet" 
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Votre message *</Label>
                          <Textarea 
                            id="message" 
                            name="message"
                            placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                            rows={6}
                            required 
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-xs">* Champs obligatoires</span>
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full btn-cta"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Envoi en cours..."
                          ) : (
                            <>
                              Envoyer le message
                              <Send className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>

                        <p className="text-xs text-center text-muted-foreground">
                          En soumettant ce formulaire, vous acceptez que vos données soient utilisées 
                          pour vous recontacter concernant votre demande. Aucune utilisation commerciale.
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Démarrons Votre Projet Ensemble
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Plus de <strong>200 clients satisfaits</strong> nous font confiance depuis 2014. 
                Rejoignez-les et donnez vie à votre projet web avec notre expertise lyonnaise.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="px-6 py-3 bg-background rounded-lg border-2">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Années d&apos;expérience</div>
                </div>
                <div className="px-6 py-3 bg-background rounded-lg border-2">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Sites créés</div>
                </div>
                <div className="px-6 py-3 bg-background rounded-lg border-2">
                  <div className="text-2xl font-bold text-primary">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
                <div className="px-6 py-3 bg-background rounded-lg border-2">
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-sm text-muted-foreground">Délai réponse</div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
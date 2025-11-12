import { Helmet } from "react-helmet";
import { Check, X, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import FadeInSection from "@/components/FadeInSection";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingCreation = [
  {
    name: "Site Vitrine Essentiel",
    price: "2 500€",
    pricePrefix: "À partir de",
    description: "Site vitrine 5 pages pour présenter votre activité",
    features: [
      "Design responsive moderne",
      "5 pages (Accueil, Services, À propos, Blog, Contact)",
      "Formulaire de contact",
      "SEO de base",
      "Formation WordPress 1h",
      "Support 1 mois",
    ],
    notIncluded: [
      "E-commerce",
      "Multilingue",
      "Animation avancée"
    ]
  },
  {
    name: "Site Vitrine Pro",
    price: "4 000€",
    pricePrefix: "À partir de",
    description: "Site vitrine complet avec fonctionnalités avancées",
    features: [
      "Design sur-mesure premium",
      "10 pages personnalisées",
      "Blog intégré",
      "SEO optimisé Lyon",
      "Animations modernes",
      "Intégrations tierces (Google Maps, etc.)",
      "Formation WordPress 2h",
      "Support 3 mois",
    ],
    notIncluded: [
      "E-commerce"
    ],
    popular: true
  },
  {
    name: "Site E-commerce",
    price: "5 000€",
    pricePrefix: "À partir de",
    description: "Boutique en ligne WooCommerce sur WordPress",
    features: [
      "Design e-commerce optimisé",
      "Catalogue produits illimité",
      "Paiement sécurisé (Stripe, PayPal)",
      "Gestion stock & livraison",
      "Compte client",
      "SEO e-commerce",
      "Formation complète 3h",
      "Support 3 mois",
    ],
    notIncluded: []
  },
  {
    name: "Site Corporate",
    price: "8 000€",
    pricePrefix: "À partir de",
    description: "Site institutionnel haut de gamme B2B",
    features: [
      "Design premium sur-mesure",
      "Architecture complexe",
      "Espace client sécurisé",
      "Multilingue",
      "Fonctionnalités avancées",
      "Intégrations CRM/ERP",
      "SEO multilingue",
      "Formation & documentation complète",
      "Support 6 mois",
    ],
    notIncluded: []
  }
];

const pricingSEO = [
  {
    name: "Audit SEO",
    price: "800€",
    description: "Analyse complète de votre site",
    features: [
      "Audit technique complet",
      "Analyse contenu & mots-clés",
      "Étude concurrentielle",
      "Analyse backlinks",
      "Plan d'action détaillé 20 pages",
      "Présentation 1h"
    ]
  },
  {
    name: "SEO Mensuel",
    price: "600€/mois",
    description: "Référencement continu et optimisation",
    features: [
      "Optimisation technique",
      "Création contenu SEO",
      "Netlinking qualitatif",
      "Suivi positions",
      "Reporting mensuel détaillé",
      "Support prioritaire"
    ],
    popular: true
  },
  {
    name: "SEO Premium",
    price: "Sur mesure",
    description: "Stratégie SEO complète multicanale",
    features: [
      "Tout du SEO Mensuel",
      "Stratégie avancée",
      "SEO international",
      "Consultant dédié",
      "Reporting hebdomadaire"
    ]
  }
];

const pricingServices = [
  {
    name: "Maintenance WordPress",
    price: "59€/mois",
    features: [
      "Mises à jour hebdomadaires",
      "Sauvegardes automatiques",
      "Monitoring quotidien",
      "Support par email",
      "1h assistance/mois"
    ]
  },
  {
    name: "Google Ads (SEA)",
    price: "15% du budget pub",
    features: [
      "Min. 400€/mois de gestion",
      "Configuration campagnes",
      "Optimisation continue",
      "Reporting mensuel",
      "Support prioritaire"
    ]
  },
  {
    name: "Hébergement Web",
    price: "15€/mois",
    features: [
      "Serveurs SSD France",
      "SSL gratuit",
      "Sauvegardes quotidiennes",
      "Support expert",
      "99,9% disponibilité"
    ]
  }
];

const faqs = [
  {
    question: "Les tarifs incluent-ils l'hébergement et le nom de domaine ?",
    answer: "La première année d'hébergement (valeur 200€) et le nom de domaine (.fr ou .com) sont offerts pour tout projet de création de site. Ensuite, l'hébergement coûte entre 15-35€/mois selon vos besoins."
  },
  {
    question: "Quels sont les délais de création ?",
    answer: "Comptez 4-6 semaines pour un site vitrine, 6-8 semaines pour un e-commerce et 8-12 semaines pour un site corporate complexe. Les délais dépendent de votre réactivité pour les contenus et validations."
  },
  {
    question: "Proposez-vous un paiement échelonné ?",
    answer: "Oui, nous proposons un paiement en 3 fois : 40% à la commande, 40% à la validation du design et 20% à la livraison. Pour les projets +10 000€, nous étudions des paiements en 4-5 fois."
  },
  {
    question: "Que se passe-t-il après la livraison ?",
    answer: "Vous bénéficiez d'une période de support gratuite (1 à 6 mois selon l'offre) pour toute question ou ajustement. Ensuite, nous proposons des contrats de maintenance optionnels dès 59€/mois."
  },
  {
    question: "Les tarifs sont-ils vraiment tout compris ?",
    answer: "Oui, nos tarifs incluent : design, développement, intégration contenus fournis, SEO de base, formation WordPress et support post-lancement. Seules les prestations additionnelles (rédaction, photos pro, traductions) sont facturées en supplément."
  },
  {
    question: "Puis-je avoir un devis personnalisé ?",
    answer: "Absolument ! Chaque projet est unique. Contactez-nous pour échanger sur vos besoins spécifiques et recevoir un devis détaillé sous 24h, adapté à votre budget et vos objectifs."
  }
];

const Tarifs = () => {
  return (
    <>
      <Helmet>
        <title>Tarifs Création Site Internet Lyon | Prix Site Web - VKBack</title>
        <meta 
          name="description" 
          content="Tarifs transparents création site internet à Lyon : site vitrine dès 2500€, e-commerce dès 5000€, SEO dès 600€/mois. Devis gratuit sous 24h." 
        />
        <meta name="keywords" content="tarif site internet lyon, prix site web, coût création site, devis site internet lyon" />
        <link rel="canonical" href="https://vkback.fr/tarifs/" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Nos Tarifs" }
        ]} 
      />

      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <FadeInSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Nos Tarifs Création Site Internet
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Des <strong>tarifs transparents</strong> et adaptés à votre budget. Tous nos projets incluent hébergement 1 an offert, formation WordPress et support post-lancement.
              </p>
              <Badge variant="secondary" className="px-6 py-3 text-base">
                Devis personnalisé gratuit sous 24h
              </Badge>
            </FadeInSection>
          </div>
        </section>

        {/* Création de Sites */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Création de Sites Internet</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Sites WordPress professionnels, modernes et optimisés SEO
              </p>
            </FadeInSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingCreation.map((plan, index) => (
                <FadeInSection key={plan.name} delay={index * 100}>
                  <Card className={`relative h-full flex flex-col ${plan.popular ? 'border-primary border-2 shadow-2xl scale-105' : 'border-2'}`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                        Plus populaire
                      </Badge>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        {plan.pricePrefix && (
                          <span className="text-sm text-muted-foreground">{plan.pricePrefix} </span>
                        )}
                        <span className="text-3xl font-bold text-primary">{plan.price}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-1 space-y-4">
                      <div className="space-y-2">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                        {plan.notIncluded.map((feature) => (
                          <div key={feature} className="flex items-start gap-2 opacity-50">
                            <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                        <a href="/contact">
                          Demander un devis
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* SEO */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Référencement SEO</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Boostez votre visibilité sur Google avec nos prestations SEO
              </p>
            </FadeInSection>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingSEO.map((plan, index) => (
                <FadeInSection key={plan.name} delay={index * 100}>
                  <Card className={`h-full flex flex-col ${plan.popular ? 'border-primary border-2 shadow-xl' : 'border-2'}`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                        Recommandé
                      </Badge>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="text-3xl font-bold text-primary mt-4">{plan.price}</div>
                    </CardHeader>
                    
                    <CardContent className="flex-1 space-y-4">
                      <div className="space-y-2">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                        <a href="/contact">
                          En savoir plus
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Autres Services */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Services Complémentaires</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Maintenance, publicité et hébergement pour votre site
              </p>
            </FadeInSection>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingServices.map((service, index) => (
                <FadeInSection key={service.name} delay={index * 100}>
                  <Card className="h-full border-2">
                    <CardHeader>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <div className="text-2xl font-bold text-primary mt-4">{service.price}</div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button asChild className="w-full" variant="outline">
                        <a href="/contact">
                          En savoir plus
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Questions Fréquentes</h2>
            </FadeInSection>

            <FadeInSection delay={100}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6 bg-background">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeInSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin d&apos;un Devis Personnalisé ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Chaque projet est unique. Contactez-nous pour recevoir un devis détaillé adapté à vos besoins sous 24h.
              </p>
              <Button asChild size="lg" className="btn-cta">
                <a href="/contact">
                  Demander mon devis gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Tarifs;
import { Helmet } from "react-helmet";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
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
import { allPricingCategories } from "@/config/pricing";

const faqs = [
  {
    question: "Les tarifs incluent-ils l'hébergement et le nom de domaine ?",
    answer: "La première année d'hébergement (valeur 200€) et le nom de domaine (.fr ou .com) sont offerts pour tout projet de création de site. Ensuite, l'hébergement coûte entre 15-75€/mois selon vos besoins."
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
    answer: "Vous bénéficiez d'une période de support gratuite (1 à 6 mois selon l'offre) pour toute question ou ajustement. Ensuite, nous proposons des contrats de maintenance optionnels dès 79€/mois."
  },
  {
    question: "Les tarifs sont-ils vraiment tout compris ?",
    answer: "Oui, nos tarifs incluent : design, développement, intégration contenus fournis, SEO de base, formation WordPress et support post-lancement. Seules les prestations additionnelles (rédaction, photos pro, traductions) sont facturées en supplément."
  },
  {
    question: "Puis-je avoir un devis personnalisé ?",
    answer: "Absolument ! Chaque projet est unique. Contactez-nous pour échanger sur vos besoins spécifiques et recevoir un devis détaillé sous 24h, adapté à votre budget et vos objectifs."
  },
  {
    question: "Faites-vous des forfaits combinés ?",
    answer: "Oui ! Nous proposons des packages combinant création de site + SEO + maintenance avec des tarifs préférentiels. Par exemple : Site Pro + SEO Mensuel + Maintenance à partir de 5500€ la première année puis 1500€/mois."
  },
  {
    question: "Y a-t-il des coûts cachés ?",
    answer: "Non, tous nos tarifs sont transparents. Les seuls coûts supplémentaires possibles sont : contenus additionnels (photos pro, rédaction, traductions), modules premium spécifiques, ou prestations hors périmètre initial. Tout est validé avant facturation."
  }
];

const Tarifs = () => {
  return (
    <>
      <Helmet>
        <title>Tarifs Site Internet Lyon | Prix Web - VKBack</title>
        <meta 
          name="description" 
          content="Tarifs transparents création site internet à Lyon : site vitrine dès 2500€, e-commerce dès 5000€, SEO dès 700€/mois, maintenance dès 79€/mois. Tous les tarifs détaillés." 
        />
        <meta name="keywords" content="tarif site internet lyon, prix site web, coût création site, devis site internet lyon, tarif seo lyon, prix maintenance wordpress" />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-sm font-medium text-primary mb-6">
                <Sparkles className="w-4 h-4" />
                Tarification Transparente
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Nos Tarifs Agence Web Lyon
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                <strong>Tarifs transparents</strong> et adaptés à votre budget. Tous nos projets incluent hébergement 1 an offert, formation WordPress et support post-lancement.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-medium">Devis gratuit sous 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-medium">Paiement en 3 fois sans frais</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-medium">Garantie satisfait ou remboursé</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Navigation rapide */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30 sticky top-0 z-10 border-b">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {allPricingCategories.map((category) => (
                <a
                  key={category.category}
                  href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-primary/10"
                >
                  {category.category}
                </a>
              ))}
              <a
                href="#faq"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-primary/10"
              >
                FAQ
              </a>
            </div>
          </div>
        </section>

        {/* Toutes les catégories de tarifs */}
        {allPricingCategories.map((categoryData, categoryIndex) => (
          <section
            key={categoryData.category}
            id={categoryData.category.toLowerCase().replace(/\s+/g, '-')}
            className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${categoryIndex % 2 === 0 ? '' : 'bg-muted/30'}`}
          >
            <div className="max-w-7xl mx-auto">
              <FadeInSection>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{categoryData.category}</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {categoryData.description}
                  </p>
                </div>
              </FadeInSection>

              <div className={`grid gap-8 ${
                categoryData.plans.length <= 3 
                  ? 'md:grid-cols-3 max-w-5xl mx-auto' 
                  : categoryData.plans.length === 4
                  ? 'md:grid-cols-2 lg:grid-cols-4'
                  : 'md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {categoryData.plans.map((plan, index) => (
                  <FadeInSection key={plan.name} delay={index * 100}>
                    <Card className={`relative h-full flex flex-col ${plan.popular ? 'border-primary border-2 shadow-2xl scale-105' : 'border-2'}`}>
                      {plan.popular && (
                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                          Plus populaire
                        </Badge>
                      )}
                      
                      <CardHeader>
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        {plan.description && (
                          <CardDescription>{plan.description}</CardDescription>
                        )}
                        <div className="mt-4">
                          {plan.pricePrefix && (
                            <span className="text-sm text-muted-foreground">{plan.pricePrefix} </span>
                          )}
                          <span className="text-3xl font-bold text-primary">{plan.price}</span>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          {plan.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-2">
                              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                          {plan.notIncluded?.map((feature) => (
                            <div key={feature} className="flex items-start gap-2 opacity-50">
                              <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          asChild 
                          className="w-full" 
                          variant={plan.popular ? "default" : "outline"}
                        >
                          {plan.link ? (
                            <Link to={plan.link}>
                              En savoir plus
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          ) : (
                            <Link to="/contact">
                              Demander un devis
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Packages Combinés */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <div className="text-center mb-12">
                <Badge className="mb-4" variant="secondary">Économisez jusqu'à 20%</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Packages Combinés</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Combinez plusieurs services pour bénéficier de tarifs préférentiels
                </p>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeInSection delay={0}>
                <Card className="border-2 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">Pack Starter</CardTitle>
                    <CardDescription>Pour démarrer en ligne</CardDescription>
                    <div className="text-3xl font-bold text-primary mt-4">4 500€</div>
                    <div className="text-sm text-muted-foreground line-through">5 300€</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Site Vitrine Pro</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Audit SEO</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">3 mois maintenance offerts</span>
                      </div>
                    </div>
                    <Button asChild className="w-full" variant="outline">
                      <Link to="/contact">
                        Demander ce pack
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeInSection>

              <FadeInSection delay={100}>
                <Card className="border-primary border-2 shadow-xl h-full">
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    Recommandé
                  </Badge>
                  <CardHeader>
                    <CardTitle className="text-xl">Pack Business</CardTitle>
                    <CardDescription>Croissance assurée</CardDescription>
                    <div className="text-3xl font-bold text-primary mt-4">5 500€</div>
                    <div className="text-sm text-muted-foreground">puis 1 500€/mois</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Site Vitrine Pro ou Corporate</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">SEO Mensuel (12 mois)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Maintenance Pro incluse</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Google Ads Setup offert</span>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link to="/contact">
                        Demander ce pack
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeInSection>

              <FadeInSection delay={200}>
                <Card className="border-2 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">Pack E-commerce</CardTitle>
                    <CardDescription>Vente en ligne complète</CardDescription>
                    <div className="text-3xl font-bold text-primary mt-4">9 500€</div>
                    <div className="text-sm text-muted-foreground">puis 1 800€/mois</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">E-commerce Business</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">SEO E-commerce</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Gestion Google Ads Shopping</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Maintenance Pro incluse</span>
                      </div>
                    </div>
                    <Button asChild className="w-full" variant="outline">
                      <Link to="/contact">
                        Demander ce pack
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
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

        {/* CTA Final */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin d'un Devis Personnalisé ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Chaque projet est unique. Contactez-nous pour recevoir un devis détaillé adapté à vos besoins et votre budget sous 24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-cta">
                  <Link to="/contact">
                    <span className="hidden sm:inline">Demander mon devis gratuit</span>
                    <span className="sm:hidden">Mon devis</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2">
                  <a href="tel:0411789113">
                    <span className="hidden sm:inline">Appelez-nous : 04 11 78 91 13</span>
                    <span className="sm:hidden">04 11 78 91 13</span>
                  </a>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Tarifs;

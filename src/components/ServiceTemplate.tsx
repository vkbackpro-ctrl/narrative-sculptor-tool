import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import FadeInSection from "./FadeInSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import ClientLogos from "./ClientLogos";
import TechStack from "./TechStack";
import { ReactNode, useState } from "react";
interface BreadcrumbItem {
  label: string;
  href?: string;
}
interface ServiceFeature {
  title: string;
  description: string;
}
interface PricingOption {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}
interface FAQ {
  question: string;
  answer: string;
}
interface RelatedService {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}
interface ServiceTemplateProps {
  breadcrumb: BreadcrumbItem[];
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  heroAlt?: string;
  introduction: ReactNode;
  whySection: {
    title: string;
    content: ReactNode;
  };
  expertise: {
    title: string;
    content: ReactNode;
  };
  features: ServiceFeature[];
  pricing?: PricingOption[];
  faq: FAQ[];
  relatedServices: RelatedService[];
  ctaTitle?: string;
  ctaDescription?: string;
}
const ServiceTemplate = ({
  breadcrumb,
  heroTitle,
  heroSubtitle,
  heroImage,
  heroAlt,
  introduction,
  whySection,
  expertise,
  features,
  pricing,
  faq,
  relatedServices,
  ctaTitle = "Prêt à démarrer votre projet ?",
  ctaDescription = "Contactez-nous pour un devis gratuit sous 24h"
}: ServiceTemplateProps) => {
  const [showAllFAQ, setShowAllFAQ] = useState(false);
  const visibleFAQ = showAllFAQ ? faq : faq.slice(0, 4);

  return <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumb} />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <FadeInSection>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                  {heroTitle}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  {heroSubtitle}
                </p>
                <Button asChild size="lg" className="btn-cta">
                  <a href="/contact">
                    Demander un Devis Gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </FadeInSection>
            
            {heroImage && <FadeInSection delay={200}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={heroImage} alt={heroAlt || heroTitle} className="w-full h-auto object-cover" />
                </div>
              </FadeInSection>}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            {introduction}
          </FadeInSection>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/5 to-background">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {whySection.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              {whySection.content}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {expertise.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              {expertise.content}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 id="inclus" className="text-3xl md:text-4xl font-bold text-center mb-12">
              Ce qui est Inclus
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => <Card key={index} className="glass-card hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>)}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Pricing */}
      {pricing && pricing.length > 0 && <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <h2 id="tarifs" className="text-3xl md:text-4xl font-bold text-center mb-12">
                Nos Tarifs
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pricing.map((plan, index) => <Card key={index} className={`glass-card hover:shadow-xl transition-all ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                    {plan.popular && <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold rounded-t-lg">
                        Le plus populaire
                      </div>}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="mt-4 text-primary font-bold leading-tight flex items-baseline gap-2 tracking-tight">
                        {(() => {
                          const m = plan.price.match(/^(.*?)(\d[\d\s., ]*€)$/);
                          if (m) {
                            return (
                              <>
                                <span className="text-base sm:text-lg whitespace-nowrap">{m[1].trim()}</span>
                                <span className="text-2xl sm:text-3xl whitespace-nowrap">{m[2].trim()}</span>
                              </>
                            );
                          }
                          return <span className="text-2xl sm:text-3xl whitespace-nowrap">{plan.price}</span>;
                        })()}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, fIndex) => <li key={fIndex} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>)}
                      </ul>
                      <Button className="w-full mt-6 btn-cta">
                        Choisir ce forfait
                      </Button>
                    </CardContent>
                  </Card>)}
              </div>
            </FadeInSection>
          </div>
        </section>}

      {/* FAQ */}
      <section id="faq" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Questions Fréquentes
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {visibleFAQ.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="glass-card px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
            
            {!showAllFAQ && faq.length > 4 && (
              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAllFAQ(true)}
                  className="min-w-[200px]"
                >
                  Voir plus de questions
                </Button>
              </div>
            )}
          </FadeInSection>
        </div>
      </section>

      {/* Client Logos - Remonté ici */}
      <ClientLogos />

      {/* Technologies & Outils */}
      <TechStack />

      {/* Testimonials */}
      <Testimonials />

      {/* Related Services */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 id="services-complementaires" className="text-3xl md:text-4xl font-bold text-center mb-12">
              Services Complémentaires
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((service, index) => <Card key={index} className="glass-card hover:shadow-xl transition-all group">
                  <CardHeader>
                    <div className="mb-4 text-primary">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                      <a href={service.href}>
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>)}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Section */}
      
    </div>;
};
export default ServiceTemplate;
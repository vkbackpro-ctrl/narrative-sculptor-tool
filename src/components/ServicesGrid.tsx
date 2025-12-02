import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Code2, ShoppingCart, TrendingUp, Shield, Megaphone, Server, ArrowRight, Star, Sparkles, CheckCircle2, ChevronDown } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const services = [
  {
    icon: Code2,
    title: "Création de Sites WordPress",
    description: "Sites vitrine, sur-mesure : création WordPress professionnelle et optimisée SEO.",
    link: "/creation-site-internet-lyon",
    gradient: "from-blue-500/10 via-blue-400/5 to-transparent",
    borderColor: "hover:border-blue-500/50",
    iconBg: "from-blue-500/10 to-blue-400/5",
    popular: true,
    priceFrom: "4 000€",
    subServices: [
      { name: "Site Vitrine", link: "/creation-site-vitrine-lyon" },
      { name: "Refonte de Site", link: "/refonte-site-internet-lyon" },
      { name: "Site Corporate", link: "/creation-site-corporate-lyon" },
      { name: "Site One Page", link: "/creation-site-one-page-lyon" },
      { name: "Site Catalogue", link: "/creation-site-catalogue-lyon" },
      { name: "Site Multilingue", link: "/creation-site-multilingue-lyon" },
      { name: "Migration Site", link: "/migration-site-internet-lyon" },
    ],
  },
  {
    icon: ShoppingCart,
    title: "Sites E-commerce",
    description: "Boutiques WooCommerce sur WordPress clés en main. Paiement sécurisé, gestion stocks, livraisons.",
    link: "/creation-site-ecommerce-lyon",
    gradient: "from-green-500/10 via-green-400/5 to-transparent",
    borderColor: "hover:border-green-500/50",
    iconBg: "from-green-500/10 to-green-400/5",
    popular: false,
    priceFrom: "5 000€",
    subServices: [
      { name: "Boutique WooCommerce", link: "/services/boutique-woocommerce-lyon" },
      { name: "Migration WooCommerce", link: "/services/migration-woocommerce-lyon" },
      { name: "Optimisation Conversion", link: "/services/optimisation-conversion-lyon" },
      { name: "SEO E-commerce", link: "/services/seo-ecommerce-lyon" },
      { name: "Refonte E-commerce", link: "/services/refonte-ecommerce-lyon" },
      { name: "Marketplace", link: "/services/marketplace-woocommerce-lyon" },
      { name: "Paiement Sécurisé", link: "/services/paiement-securise-woocommerce-lyon" },
      { name: "Dropshipping", link: "/services/dropshipping-woocommerce-lyon" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Référencement SEO Google",
    description: "Positionnez-vous en 1ère page de Google. Audit SEO, optimisation, netlinking, SEO local.",
    link: "/referencement-seo-lyon",
    gradient: "from-purple-500/10 via-purple-400/5 to-transparent",
    borderColor: "hover:border-purple-500/50",
    iconBg: "from-purple-500/10 to-purple-400/5",
    popular: true,
    priceFrom: "700€/mois",
    subServices: [
      { name: "Audit SEO", link: "/services/audit-seo-lyon/" },
      { name: "SEO Local", link: "/services/seo-local-lyon/" },
      { name: "Netlinking", link: "/services/netlinking-backlinks-lyon/" },
      { name: "Rédaction Web", link: "/services/redaction-web-seo-lyon/" },
      { name: "Google My Business", link: "/services/optimisation-google-my-business-lyon/" },
      { name: "Consultant SEO", link: "/services/consultant-seo-lyon/" },
      { name: "Formation SEO", link: "/services/formation-seo-lyon/" },
      { name: "Analyse Concurrence", link: "/services/analyse-concurrentielle-seo-lyon/" },
    ],
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description: "Mises à jour, sauvegardes, sécurité, support technique. Votre site entre de bonnes mains.",
    link: "/maintenance-support-wordpress-lyon",
    gradient: "from-orange-500/10 via-orange-400/5 to-transparent",
    borderColor: "hover:border-orange-500/50",
    iconBg: "from-orange-500/10 to-orange-400/5",
    popular: false,
    priceFrom: "79€/mois",
    subServices: [
      { name: "Maintenance WordPress", link: "/services/maintenance-wordpress-lyon" },
      { name: "Sauvegarde Automatique", link: "/services/sauvegarde-site-wordpress-lyon" },
      { name: "Sécurité WordPress", link: "/services/securite-site-wordpress-lyon" },
      { name: "Optimisation Performance", link: "/services/optimisation-performance-wordpress-lyon" },
      { name: "Support Technique", link: "/services/support-technique-wordpress-lyon" },
      { name: "Mise à jour Plugins", link: "/services/mise-a-jour-plugins-wordpress-lyon" },
      { name: "Certificat SSL", link: "/services/certificat-ssl-wordpress-lyon" },
      { name: "Infogérance WordPress", link: "/services/infogerance-wordpress-lyon" },
    ],
  },
  {
    icon: Megaphone,
    title: "Google Ads & SEA",
    description: "Campagnes publicitaires Google rentables. Search, Shopping, Display, YouTube.",
    link: "/google-ads-sea-lyon",
    gradient: "from-red-500/10 via-red-400/5 to-transparent",
    borderColor: "hover:border-red-500/50",
    iconBg: "from-red-500/10 to-red-400/5",
    popular: false,
    priceFrom: "490€/mois",
    subServices: [
      { name: "Campagnes Search", link: "/google-ads-search-lyon" },
      { name: "Google Shopping", link: "/google-shopping-lyon" },
      { name: "Display & Remarketing", link: "/google-display-remarketing-lyon" },
      { name: "Google Local Ads", link: "/google-local-ads-lyon" },
      { name: "YouTube Ads", link: "/youtube-ads-lyon" },
      { name: "Optimisation ROI", link: "/optimisation-google-ads-lyon" },
      { name: "Audit Google Ads", link: "/audit-google-ads-lyon" },
      { name: "Gestion Budgétaire", link: "/gestion-budget-google-ads-lyon" },
    ],
  },
  {
    icon: Server,
    title: "Hébergement Web",
    description: "Hébergement rapide et sécurisé. Serveurs performants, SSL inclus, support technique.",
    link: "/hebergement-web-lyon",
    gradient: "from-teal-500/10 via-teal-400/5 to-transparent",
    borderColor: "hover:border-teal-500/50",
    iconBg: "from-teal-500/10 to-teal-400/5",
    popular: false,
    priceFrom: "49€/mois",
    subServices: [
      { name: "Hébergement WordPress", link: "/hebergement-wordpress-lyon" },
      { name: "Hébergement E-commerce", link: "/hebergement-ecommerce-lyon" },
      { name: "Serveur Dédié", link: "/serveur-dedie-lyon" },
      { name: "VPS Managé", link: "/vps-manage-lyon" },
      { name: "SSL & Sécurité", link: "/certificat-ssl-securite-lyon" },
      { name: "Migration Hébergement", link: "/migration-hebergement-lyon" },
      { name: "CDN & Performance", link: "/cdn-acceleration-site-lyon" },
      { name: "Infogérance Serveur", link: "/infogerance-serveur-lyon" },
    ],
  },
];

const ServicesGrid = () => {
  const [openServices, setOpenServices] = useState<Record<number, boolean>>({});

  const toggleService = (index: number) => {
    setOpenServices(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="section-container bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <FadeInSection>
        <div className="text-center mb-10 md:mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-xs md:text-sm font-medium text-primary mb-3 md:mb-4">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            Nos Expertises Web
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            Solutions Web Complètes à <span className="gradient-text">Lyon</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            De la création à la maintenance, en passant par le référencement et la publicité : 
            toutes les compétences pour votre succès digital
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm px-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium">Devis gratuit sous 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium">200+ projets réalisés</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="font-medium">4.9/5 sur Google</span>
            </div>
          </div>
        </div>
      </FadeInSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-10 md:mb-12 relative z-10">
        {services.map((service, index) => (
          <FadeInSection key={service.title} delay={index * 100}>
            <Card className={`card-hover group h-full border-2 ${service.borderColor} transition-all duration-500 bg-gradient-to-br ${service.gradient} backdrop-blur-sm relative overflow-hidden`}>
              
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground border-none shadow-lg">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Populaire
                  </Badge>
                </div>
              )}
              
              <CardHeader className="relative z-10 pb-5">
                <div className={`mb-5 p-3 bg-gradient-to-br ${service.iconBg} rounded-2xl w-fit group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative shadow-lg`}>
                  <service.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    <Link to={service.link} className="hover:underline">
                      {service.title}
                    </Link>
                  </CardTitle>
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
                  <span className="text-sm font-semibold text-primary">À partir de {service.priceFrom}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-5 relative z-10 pt-0">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>

                {/* Sub-services links - Collapsible */}
                <Collapsible open={openServices[index]} onOpenChange={() => toggleService(index)}>
                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <CollapsibleTrigger className="w-full flex items-center justify-between text-xs font-semibold text-muted-foreground uppercase tracking-wide hover:text-primary transition-colors group/trigger">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
                        Nos prestations
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform ${openServices[index] ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {service.subServices.map((subService) => (
                          <Link
                            key={subService.name}
                            to={subService.link}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group/link p-2 rounded-lg hover:bg-primary/5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary/50 group-hover/link:text-primary flex-shrink-0" />
                            <span className="line-clamp-1">{subService.name}</span>
                          </Link>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>

                <Button
                  variant="ghost"
                  className="w-full justify-between group/btn hover:bg-primary/10 mt-4"
                  asChild
                >
                  <Link to={service.link}>
                    <span className="font-semibold">{service.title} →</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection delay={600}>
        <div className="text-center relative z-10 mt-10 md:mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-primary/10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              Besoin d'un conseil personnalisé ?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Nos experts analysent vos besoins et vous proposent la solution web adaptée à votre projet et votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="btn-cta group shadow-xl hover:shadow-2xl">
                <Link to="/contact">
                  <span className="hidden sm:inline">Lancer mon projet</span>
                  <span className="sm:hidden">Mon projet</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2">
                <Link to="/tarifs">
                  <span className="hidden sm:inline">Tarifs agence web Lyon</span>
                  <span className="sm:hidden">Nos tarifs</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ServicesGrid;

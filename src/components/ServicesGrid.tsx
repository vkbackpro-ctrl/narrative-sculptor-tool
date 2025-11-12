import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, ShoppingCart, TrendingUp, Shield, Megaphone, Server, ArrowRight, Star, Sparkles, CheckCircle2 } from "lucide-react";
import FadeInSection from "./FadeInSection";

const services = [
  {
    icon: Code2,
    title: "Création de Sites WordPress",
    description: "Sites vitrine, e-commerce, sur-mesure : création WordPress professionnelle et optimisée SEO.",
    link: "/agence-wordpress-lyon",
    gradient: "from-blue-500/10 via-blue-400/5 to-transparent",
    borderColor: "hover:border-blue-500/50",
    iconBg: "from-blue-500/10 to-blue-400/5",
    popular: true,
    priceFrom: "4 000€",
    subServices: [
      { name: "Site Vitrine", link: "/services/creation-site-vitrine-lyon/" },
      { name: "Site E-commerce", link: "/services/creation-site-ecommerce-lyon/" },
      { name: "Refonte de Site", link: "/services/refonte-site-internet-lyon/" },
      { name: "Site Corporate", link: "/services/creation-site-corporate-lyon/" },
      { name: "Site One Page", link: "/services/creation-site-one-page-lyon/" },
      { name: "Site Catalogue", link: "/services/creation-site-catalogue-lyon/" },
      { name: "Site Multilingue", link: "/services/creation-site-multilingue-lyon/" },
      { name: "Migration Site", link: "/services/migration-site-internet-lyon/" },
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
      { name: "Boutique WooCommerce", link: "/services/boutique-woocommerce-lyon/" },
      { name: "Migration WooCommerce", link: "/services/migration-woocommerce-lyon/" },
      { name: "Optimisation Conversion", link: "/services/optimisation-conversion-ecommerce-lyon/" },
      { name: "SEO E-commerce", link: "/services/seo-ecommerce-lyon/" },
      { name: "Refonte E-commerce", link: "/services/refonte-site-ecommerce-lyon/" },
      { name: "Marketplace", link: "/services/creation-marketplace-lyon/" },
      { name: "Paiement Sécurisé", link: "/services/integration-paiement-ecommerce-lyon/" },
      { name: "Dropshipping", link: "/services/dropshipping-lyon/" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Référencement SEO Lyon",
    description: "Positionnez-vous en 1ère page de Google. Audit SEO, optimisation, netlinking, SEO local.",
    link: "/agence-seo-lyon",
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
    link: "/maintenance-site-web-lyon",
    gradient: "from-orange-500/10 via-orange-400/5 to-transparent",
    borderColor: "hover:border-orange-500/50",
    iconBg: "from-orange-500/10 to-orange-400/5",
    popular: false,
    priceFrom: "79€/mois",
    subServices: [
      { name: "Maintenance WordPress", link: "/services/maintenance-wordpress-lyon/" },
      { name: "Sécurité", link: "/services/securite-wordpress-lyon/" },
      { name: "Support Technique", link: "/services/support-technique-lyon/" },
      { name: "Optimisation", link: "/services/optimisation-wordpress-lyon/" },
      { name: "Sauvegardes", link: "/services/sauvegarde-site-web-lyon/" },
      { name: "Monitoring", link: "/services/monitoring-site-web-lyon/" },
      { name: "Mises à jour", link: "/services/mise-a-jour-wordpress-lyon/" },
      { name: "Dépannage", link: "/services/depannage-site-web-lyon/" },
    ],
  },
  {
    icon: Megaphone,
    title: "Google Ads & SEA",
    description: "Campagnes publicitaires Google rentables. Search, Shopping, Display, YouTube.",
    link: "/agence-google-ads-lyon",
    gradient: "from-red-500/10 via-red-400/5 to-transparent",
    borderColor: "hover:border-red-500/50",
    iconBg: "from-red-500/10 to-red-400/5",
    popular: false,
    priceFrom: "490€/mois",
    subServices: [
      { name: "Google Search", link: "/services/campagnes-google-search-lyon/" },
      { name: "Google Shopping", link: "/services/campagnes-google-shopping-lyon/" },
      { name: "Display & Remarketing", link: "/services/campagnes-display-remarketing-lyon/" },
      { name: "YouTube Ads", link: "/services/campagnes-youtube-ads-lyon/" },
      { name: "Performance Max", link: "/services/campagnes-google-performance-max-lyon/" },
      { name: "Gestion Budget", link: "/services/gestion-budget-google-ads-lyon/" },
      { name: "Audit Google Ads", link: "/services/audit-compte-google-ads-lyon/" },
      { name: "Formation Google Ads", link: "/services/formation-google-ads-lyon/" },
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
      { name: "Hébergement WordPress", link: "/services/hebergement-wordpress-lyon/" },
      { name: "Hébergement E-commerce", link: "/services/hebergement-ecommerce-lyon/" },
      { name: "Migration Hébergement", link: "/services/migration-site-internet-lyon/" },
      { name: "Certificat SSL", link: "/services/certificat-ssl-lyon/" },
      { name: "Serveurs Dédiés", link: "/services/serveur-dedie-lyon/" },
      { name: "Hébergement Cloud", link: "/services/hebergement-cloud-lyon/" },
      { name: "Nom de Domaine", link: "/services/achat-nom-domaine-lyon/" },
      { name: "Emails Pro", link: "/services/email-professionnel-lyon/" },
    ],
  },
];

const ServicesGrid = () => {
  return (
    <section className="section-container bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <FadeInSection>
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Sparkles className="w-4 h-4" />
            Nos Expertises Web
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Solutions Web Complètes à <span className="gradient-text">Lyon</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            De la création à la maintenance, en passant par le référencement et la publicité : 
            toutes les compétences pour votre succès digital
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 relative z-10">
        {services.map((service, index) => (
          <FadeInSection key={service.title} delay={index * 100}>
            <Card className={`card-hover group h-full border-2 ${service.borderColor} transition-all duration-500 bg-gradient-to-br ${service.gradient} backdrop-blur-sm relative overflow-hidden`}>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-foreground to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-foreground to-transparent rounded-full blur-xl" />
              </div>
              
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground border-none shadow-lg">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Populaire
                  </Badge>
                </div>
              )}
              
              <CardHeader className="relative z-10">
                <div className={`mb-4 p-4 bg-gradient-to-br ${service.iconBg} rounded-2xl w-fit group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative shadow-lg`}>
                  <service.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
                  <span className="text-sm font-semibold text-primary">À partir de {service.priceFrom}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <CardDescription className="text-base leading-relaxed min-h-[3rem]">
                  {service.description}
                </CardDescription>

                {/* Sub-services links */}
                <div className="space-y-3 pt-4 border-t border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
                    Nos prestations
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.subServices.map((subService) => (
                      <a
                        key={subService.name}
                        href={subService.link}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group/link p-2 rounded-lg hover:bg-primary/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary/50 group-hover/link:text-primary flex-shrink-0" />
                        <span className="line-clamp-1">{subService.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-between group/btn hover:bg-primary/10 mt-4"
                  asChild
                >
                  <a href={service.link}>
                    <span className="font-semibold">Découvrir en détail</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection delay={600}>
        <div className="text-center relative z-10 mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Besoin d'un conseil personnalisé ?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nos experts analysent vos besoins et vous proposent la solution web adaptée à votre projet et votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-cta group shadow-xl hover:shadow-2xl">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Voir nos tarifs détaillés
              </Button>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ServicesGrid;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, ShoppingCart, TrendingUp, Shield, Megaphone, Server, ArrowRight } from "lucide-react";
import FadeInSection from "./FadeInSection";

const services = [
  {
    icon: Code2,
    title: "Création de Sites WordPress",
    description: "Sites vitrine, e-commerce, sur-mesure : création WordPress professionnelle et optimisée SEO.",
    link: "/services/agence-wordpress-lyon/",
    subServices: [
      { name: "Site Vitrine", link: "/services/creation-site-vitrine-lyon/" },
      { name: "Site E-commerce", link: "/services/creation-site-ecommerce-lyon/" },
      { name: "Refonte de Site", link: "/services/refonte-site-internet-lyon/" },
      { name: "Site Corporate", link: "/services/creation-site-corporate-lyon/" },
    ],
  },
  {
    icon: ShoppingCart,
    title: "Sites E-commerce",
    description: "Boutiques WooCommerce et PrestaShop clés en main. Paiement sécurisé, gestion stocks, livraisons.",
    link: "/services/creation-site-ecommerce-lyon/",
    subServices: [
      { name: "Boutique WooCommerce", link: "/services/boutique-woocommerce-lyon/" },
      { name: "Site PrestaShop", link: "/services/creation-site-prestashop-lyon/" },
      { name: "Optimisation Conversion", link: "/services/optimisation-conversion-ecommerce-lyon/" },
      { name: "SEO E-commerce", link: "/services/seo-ecommerce-lyon/" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Référencement SEO Lyon",
    description: "Positionnez-vous en 1ère page de Google. Audit SEO, optimisation, netlinking, SEO local.",
    link: "/services/agence-seo-lyon/",
    subServices: [
      { name: "Audit SEO", link: "/services/audit-seo-lyon/" },
      { name: "SEO Local", link: "/services/seo-local-lyon/" },
      { name: "Netlinking", link: "/services/netlinking-backlinks-lyon/" },
      { name: "Rédaction Web", link: "/services/redaction-web-seo-lyon/" },
    ],
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description: "Mises à jour, sauvegardes, sécurité, support technique. Votre site entre de bonnes mains.",
    link: "/services/maintenance-site-web-lyon/",
    subServices: [
      { name: "Maintenance WordPress", link: "/services/maintenance-wordpress-lyon/" },
      { name: "Sécurité", link: "/services/securite-wordpress-lyon/" },
      { name: "Support Technique", link: "/services/support-technique-lyon/" },
      { name: "Optimisation", link: "/services/optimisation-wordpress-lyon/" },
    ],
  },
  {
    icon: Megaphone,
    title: "Google Ads & SEA",
    description: "Campagnes publicitaires Google rentables. Search, Shopping, Display, YouTube.",
    link: "/services/agence-google-ads-lyon/",
    subServices: [
      { name: "Google Search", link: "/services/campagnes-google-search-lyon/" },
      { name: "Google Shopping", link: "/services/campagnes-google-shopping-lyon/" },
      { name: "Display", link: "/services/campagnes-display-remarketing-lyon/" },
      { name: "YouTube Ads", link: "/services/campagnes-youtube-ads-lyon/" },
    ],
  },
  {
    icon: Server,
    title: "Hébergement Web",
    description: "Hébergement rapide et sécurisé. Serveurs performants, SSL inclus, support technique.",
    link: "/services/hebergement-web-lyon/",
    subServices: [
      { name: "Hébergement WordPress", link: "/services/hebergement-wordpress-lyon/" },
      { name: "Hébergement E-commerce", link: "/services/hebergement-ecommerce-lyon/" },
      { name: "Migration", link: "/services/migration-site-internet-lyon/" },
      { name: "Certificat SSL", link: "/services/certificat-ssl-lyon/" },
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
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-sm font-medium text-primary">
              Nos Expertises
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Nos Services Web à <span className="gradient-text">Lyon</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Création, référencement, maintenance : solutions complètes pour votre présence en ligne
          </p>
        </div>
      </FadeInSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 relative z-10">
        {services.map((service, index) => (
          <FadeInSection key={service.title} delay={index * 100}>
            <Card className="card-hover group h-full border-2 hover:border-primary/50 transition-all duration-500 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <CardHeader>
                <div className="mb-4 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl w-fit group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative">
                  <service.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors mb-3">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>

                {/* Sub-services links */}
                <div className="space-y-3 pt-4 border-t border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-8 h-px bg-primary" />
                    Services détaillés
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.subServices.map((subService) => (
                      <a
                        key={subService.name}
                        href={subService.link}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group/link"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/link:bg-primary group-hover/link:scale-150 transition-all" />
                        <span className="group-hover/link:translate-x-1 transition-transform">{subService.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href={service.link}
                  className="inline-flex items-center text-primary font-semibold hover:gap-3 gap-2 transition-all pt-4 group-hover:translate-x-2"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection delay={600}>
        <div className="text-center relative z-10">
          <Button size="lg" className="group shadow-xl hover:shadow-2xl">
            Découvrir tous nos services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ServicesGrid;

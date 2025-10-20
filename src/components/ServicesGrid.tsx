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
    <section className="section-container bg-muted/30">
      <FadeInSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Nos Services Web à Lyon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Création, référencement, maintenance : solutions complètes pour votre présence en ligne
          </p>
        </div>
      </FadeInSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {services.map((service, index) => (
          <FadeInSection key={service.title} delay={index * 100}>
            <Card className="card-hover group h-full border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>

                {/* Sub-services links */}
                <div className="space-y-2 pt-2 border-t border-border">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Services détaillés :
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.subServices.map((subService) => (
                      <a
                        key={subService.name}
                        href={subService.link}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {subService.name}
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href={service.link}
                  className="inline-flex items-center text-primary font-medium hover:underline group-hover:translate-x-2 transition-transform pt-2"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection delay={600}>
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            Découvrir tous nos services
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ServicesGrid;

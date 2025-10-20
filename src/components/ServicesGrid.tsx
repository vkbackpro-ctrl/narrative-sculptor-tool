import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, ShoppingCart, TrendingUp, Shield, Megaphone, Server, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Création de Sites WordPress",
    description: "Sites vitrine, e-commerce, sur-mesure : création WordPress professionnelle et optimisée SEO.",
    link: "/services/agence-wordpress-lyon/",
  },
  {
    icon: ShoppingCart,
    title: "Sites E-commerce",
    description: "Boutiques WooCommerce et PrestaShop clés en main. Paiement sécurisé, gestion stocks, livraisons.",
    link: "/services/creation-site-ecommerce-lyon/",
  },
  {
    icon: TrendingUp,
    title: "Référencement SEO Lyon",
    description: "Positionnez-vous en 1ère page de Google. Audit SEO, optimisation, netlinking, SEO local.",
    link: "/services/agence-seo-lyon/",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description: "Mises à jour, sauvegardes, sécurité, support technique. Votre site entre de bonnes mains.",
    link: "/services/maintenance-site-web-lyon/",
  },
  {
    icon: Megaphone,
    title: "Google Ads & SEA",
    description: "Campagnes publicitaires Google rentables. Search, Shopping, Display, YouTube.",
    link: "/services/agence-google-ads-lyon/",
  },
  {
    icon: Server,
    title: "Hébergement Web",
    description: "Hébergement rapide et sécurisé. Serveurs performants, SSL inclus, support technique.",
    link: "/services/hebergement-web-lyon/",
  },
];

const ServicesGrid = () => {
  return (
    <section className="section-container bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Nos Services Web à Lyon
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Création, référencement, maintenance : solutions complètes pour votre présence en ligne
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {services.map((service) => (
          <Card key={service.title} className="card-hover group">
            <CardHeader>
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                {service.description}
              </CardDescription>
              <a
                href={service.link}
                className="inline-flex items-center text-primary font-medium hover:underline group-hover:translate-x-1 transition-transform"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Découvrir tous nos services
        </Button>
      </div>
    </section>
  );
};

export default ServicesGrid;

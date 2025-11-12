import { Helmet } from "react-helmet";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import FadeInSection from "@/components/FadeInSection";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import blogImage from "@/assets/blog-woocommerce-prestashop.jpg";

const WooCommercePrestaShop = () => {
  return (
    <>
      <Helmet>
        <title>WooCommerce vs PrestaShop 2025 : Quel CMS E-commerce Choisir ? - VKBack</title>
        <meta 
          name="description" 
          content="Comparatif détaillé WooCommerce et PrestaShop pour votre boutique en ligne. Avantages, inconvénients, coûts et performances." 
        />
        <link rel="canonical" href="https://vkback.fr/blog/woocommerce-prestashop-comparatif" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Blog", href: "/blog" },
          { label: "WooCommerce vs PrestaShop 2025" }
        ]} 
      />

      <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-8">
              <Button asChild variant="ghost" className="mb-6">
                <a href="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour au blog
                </a>
              </Button>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge>E-commerce</Badge>
                <Badge variant="outline">Comparatif</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                WooCommerce vs PrestaShop 2025 : Quel CMS E-commerce Choisir ?
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Florian C.
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  10 Janvier 2025
                </span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <img 
              src={blogImage} 
              alt="WooCommerce vs PrestaShop"
              className="w-full h-96 object-cover rounded-lg mb-12"
            />
          </FadeInSection>

          <div className="prose prose-lg max-w-none">
            <FadeInSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                WooCommerce et PrestaShop sont les deux solutions e-commerce les plus populaires en France. Mais laquelle choisir pour votre boutique en ligne en 2025 ? Comparatif complet.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">WooCommerce : L'Extension WordPress</h2>
              <p className="mb-4">
                <strong>WooCommerce</strong> est une extension WordPress gratuite qui transforme votre site en boutique e-commerce. C'est la solution e-commerce la plus utilisée au monde avec plus de 5 millions de sites actifs.
              </p>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Avantages de WooCommerce</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Gratuit et open-source</strong> : Solution de base sans coût de licence</li>
                <li><strong>Intégration WordPress</strong> : Parfait si vous avez déjà un site WordPress</li>
                <li><strong>Extensibilité</strong> : 55 000+ extensions WordPress disponibles</li>
                <li><strong>SEO-friendly</strong> : Bénéficie de l'excellent SEO de WordPress</li>
                <li><strong>Facilité d'utilisation</strong> : Interface intuitive, formation rapide</li>
                <li><strong>Communauté énorme</strong> : Support et documentation abondants</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Inconvénients de WooCommerce</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Performances</strong> : Peut ralentir avec un grand catalogue (1000+ produits)</li>
                <li><strong>Extensions payantes</strong> : Fonctionnalités avancées souvent payantes</li>
                <li><strong>Maintenance</strong> : Mises à jour régulières WordPress + extensions requises</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">PrestaShop : La Solution E-commerce Pure</h2>
              <p className="mb-4">
                <strong>PrestaShop</strong> est un CMS 100% dédié à l'e-commerce. Très populaire en France avec plus de 300 000 boutiques actives dans le monde.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Avantages de PrestaShop</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>E-commerce natif</strong> : Conçu uniquement pour la vente en ligne</li>
                <li><strong>Gros catalogues</strong> : Performant même avec 10 000+ produits</li>
                <li><strong>Multilingue & multidevises</strong> : Idéal pour l'international</li>
                <li><strong>Fonctionnalités avancées</strong> : Gestion stock complexe, B2B, marketplace</li>
                <li><strong>Personnalisation poussée</strong> : Contrôle total sur le frontend et backend</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Inconvénients de PrestaShop</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Complexité technique</strong> : Configuration et maintenance plus complexes</li>
                <li><strong>Coût des modules</strong> : Modules officiels souvent chers (50€ à 500€)</li>
                <li><strong>Courbe d'apprentissage</strong> : Interface moins intuitive que WooCommerce</li>
                <li><strong>SEO</strong> : Moins optimisé naturellement que WordPress/WooCommerce</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Comparaison des Coûts</h2>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Coût WooCommerce</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Installation</strong> : 5 000€ - 10 000€ (développement complet)</li>
                <li><strong>Hébergement</strong> : 20€ - 80€/mois selon trafic</li>
                <li><strong>Extensions</strong> : 0€ - 500€/an (selon besoins)</li>
                <li><strong>Maintenance</strong> : 100€ - 300€/mois</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Coût PrestaShop</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Installation</strong> : 7 000€ - 15 000€ (développement complet)</li>
                <li><strong>Hébergement</strong> : 30€ - 150€/mois selon performances</li>
                <li><strong>Modules</strong> : 200€ - 1 000€/an</li>
                <li><strong>Maintenance</strong> : 150€ - 400€/mois</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Quel CMS Choisir ?</h2>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Choisissez WooCommerce si :</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Vous avez déjà un site WordPress</li>
                <li>Catalogue &lt; 500 produits</li>
                <li>Budget serré (TPE/PME)</li>
                <li>Besoin de flexibilité et d'extensions variées</li>
                <li>Priorité au SEO et au contenu (blog + e-commerce)</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Choisissez PrestaShop si :</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Gros catalogue (1000+ produits)</li>
                <li>Vente internationale (multilingue/multidevises)</li>
                <li>Fonctionnalités e-commerce complexes (B2B, marketplace)</li>
                <li>Équipe technique dédiée</li>
                <li>Budget conséquent pour développement et maintenance</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Notre Recommandation</h2>
              <p className="mb-8">
                Pour <strong>80% des PME françaises</strong>, nous recommandons <strong>WooCommerce</strong> : solution plus abordable, maintenance plus simple, excellent pour le SEO et parfaite pour des catalogues &lt;1000 produits. PrestaShop reste le meilleur choix pour les <strong>gros e-commerces</strong> avec besoins techniques avancés.
              </p>
            </FadeInSection>
          </div>

          <FadeInSection delay={300}>
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Créez Votre Boutique E-commerce</h3>
              <p className="text-muted-foreground mb-6">
                Notre agence web crée des boutiques WooCommerce et PrestaShop performantes.
              </p>
              <Button asChild size="lg" className="btn-cta">
                <a href="/contact">
                  Demander un devis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </FadeInSection>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default WooCommercePrestaShop;

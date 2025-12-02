import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { Package, TrendingUp, Zap, Globe, DollarSign, Settings } from "lucide-react";
import dropshippingHero from "@/assets/creation-site-ecommerce-woocommerce-lyon.jpg";

const Dropshipping = () => {
  return (
    <>
      <Helmet>
        <title>Dropshipping WooCommerce Lyon | Boutique Sans Stock - VKBack</title>
        <meta name="description" content="Création site dropshipping WooCommerce à Lyon. Boutique sans stock avec synchronisation fournisseurs et automatisation commandes. Devis gratuit." />
        <link rel="canonical" href="https://vkback.com/services/dropshipping-woocommerce-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Sites E-commerce Lyon", href: "/creation-site-ecommerce-lyon" },
          { label: "Dropshipping WooCommerce Lyon" }
        ]}
        painPointHook={{
          question: "Vous voulez vendre en ligne sans investir dans du stock ?",
          answer: "Le dropshipping permet de lancer votre e-commerce sans risque financier."
        }}
        heroTitle="Site Dropshipping WooCommerce Lyon"
        heroSubtitle="Pas de budget pour acheter du stock ? Pas d'entrepôt ? Nous créons votre boutique dropshipping avec synchronisation automatique des fournisseurs."
        heroImage={dropshippingHero}
        heroAlt="Création site dropshipping WooCommerce sans stock à Lyon"
        ctaPrimary={{ label: "Lancer mon dropshipping", href: "/contact" }}
        ctaSecondary={{ label: "Voir les formules", href: "#tarifs" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Vous souhaitez lancer une activité e-commerce sans investir dans du stock ni gérer la logistique ? Notre agence web à Lyon crée des boutiques dropshipping complètes sous WooCommerce avec synchronisation automatique des fournisseurs.
            </p>
            <p className="text-lg leading-relaxed">
              Le dropshipping permet de vendre des produits en ligne sans les posséder : lorsqu'un client commande, le fournisseur expédie directement au client. Vous vous concentrez sur le marketing et les ventes, sans gérer stock, emballage ni expédition. WooCommerce, couplé aux bonnes extensions, offre une solution dropshipping professionnelle et automatisée.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi choisir le dropshipping avec WooCommerce ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Lancement rapide avec investissement minimal</h3>
                <p className="text-lg text-muted-foreground">
                  Pas besoin de stock initial, d'entrepôt, ni de logistique. Vous lancez votre boutique rapidement avec un investissement limité. Testez des produits et niches sans risque financier majeur.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Flexibilité et catalogue illimité</h3>
                <p className="text-lg text-muted-foreground">
                  Ajoutez des milliers de produits sans contrainte de stock. Changez de niche, testez de nouveaux produits, et adaptez votre offre instantanément selon les tendances et la demande.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre expertise Dropshipping à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Avec plus de 10 ans d'expérience en e-commerce à Lyon, nous avons lancé plusieurs boutiques dropshipping performantes pour des clients de la région Rhône-Alpes.
              </p>
              <p className="text-lg">
                Nous connectons votre boutique WooCommerce aux principaux fournisseurs dropshipping (AliExpress, CJ Dropshipping, Spocket, etc.), automatisons l'import de produits avec images et descriptions, synchronisons les stocks en temps réel, et automatisons le transfert des commandes vers les fournisseurs. Nous optimisons aussi le SEO, la vitesse et l'UX pour maximiser vos conversions.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Import produits automatique",
            description: "Importation en masse de produits depuis AliExpress, CJ Dropshipping, Spocket. Images, descriptions, variantes et prix automatiquement synchronisés."
          },
          {
            title: "Automatisation des commandes",
            description: "Commandes automatiquement transférées aux fournisseurs, numéros de suivi importés, synchronisation statuts de livraison en temps réel."
          },
          {
            title: "Gestion multi-fournisseurs",
            description: "Connexion à plusieurs fournisseurs, sélection automatique du meilleur fournisseur par produit (prix, délai), gestion centralisée."
          },
          {
            title: "Gestion des marges et prix",
            description: "Calcul automatique des prix de vente avec marge définie, règles de tarification par catégorie, gestion des frais de livraison."
          },
          {
            title: "Optimisation SEO produits",
            description: "Réécriture des descriptions produits pour le SEO, images optimisées, balises meta, structure adaptée pour le référencement Google."
          },
          {
            title: "Marketing et publicité",
            description: "Configuration Google Ads et Facebook Ads, pixels de tracking, intégration avec vos campagnes marketing pour maximiser les ventes."
          }
        ]}
        pricing={[
          {
            name: "Starter",
            price: "À partir de 3 500€",
            features: [
              "Boutique dropshipping complète",
              "Connexion 1 fournisseur",
              "Import jusqu'à 100 produits",
              "Automatisation commandes",
              "Design responsive",
              "Paiement Stripe + PayPal",
              "Formation administration",
              "Support 2 mois"
            ]
          },
          {
            name: "Business",
            price: "À partir de 5 500€",
            popular: true,
            features: [
              "Connexion multi-fournisseurs",
              "Import illimité de produits",
              "Automatisation avancée",
              "Optimisation SEO produits",
              "Design premium personnalisé",
              "Marketing automation",
              "Formation marketing complète",
              "Support 4 mois"
            ]
          },
          {
            name: "Premium",
            price: "Sur devis",
            features: [
              "Dropshipping multi-niches",
              "Développements spécifiques",
              "Intégrations avancées (CRM)",
              "Programme de fidélité",
              "Multi-devises et multilingue",
              "Formation équipe approfondie",
              "Support prioritaire 6 mois",
              "Accompagnement stratégie"
            ]
          }
        ]}
        faq={[
          {
            question: "Qu'est-ce que le dropshipping et comment ça fonctionne ?",
            answer: "Le dropshipping est un modèle e-commerce où vous vendez des produits sans les stocker. Lorsqu'un client commande sur votre boutique, la commande est automatiquement transférée au fournisseur qui expédie directement au client. Vous ne gérez ni stock ni logistique, uniquement le marketing et les ventes."
          },
          {
            question: "Quels sont les avantages du dropshipping avec WooCommerce ?",
            answer: "Lancement rapide sans stock initial, catalogue illimité, flexibilité totale, pas de gestion logistique, investissement minimal. WooCommerce offre aussi propriété totale de votre boutique (pas de commission sur vos ventes contrairement à Shopify) et intégration facile avec les fournisseurs dropshipping."
          },
          {
            question: "Quels fournisseurs dropshipping recommandez-vous ?",
            answer: "Nous intégrons les fournisseurs les plus fiables : AliExpress (large catalogue, prix bas), CJ Dropshipping (qualité supérieure, expédition rapide depuis Europe), Spocket (fournisseurs USA/EU, délais courts), et Printful (impression à la demande). Le choix dépend de votre niche et marché cible."
          },
          {
            question: "Quels sont les délais de livraison en dropshipping ?",
            answer: "Cela dépend du fournisseur : AliExpress (15-30 jours depuis Chine), CJ Dropshipping (7-15 jours avec entrepôts EU), Spocket (5-10 jours USA/EU). Nous vous conseillons des fournisseurs avec entrepôts européens pour réduire les délais et améliorer la satisfaction client."
          },
          {
            question: "Le dropshipping est-il rentable en 2025 ?",
            answer: "Oui, mais la concurrence est forte. La rentabilité dépend de votre niche, qualité des produits, marketing et service client. Nous vous aidons à choisir une niche peu saturée, optimiser vos marges (30-50% recommandé), et configurer des campagnes publicitaires rentables (Google Ads, Facebook Ads)."
          },
          {
            question: "Comment gérer les retours et le service client en dropshipping ?",
            answer: "C'est un défi du dropshipping. Nous vous aidons à définir une politique de retour claire, négocier avec les fournisseurs pour gérer les retours, et mettre en place un service client réactif. La transparence et la qualité des fournisseurs sélectionnés sont clés pour limiter les problèmes."
          }
        ]}
        relatedServices={[
          {
            title: "Boutique WooCommerce",
            description: "Création de boutique en ligne complète",
            href: "/services/boutique-woocommerce-lyon",
            icon: <Package className="w-8 h-8" />
          },
          {
            title: "SEO E-commerce",
            description: "Référencement de votre boutique",
            href: "/services/seo-ecommerce-lyon",
            icon: <TrendingUp className="w-8 h-8" />
          }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default Dropshipping;
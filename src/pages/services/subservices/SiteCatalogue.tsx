import { Helmet } from "react-helmet";
import ServiceTemplate from "@/components/ServiceTemplate";
import { Package, ShoppingCart, Search, Grid } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import heroImage from "@/assets/site-catalogue-produits-lyon.jpg";

const SiteCatalogue = () => {
  return (
    <>
      <Helmet>
        <title>Site Catalogue Lyon | Présentation Produits - VKBack</title>
        <meta 
          name="description" 
          content="Création site catalogue à Lyon pour présenter vos produits sans vente en ligne. Fiches produits détaillées, filtres et recherche. Solution WordPress adaptée." 
        />
        <link rel="canonical" href="https://vkback.com/creation-site-catalogue-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Création de Site Internet", href: "/creation-site-internet-lyon" },
          { label: "Site Catalogue Lyon" }
        ]}
        painPointHook={{
          question: "Vous voulez présenter vos produits en ligne sans vendre directement ?",
          answer: "Un site catalogue est la solution idéale pour générer des demandes de devis."
        }}
        heroTitle="Création Site Catalogue à Lyon"
        heroSubtitle="Besoin d'un catalogue en ligne sans e-commerce ? Nous créons des sites catalogue WordPress avec fiches produits, filtres et formulaires de demande de devis."
        heroImage={heroImage}
        heroAlt="Création site catalogue Lyon - Présentation produits en ligne sans vente WordPress"
        ctaPrimary={{ label: "Créer mon catalogue", href: "/contact" }}
        ctaSecondary={{ label: "Voir les tarifs", href: "#tarifs" }}
        
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Le <strong>site catalogue</strong> permet de présenter vos produits ou services en ligne avec fiches détaillées, 
              images, caractéristiques et documentation, sans système de paiement ni panier d'achat.
            </p>
            <p className="text-lg leading-relaxed">
              Idéal pour les grossistes B2B, fabricants, distributeurs ou entreprises souhaitant une présence produits 
              avant de passer à l'e-commerce.
            </p>
          </div>
        }
        
        whySection={{
          title: "Pourquoi un Site Catalogue ?",
          content: (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg border">
                <Package className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Présentation Professionnelle</h3>
                <p className="text-muted-foreground">
                  Mettez en valeur vos produits avec fiches détaillées, galeries photos et documentation technique.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <Search className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Recherche et Filtres</h3>
                <p className="text-muted-foreground">
                  Facilitez la navigation avec système de recherche, filtres par catégories, prix, caractéristiques.
                </p>
              </div>
            </div>
          )
        }}
        
        expertise={{
          title: "Expertise Catalogue Produits WordPress",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Nous structurons votre catalogue WordPress pour faciliter la recherche et la découverte de vos produits. 
                Organisation logique, filtres pertinents et fiches détaillées pour convertir les visiteurs en prospects qualifiés.
              </p>
              <p className="text-lg">
                Avec WordPress et WooCommerce (désactivé pour le paiement), nous créons des catalogues professionnels 
                avec toute la puissance d'un site e-commerce mais orienté génération de leads. Idéal pour B2B, 
                grossistes et distributeurs qui vendent via leurs équipes commerciales.
              </p>
            </div>
          )
        }}
        
        features={[
          {
            title: "Fiches Produits Détaillées",
            description: "Descriptions complètes, galeries photos, caractéristiques techniques et documents PDF"
          },
          {
            title: "Organisation par Catégories",
            description: "Arborescence logique avec catégories, sous-catégories et tags pour navigation intuitive"
          },
          {
            title: "Système de Recherche Avancée",
            description: "Recherche puissante avec filtres multiples (prix, catégories, caractéristiques)"
          },
          {
            title: "Formulaires de Demande de Devis",
            description: "Formulaire de contact par produit pour demandes commerciales et devis personnalisés"
          },
          {
            title: "Import/Export Produits",
            description: "Import CSV pour ajout en masse et mise à jour facilitée de votre catalogue"
          },
          {
            title: "Espace Client Pro (Option)",
            description: "Accès réservé pour vos clients B2B avec tarifs personnalisés et documentation privée"
          }
        ]}
        
        pricing={[
          {
            name: "Site Catalogue Starter",
            price: "À partir de 2 800€",
            features: [
              "Design responsive",
              "Jusqu'à 50 produits",
              "3 catégories principales",
              "Recherche basique",
              "Formulaire de contact",
              "Formation 2h",
              "Import CSV"
            ]
          },
          {
            name: "Site Catalogue Business",
            price: "À partir de 3 500€",
            popular: true,
            features: [
              "Design personnalisé",
              "Jusqu'à 100 produits",
              "Catégories illimitées",
              "Recherche & filtres avancés",
              "Formulaires par produit",
              "Fiches techniques PDF",
              "Formation 3h",
              "Support 3 mois"
            ]
          },
          {
            name: "Site Catalogue Premium",
            price: "À partir de 5 500€",
            features: [
              "Tout du pack Business",
              "Produits illimités",
              "Espace client B2B",
              "Tarifs personnalisés clients",
              "Multilingue (2 langues)",
              "Import automatique",
              "Formation complète",
              "Support 6 mois"
            ]
          }
        ]}
        
        faq={[
          {
            question: "Quelle différence avec un site e-commerce ?",
            answer: "Le site catalogue présente vos produits mais sans panier d'achat, paiement en ligne ni gestion des commandes. C'est une solution intermédiaire entre site vitrine et e-commerce, idéale pour générer des demandes de devis ou orienter vers vos points de vente physiques."
          },
          {
            question: "Puis-je évoluer vers un e-commerce plus tard ?",
            answer: "Oui, la structure WordPress avec WooCommerce permet d'ajouter facilement les fonctionnalités e-commerce pour transformer le catalogue en boutique en ligne. C'est une évolution naturelle quand vous êtes prêt à vendre directement en ligne."
          },
          {
            question: "Comment gérer un grand nombre de produits ?",
            answer: "WordPress et WooCommerce (mode catalogue) permettent de gérer des milliers de produits avec imports CSV, gestion par lots, catégories illimitées et système de filtres avancé. L'interface d'administration WordPress facilite la mise à jour quotidienne de votre catalogue."
          },
          {
            question: "Puis-je intégrer des fiches techniques PDF ?",
            answer: "Absolument. Nous intégrons des zones de téléchargement pour vos fiches techniques, catalogues PDF, certificats et documentation produit. Les fichiers sont hébergés directement sur WordPress et facilement téléchargeables par vos clients."
          }
        ]}
        
        relatedServices={[
          {
            title: "Site E-commerce",
            description: "Boutique en ligne avec paiement",
            href: "/creation-site-ecommerce-lyon",
            icon: <ShoppingCart className="w-8 h-8" />
          },
          {
            title: "Site Vitrine",
            description: "Site de présentation classique",
            href: "/creation-site-vitrine-lyon",
            icon: <Grid className="w-8 h-8" />
          }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default SiteCatalogue;

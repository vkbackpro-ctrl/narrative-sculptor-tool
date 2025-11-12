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
        heroTitle="Création Site Catalogue à Lyon"
        heroSubtitle="Présentez vos produits en ligne avec un catalogue professionnel WordPress. Fiches produits détaillées, recherche et filtres, sans fonctionnalité e-commerce."
        heroImage="/placeholder.svg"
        heroAlt="Création site catalogue Lyon - Présentation produits en ligne sans vente WordPress"
        
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
          title: "Expertise Catalogue Produits",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Nous structurons votre catalogue pour faciliter la recherche et la découverte de vos produits. 
                Organisation logique, filtres pertinents et fiches détaillées pour convertir les visiteurs.
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
            description: "Arborescence logique avec catégories, sous-catégories et tags"
          },
          {
            title: "Système de Recherche",
            description: "Recherche avancée avec filtres multiples pour trouver rapidement les produits"
          },
          {
            title: "Demande de Devis",
            description: "Formulaire de contact par produit pour demandes commerciales"
          }
        ]}
        
        pricing={[
          {
            name: "Site Catalogue",
            price: "À partir de 3 500€",
            features: [
              "Design personnalisé",
              "Jusqu'à 100 produits",
              "Catégories et filtres",
              "Système de recherche",
              "Formulaires de contact",
              "Formation complète"
            ],
            popular: true
          }
        ]}
        
        faq={[
          {
            question: "Quelle différence avec un site e-commerce ?",
            answer: "Le site catalogue présente vos produits mais sans panier d'achat, paiement en ligne ni gestion des commandes. C'est une solution intermédiaire entre site vitrine et e-commerce, idéale pour générer des demandes de devis ou orienter vers vos points de vente physiques."
          },
          {
            question: "Puis-je évoluer vers un e-commerce plus tard ?",
            answer: "Oui, la structure WordPress permet d'ajouter facilement WooCommerce pour transformer le catalogue en boutique en ligne. C'est une évolution naturelle quand vous êtes prêt à vendre directement en ligne."
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

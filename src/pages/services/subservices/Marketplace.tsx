import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { Store, Users, DollarSign, BarChart3, Settings, Shield } from "lucide-react";
import marketplaceHero from "@/assets/developpement-web-technologie-moderne.jpg";

const Marketplace = () => {
  return (
    <>
      <Helmet>
        <title>Marketplace WooCommerce Lyon - Plateforme Multi-Vendeurs | VKBack</title>
        <meta name="description" content="Création de marketplace WooCommerce à Lyon. Plateforme e-commerce multi-vendeurs avec gestion des commissions, vendeurs, paiements et tableau de bord." />
        <link rel="canonical" href="https://vkback.fr/services/marketplace-woocommerce-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon - Marketplace WooCommerce Lyon", href: "/services/marketplace-woocommerce-lyon" }
        ]}
        heroTitle="Marketplace WooCommerce Lyon"
        heroSubtitle="Créez votre plateforme e-commerce multi-vendeurs avec WooCommerce. Gérez vendeurs, commissions, paiements et produits depuis une interface unique."
        heroImage={marketplaceHero}
        heroAlt="Création plateforme marketplace multi-vendeurs WooCommerce à Lyon"
        introduction={[
          { type: 'text', content: "Vous souhaitez créer une plateforme e-commerce type Amazon, Etsy ou Leboncoin où plusieurs vendeurs peuvent vendre leurs produits ? Notre agence web à Lyon développe des marketplaces complètes sous WooCommerce avec gestion des vendeurs, commissions et paiements." },
          { type: 'text', content: "Une marketplace multi-vendeurs permet de multiplier rapidement votre catalogue produits sans investissement stock, tout en générant des revenus via les commissions prélevées sur chaque vente. WooCommerce, avec les bonnes extensions (Dokan, WC Vendors), offre une solution marketplace professionnelle et évolutive." }
        ]}
        whySection={{
          title: "Pourquoi créer une marketplace avec WooCommerce ?",
          content: [
            { type: 'subtitle', content: "Modèle économique rentable et scalable" },
            { type: 'text', content: "Vous générez des revenus via les commissions sans avoir à gérer de stock ni à créer les produits. Plus vous avez de vendeurs, plus votre catalogue et votre chiffre d'affaires augmentent, sans coût proportionnel." },
            { type: 'subtitle', content: "Flexibilité et contrôle total" },
            { type: 'text', content: "Contrairement aux solutions SaaS marketplace coûteuses (Mirakl, Sharetribe), WooCommerce vous offre une propriété totale de votre plateforme, des données et de la relation client, sans commission externe sur vos ventes." }
          ]
        }}
        expertise={{
          title: "Notre expertise Marketplace à Lyon",
          content: [
            { type: 'text', content: "Avec plus de 10 ans d'expérience en développement e-commerce à Lyon, nous avons créé plusieurs marketplaces performantes pour des clients de la région Rhône-Alpes et au-delà." },
            { type: 'text', content: "Nous configurons votre marketplace de A à Z : inscription et validation des vendeurs, tableau de bord vendeur (produits, commandes, statistiques), gestion des commissions (fixe, pourcentage, hybride), paiements split automatiques, système d'avis vendeurs, et modération des produits. Nous intégrons aussi les outils essentiels : messagerie vendeur-acheteur, gestion des litiges, et reporting global." }
          ]
        }}
        features={[
          {
            icon: Users,
            title: "Gestion multi-vendeurs",
            description: "Inscription vendeurs, validation manuelle/automatique, tableau de bord dédié, gestion des produits, stocks et commandes par vendeur."
          },
          {
            icon: DollarSign,
            title: "Commissions personnalisables",
            description: "Système de commissions flexible : fixe, pourcentage, par catégorie, par vendeur. Paiements automatisés vers les vendeurs (split payment)."
          },
          {
            icon: Store,
            title: "Pages boutiques vendeurs",
            description: "Chaque vendeur dispose de sa page boutique personnalisée avec logo, description, avis clients et catalogue produits."
          },
          {
            icon: BarChart3,
            title: "Tableaux de bord et statistiques",
            description: "Dashboard admin global et dashboard vendeur individuel : ventes, commandes, produits, commissions, statistiques détaillées."
          },
          {
            icon: Settings,
            title: "Modération et validation",
            description: "Modération des vendeurs et produits, validation manuelle, gestion des litiges, système de signalement, contrôle qualité."
          },
          {
            icon: Shield,
            title: "Paiements sécurisés split",
            description: "Paiements split automatiques : l'acheteur paie en une fois, les montants sont répartis entre vendeurs et plateforme (commission)."
          }
        ]}
        pricing={[
          {
            name: "Starter",
            price: "À partir de 12 000€",
            features: [
              "Jusqu'à 20 vendeurs",
              "Marketplace WooCommerce complète",
              "Gestion commissions basique",
              "Tableaux de bord vendeurs",
              "Paiements split",
              "Design responsive",
              "Formation administration",
              "Support 3 mois"
            ]
          },
          {
            name: "Business",
            price: "À partir de 18 000€",
            popular: true,
            features: [
              "Vendeurs illimités",
              "Système commissions avancé",
              "Modération et validation",
              "Pages boutiques personnalisées",
              "Messagerie vendeur-acheteur",
              "Avis et notation vendeurs",
              "SEO marketplace optimisé",
              "Formation complète",
              "Support 6 mois"
            ]
          },
          {
            name: "Premium",
            price: "Sur devis",
            features: [
              "Marketplace complexe multi-niveaux",
              "Développements spécifiques",
              "Intégrations ERP/CRM",
              "Programme de fidélité",
              "Abonnements vendeurs payants",
              "Multi-devises et multilingue",
              "Formation équipe approfondie",
              "Support prioritaire 12 mois"
            ]
          }
        ]}
        faq={[
          {
            question: "Quelle est la différence entre une boutique et une marketplace ?",
            answer: "Une boutique WooCommerce classique a un seul propriétaire qui vend ses propres produits. Une marketplace permet à plusieurs vendeurs indépendants de vendre leurs produits sur votre plateforme, en échange d'une commission prélevée sur chaque vente."
          },
          {
            question: "Comment fonctionnent les paiements sur une marketplace WooCommerce ?",
            answer: "Le client paie en une fois sur la plateforme. Le montant est automatiquement réparti (split payment) : votre commission va sur votre compte, et le reste est versé au vendeur. Nous utilisons Stripe Connect ou PayPal pour gérer ces paiements split de façon sécurisée."
          },
          {
            question: "Comment définir les commissions prélevées sur les ventes ?",
            answer: "Vous définissez librement vos taux de commission : pourcentage fixe (ex: 15% par vente), montant fixe par transaction, ou mixte. Vous pouvez aussi varier les commissions par catégorie de produits ou par vendeur selon vos règles business."
          },
          {
            question: "Combien de vendeurs peut gérer une marketplace WooCommerce ?",
            answer: "Techniquement, WooCommerce peut gérer des centaines voire milliers de vendeurs. La limite dépend de votre hébergement et de l'optimisation technique. Nous dimensionnons l'infrastructure selon vos projections de croissance."
          },
          {
            question: "Combien de temps faut-il pour créer une marketplace WooCommerce ?",
            answer: "Une marketplace starter (jusqu'à 20 vendeurs, fonctionnalités standard) demande 8-12 semaines. Une marketplace business complète prend 12-16 semaines. Une marketplace premium avec développements custom peut prendre 4-6 mois."
          },
          {
            question: "Puis-je modérer les produits et vendeurs de ma marketplace ?",
            answer: "Oui, absolument ! Vous avez un contrôle total : validation manuelle des nouveaux vendeurs, modération des produits avant publication, gestion des signalements, suspension/bannissement de vendeurs, et règles de qualité personnalisables."
          }
        ]}
        relatedServices={[
          {
            name: "Boutique WooCommerce",
            href: "/services/boutique-woocommerce-lyon",
            icon: Store
          },
          {
            name: "SEO E-commerce",
            href: "/services/seo-ecommerce-lyon",
            icon: BarChart3
          }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default Marketplace;
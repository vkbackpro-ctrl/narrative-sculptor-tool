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
        <title>Marketplace WooCommerce Lyon | Multi-Vendeurs - VKBack</title>
        <meta name="description" content="Création de marketplace WooCommerce à Lyon. Plateforme e-commerce multi-vendeurs avec gestion des commissions, vendeurs, paiements et tableau de bord." />
        <link rel="canonical" href="https://vkback.com/marketplace-woocommerce-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Quelle est la différence entre une boutique et une marketplace ?", "acceptedAnswer": { "@type": "Answer", "text": "Une boutique WooCommerce classique a un seul propriétaire qui vend ses propres produits. Une marketplace permet à plusieurs vendeurs indépendants de vendre leurs produits sur votre plateforme, en échange d'une commission prélevée sur chaque vente." }},
              { "@type": "Question", "name": "Comment fonctionnent les paiements sur une marketplace WooCommerce ?", "acceptedAnswer": { "@type": "Answer", "text": "Le client paie en une fois sur la plateforme. Le montant est automatiquement réparti (split payment) : votre commission va sur votre compte, et le reste est versé au vendeur. Nous utilisons Stripe Connect ou PayPal pour gérer ces paiements split de façon sécurisée." }},
              { "@type": "Question", "name": "Comment définir les commissions prélevées sur les ventes ?", "acceptedAnswer": { "@type": "Answer", "text": "Vous définissez librement vos taux de commission : pourcentage fixe (ex: 15% par vente), montant fixe par transaction, ou mixte. Vous pouvez aussi varier les commissions par catégorie de produits ou par vendeur selon vos règles business." }},
              { "@type": "Question", "name": "Combien de vendeurs peut gérer une marketplace WooCommerce ?", "acceptedAnswer": { "@type": "Answer", "text": "Techniquement, WooCommerce peut gérer des centaines voire milliers de vendeurs. La limite dépend de votre hébergement et de l'optimisation technique. Nous dimensionnons l'infrastructure selon vos projections de croissance." }},
              { "@type": "Question", "name": "Combien de temps faut-il pour créer une marketplace WooCommerce ?", "acceptedAnswer": { "@type": "Answer", "text": "Une marketplace starter (jusqu'à 20 vendeurs, fonctionnalités standard) demande 8-12 semaines. Une marketplace business complète prend 12-16 semaines. Une marketplace premium avec développements custom peut prendre 4-6 mois." }},
              { "@type": "Question", "name": "Puis-je modérer les produits et vendeurs de ma marketplace ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, absolument ! Vous avez un contrôle total : validation manuelle des nouveaux vendeurs, modération des produits avant publication, gestion des signalements, suspension/bannissement de vendeurs, et règles de qualité personnalisables." }}
            ]
          })}
        </script>
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Sites E-commerce Lyon", href: "/creation-site-ecommerce-lyon" },
          { label: "Marketplace WooCommerce Lyon" }
        ]}
        painPointHook={{
          question: "Vous rêvez de créer votre propre Etsy, Amazon ou Leboncoin ?",
          answer: "Une marketplace multi-vendeurs est à votre portée avec WooCommerce."
        }}
        painPoints={[
          { problem: "Vous voulez vendre sans créer de produits", solution: "Les vendeurs créent le catalogue, vous prenez des commissions", icon: "💰" },
          { problem: "Solutions marketplace SaaS trop chères", solution: "WooCommerce sans commission externe sur vos ventes", icon: "🏷️" },
          { problem: "Gestion complexe des paiements vendeurs", solution: "Split payment automatique avec Stripe Connect", icon: "💳" },
          { problem: "Modération des vendeurs chronophage", solution: "Outils de validation et gestion intégrés", icon: "✅" }
        ]}
        heroTitle="Marketplace WooCommerce Lyon"
        heroSubtitle="Envie de lancer une plateforme où plusieurs vendeurs peuvent proposer leurs produits ? Nous créons des marketplaces WooCommerce complètes avec gestion des commissions."
        heroImage={marketplaceHero}
        heroAlt="Création plateforme marketplace multi-vendeurs WooCommerce à Lyon"
        ctaPrimary={{ label: "Créer ma marketplace", href: "/contact" }}
        ctaSecondary={{ label: "Voir les tarifs", href: "#tarifs" }}
        schemaServiceName="Marketplace WooCommerce Lyon"
        schemaServiceDescription="Création de marketplace WooCommerce à Lyon. Plateforme e-commerce multi-vendeurs avec gestion des commissions, vendeurs, paiements et tableau de bord."
        schemaServicePrice="À partir de 12 000€"
        schemaPageUrl="https://vkback.com/marketplace-woocommerce-lyon"
        schemaServicePriceRange="12000€ - 30000€"
        schemaServiceKeywords={["marketplace WooCommerce Lyon", "création plateforme multi-vendeurs Villeurbanne", "marketplace e-commerce Lyon 6", "site type Amazon local Rhône-Alpes", "développement marketplace Lyon Part-Dieu", "agence marketplace Caluire", "plateforme vente multi-vendeurs Écully"]}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Vous souhaitez créer une plateforme e-commerce type Amazon, Etsy ou Leboncoin où plusieurs vendeurs peuvent vendre leurs produits ? Notre agence web à Lyon développe des marketplaces complètes sous WooCommerce avec gestion des vendeurs, commissions et paiements.
            </p>
            <p className="text-lg leading-relaxed">
              Une marketplace multi-vendeurs permet de multiplier rapidement votre catalogue produits sans investissement stock, tout en générant des revenus via les commissions prélevées sur chaque vente. WooCommerce, avec les bonnes extensions (Dokan, WC Vendors), offre une solution marketplace professionnelle et évolutive.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi créer une marketplace avec WooCommerce ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Modèle économique rentable et scalable</h3>
                <p className="text-lg text-muted-foreground">
                  Vous générez des revenus via les commissions sans avoir à gérer de stock ni à créer les produits. Plus vous avez de vendeurs, plus votre catalogue et votre chiffre d'affaires augmentent, sans coût proportionnel.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Flexibilité et contrôle total</h3>
                <p className="text-lg text-muted-foreground">
                  Contrairement aux solutions SaaS marketplace coûteuses (Mirakl, Sharetribe), WooCommerce vous offre une propriété totale de votre plateforme, des données et de la relation client, sans commission externe sur vos ventes.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre expertise Marketplace à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Avec plus de 10 ans d'expérience en développement e-commerce à Lyon, nous avons créé plusieurs marketplaces performantes pour des clients de la région Rhône-Alpes et au-delà.
              </p>
              <p className="text-lg">
                Nous configurons votre marketplace de A à Z : inscription et validation des vendeurs, tableau de bord vendeur (produits, commandes, statistiques), gestion des commissions (fixe, pourcentage, hybride), paiements split automatiques, système d'avis vendeurs, et modération des produits. Nous intégrons aussi les outils essentiels : messagerie vendeur-acheteur, gestion des litiges, et reporting global.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Gestion multi-vendeurs",
            description: "Inscription vendeurs, validation manuelle/automatique, tableau de bord dédié, gestion des produits, stocks et commandes par vendeur."
          },
          {
            title: "Commissions personnalisables",
            description: "Système de commissions flexible : fixe, pourcentage, par catégorie, par vendeur. Paiements automatisés vers les vendeurs (split payment)."
          },
          {
            title: "Pages boutiques vendeurs",
            description: "Chaque vendeur dispose de sa page boutique personnalisée avec logo, description, avis clients et catalogue produits."
          },
          {
            title: "Tableaux de bord et statistiques",
            description: "Dashboard admin global et dashboard vendeur individuel : ventes, commandes, produits, commissions, statistiques détaillées."
          },
          {
            title: "Modération et validation",
            description: "Modération des vendeurs et produits, validation manuelle, gestion des litiges, système de signalement, contrôle qualité."
          },
          {
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
            title: "Boutique WooCommerce",
            description: "Création de boutique en ligne complète",
            href: "/services/boutique-woocommerce-lyon",
            icon: <Store className="w-8 h-8" />
          },
          {
            title: "SEO E-commerce",
            description: "Référencement de votre boutique",
            href: "/services/seo-ecommerce-lyon",
            icon: <BarChart3 className="w-8 h-8" />
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
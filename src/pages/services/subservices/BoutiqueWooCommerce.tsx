import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { ShoppingBag, Package, CreditCard, Truck, BarChart3, Shield } from "lucide-react";
import boutiqueHero from "@/assets/creation-site-ecommerce-woocommerce-lyon.jpg";

const BoutiqueWooCommerce = () => {
  return (
    <>
      <Helmet>
        <title>Boutique WooCommerce Lyon | Création E-commerce - VKBack</title>
        <meta name="description" content="Création de boutique en ligne WooCommerce à Lyon. Solution e-commerce complète avec WordPress : gestion produits, paiements sécurisés, livraison optimisée." />
        <link rel="canonical" href="https://vkback.com/services/boutique-woocommerce-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Pourquoi choisir WooCommerce plutôt qu'une solution SaaS comme Shopify ?", "acceptedAnswer": { "@type": "Answer", "text": "WooCommerce vous offre une liberté totale sans commission sur vos ventes ni abonnement mensuel obligatoire. Vous êtes propriétaire de votre site et de vos données. La personnalisation est illimitée et les coûts sont maîtrisés, surtout sur le long terme." }},
              { "@type": "Question", "name": "Combien de temps faut-il pour créer une boutique WooCommerce ?", "acceptedAnswer": { "@type": "Answer", "text": "Une boutique starter est livrée en 4-6 semaines. Une boutique Business avec personnalisation avancée demande 6-10 semaines. Le délai dépend du nombre de produits, des intégrations nécessaires et de la complexité du design." }},
              { "@type": "Question", "name": "Quels sont les coûts récurrents après la création ?", "acceptedAnswer": { "@type": "Answer", "text": "Les coûts récurrents sont : hébergement web (10-50€/mois selon le trafic), nom de domaine (15€/an), certificat SSL (souvent inclus), et éventuellement extensions premium (0-100€/an). Pas de commission sur vos ventes contrairement aux plateformes SaaS." }},
              { "@type": "Question", "name": "Puis-je gérer moi-même ma boutique WooCommerce ?", "acceptedAnswer": { "@type": "Answer", "text": "Absolument ! Nous vous formons à l'administration complète de votre boutique : ajout de produits, gestion des commandes, stocks, codes promo, et paramètres. L'interface WooCommerce est intuitive et pensée pour les non-techniciens." }},
              { "@type": "Question", "name": "WooCommerce est-il adapté pour vendre des services ou des abonnements ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, WooCommerce gère aussi bien les produits physiques que virtuels, téléchargeables, les réservations, les abonnements mensuels et les adhésions. C'est une solution e-commerce complète et polyvalente." }},
              { "@type": "Question", "name": "Comment gérez-vous la conformité RGPD et la sécurité des paiements ?", "acceptedAnswer": { "@type": "Answer", "text": "Toutes nos boutiques WooCommerce incluent : certificat SSL, conformité RGPD (consentement cookies, politique de confidentialité), paiements sécurisés via passerelles certifiées PCI-DSS (Stripe, PayPal), et sauvegardes automatiques quotidiennes." }}
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
          { label: "Boutique WooCommerce Lyon" }
        ]}
        painPointHook={{
          question: "Prêt à vendre en ligne mais ne savez pas par où commencer ?",
          answer: "Créer une boutique qui vend vraiment, c'est notre métier depuis 14 ans."
        }}
        painPoints={[
          { problem: "Les commissions Shopify/SaaS grignotent vos marges", solution: "WooCommerce : 0% commission sur vos ventes", icon: "💰" },
          { problem: "Votre boutique actuelle est limitée en personnalisation", solution: "Liberté totale de design et fonctionnalités", icon: "🎨" },
          { problem: "Vous voulez maîtriser vos données clients", solution: "Propriétaire de 100% de vos données", icon: "🔐" },
          { problem: "Besoin d'une solution évolutive", solution: "WooCommerce grandit avec votre business", icon: "📈" }
        ]}
        heroTitle="Boutique WooCommerce Lyon"
        heroSubtitle="Vous voulez vendre vos produits en ligne sans vous ruiner en commissions ? Nous créons des boutiques WooCommerce complètes, prêtes à générer des ventes dès le lancement."
        heroImage={boutiqueHero}
        heroAlt="Création boutique en ligne WooCommerce WordPress à Lyon"
        ctaPrimary={{ label: "Créer ma boutique", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos réalisations", href: "/realisations" }}
        schemaServiceName="Boutique WooCommerce Lyon"
        schemaServiceDescription="Création de boutique en ligne WooCommerce à Lyon. Solution e-commerce complète avec WordPress : gestion produits, paiements sécurisés, livraison optimisée."
        schemaServicePrice="À partir de 5 000€"
        schemaPageUrl="https://vkback.com/services/boutique-woocommerce-lyon"
        schemaServicePriceRange="5000€ - 15000€"
        schemaServiceKeywords={["création boutique WooCommerce Lyon", "agence e-commerce Lyon", "site e-commerce WordPress Villeurbanne", "boutique en ligne Lyon 3", "création site marchand Lyon Part-Dieu", "développeur WooCommerce Rhône-Alpes", "agence WooCommerce Caluire", "e-commerce WordPress Écully"]}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Vous souhaitez vendre vos produits en ligne ? Notre agence web à Lyon crée votre boutique WooCommerce sur-mesure, complète et prête à générer des ventes.
            </p>
            <p className="text-lg leading-relaxed">
              WooCommerce est la solution e-commerce la plus utilisée au monde, représentant plus de 28% des boutiques en ligne. Flexible, évolutive et parfaitement intégrée à WordPress, elle vous offre un contrôle total sur votre commerce en ligne.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi choisir WooCommerce pour votre boutique en ligne ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Flexibilité et personnalisation totale</h3>
                <p className="text-lg text-muted-foreground">
                  Contrairement aux solutions SaaS limitées, WooCommerce vous offre une liberté totale de personnalisation. Design unique, fonctionnalités sur-mesure, intégrations illimitées : tout est possible.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Coûts maîtrisés et évolutivité</h3>
                <p className="text-lg text-muted-foreground">
                  Pas de commission sur vos ventes, pas d'abonnement mensuel obligatoire. Vous payez une seule fois pour la création, puis contrôlez vos coûts d'hébergement. Votre boutique évolue avec votre business sans surcoût.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre expertise WooCommerce à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Avec plus de 10 ans d'expérience dans la création de boutiques en ligne WooCommerce à Lyon et dans la région Rhône-Alpes, nous maîtrisons tous les aspects techniques et marketing de l'e-commerce.
              </p>
              <p className="text-lg">
                Nous configurons chaque boutique avec attention : gestion des produits et variations, moyens de paiement sécurisés (Stripe, PayPal, CB), options de livraison optimisées, emails transactionnels, et optimisation SEO e-commerce pour maximiser votre visibilité sur Google.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Catalogue produits complet",
            description: "Gestion illimitée de produits physiques et virtuels avec variations (tailles, couleurs), catégories, tags et filtres de recherche."
          },
          {
            title: "Paiements sécurisés",
            description: "Intégration Stripe, PayPal, carte bancaire. Paiement en plusieurs fois, codes promo et bons cadeaux inclus."
          },
          {
            title: "Gestion livraison",
            description: "Configuration des zones de livraison, tarifs par poids/destination, retrait en magasin, suivi de commandes et emails automatiques."
          },
          {
            title: "Gestion des stocks",
            description: "Suivi automatique des stocks, alertes de rupture, gestion des retours et remboursements intégrée."
          },
          {
            title: "Rapports et statistiques",
            description: "Tableau de bord complet avec CA, commandes, produits populaires, et intégration Google Analytics e-commerce."
          },
          {
            title: "Sécurité renforcée",
            description: "Certificat SSL, protection anti-fraude, sauvegarde automatique, conformité RGPD et paiements sécurisés PCI-DSS."
          }
        ]}
        pricing={[
          {
            name: "Starter",
            price: "À partir de 5 000€",
            features: [
              "Jusqu'à 50 produits",
              "Design responsive WooCommerce",
              "Paiement CB + PayPal",
              "2 modes de livraison",
              "Gestion stocks basique",
              "Formation administration",
              "Support 3 mois"
            ]
          },
          {
            name: "Business",
            price: "À partir de 8 000€",
            popular: true,
            features: [
              "Produits illimités + variations",
              "Design premium personnalisé",
              "Paiements multiples (Stripe, 3x sans frais)",
              "Livraison avancée (zones, tarifs)",
              "Codes promo et bons cadeaux",
              "SEO e-commerce optimisé",
              "Formation complète",
              "Support 6 mois"
            ]
          },
          {
            name: "Premium",
            price: "Sur devis",
            features: [
              "Marketplace multi-vendeurs",
              "Intégrations ERP/CRM",
              "Configurateur de produits",
              "Programme de fidélité",
              "Abonnements et ventes récurrentes",
              "Multi-devises et multilingue",
              "Formation équipe complète",
              "Support prioritaire 12 mois"
            ]
          }
        ]}
        faq={[
          {
            question: "Pourquoi choisir WooCommerce plutôt qu'une solution SaaS comme Shopify ?",
            answer: "WooCommerce vous offre une liberté totale sans commission sur vos ventes ni abonnement mensuel obligatoire. Vous êtes propriétaire de votre site et de vos données. La personnalisation est illimitée et les coûts sont maîtrisés, surtout sur le long terme."
          },
          {
            question: "Combien de temps faut-il pour créer une boutique WooCommerce ?",
            answer: "Une boutique starter est livrée en 4-6 semaines. Une boutique Business avec personnalisation avancée demande 6-10 semaines. Le délai dépend du nombre de produits, des intégrations nécessaires et de la complexité du design."
          },
          {
            question: "Quels sont les coûts récurrents après la création ?",
            answer: "Les coûts récurrents sont : hébergement web (10-50€/mois selon le trafic), nom de domaine (15€/an), certificat SSL (souvent inclus), et éventuellement extensions premium (0-100€/an). Pas de commission sur vos ventes contrairement aux plateformes SaaS."
          },
          {
            question: "Puis-je gérer moi-même ma boutique WooCommerce ?",
            answer: "Absolument ! Nous vous formons à l'administration complète de votre boutique : ajout de produits, gestion des commandes, stocks, codes promo, et paramètres. L'interface WooCommerce est intuitive et pensée pour les non-techniciens."
          },
          {
            question: "WooCommerce est-il adapté pour vendre des services ou des abonnements ?",
            answer: "Oui, WooCommerce gère aussi bien les produits physiques que virtuels, téléchargeables, les réservations, les abonnements mensuels et les adhésions. C'est une solution e-commerce complète et polyvalente."
          },
          {
            question: "Comment gérez-vous la conformité RGPD et la sécurité des paiements ?",
            answer: "Toutes nos boutiques WooCommerce incluent : certificat SSL, conformité RGPD (consentement cookies, politique de confidentialité), paiements sécurisés via passerelles certifiées PCI-DSS (Stripe, PayPal), et sauvegardes automatiques quotidiennes."
          }
        ]}
        relatedServices={[
          {
            title: "Migration WooCommerce",
            description: "Transfert de votre boutique vers WooCommerce",
            href: "/services/migration-woocommerce-lyon",
            icon: <Package className="w-8 h-8" />
          },
          {
            title: "SEO E-commerce",
            description: "Référencement de votre boutique en ligne",
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

export default BoutiqueWooCommerce;
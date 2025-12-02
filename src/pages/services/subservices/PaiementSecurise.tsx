import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { CreditCard, Shield, Lock, CheckCircle, Zap, Globe } from "lucide-react";
import paiementHero from "@/assets/developpement-web-technologie-moderne.jpg";

const PaiementSecurise = () => {
  return (
    <>
      <Helmet>
        <title>Paiement Sécurisé WooCommerce Lyon | Stripe CB - VKBack</title>
        <meta name="description" content="Intégration de solutions de paiement sécurisé pour WooCommerce à Lyon. Stripe, PayPal, CB, paiement 3x sans frais, conformité PCI-DSS et 3D Secure." />
        <link rel="canonical" href="https://vkback.com/services/paiement-securise-woocommerce-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Quelles sont les meilleures solutions de paiement pour WooCommerce ?", "acceptedAnswer": { "@type": "Answer", "text": "Stripe et PayPal sont les solutions les plus populaires et fiables. Stripe offre une expérience moderne avec CB directement sur votre site. PayPal rassure les acheteurs et offre aussi le paiement CB. Nous recommandons d'intégrer les deux pour maximiser la conversion." }},
              { "@type": "Question", "name": "Quels sont les frais de transaction des passerelles de paiement ?", "acceptedAnswer": { "@type": "Answer", "text": "Stripe prélève environ 1,4% + 0,25€ par transaction en France. PayPal facture environ 2,49% + 0,25€. Les solutions de paiement fractionné prennent 3% à 4%. Ces frais sont standards dans l'industrie et dégressifs selon votre volume." }},
              { "@type": "Question", "name": "Qu'est-ce que le 3D Secure et est-il obligatoire ?", "acceptedAnswer": { "@type": "Answer", "text": "Le 3D Secure est une authentification forte obligatoire en Europe depuis la directive DSP2 (2021). Le client doit valider le paiement via SMS, app bancaire ou code. Stripe et PayPal gèrent automatiquement cette étape. C'est obligatoire et protège contre la fraude." }},
              { "@type": "Question", "name": "Le paiement en plusieurs fois augmente-t-il vraiment les ventes ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, le paiement fractionné (3x ou 4x sans frais) augmente le panier moyen de 30% à 50% et améliore la conversion, surtout sur des montants élevés (>150€). Les clients préfèrent étaler le paiement. Les solutions comme Alma ou Klarna sont très populaires." }},
              { "@type": "Question", "name": "Comment rassurer mes clients sur la sécurité du paiement ?", "acceptedAnswer": { "@type": "Answer", "text": "Affichez les badges de sécurité (SSL, PCI-DSS, 3D Secure), les logos des passerelles (Stripe, PayPal), et mentionnez clairement que les données bancaires ne sont jamais stockées sur votre site. Nous intégrons tous ces éléments de réassurance pour maximiser la confiance." }},
              { "@type": "Question", "name": "Puis-je accepter des paiements internationaux et multi-devises ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, Stripe et PayPal permettent d'accepter des paiements internationaux en plusieurs devises (EUR, USD, GBP, etc.). WooCommerce peut afficher les prix dans la devise du visiteur et convertir automatiquement. Idéal pour vendre à l'international." }}
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
          { label: "Paiement Sécurisé WooCommerce Lyon" }
        ]}
        painPointHook={{
          question: "Vos clients abandonnent au paiement ? Ils ne font pas confiance ?",
          answer: "Un checkout mal configuré fait fuir les acheteurs. Sécurisons tout ça."
        }}
        painPoints={[
          { problem: "Abandons au moment du paiement", solution: "Checkout optimisé avec paiement en un clic", icon: "🛒" },
          { problem: "Clients méfiants sans badges de sécurité", solution: "SSL, 3D Secure et badges de confiance visibles", icon: "🔒" },
          { problem: "Paniers élevés qui ne convertissent pas", solution: "Paiement 3x/4x sans frais pour faciliter l'achat", icon: "💳" },
          { problem: "Fraude et chargebacks fréquents", solution: "Protection anti-fraude Stripe Radar activée", icon: "🛡️" }
        ]}
        heroTitle="Paiement Sécurisé WooCommerce Lyon"
        heroSubtitle="Taux d'abandon panier élevé ? Clients méfiants ? Nous intégrons Stripe, PayPal, CB et paiement 3x pour rassurer et convertir plus de visiteurs."
        heroImage={paiementHero}
        heroAlt="Intégration paiement sécurisé Stripe PayPal WooCommerce à Lyon"
        ctaPrimary={{ label: "Sécuriser mes paiements", href: "/contact" }}
        ctaSecondary={{ label: "Voir les solutions", href: "#tarifs" }}
        schemaServiceName="Paiement Sécurisé WooCommerce Lyon"
        schemaServiceDescription="Intégration de solutions de paiement sécurisé pour WooCommerce à Lyon. Stripe, PayPal, CB, paiement 3x sans frais, conformité PCI-DSS et 3D Secure."
        schemaServicePrice="À partir de 800€"
        schemaPageUrl="https://vkback.com/services/paiement-securise-woocommerce-lyon"
        schemaServicePriceRange="800€ - 3000€"
        schemaServiceKeywords={["paiement sécurisé WooCommerce Lyon", "intégration Stripe Lyon", "configuration PayPal e-commerce Villeurbanne", "paiement 3x sans frais Lyon 2", "passerelle paiement Rhône-Alpes", "solution paiement boutique Lyon Part-Dieu", "paiement CB WooCommerce Caluire"]}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              La confiance dans le processus de paiement est cruciale pour convertir vos visiteurs en clients. Notre agence web à Lyon intègre et configure les solutions de paiement les plus sécurisées et les plus populaires pour votre boutique WooCommerce.
            </p>
            <p className="text-lg leading-relaxed">
              Nous vous aidons à choisir et configurer les passerelles de paiement adaptées à votre activité : Stripe (paiement par CB le plus moderne), PayPal (rassurant et populaire), paiement en plusieurs fois sans frais, virement bancaire, et solutions locales. Nous garantissons conformité PCI-DSS, 3D Secure et sécurité maximale.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi les paiements sécurisés sont essentiels ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Confiance et taux de conversion</h3>
                <p className="text-lg text-muted-foreground">
                  73% des abandons de panier sont dus à un manque de confiance dans le processus de paiement. Proposer plusieurs moyens de paiement reconnus (Stripe, PayPal, CB) et afficher les badges de sécurité augmente la conversion de 20% à 40%.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Conformité et protection anti-fraude</h3>
                <p className="text-lg text-muted-foreground">
                  Les normes PCI-DSS et 3D Secure sont obligatoires en Europe. Nous configurons votre boutique pour être 100% conforme, protéger vos clients, et vous prémunir contre la fraude et les chargebacks.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre expertise Paiements E-commerce à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Avec plus de 10 ans d'expérience dans l'intégration de solutions de paiement e-commerce à Lyon et dans la région Rhône-Alpes, nous maîtrisons toutes les passerelles de paiement populaires.
              </p>
              <p className="text-lg">
                Nous configurons vos comptes marchands (Stripe, PayPal), intégrons les passerelles dans WooCommerce, activons le 3D Secure, paramétrons les devises et modes de paiement, et mettons en place les éléments de réassurance (badges SSL, certification PCI-DSS). Nous testons rigoureusement chaque scénario de paiement avant mise en production.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Stripe - Paiement CB moderne",
            description: "Intégration Stripe pour paiement par carte bancaire : Visa, Mastercard, Amex. Interface moderne, checkout optimisé, Apple Pay et Google Pay."
          },
          {
            title: "PayPal - Solution populaire",
            description: "Intégration PayPal complète : paiement avec compte PayPal, paiement CB via PayPal, PayPal Express Checkout pour paiement rapide."
          },
          {
            title: "3D Secure et anti-fraude",
            description: "Activation 3D Secure obligatoire (DSP2), protection anti-fraude Stripe Radar, filtres et règles personnalisées pour bloquer les transactions suspectes."
          },
          {
            title: "Paiement en plusieurs fois",
            description: "Intégration solutions de paiement fractionné : 3x sans frais, 4x sans frais, paiement différé. Augmente le panier moyen de 30% à 50%."
          },
          {
            title: "Checkout optimisé et rapide",
            description: "Formulaire de paiement simplifié, paiement en un clic, mémorisation des cartes bancaires, Apple Pay et Google Pay pour paiement express."
          },
          {
            title: "Multi-devises et international",
            description: "Acceptation de paiements en plusieurs devises, conversion automatique, géolocalisation, adaptation des moyens de paiement par pays."
          }
        ]}
        pricing={[
          {
            name: "Configuration Standard",
            price: "À partir de 800€",
            features: [
              "Intégration Stripe ou PayPal",
              "Configuration compte marchand",
              "Activation 3D Secure",
              "Tests de paiement complets",
              "Certificat SSL inclus",
              "Formation gestion paiements",
              "Support 1 mois"
            ]
          },
          {
            name: "Configuration Avancée",
            price: "À partir de 1 500€",
            popular: true,
            features: [
              "Stripe + PayPal + CB",
              "Paiement 3x/4x sans frais",
              "Anti-fraude Stripe Radar",
              "Apple Pay & Google Pay",
              "Checkout optimisé",
              "Badges réassurance",
              "Formation complète",
              "Support 3 mois"
            ]
          },
          {
            name: "Configuration Premium",
            price: "À partir de 3 000€",
            features: [
              "Multi-passerelles avancées",
              "Paiements internationaux multi-devises",
              "Solutions locales (Bancontact, iDeal)",
              "Split payments (marketplace)",
              "Abonnements et récurrence",
              "Développements spécifiques",
              "Support prioritaire 6 mois"
            ]
          }
        ]}
        faq={[
          {
            question: "Quelles sont les meilleures solutions de paiement pour WooCommerce ?",
            answer: "Stripe et PayPal sont les solutions les plus populaires et fiables. Stripe offre une expérience moderne avec CB directement sur votre site. PayPal rassure les acheteurs et offre aussi le paiement CB. Nous recommandons d'intégrer les deux pour maximiser la conversion."
          },
          {
            question: "Quels sont les frais de transaction des passerelles de paiement ?",
            answer: "Stripe prélève environ 1,4% + 0,25€ par transaction en France. PayPal facture environ 2,49% + 0,25€. Les solutions de paiement fractionné prennent 3% à 4%. Ces frais sont standards dans l'industrie et dégressifs selon votre volume."
          },
          {
            question: "Qu'est-ce que le 3D Secure et est-il obligatoire ?",
            answer: "Le 3D Secure est une authentification forte obligatoire en Europe depuis la directive DSP2 (2021). Le client doit valider le paiement via SMS, app bancaire ou code. Stripe et PayPal gèrent automatiquement cette étape. C'est obligatoire et protège contre la fraude."
          },
          {
            question: "Le paiement en plusieurs fois augmente-t-il vraiment les ventes ?",
            answer: "Oui, le paiement fractionné (3x ou 4x sans frais) augmente le panier moyen de 30% à 50% et améliore la conversion, surtout sur des montants élevés (>150€). Les clients préfèrent étaler le paiement. Les solutions comme Alma ou Klarna sont très populaires."
          },
          {
            question: "Comment rassurer mes clients sur la sécurité du paiement ?",
            answer: "Affichez les badges de sécurité (SSL, PCI-DSS, 3D Secure), les logos des passerelles (Stripe, PayPal), et mentionnez clairement que les données bancaires ne sont jamais stockées sur votre site. Nous intégrons tous ces éléments de réassurance pour maximiser la confiance."
          },
          {
            question: "Puis-je accepter des paiements internationaux et multi-devises ?",
            answer: "Oui, Stripe et PayPal permettent d'accepter des paiements internationaux en plusieurs devises (EUR, USD, GBP, etc.). WooCommerce peut afficher les prix dans la devise du visiteur et convertir automatiquement. Idéal pour vendre à l'international."
          }
        ]}
        relatedServices={[
          {
            title: "Boutique WooCommerce",
            description: "Création de boutique en ligne complète",
            href: "/services/boutique-woocommerce-lyon",
            icon: <CreditCard className="w-8 h-8" />
          },
          {
            title: "Optimisation Conversion",
            description: "Augmentez votre taux de conversion",
            href: "/services/optimisation-conversion-lyon",
            icon: <Zap className="w-8 h-8" />
          }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default PaiementSecurise;
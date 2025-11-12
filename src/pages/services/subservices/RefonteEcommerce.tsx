import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { RefreshCw, Zap, Smartphone, ShoppingCart, TrendingUp, Shield } from "lucide-react";
import refonteHero from "@/assets/refonte-site-wordpress-lyon.jpg";

const RefonteEcommerce = () => {
  return (
    <>
      <Helmet>
        <title>Refonte E-commerce Lyon - Modernisation Boutique WooCommerce | VKBack</title>
        <meta name="description" content="Refonte de votre boutique e-commerce à Lyon. Modernisation complète de votre site WooCommerce : design, UX, performances et conversion optimisés." />
        <link rel="canonical" href="https://vkback.fr/services/refonte-ecommerce-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon - Refonte E-commerce Lyon", href: "/services/refonte-ecommerce-lyon" }
        ]}
        heroTitle="Refonte E-commerce Lyon"
        heroSubtitle="Modernisez votre boutique en ligne WooCommerce à Lyon. Design actuel, performances optimisées, parcours d'achat amélioré pour booster vos ventes."
        heroImage={refonteHero}
        heroAlt="Refonte boutique e-commerce WooCommerce moderne à Lyon"
        introduction={[
          { type: 'text', content: "Votre boutique WooCommerce a quelques années et commence à montrer des signes de vieillissement ? Design dépassé, lenteur, mauvaise expérience mobile, taux de conversion en baisse ? Notre agence web à Lyon réalise des refontes e-commerce complètes qui modernisent votre boutique et multiplient vos ventes." },
          { type: 'text', content: "Une refonte e-commerce ne se limite pas à un changement de design. C'est l'occasion de repenser l'expérience utilisateur, optimiser les performances, améliorer le parcours d'achat et intégrer les dernières fonctionnalités qui convertissent. Résultat : une boutique moderne, rapide et qui vend mieux." }
        ]}
        whySection={{
          title: "Pourquoi refondre votre boutique e-commerce ?",
          content: [
            { type: 'subtitle', content: "Design moderne et expérience mobile parfaite" },
            { type: 'text', content: "Plus de 70% des achats en ligne se font sur mobile. Un design dépassé et une mauvaise expérience mobile font fuir vos clients vers vos concurrents. Une refonte moderne et responsive augmente immédiatement vos conversions." },
            { type: 'subtitle', content: "Performances et vitesse optimales" },
            { type: 'text', content: "Une boutique lente perd des ventes. Chaque seconde de chargement en plus fait baisser la conversion de 7%. Une refonte technique améliore drastiquement la vitesse et l'expérience d'achat." }
          ]
        }}
        expertise={{
          title: "Notre méthode de refonte e-commerce à Lyon",
          content: [
            { type: 'text', content: "Avec plus de 10 ans d'expérience en e-commerce à Lyon, nous avons réalisé des dizaines de refontes WooCommerce qui ont permis à nos clients d'augmenter leurs ventes de 50% à 200%." },
            { type: 'text', content: "Nous analysons d'abord l'existant (analytics, comportement utilisateurs, points de friction), puis concevons une nouvelle expérience centrée sur la conversion. Nous redessinons l'interface, optimisons le code et les performances, améliorons le parcours d'achat, et conservons votre SEO grâce aux redirections." }
          ]
        }}
        features={[
          {
            icon: Smartphone,
            title: "Design mobile-first moderne",
            description: "Interface responsive dernière génération, optimisée pour mobile et tablette. Navigation intuitive et esthétique contemporaine."
          },
          {
            icon: Zap,
            title: "Performances optimisées",
            description: "Chargement ultra-rapide, cache avancé, images optimisées automatiquement, lazy loading. Score Google PageSpeed 90+."
          },
          {
            icon: ShoppingCart,
            title: "Tunnel d'achat optimisé",
            description: "Parcours d'achat simplifié, checkout en une page, paiement express, récupération des paniers abandonnés."
          },
          {
            icon: TrendingUp,
            title: "CRO et éléments de conversion",
            description: "Boutons d'action optimisés, réassurance visible, urgence et rareté, cross-sell intelligent, avis clients mis en avant."
          },
          {
            icon: Shield,
            title: "SEO conservé et amélioré",
            description: "Redirections 301 automatiques, optimisation SEO on-page, structure améliorée, rich snippets produits intégrés."
          },
          {
            icon: RefreshCw,
            title: "Nouvelles fonctionnalités",
            description: "Recherche avancée, filtres produits, wishlist, comparateur, programme de fidélité, abonnements, multi-devises."
          }
        ]}
        pricing={[
          {
            name: "Refonte Essentielle",
            price: "À partir de 4 500€",
            features: [
              "Redesign complet",
              "Optimisation mobile",
              "Amélioration performances",
              "Conservation données",
              "Redirections SEO",
              "Formation administration",
              "Support 3 mois"
            ]
          },
          {
            name: "Refonte Business",
            price: "À partir de 7 500€",
            popular: true,
            features: [
              "Refonte complète UX/UI",
              "Design premium sur-mesure",
              "Optimisation conversion (CRO)",
              "Tunnel d'achat optimisé",
              "Nouvelles fonctionnalités",
              "SEO technique avancé",
              "Formation équipe",
              "Support 6 mois"
            ]
          },
          {
            name: "Refonte Premium",
            price: "Sur devis",
            features: [
              "Refonte stratégique complète",
              "Audit UX et user testing",
              "Design haut de gamme",
              "Développements personnalisés",
              "Intégrations avancées (ERP, CRM)",
              "Programme CRO continu",
              "Accompagnement dédié 12 mois"
            ]
          }
        ]}
        faq={[
          {
            question: "Quand faut-il envisager une refonte de sa boutique e-commerce ?",
            answer: "Si votre boutique a plus de 3-4 ans, que le design semble daté, que l'expérience mobile est médiocre, que les performances sont lentes, ou que votre taux de conversion stagne/baisse, il est temps de refondre. Une boutique moderne génère 50% à 200% de ventes en plus."
          },
          {
            question: "Vais-je perdre mon référencement Google avec une refonte ?",
            answer: "Non, nous mettons en place toutes les redirections 301 nécessaires pour conserver votre SEO. Nous améliorons même votre référencement grâce à une structure optimisée, un code propre et des performances supérieures. Google favorise les sites rapides et bien conçus."
          },
          {
            question: "Combien de temps dure une refonte e-commerce ?",
            answer: "Une refonte essentielle prend 6-8 semaines. Une refonte business complète demande 8-12 semaines. Une refonte premium avec développements spécifiques peut prendre 3-4 mois. Le délai dépend de la complexité de votre boutique et des fonctionnalités souhaitées."
          },
          {
            question: "Ma boutique actuelle restera-t-elle en ligne pendant la refonte ?",
            answer: "Oui, absolument ! Votre boutique actuelle reste opérationnelle pendant toute la refonte. Nous travaillons sur un environnement de développement, puis basculons rapidement (quelques heures) le jour J, généralement un weekend pour minimiser l'impact."
          },
          {
            question: "Puis-je ajouter de nouvelles fonctionnalités lors de la refonte ?",
            answer: "Oui, c'est même recommandé ! C'est l'occasion idéale d'ajouter des fonctionnalités qui manquent : recherche avancée, filtres, wishlist, programme de fidélité, abonnements, paiement en plusieurs fois, etc. Nous vous conseillons sur les fonctionnalités qui améliorent la conversion."
          },
          {
            question: "Quelle amélioration de conversion puis-je espérer après une refonte ?",
            answer: "En moyenne, nos clients constatent une augmentation de 40% à 100% de leur taux de conversion après une refonte bien menée. Les résultats dépendent de l'état initial de votre boutique, mais une refonte centrée sur l'UX et la conversion génère toujours une amélioration significative."
          }
        ]}
        relatedServices={[
          {
            name: "Boutique WooCommerce",
            href: "/services/boutique-woocommerce-lyon",
            icon: ShoppingCart
          },
          {
            name: "Optimisation Conversion",
            href: "/services/optimisation-conversion-lyon",
            icon: TrendingUp
          }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default RefonteEcommerce;
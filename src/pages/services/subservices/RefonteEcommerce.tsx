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
        <title>Refonte E-commerce Lyon | Modernisation Boutique - VKBack</title>
        <meta name="description" content="Refonte de votre boutique e-commerce à Lyon. Modernisation complète de votre site WooCommerce : design, UX, performances et conversion optimisés." />
        <link rel="canonical" href="https://vkback.com/refonte-ecommerce-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Quand faut-il envisager une refonte de sa boutique e-commerce ?", "acceptedAnswer": { "@type": "Answer", "text": "Si votre boutique a plus de 3-4 ans, que le design semble daté, que l'expérience mobile est médiocre, que les performances sont lentes, ou que votre taux de conversion stagne/baisse, il est temps de refondre. Une boutique moderne génère 50% à 200% de ventes en plus." }},
              { "@type": "Question", "name": "Vais-je perdre mon référencement Google avec une refonte ?", "acceptedAnswer": { "@type": "Answer", "text": "Non, nous mettons en place toutes les redirections 301 nécessaires pour conserver votre SEO. Nous améliorons même votre référencement grâce à une structure optimisée, un code propre et des performances supérieures. Google favorise les sites rapides et bien conçus." }},
              { "@type": "Question", "name": "Combien de temps dure une refonte e-commerce ?", "acceptedAnswer": { "@type": "Answer", "text": "Une refonte essentielle prend 6-8 semaines. Une refonte business complète demande 8-12 semaines. Une refonte premium avec développements spécifiques peut prendre 3-4 mois. Le délai dépend de la complexité de votre boutique et des fonctionnalités souhaitées." }},
              { "@type": "Question", "name": "Ma boutique actuelle restera-t-elle en ligne pendant la refonte ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, absolument ! Votre boutique actuelle reste opérationnelle pendant toute la refonte. Nous travaillons sur un environnement de développement, puis basculons rapidement (quelques heures) le jour J, généralement un weekend pour minimiser l'impact." }},
              { "@type": "Question", "name": "Puis-je ajouter de nouvelles fonctionnalités lors de la refonte ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, c'est même recommandé ! C'est l'occasion idéale d'ajouter des fonctionnalités qui manquent : recherche avancée, filtres, wishlist, programme de fidélité, abonnements, paiement en plusieurs fois, etc. Nous vous conseillons sur les fonctionnalités qui améliorent la conversion." }},
              { "@type": "Question", "name": "Quelle amélioration de conversion puis-je espérer après une refonte ?", "acceptedAnswer": { "@type": "Answer", "text": "En moyenne, nos clients constatent une augmentation de 40% à 100% de leur taux de conversion après une refonte bien menée. Les résultats dépendent de l'état initial de votre boutique, mais une refonte centrée sur l'UX et la conversion génère toujours une amélioration significative." }}
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
          { label: "Refonte E-commerce Lyon" }
        ]}
        painPointHook={{
          question: "Votre boutique a vieilli et vos ventes stagnent ?",
          answer: "Une refonte bien pensée peut doubler vos conversions."
        }}
        painPoints={[
          { problem: "Design dépassé qui fait fuir les clients", solution: "Interface moderne et mobile-first", icon: "📱" },
          { problem: "Site lent qui perd des ventes", solution: "Performances optimisées, score Google 90+", icon: "⚡" },
          { problem: "Taux de conversion en chute libre", solution: "UX repensée centrée sur la conversion", icon: "📈" },
          { problem: "Fonctionnalités obsolètes et manquantes", solution: "Nouvelles fonctionnalités qui convertissent", icon: "✨" }
        ]}
        heroTitle="Refonte E-commerce Lyon"
        heroSubtitle="Design dépassé ? Boutique lente ? Taux de conversion en chute libre ? Nous refondons votre e-commerce WooCommerce pour multiplier vos ventes."
        heroImage={refonteHero}
        heroAlt="Refonte boutique e-commerce WooCommerce moderne à Lyon"
        ctaPrimary={{ label: "Refondre ma boutique", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos refontes", href: "/realisations" }}
        schemaServiceName="Refonte E-commerce Lyon"
        schemaServiceDescription="Refonte de votre boutique e-commerce à Lyon. Modernisation complète de votre site WooCommerce : design, UX, performances et conversion optimisés."
        schemaServicePrice="À partir de 4 500€"
        schemaPageUrl="https://vkback.com/refonte-ecommerce-lyon"
        schemaServicePriceRange="4500€ - 15000€"
        schemaServiceKeywords={["refonte e-commerce Lyon", "modernisation boutique WooCommerce Villeurbanne", "refonte site marchand Lyon 3", "redesign boutique en ligne Rhône-Alpes", "refonte UX e-commerce Lyon Part-Dieu", "agence refonte boutique Caluire", "relooking site e-commerce Écully"]}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Votre boutique WooCommerce a quelques années et commence à montrer des signes de vieillissement ? Design dépassé, lenteur, mauvaise expérience mobile, taux de conversion en baisse ? Notre agence web à Lyon réalise des refontes e-commerce complètes qui modernisent votre boutique et multiplient vos ventes.
            </p>
            <p className="text-lg leading-relaxed">
              Une refonte e-commerce ne se limite pas à un changement de design. C'est l'occasion de repenser l'expérience utilisateur, optimiser les performances, améliorer le parcours d'achat et intégrer les dernières fonctionnalités qui convertissent. Résultat : une boutique moderne, rapide et qui vend mieux.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi refondre votre boutique e-commerce ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Design moderne et expérience mobile parfaite</h3>
                <p className="text-lg text-muted-foreground">
                  Plus de 70% des achats en ligne se font sur mobile. Un design dépassé et une mauvaise expérience mobile font fuir vos clients vers vos concurrents. Une refonte moderne et responsive augmente immédiatement vos conversions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Performances et vitesse optimales</h3>
                <p className="text-lg text-muted-foreground">
                  Une boutique lente perd des ventes. Chaque seconde de chargement en plus fait baisser la conversion de 7%. Une refonte technique améliore drastiquement la vitesse et l'expérience d'achat.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre méthode de refonte e-commerce à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Avec plus de 10 ans d'expérience en e-commerce à Lyon, nous avons réalisé des dizaines de refontes WooCommerce qui ont permis à nos clients d'augmenter leurs ventes de 50% à 200%.
              </p>
              <p className="text-lg">
                Nous analysons d'abord l'existant (analytics, comportement utilisateurs, points de friction), puis concevons une nouvelle expérience centrée sur la conversion. Nous redessinons l'interface, optimisons le code et les performances, améliorons le parcours d'achat, et conservons votre SEO grâce aux redirections.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Design mobile-first moderne",
            description: "Interface responsive dernière génération, optimisée pour mobile et tablette. Navigation intuitive et esthétique contemporaine."
          },
          {
            title: "Performances optimisées",
            description: "Chargement ultra-rapide, cache avancé, images optimisées automatiquement, lazy loading. Score Google PageSpeed 90+."
          },
          {
            title: "Tunnel d'achat optimisé",
            description: "Parcours d'achat simplifié, checkout en une page, paiement express, récupération des paniers abandonnés."
          },
          {
            title: "CRO et éléments de conversion",
            description: "Boutons d'action optimisés, réassurance visible, urgence et rareté, cross-sell intelligent, avis clients mis en avant."
          },
          {
            title: "SEO conservé et amélioré",
            description: "Redirections 301 automatiques, optimisation SEO on-page, structure améliorée, rich snippets produits intégrés."
          },
          {
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
            title: "Boutique WooCommerce",
            description: "Création de boutique en ligne complète",
            href: "/services/boutique-woocommerce-lyon",
            icon: <ShoppingCart className="w-8 h-8" />
          },
          {
            title: "Optimisation Conversion",
            description: "Augmentez votre taux de conversion",
            href: "/services/optimisation-conversion-lyon",
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

export default RefonteEcommerce;
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { Search, TrendingUp, FileText, Link2, ShoppingBag, Star } from "lucide-react";
import seoHero from "@/assets/referencement-seo-naturel-lyon.jpg";

const SEOEcommerce = () => {
  return (
    <>
      <Helmet>
        <title>SEO E-commerce Lyon - Référencement Boutique WooCommerce | VKBack</title>
        <meta name="description" content="Référencement SEO e-commerce à Lyon. Optimisation de votre boutique WooCommerce pour Google : produits, catégories, maillage, rich snippets." />
        <link rel="canonical" href="https://vkback.fr/services/seo-ecommerce-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon - SEO E-commerce Lyon", href: "/services/seo-ecommerce-lyon" }
        ]}
        heroTitle="SEO E-commerce Lyon"
        heroSubtitle="Référencement naturel de votre boutique WooCommerce à Lyon. Positionnez vos produits en première page Google et augmentez vos ventes organiques."
        heroImage={seoHero}
        heroAlt="Référencement SEO e-commerce boutique WooCommerce à Lyon"
        introduction={[
          { type: 'text', content: "Le SEO e-commerce est différent du SEO classique. Vos fiches produits et catégories doivent se positionner sur Google pour générer du trafic qualifié et des ventes. Notre agence web à Lyon optimise votre boutique WooCommerce pour dominer votre secteur." },
          { type: 'text', content: "Une boutique bien référencée génère 50% à 70% de son trafic depuis Google gratuitement. Le SEO e-commerce demande une expertise spécifique : optimisation des fiches produits, structure en silos, rich snippets, gestion du contenu dupliqué et vitesse de chargement." }
        ]}
        whySection={{
          title: "Pourquoi le SEO e-commerce est essentiel ?",
          content: [
            { type: 'subtitle', content: "Trafic qualifié et gratuit sur le long terme" },
            { type: 'text', content: "Contrairement à la publicité Google Ads qui s'arrête dès que vous coupez le budget, le SEO génère du trafic continu et gratuit. Un bon positionnement sur Google devient un actif qui génère des ventes pendant des années." },
            { type: 'subtitle', content: "ROI supérieur à la publicité" },
            { type: 'text', content: "Le coût d'acquisition client (CAC) via SEO est 5 à 10 fois inférieur à celui de la publicité payante. Les visiteurs organiques convertissent mieux car ils cherchent activement vos produits." }
          ]
        }}
        expertise={{
          title: "Notre expertise SEO e-commerce à Lyon",
          content: [
            { type: 'text', content: "Avec plus de 10 ans d'expérience en SEO e-commerce à Lyon et dans la région Rhône-Alpes, nous avons positionné des dizaines de boutiques WooCommerce en première page Google." },
            { type: 'text', content: "Nous optimisons chaque élément de votre boutique : architecture SEO en silos, optimisation des fiches produits (titres, descriptions, images), rich snippets (prix, avis, disponibilité), maillage interne stratégique, et création de contenu éditorial pour attirer du trafic qualifié. Nous surveillons également vos positions et ajustons la stratégie pour maintenir et améliorer vos classements." }
          ]
        }}
        features={[
          {
            icon: Search,
            title: "Audit SEO e-commerce complet",
            description: "Analyse technique, contenu, concurrence, opportunités de mots-clés produits et catégories. Identification des blocages SEO."
          },
          {
            icon: FileText,
            title: "Optimisation fiches produits",
            description: "Titres SEO, meta descriptions, descriptions uniques, attributs alt images, URLs optimisées, rich snippets produits."
          },
          {
            icon: Link2,
            title: "Structure et maillage interne",
            description: "Architecture en silos, fil d'Ariane optimisé, liens internes stratégiques, catégories et sous-catégories SEO-friendly."
          },
          {
            icon: ShoppingBag,
            title: "Optimisation catégories",
            description: "Pages catégories optimisées avec contenu éditorial, filtres SEO-friendly, pagination optimisée, balises canoniques."
          },
          {
            icon: Star,
            title: "Avis clients et Rich Snippets",
            description: "Intégration des avis clients, balisage schema.org, affichage des étoiles dans Google, snippets enrichis produits."
          },
          {
            icon: TrendingUp,
            title: "Suivi et reporting mensuel",
            description: "Suivi des positions Google, trafic organique, conversions SEO, rapport mensuel détaillé, ajustements continus."
          }
        ]}
        pricing={[
          {
            name: "Audit SEO",
            price: "À partir de 1 200€",
            features: [
              "Audit technique complet",
              "Analyse concurrentielle",
              "Recherche mots-clés produits",
              "Audit fiches produits (30)",
              "Recommandations priorisées",
              "Rapport 40-50 pages",
              "1h de restitution"
            ]
          },
          {
            name: "SEO E-commerce",
            price: "À partir de 800€/mois",
            popular: true,
            features: [
              "Optimisation continue",
              "Optimisation fiches produits",
              "Création contenu éditorial",
              "Netlinking qualitatif",
              "Rich snippets produits",
              "Suivi positions mensuel",
              "Support et conseils SEO"
            ]
          },
          {
            name: "SEO Premium",
            price: "À partir de 1 500€/mois",
            features: [
              "Programme SEO intensif",
              "Optimisation catalogue complet",
              "Stratégie contenu avancée",
              "Netlinking agressif",
              "SEO international/multilingue",
              "Reporting détaillé mensuel",
              "Support prioritaire dédié"
            ]
          }
        ]}
        faq={[
          {
            question: "Combien de temps faut-il pour voir des résultats SEO e-commerce ?",
            answer: "Les premiers résultats apparaissent généralement en 3-4 mois : amélioration des positions, augmentation du trafic organique. Des résultats significatifs (doublement du trafic) sont visibles en 6-9 mois. Le SEO est un investissement moyen/long terme mais très rentable."
          },
          {
            question: "Comment gérez-vous le contenu dupliqué entre produits similaires ?",
            answer: "Nous créons des descriptions uniques pour chaque produit, utilisons les balises canoniques pour les variantes, et structurons vos pages pour éviter la cannibalisation. Le contenu dupliqué est l'ennemi du SEO e-commerce, nous y apportons une attention particulière."
          },
          {
            question: "Le SEO e-commerce fonctionne-t-il pour les petites boutiques ?",
            answer: "Absolument ! Les petites boutiques ont même un avantage : elles peuvent cibler des niches spécifiques et des mots-clés longue traîne moins compétitifs. Nous adaptons la stratégie à votre secteur, votre budget et vos objectifs commerciaux."
          },
          {
            question: "Dois-je faire du SEO ET de la publicité Google Ads ?",
            answer: "Les deux sont complémentaires. Google Ads génère du trafic immédiat pendant que le SEO se met en place. À moyen terme, le SEO réduit votre dépendance à la publicité et améliore votre rentabilité. Idéalement, combinez les deux."
          },
          {
            question: "Comment intégrez-vous les avis clients dans le SEO ?",
            answer: "Nous implémentons le balisage schema.org pour afficher vos étoiles et avis dans les résultats Google (rich snippets). Cela améliore votre taux de clic et rassure les visiteurs. Nous vous aidons aussi à collecter plus d'avis pour renforcer votre e-réputation."
          },
          {
            question: "Le SEO e-commerce nécessite-t-il un accompagnement continu ?",
            answer: "Oui, le SEO est un travail continu : Google met à jour ses algorithmes, vos concurrents optimisent leurs sites, de nouveaux produits arrivent. Un accompagnement mensuel garantit que votre boutique maintient et améliore ses positions dans le temps."
          }
        ]}
        relatedServices={[
          {
            name: "Boutique WooCommerce",
            href: "/services/boutique-woocommerce-lyon",
            icon: ShoppingBag
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

export default SEOEcommerce;
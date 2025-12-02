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
        <title>SEO E-commerce Lyon | Référencement WooCommerce - VKBack</title>
        <meta name="description" content="Référencement SEO e-commerce à Lyon. Optimisation de votre boutique WooCommerce pour Google : produits, catégories, maillage, rich snippets." />
        <link rel="canonical" href="https://vkback.com/services/seo-ecommerce-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Sites E-commerce Lyon", href: "/creation-site-ecommerce-lyon" },
          { label: "SEO E-commerce Lyon" }
        ]}
        painPointHook={{
          question: "Votre boutique ne ressort pas sur Google ? Vos produits sont invisibles ?",
          answer: "Le SEO e-commerce est différent. Nous savons positionner vos produits."
        }}
        heroTitle="SEO E-commerce Lyon"
        heroSubtitle="Vos fiches produits n'apparaissent jamais sur Google ? Trafic organique quasi nul ? Notre expertise SEO e-commerce positionne votre boutique WooCommerce devant vos concurrents."
        heroImage={seoHero}
        heroAlt="Référencement SEO e-commerce boutique WooCommerce à Lyon"
        ctaPrimary={{ label: "Référencer ma boutique", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos forfaits SEO", href: "#tarifs" }}
        schemaServiceName="SEO E-commerce Lyon"
        schemaServiceDescription="Référencement SEO e-commerce à Lyon. Optimisation de votre boutique WooCommerce pour Google : produits, catégories, maillage, rich snippets."
        schemaServicePrice="À partir de 800€/mois"
        schemaPageUrl="https://vkback.com/services/seo-ecommerce-lyon"
        schemaServicePriceRange="800€ - 1500€/mois"
        schemaServiceKeywords={["SEO e-commerce Lyon", "référencement boutique WooCommerce Villeurbanne", "SEO fiches produits Lyon 2", "optimisation catalogue e-commerce Rhône-Alpes", "référencement site marchand Lyon Part-Dieu", "agence SEO e-commerce Caluire", "expert SEO WooCommerce Écully"]}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Le SEO e-commerce est différent du SEO classique. Vos fiches produits et catégories doivent se positionner sur Google pour générer du trafic qualifié et des ventes. Notre agence web à Lyon optimise votre boutique WooCommerce pour dominer votre secteur.
            </p>
            <p className="text-lg leading-relaxed">
              Une boutique bien référencée génère 50% à 70% de son trafic depuis Google gratuitement. Le SEO e-commerce demande une expertise spécifique : optimisation des fiches produits, structure en silos, rich snippets, gestion du contenu dupliqué et vitesse de chargement.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi le SEO e-commerce est essentiel ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Trafic qualifié et gratuit sur le long terme</h3>
                <p className="text-lg text-muted-foreground">
                  Contrairement à la publicité Google Ads qui s'arrête dès que vous coupez le budget, le SEO génère du trafic continu et gratuit. Un bon positionnement sur Google devient un actif qui génère des ventes pendant des années.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">ROI supérieur à la publicité</h3>
                <p className="text-lg text-muted-foreground">
                  Le coût d'acquisition client (CAC) via SEO est 5 à 10 fois inférieur à celui de la publicité payante. Les visiteurs organiques convertissent mieux car ils cherchent activement vos produits.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre expertise SEO e-commerce à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Avec plus de 10 ans d'expérience en SEO e-commerce à Lyon et dans la région Rhône-Alpes, nous avons positionné des dizaines de boutiques WooCommerce en première page Google.
              </p>
              <p className="text-lg">
                Nous optimisons chaque élément de votre boutique : architecture SEO en silos, optimisation des fiches produits (titres, descriptions, images), rich snippets (prix, avis, disponibilité), maillage interne stratégique, et création de contenu éditorial pour attirer du trafic qualifié. Nous surveillons également vos positions et ajustons la stratégie pour maintenir et améliorer vos classements.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Audit SEO e-commerce complet",
            description: "Analyse technique, contenu, concurrence, opportunités de mots-clés produits et catégories. Identification des blocages SEO."
          },
          {
            title: "Optimisation fiches produits",
            description: "Titres SEO, meta descriptions, descriptions uniques, attributs alt images, URLs optimisées, rich snippets produits."
          },
          {
            title: "Structure et maillage interne",
            description: "Architecture en silos, fil d'Ariane optimisé, liens internes stratégiques, catégories et sous-catégories SEO-friendly."
          },
          {
            title: "Optimisation catégories",
            description: "Pages catégories optimisées avec contenu éditorial, filtres SEO-friendly, pagination optimisée, balises canoniques."
          },
          {
            title: "Avis clients et Rich Snippets",
            description: "Intégration des avis clients, balisage schema.org, affichage des étoiles dans Google, snippets enrichis produits."
          },
          {
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
            title: "Boutique WooCommerce",
            description: "Création de boutique en ligne complète",
            href: "/services/boutique-woocommerce-lyon",
            icon: <ShoppingBag className="w-8 h-8" />
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

export default SEOEcommerce;
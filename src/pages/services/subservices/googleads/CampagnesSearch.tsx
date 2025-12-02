import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { Target, BarChart3 } from "lucide-react";
import heroGoogleAds from "@/assets/google-ads-search-campaigns-lyon.jpg";

const CampagnesSearch = () => {
  return (
    <>
      <Helmet>
        <title>Campagnes Google Ads Search Lyon | Annonces Texte - VKBack</title>
        <meta name="description" content="Création et gestion de campagnes Google Ads Search à Lyon. Annonces texte sur le réseau de recherche Google pour générer des leads qualifiés." />
        <link rel="canonical" href="https://vkback.com/google-ads-search-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quelle différence entre Search et Display ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Search affiche des annonces texte dans les résultats de recherche Google (intention active). Display affiche des bannières sur des sites partenaires (notoriété/remarketing). Search convertit mieux, Display couvre plus large."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de temps pour des résultats ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les annonces sont actives sous 24-48h après validation. Les premiers leads arrivent dès le lancement. L'optimisation maximale prend 2-3 mois de données pour affiner les enchères et mots-clés."
                }
              },
              {
                "@type": "Question",
                "name": "Quel budget minimum recommandez-vous ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pour Lyon, nous recommandons minimum 500-1000€/mois de budget publicitaire selon la concurrence de votre secteur. En dessous, les données sont insuffisantes pour optimiser efficacement."
                }
              },
              {
                "@type": "Question",
                "name": "Comment réduire le coût par clic (CPC) ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "En améliorant le quality score : pertinence mots-clés/annonces, qualité des landing pages, historique du compte. Un bon quality score peut diviser le CPC par 2."
                }
              }
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
          { label: "Google Ads & SEA Lyon", href: "/google-ads-sea-lyon" },
          { label: "Campagnes Search Lyon" }
        ]}
        painPointHook={{
          question: "Vos annonces Google apparaissent mais ne convertissent pas ?",
          answer: "Des campagnes Search optimisées génèrent des leads qualifiés, pas du clic vide."
        }}
        painPoints={[
          { problem: "Des clics mais pas de conversions", solution: "Ciblage par intention d'achat, pas par volume", icon: "🎯" },
          { problem: "Coût par clic trop élevé", solution: "Quality Score optimisé pour réduire le CPC", icon: "💰" },
          { problem: "Mots-clés qui attirent du trafic non qualifié", solution: "Mots-clés négatifs et ciblage précis", icon: "🔍" },
          { problem: "Pas de visibilité sur les recherches réelles", solution: "Analyse des termes de recherche et optimisation", icon: "📊" }
        ]}
        heroTitle="Campagnes Google Ads Search Lyon"
        heroSubtitle="Apparaissez en première position quand vos clients cherchent vos services. Nos campagnes Search génèrent des leads qualifiés avec un ROI mesurable."
        heroImage={heroGoogleAds}
        heroAlt="Campagnes Google Ads Search Lyon - Annonces texte réseau de recherche Google"
        ctaPrimary={{ label: "Lancer ma campagne", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos performances", href: "/realisations" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Les campagnes Search sont le cœur de Google Ads : vos annonces texte apparaissent directement dans les résultats de recherche Google quand un utilisateur tape vos mots-clés.
            </p>
            <p className="text-lg leading-relaxed">
              C'est la forme de publicité la plus efficace car elle capte l'intention d'achat : quelqu'un qui cherche "plombier Lyon urgence" est prêt à appeler immédiatement.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi les campagnes Search sont essentielles ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Captez l'intention d'achat</h3>
                <p className="text-lg text-muted-foreground">
                  Contrairement aux réseaux sociaux où vous interrompez, Search capte des utilisateurs qui cherchent activement vos services. Le taux de conversion est jusqu'à 10x supérieur.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">ROI mesurable au centime</h3>
                <p className="text-lg text-muted-foreground">
                  Chaque clic, chaque appel, chaque formulaire est tracké. Vous savez exactement combien coûte chaque lead et pouvez optimiser en temps réel.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre expertise Search Ads à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Depuis 14 ans, nous gérons des campagnes Search pour des entreprises lyonnaises de tous secteurs : artisans, professions libérales, e-commerce et B2B.
              </p>
              <p className="text-lg">
                Notre méthodologie : audit mots-clés approfondi, structure de campagne optimisée, rédaction d'annonces persuasives, et optimisation continue des enchères et quality score.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Recherche mots-clés approfondie",
            description: "Analyse sémantique complète pour identifier les requêtes à forte intention d'achat dans votre secteur."
          },
          {
            title: "Structure de campagne optimisée",
            description: "Organisation en groupes d'annonces thématiques pour maximiser le quality score et réduire le CPC."
          },
          {
            title: "Annonces persuasives",
            description: "Rédaction d'accroches percutantes avec extensions (liens, appels, lieu) pour maximiser le CTR."
          },
          {
            title: "Ciblage géographique",
            description: "Diffusion précise sur Lyon et les zones géographiques pertinentes pour votre activité."
          },
          {
            title: "Tracking conversions",
            description: "Mesure précise des appels, formulaires, achats avec intégration Google Analytics 4."
          },
          {
            title: "Optimisation continue",
            description: "Ajustements quotidiens des enchères, exclusion de mots-clés négatifs, tests A/B d'annonces."
          }
        ]}
        pricing={[
          {
            name: "Setup Campagne",
            price: "590€",
            features: [
              "Recherche mots-clés",
              "Structure 2 campagnes",
              "Rédaction annonces",
              "Extensions configurées",
              "Tracking conversions",
              "Formation interface"
            ]
          },
          {
            name: "Gestion Mensuelle",
            price: "15% du budget",
            popular: true,
            features: [
              "Minimum 400€/mois",
              "Optimisation quotidienne",
              "Rapport mensuel détaillé",
              "Ajustements enchères",
              "Tests A/B continus",
              "Support réactif"
            ]
          },
          {
            name: "Pack Complet",
            price: "890€ + gestion",
            features: [
              "Audit compte existant",
              "Restructuration totale",
              "Landing pages optimisées",
              "Remarketing inclus",
              "Suivi avancé GA4",
              "Stratégie long terme"
            ]
          }
        ]}
        faq={[
          {
            question: "Quelle différence entre Search et Display ?",
            answer: "Search affiche des annonces texte dans les résultats de recherche Google (intention active). Display affiche des bannières sur des sites partenaires (notoriété/remarketing). Search convertit mieux, Display couvre plus large."
          },
          {
            question: "Combien de temps pour des résultats ?",
            answer: "Les annonces sont actives sous 24-48h après validation. Les premiers leads arrivent dès le lancement. L'optimisation maximale prend 2-3 mois de données pour affiner les enchères et mots-clés."
          },
          {
            question: "Quel budget minimum recommandez-vous ?",
            answer: "Pour Lyon, nous recommandons minimum 500-1000€/mois de budget publicitaire selon la concurrence de votre secteur. En dessous, les données sont insuffisantes pour optimiser efficacement."
          },
          {
            question: "Comment réduire le coût par clic (CPC) ?",
            answer: "En améliorant le quality score : pertinence mots-clés/annonces, qualité des landing pages, historique du compte. Un bon quality score peut diviser le CPC par 2."
          }
        ]}
        relatedServices={[
          {
            title: "Audit Google Ads",
            description: "Analyse complète de vos campagnes existantes",
            href: "/audit-google-ads-lyon",
            icon: <BarChart3 className="w-8 h-8" />
          },
          {
            title: "Google Shopping",
            description: "Campagnes produits pour e-commerce",
            href: "/google-shopping-lyon",
            icon: <Target className="w-8 h-8" />
          }
        ]}
        schemaServiceName="Campagnes Google Ads Search Lyon"
        schemaServiceDescription="Création et gestion de campagnes Google Ads Search à Lyon. Annonces texte sur le réseau de recherche Google pour générer des leads qualifiés."
        schemaServicePrice="À partir de 590€"
        schemaPageUrl="https://vkback.com/google-ads-search-lyon"
        schemaServicePriceRange="590€ - 890€ + gestion"
        schemaServiceKeywords={["campagnes Search Lyon", "annonces Google texte Villeurbanne", "Google Ads réseau recherche Lyon 2", "publicité Google Search Rhône-Alpes", "campagnes Adwords Lyon Part-Dieu", "agence Search Ads Caluire", "annonces texte Google Écully"]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default CampagnesSearch;

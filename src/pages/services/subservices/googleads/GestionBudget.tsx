import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { DollarSign, TrendingUp } from "lucide-react";
import heroGoogleAds from "@/assets/gestion-budget-google-ads-lyon.jpg";

const GestionBudget = () => {
  return (
    <>
      <Helmet>
        <title>Gestion Budget Google Ads Lyon | Pilotage - VKBack</title>
        <meta name="description" content="Gestion stratégique de votre budget Google Ads à Lyon. Allocation optimale des investissements publicitaires pour maximiser le ROI." />
        <link rel="canonical" href="https://vkback.com/gestion-budget-google-ads-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quel budget minimum pour démarrer sur Google Ads ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pour des résultats significatifs à Lyon, nous recommandons minimum 500-1000€/mois selon votre secteur. En dessous, les données sont insuffisantes pour optimiser efficacement et le ROI est difficile à atteindre."
                }
              },
              {
                "@type": "Question",
                "name": "Comment savoir si mon budget est bien utilisé ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous mesurons le coût par conversion, le ROAS et les parts d'impressions. Si vous êtes souvent limité par le budget sur vos meilleures campagnes, c'est qu'il y a une opportunité de scaling."
                }
              },
              {
                "@type": "Question",
                "name": "Vaut-il mieux un petit budget continu ou des périodes de forte dépense ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ça dépend de votre activité. Pour la plupart des services B2B ou locaux, un budget continu est préférable. Pour l'e-commerce, des pics saisonniers (soldes, Noël) peuvent être pertinents."
                }
              },
              {
                "@type": "Question",
                "name": "Comment augmenter le budget sans dégrader les performances ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le scaling se fait progressivement (+20-30% par semaine maximum) pour laisser aux algorithmes le temps de s'adapter. Nous testons aussi de nouvelles campagnes avant d'y allouer du budget significatif."
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
          { label: "Gestion Budget Google Ads Lyon" }
        ]}
        painPointHook={{
          question: "Vous ne savez pas combien investir ni comment répartir votre budget ?",
          answer: "Une stratégie budgétaire claire maximise chaque euro investi."
        }}
        painPoints={[
          { problem: "Budget fixé au hasard sans stratégie", solution: "Définition du budget optimal par objectif", icon: "📊" },
          { problem: "Campagnes rentables sous-financées", solution: "Réallocation vers ce qui performe", icon: "💰" },
          { problem: "Variations saisonnières mal anticipées", solution: "Ajustements automatiques selon l'activité", icon: "📅" },
          { problem: "Pas de visibilité sur le ROI par campagne", solution: "Reporting détaillé par euro investi", icon: "📈" }
        ]}
        heroTitle="Gestion Budget Google Ads Lyon"
        heroSubtitle="Investir le bon montant au bon endroit fait toute la différence. Notre gestion budgétaire stratégique optimise l'allocation de vos investissements publicitaires."
        heroImage={heroGoogleAds}
        heroAlt="Gestion budget Google Ads Lyon - Pilotage investissements publicitaires"
        ctaPrimary={{ label: "Optimiser mon budget", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos résultats", href: "/realisations" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              La gestion budgétaire Google Ads va au-delà de la simple définition d'un budget quotidien. C'est une allocation stratégique des ressources entre campagnes, moments et audiences pour maximiser le retour sur investissement.
            </p>
            <p className="text-lg leading-relaxed">
              Répartition par campagne, saisonnalité, arbitrages temps réel : chaque décision budgétaire impacte vos résultats. Notre expertise vous guide pour investir intelligemment.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi la gestion budgétaire est stratégique ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Évitez le sous-investissement</h3>
                <p className="text-lg text-muted-foreground">
                  Un budget trop faible ne génère pas assez de données pour optimiser. Vous payez pour apprendre sans jamais atteindre le seuil de rentabilité.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Évitez le gaspillage</h3>
                <p className="text-lg text-muted-foreground">
                  Un budget mal réparti finance des campagnes peu rentables au détriment des meilleures. L'allocation intelligente concentre les ressources sur ce qui performe.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre approche de gestion budgétaire à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Nous accompagnons des entreprises lyonnaises avec des budgets de 500€ à 50 000€/mois. Notre approche adapte la stratégie à vos objectifs business et votre capacité d'investissement.
              </p>
              <p className="text-lg">
                Définition du budget optimal, répartition par campagne, ajustements saisonniers, arbitrages en temps réel et reporting transparent sur l'utilisation de chaque euro.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Définition budget optimal",
            description: "Analyse du marché et de la concurrence pour déterminer le budget nécessaire à vos objectifs."
          },
          {
            title: "Répartition par campagne",
            description: "Allocation intelligente entre Search, Shopping, Display selon les performances et priorités."
          },
          {
            title: "Gestion saisonnalité",
            description: "Ajustements budgétaires selon les périodes fortes et creuses de votre activité."
          },
          {
            title: "Arbitrages temps réel",
            description: "Réallocation dynamique vers les campagnes les plus performantes au quotidien."
          },
          {
            title: "Prévisions et scaling",
            description: "Simulations d'augmentation de budget et impact prévu sur les résultats."
          },
          {
            title: "Reporting transparent",
            description: "Suivi détaillé de l'utilisation du budget et du ROI par euro investi."
          }
        ]}
        pricing={[
          {
            name: "Conseil Budgétaire",
            price: "390€",
            features: [
              "Analyse marché",
              "Recommandation budget",
              "Plan de répartition",
              "Prévisions ROI",
              "Présentation 1h",
              "Support 2 semaines"
            ]
          },
          {
            name: "Gestion Mensuelle",
            price: "15% du budget",
            popular: true,
            features: [
              "Minimum 400€/mois",
              "Pilotage continu",
              "Arbitrages quotidiens",
              "Rapport hebdomadaire",
              "Ajustements saisonniers",
              "Support réactif"
            ]
          },
          {
            name: "Pilotage Premium",
            price: "12% du budget",
            features: [
              "Pour budgets > 10 000€/mois",
              "Gestionnaire dédié",
              "Dashboard temps réel",
              "Alertes automatiques",
              "Réunion hebdomadaire",
              "Support prioritaire"
            ]
          }
        ]}
        faq={[
          {
            question: "Quel budget minimum pour démarrer sur Google Ads ?",
            answer: "Pour des résultats significatifs à Lyon, nous recommandons minimum 500-1000€/mois selon votre secteur. En dessous, les données sont insuffisantes pour optimiser efficacement et le ROI est difficile à atteindre."
          },
          {
            question: "Comment savoir si mon budget est bien utilisé ?",
            answer: "Nous mesurons le coût par conversion, le ROAS et les parts d'impressions. Si vous êtes souvent limité par le budget sur vos meilleures campagnes, c'est qu'il y a une opportunité de scaling."
          },
          {
            question: "Vaut-il mieux un petit budget continu ou des périodes de forte dépense ?",
            answer: "Ça dépend de votre activité. Pour la plupart des services B2B ou locaux, un budget continu est préférable. Pour l'e-commerce, des pics saisonniers (soldes, Noël) peuvent être pertinents."
          },
          {
            question: "Comment augmenter le budget sans dégrader les performances ?",
            answer: "Le scaling se fait progressivement (+20-30% par semaine maximum) pour laisser aux algorithmes le temps de s'adapter. Nous testons aussi de nouvelles campagnes avant d'y allouer du budget significatif."
          }
        ]}
        relatedServices={[
          {
            title: "Audit Google Ads",
            description: "Analyse complète de vos campagnes",
            href: "/audit-google-ads-lyon",
            icon: <TrendingUp className="w-8 h-8" />
          },
          {
            title: "Optimisation ROI",
            description: "Amélioration continue des performances",
            href: "/optimisation-google-ads-lyon",
            icon: <DollarSign className="w-8 h-8" />
          }
        ]}
        schemaServiceName="Gestion Budget Google Ads Lyon"
        schemaServiceDescription="Gestion stratégique de votre budget Google Ads à Lyon. Allocation optimale des investissements publicitaires pour maximiser le ROI."
        schemaServicePrice="15% du budget publicitaire"
        schemaPageUrl="https://vkback.com/gestion-budget-google-ads-lyon"
        schemaServicePriceRange="12-15% du budget"
        schemaServiceKeywords={["gestion budget Google Ads Lyon", "pilotage investissements Villeurbanne", "allocation budget Adwords Lyon 7", "stratégie budgétaire Rhône-Alpes", "gestion dépenses pub Lyon Part-Dieu", "optimisation budget Caluire", "arbitrage campagnes Écully"]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default GestionBudget;

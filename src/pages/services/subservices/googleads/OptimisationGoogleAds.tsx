import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { TrendingUp, BarChart3 } from "lucide-react";
import heroGoogleAds from "@/assets/optimisation-google-ads-roi-lyon.jpg";

const OptimisationGoogleAds = () => {
  return (
    <>
      <Helmet>
        <title>Optimisation Google Ads Lyon | Améliorer ROI - VKBack</title>
        <meta name="description" content="Optimisation de vos campagnes Google Ads à Lyon. Améliorez votre ROI, réduisez le coût par conversion et maximisez les performances de vos publicités." />
        <link rel="canonical" href="https://vkback.com/optimisation-google-ads-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "En combien de temps voit-on des améliorations ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les premières optimisations montrent des résultats sous 2-4 semaines. L'amélioration significative du ROI prend généralement 2-3 mois car il faut accumuler suffisamment de données pour des optimisations profondes."
                }
              },
              {
                "@type": "Question",
                "name": "Pouvez-vous optimiser un compte que vous n'avez pas créé ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolument. Nous reprenons régulièrement des comptes créés par d'autres agences ou en interne. Un audit initial identifie les opportunités d'amélioration avant de restructurer si nécessaire."
                }
              },
              {
                "@type": "Question",
                "name": "Qu'est-ce que le Quality Score et pourquoi est-il important ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le Quality Score (1-10) mesure la pertinence de vos annonces pour Google. Un score élevé réduit le coût par clic et améliore les positions. C'est le levier d'optimisation le plus impactant."
                }
              },
              {
                "@type": "Question",
                "name": "Comment mesurez-vous le succès de l'optimisation ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Par l'évolution des KPIs : coût par conversion, taux de conversion, ROAS, quality score moyen. Nous comparons les performances avant/après et mois par mois dans nos rapports."
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
          { label: "Optimisation Google Ads Lyon" }
        ]}
        painPointHook={{
          question: "Vos campagnes Google Ads coûtent cher sans générer assez de résultats ?",
          answer: "L'optimisation continue peut diviser votre coût par conversion par 2."
        }}
        painPoints={[
          { problem: "Coût par conversion trop élevé", solution: "Optimisation Quality Score et enchères", icon: "💰" },
          { problem: "Performances qui stagnent depuis des mois", solution: "Tests A/B et ajustements continus", icon: "📈" },
          { problem: "Budget gaspillé sur des clics non pertinents", solution: "Mots-clés négatifs et ciblage affiné", icon: "🎯" },
          { problem: "Pas le temps d'optimiser au quotidien", solution: "Gestion proactive par nos experts", icon: "⏱️" }
        ]}
        heroTitle="Optimisation Google Ads Lyon"
        heroSubtitle="Vos campagnes tournent mais les résultats stagnent ? Notre service d'optimisation améliore continuellement vos performances pour maximiser chaque euro investi."
        heroImage={heroGoogleAds}
        heroAlt="Optimisation Google Ads Lyon - Amélioration ROI campagnes publicitaires"
        ctaPrimary={{ label: "Optimiser mes campagnes", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos résultats", href: "/realisations" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Une campagne Google Ads non optimisée gaspille en moyenne 25% du budget. Notre service d'optimisation continue analyse vos données et ajuste les paramètres pour maximiser votre retour sur investissement.
            </p>
            <p className="text-lg leading-relaxed">
              Quality score, enchères, mots-clés négatifs, tests A/B d'annonces : chaque levier est actionné pour améliorer vos performances mois après mois.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi l'optimisation continue est essentielle ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">L'environnement évolue constamment</h3>
                <p className="text-lg text-muted-foreground">
                  Concurrence, saisonnalité, algorithmes Google : le paysage publicitaire change en permanence. Sans optimisation, vos performances se dégradent naturellement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Les données révèlent les opportunités</h3>
                <p className="text-lg text-muted-foreground">
                  Chaque clic génère des données. Analyser ces données permet d'identifier les mots-clés, audiences et annonces qui performent le mieux pour concentrer le budget dessus.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre méthode d'optimisation à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Depuis 14 ans, nous optimisons les comptes Google Ads d'entreprises lyonnaises. Notre méthode data-driven combine analyse hebdomadaire et ajustements tactiques quotidiens.
              </p>
              <p className="text-lg">
                Nous suivons un processus rigoureux : audit initial, définition des KPIs, optimisations itératives, tests A/B continus, et reporting transparent sur les améliorations obtenues.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Optimisation Quality Score",
            description: "Amélioration de la pertinence annonces/mots-clés pour réduire le CPC et améliorer les positions."
          },
          {
            title: "Stratégies d'enchères",
            description: "Passage aux enchères automatiques (Target CPA, ROAS) quand les données le permettent."
          },
          {
            title: "Mots-clés négatifs",
            description: "Exclusion continue des termes non pertinents qui gaspillent votre budget."
          },
          {
            title: "Tests A/B annonces",
            description: "Tests permanents de nouveaux textes et extensions pour améliorer le CTR."
          },
          {
            title: "Ajustements enchères",
            description: "Optimisation par appareil, heure, jour, localisation selon les performances."
          },
          {
            title: "Landing page optimization",
            description: "Recommandations pour améliorer la conversion de vos pages d'atterrissage."
          }
        ]}
        pricing={[
          {
            name: "Optimisation Ponctuelle",
            price: "590€",
            features: [
              "Audit compte complet",
              "Optimisations immédiates",
              "Liste mots-clés négatifs",
              "Restructuration campagnes",
              "Rapport recommandations",
              "Support 2 semaines"
            ]
          },
          {
            name: "Optimisation Mensuelle",
            price: "15% du budget",
            popular: true,
            features: [
              "Minimum 400€/mois",
              "Optimisation continue",
              "Tests A/B permanents",
              "Rapport hebdomadaire",
              "Réunion mensuelle",
              "Support prioritaire"
            ]
          },
          {
            name: "Optimisation Premium",
            price: "20% du budget",
            features: [
              "Pour budgets > 5 000€/mois",
              "Gestionnaire dédié",
              "Optimisation quotidienne",
              "Scripts automatisés",
              "Dashboard temps réel",
              "Support téléphonique"
            ]
          }
        ]}
        faq={[
          {
            question: "En combien de temps voit-on des améliorations ?",
            answer: "Les premières optimisations montrent des résultats sous 2-4 semaines. L'amélioration significative du ROI prend généralement 2-3 mois car il faut accumuler suffisamment de données pour des optimisations profondes."
          },
          {
            question: "Pouvez-vous optimiser un compte que vous n'avez pas créé ?",
            answer: "Absolument. Nous reprenons régulièrement des comptes créés par d'autres agences ou en interne. Un audit initial identifie les opportunités d'amélioration avant de restructurer si nécessaire."
          },
          {
            question: "Qu'est-ce que le Quality Score et pourquoi est-il important ?",
            answer: "Le Quality Score (1-10) mesure la pertinence de vos annonces pour Google. Un score élevé réduit le coût par clic et améliore les positions. C'est le levier d'optimisation le plus impactant."
          },
          {
            question: "Comment mesurez-vous le succès de l'optimisation ?",
            answer: "Par l'évolution des KPIs : coût par conversion, taux de conversion, ROAS, quality score moyen. Nous comparons les performances avant/après et mois par mois dans nos rapports."
          }
        ]}
        relatedServices={[
          {
            title: "Audit Google Ads",
            description: "Analyse complète de vos campagnes",
            href: "/audit-google-ads-lyon",
            icon: <BarChart3 className="w-8 h-8" />
          },
          {
            title: "Gestion Budgétaire",
            description: "Pilotage des investissements",
            href: "/gestion-budget-google-ads-lyon",
            icon: <TrendingUp className="w-8 h-8" />
          }
        ]}
        schemaServiceName="Optimisation Google Ads Lyon"
        schemaServiceDescription="Optimisation de vos campagnes Google Ads à Lyon. Améliorez votre ROI, réduisez le coût par conversion et maximisez les performances de vos publicités."
        schemaServicePrice="15% du budget publicitaire"
        schemaPageUrl="https://vkback.com/optimisation-google-ads-lyon"
        schemaServicePriceRange="15-20% du budget"
        schemaServiceKeywords={["optimisation Google Ads Lyon", "amélioration ROI Adwords Villeurbanne", "optimisation campagnes Lyon 2", "quality score Google Rhône-Alpes", "réduction CPC Lyon Part-Dieu", "optimisation enchères Caluire", "amélioration conversions Écully"]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default OptimisationGoogleAds;

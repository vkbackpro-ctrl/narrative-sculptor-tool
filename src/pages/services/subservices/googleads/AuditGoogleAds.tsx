import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { BarChart3, TrendingUp } from "lucide-react";
import heroGoogleAds from "@/assets/audit-google-ads-analyse-lyon.jpg";

const AuditGoogleAds = () => {
  return (
    <>
      <Helmet>
        <title>Audit Google Ads Lyon | Analyse Campagnes SEA - VKBack</title>
        <meta name="description" content="Audit complet de vos campagnes Google Ads à Lyon. Identifiez les opportunités d'amélioration et optimisez votre budget publicitaire." />
        <link rel="canonical" href="https://vkback.com/audit-google-ads-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Google Ads & SEA Lyon", href: "/google-ads-sea-lyon" },
          { label: "Audit Google Ads Lyon" }
        ]}
        painPointHook={{
          question: "Vous dépensez en Google Ads sans savoir si c'est optimisé ?",
          answer: "Un audit révèle les fuites de budget et les opportunités cachées."
        }}
        heroTitle="Audit Google Ads Lyon"
        heroSubtitle="Avant d'investir davantage, savez-vous où part votre budget ? Notre audit analyse chaque aspect de vos campagnes pour identifier les optimisations prioritaires."
        heroImage={heroGoogleAds}
        heroAlt="Audit Google Ads Lyon - Analyse campagnes publicitaires SEA"
        ctaPrimary={{ label: "Demander un audit", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos résultats", href: "/realisations" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Un audit Google Ads est une analyse approfondie de votre compte publicitaire. Il révèle les points forts, les faiblesses et surtout les opportunités d'amélioration pour maximiser votre ROI.
            </p>
            <p className="text-lg leading-relaxed">
              Structure de compte, quality score, mots-clés, enchères, tracking : chaque élément est passé au crible pour vous donner un plan d'action concret et priorisé.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi faire auditer vos campagnes Google Ads ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Identifiez le gaspillage</h3>
                <p className="text-lg text-muted-foreground">
                  En moyenne, 25% du budget Google Ads est gaspillé sur des clics non pertinents. L'audit identifie ces fuites et propose des correctifs immédiats.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Découvrez les opportunités</h3>
                <p className="text-lg text-muted-foreground">
                  Mots-clés sous-exploités, extensions non utilisées, audiences ignorées : l'audit révèle les leviers de croissance que vous n'exploitez pas encore.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre méthodologie d'audit à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Notre audit suit une méthodologie éprouvée en 50+ points de contrôle. Nous analysons la structure, les performances, le tracking et la concurrence pour vous donner une vision complète.
              </p>
              <p className="text-lg">
                Le livrable est un rapport actionnable avec recommandations priorisées par impact et effort. Vous savez exactement quoi faire et dans quel ordre pour améliorer vos résultats.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Analyse structure compte",
            description: "Organisation des campagnes, groupes d'annonces, pertinence de la segmentation."
          },
          {
            title: "Audit mots-clés",
            description: "Pertinence, quality score, termes de recherche réels, mots-clés négatifs manquants."
          },
          {
            title: "Analyse annonces",
            description: "Performance des textes, utilisation des extensions, taux de clic par annonce."
          },
          {
            title: "Audit enchères",
            description: "Stratégies d'enchères, ajustements, parts d'impressions et opportunités manquées."
          },
          {
            title: "Vérification tracking",
            description: "Configuration des conversions, attribution, intégration Google Analytics."
          },
          {
            title: "Benchmark concurrence",
            description: "Positionnement par rapport aux concurrents, parts de voix, opportunités."
          }
        ]}
        pricing={[
          {
            name: "Audit Express",
            price: "290€",
            features: [
              "Analyse structure compte",
              "Top opportunités",
              "Quick wins identifiés",
              "Rapport synthétique",
              "Appel restitution 30min",
              "Livraison 3 jours"
            ]
          },
          {
            name: "Audit Complet",
            price: "490€",
            popular: true,
            features: [
              "Analyse 50+ points",
              "Benchmark concurrence",
              "Audit tracking",
              "Rapport détaillé",
              "Plan d'action priorisé",
              "Présentation 1h"
            ]
          },
          {
            name: "Audit + Optimisation",
            price: "890€",
            features: [
              "Audit complet",
              "Optimisations immédiates",
              "Restructuration compte",
              "Nouvelles campagnes",
              "Formation équipe",
              "Suivi 1 mois"
            ]
          }
        ]}
        faq={[
          {
            question: "Combien de temps prend un audit Google Ads ?",
            answer: "L'audit express est livré sous 3 jours ouvrés. L'audit complet nécessite 5-7 jours pour une analyse approfondie. Nous avons besoin d'un accès lecteur à votre compte Google Ads."
          },
          {
            question: "Faut-il un minimum de données pour un audit pertinent ?",
            answer: "Idéalement, 3 mois d'historique et au moins 1000 clics pour des analyses statistiquement fiables. Pour les comptes récents, l'audit se concentre sur la structure et le potentiel."
          },
          {
            question: "L'audit est-il utile si mes campagnes performent bien ?",
            answer: "Oui ! Même les comptes performants ont des opportunités d'amélioration. L'audit peut révéler des économies ou de nouveaux leviers de croissance pour aller encore plus loin."
          },
          {
            question: "Que se passe-t-il après l'audit ?",
            answer: "Vous recevez un rapport avec des recommandations actionnables. Vous pouvez les implémenter vous-même ou nous confier l'optimisation. L'audit n'engage pas sur la suite."
          }
        ]}
        relatedServices={[
          {
            title: "Optimisation ROI",
            description: "Amélioration continue des performances",
            href: "/optimisation-google-ads-lyon",
            icon: <TrendingUp className="w-8 h-8" />
          },
          {
            title: "Gestion Budgétaire",
            description: "Pilotage des investissements",
            href: "/gestion-budget-google-ads-lyon",
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

export default AuditGoogleAds;

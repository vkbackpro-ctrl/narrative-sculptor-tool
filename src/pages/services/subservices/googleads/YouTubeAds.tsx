import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { Zap, Target } from "lucide-react";
import heroGoogleAds from "@/assets/youtube-ads-publicite-lyon.jpg";

const YouTubeAds = () => {
  return (
    <>
      <Helmet>
        <title>YouTube Ads Lyon | Publicité Vidéo Google - VKBack</title>
        <meta name="description" content="Campagnes YouTube Ads à Lyon. Publicité vidéo ciblée pour développer votre notoriété et toucher vos audiences sur la 2ème plateforme mondiale." />
        <link rel="canonical" href="https://vkback.com/youtube-ads-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Google Ads & SEA Lyon", href: "/google-ads-sea-lyon" },
          { label: "YouTube Ads Lyon" }
        ]}
        painPointHook={{
          question: "Vous voulez toucher vos clients avec la vidéo mais ne savez pas par où commencer ?",
          answer: "YouTube Ads met vos vidéos devant les bonnes audiences avec un budget maîtrisé."
        }}
        heroTitle="YouTube Ads Lyon"
        heroSubtitle="Diffusez vos vidéos publicitaires sur YouTube, le 2ème moteur de recherche mondial. Ciblage précis, budget contrôlé et impact maximal pour votre marque."
        heroImage={heroGoogleAds}
        heroAlt="YouTube Ads Lyon - Publicité vidéo campagnes YouTube Google Ads"
        ctaPrimary={{ label: "Lancer ma campagne vidéo", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos résultats", href: "/realisations" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              YouTube compte 40 millions d'utilisateurs actifs en France. C'est la plateforme idéale pour développer votre notoriété avec des vidéos publicitaires ciblées par centres d'intérêt et intentions d'achat.
            </p>
            <p className="text-lg leading-relaxed">
              Contrairement à la TV, vous ne payez que quand quelqu'un regarde votre vidéo (au moins 30 secondes ou interaction). Budget maîtrisé et résultats mesurables.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi investir dans YouTube Ads ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">L'impact de la vidéo</h3>
                <p className="text-lg text-muted-foreground">
                  La vidéo génère 1200% plus de partages que le texte et les images combinés. C'est le format le plus mémorable pour faire passer votre message et créer une connexion émotionnelle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Ciblage Google ultra-précis</h3>
                <p className="text-lg text-muted-foreground">
                  YouTube appartient à Google : vous accédez au même ciblage puissant (mots-clés, audiences, remarketing, démographie) que pour les campagnes Search et Display.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre expertise YouTube Ads à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Nous créons des campagnes YouTube pour des entreprises lyonnaises de tous secteurs : B2B, e-commerce, services locaux. Notre approche combine stratégie créative et optimisation data.
              </p>
              <p className="text-lg">
                Configuration des différents formats (TrueView, Bumper, Discovery), ciblage audiences personnalisées, et optimisation continue pour maximiser les vues qualifiées et conversions.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "TrueView In-Stream",
            description: "Vidéos skippables avant les contenus YouTube. Paiement uniquement si le spectateur regarde 30s+."
          },
          {
            title: "Bumper Ads",
            description: "Spots de 6 secondes non-skippables pour un impact de notoriété maximal."
          },
          {
            title: "Discovery Ads",
            description: "Miniatures sponsorisées dans les résultats de recherche et suggestions YouTube."
          },
          {
            title: "Ciblage audiences",
            description: "Par centres d'intérêt, intentions d'achat, chaînes spécifiques et audiences similaires."
          },
          {
            title: "Remarketing vidéo",
            description: "Reciblez les personnes ayant interagi avec vos vidéos ou visité votre site."
          },
          {
            title: "Tracking conversions",
            description: "Mesure des actions post-visionnage : visites site, formulaires, achats."
          }
        ]}
        pricing={[
          {
            name: "Setup YouTube",
            price: "590€",
            features: [
              "Stratégie de diffusion",
              "Configuration campagne",
              "Ciblage audiences",
              "Tracking conversions",
              "Recommandations créatives",
              "Support 1 mois"
            ]
          },
          {
            name: "Gestion Mensuelle",
            price: "18% du budget",
            popular: true,
            features: [
              "Minimum 500€/mois",
              "Optimisation audiences",
              "Tests A/B créatifs",
              "Rapport performance",
              "Brand lift (si éligible)",
              "Support prioritaire"
            ]
          },
          {
            name: "Pack Vidéo Complet",
            price: "1 990€ + gestion",
            features: [
              "Création vidéo 30s",
              "Déclinaison 6s bumper",
              "Setup campagne complet",
              "Multi-formats YouTube",
              "Remarketing vidéo",
              "Stratégie omnicanale"
            ]
          }
        ]}
        faq={[
          {
            question: "Faut-il une vidéo professionnelle pour YouTube Ads ?",
            answer: "Pas nécessairement. Les vidéos authentiques filmées au smartphone peuvent très bien performer. L'important est le message et l'accroche dans les 5 premières secondes. Nous pouvons vous conseiller sur la création ou vous mettre en relation avec des vidéastes."
          },
          {
            question: "Quel budget minimum pour YouTube Ads ?",
            answer: "Pour des résultats significatifs, nous recommandons minimum 500€/mois de budget publicitaire. Le CPV (coût par vue) varie entre 0,02€ et 0,15€ selon le ciblage et la concurrence."
          },
          {
            question: "YouTube Ads génère-t-il des conversions directes ?",
            answer: "YouTube est plus efficace pour la notoriété et le haut du funnel que pour la conversion directe. Il excelle combiné à des campagnes Search/Shopping pour accompagner le parcours d'achat complet."
          },
          {
            question: "Quelle durée idéale pour une vidéo publicitaire ?",
            answer: "Pour TrueView : 15-30 secondes avec message clé dans les 5 premières secondes. Pour Bumper : exactement 6 secondes. Pour Discovery : durée libre, le contenu doit apporter de la valeur."
          }
        ]}
        relatedServices={[
          {
            title: "Display & Remarketing",
            description: "Bannières et reciblage",
            href: "/google-display-remarketing-lyon",
            icon: <Target className="w-8 h-8" />
          },
          {
            title: "Campagnes Search",
            description: "Annonces texte Google",
            href: "/google-ads-search-lyon",
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

export default YouTubeAds;

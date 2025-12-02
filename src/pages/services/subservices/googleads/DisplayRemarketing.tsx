import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { MousePointer, Target } from "lucide-react";
import heroGoogleAds from "@/assets/google-display-remarketing-lyon.jpg";

const DisplayRemarketing = () => {
  return (
    <>
      <Helmet>
        <title>Display & Remarketing Lyon | Bannières Google Ads - VKBack</title>
        <meta name="description" content="Campagnes Display et Remarketing Google Ads à Lyon. Bannières visuelles et reciblage publicitaire pour toucher vos audiences sur tout le web." />
        <link rel="canonical" href="https://vkback.com/google-display-remarketing-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Google Ads & SEA Lyon", href: "/google-ads-sea-lyon" },
          { label: "Display & Remarketing Lyon" }
        ]}
        painPointHook={{
          question: "Vos visiteurs partent sans acheter et ne reviennent jamais ?",
          answer: "Le remarketing les rattrape partout sur le web et les ramène vers vous."
        }}
        heroTitle="Display & Remarketing Lyon"
        heroSubtitle="Diffusez des bannières sur des millions de sites et reciblez les visiteurs de votre site. Le remarketing convertit jusqu'à 70% mieux qu'une première visite."
        heroImage={heroGoogleAds}
        heroAlt="Campagnes Display et Remarketing Google Ads Lyon - Bannières publicitaires reciblage"
        ctaPrimary={{ label: "Lancer mon remarketing", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos résultats", href: "/realisations" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Le réseau Display de Google touche 90% des internautes français via des bannières sur des sites partenaires (médias, blogs, applications). Idéal pour la notoriété et le remarketing.
            </p>
            <p className="text-lg leading-relaxed">
              Le remarketing cible spécifiquement les personnes ayant visité votre site : elles voient vos annonces partout et reviennent convertir. C'est la stratégie la plus rentable pour maximiser votre investissement.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi le Display et le Remarketing sont complémentaires ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Display : visibilité massive</h3>
                <p className="text-lg text-muted-foreground">
                  Touchez des audiences larges avec des bannières visuelles sur des sites thématiques. Idéal pour faire connaître votre marque et générer du trafic initial.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Remarketing : conversion maximale</h3>
                <p className="text-lg text-muted-foreground">
                  97% des visiteurs quittent un site sans convertir. Le remarketing les rattrape avec des annonces personnalisées et les ramène pour finaliser l'achat ou la demande de devis.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre expertise Display & Remarketing à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Nous créons des campagnes Display ciblées par centres d'intérêt, intentions d'achat et audiences similaires. Le remarketing est segmenté par comportement pour des messages ultra-pertinents.
              </p>
              <p className="text-lg">
                Création de bannières professionnelles aux formats Google, configuration des audiences remarketing, et optimisation continue pour maximiser les conversions à moindre coût.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Bannières responsive",
            description: "Création de visuels adaptés à tous les formats Display de Google (texte, image, responsive)."
          },
          {
            title: "Ciblage audiences",
            description: "Audiences par centres d'intérêt, intentions d'achat, données démographiques et audiences similaires."
          },
          {
            title: "Remarketing standard",
            description: "Reciblage des visiteurs de votre site avec messages personnalisés selon les pages visitées."
          },
          {
            title: "Remarketing dynamique",
            description: "Affichage automatique des produits consultés pour les boutiques e-commerce."
          },
          {
            title: "Exclusion audiences",
            description: "Évitez de cibler les clients existants ou personnes ayant déjà converti."
          },
          {
            title: "Frequency capping",
            description: "Limitation du nombre d'impressions par utilisateur pour éviter la saturation."
          }
        ]}
        pricing={[
          {
            name: "Setup Remarketing",
            price: "490€",
            features: [
              "Tag remarketing installé",
              "Audiences configurées",
              "Campagne remarketing",
              "Bannières responsive",
              "Tracking conversions",
              "Support 1 mois"
            ]
          },
          {
            name: "Gestion Mensuelle",
            price: "15% du budget",
            popular: true,
            features: [
              "Minimum 300€/mois",
              "Optimisation audiences",
              "A/B test visuels",
              "Rapport performance",
              "Ajustements enchères",
              "Support réactif"
            ]
          },
          {
            name: "Pack Complet",
            price: "890€ + gestion",
            features: [
              "Display + Remarketing",
              "Bannières pro créées",
              "Remarketing dynamique",
              "Audiences similaires",
              "Multi-placements",
              "Stratégie intégrée"
            ]
          }
        ]}
        faq={[
          {
            question: "Le remarketing est-il intrusif pour les utilisateurs ?",
            answer: "Non, quand il est bien paramétré. Nous limitons le nombre d'impressions par personne (frequency capping) et excluons automatiquement ceux qui ont déjà converti. C'est un rappel utile, pas du harcèlement."
          },
          {
            question: "Combien de visiteurs minimum pour le remarketing ?",
            answer: "Google exige minimum 100 visiteurs dans une audience pour diffuser des annonces. Pour des résultats significatifs, nous recommandons au moins 1000 visiteurs mensuels sur votre site."
          },
          {
            question: "Le Display est-il efficace pour générer des leads ?",
            answer: "Le Display seul est moins efficace que Search pour la conversion directe. Il excelle en notoriété et en support du remarketing. Combiné au Search, il améliore significativement les résultats globaux."
          },
          {
            question: "Comment créez-vous les bannières publicitaires ?",
            answer: "Nous créons des bannières responsive qui s'adaptent automatiquement à tous les formats. Pour les campagnes premium, nous pouvons créer des visuels statiques ou animés sur-mesure."
          }
        ]}
        relatedServices={[
          {
            title: "Campagnes Search",
            description: "Annonces texte sur Google",
            href: "/google-ads-search-lyon",
            icon: <Target className="w-8 h-8" />
          },
          {
            title: "YouTube Ads",
            description: "Publicité vidéo",
            href: "/youtube-ads-lyon",
            icon: <MousePointer className="w-8 h-8" />
          }
        ]}
        schemaServiceName="Display & Remarketing Google Ads Lyon"
        schemaServiceDescription="Campagnes Display et Remarketing Google Ads à Lyon. Bannières visuelles et reciblage publicitaire pour toucher vos audiences sur tout le web."
        schemaServicePrice="À partir de 490€"
        schemaPageUrl="https://vkback.com/google-display-remarketing-lyon"
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default DisplayRemarketing;

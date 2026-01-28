import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { MapPin, Target } from "lucide-react";
import heroGoogleAds from "@/assets/google-local-ads-lyon.jpg";

const GoogleLocalAds = () => {
  return (
    <>
      <Helmet>
        <title>Google Local Ads Lyon | Publicité Locale Commerces - VKBack</title>
        <meta name="description" content="Campagnes Google Local Ads à Lyon pour commerces et artisans. Attirez les clients à proximité avec des annonces locales sur Google Maps et Search." />
        <link rel="canonical" href="https://vkback.com/google-local-ads-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Faut-il une fiche Google Business Profile pour faire du Local Ads ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, c'est obligatoire. Votre fiche doit être vérifiée et complète (adresse, horaires, photos, catégorie). Nous pouvons créer et optimiser votre fiche si vous n'en avez pas encore."
                }
              },
              {
                "@type": "Question",
                "name": "Quel budget pour des résultats locaux à Lyon ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le budget dépend de votre secteur et de la zone ciblée. Pour un commerce de quartier, 300-500€/mois suffisent souvent. Pour couvrir tout Lyon, prévoyez 800-1500€/mois selon la concurrence."
                }
              },
              {
                "@type": "Question",
                "name": "Comment mesurer les visites en magasin ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google utilise les données de localisation des smartphones pour estimer les visites physiques. Cette fonctionnalité n'est disponible qu'à partir d'un certain volume de clics et d'établissements éligibles."
                }
              },
              {
                "@type": "Question",
                "name": "Local Ads fonctionne-t-il pour les services à domicile ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, avec les extensions de zone de service. Vous pouvez cibler les recherches dans les zones où vous intervenez (plombier, électricien, serrurier) sans avoir de local ouvert au public."
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
          { label: "Google Local Ads Lyon" }
        ]}
        painPointHook={{
          question: "Vos concurrents locaux apparaissent avant vous sur Google Maps ?",
          answer: "Google Local Ads vous place en tête des résultats locaux instantanément."
        }}
        painPoints={[
          { problem: "Invisible sur Google Maps", solution: "Annonces sponsorisées en haut de Maps", icon: "📍" },
          { problem: "Clients locaux qui trouvent les concurrents", solution: "Ciblage précis par quartier et arrondissement", icon: "🎯" },
          { problem: "Pas d'appels ni de visites en magasin", solution: "Click-to-call et itinéraire en un clic", icon: "📞" },
          { problem: "Fiche Google Business sous-optimisée", solution: "Optimisation GMB incluse pour maximiser l'impact", icon: "⭐" }
        ]}
        heroTitle="Google Local Ads Lyon"
        heroSubtitle="Attirez les clients qui cherchent vos services près de chez eux. Vos annonces apparaissent sur Google Maps et en haut des recherches locales à Lyon."
        heroImage={heroGoogleAds}
        heroAlt="Google Local Ads Lyon - Publicité locale commerces artisans Google Maps"
        ctaPrimary={{ label: "Attirer des clients locaux", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos résultats", href: "/realisations" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Google Local Ads combine la puissance de Google Ads avec Google Maps et votre fiche Google Business Profile. Idéal pour les commerces, restaurants, artisans et professions libérales à Lyon.
            </p>
            <p className="text-lg leading-relaxed">
              Vos annonces apparaissent avec votre adresse, horaires, numéro de téléphone et itinéraire. Les clients vous trouvent et vous contactent en un clic depuis leur mobile.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi Google Local Ads pour votre commerce lyonnais ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Captez les recherches "près de moi"</h3>
                <p className="text-lg text-muted-foreground">
                  46% des recherches Google ont une intention locale. "Restaurant Lyon", "plombier Part-Dieu", "coiffeur près de moi" : ces requêtes génèrent des visites en magasin.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Actions directes depuis l'annonce</h3>
                <p className="text-lg text-muted-foreground">
                  Appel en un clic, itinéraire GPS, site web, réservation. Chaque interaction est mesurée et optimisée pour maximiser les visites en point de vente.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre expertise Local Ads à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Nous accompagnons les commerces lyonnais depuis 14 ans : restaurants, boutiques, artisans, professions libérales. Notre connaissance du tissu local optimise vos campagnes.
              </p>
              <p className="text-lg">
                Configuration Google Business Profile optimisée, campagnes Local Search et Maps, suivi des visites en magasin et appels téléphoniques pour mesurer le vrai ROI.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Annonces Google Maps",
            description: "Apparaissez en position sponsorisée sur Google Maps quand on cherche votre activité."
          },
          {
            title: "Extensions de lieu",
            description: "Adresse, horaires et itinéraire directement dans vos annonces Search."
          },
          {
            title: "Click-to-call",
            description: "Bouton d'appel direct sur mobile pour générer des contacts immédiats."
          },
          {
            title: "Rayon géographique",
            description: "Ciblage précis par quartier, arrondissement ou rayon kilométrique autour de votre commerce."
          },
          {
            title: "Suivi visites magasin",
            description: "Mesure des visites physiques générées par vos annonces (selon éligibilité)."
          },
          {
            title: "Google Business Profile",
            description: "Optimisation de votre fiche pour maximiser l'impact des campagnes locales."
          }
        ]}
        pricing={[
          {
            name: "Setup Local",
            price: "490€",
            features: [
              "Audit fiche Google Business",
              "Optimisation profil",
              "Campagne Local configurée",
              "Extensions de lieu",
              "Tracking appels",
              "Formation gestion"
            ]
          },
          {
            name: "Gestion Mensuelle",
            price: "15% du budget",
            popular: true,
            features: [
              "Minimum 300€/mois",
              "Optimisation continue",
              "Rapport mensuel",
              "Suivi conversions",
              "Ajustements enchères",
              "Support réactif"
            ]
          },
          {
            name: "Pack Commerce",
            price: "790€ + gestion",
            features: [
              "Setup complet Local Ads",
              "Google Business optimisé",
              "Photos professionnelles",
              "Réponses aux avis",
              "Local + Search combinés",
              "Stratégie multi-établissements"
            ]
          }
        ]}
        faq={[
          {
            question: "Faut-il une fiche Google Business Profile pour faire du Local Ads ?",
            answer: "Oui, c'est obligatoire. Votre fiche doit être vérifiée et complète (adresse, horaires, photos, catégorie). Nous pouvons créer et optimiser votre fiche si vous n'en avez pas encore."
          },
          {
            question: "Quel budget pour des résultats locaux à Lyon ?",
            answer: "Le budget dépend de votre secteur et de la zone ciblée. Pour un commerce de quartier, 300-500€/mois suffisent souvent. Pour couvrir tout Lyon, prévoyez 800-1500€/mois selon la concurrence."
          },
          {
            question: "Comment mesurer les visites en magasin ?",
            answer: "Google utilise les données de localisation des smartphones pour estimer les visites physiques. Cette fonctionnalité n'est disponible qu'à partir d'un certain volume de clics et d'établissements éligibles."
          },
          {
            question: "Local Ads fonctionne-t-il pour les services à domicile ?",
            answer: "Oui, avec les extensions de zone de service. Vous pouvez cibler les recherches dans les zones où vous intervenez (plombier, électricien, serrurier) sans avoir de local ouvert au public."
          }
        ]}
        relatedServices={[
          {
            title: "SEO Local",
            description: "Référencement naturel local",
            href: "/services/seo-local-lyon",
            icon: <MapPin className="w-8 h-8" />
          },
          {
            title: "Google My Business",
            description: "Optimisation de votre fiche",
            href: "/services/optimisation-google-my-business-lyon",
            icon: <Target className="w-8 h-8" />
          }
        ]}
        schemaServiceName="Google Local Ads Lyon"
        schemaServiceDescription="Campagnes Google Local Ads à Lyon pour commerces et artisans. Attirez les clients à proximité avec des annonces locales sur Google Maps et Search."
        schemaServicePrice="À partir de 490€"
        schemaPageUrl="https://vkback.com/google-local-ads-lyon"
        schemaServicePriceRange="490€ - 790€"
        schemaServiceKeywords={["Google Local Ads Lyon", "publicité locale Google Lyon", "annonces Google Maps Lyon", "pub locale commerces Villeurbanne", "Google Ads artisans Lyon 7", "publicité proximité Rhône-Alpes", "annonces locales Google Lyon Part-Dieu", "campagnes locales Caluire Croix-Rousse"]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default GoogleLocalAds;

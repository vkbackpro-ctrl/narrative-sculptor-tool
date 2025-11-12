import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { MapPin, Star, Search, Map, Phone, Target } from "lucide-react";
import seoLocalHero from "@/assets/lyon-place-bellecour.jpg";

const SEOLocal = () => {
  return (
    <>
      <Helmet>
        <title>SEO Local Lyon - Google My Business & Référencement Local | VKBack</title>
        <meta name="description" content="SEO local à Lyon. Optimisation Google My Business, citations locales et avis clients pour apparaître dans le Pack Local Google et Google Maps." />
        <link rel="canonical" href="https://vkback.fr/services/seo-local-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Référencement SEO Lyon", href: "/referencement-seo-lyon" },
          { label: "SEO Local Lyon" }
        ]}
        heroTitle="SEO Local Lyon"
        heroSubtitle="Dominez les résultats de recherche locaux à Lyon et sa région. Optimisation Google My Business, citations locales et stratégie d'avis pour capter les clients de proximité."
        heroImage={seoLocalHero}
        heroAlt="SEO local Lyon optimisation Google My Business place Bellecour"
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Vous êtes une entreprise locale à Lyon et souhaitez être trouvé par vos clients de proximité ? Le SEO local est LA stratégie pour apparaître dans le Pack Local Google (les 3 premiers résultats avec carte) et sur Google Maps.
            </p>
            <p className="text-lg leading-relaxed">
              46% des recherches Google ont une intention locale. Si votre fiche Google My Business n'est pas optimisée, vous perdez des dizaines de clients potentiels chaque semaine au profit de vos concurrents locaux plus visibles.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi investir dans le SEO local à Lyon ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Visibilité immédiate dans votre zone</h3>
                <p className="text-lg text-muted-foreground">
                  Le SEO local vous positionne devant les clients qui cherchent vos services "près de chez moi" ou "à Lyon". Vous apparaissez dans le Pack Local, sur Google Maps, et devancez vos concurrents sur les requêtes géolocalisées.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Trafic qualifié et conversion élevée</h3>
                <p className="text-lg text-muted-foreground">
                  Les recherches locales ont un taux de conversion 3x supérieur aux recherches génériques. Les internautes qui vous trouvent via le SEO local sont prêts à acheter, visiter votre boutique ou vous contacter immédiatement.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre expertise SEO Local à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Basés à Lyon depuis plus de 10 ans, nous maîtrisons parfaitement le SEO local dans la métropole lyonnaise et la région Rhône-Alpes. Nous avons aidé des dizaines d'entreprises locales à dominer leur secteur géographique sur Google.
              </p>
              <p className="text-lg">
                Nous optimisons votre fiche Google My Business (catégories, horaires, photos, services), créons des citations locales cohérentes (Pages Jaunes, Yelp, annuaires spécialisés), mettons en place une stratégie d'avis clients, et optimisons votre site pour les requêtes géolocalisées Lyon et ses arrondissements.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Optimisation Google My Business",
            description: "Optimisation complète de votre profil : catégories, description SEO, attributs, horaires, photos haute qualité, zone de service, produits/services détaillés."
          },
          {
            title: "Citations locales NAP",
            description: "Création et optimisation de citations (nom, adresse, téléphone) sur 50+ annuaires et sites locaux pour renforcer votre cohérence SEO locale."
          },
          {
            title: "Stratégie d'avis clients",
            description: "Mise en place d'un système de collecte d'avis Google, réponses aux avis (positifs et négatifs), amélioration de votre e-réputation locale."
          },
          {
            title: "Contenu géolocalisé",
            description: "Création de pages dédiées par quartier/ville (Lyon 2, Villeurbanne...), optimisation des balises meta locales, intégration de mots-clés géographiques."
          },
          {
            title: "Google Posts & actualités",
            description: "Publication régulière de posts Google My Business (offres, actualités, événements) pour améliorer l'engagement et la visibilité locale."
          },
          {
            title: "Reporting mensuel local",
            description: "Suivi des positions locales (Pack Local), statistiques Google My Business (vues, appels, demandes d'itinéraire), évolution des avis et concurrence."
          }
        ]}
        pricing={[
          {
            name: "Optimisation GMB",
            price: "À partir de 500€",
            features: [
              "Audit Google My Business",
              "Optimisation complète profil",
              "20 photos professionnelles",
              "Configuration services/produits",
              "Setup avis clients",
              "10 citations locales",
              "Support 1 mois"
            ]
          },
          {
            name: "SEO Local Continu",
            price: "À partir de 400€/mois",
            popular: true,
            features: [
              "Gestion GMB complète",
              "Publication posts (4/mois)",
              "Réponses aux avis",
              "Création citations mensuelles",
              "Contenu géolocalisé",
              "Reporting mensuel détaillé",
              "Support continu"
            ]
          },
          {
            name: "SEO Multi-Localisations",
            price: "À partir de 800€/mois",
            features: [
              "Gestion multi-GMB (2-5 localisations)",
              "Stratégie locale avancée",
              "Pages par localisation",
              "Citations massives (100+)",
              "Campagne d'avis automatisée",
              "Reporting consolidé",
              "Support prioritaire"
            ]
          }
        ]}
        faq={[
          {
            question: "Qu'est-ce que le Pack Local Google et comment y apparaître ?",
            answer: "Le Pack Local (ou Local Pack) est l'encadré avec carte Google Maps qui affiche les 3 premiers résultats locaux pour une recherche géolocalisée. Pour y apparaître, vous devez avoir une fiche Google My Business optimisée, des avis clients, des citations locales cohérentes et un site web optimisé SEO local."
          },
          {
            question: "Combien de temps pour voir des résultats en SEO local ?",
            answer: "Les premiers résultats apparaissent en 2-4 semaines : amélioration de la visibilité GMB, hausse des appels et demandes d'itinéraire. Pour atteindre le Pack Local et dominer votre secteur, comptez 3-6 mois de travail continu (optimisation, avis, citations)."
          },
          {
            question: "Les avis Google sont-ils vraiment importants pour le SEO local ?",
            answer: "Absolument ! Les avis Google sont l'un des 3 facteurs les plus importants du SEO local. Ils influencent votre position dans le Pack Local, rassurent les clients, et augmentent le taux de clic. Nous recommandons un minimum de 20-30 avis avec une note de 4+ étoiles."
          },
          {
            question: "Que sont les citations locales et pourquoi sont-elles importantes ?",
            answer: "Les citations sont les mentions de votre entreprise (nom, adresse, téléphone - NAP) sur d'autres sites web (annuaires, Pages Jaunes, réseaux sociaux). Google vérifie la cohérence de ces informations. Plus vous avez de citations cohérentes et de qualité, plus Google vous considère comme une entreprise légitime et locale."
          },
          {
            question: "Le SEO local fonctionne-t-il pour une entreprise sans local physique ?",
            answer: "Oui ! Même sans boutique physique, vous pouvez faire du SEO local si vous servez une zone géographique définie (artisan, consultant, service à domicile). Vous configurez Google My Business en \"zone de service\" plutôt qu'adresse physique et optimisez pour les villes desservies."
          },
          {
            question: "Combien de photos faut-il sur Google My Business ?",
            answer: "Google recommande au minimum 10 photos, mais nous conseillons 20-30 photos de qualité : façade, intérieur, équipe, produits/services, ambiance. Les fiches avec 100+ photos génèrent 2x plus de demandes d'itinéraire et d'appels que celles avec peu de photos."
          }
        ]}
        relatedServices={[
          {
            title: "Référencement SEO",
            description: "Optimisation globale de votre site",
            href: "/referencement-seo-lyon",
            icon: <Search className="w-8 h-8" />
          },
          {
            title: "Audit SEO",
            description: "Analyse complète de votre site",
            href: "/services/audit-seo-lyon",
            icon: <Target className="w-8 h-8" />
          }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default SEOLocal;

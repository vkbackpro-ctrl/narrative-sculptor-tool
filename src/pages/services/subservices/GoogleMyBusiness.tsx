import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { MapPin, Star, Image, Phone, Calendar, TrendingUp } from "lucide-react";
import gmbHero from "@/assets/lyon-place-bellecour.jpg";

const GoogleMyBusiness = () => {
  return (
    <>
      <Helmet>
        <title>Google My Business Lyon - Optimisation Profil GMB | VKBack</title>
        <meta name="description" content="Optimisation Google My Business à Lyon. Création et gestion complète de votre fiche GMB pour apparaître dans le Pack Local Google et sur Google Maps." />
        <link rel="canonical" href="https://vkback.com/services/optimisation-google-my-business-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quelle est la différence entre Google My Business et Google Business Profile ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "C'est la même chose ! Google a renommé 'Google My Business' en 'Google Business Profile' en 2021. L'outil reste identique : c'est votre fiche d'entreprise qui apparaît sur Google Search et Google Maps pour les recherches locales."
                }
              },
              {
                "@type": "Question",
                "name": "Comment vérifier la propriété de ma fiche Google My Business ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google propose plusieurs méthodes : carte postale envoyée à l'adresse (la plus courante, 5-14 jours), appel téléphonique automatique, email professionnel vérifié, ou vérification instantanée si vous avez déjà un Google Search Console vérifié. Nous gérons tout le processus pour vous."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de photos faut-il ajouter sur Google My Business ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google recommande au minimum 3 photos, mais les fiches performantes ont 20-50 photos de qualité. Les entreprises avec 100+ photos génèrent 2x plus de demandes d'itinéraire et d'appels. Variez les types : façade, intérieur, équipe, produits, ambiance, clients satisfaits."
                }
              },
              {
                "@type": "Question",
                "name": "À quoi servent les Google Posts sur ma fiche GMB ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les Google Posts sont de mini-publications (photos + texte) qui apparaissent directement sur votre fiche GMB pendant 7 jours. Ils permettent de communiquer sur vos offres, actualités, événements et nouveaux produits. Google favorise les fiches actives qui publient régulièrement."
                }
              },
              {
                "@type": "Question",
                "name": "Comment obtenir plus d'avis Google pour mon entreprise ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Demandez à vos clients satisfaits ! Créez un lien court Google Review à partager par email/SMS après une prestation, ajoutez un QR code en boutique, rappelez en signature d'email. Répondez à tous les avis pour encourager d'autres clients à laisser le leur. Nous mettons en place tout ce système pour vous."
                }
              },
              {
                "@type": "Question",
                "name": "Puis-je avoir plusieurs fiches Google My Business ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, si vous avez plusieurs établissements physiques à des adresses différentes. Chaque adresse unique peut avoir sa propre fiche GMB. Si vous êtes un service sans local physique, vous pouvez avoir qu'une fiche avec votre zone de service définie. Les doublons d'une même adresse sont interdits et peuvent être suspendus."
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
          { label: "Référencement SEO Lyon", href: "/referencement-seo-lyon" },
          { label: "Google My Business Lyon" }
        ]}
        painPointHook={{
          question: "Votre fiche Google My Business est inexistante ou mal optimisée ?",
          answer: "Vous perdez des clients locaux chaque jour. Changeons ça."
        }}
        heroTitle="Optimisation Google My Business Lyon"
        heroSubtitle="Invisible sur Google Maps ? Peu d'avis clients ? Fiche GMB incomplète ? Nous optimisons votre présence locale pour apparaître dans le Pack Local à Lyon."
        heroImage={gmbHero}
        heroAlt="Optimisation Google My Business profil GMB Lyon Google Maps"
        ctaPrimary={{ label: "Optimiser ma fiche GMB", href: "/contact" }}
        ctaSecondary={{ label: "Voir les forfaits", href: "#tarifs" }}
        schemaServiceName="Optimisation Google My Business Lyon"
        schemaServiceDescription="Optimisation Google My Business à Lyon. Création et gestion complète de votre fiche GMB pour apparaître dans le Pack Local Google et sur Google Maps."
        schemaServicePrice="À partir de 490€"
        schemaPageUrl="https://vkback.com/services/optimisation-google-my-business-lyon"
        schemaServicePriceRange="490€ - 400€/mois"
        schemaServiceKeywords={["Google My Business Lyon", "optimisation GMB Villeurbanne", "fiche Google Business Lyon 3", "Pack Local Google Lyon Part-Dieu", "gestion avis Google Rhône-Alpes", "Google Maps entreprise Caluire", "agence GMB Lyon Croix-Rousse"]}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Google My Business (GMB) est THE outil pour toute entreprise locale à Lyon. Une fiche GMB bien optimisée vous fait apparaître sur Google Maps et dans le Pack Local (les 3 premiers résultats avec carte). C'est gratuit, ultra-puissant et trop souvent négligé.
            </p>
            <p className="text-lg leading-relaxed">
              La majorité des recherches locales se font sur mobile, où Google My Business occupe 50% de l'écran. Si votre fiche n'est pas optimisée avec photos, avis, horaires et catégories précises, vous perdez des dizaines de clients chaque semaine au profit de concurrents mieux référencés.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi optimiser votre Google My Business ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Visibilité immédiate sur Google Maps</h3>
                <p className="text-lg text-muted-foreground">
                  Dès que votre fiche GMB est optimisée, vous apparaissez instantanément sur Google Maps pour toutes les recherches géolocalisées liées à votre activité à Lyon. Les internautes peuvent vous trouver, voir vos horaires, appeler directement ou demander un itinéraire.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Le Pack Local est plus visible que les résultats organiques</h3>
                <p className="text-lg text-muted-foreground">
                  Sur mobile, le Pack Local Google (les 3 fiches GMB avec carte) occupe tout l'écran avant les résultats organiques classiques. Être dans ce Pack génère 2x plus de clics que la première position organique. C'est le Saint Graal du SEO local.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre expertise Google My Business à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Basés à Lyon depuis plus de 10 ans, nous avons optimisé des centaines de fiches Google My Business pour des entreprises locales lyonnaises. Nous connaissons parfaitement les subtilités du référencement local à Lyon et sa métropole.
              </p>
              <p className="text-lg">
                Nous créons ou reprenons votre fiche GMB, optimisons chaque section (catégories, description, attributs, horaires, zone de service), ajoutons des photos professionnelles, mettons en place une stratégie d'avis clients, et publions des posts réguliers pour maximiser l'engagement et la visibilité.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Création et vérification GMB",
            description: "Création de votre fiche Google My Business si elle n'existe pas, vérification de propriété, récupération d'une fiche existante, suppression de doublons."
          },
          {
            title: "Optimisation complète du profil",
            description: "Catégories principales et secondaires, description SEO optimisée (750 caractères), attributs détaillés, horaires (y compris spéciaux), zone de service, numéro de téléphone local."
          },
          {
            title: "Photos et vidéos professionnelles",
            description: "Ajout de 20-30 photos haute qualité : logo, façade, intérieur, équipe, produits/services, ambiance. Photos de couverture et profil optimisées."
          },
          {
            title: "Produits et services détaillés",
            description: "Ajout de vos produits et services avec descriptions, photos et prix. Améliore la conversion et permet de ranker sur plus de requêtes."
          },
          {
            title: "Google Posts et actualités",
            description: "Publication régulière de posts GMB (offres spéciales, événements, actualités, nouveaux produits) pour maintenir l'engagement et la fraîcheur."
          },
          {
            title: "Gestion des avis clients",
            description: "Configuration de la collecte d'avis, réponses personnalisées à tous les avis (positifs et négatifs), stratégie pour augmenter le nombre et la note."
          }
        ]}
        pricing={[
          {
            name: "Setup GMB Complet",
            price: "À partir de 500€",
            features: [
              "Création ou reprise de fiche",
              "Optimisation complète profil",
              "20 photos professionnelles",
              "Configuration produits/services",
              "Setup collecte avis",
              "10 posts Google",
              "Formation gestion GMB"
            ]
          },
          {
            name: "Gestion GMB Mensuelle",
            price: "À partir de 200€/mois",
            popular: true,
            features: [
              "Gestion complète du profil",
              "4 Google Posts/mois",
              "Réponses à tous les avis",
              "Mise à jour infos/photos",
              "Q&A optimisées",
              "Reporting mensuel détaillé",
              "Support continu"
            ]
          },
          {
            name: "Multi-Localisations GMB",
            price: "À partir de 400€/mois",
            features: [
              "Gestion 2-5 fiches GMB",
              "Stratégie multi-localisations",
              "Posts personnalisés par lieu",
              "Gestion centralisée avis",
              "Photos régulières",
              "Reporting consolidé",
              "Support prioritaire"
            ]
          }
        ]}
        faq={[
          {
            question: "Quelle est la différence entre Google My Business et Google Business Profile ?",
            answer: "C'est la même chose ! Google a renommé 'Google My Business' en 'Google Business Profile' en 2021. L'outil reste identique : c'est votre fiche d'entreprise qui apparaît sur Google Search et Google Maps pour les recherches locales."
          },
          {
            question: "Comment vérifier la propriété de ma fiche Google My Business ?",
            answer: "Google propose plusieurs méthodes : carte postale envoyée à l'adresse (la plus courante, 5-14 jours), appel téléphonique automatique, email professionnel vérifié, ou vérification instantanée si vous avez déjà un Google Search Console vérifié. Nous gérons tout le processus pour vous."
          },
          {
            question: "Combien de photos faut-il ajouter sur Google My Business ?",
            answer: "Google recommande au minimum 3 photos, mais les fiches performantes ont 20-50 photos de qualité. Les entreprises avec 100+ photos génèrent 2x plus de demandes d'itinéraire et d'appels. Variez les types : façade, intérieur, équipe, produits, ambiance, clients satisfaits."
          },
          {
            question: "À quoi servent les Google Posts sur ma fiche GMB ?",
            answer: "Les Google Posts sont de mini-publications (photos + texte) qui apparaissent directement sur votre fiche GMB pendant 7 jours. Ils permettent de communiquer sur vos offres, actualités, événements et nouveaux produits. Google favorise les fiches actives qui publient régulièrement."
          },
          {
            question: "Comment obtenir plus d'avis Google pour mon entreprise ?",
            answer: "Demandez à vos clients satisfaits ! Créez un lien court Google Review à partager par email/SMS après une prestation, ajoutez un QR code en boutique, rappelez en signature d'email. Répondez à tous les avis pour encourager d'autres clients à laisser le leur. Nous mettons en place tout ce système pour vous."
          },
          {
            question: "Puis-je avoir plusieurs fiches Google My Business ?",
            answer: "Oui, si vous avez plusieurs établissements physiques à des adresses différentes. Chaque adresse unique peut avoir sa propre fiche GMB. Si vous êtes un service sans local physique, vous pouvez avoir qu'une fiche avec votre zone de service définie. Les doublons d'une même adresse sont interdits et peuvent être suspendus."
          }
        ]}
        relatedServices={[
          {
            title: "SEO Local Lyon",
            description: "Stratégie complète de référencement local",
            href: "/services/seo-local-lyon",
            icon: <MapPin className="w-8 h-8" />
          },
          {
            title: "Référencement SEO",
            description: "Optimisation globale de votre site",
            href: "/referencement-seo-lyon",
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

export default GoogleMyBusiness;

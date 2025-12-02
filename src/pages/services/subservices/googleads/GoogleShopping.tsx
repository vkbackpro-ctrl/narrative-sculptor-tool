import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { ShoppingBag, Target } from "lucide-react";
import heroGoogleAds from "@/assets/google-shopping-campagnes-lyon.jpg";

const GoogleShopping = () => {
  return (
    <>
      <Helmet>
        <title>Google Shopping Lyon | Campagnes E-commerce - VKBack</title>
        <meta name="description" content="Campagnes Google Shopping à Lyon pour boutiques e-commerce. Mettez vos produits en avant avec photos et prix directement dans Google." />
        <link rel="canonical" href="https://vkback.com/google-shopping-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Combien de produits minimum pour Google Shopping ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Il n'y a pas de minimum technique, mais Shopping est plus efficace à partir de 20-50 produits. En dessous, les campagnes Search classiques peuvent être plus pertinentes."
                }
              },
              {
                "@type": "Question",
                "name": "Mon catalogue WooCommerce est-il compatible ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, WooCommerce s'intègre parfaitement avec Google Shopping via des plugins dédiés. Nous configurons la synchronisation automatique pour que votre catalogue soit toujours à jour."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle différence entre Shopping standard et Performance Max ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shopping standard vous donne un contrôle total sur les enchères. Performance Max utilise l'IA Google pour optimiser automatiquement sur Search, Display, YouTube et Gmail. Nous recommandons souvent les deux."
                }
              },
              {
                "@type": "Question",
                "name": "Comment optimiser les titres produits pour Shopping ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les titres doivent contenir : marque + type de produit + attributs clés (taille, couleur, matière). Ex: 'Nike Air Max 90 Homme Blanc Taille 42'. Nous optimisons chaque titre pour maximiser les impressions pertinentes."
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
          { label: "Google Shopping Lyon" }
        ]}
        painPointHook={{
          question: "Vos produits sont invisibles face aux concurrents sur Google ?",
          answer: "Google Shopping met vos produits avec photo et prix en tête des résultats."
        }}
        painPoints={[
          { problem: "Vos produits n'apparaissent pas dans les résultats Shopping", solution: "Configuration Merchant Center complète", icon: "🛒" },
          { problem: "CPC élevé et faible retour sur investissement", solution: "Stratégie d'enchères optimisée par rentabilité", icon: "📈" },
          { problem: "Catalogue mal synchronisé avec votre boutique", solution: "Flux produits automatisé et optimisé", icon: "🔄" },
          { problem: "Titres/descriptions produits non optimisés", solution: "Optimisation SEO de chaque fiche produit", icon: "✍️" }
        ]}
        heroTitle="Google Shopping Lyon"
        heroSubtitle="Affichez vos produits avec photo, prix et avis directement dans Google. Les campagnes Shopping génèrent un ROI supérieur aux annonces texte pour l'e-commerce."
        heroImage={heroGoogleAds}
        heroAlt="Campagnes Google Shopping Lyon - Publicité produits e-commerce avec photos"
        ctaPrimary={{ label: "Booster mes ventes", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos résultats", href: "/realisations" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Google Shopping affiche vos produits avec photo, prix et nom de la boutique directement dans les résultats de recherche. C'est le format publicitaire le plus efficace pour l'e-commerce.
            </p>
            <p className="text-lg leading-relaxed">
              Les utilisateurs voient le produit et le prix avant de cliquer : le trafic est ultra-qualifié et les taux de conversion sont parmi les plus élevés du digital.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi Google Shopping est incontournable pour l'e-commerce ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Visibilité produit maximale</h3>
                <p className="text-lg text-muted-foreground">
                  Vos produits apparaissent en haut de Google avec photo, prix et avis. Les internautes comparent visuellement avant de cliquer : le trafic est pré-qualifié.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">ROI supérieur au Search</h3>
                <p className="text-lg text-muted-foreground">
                  Le CPC est souvent inférieur aux annonces texte et le taux de conversion supérieur car l'utilisateur a déjà vu le prix. ROI moyen 300-500% pour les boutiques optimisées.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre expertise Google Shopping à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Nous gérons des catalogues de 50 à 50 000 produits pour des boutiques WooCommerce lyonnaises. Notre spécialité : optimiser les flux produits pour maximiser les impressions qualifiées.
              </p>
              <p className="text-lg">
                Configuration Google Merchant Center, optimisation des titres et descriptions produits, segmentation par rentabilité, et stratégies d'enchères intelligentes pour maximiser votre ROAS.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Configuration Merchant Center",
            description: "Création et configuration de votre compte Google Merchant Center avec validation du site."
          },
          {
            title: "Flux produits optimisé",
            description: "Synchronisation automatique avec WooCommerce, titres optimisés, catégories Google précises."
          },
          {
            title: "Segmentation rentabilité",
            description: "Campagnes séparées par marge, best-sellers, nouveautés pour optimiser les enchères."
          },
          {
            title: "Smart Shopping",
            description: "Activation des campagnes Performance Max avec remarketing automatique intégré."
          },
          {
            title: "Avis produits",
            description: "Intégration des avis clients pour afficher les étoiles et améliorer le CTR."
          },
          {
            title: "Reporting ROAS",
            description: "Suivi du retour sur investissement publicitaire par produit et catégorie."
          }
        ]}
        pricing={[
          {
            name: "Setup Shopping",
            price: "790€",
            features: [
              "Création Merchant Center",
              "Flux produits configuré",
              "Campagne Shopping standard",
              "Tracking e-commerce",
              "Formation gestion",
              "Support 1 mois"
            ]
          },
          {
            name: "Gestion Mensuelle",
            price: "18% du budget",
            popular: true,
            features: [
              "Minimum 500€/mois",
              "Optimisation catalogue",
              "Enchères intelligentes",
              "Segmentation produits",
              "Rapport performance",
              "Support prioritaire"
            ]
          },
          {
            name: "Pack E-commerce",
            price: "1 490€ + gestion",
            features: [
              "Setup complet Shopping",
              "Performance Max",
              "Remarketing dynamique",
              "Feed optimization avancée",
              "Comparateurs de prix",
              "Stratégie omnicanale"
            ]
          }
        ]}
        faq={[
          {
            question: "Combien de produits minimum pour Google Shopping ?",
            answer: "Il n'y a pas de minimum technique, mais Shopping est plus efficace à partir de 20-50 produits. En dessous, les campagnes Search classiques peuvent être plus pertinentes."
          },
          {
            question: "Mon catalogue WooCommerce est-il compatible ?",
            answer: "Oui, WooCommerce s'intègre parfaitement avec Google Shopping via des plugins dédiés. Nous configurons la synchronisation automatique pour que votre catalogue soit toujours à jour."
          },
          {
            question: "Quelle différence entre Shopping standard et Performance Max ?",
            answer: "Shopping standard vous donne un contrôle total sur les enchères. Performance Max utilise l'IA Google pour optimiser automatiquement sur Search, Display, YouTube et Gmail. Nous recommandons souvent les deux."
          },
          {
            question: "Comment optimiser les titres produits pour Shopping ?",
            answer: "Les titres doivent contenir : marque + type de produit + attributs clés (taille, couleur, matière). Ex: 'Nike Air Max 90 Homme Blanc Taille 42'. Nous optimisons chaque titre pour maximiser les impressions pertinentes."
          }
        ]}
        relatedServices={[
          {
            title: "SEO E-commerce",
            description: "Référencement naturel de votre boutique",
            href: "/services/seo-ecommerce-lyon",
            icon: <Target className="w-8 h-8" />
          },
          {
            title: "Boutique WooCommerce",
            description: "Création de votre boutique en ligne",
            href: "/services/boutique-woocommerce-lyon",
            icon: <ShoppingBag className="w-8 h-8" />
          }
        ]}
        schemaServiceName="Google Shopping Ads Lyon"
        schemaServiceDescription="Campagnes Google Shopping à Lyon pour boutiques e-commerce. Mettez vos produits en avant avec photos et prix directement dans Google."
        schemaServicePrice="À partir de 790€"
        schemaPageUrl="https://vkback.com/google-shopping-lyon"
        schemaServicePriceRange="790€ - 1490€ + gestion"
        schemaServiceKeywords={["Google Shopping Lyon", "campagnes produits e-commerce Villeurbanne", "publicité Shopping Lyon 3", "Google Merchant Center Rhône-Alpes", "annonces produits Lyon Part-Dieu", "Shopping Ads WooCommerce Caluire", "publicité catalogue Écully"]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default GoogleShopping;

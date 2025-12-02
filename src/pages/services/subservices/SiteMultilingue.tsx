import { Helmet } from "react-helmet";
import ServiceTemplate from "@/components/ServiceTemplate";
import { Languages, Globe, Users, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import heroImage from "@/assets/site-multilingue-wordpress-lyon.jpg";

const SiteMultilingue = () => {
  return (
    <>
      <Helmet>
        <title>Site Multilingue Lyon | Site Web Plusieurs Langues</title>
        <meta 
          name="description" 
          content="Création site internet multilingue à Lyon. Site WordPress en plusieurs langues pour toucher une clientèle internationale. Traduction, SEO multilingue." 
        />
        <link rel="canonical" href="https://vkback.fr/creation-site-multilingue-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Création de Site Internet", href: "/creation-site-internet-lyon" },
          { label: "Site Multilingue Lyon" }
        ]}
        painPointHook={{
          question: "Vous perdez des clients internationaux faute de site multilingue ?",
          answer: "Ouvrez votre marché à l'international avec un site en plusieurs langues."
        }}
        heroTitle="Création Site Multilingue à Lyon"
        heroSubtitle="Clientèle internationale que vous ne touchez pas ? Nous créons des sites WordPress multilingues avec SEO optimisé par langue et gestion professionnelle des traductions."
        heroImage={heroImage}
        heroAlt="Création site multilingue Lyon - Site web WordPress plusieurs langues international"
        ctaPrimary={{ label: "Créer mon site multilingue", href: "/contact" }}
        ctaSecondary={{ label: "Voir les options", href: "#tarifs" }}
        
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Un <strong>site multilingue</strong> vous permet de toucher une clientèle internationale en proposant 
              votre contenu dans plusieurs langues. Essentiel pour développer votre activité à l'export ou accueillir 
              une clientèle diversifiée à Lyon.
            </p>
            <p className="text-lg leading-relaxed">
              Nous utilisons WordPress avec WPML ou Polylang pour une gestion professionnelle des traductions, 
              du référencement multilingue et une navigation intuitive entre les langues.
            </p>
          </div>
        }
        
        whySection={{
          title: "Pourquoi un Site Multilingue ?",
          content: (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg border">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expansion Internationale</h3>
                <p className="text-muted-foreground">
                  Touchez de nouveaux marchés et développez votre chiffre d'affaires au-delà des frontières françaises.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expérience Utilisateur</h3>
                <p className="text-muted-foreground">
                  Offrez à chaque visiteur une expérience dans sa langue maternelle pour maximiser l'engagement.
                </p>
              </div>
            </div>
          )
        }}
        
        expertise={{
          title: "Expertise Multilingue WordPress",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Une gestion multilingue réussie va au-delà de la simple traduction. Nous adaptons votre contenu 
                culturellement, optimisons le SEO par langue et configurons une structure technique irréprochable avec WordPress.
              </p>
              <p className="text-lg">
                Nous utilisons WPML, le plugin multilingue le plus puissant de WordPress, pour une gestion professionnelle 
                des traductions. Interface intuitive, synchronisation des médias, URLs localisées et compatibilité totale 
                avec WooCommerce pour les boutiques multilingues. À Lyon, nous accompagnons PME et grands groupes dans leur expansion internationale.
              </p>
            </div>
          )
        }}
        
        features={[
          {
            title: "Plugin WPML Professionnel",
            description: "Gestion multilingue WordPress avec WPML, l'outil le plus puissant du marché"
          },
          {
            title: "SEO Multilingue Optimisé",
            description: "Optimisation SEO indépendante par langue avec URLs localisées et balises hreflang"
          },
          {
            title: "Sélecteur de Langue Intuitif",
            description: "Menu de sélection avec drapeaux, détection automatique de la langue du navigateur"
          },
          {
            title: "Synchronisation des Médias",
            description: "Gestion centralisée des images et médias partagés entre les versions linguistiques"
          },
          {
            title: "Traduction Assistée",
            description: "Accompagnement dans la traduction avec recommandation de traducteurs professionnels"
          },
          {
            title: "Menus & Widgets Traduits",
            description: "Menus de navigation, widgets et formulaires entièrement traduits et adaptés par langue"
          }
        ]}
        
        pricing={[
          {
            name: "Site Bilingue Essentiel",
            price: "À partir de 4 500€",
            features: [
              "2 langues (FR + 1 autre)",
              "Plugin WPML inclus",
              "SEO multilingue basique",
              "Sélecteur de langue",
              "Traduction assistance",
              "Formation 3h",
              "Support 2 mois"
            ]
          },
          {
            name: "Site Multilingue Business",
            price: "À partir de 7 000€",
            popular: true,
            features: [
              "3 langues au choix",
              "Tout du pack Essentiel",
              "SEO multilingue optimisé",
              "URLs localisées + hreflang",
              "Traduction partenaire incluse",
              "Formation complète 5h",
              "Support 3 mois"
            ]
          },
          {
            name: "Site Multilingue Premium",
            price: "À partir de 10 000€",
            features: [
              "5+ langues",
              "Tout du pack Business",
              "Traductions professionnelles",
              "SEO international avancé",
              "Adaptation culturelle",
              "Chef de projet dédié",
              "Formation équipe complète",
              "Support 6 mois"
            ]
          }
        ]}
        
        faq={[
          {
            question: "Combien de langues peut-on ajouter ?",
            answer: "Techniquement, il n'y a pas de limite avec WordPress et WPML. Cependant, nous recommandons de commencer avec 2-3 langues principales puis d'ajouter progressivement selon vos besoins et marchés cibles. Chaque langue supplémentaire nécessite traduction et maintenance du contenu."
          },
          {
            question: "Qui s'occupe de la traduction des contenus ?",
            answer: "Nous proposons plusieurs options : traduction automatique avec révision humaine, traduction par vos soins que nous intégrons, ou recommandation de traducteurs professionnels selon votre secteur d'activité. La qualité de la traduction est essentielle pour votre image de marque."
          },
          {
            question: "Le SEO multilingue fonctionne-t-il bien sur WordPress ?",
            answer: "Oui, WordPress avec WPML est excellent pour le SEO multilingue. Nous configurons les balises hreflang, URLs localisées (/fr/, /en/, /de/), sitemaps par langue et meta descriptions adaptées. Chaque version linguistique peut se positionner indépendamment sur Google."
          },
          {
            question: "Puis-je gérer les traductions moi-même ?",
            answer: "Absolument. WordPress avec WPML offre une interface intuitive pour gérer vos traductions en interne. Nous vous formons à l'utilisation du plugin : ajout de nouvelles langues, traduction de pages, synchronisation des médias et gestion des menus multilingues."
          }
        ]}
        
        relatedServices={[
          {
            title: "Site Corporate",
            description: "Site entreprise international B2B",
            href: "/creation-site-corporate-lyon",
            icon: <Languages className="w-8 h-8" />
          },
          {
            title: "Référencement SEO",
            description: "SEO multilingue et international",
            href: "/referencement-seo-lyon",
            icon: <MapPin className="w-8 h-8" />
          }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default SiteMultilingue;

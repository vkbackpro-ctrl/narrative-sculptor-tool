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
        <link rel="canonical" href="https://vkback.com/creation-site-multilingue-lyon" />
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
        heroTitle="Création Site Multilingue à Lyon"
        heroSubtitle="Développez votre activité à l'international avec un site WordPress multilingue. Gestion professionnelle des traductions, SEO par langue et expérience utilisateur optimisée."
        heroImage={heroImage}
        heroAlt="Création site multilingue Lyon - Site web WordPress plusieurs langues international"
        
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
            title: "Gestion Multilingue WordPress",
            description: "Plugin professionnel (WPML) pour gérer facilement les traductions de contenus"
          },
          {
            title: "SEO par Langue",
            description: "Optimisation SEO indépendante pour chaque langue avec URLs localisées"
          },
          {
            title: "Sélecteur de Langue",
            description: "Menu de sélection intuitif avec drapeaux et détection automatique de langue"
          },
          {
            title: "Traduction Professionnelle",
            description: "Accompagnement dans la traduction de vos contenus par des professionnels"
          }
        ]}
        
        pricing={[
          {
            name: "Site Bilingue",
            price: "À partir de 5 000€",
            features: [
              "2 langues (FR + 1 autre)",
              "Plugin multilingue WPML",
              "SEO multilingue",
              "Sélecteur de langue",
              "Formation gestion",
              "Traduction assistance"
            ],
            popular: true
          },
          {
            name: "Site Multilingue",
            price: "Sur mesure",
            features: [
              "3+ langues",
              "Tout du Bilingue",
              "URLs localisées",
              "Hreflang tags",
              "Support étendu",
              "Traduction incluse"
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

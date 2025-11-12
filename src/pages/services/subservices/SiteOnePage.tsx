import { Helmet } from "react-helmet";
import ServiceTemplate from "@/components/ServiceTemplate";
import { FileText, Zap, Smartphone, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";

const SiteOnePage = () => {
  return (
    <>
      <Helmet>
        <title>Site One Page Lyon | Site Web Une Page - VKBack</title>
        <meta 
          name="description" 
          content="Création site web One Page à Lyon. Design moderne sur une seule page, navigation fluide, parfait pour présenter votre activité de manière percutante. Devis gratuit." 
        />
        <link rel="canonical" href="https://vkback.com/creation-site-one-page-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Création de Site Internet", href: "/creation-site-internet-lyon" },
          { label: "Site One Page Lyon" }
        ]}
        heroTitle="Création Site One Page à Lyon"
        heroSubtitle="Site web moderne sur une seule page pour présenter votre activité de manière efficace et percutante. Navigation fluide, design attractif et conversion optimisée."
        heroImage="/placeholder.svg"
        heroAlt="Création site one page Lyon - Design web une seule page moderne responsive"
        
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Le <strong>site One Page</strong> concentre toutes les informations essentielles sur une seule page avec navigation par ancres. 
              Idéal pour présenter un produit, service ou événement de manière moderne et impactante.
            </p>
            <p className="text-lg leading-relaxed">
              Design épuré, sections bien définies et appels à l'action stratégiques pour maximiser les conversions.
            </p>
          </div>
        }
        
        whySection={{
          title: "Pourquoi un Site One Page ?",
          content: (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg border">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Navigation Fluide</h3>
                <p className="text-muted-foreground">
                  Parcours utilisateur linéaire et intuitif sans rupture, avec défilement fluide entre les sections.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Conversion Optimisée</h3>
                <p className="text-muted-foreground">
                  Structure pensée pour guider le visiteur vers l'action : contact, achat ou inscription.
                </p>
              </div>
            </div>
          )
        }}
        
        expertise={{
          title: "Notre Approche One Page",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Un site One Page bien conçu guide le visiteur à travers une histoire fluide, 
                de la découverte à l'action. Chaque section est pensée pour maximiser l'impact visuel et la conversion.
              </p>
            </div>
          )
        }}
        
        features={[
          {
            title: "Design Moderne",
            description: "Sections visuelles avec animations et effets parallax pour un rendu professionnel"
          },
          {
            title: "Menu Ancré",
            description: "Navigation par sections avec menu fixe pour accès rapide à chaque partie"
          },
          {
            title: "Responsive Mobile",
            description: "Parfaitement adapté aux smartphones et tablettes"
          },
          {
            title: "Chargement Rapide",
            description: "Optimisé pour des performances maximales malgré le contenu dense"
          }
        ]}
        
        pricing={[
          {
            name: "Site One Page",
            price: "À partir de 2 500€",
            features: [
              "Design sur-mesure",
              "5-7 sections personnalisées",
              "Formulaire de contact",
              "Responsive design",
              "Optimisation SEO",
              "Formation WordPress"
            ],
            popular: true
          }
        ]}
        
        faq={[
          {
            question: "Un site One Page est-il bon pour le SEO ?",
            answer: "Le SEO d'un site One Page est plus limité qu'un site multi-pages car tout le contenu est sur une seule URL. Cependant, avec un contenu riche, bien structuré (H1-H6) et optimisé, il peut bien se positionner sur des requêtes ciblées. Idéal pour des objectifs marketing précis plutôt que pour du SEO large."
          },
          {
            question: "Puis-je ajouter des pages supplémentaires plus tard ?",
            answer: "Absolument. Le site One Page peut évoluer vers un site multi-pages en ajoutant des pages comme Blog, Mentions Légales, ou services détaillés. La structure WordPress permet cette flexibilité."
          }
        ]}
        
        relatedServices={[
          {
            title: "Site Vitrine",
            description: "Site multi-pages pour présentation complète",
            href: "/creation-site-vitrine-lyon",
            icon: <FileText className="w-8 h-8" />
          },
          {
            title: "Site Corporate",
            description: "Site entreprise professionnel B2B",
            href: "/creation-site-corporate-lyon",
            icon: <Smartphone className="w-8 h-8" />
          }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default SiteOnePage;

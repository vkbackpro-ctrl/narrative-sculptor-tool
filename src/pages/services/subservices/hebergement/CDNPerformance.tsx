import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { Gauge, Zap } from "lucide-react";
import heroHebergement from "@/assets/cdn-performance-mondial-lyon.jpg";

const CDNPerformance = () => {
  return (
    <>
      <Helmet>
        <title>CDN & Performance Lyon | Accélération Site Web - VKBack</title>
        <meta name="description" content="CDN et optimisation performance à Lyon. Accélérez votre site avec un réseau de distribution mondial et des techniques d'optimisation avancées." />
        <link rel="canonical" href="https://vkback.com/cdn-acceleration-site-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Mon site est déjà rapide, ai-je besoin d'un CDN ?", "acceptedAnswer": { "@type": "Answer", "text": "Si vos visiteurs sont localisés (France uniquement), un bon hébergement français peut suffire. Le CDN devient crucial si vous avez des visiteurs internationaux ou beaucoup d'images." }},
              { "@type": "Question", "name": "Le CDN améliore-t-il vraiment le référencement ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, indirectement. Google utilise les Core Web Vitals comme critère de classement. Un site rapide est mieux positionné et offre une meilleure expérience utilisateur (moins de rebond)." }},
              { "@type": "Question", "name": "Cloudflare gratuit est-il suffisant ?", "acceptedAnswer": { "@type": "Answer", "text": "Pour un site vitrine, oui souvent. Pour l'e-commerce ou fort trafic, les plans payants offrent plus de points de présence, de cache et de protection DDoS." }},
              { "@type": "Question", "name": "L'optimisation est-elle ponctuelle ou continue ?", "acceptedAnswer": { "@type": "Answer", "text": "L'optimisation initiale est ponctuelle. Mais les performances peuvent se dégrader avec les mises à jour. Un monitoring continu permet de détecter et corriger les régressions." }}
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
          { label: "Hébergement Web Lyon", href: "/hebergement-web-lyon" },
          { label: "CDN & Performance Lyon" }
        ]}
        painPointHook={{
          question: "Votre site met plus de 3 secondes à charger ?",
          answer: "Un CDN et des optimisations peuvent diviser ce temps par 3."
        }}
        painPoints={[
          { problem: "Site lent pour les visiteurs éloignés", solution: "Serveurs partout dans le monde via CDN", icon: "🌍" },
          { problem: "Images trop lourdes qui ralentissent", solution: "Optimisation et compression automatique", icon: "🖼️" },
          { problem: "Score Google PageSpeed médiocre", solution: "Optimisations Core Web Vitals", icon: "📊" },
          { problem: "Bounce rate élevé à cause de la lenteur", solution: "Chargement en moins d'1 seconde", icon: "⚡" }
        ]}
        heroTitle="CDN & Performance Lyon"
        heroSubtitle="Accélérez votre site avec un réseau de distribution mondial. Vos images et fichiers sont servis depuis le serveur le plus proche de chaque visiteur."
        heroImage={heroHebergement}
        heroAlt="CDN performance Lyon - Accélération site web réseau distribution contenu"
        ctaPrimary={{ label: "Accélérer mon site", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos offres", href: "/tarifs" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Un CDN (Content Delivery Network) distribue vos fichiers sur des serveurs partout dans le monde. Chaque visiteur reçoit le contenu depuis le serveur le plus proche, réduisant drastiquement le temps de chargement.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi la vitesse est critique ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Impact sur les conversions</h3>
                <p className="text-lg text-muted-foreground">
                  Chaque seconde de chargement supplémentaire fait perdre 7% de conversions. Un site rapide vend mieux et fidélise plus.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Boost SEO Google</h3>
                <p className="text-lg text-muted-foreground">
                  Google pénalise les sites lents. Les Core Web Vitals sont un critère de classement officiel depuis 2021.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre expertise performance à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Audit de vitesse, configuration CDN (Cloudflare, BunnyCDN), optimisation images, mise en cache avancée et minification des ressources. Objectif : score PageSpeed supérieur à 90.
              </p>
            </div>
          )
        }}
        features={[
          { title: "CDN mondial", description: "Distribution de vos fichiers sur des centaines de serveurs dans le monde." },
          { title: "Optimisation images", description: "Compression, conversion WebP et lazy loading automatiques." },
          { title: "Cache navigateur", description: "Configuration optimale pour éviter les rechargements inutiles." },
          { title: "Minification CSS/JS", description: "Compression des fichiers pour réduire le poids des pages." },
          { title: "Preload ressources", description: "Chargement anticipé des éléments critiques." },
          { title: "Monitoring performance", description: "Suivi continu des Core Web Vitals et alertes." }
        ]}
        pricing={[
          { name: "Optimisation Basique", price: "290€", features: ["Audit performance", "Optimisation images", "Cache configuré", "Minification", "Rapport PageSpeed"] },
          { name: "CDN + Optimisation", price: "490€", popular: true, features: ["Configuration CDN", "Optimisation complète", "Core Web Vitals", "Monitoring 3 mois", "Support réactif"] },
          { name: "Performance Premium", price: "890€", features: ["CDN premium", "Optimisation avancée", "Cache objet Redis", "Monitoring 12 mois", "Support prioritaire"] }
        ]}
        faq={[
          { question: "Mon site est déjà rapide, ai-je besoin d'un CDN ?", answer: "Si vos visiteurs sont localisés (France uniquement), un bon hébergement français peut suffire. Le CDN devient crucial si vous avez des visiteurs internationaux ou beaucoup d'images." },
          { question: "Le CDN améliore-t-il vraiment le référencement ?", answer: "Oui, indirectement. Google utilise les Core Web Vitals comme critère de classement. Un site rapide est mieux positionné et offre une meilleure expérience utilisateur (moins de rebond)." },
          { question: "Cloudflare gratuit est-il suffisant ?", answer: "Pour un site vitrine, oui souvent. Pour l'e-commerce ou fort trafic, les plans payants offrent plus de points de présence, de cache et de protection DDoS." },
          { question: "L'optimisation est-elle ponctuelle ou continue ?", answer: "L'optimisation initiale est ponctuelle. Mais les performances peuvent se dégrader avec les mises à jour. Un monitoring continu permet de détecter et corriger les régressions." }
        ]}
        relatedServices={[
          { title: "Optimisation WordPress", description: "Performance de votre CMS", href: "/services/optimisation-performance-wordpress-lyon", icon: <Zap className="w-8 h-8" /> },
          { title: "Hébergement E-commerce", description: "Performance pour boutiques", href: "/hebergement-ecommerce-lyon", icon: <Gauge className="w-8 h-8" /> }
        ]}
        schemaServiceName="CDN & Performance Lyon"
        schemaServiceDescription="CDN et optimisation performance à Lyon. Accélérez votre site avec un réseau de distribution mondial et des techniques d'optimisation avancées."
        schemaServicePrice="À partir de 290€"
        schemaPageUrl="https://vkback.com/cdn-acceleration-site-lyon"
        schemaServicePriceRange="290€ - 890€"
        schemaServiceKeywords={["CDN Lyon", "accélération site web Lyon", "optimisation vitesse site Villeurbanne", "Core Web Vitals Lyon 1", "performance WordPress Rhône-Alpes", "PageSpeed Insights Lyon Part-Dieu", "CDN Cloudflare Lyon Caluire", "optimisation chargement Écully"]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default CDNPerformance;

import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { CloudCog, Server } from "lucide-react";
import heroHebergement from "@/assets/vps-cloud-manage-lyon.jpg";

const VPSManage = () => {
  return (
    <>
      <Helmet>
        <title>VPS Managé Lyon | Serveur Virtuel Géré - VKBack</title>
        <meta name="description" content="VPS managé à Lyon avec gestion complète. Serveur virtuel privé haute performance sans la complexité technique. Support expert inclus." />
        <link rel="canonical" href="https://vkback.com/vps-manage-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Quelle différence entre VPS et hébergement mutualisé ?", "acceptedAnswer": { "@type": "Answer", "text": "L'hébergement mutualisé partage toutes les ressources. Un VPS vous garantit des ressources dédiées dans un environnement isolé. Performances plus stables et prévisibles." }},
              { "@type": "Question", "name": "Puis-je installer ce que je veux sur mon VPS ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, mais nous recommandons de nous laisser gérer les installations pour garantir sécurité et compatibilité. Nous installons tous les logiciels nécessaires à votre projet." }},
              { "@type": "Question", "name": "Comment fonctionne la scalabilité ?", "acceptedAnswer": { "@type": "Answer", "text": "Vous pouvez augmenter RAM, CPU ou stockage à tout moment. L'upgrade se fait sans coupure de service dans la plupart des cas." }},
              { "@type": "Question", "name": "Un VPS est-il adapté pour WooCommerce ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, c'est même recommandé pour les boutiques avec catalogue conséquent ou fort trafic. Les performances sont bien supérieures à un hébergement mutualisé." }}
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
          { label: "VPS Managé Lyon" }
        ]}
        painPointHook={{
          question: "Vous voulez la puissance d'un serveur sans la complexité ?",
          answer: "Un VPS managé combine performance et tranquillité d'esprit."
        }}
        painPoints={[
          { problem: "Hébergement mutualisé trop limité", solution: "Ressources garanties et scalabilité", icon: "📈" },
          { problem: "Serveur dédié trop cher pour vos besoins", solution: "VPS abordable avec performances pro", icon: "💰" },
          { problem: "Pas de compétences en administration serveur", solution: "Gestion complète par nos équipes", icon: "🛠️" },
          { problem: "Besoin de plus de ressources rapidement", solution: "Upgrade instantané sans interruption", icon: "⚡" }
        ]}
        heroTitle="VPS Managé Lyon"
        heroSubtitle="La puissance d'un serveur dédié virtuel avec une gestion complète par nos experts. Performance, flexibilité et zéro souci technique."
        heroImage={heroHebergement}
        heroAlt="VPS managé Lyon - Serveur virtuel privé géré haute performance"
        ctaPrimary={{ label: "Configurer mon VPS", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos offres", href: "/tarifs" }}
        schemaServiceName="VPS Managé Lyon"
        schemaServiceDescription="VPS managé à Lyon avec gestion complète. Serveur virtuel privé haute performance sans la complexité technique. Support expert inclus."
        schemaServicePrice="À partir de 39€/mois"
        schemaPageUrl="https://vkback.com/vps-manage-lyon"
        schemaServicePriceRange="39€ - 149€/mois"
        schemaServiceKeywords={["VPS managé Lyon", "serveur virtuel privé Lyon", "VPS infogéré Villeurbanne", "hébergement VPS Lyon 3", "serveur cloud managé Rhône-Alpes", "VPS WordPress Lyon Part-Dieu", "hébergement VPS Caluire", "serveur virtuel géré Écully"]}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Un VPS (Virtual Private Server) vous offre des ressources garanties dans un environnement virtualisé. Plus puissant que l'hébergement mutualisé, plus abordable qu'un serveur dédié.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi choisir un VPS managé ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Le meilleur des deux mondes</h3>
                <p className="text-lg text-muted-foreground">
                  Ressources dédiées à prix abordable, scalabilité facile, et gestion complète par nos équipes. Vous profitez de la puissance sans la complexité.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "VPS managés à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Configuration optimisée WordPress/WooCommerce, sécurité renforcée et monitoring permanent. Nous gérons votre VPS comme si c'était le nôtre.
              </p>
            </div>
          )
        }}
        features={[
          { title: "Ressources garanties", description: "CPU, RAM et stockage réservés exclusivement pour vous." },
          { title: "Scalabilité instantanée", description: "Augmentez les ressources en quelques clics selon vos besoins." },
          { title: "Administration complète", description: "Installation, configuration, mises à jour gérées par nos experts." },
          { title: "Monitoring 24/7", description: "Surveillance permanente avec intervention proactive." },
          { title: "Sauvegardes automatiques", description: "Backup quotidien avec restauration en un clic." },
          { title: "Support technique", description: "Assistance réactive par des spécialistes serveur." }
        ]}
        pricing={[
          { name: "VPS Starter", price: "39€/mois", features: ["2 vCPU", "4 Go RAM", "80 Go SSD", "Infogérance incluse", "Support email"] },
          { name: "VPS Pro", price: "79€/mois", popular: true, features: ["4 vCPU", "8 Go RAM", "160 Go SSD", "Infogérance complète", "Support prioritaire"] },
          { name: "VPS Business", price: "149€/mois", features: ["8 vCPU", "16 Go RAM", "320 Go SSD", "CDN inclus", "Support téléphone", "SLA 99,9%"] }
        ]}
        faq={[
          { question: "Quelle différence entre VPS et hébergement mutualisé ?", answer: "L'hébergement mutualisé partage toutes les ressources. Un VPS vous garantit des ressources dédiées dans un environnement isolé. Performances plus stables et prévisibles." },
          { question: "Puis-je installer ce que je veux sur mon VPS ?", answer: "Oui, mais nous recommandons de nous laisser gérer les installations pour garantir sécurité et compatibilité. Nous installons tous les logiciels nécessaires à votre projet." },
          { question: "Comment fonctionne la scalabilité ?", answer: "Vous pouvez augmenter RAM, CPU ou stockage à tout moment. L'upgrade se fait sans coupure de service dans la plupart des cas." },
          { question: "Un VPS est-il adapté pour WooCommerce ?", answer: "Oui, c'est même recommandé pour les boutiques avec catalogue conséquent ou fort trafic. Les performances sont bien supérieures à un hébergement mutualisé." }
        ]}
        relatedServices={[
          { title: "Serveur Dédié", description: "Performance maximale", href: "/serveur-dedie-lyon", icon: <Server className="w-8 h-8" /> },
          { title: "Hébergement WordPress", description: "Pour sites vitrines", href: "/hebergement-wordpress-lyon", icon: <CloudCog className="w-8 h-8" /> }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default VPSManage;

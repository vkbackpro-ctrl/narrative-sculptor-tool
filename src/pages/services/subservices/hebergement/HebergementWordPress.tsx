import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { Globe, Server } from "lucide-react";
import heroHebergement from "@/assets/hebergement-wordpress-optimise-lyon.jpg";

const HebergementWordPress = () => {
  return (
    <>
      <Helmet>
        <title>Hébergement WordPress Lyon | Serveurs Optimisés - VKBack</title>
        <meta name="description" content="Hébergement WordPress optimisé à Lyon. Serveurs haute performance, SSL gratuit, sauvegardes quotidiennes et support expert WordPress." />
        <link rel="canonical" href="https://vkback.com/hebergement-wordpress-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Hébergement Web Lyon", href: "/hebergement-web-lyon" },
          { label: "Hébergement WordPress Lyon" }
        ]}
        painPointHook={{
          question: "Votre site WordPress est lent ou tombe régulièrement en panne ?",
          answer: "Un hébergement optimisé WordPress change tout."
        }}
        heroTitle="Hébergement WordPress Lyon"
        heroSubtitle="Serveurs configurés spécifiquement pour WordPress : vitesse maximale, sécurité renforcée et support expert. Votre site mérite mieux qu'un hébergement générique."
        heroImage={heroHebergement}
        heroAlt="Hébergement WordPress optimisé Lyon - Serveurs haute performance"
        ctaPrimary={{ label: "Héberger mon site", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos offres", href: "/tarifs" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Un hébergement WordPress optimisé fait toute la différence : temps de chargement divisé par 2, meilleur référencement Google, et zéro souci technique.
            </p>
            <p className="text-lg leading-relaxed">
              Nos serveurs en France sont configurés avec les technologies LiteSpeed, cache avancé et PHP 8+ pour des performances maximales sur WordPress.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi un hébergement spécialisé WordPress ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Performance optimisée</h3>
                <p className="text-lg text-muted-foreground">
                  Configuration serveur spécifique WordPress : cache LiteSpeed, OPcache PHP, CDN intégré. Votre site charge en moins de 2 secondes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Sécurité WordPress</h3>
                <p className="text-lg text-muted-foreground">
                  Protection anti-malware, firewall applicatif, isolation des comptes et mises à jour de sécurité automatiques.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre infrastructure WordPress à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Nos serveurs sont hébergés en France (Paris/Lyon) pour une latence minimale et le respect du RGPD. Infrastructure redondante avec 99,9% de disponibilité garantie.
              </p>
            </div>
          )
        }}
        features={[
          { title: "SSD NVMe ultra-rapide", description: "Stockage 10x plus rapide que les disques traditionnels." },
          { title: "SSL Let's Encrypt gratuit", description: "Certificat HTTPS inclus avec renouvellement automatique." },
          { title: "Sauvegardes quotidiennes", description: "Backup automatique avec restauration en un clic." },
          { title: "PHP 8+ et LiteSpeed", description: "Technologies dernière génération pour WordPress." },
          { title: "Support expert WordPress", description: "Assistance technique par des spécialistes WordPress." },
          { title: "Staging inclus", description: "Environnement de test pour vos modifications." }
        ]}
        pricing={[
          { name: "Starter", price: "15€/mois", features: ["1 site WordPress", "10 Go SSD", "SSL gratuit", "Backup hebdo", "Support email"] },
          { name: "Pro", price: "35€/mois", popular: true, features: ["3 sites WordPress", "30 Go SSD", "SSL gratuit", "Backup quotidien", "Staging", "Support prioritaire"] },
          { name: "Business", price: "75€/mois", features: ["Sites illimités", "100 Go SSD", "CDN inclus", "Backup temps réel", "Support téléphone", "Migration gratuite"] }
        ]}
        faq={[
          { question: "Puis-je migrer mon site existant ?", answer: "Oui, nous migrons gratuitement votre site WordPress vers nos serveurs. La migration est transparente, sans coupure de service." },
          { question: "Le nom de domaine est-il inclus ?", answer: "Non, le nom de domaine est facturé séparément (environ 15€/an). Vous pouvez aussi utiliser un domaine que vous possédez déjà." },
          { question: "Quelle est la garantie de disponibilité ?", answer: "Nous garantissons 99,9% de disponibilité. En cas de non-respect, vous êtes remboursé au prorata." },
          { question: "Combien de visiteurs puis-je accueillir ?", answer: "Nos offres gèrent facilement 10 000 à 100 000 visiteurs/mois selon le plan. Pour plus de trafic, nous proposons des solutions sur-mesure." }
        ]}
        relatedServices={[
          { title: "Hébergement E-commerce", description: "Pour boutiques WooCommerce", href: "/hebergement-ecommerce-lyon", icon: <Server className="w-8 h-8" /> },
          { title: "Migration Hébergeur", description: "Transfert de votre site", href: "/migration-hebergement-lyon", icon: <Globe className="w-8 h-8" /> }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default HebergementWordPress;

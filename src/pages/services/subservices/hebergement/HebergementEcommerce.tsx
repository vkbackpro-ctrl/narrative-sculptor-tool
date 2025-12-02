import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { Server, Globe } from "lucide-react";
import heroHebergement from "@/assets/hebergement-ecommerce-boutique-lyon.jpg";

const HebergementEcommerce = () => {
  return (
    <>
      <Helmet>
        <title>Hébergement E-commerce Lyon | WooCommerce - VKBack</title>
        <meta name="description" content="Hébergement haute performance pour boutiques WooCommerce à Lyon. Infrastructure optimisée e-commerce, sécurité renforcée et disponibilité 99,9%." />
        <link rel="canonical" href="https://vkback.com/hebergement-ecommerce-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Mon hébergement actuel suffit-il pour WooCommerce ?", "acceptedAnswer": { "@type": "Answer", "text": "Probablement non si c'est un hébergement mutualisé standard. WooCommerce nécessite plus de ressources, surtout avec un catalogue conséquent." }},
              { "@type": "Question", "name": "Combien de commandes puis-je traiter ?", "acceptedAnswer": { "@type": "Answer", "text": "Nos serveurs gèrent facilement des centaines de commandes par jour. Pour les très gros volumes, nous proposons des solutions dédiées." }},
              { "@type": "Question", "name": "Les paiements sont-ils sécurisés ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, certificat SSL inclus et conformité PCI-DSS via les passerelles de paiement (Stripe, PayPal). Vos clients paient en toute sécurité." }},
              { "@type": "Question", "name": "Que se passe-t-il en cas de panne ?", "acceptedAnswer": { "@type": "Answer", "text": "Infrastructure redondante avec basculement automatique. En cas de problème, nous intervenons immédiatement et vous êtes notifié." }}
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
          { label: "Hébergement E-commerce Lyon" }
        ]}
        painPointHook={{
          question: "Votre boutique est lente et vous perdez des ventes ?",
          answer: "Chaque seconde de chargement coûte 7% de conversions."
        }}
        painPoints={[
          { problem: "Site lent qui fait fuir les acheteurs", solution: "Serveurs SSD NVMe ultra-rapides", icon: "⚡" },
          { problem: "Hébergement mutualisé insuffisant pour e-commerce", solution: "Infrastructure dédiée WooCommerce", icon: "🏪" },
          { problem: "Pics de trafic mal gérés (soldes, promos)", solution: "Ressources scalables automatiquement", icon: "📈" },
          { problem: "Sécurité insuffisante pour les paiements", solution: "SSL, PCI-DSS et firewall inclus", icon: "🔒" }
        ]}
        heroTitle="Hébergement E-commerce Lyon"
        heroSubtitle="Infrastructure haute performance pour boutiques WooCommerce. Vitesse, sécurité et disponibilité maximales pour ne jamais perdre une vente."
        heroImage={heroHebergement}
        heroAlt="Hébergement e-commerce WooCommerce Lyon - Serveurs haute performance boutiques"
        ctaPrimary={{ label: "Héberger ma boutique", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos offres", href: "/tarifs" }}
        schemaServiceName="Hébergement E-commerce Lyon"
        schemaServiceDescription="Hébergement haute performance pour boutiques WooCommerce à Lyon. Infrastructure optimisée e-commerce, sécurité renforcée et disponibilité 99,9%."
        schemaServicePrice="À partir de 45€/mois"
        schemaPageUrl="https://vkback.com/hebergement-ecommerce-lyon"
        schemaServicePriceRange="45€ - 195€/mois"
        schemaServiceKeywords={["hébergement e-commerce Lyon", "hébergement WooCommerce Lyon", "serveur boutique en ligne Villeurbanne", "hébergement site marchand Lyon 3", "hosting e-commerce Rhône-Alpes", "serveur haute performance Lyon Part-Dieu", "hébergement boutique Caluire", "hébergeur WooCommerce Écully"]}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Une boutique e-commerce a des besoins spécifiques : performances sous charge, sécurité des transactions, disponibilité 24/7. Notre hébergement est conçu pour le commerce en ligne.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi un hébergement spécialisé e-commerce ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Performance sous charge</h3>
                <p className="text-lg text-muted-foreground">
                  Pendant les soldes ou promos, votre site doit tenir la charge. Nos serveurs scalent automatiquement pour absorber les pics de trafic.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Infrastructure e-commerce à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Serveurs optimisés WooCommerce avec cache objet Redis, CDN mondial et protection DDoS. Vos clients ont une expérience fluide où qu'ils soient.
              </p>
            </div>
          )
        }}
        features={[
          { title: "Cache Redis", description: "Accélération des requêtes base de données pour les catalogues volumineux." },
          { title: "CDN mondial", description: "Distribution des images et assets sur des serveurs proches de vos clients." },
          { title: "SSL EV Business", description: "Certificat étendu avec barre verte pour rassurer vos clients." },
          { title: "Protection DDoS", description: "Pare-feu avancé contre les attaques pour garantir la disponibilité." },
          { title: "Backup temps réel", description: "Sauvegarde continue de votre base de données et fichiers." },
          { title: "Support 24/7", description: "Assistance disponible même le week-end pour les urgences." }
        ]}
        pricing={[
          { name: "E-commerce Starter", price: "45€/mois", features: ["1 boutique", "20 Go SSD", "1000 produits", "SSL inclus", "Backup quotidien", "Support email"] },
          { name: "E-commerce Pro", price: "95€/mois", popular: true, features: ["1 boutique", "50 Go SSD", "Produits illimités", "CDN inclus", "Redis cache", "Support prioritaire"] },
          { name: "E-commerce Business", price: "195€/mois", features: ["Multi-boutiques", "200 Go SSD", "Serveur dédié", "CDN premium", "Support 24/7", "SLA 99,99%"] }
        ]}
        faq={[
          { question: "Mon hébergement actuel suffit-il pour WooCommerce ?", answer: "Probablement non si c'est un hébergement mutualisé standard. WooCommerce nécessite plus de ressources, surtout avec un catalogue conséquent." },
          { question: "Combien de commandes puis-je traiter ?", answer: "Nos serveurs gèrent facilement des centaines de commandes par jour. Pour les très gros volumes, nous proposons des solutions dédiées." },
          { question: "Les paiements sont-ils sécurisés ?", answer: "Oui, certificat SSL inclus et conformité PCI-DSS via les passerelles de paiement (Stripe, PayPal). Vos clients paient en toute sécurité." },
          { question: "Que se passe-t-il en cas de panne ?", answer: "Infrastructure redondante avec basculement automatique. En cas de problème, nous intervenons immédiatement et vous êtes notifié." }
        ]}
        relatedServices={[
          { title: "Hébergement WordPress", description: "Pour sites vitrines", href: "/hebergement-wordpress-lyon", icon: <Globe className="w-8 h-8" /> },
          { title: "Boutique WooCommerce", description: "Création de boutique", href: "/services/boutique-woocommerce-lyon", icon: <Server className="w-8 h-8" /> }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default HebergementEcommerce;

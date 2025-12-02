import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Lock, Shield, CheckCircle, AlertCircle, Globe, RefreshCw } from 'lucide-react';
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@/components/ProgressBar";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import heroSSL from "@/assets/certificat-ssl-wordpress-lyon.jpg";

const CertificatSSL = () => {
  const features = [
    {
      title: "Installation SSL Gratuit",
      description: "Certificat Let's Encrypt gratuit avec installation et configuration HTTPS complète."
    },
    {
      title: "Renouvellement Automatique",
      description: "Renouvellement tous les 90 jours sans intervention manuelle ni interruption."
    },
    {
      title: "Redirection HTTPS Forcée",
      description: "Configuration pour forcer toutes les pages en HTTPS et éviter contenu mixte."
    },
    {
      title: "SSL Extended Validation",
      description: "Certificat EV avec barre verte et garantie financière pour sites e-commerce."
    },
    {
      title: "Compatibilité Navigateurs",
      description: "Support des protocoles modernes TLS 1.3 pour tous les navigateurs récents."
    },
    {
      title: "Monitoring Validité",
      description: "Surveillance du certificat avec alerte 15 jours avant expiration."
    }
  ];

  const pricingOptions = [
    {
      name: "SSL Let's Encrypt",
      price: "Gratuit",
      features: [
        "Certificat DV gratuit",
        "Installation et configuration",
        "Renouvellement auto 90j",
        "Redirection HTTPS",
        "Cryptage 256 bits",
        "Support email"
      ]
    },
    {
      name: "SSL OV Standard",
      price: "79€/an",
      features: [
        "Certificat validation entreprise",
        "Affichage nom société",
        "Garantie 10 000€",
        "Validation 1-3 jours",
        "Wildcard sous-domaines",
        "Support prioritaire"
      ],
      popular: true
    },
    {
      name: "SSL EV Premium",
      price: "299€/an",
      features: [
        "Extended Validation",
        "Barre verte navigateur",
        "Garantie 250 000€",
        "Validation exhaustive",
        "Confiance maximale",
        "Support dédié"
      ]
    }
  ];

  const faqs = [
    {
      question: "Pourquoi ai-je besoin d'un certificat SSL sur mon site WordPress ?",
      answer: "Le SSL (HTTPS) est désormais obligatoire pour 3 raisons : Google pénalise les sites sans HTTPS dans son classement SEO, Chrome affiche un avertissement 'Non sécurisé' sur les sites HTTP, et le RGPD impose HTTPS pour tout formulaire collectant des données personnelles. De plus, les visiteurs font davantage confiance aux sites HTTPS."
    },
    {
      question: "Quelle est la différence entre SSL gratuit et payant ?",
      answer: "Un SSL Let's Encrypt gratuit offre le même niveau de cryptage qu'un SSL payant et convient à 90% des sites. Les SSL payants ajoutent : garantie financière en cas de compromission, validation de l'identité de l'entreprise affichée dans le certificat (OV/EV), et support dédié du fournisseur. Pour un e-commerce, un SSL OV ou EV renforce la confiance."
    },
    {
      question: "Mon SSL va-t-il expirer et rendre mon site inaccessible ?",
      answer: "Avec nos services de gestion SSL, non. Nous configurons le renouvellement automatique tous les 90 jours pour Let's Encrypt. Pour les SSL payants annuels, nous vous prévenons 30 jours avant expiration pour renouveler. Notre monitoring surveille la validité et vous alerte en cas de problème."
    },
    {
      question: "Puis-je passer de HTTP à HTTPS sans perdre mon référencement ?",
      answer: "Oui, la migration HTTPS est sans risque si elle est bien faite. Nous configurons les redirections 301 permanentes de HTTP vers HTTPS, mettons à jour le sitemap, et soumettons la nouvelle version HTTPS à Google Search Console. Votre référencement est préservé, voir amélioré car Google favorise HTTPS."
    }
  ];

  const relatedServices = [
    {
      title: "Sécurité WordPress",
      description: "Protection globale anti-piratage",
      href: "/services/securite-site-wordpress-lyon",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Maintenance WordPress",
      description: "Surveillance et mises à jour",
      href: "/services/maintenance-wordpress-lyon",
      icon: <RefreshCw className="w-8 h-8" />
    },
    {
      title: "Hébergement Web",
      description: "Serveurs sécurisés avec SSL inclus",
      href: "/hebergement-web-lyon",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Certificat SSL WordPress Lyon | HTTPS Sécurisé - VKBack</title>
        <meta 
          name="description" 
          content="Installation certificat SSL WordPress à Lyon. HTTPS gratuit Let's Encrypt ou SSL EV pour e-commerce. Renouvellement automatique inclus." 
        />
        <link rel="canonical" href="https://vkback.com/services/certificat-ssl-wordpress-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Pourquoi ai-je besoin d'un certificat SSL sur mon site WordPress ?", "acceptedAnswer": { "@type": "Answer", "text": "Le SSL (HTTPS) est désormais obligatoire pour 3 raisons : Google pénalise les sites sans HTTPS dans son classement SEO, Chrome affiche un avertissement 'Non sécurisé' sur les sites HTTP, et le RGPD impose HTTPS pour tout formulaire collectant des données personnelles. De plus, les visiteurs font davantage confiance aux sites HTTPS." }},
              { "@type": "Question", "name": "Quelle est la différence entre SSL gratuit et payant ?", "acceptedAnswer": { "@type": "Answer", "text": "Un SSL Let's Encrypt gratuit offre le même niveau de cryptage qu'un SSL payant et convient à 90% des sites. Les SSL payants ajoutent : garantie financière en cas de compromission, validation de l'identité de l'entreprise affichée dans le certificat (OV/EV), et support dédié du fournisseur. Pour un e-commerce, un SSL OV ou EV renforce la confiance." }},
              { "@type": "Question", "name": "Mon SSL va-t-il expirer et rendre mon site inaccessible ?", "acceptedAnswer": { "@type": "Answer", "text": "Avec nos services de gestion SSL, non. Nous configurons le renouvellement automatique tous les 90 jours pour Let's Encrypt. Pour les SSL payants annuels, nous vous prévenons 30 jours avant expiration pour renouveler. Notre monitoring surveille la validité et vous alerte en cas de problème." }},
              { "@type": "Question", "name": "Puis-je passer de HTTP à HTTPS sans perdre mon référencement ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, la migration HTTPS est sans risque si elle est bien faite. Nous configurons les redirections 301 permanentes de HTTP vers HTTPS, mettons à jour le sitemap, et soumettons la nouvelle version HTTPS à Google Search Console. Votre référencement est préservé, voir amélioré car Google favorise HTTPS." }}
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
          { label: "Maintenance & Support WordPress", href: "/maintenance-support-wordpress-lyon" },
          { label: "Certificat SSL WordPress" }
        ]}
        painPointHook={{
          question: "Votre site affiche 'Non sécurisé' dans le navigateur ?",
          answer: "Ce badge rouge fait fuir 85% des visiteurs. Corrigeons ça en 24h."
        }}
        heroTitle="Certificat SSL WordPress Lyon"
        heroSubtitle="Site en HTTP qui fait peur à vos visiteurs ? Google qui vous pénalise ? Nous installons votre certificat SSL avec redirection HTTPS et renouvellement automatique."
        heroImage={heroSSL}
        heroAlt="Certificat SSL WordPress Lyon HTTPS sécurisé"
        ctaPrimary={{ label: "Passer en HTTPS", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos offres", href: "#tarifs" }}
        introduction={
          <>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un <strong>certificat SSL</strong> sécurise les échanges entre votre site WordPress et vos visiteurs en activant le protocole HTTPS. Indispensable pour le référencement SEO et la confiance utilisateur, le SSL est désormais obligatoire sur tous les sites modernes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Nous installons et configurons votre certificat SSL avec renouvellement automatique pour que vous n'ayez plus à vous en soucier.
            </p>
          </>
        }
        features={features}
        whySection={{
          title: "Pourquoi un certificat SSL ?",
          content: (
            <p className="text-lg text-muted-foreground leading-relaxed">
              Le HTTPS est obligatoire : Google pénalise les sites HTTP, Chrome affiche un avertissement effrayant, et le RGPD l'impose pour la collecte de données. Le SSL n'est plus optionnel.
            </p>
          )
        }}
        pricing={pricingOptions}
        faq={faqs}
        relatedServices={relatedServices}
        schemaServiceName="Certificat SSL WordPress Lyon"
        schemaServiceDescription="Installation certificat SSL WordPress à Lyon. HTTPS gratuit Let's Encrypt ou SSL EV pour e-commerce. Renouvellement automatique inclus."
        schemaServicePrice="Gratuit ou à partir de 79€/an"
        schemaPageUrl="https://vkback.com/services/certificat-ssl-wordpress-lyon"
        schemaServicePriceRange="Gratuit - 390€/an"
        schemaServiceKeywords={["certificat SSL Lyon", "HTTPS WordPress Villeurbanne", "Let's Encrypt Lyon 3", "SSL e-commerce Rhône-Alpes", "sécurité HTTPS Caluire", "certificat sécurité Écully"]}
        expertise={{
          title: "Expertise SSL WordPress à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous avons déployé des centaines de certificats SSL sur des sites WordPress à Lyon et dans toute la France. De Let's Encrypt gratuit pour sites vitrines aux certificats EV pour e-commerce exigeants, nous maîtrisons toutes les configurations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre processus inclut résolution des erreurs contenu mixte, configuration HSTS, et optimisation des performances HTTPS pour maintenir la vitesse de votre site.
              </p>
            </div>
          )
        }}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default CertificatSSL;

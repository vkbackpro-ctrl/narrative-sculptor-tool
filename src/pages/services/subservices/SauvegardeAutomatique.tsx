import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Database, Cloud, RefreshCw, Shield, Clock, CheckCircle } from 'lucide-react';
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@/components/ProgressBar";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import heroSauvegarde from "@/assets/sauvegarde-wordpress-lyon.jpg";

const SauvegardeAutomatique = () => {
  const features = [
    {
      title: "Sauvegardes Quotidiennes",
      description: "Backup automatique complet chaque nuit : fichiers, base de données et configuration."
    },
    {
      title: "Conservation 30 Jours",
      description: "Rétention de 30 sauvegardes glissantes pour restaurer n'importe quelle version récente."
    },
    {
      title: "Stockage Cloud Sécurisé",
      description: "Hébergement des backups sur serveurs dédiés en France avec chiffrement AES-256."
    },
    {
      title: "Restauration Rapide",
      description: "Remise en ligne de votre site en moins de 2h en cas de problème majeur."
    },
    {
      title: "Test de Restauration",
      description: "Vérification mensuelle de l'intégrité des sauvegardes sur environnement de test."
    },
    {
      title: "Alertes Automatiques",
      description: "Notification immédiate par email en cas d'échec de sauvegarde."
    }
  ];

  const pricingOptions = [
    {
      name: "Backup Essentiel",
      price: "49€/mois",
      features: [
        "Sauvegarde hebdomadaire",
        "Conservation 4 semaines",
        "Stockage cloud France",
        "Restauration manuelle",
        "Support email",
        "1 restauration/an incluse"
      ]
    },
    {
      name: "Backup Pro",
      price: "79€/mois",
      features: [
        "Sauvegarde quotidienne",
        "Conservation 30 jours",
        "Stockage redondé",
        "Restauration rapide 2h",
        "Test mensuel intégrité",
        "3 restaurations/an incluses"
      ],
      popular: true
    },
    {
      name: "Backup Premium",
      price: "149€/mois",
      features: [
        "Sauvegarde temps réel",
        "Conservation 90 jours",
        "Multi-datacenters",
        "Restauration prioritaire 1h",
        "Tests automatiques",
        "Restaurations illimitées"
      ]
    }
  ];

  const faqs = [
    {
      question: "À quelle fréquence mon site WordPress est-il sauvegardé ?",
      answer: "Selon la formule choisie : hebdomadaire pour l'Essentiel, quotidienne pour le Pro, et en temps réel (à chaque modification) pour le Premium. Pour la plupart des sites, une sauvegarde quotidienne est largement suffisante et offre un bon équilibre entre sécurité et coût."
    },
    {
      question: "Où sont stockées mes sauvegardes ?",
      answer: "Toutes nos sauvegardes sont hébergées sur des serveurs sécurisés en France, avec chiffrement AES-256. Sur la formule Premium, vos backups sont répliqués sur 3 datacenters différents pour une redondance maximale. Nous respectons le RGPD et les données ne quittent jamais l'Union Européenne."
    },
    {
      question: "Puis-je récupérer une sauvegarde pour la télécharger ?",
      answer: "Oui, vous pouvez télécharger vos sauvegardes à tout moment depuis votre espace client. Vous recevez un fichier .zip contenant tous vos fichiers WordPress et un export SQL de votre base de données. Idéal pour créer une copie locale ou migrer vers un autre hébergeur."
    },
    {
      question: "Combien de temps prend une restauration complète ?",
      answer: "En moyenne entre 1h et 2h selon la taille de votre site. Sur la formule Premium avec restauration prioritaire, nous garantissons une remise en ligne en moins d'1h pendant les heures ouvrées. La restauration partielle (un fichier spécifique par exemple) est quasi-instantanée."
    }
  ];

  const relatedServices = [
    {
      title: "Maintenance WordPress",
      description: "Mises à jour et surveillance quotidienne",
      href: "/services/maintenance-wordpress-lyon",
      icon: <RefreshCw className="w-8 h-8" />
    },
    {
      title: "Sécurité WordPress",
      description: "Protection anti-piratage et firewall",
      href: "/services/securite-site-wordpress-lyon",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Infogérance WordPress",
      description: "Gestion complète déléguée de votre site",
      href: "/services/infogerance-wordpress-lyon",
      icon: <Clock className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sauvegarde WordPress Lyon | Backup Quotidien - VKBack</title>
        <meta 
          name="description" 
          content="Service de sauvegarde automatique WordPress à Lyon. Backup quotidien, stockage cloud sécurisé et restauration rapide. À partir de 49€/mois."
        />
        <link rel="canonical" href="https://vkback.com/services/sauvegarde-site-wordpress-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "À quelle fréquence mon site WordPress est-il sauvegardé ?", "acceptedAnswer": { "@type": "Answer", "text": "Selon la formule choisie : hebdomadaire pour l'Essentiel, quotidienne pour le Pro, et en temps réel (à chaque modification) pour le Premium. Pour la plupart des sites, une sauvegarde quotidienne est largement suffisante et offre un bon équilibre entre sécurité et coût." }},
              { "@type": "Question", "name": "Où sont stockées mes sauvegardes ?", "acceptedAnswer": { "@type": "Answer", "text": "Toutes nos sauvegardes sont hébergées sur des serveurs sécurisés en France, avec chiffrement AES-256. Sur la formule Premium, vos backups sont répliqués sur 3 datacenters différents pour une redondance maximale. Nous respectons le RGPD et les données ne quittent jamais l'Union Européenne." }},
              { "@type": "Question", "name": "Puis-je récupérer une sauvegarde pour la télécharger ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, vous pouvez télécharger vos sauvegardes à tout moment depuis votre espace client. Vous recevez un fichier .zip contenant tous vos fichiers WordPress et un export SQL de votre base de données. Idéal pour créer une copie locale ou migrer vers un autre hébergeur." }},
              { "@type": "Question", "name": "Combien de temps prend une restauration complète ?", "acceptedAnswer": { "@type": "Answer", "text": "En moyenne entre 1h et 2h selon la taille de votre site. Sur la formule Premium avec restauration prioritaire, nous garantissons une remise en ligne en moins d'1h pendant les heures ouvrées. La restauration partielle (un fichier spécifique par exemple) est quasi-instantanée." }}
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
          { label: "Sauvegarde Automatique WordPress" }
        ]}
        painPointHook={{
          question: "Vous n'avez jamais sauvegardé votre site ?",
          answer: "Si votre site crash demain, perdrez-vous tout ? Sécurisons vos données."
        }}
        painPoints={[
          { problem: "Aucune sauvegarde en place actuellement", solution: "Backup automatique quotidien mis en place", icon: "💾" },
          { problem: "Sauvegardes manuelles souvent oubliées", solution: "Automatisation complète sans intervention", icon: "⚙️" },
          { problem: "Piratage ou erreur = perte de tout le travail", solution: "Restauration en 2h maximum garantie", icon: "⏱️" },
          { problem: "Backups stockés sur le même serveur", solution: "Stockage cloud sécurisé en France", icon: "☁️" }
        ]}
        heroTitle="Sauvegarde Automatique WordPress Lyon"
        heroSubtitle="Pas de backup en place ? Sauvegardes manuelles oubliées ? Nous automatisons tout : backup quotidien, stockage sécurisé, restauration en 2h si besoin."
        heroImage={heroSauvegarde}
        heroAlt="Sauvegarde automatique WordPress Lyon - Backup quotidien cloud sécurisé restauration rapide"
        ctaPrimary={{ label: "Sauvegarder mon site", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos forfaits", href: "#tarifs" }}
        introduction={
          <>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Une <strong>sauvegarde automatique quotidienne</strong> de votre site WordPress est la meilleure assurance contre la perte de données. Piratage, erreur de manipulation, crash serveur ou mise à jour qui tourne mal : avec nos backups automatiques, vous pouvez restaurer votre site en quelques clics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Nos solutions de sauvegarde WordPress à Lyon incluent stockage cloud sécurisé en France, tests d'intégrité et restauration rapide garantie.
            </p>
          </>
        }
        features={features}
        whySection={{
          title: "Pourquoi les sauvegardes sont cruciales ?",
          content: (
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sans sauvegarde, une erreur humaine, un piratage ou un crash serveur peut vous faire perdre des années de travail en quelques secondes. Une stratégie de backup solide est votre meilleure assurance.
            </p>
          )
        }}
        pricing={pricingOptions}
        faq={faqs}
        relatedServices={relatedServices}
        schemaServiceName="Sauvegarde Automatique WordPress Lyon"
        schemaServiceDescription="Service de sauvegarde automatique WordPress à Lyon. Backup quotidien, stockage cloud sécurisé et restauration rapide. À partir de 49€/mois."
        schemaServicePrice="À partir de 49€/mois"
        schemaPageUrl="https://vkback.com/services/sauvegarde-site-wordpress-lyon"
        schemaServicePriceRange="49€ - 149€/mois"
        schemaServiceKeywords={["sauvegarde WordPress Lyon", "backup site web Villeurbanne", "sauvegarde automatique Lyon 3", "backup cloud France Rhône-Alpes", "restauration WordPress Lyon Part-Dieu", "backup quotidien Caluire", "sauvegarde site internet Écully"]}
        expertise={{
          title: "Expertise Sauvegarde WordPress à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous gérons les sauvegardes de centaines de sites WordPress à Lyon et Rhône-Alpes. Notre infrastructure de backup utilise des serveurs OVH en France avec réplication géographique pour les sites critiques.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nos processus de sauvegarde sont conformes RGPD et nos tests mensuels garantissent que vos backups sont toujours restaurables en cas d'urgence.
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

export default SauvegardeAutomatique;

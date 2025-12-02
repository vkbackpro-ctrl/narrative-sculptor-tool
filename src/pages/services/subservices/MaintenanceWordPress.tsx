import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Wrench, Shield, RefreshCw, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@/components/ProgressBar";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import heroMaintenanceWordPress from "@/assets/maintenance-wordpress-lyon.jpg";

const MaintenanceWordPress = () => {
  const features = [
    {
      title: "Mises à Jour WordPress",
      description: "Core WordPress, thèmes et plugins mis à jour chaque semaine pour sécurité optimale."
    },
    {
      title: "Tests Pré-Mise à Jour",
      description: "Vérification de compatibilité sur environnement de staging avant application en production."
    },
    {
      title: "Sauvegardes Automatiques",
      description: "Backup complet avant chaque mise à jour majeure avec restauration rapide si nécessaire."
    },
    {
      title: "Surveillance Sécurité",
      description: "Scan anti-malware hebdomadaire et détection de vulnérabilités connues."
    },
    {
      title: "Optimisation Base Données",
      description: "Nettoyage mensuel des tables WordPress pour maintenir les performances."
    },
    {
      title: "Rapports Détaillés",
      description: "Compte-rendu mensuel des mises à jour effectuées et recommandations techniques."
    }
  ];

  const pricingOptions = [
    {
      name: "Maintenance Essentielle",
      price: "59€/mois",
      features: [
        "Mises à jour WordPress hebdomadaires",
        "Mises à jour plugins et thèmes",
        "Sauvegarde avant mise à jour",
        "Monitoring temps de réponse",
        "Support email sous 48h",
        "Rapport mensuel"
      ]
    },
    {
      name: "Maintenance Pro",
      price: "99€/mois",
      features: [
        "Tout de l'Essentielle",
        "Sauvegardes quotidiennes 30j",
        "Scan sécurité hebdomadaire",
        "Optimisation base de données",
        "Support prioritaire sous 24h",
        "Environnement de staging"
      ],
      popular: true
    },
    {
      name: "Maintenance Premium",
      price: "199€/mois",
      features: [
        "Tout de la Maintenance Pro",
        "Monitoring 24/7 avec alertes",
        "Firewall et protection DDoS",
        "Support téléphone prioritaire",
        "Hotfix urgent sous 4h",
        "Optimisations mensuelles"
      ]
    }
  ];

  const faqs = [
    {
      question: "Pourquoi est-il important de maintenir WordPress à jour ?",
      answer: "Les mises à jour WordPress corrigent des failles de sécurité, améliorent les performances et ajoutent de nouvelles fonctionnalités. 70% des sites WordPress piratés utilisent une version obsolète. Une maintenance régulière réduit drastiquement les risques de piratage et garantit la compatibilité avec les dernières technologies web."
    },
    {
      question: "Que se passe-t-il si une mise à jour casse mon site ?",
      answer: "Nous effectuons systématiquement une sauvegarde complète avant chaque mise à jour majeure. En cas de problème, nous restaurons immédiatement la version précédente fonctionnelle. Sur nos formules Pro et Premium, nous testons d'abord les mises à jour sur un environnement de staging avant de les appliquer en production."
    },
    {
      question: "À quelle fréquence mon site sera-t-il mis à jour ?",
      answer: "WordPress core est mis à jour dès qu'une version stable est disponible (généralement tous les 2-3 mois). Les plugins et thèmes sont mis à jour chaque semaine. Les mises à jour mineures de sécurité sont appliquées immédiatement. Vous recevez une notification avant chaque intervention."
    },
    {
      question: "Puis-je choisir quels plugins mettre à jour ?",
      answer: "Absolument. Vous pouvez définir une liste de plugins critiques à ne pas mettre à jour automatiquement (par exemple des plugins fortement personnalisés). Nous discutons avec vous d'une stratégie de mise à jour adaptée à votre site lors de la mise en place du contrat de maintenance."
    }
  ];

  const relatedServices = [
    {
      title: "Sécurité WordPress",
      description: "Protection anti-piratage et monitoring 24/7",
      href: "/services/securite-site-wordpress-lyon",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Sauvegarde Automatique",
      description: "Backup quotidien et restauration rapide",
      href: "/services/sauvegarde-site-wordpress-lyon",
      icon: <RefreshCw className="w-8 h-8" />
    },
    {
      title: "Support Technique",
      description: "Assistance et résolution de bugs WordPress",
      href: "/services/support-technique-wordpress-lyon",
      icon: <AlertTriangle className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contrat Maintenance WordPress Lyon | Mises à Jour - VKBack</title>
        <meta 
          name="description" 
          content="Service de maintenance WordPress à Lyon. Mises à jour régulières, sauvegardes, monitoring 24/7 et support technique. À partir de 59€/mois." 
        />
        <link rel="canonical" href="https://vkback.com/services/maintenance-wordpress-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Pourquoi est-il important de maintenir WordPress à jour ?", "acceptedAnswer": { "@type": "Answer", "text": "Les mises à jour WordPress corrigent des failles de sécurité, améliorent les performances et ajoutent de nouvelles fonctionnalités. 70% des sites WordPress piratés utilisent une version obsolète. Une maintenance régulière réduit drastiquement les risques de piratage et garantit la compatibilité avec les dernières technologies web." }},
              { "@type": "Question", "name": "Que se passe-t-il si une mise à jour casse mon site ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous effectuons systématiquement une sauvegarde complète avant chaque mise à jour majeure. En cas de problème, nous restaurons immédiatement la version précédente fonctionnelle. Sur nos formules Pro et Premium, nous testons d'abord les mises à jour sur un environnement de staging avant de les appliquer en production." }},
              { "@type": "Question", "name": "À quelle fréquence mon site sera-t-il mis à jour ?", "acceptedAnswer": { "@type": "Answer", "text": "WordPress core est mis à jour dès qu'une version stable est disponible (généralement tous les 2-3 mois). Les plugins et thèmes sont mis à jour chaque semaine. Les mises à jour mineures de sécurité sont appliquées immédiatement. Vous recevez une notification avant chaque intervention." }},
              { "@type": "Question", "name": "Puis-je choisir quels plugins mettre à jour ?", "acceptedAnswer": { "@type": "Answer", "text": "Absolument. Vous pouvez définir une liste de plugins critiques à ne pas mettre à jour automatiquement (par exemple des plugins fortement personnalisés). Nous discutons avec vous d'une stratégie de mise à jour adaptée à votre site lors de la mise en place du contrat de maintenance." }}
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
          { label: "Maintenance WordPress Lyon" }
        ]}
        painPointHook={{
          question: "Peur que votre site plante ou soit piraté ?",
          answer: "70% des sites WordPress piratés n'étaient pas à jour. Prévenons ça ensemble."
        }}
        painPoints={[
          { problem: "Alertes de mises à jour que vous ignorez par manque de temps", solution: "Nous gérons toutes les mises à jour pour vous", icon: "⏰" },
          { problem: "Site qui a planté après une mise à jour mal gérée", solution: "Tests pré-mise à jour sur environnement de staging", icon: "🔧" },
          { problem: "Plugins obsolètes qui créent des failles de sécurité", solution: "Mise à jour hebdomadaire sécurisée", icon: "🛡️" },
          { problem: "Aucune visibilité sur l'état technique de votre site", solution: "Rapports mensuels détaillés", icon: "📊" }
        ]}
        heroTitle="Maintenance WordPress Lyon"
        heroSubtitle="Mises à jour jamais faites ? Plugins obsolètes ? Site qui rame ? Nous prenons en charge toute la maintenance technique pour que vous dormiez tranquille."
        heroImage={heroMaintenanceWordPress}
        heroAlt="Maintenance WordPress Lyon - Mises à jour sécurité monitoring support technique expert WordPress Lyon Rhône-Alpes"
        ctaPrimary={{ label: "Protéger mon site", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos forfaits", href: "#tarifs" }}
        introduction={
          <>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un site WordPress nécessite une <strong>maintenance régulière</strong> pour rester sécurisé, performant et à jour. Notre service de maintenance WordPress à Lyon prend en charge toutes les tâches techniques : mises à jour du core, des plugins et thèmes, sauvegardes automatiques, surveillance sécurité et optimisations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Concentrez-vous sur votre activité pendant que nous veillons sur votre site 24/7.
            </p>
          </>
        }
        whySection={{
          title: "Pourquoi la maintenance WordPress est essentielle ?",
          content: (
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un site WordPress sans maintenance est une porte ouverte aux pirates et aux bugs. Les mises à jour régulières corrigent les failles de sécurité, améliorent les performances et garantissent la compatibilité avec les dernières technologies web.
            </p>
          )
        }}
        features={features}
        pricing={pricingOptions}
        faq={faqs}
        relatedServices={relatedServices}
        schemaServiceName="Maintenance WordPress Lyon"
        schemaServiceDescription="Service de maintenance WordPress à Lyon. Mises à jour régulières, sauvegardes, monitoring 24/7 et support technique. À partir de 59€/mois."
        schemaServicePrice="À partir de 59€/mois"
        schemaPageUrl="https://vkback.com/services/maintenance-wordpress-lyon"
        schemaServicePriceRange="59€ - 199€/mois"
        schemaServiceKeywords={["maintenance WordPress Lyon", "contrat maintenance site web Lyon", "mise à jour WordPress Villeurbanne", "support WordPress Lyon 6", "maintenance site internet Rhône", "gestion WordPress Caluire", "webmaster WordPress Lyon Part-Dieu", "entretien site WordPress Écully"]}
        expertise={{
          title: "Expertise Maintenance WordPress à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Avec plus de 10 ans d'expérience en maintenance WordPress à Lyon, nous gérons la maintenance technique de dizaines de sites pour des TPE, PME et associations. Notre approche combine automatisation et contrôle humain pour garantir fiabilité et réactivité.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous utilisons les meilleures pratiques recommandées par WordPress.org et maintenons une veille constante sur les nouvelles vulnérabilités pour protéger votre site efficacement.
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

export default MaintenanceWordPress;

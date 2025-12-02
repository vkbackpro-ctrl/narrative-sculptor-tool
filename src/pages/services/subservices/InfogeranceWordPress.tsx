import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Clock, Users, Shield, Rocket, TrendingUp, Headphones } from 'lucide-react';
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@/components/ProgressBar";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import heroInfogerance from "@/assets/infogerance-wordpress-lyon.jpg";

const InfogeranceWordPress = () => {
  const features = [
    {
      title: "Gestion Complète Déléguée",
      description: "Nous prenons en charge 100% de la technique : hébergement, maintenance, sécurité, sauvegardes."
    },
    {
      title: "Mises à Jour Proactives",
      description: "WordPress, plugins, thèmes et sécurité gérés en permanence sans intervention de votre part."
    },
    {
      title: "Support Prioritaire Illimité",
      description: "Hotline technique dédiée avec réponse sous 2h et résolution rapide garantie."
    },
    {
      title: "Optimisations Mensuelles",
      description: "Amélioration continue des performances, SEO et expérience utilisateur."
    },
    {
      title: "Monitoring 24/7",
      description: "Surveillance permanente uptime, performances et sécurité avec astreinte."
    },
    {
      title: "Reporting Personnalisé",
      description: "Dashboard en temps réel et rapports mensuels détaillés de toutes nos actions."
    }
  ];

  const pricingOptions = [
    {
      name: "Infogérance Essentielle",
      price: "299€/mois",
      features: [
        "Hébergement pro inclus",
        "Maintenance complète",
        "Sauvegardes quotidiennes",
        "Support email sous 4h",
        "5h modifications/mois",
        "Monitoring uptime 24/7"
      ]
    },
    {
      name: "Infogérance Business",
      price: "599€/mois",
      features: [
        "Tout de l'Essentielle",
        "Support prioritaire sous 2h",
        "15h modifications/mois",
        "Optimisations mensuelles",
        "Hotline téléphone",
        "Reporting hebdomadaire"
      ],
      popular: true
    },
    {
      name: "Infogérance Enterprise",
      price: "Sur mesure",
      features: [
        "Tout de la Business",
        "Technicien dédié nommé",
        "Support illimité 24/7",
        "Heures de dev illimitées",
        "SLA 99.9% garanti",
        "Comité technique trimestriel"
      ]
    }
  ];

  const faqs = [
    {
      question: "Quelle est la différence entre maintenance et infogérance WordPress ?",
      answer: "La maintenance se concentre sur les aspects techniques (mises à jour, sauvegardes, sécurité). L'infogérance va beaucoup plus loin : nous devenons votre DSI externalisée et gérons TOUT, y compris hébergement, support utilisateurs, évolutions fonctionnelles, stratégie technique et conseil. C'est une délégation complète."
    },
    {
      question: "L'infogérance inclut-elle l'hébergement de mon site ?",
      answer: "Oui, toutes nos formules d'infogérance incluent un hébergement WordPress optimisé et géré par nos soins. Vous n'avez plus à vous soucier de renouveler votre hébergement ou de gérer les aspects serveur. Tout est centralisé et pris en charge dans le forfait mensuel."
    },
    {
      question: "Puis-je demander des modifications et évolutions de mon site ?",
      answer: "Absolument. Nos formules incluent un forfait d'heures mensuel pour les modifications (5h à illimitées selon formule). Petites modifications de contenu, ajouts de pages, nouvelles fonctionnalités : nous sommes votre équipe technique dédiée. Les développements complexes font l'objet d'un devis complémentaire."
    },
    {
      question: "Que se passe-t-il si je veux arrêter l'infogérance ?",
      answer: "Nos contrats sont sans engagement (résiliable avec 1 mois de préavis). En cas d'arrêt, nous vous remettons une copie complète de votre site (fichiers + base de données) et vous accompagnons dans le transfert vers votre nouvel hébergeur si besoin. Vous restez propriétaire à 100% de votre site et vos données."
    }
  ];

  const relatedServices = [
    {
      title: "Maintenance WordPress",
      description: "Surveillance technique et mises à jour",
      href: "/services/maintenance-wordpress-lyon",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Support Technique",
      description: "Assistance réactive WordPress",
      href: "/services/support-technique-wordpress-lyon",
      icon: <Headphones className="w-8 h-8" />
    },
    {
      title: "Hébergement Web",
      description: "Serveurs haute performance Lyon",
      href: "/hebergement-web-lyon",
      icon: <Rocket className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Infogérance WordPress Lyon | Gestion Complète Déléguée</title>
        <meta 
          name="description" 
          content="Infogérance WordPress à Lyon. Gestion complète déléguée : hébergement, maintenance, support, optimisations. À partir de 299€/mois." 
        />
        <link rel="canonical" href="https://vkback.fr/services/infogerance-wordpress-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Maintenance & Support WordPress", href: "/maintenance-support-wordpress-lyon" },
          { label: "Infogérance WordPress Lyon" }
        ]}
        painPointHook={{
          question: "Vous n'avez ni le temps ni les compétences pour gérer votre site ?",
          answer: "Déléguez-nous tout et concentrez-vous sur votre métier."
        }}
        heroTitle="Infogérance WordPress Lyon"
        heroSubtitle="Pas le temps de gérer votre site ? Peur de faire des bêtises ? Nous prenons en charge 100% de la technique : hébergement, maintenance, sécurité, optimisations."
        heroImage={heroInfogerance}
        heroAlt="Infogérance WordPress Lyon gestion complète déléguée"
        ctaPrimary={{ label: "Déléguer la gestion", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos forfaits", href: "#tarifs" }}
        introduction={
          <>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'<strong>infogérance WordPress</strong> est une gestion technique 100% déléguée : nous devenons votre DSI externalisée et prenons en charge hébergement, maintenance, sécurité, sauvegardes, support utilisateurs et évolutions. Vous vous concentrez sur votre cœur de métier pendant que nous gérons tout l'aspect technique.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Une solution clé en main pour les entreprises qui veulent externaliser complètement leur infrastructure WordPress.
            </p>
          </>
        }
        features={features}
        whySection={{
          title: "Pourquoi externaliser en infogérance ?",
          content: (
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'infogérance WordPress vous libère de toute contrainte technique et vous donne accès à une équipe d'experts pour le prix d'un demi-poste. Concentrez-vous sur votre cœur de métier.
            </p>
          )
        }}
        pricing={pricingOptions}
        faq={faqs}
        relatedServices={relatedServices}
        expertise={{
          title: "Expertise Infogérance WordPress à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous gérons en infogérance complète une trentaine de sites WordPress pour des PME et ETI à Lyon. Notre approche combine industrialisation des processus (automatisation, monitoring) et relation de proximité avec un interlocuteur technique dédié.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous intervenons comme une véritable extension de votre équipe, participant à vos comités techniques et vous conseillant sur votre stratégie digitale.
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

export default InfogeranceWordPress;

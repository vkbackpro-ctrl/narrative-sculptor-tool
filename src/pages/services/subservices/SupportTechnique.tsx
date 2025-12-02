import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ServiceTemplate from '@/components/ServiceTemplate';
import { AlertTriangle, MessageCircle, Phone, Clock, CheckCircle, Wrench } from 'lucide-react';
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@/components/ProgressBar";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import heroSupport from "@/assets/support-technique-wordpress-lyon.jpg";

const SupportTechnique = () => {
  const features = [
    {
      title: "Support Réactif",
      description: "Réponse garantie sous 24h ouvrées par email, 4h sur formule Premium."
    },
    {
      title: "Assistance Téléphonique",
      description: "Hotline technique disponible du lundi au vendredi 9h-18h pour interventions urgentes."
    },
    {
      title: "Résolution Bugs",
      description: "Diagnostic et correction des erreurs PHP, conflits de plugins et problèmes d'affichage."
    },
    {
      title: "Modifications Mineures",
      description: "Petites modifications de contenu, ajustements CSS et configuration plugins inclus."
    },
    {
      title: "Hotfix Urgent",
      description: "Intervention d'urgence sous 4h en cas de site hors ligne ou bug critique."
    },
    {
      title: "Conseils Techniques",
      description: "Accompagnement et recommandations d'experts pour optimiser votre utilisation WordPress."
    }
  ];

  const pricingOptions = [
    {
      name: "Support Ponctuel",
      price: "100€/h",
      features: [
        "Intervention à la demande",
        "Résolution bugs WordPress",
        "Modifications techniques",
        "Conseil expert",
        "Réponse sous 48h",
        "Sans engagement"
      ]
    },
    {
      name: "Support Forfait 5h",
      price: "450€",
      features: [
        "5h d'assistance prépayées",
        "Réponse sous 24h",
        "Résolution bugs",
        "Modifications mineures",
        "Validité 3 mois",
        "Tarif horaire 90€/h"
      ],
      popular: true
    },
    {
      name: "Support Forfait 10h",
      price: "800€",
      features: [
        "10h d'assistance prépayées",
        "Réponse prioritaire sous 4h",
        "Hotline téléphonique",
        "Hotfix urgent inclus",
        "Validité 6 mois",
        "Tarif horaire 80€/h"
      ]
    }
  ];

  const faqs = [
    {
      question: "Quels types de problèmes pouvez-vous résoudre ?",
      answer: "Nous traitons tous les problèmes techniques WordPress : erreurs PHP (white screen, 500), conflits de plugins, problèmes d'affichage CSS, bugs JavaScript, soucis de connexion à la base de données, emails qui ne partent pas, etc. Si le problème nécessite du développement custom important, nous vous établissons un devis dédié."
    },
    {
      question: "Quelle est la différence entre support et maintenance ?",
      answer: "La maintenance est proactive (mises à jour, sauvegardes, monitoring préventif). Le support est réactif (résolution de bugs, assistance ponctuelle). Nous recommandons de combiner les deux : la maintenance évite les problèmes, le support les résout quand ils surviennent malgré tout."
    },
    {
      question: "Puis-je vous contacter en dehors des heures ouvrées ?",
      answer: "Sur les formules Standard et Prioritaire, le support est disponible en semaine 9h-18h. La formule Support Dédié inclut une astreinte 24/7 pour les urgences critiques (site hors ligne, piratage). Les demandes non-urgentes reçues le soir/weekend sont traitées le jour ouvré suivant."
    },
    {
      question: "Que se passe-t-il si je dépasse mon forfait d'heures ?",
      answer: "Vous êtes alerté quand vous atteignez 80% de votre forfait mensuel. Les heures supplémentaires sont facturées selon le tarif de votre formule (60-80€/h). Alternativement, vous pouvez upgrader vers une formule supérieure en cours de mois (prorata appliqué)."
    }
  ];

  const relatedServices = [
    {
      title: "Maintenance WordPress",
      description: "Surveillance proactive et mises à jour",
      href: "/services/maintenance-wordpress-lyon",
      icon: <Wrench className="w-8 h-8" />
    },
    {
      title: "Infogérance WordPress",
      description: "Gestion complète déléguée",
      href: "/services/infogerance-wordpress-lyon",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Sécurité WordPress",
      description: "Protection et nettoyage malware",
      href: "/services/securite-site-wordpress-lyon",
      icon: <AlertTriangle className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support Technique WordPress Lyon | Assistance - VKBack</title>
        <meta 
          name="description" 
          content="Support technique WordPress à Lyon. Assistance rapide, résolution bugs, hotfix urgent et hotline téléphonique. À partir de 100€/h."
        />
        <link rel="canonical" href="https://vkback.com/services/support-technique-wordpress-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Quels types de problèmes pouvez-vous résoudre ?", "acceptedAnswer": { "@type": "Answer", "text": "Nous traitons tous les problèmes techniques WordPress : erreurs PHP (white screen, 500), conflits de plugins, problèmes d'affichage CSS, bugs JavaScript, soucis de connexion à la base de données, emails qui ne partent pas, etc. Si le problème nécessite du développement custom important, nous vous établissons un devis dédié." }},
              { "@type": "Question", "name": "Quelle est la différence entre support et maintenance ?", "acceptedAnswer": { "@type": "Answer", "text": "La maintenance est proactive (mises à jour, sauvegardes, monitoring préventif). Le support est réactif (résolution de bugs, assistance ponctuelle). Nous recommandons de combiner les deux : la maintenance évite les problèmes, le support les résout quand ils surviennent malgré tout." }},
              { "@type": "Question", "name": "Puis-je vous contacter en dehors des heures ouvrées ?", "acceptedAnswer": { "@type": "Answer", "text": "Sur les formules Standard et Prioritaire, le support est disponible en semaine 9h-18h. La formule Support Dédié inclut une astreinte 24/7 pour les urgences critiques (site hors ligne, piratage). Les demandes non-urgentes reçues le soir/weekend sont traitées le jour ouvré suivant." }},
              { "@type": "Question", "name": "Que se passe-t-il si je dépasse mon forfait d'heures ?", "acceptedAnswer": { "@type": "Answer", "text": "Vous êtes alerté quand vous atteignez 80% de votre forfait mensuel. Les heures supplémentaires sont facturées selon le tarif de votre formule (60-80€/h). Alternativement, vous pouvez upgrader vers une formule supérieure en cours de mois (prorata appliqué)." }}
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
          { label: "Support Technique WordPress" }
        ]}
        painPointHook={{
          question: "Vous avez un bug urgent et personne pour vous aider ?",
          answer: "Un problème WordPress ne doit pas bloquer votre activité. Intervenons vite."
        }}
        painPoints={[
          { problem: "Bug critique sans interlocuteur disponible", solution: "Support réactif sous 4h max", icon: "🚨" },
          { problem: "Erreur 500 ou écran blanc incompréhensible", solution: "Diagnostic rapide par nos experts WordPress", icon: "🔍" },
          { problem: "Temps perdu à chercher sur les forums", solution: "Résolution immédiate par des pros", icon: "⏱️" },
          { problem: "Problème récurrent jamais vraiment résolu", solution: "Correction définitive avec prévention", icon: "✅" }
        ]}
        heroTitle="Support Technique WordPress Lyon"
        heroSubtitle="Site planté ? Bug incompréhensible ? Erreur 500 ? Notre équipe d'experts WordPress intervient rapidement pour diagnostiquer et résoudre vos problèmes techniques."
        heroImage={heroSupport}
        heroAlt="Support technique WordPress Lyon - Assistance dépannage résolution bugs hotline téléphone expert WordPress Lyon"
        ctaPrimary={{ label: "Obtenir du support", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos forfaits", href: "#tarifs" }}
        introduction={
          <>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Besoin d'aide sur votre site WordPress ? Notre <strong>support technique WordPress</strong> à Lyon vous assiste pour résoudre bugs, erreurs techniques et problèmes d'affichage. Email, téléphone ou chat selon votre formule : vous n'êtes jamais seul face à un problème technique.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Des experts WordPress disponibles pour vous accompagner au quotidien.
            </p>
          </>
        }
        features={features}
        whySection={{
          title: "Pourquoi un support technique dédié ?",
          content: (
            <p className="text-lg text-muted-foreground leading-relaxed">
              Face à un problème technique WordPress, chaque minute compte. Un support réactif et compétent vous évite pertes de revenus, frustration clients et perte de temps à chercher des solutions sur les forums.
            </p>
          )
        }}
        pricing={pricingOptions}
        faq={faqs}
        relatedServices={relatedServices}
        schemaServiceName="Support Technique WordPress Lyon"
        schemaServiceDescription="Support technique WordPress à Lyon. Assistance rapide, résolution bugs, hotfix urgent et hotline téléphonique. À partir de 100€/h."
        schemaServicePrice="À partir de 100€/h"
        schemaPageUrl="https://vkback.com/services/support-technique-wordpress-lyon"
        schemaServicePriceRange="100€/h - 800€ forfait"
        schemaServiceKeywords={["support WordPress Lyon", "assistance technique Villeurbanne", "dépannage WordPress Lyon 6", "hotline WordPress Rhône-Alpes", "résolution bugs Lyon Part-Dieu", "aide WordPress Caluire", "technicien WordPress Écully"]}
        expertise={{
          title: "Expertise Support WordPress à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre équipe technique à Lyon intervient depuis 2012 sur des sites WordPress de toutes tailles. Nous avons résolu des milliers de problèmes techniques et connaissons les bugs les plus fréquents comme les cas les plus complexes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre approche : diagnostic rapide, explication claire du problème, et résolution définitive pour éviter toute récurrence.
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

export default SupportTechnique;

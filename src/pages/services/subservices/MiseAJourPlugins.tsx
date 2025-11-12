import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ServiceTemplate from '@/components/ServiceTemplate';
import { RefreshCw, Package, CheckCircle, AlertTriangle, Shield, TestTube } from 'lucide-react';
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@/components/ProgressBar";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import heroPlugins from "@/assets/maintenance-support-wordpress-lyon.jpg";

const MiseAJourPlugins = () => {
  const features = [
    {
      title: "Mises à Jour Hebdomadaires",
      description: "Scan et mise à jour de tous vos plugins WordPress chaque semaine automatiquement."
    },
    {
      title: "Tests de Compatibilité",
      description: "Vérification sur environnement staging avant application en production."
    },
    {
      title: "Backup Pré-Mise à Jour",
      description: "Sauvegarde complète systématique avant chaque mise à jour de plugin."
    },
    {
      title: "Gestion Conflits",
      description: "Résolution des incompatibilités entre plugins et avec votre thème WordPress."
    },
    {
      title: "Alertes Sécurité",
      description: "Notification immédiate si un plugin présente une faille de sécurité connue."
    },
    {
      title: "Audit Plugins",
      description: "Analyse trimestrielle pour identifier les plugins inutiles ou obsolètes."
    }
  ];

  const pricingOptions = [
    {
      name: "Gestion Basique",
      price: "39€/mois",
      features: [
        "Mise à jour plugins mensuelles",
        "Jusqu'à 10 plugins actifs",
        "Backup avant MAJ",
        "Support email",
        "Monitoring uptime",
        "Rapport mensuel"
      ]
    },
    {
      name: "Gestion Pro",
      price: "69€/mois",
      features: [
        "MAJ hebdomadaires",
        "Jusqu'à 30 plugins actifs",
        "Tests staging inclus",
        "Résolution conflits",
        "Alertes sécurité temps réel",
        "Audit plugins trimestriel"
      ],
      popular: true
    },
    {
      name: "Gestion Premium",
      price: "129€/mois",
      features: [
        "MAJ quotidiennes si critique",
        "Plugins illimités",
        "Environnement staging dédié",
        "Tests automatisés",
        "Licence plugins premium",
        "Support prioritaire 24/7"
      ]
    }
  ];

  const faqs = [
    {
      question: "Pourquoi est-il important de mettre à jour mes plugins WordPress ?",
      answer: "60% des failles de sécurité WordPress proviennent de plugins obsolètes. Les mises à jour corrigent ces vulnérabilités, améliorent les performances et ajoutent de nouvelles fonctionnalités. Ne pas mettre à jour expose votre site au piratage et à des dysfonctionnements."
    },
    {
      question: "Une mise à jour de plugin peut-elle casser mon site ?",
      answer: "C'est rare mais possible, notamment en cas d'incompatibilité avec d'autres plugins ou votre thème. C'est pourquoi nous testons systématiquement les mises à jour sur un environnement de staging (formules Pro/Premium) et faisons toujours un backup avant. En cas de problème, on restaure instantanément."
    },
    {
      question: "Combien de plugins maximum devrais-je avoir ?",
      answer: "Il n'y a pas de nombre magique. Un site peut fonctionner parfaitement avec 30 plugins bien codés, ou mal avec 5 plugins médiocres. Nous évaluons la qualité de chaque plugin (performances, sécurité, maintenance) plutôt que leur quantité. Notre audit trimestriel identifie les plugins problématiques."
    },
    {
      question: "Gérez-vous aussi les mises à jour de thèmes WordPress ?",
      answer: "Oui, la gestion des mises à jour de thèmes est incluse dans toutes nos formules. Comme pour les plugins, nous testons les mises à jour de thème sur staging (Pro/Premium) car elles peuvent impacter l'apparence du site. Nous vous prévenons toujours avant d'appliquer une mise à jour majeure de thème."
    }
  ];

  const relatedServices = [
    {
      title: "Maintenance WordPress",
      description: "Surveillance complète et mises à jour",
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
      title: "Support Technique",
      description: "Assistance et résolution conflits",
      href: "/services/support-technique-wordpress-lyon",
      icon: <AlertTriangle className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mise à Jour Plugins WordPress Lyon | Gestion & Compatibilité</title>
        <meta 
          name="description" 
          content="Gestion mises à jour plugins WordPress à Lyon. Tests de compatibilité, backup automatique et résolution conflits. À partir de 39€/mois." 
        />
        <link rel="canonical" href="https://vkback.fr/services/mise-a-jour-plugins-wordpress-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Maintenance & Support WordPress", href: "/maintenance-support-wordpress" },
          { label: "Mise à Jour Plugins WordPress" }
        ]}
        heroTitle="Mise à Jour Plugins WordPress Lyon"
        heroSubtitle="Gestion et compatibilité des extensions WordPress"
        heroImage={heroPlugins}
        heroAlt="Mise à jour plugins WordPress Lyon - Gestion extensions compatibilité tests staging backup sécurité WordPress Lyon"
        introduction={
          <>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Les <strong>plugins WordPress</strong> nécessitent des mises à jour régulières pour corriger les failles de sécurité et rester compatibles avec les dernières versions de WordPress. Notre service de gestion des mises à jour plugins à Lyon prend en charge tests de compatibilité, backups pré-mise à jour et résolution des conflits.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Vos plugins à jour sans risque de casser votre site.
            </p>
          </>
        }
        features={features}
        whySection={{
          title: "Pourquoi gérer les mises à jour plugins ?",
          content: (
            <p className="text-lg text-muted-foreground leading-relaxed">
              60% des failles de sécurité WordPress proviennent de plugins obsolètes. Une gestion rigoureuse des mises à jour est votre première ligne de défense contre le piratage et les bugs.
            </p>
          )
        }}
        pricing={pricingOptions}
        faq={faqs}
        relatedServices={relatedServices}
        expertise={{
          title: "Expertise Plugins WordPress à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre équipe technique à Lyon gère les mises à jour de milliers de plugins WordPress. Nous connaissons les plugins les plus utilisés (Yoast SEO, WooCommerce, Contact Form 7, Elementor, etc.) et leurs particularités techniques.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous suivons les changelogs de chaque mise à jour et identifions les breaking changes qui nécessitent une attention particulière avant application.
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

export default MiseAJourPlugins;

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Rocket, Zap, Image, Database, Gauge, TrendingUp } from 'lucide-react';
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@/components/ProgressBar";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import heroPerformance from "@/assets/optimisation-performance-wordpress-lyon.jpg";

const OptimisationPerformance = () => {
  const features = [
    {
      title: "Cache Avancé",
      description: "Mise en cache HTML, objet et base de données pour temps de chargement ultra-rapides."
    },
    {
      title: "Optimisation Images",
      description: "Compression automatique WebP/AVIF, lazy loading et CDN pour réduire le poids des pages."
    },
    {
      title: "Minification CSS/JS",
      description: "Compression et fusion des fichiers CSS et JavaScript pour réduire les requêtes HTTP."
    },
    {
      title: "Core Web Vitals",
      description: "Optimisation LCP, FID et CLS pour respecter les standards Google PageSpeed."
    },
    {
      title: "Base de Données",
      description: "Nettoyage régulier des révisions, transients et tables optimisées."
    },
    {
      title: "Monitoring Performance",
      description: "Surveillance continue des temps de réponse avec alertes si dégradation."
    }
  ];

  const pricingOptions = [
    {
      name: "Optimisation Standard",
      price: "399€",
      features: [
        "Audit performance initial",
        "Cache WordPress configuré",
        "Compression images existantes",
        "Minification CSS/JS",
        "Nettoyage base de données",
        "Rapport avant/après"
      ]
    },
    {
      name: "Optimisation Avancée",
      price: "799€",
      features: [
        "Tout de la Standard",
        "Optimisation Core Web Vitals",
        "CDN Cloudflare configuré",
        "Lazy loading avancé",
        "Preload fonts et CSS critiques",
        "Score PageSpeed 90+"
      ],
      popular: true
    },
    {
      name: "Optimisation Premium",
      price: "1490€",
      features: [
        "Tout de l'Avancée",
        "Refonte architecture front",
        "HTTP/3 et Brotli",
        "Service Worker PWA",
        "Monitoring 3 mois inclus",
        "Score PageSpeed 95+"
      ]
    }
  ];

  const faqs = [
    {
      question: "Pourquoi mon site WordPress est-il lent ?",
      answer: "Les causes principales sont : hébergement sous-dimensionné, thème mal codé, trop de plugins actifs, images non optimisées, absence de cache, et base de données encombrée. Un audit performance permet d'identifier précisément les goulots d'étranglement et de prioriser les optimisations à fort impact."
    },
    {
      question: "Quel impact la vitesse a-t-elle sur mon référencement SEO ?",
      answer: "Google utilise la vitesse comme critère de classement depuis 2010. En 2021, les Core Web Vitals sont devenus un facteur SEO officiel. Un site lent est moins bien référencé. Au-delà du SEO, 53% des visiteurs quittent un site qui met plus de 3 secondes à charger, impactant directement vos conversions."
    },
    {
      question: "Puis-je atteindre 100/100 sur PageSpeed Insights ?",
      answer: "Techniquement possible mais rarement nécessaire. Un score de 90+ est excellent et suffit largement pour un bon référencement. Au-delà, les optimisations deviennent complexes et coûteuses pour un gain marginal. Nous visons toujours 90+ sur mobile et 95+ sur desktop, ce qui place votre site dans le top 5% le plus rapide."
    },
    {
      question: "Les optimisations sont-elles compatibles avec tous les thèmes ?",
      answer: "La plupart des optimisations (cache, compression images, minification) sont universelles. Certaines optimisations avancées (critical CSS, preload) peuvent nécessiter des ajustements selon votre thème. Nous testons chaque optimisation sur un environnement de staging avant mise en production pour garantir la compatibilité."
    }
  ];

  const relatedServices = [
    {
      title: "Maintenance WordPress",
      description: "Surveillance et mises à jour régulières",
      href: "/services/maintenance-wordpress-lyon",
      icon: <Gauge className="w-8 h-8" />
    },
    {
      title: "Hébergement Web",
      description: "Serveurs optimisés WordPress haute performance",
      href: "/hebergement-web-lyon",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Refonte Site WordPress",
      description: "Modernisation complète avec performances optimales",
      href: "/services/refonte-site-wordpress-lyon",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Optimisation WordPress Lyon | Performance & Vitesse - VKBack</title>
        <meta 
          name="description" 
          content="Optimisation performance WordPress à Lyon. Cache avancé, Core Web Vitals, compression images et PageSpeed 90+. À partir de 399€." 
        />
        <link rel="canonical" href="https://vkback.com/services/optimisation-performance-wordpress-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Pourquoi mon site WordPress est-il lent ?", "acceptedAnswer": { "@type": "Answer", "text": "Les causes principales sont : hébergement sous-dimensionné, thème mal codé, trop de plugins actifs, images non optimisées, absence de cache, et base de données encombrée. Un audit performance permet d'identifier précisément les goulots d'étranglement et de prioriser les optimisations à fort impact." }},
              { "@type": "Question", "name": "Quel impact la vitesse a-t-elle sur mon référencement SEO ?", "acceptedAnswer": { "@type": "Answer", "text": "Google utilise la vitesse comme critère de classement depuis 2010. En 2021, les Core Web Vitals sont devenus un facteur SEO officiel. Un site lent est moins bien référencé. Au-delà du SEO, 53% des visiteurs quittent un site qui met plus de 3 secondes à charger, impactant directement vos conversions." }},
              { "@type": "Question", "name": "Puis-je atteindre 100/100 sur PageSpeed Insights ?", "acceptedAnswer": { "@type": "Answer", "text": "Techniquement possible mais rarement nécessaire. Un score de 90+ est excellent et suffit largement pour un bon référencement. Au-delà, les optimisations deviennent complexes et coûteuses pour un gain marginal. Nous visons toujours 90+ sur mobile et 95+ sur desktop, ce qui place votre site dans le top 5% le plus rapide." }},
              { "@type": "Question", "name": "Les optimisations sont-elles compatibles avec tous les thèmes ?", "acceptedAnswer": { "@type": "Answer", "text": "La plupart des optimisations (cache, compression images, minification) sont universelles. Certaines optimisations avancées (critical CSS, preload) peuvent nécessiter des ajustements selon votre thème. Nous testons chaque optimisation sur un environnement de staging avant mise en production pour garantir la compatibilité." }}
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
          { label: "Optimisation Performance WordPress" }
        ]}
        painPointHook={{
          question: "Votre site met plus de 3 secondes à charger ?",
          answer: "Chaque seconde de plus = 7% de conversions en moins. Accélérons ça."
        }}
        painPoints={[
          { problem: "Score PageSpeed dans le rouge (sous 50)", solution: "Optimisation pour atteindre 90+ mobile", icon: "📱" },
          { problem: "Visiteurs qui quittent avant le chargement complet", solution: "Temps de chargement sous 2 secondes", icon: "⚡" },
          { problem: "Google qui pénalise votre site lent", solution: "Core Web Vitals optimisés pour le SEO", icon: "📈" },
          { problem: "Images trop lourdes qui ralentissent tout", solution: "Compression WebP automatique et lazy loading", icon: "🖼️" }
        ]}
        heroTitle="Optimisation Performance WordPress Lyon"
        heroSubtitle="Site qui rame ? Score PageSpeed dans le rouge ? Nous optimisons cache, images, Core Web Vitals pour un site rapide qui convertit et plaît à Google."
        heroImage={heroPerformance}
        heroAlt="Optimisation performance WordPress Lyon - Accélération site web Core Web Vitals PageSpeed cache CDN expert performance"
        ctaPrimary={{ label: "Accélérer mon site", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos résultats", href: "/realisations" }}
        introduction={
          <>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un site WordPress rapide améliore votre <strong>référencement SEO</strong>, votre <strong>taux de conversion</strong> et l'expérience utilisateur. Notre service d'optimisation performance WordPress à Lyon combine cache avancé, compression d'images, minification et optimisation des Core Web Vitals pour atteindre des scores PageSpeed 90+.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Nous analysons chaque aspect technique pour identifier et corriger les ralentissements.
            </p>
          </>
        }
        features={features}
        whySection={{
          title: "Pourquoi optimiser la performance ?",
          content: (
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un site lent perd des visiteurs et du chiffre d'affaires. Google pénalise les sites lents dans son classement. 1 seconde de délai = -7% de conversions. L'optimisation performance est un investissement rentable.
            </p>
          )
        }}
        pricing={pricingOptions}
        faq={faqs}
        relatedServices={relatedServices}
        schemaServiceName="Optimisation Performance WordPress Lyon"
        schemaServiceDescription="Optimisation performance WordPress à Lyon. Cache avancé, Core Web Vitals, compression images et PageSpeed 90+. À partir de 399€."
        schemaServicePrice="À partir de 399€"
        schemaPageUrl="https://vkback.com/services/optimisation-performance-wordpress-lyon"
        schemaServicePriceRange="399€ - 1490€"
        schemaServiceKeywords={["optimisation WordPress Lyon", "accélération site Villeurbanne", "Core Web Vitals Lyon 2", "PageSpeed Insights Rhône-Alpes", "vitesse site WordPress Lyon Part-Dieu", "cache WordPress Caluire", "performance web Écully"]}
        expertise={{
          title: "Expertise Performance WordPress à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous avons optimisé des centaines de sites WordPress à Lyon et obtenons régulièrement des scores PageSpeed 90+ même sur des sites e-commerce complexes. Notre méthodologie combine outils professionnels (GTmetrix, WebPageTest) et expertise technique approfondie.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous restons à jour sur les dernières recommandations Google pour les Core Web Vitals et adaptons nos optimisations aux évolutions de l'algorithme.
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

export default OptimisationPerformance;

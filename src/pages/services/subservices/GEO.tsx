import { Helmet } from 'react-helmet';
import ServiceTemplate from '@/components/ServiceTemplate';
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@/components/ProgressBar";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import { Bot, Search, Globe, BarChart3, FileText, Zap } from 'lucide-react';
import heroGEO from "@/assets/geo-referencement-ia-lyon.jpg";

const GEO = () => {
  const features = [
    {
      title: "Optimisation Google AI Overviews",
      description: "Structuration de vos contenus pour apparaître dans les réponses générées par l'IA de Google (SGE/AI Overviews) et maximiser votre visibilité."
    },
    {
      title: "Présence ChatGPT & Bing Chat",
      description: "Stratégie de contenu pour être cité dans les réponses de ChatGPT, Microsoft Copilot et Bing Chat grâce à des sources fiables."
    },
    {
      title: "Visibilité Perplexity & Moteurs IA",
      description: "Optimisation pour les moteurs de recherche IA émergents comme Perplexity, Claude et autres agents conversationnels."
    },
    {
      title: "Données Structurées Avancées",
      description: "Implémentation de Schema.org enrichi et balisages sémantiques pour faciliter la compréhension par les modèles de langage."
    },
    {
      title: "Contenu Adapté aux Citations IA",
      description: "Création de contenus autoritaires, factuels et bien sourcés qui maximisent les chances d'être cités par les IA génératives."
    },
    {
      title: "Monitoring Apparitions IA",
      description: "Suivi et analyse de vos mentions dans les réponses des différentes IA pour mesurer l'impact de votre stratégie GEO."
    }
  ];

  const pricingOptions = [
    {
      name: "Audit GEO",
      price: "490€",
      features: [
        "Analyse présence actuelle IA",
        "Audit contenus existants",
        "Rapport d'opportunités",
        "Recommandations prioritaires",
        "Plan d'action GEO",
        "Support 2 semaines"
      ]
    },
    {
      name: "Optimisation GEO",
      price: "990€/mois",
      features: [
        "Tout de l'Audit GEO",
        "Optimisation contenus mensuelle",
        "Données structurées avancées",
        "Création contenus autoritaires",
        "Monitoring mentions IA",
        "Reporting mensuel détaillé"
      ],
      popular: true
    },
    {
      name: "GEO Premium",
      price: "1 990€/mois",
      features: [
        "Tout de l'Optimisation GEO",
        "Stratégie multi-plateforme IA",
        "Création contenus expert",
        "Veille technologique IA",
        "Consultant dédié",
        "Reporting hebdomadaire"
      ]
    }
  ];

  const faqs = [
    {
      question: "Qu'est-ce que le GEO et pourquoi est-ce important ?",
      answer: "Le GEO (Generative Engine Optimization) est l'optimisation pour les moteurs de recherche génératifs comme Google AI Overviews, ChatGPT, Perplexity ou Bing Chat. Avec l'essor de l'IA, de plus en plus d'utilisateurs obtiennent leurs réponses directement via ces outils sans cliquer sur les sites. Le GEO vous permet d'être cité dans ces réponses et de maintenir votre visibilité dans ce nouveau paradigme de recherche."
    },
    {
      question: "Quelle est la différence entre SEO et GEO ?",
      answer: "Le SEO traditionnel optimise votre site pour les résultats de recherche classiques (liens bleus). Le GEO optimise vos contenus pour être cités et référencés par les IA génératives. Les deux sont complémentaires : un bon SEO reste la base, mais le GEO ajoute une couche d'optimisation spécifique pour les réponses IA qui représentent une part croissante des recherches."
    },
    {
      question: "Comment apparaître dans les réponses de ChatGPT ou Perplexity ?",
      answer: "Pour être cité par les IA, vos contenus doivent être : autoritaires (expertise démontrée), factuels (données vérifiables), bien structurés (balisage sémantique), régulièrement mis à jour, et présents sur des sources que les IA considèrent fiables. Notre stratégie GEO travaille sur tous ces aspects pour maximiser vos chances d'apparition."
    },
    {
      question: "Le GEO remplace-t-il le SEO traditionnel ?",
      answer: "Non, le GEO complète le SEO traditionnel. Les moteurs de recherche classiques restent la principale source de trafic pour la plupart des sites. Cependant, ignorer le GEO serait une erreur stratégique car les recherches via IA croissent rapidement. Une stratégie digitale complète en 2024-2025 doit intégrer les deux approches."
    }
  ];

  const relatedServices = [
    {
      title: "Audit SEO Complet",
      description: "Base technique solide pour votre stratégie GEO",
      href: "/services/audit-seo-lyon",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Rédaction Web SEO",
      description: "Contenus optimisés pour SEO et IA",
      href: "/services/redaction-web-seo-lyon",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Consultant SEO",
      description: "Accompagnement stratégique personnalisé",
      href: "/services/consultant-seo-lyon",
      icon: <Search className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>GEO Référencement IA Lyon | Optimisation ChatGPT - VKBack</title>
        <meta 
          name="description" 
          content="Expert GEO Lyon : optimisez votre visibilité dans ChatGPT, Google AI, Perplexity. Stratégie référencement IA pour apparaître dans les réponses génératives." 
        />
        <meta name="keywords" content="GEO Lyon, référencement IA Lyon, optimisation ChatGPT, Google AI Overviews, Perplexity SEO, generative engine optimization" />
        <link rel="canonical" href="https://vkback.com/services/geo-referencement-ia-lyon" />
        
        <meta property="og:title" content="GEO Référencement IA Lyon | Optimisation ChatGPT - VKBack" />
        <meta property="og:description" content="Expert GEO à Lyon : optimisez votre visibilité dans les moteurs IA. Apparaissez dans ChatGPT, Google AI Overviews et Perplexity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vkback.com/services/geo-referencement-ia-lyon" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "GEO - Référencement IA",
            "provider": {
              "@type": "Organization",
              "name": "VKBack",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lyon",
                "addressCountry": "FR"
              }
            },
            "areaServed": [
              { "@type": "City", "name": "Lyon" },
              { "@type": "City", "name": "Villeurbanne" },
              { "@type": "City", "name": "Caluire-et-Cuire" },
              { "@type": "City", "name": "Écully" },
              { "@type": "City", "name": "Vénissieux" },
              { "@type": "AdministrativeArea", "name": "Rhône-Alpes" }
            ],
            "description": "Optimisation GEO (Generative Engine Optimization) à Lyon pour apparaître dans les réponses de ChatGPT, Google AI Overviews et Perplexity",
            "priceRange": "490€ - 1 990€/mois",
            "keywords": "GEO Lyon, référencement IA Villeurbanne, optimisation ChatGPT Lyon 3, Google AI Overviews Rhône-Alpes, Perplexity SEO Caluire, generative engine optimization Écully"
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
          { label: "Référencement SEO Lyon", href: "/referencement-seo-lyon" },
          { label: "GEO - Référencement IA" }
        ]}
        painPointHook={{
          question: "Invisible dans ChatGPT et les recherches IA ?",
          answer: "Le GEO vous positionne là où vos clients cherchent demain."
        }}
        heroTitle="GEO - Référencement IA Lyon"
        heroSubtitle="ChatGPT, Perplexity, Google AI... Les utilisateurs obtiennent leurs réponses sans cliquer. Optimisez vos contenus pour être cité par les IA génératives et restez visible dans ce nouveau paradigme de recherche."
        heroImage={heroGEO}
        heroAlt="GEO Référencement IA Lyon - Optimisation visibilité ChatGPT Google AI Overviews Perplexity moteurs recherche génératifs"
        ctaPrimary={{ label: "Optimiser ma visibilité IA", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos résultats", href: "/realisations" }}
        introduction={
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Introduction au GEO</h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Le Référencement de Demain, Aujourd'hui</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>40% des recherches Google affichent désormais des réponses IA</strong> (AI Overviews). ChatGPT compte 200 millions d'utilisateurs actifs. Perplexity révolutionne la recherche d'information. Le paysage de la recherche en ligne se transforme radicalement avec l'essor des <strong>moteurs de recherche génératifs</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Le <strong>GEO (Generative Engine Optimization)</strong> est la nouvelle discipline qui optimise votre présence dans ces réponses IA. Contrairement au SEO traditionnel qui vise les "liens bleus", le GEO vise à être <strong>cité comme source fiable</strong> par les intelligences artificielles.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En tant qu'<strong>experts GEO à Lyon</strong>, nous développons des stratégies innovantes pour positionner votre entreprise dans ce nouveau paradigme de recherche, tout en maintenant votre visibilité SEO traditionnelle.
              </p>
            </div>
          </div>
        }
        whySection={{
          title: "Pourquoi Investir dans le GEO ?",
          content: (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border">
                  <div className="flex items-center gap-3 mb-4">
                    <Bot className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">L'IA Change les Comportements</h3>
                  </div>
                  <p className="text-muted-foreground">
                    De plus en plus d'utilisateurs obtiennent leurs réponses via ChatGPT ou Google AI sans visiter de site. Si vous n'êtes pas cité, vous perdez ces opportunités de visibilité et de notoriété.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Avantage Concurrentiel</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Le GEO est encore peu maîtrisé. Les entreprises qui l'adoptent maintenant prennent une avance significative sur leurs concurrents qui n'ont pas encore intégré cette dimension.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Synergie avec le SEO</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Les bonnes pratiques GEO renforcent également votre SEO traditionnel. Contenus autoritaires, données structurées et expertise démontrée améliorent votre positionnement global.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">ROI Mesurable</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Nous mesurons vos apparitions dans les réponses IA, le trafic référé et l'impact sur votre notoriété pour démontrer le retour sur investissement de votre stratégie GEO.
                  </p>
                </div>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre Expertise GEO à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pionnier du <strong>GEO à Lyon</strong>, VKBack combine son expertise SEO de 14 ans avec une veille constante sur les évolutions de l'IA générative. Nous suivons les dernières recherches sur l'optimisation pour ChatGPT, Google AI Overviews, Perplexity et les autres moteurs IA émergents.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre méthodologie s'appuie sur les travaux académiques récents et les retours d'expérience terrain pour développer des stratégies GEO efficaces et adaptées à votre secteur d'activité à <strong>Lyon, Villeurbanne, Caluire</strong> et dans toute la <strong>région Rhône-Alpes</strong>.
              </p>
            </div>
          )
        }}
        features={features}
        pricing={pricingOptions}
        faq={faqs}
        relatedServices={relatedServices}
        schemaServiceName="GEO Référencement IA Lyon"
        schemaServiceDescription="Optimisation GEO (Generative Engine Optimization) à Lyon. Apparaissez dans ChatGPT, Google AI Overviews et Perplexity. Expert référencement IA."
        schemaServicePrice="À partir de 490€"
        schemaPageUrl="https://vkback.com/services/geo-referencement-ia-lyon"
        schemaServicePriceRange="490€ - 1 990€/mois"
        schemaServiceKeywords={["GEO Lyon", "référencement IA Villeurbanne", "optimisation ChatGPT Lyon 3", "Google AI Overviews Rhône-Alpes", "Perplexity SEO Caluire", "generative engine optimization Écully"]}
      />

      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default GEO;

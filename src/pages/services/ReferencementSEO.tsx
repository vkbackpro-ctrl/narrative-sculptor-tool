import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Search, TrendingUp, FileText, BarChart3, Target, Zap, ShoppingCart, Globe, Wrench, ArrowRight, MapPin, Sparkles, Bot } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/FadeInSection";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@/components/ProgressBar";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import heroReferencementSEO from "@/assets/referencement-seo-naturel-lyon.jpg";

const seoSubServices = [
  {
    name: "Audit SEO Complet",
    description: "Analyse technique et sémantique de votre site",
    href: "/services/audit-seo-lyon",
    icon: BarChart3,
    color: "from-blue-500/10 to-blue-400/5",
    price: "1 000€"
  },
  {
    name: "SEO Local Lyon",
    description: "Optimisation Google Business Profile et citations",
    href: "/services/seo-local-lyon",
    icon: MapPin,
    color: "from-green-500/10 to-green-400/5",
    price: "500€/mois"
  },
  {
    name: "Netlinking & Backlinks",
    description: "Stratégie de liens entrants qualitatifs",
    href: "/services/netlinking-backlinks-lyon",
    icon: TrendingUp,
    color: "from-indigo-500/10 to-indigo-400/5",
    price: "800€/mois"
  },
  {
    name: "Rédaction Web SEO",
    description: "Contenu optimisé pour le référencement",
    href: "/services/redaction-web-seo-lyon",
    icon: FileText,
    color: "from-purple-500/10 to-purple-400/5",
    price: "150€/article"
  },
  {
    name: "Google My Business",
    description: "Optimisation de votre fiche établissement local",
    href: "/services/optimisation-google-my-business-lyon",
    icon: MapPin,
    color: "from-green-500/10 to-green-400/5",
    price: "490€"
  },
  {
    name: "Consultant SEO",
    description: "Accompagnement stratégique personnalisé",
    href: "/services/consultant-seo-lyon",
    icon: Target,
    color: "from-amber-500/10 to-amber-400/5",
    price: "500€/jour"
  },
  {
    name: "Formation SEO",
    description: "Montée en compétences en référencement naturel",
    href: "/services/formation-seo-lyon",
    icon: Globe,
    color: "from-teal-500/10 to-teal-400/5",
    price: "1 500€/jour"
  },
  {
    name: "Analyse Concurrentielle",
    description: "Étude de marché et positionnement concurrentiel",
    href: "/services/analyse-concurrentielle-seo-lyon",
    icon: Sparkles,
    color: "from-pink-500/10 to-pink-400/5",
    price: "800€"
  },
  {
    name: "GEO - Référencement IA",
    description: "Optimisation pour ChatGPT, Google AI et Perplexity",
    href: "/services/geo-referencement-ia-lyon",
    icon: Bot,
    color: "from-violet-500/10 to-violet-400/5",
    price: "490€"
  }
];

const ReferencementSEO = () => {
  const features = [
    {
      title: "SEO Technique",
      description: "Optimisation de la structure, vitesse de chargement, indexation et données structurées pour une base solide."
    },
    {
      title: "Contenu Optimisé",
      description: "Création et optimisation de contenus pertinents, engageants et optimisés pour vos mots-clés stratégiques."
    },
    {
      title: "SEO Local Lyon",
      description: "Optimisation Google Business Profile et stratégie locale pour capter le trafic géolocalisé à Lyon et sa région."
    },
    {
      title: "Netlinking Qualité",
      description: "Stratégie de liens entrants naturels et qualitatifs pour renforcer votre autorité de domaine."
    },
    {
      title: "Analyse Concurrentielle",
      description: "Étude de vos concurrents pour identifier les opportunités et affiner votre positionnement."
    },
    {
      title: "Optimisation Continue",
      description: "Veille algorithmique, tests A/B et ajustements réguliers pour maintenir et améliorer vos positions."
    }
  ];

  const pricingOptions = [
    {
      name: "Audit SEO",
      price: "À partir de 800€",
      features: [
        "Audit technique complet",
        "Analyse de contenu",
        "Étude concurrentielle",
        "Recherche de mots-clés",
        "Plan d'action détaillé",
        "Support 1 mois"
      ]
    },
    {
      name: "SEO Mensuel",
      price: "À partir de 600€/mois",
      features: [
        "Optimisation on-page",
        "Création de contenu",
        "Netlinking qualitatif",
        "Suivi de positions",
        "Reporting mensuel",
        "Support prioritaire"
      ],
      popular: true
    },
    {
      name: "SEO Premium",
      price: "Sur mesure",
      features: [
        "Tout du SEO Mensuel",
        "Stratégie multicanale",
        "Optimisation e-commerce",
        "SEO international",
        "Consultant dédié",
        "Reporting hebdomadaire"
      ]
    }
  ];

  const faqs = [
    {
      question: "Combien de temps faut-il pour voir des résultats en SEO ?",
      answer: "Le SEO est une stratégie à moyen-long terme. Les premiers résultats significatifs apparaissent généralement après 3 à 6 mois. Cependant, certaines optimisations techniques peuvent avoir un impact plus rapide. La patience et la constance sont essentielles pour obtenir des résultats durables."
    },
    {
      question: "Quelle est la différence entre SEO et SEA ?",
      answer: "Le SEO (référencement naturel) vise à améliorer votre positionnement organique dans les résultats de recherche de manière durable. Le SEA (référencement payant) consiste à acheter des publicités Google Ads pour apparaître immédiatement en haut des résultats. Le SEO offre un ROI supérieur à long terme, tandis que le SEA génère du trafic instantané."
    },
    {
      question: "Comment choisissez-vous les mots-clés à cibler ?",
      answer: "Nous effectuons une analyse approfondie combinant : volume de recherche, intention de recherche, niveau de concurrence, pertinence pour votre activité et potentiel de conversion. Nous privilégions une stratégie équilibrée entre mots-clés génériques à fort volume et mots-clés de longue traîne plus qualifiés."
    },
    {
      question: "Le SEO local est-il important pour mon entreprise à Lyon ?",
      answer: "Absolument ! Le SEO local est crucial pour les entreprises ayant une clientèle locale. 46% des recherches Google ont une intention locale. Optimiser votre présence locale (Google Business Profile, citations locales, avis clients) vous permet de capter ce trafic qualifié et d'augmenter votre visibilité dans votre zone de chalandise."
    },
    {
      question: "Que comprend un audit SEO ?",
      answer: "Notre audit SEO analyse 4 piliers : technique (vitesse, indexation, structure), contenu (qualité, optimisation, pertinence), popularité (profil de liens, autorité) et concurrence (positionnement, stratégies). Vous recevez un rapport détaillé avec recommandations priorisées et un plan d'action chiffré."
    },
    {
      question: "Proposez-vous des garanties de positionnement ?",
      answer: "Nous ne garantissons pas de positions spécifiques car Google utilise plus de 200 critères de classement en constante évolution. En revanche, nous nous engageons sur une méthodologie éprouvée, une transparence totale et des objectifs mesurables (trafic, visibilité, conversions). Nos résultats parlent d'eux-mêmes avec une moyenne de +150% de trafic organique après 12 mois."
    },
    {
      question: "Comment mesurez-vous l'efficacité de votre stratégie SEO ?",
      answer: "Nous suivons des KPIs précis : positions sur vos mots-clés stratégiques, trafic organique, taux de conversion, autorité de domaine, et ROI. Vous recevez des rapports mensuels détaillés avec analyses et recommandations. Nous utilisons Google Analytics, Search Console et des outils professionnels comme SEMrush ou Ahrefs."
    },
    {
      question: "Faut-il refaire mon site pour améliorer mon SEO ?",
      answer: "Pas nécessairement. Dans la plupart des cas, des optimisations ciblées suffisent. L'audit SEO initial permettra d'identifier si votre site nécessite des ajustements mineurs ou une refonte complète. Nous privilégions toujours l'approche la plus efficiente pour votre budget."
    }
  ];

  const relatedServices = [
    {
      title: "Création de Sites WordPress",
      description: "Sites optimisés SEO dès la conception",
      href: "/creation-site-internet-lyon",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Sites E-commerce",
      description: "Boutiques en ligne optimisées pour la conversion",
      href: "/creation-site-ecommerce-lyon",
      icon: <ShoppingCart className="w-8 h-8" />
    },
      {
        title: "Maintenance & Support",
        description: "Maintenir les performances techniques de votre site",
        href: "/maintenance-support-wordpress-lyon",
        icon: <Wrench className="w-8 h-8" />
      }
  ];

  return (
    <>
      <Helmet>
        <title>Référencement SEO Lyon | Expert SEO WordPress - VKBack</title>
        <meta 
          name="description" 
          content="Agence SEO Lyon spécialisée WordPress. Audit SEO, optimisation on-page, netlinking et SEO local. Boostez votre visibilité Google. Devis gratuit." 
        />
        <meta name="keywords" content="référencement SEO Lyon, agence SEO Lyon, expert SEO WordPress, SEO local Lyon, audit SEO, consultant SEO" />
        <link rel="canonical" href="https://vkback.com/referencement-seo-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Combien de temps faut-il pour voir des résultats en SEO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le SEO est une stratégie à moyen-long terme. Les premiers résultats significatifs apparaissent généralement après 3 à 6 mois. Cependant, certaines optimisations techniques peuvent avoir un impact plus rapide."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle est la différence entre SEO et SEA ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le SEO (référencement naturel) vise à améliorer votre positionnement organique de manière durable. Le SEA (référencement payant) consiste à acheter des publicités Google Ads pour apparaître immédiatement. Le SEO offre un ROI supérieur à long terme."
                }
              },
              {
                "@type": "Question",
                "name": "Le SEO local est-il important pour mon entreprise à Lyon ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolument ! 46% des recherches Google ont une intention locale. Optimiser votre présence locale (Google Business Profile, citations locales, avis clients) vous permet de capter ce trafic qualifié."
                }
              },
              {
                "@type": "Question",
                "name": "Que comprend un audit SEO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Notre audit SEO analyse 4 piliers : technique (vitesse, indexation, structure), contenu (qualité, optimisation), popularité (profil de liens, autorité) et concurrence. Vous recevez un rapport détaillé avec recommandations priorisées."
                }
              }
            ]
          })}
        </script>
        
        <meta property="og:title" content="Référencement SEO Lyon | Expert SEO WordPress - VKBack" />
        <meta property="og:description" content="Agence SEO à Lyon spécialisée en référencement naturel WordPress. Audit SEO, optimisation on-page, netlinking et SEO local pour booster votre visibilité." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vkback.com/referencement-seo-lyon" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Référencement SEO",
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
              { "@type": "City", "name": "Vénissieux" }
            ],
            "description": "Services de référencement naturel SEO à Lyon pour améliorer votre visibilité sur Google",
            "priceRange": "800€ - 2 500€/mois",
            "keywords": "référencement SEO Lyon, agence SEO Lyon, expert SEO WordPress Villeurbanne, SEO local Lyon 3, audit SEO Rhône-Alpes, consultant SEO Caluire, optimisation Google Écully"
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
          { label: "Référencement SEO Lyon" }
        ]}
        painPointHook={{
          question: "Votre site est invisible sur Google ? Vos concurrents vous devancent ?",
          answer: "Le SEO bien fait change tout. On peut vous faire remonter."
        }}
        painPoints={[
          {
            problem: "Mon site n'apparaît pas sur Google",
            solution: "Audit technique + optimisation on-page pour indexation rapide",
            icon: "🔍"
          },
          {
            problem: "Mes concurrents sont toujours devant moi",
            solution: "Analyse concurrentielle et stratégie de positionnement ciblée",
            icon: "🏆"
          },
          {
            problem: "Je ne comprends pas le jargon SEO",
            solution: "Reporting clair en français, accompagnement pédagogique",
            icon: "📊"
          },
          {
            problem: "J'ai déjà payé une agence SEO sans résultats",
            solution: "Engagements mesurables, objectifs SMART et transparence totale",
            icon: "💰"
          }
        ]}
        heroTitle="Référencement SEO WordPress Lyon"
        heroSubtitle="Page 2, 3 ou pire sur Google ? Zéro trafic organique ? Mots-clés mal ciblés ? Notre expertise SEO WordPress vous positionne là où vos clients vous cherchent à Lyon."
        heroImage={heroReferencementSEO}
        heroAlt="Référencement SEO naturel Lyon - Optimisation positionnement Google première page expertise consultant SEO WordPress"
        ctaPrimary={{ label: "Améliorer mon référencement", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos résultats", href: "/realisations" }}
        introduction={
          <div id="introduction" className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Introduction au Référencement SEO</h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Votre Visibilité sur Google, Notre Expertise</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Dans un monde où <strong>93% des expériences en ligne commencent par un moteur de recherche</strong>, être visible sur Google n&apos;est plus une option mais une nécessité. En tant qu&apos;<strong>experts SEO à Lyon</strong>, nous développons des stratégies de référencement naturel sur mesure qui transforment votre site WordPress en véritable machine à générer du trafic qualifié.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre approche combine <strong>excellence technique</strong>, contenus optimisés et netlinking qualitatif pour des résultats mesurables et durables. Que vous soyez une TPE, PME ou grande entreprise à Lyon, nous mettons notre expertise au service de votre croissance digitale.
              </p>
            </div>

            {/* CTA enrichi */}
            <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-primary" />
                    Nos Services SEO Spécialisés
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Découvrez notre gamme complète de services de référencement naturel adaptés à votre activité et vos objectifs à Lyon.
                  </p>
                </div>
                <Button asChild size="lg" className="btn-cta whitespace-nowrap">
                  <Link to="/contact">
                    Améliorer mon référencement
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Grid des sous-services SEO */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {seoSubServices.map((service, index) => (
                <FadeInSection key={service.name} delay={index * 50}>
                  <Link 
                    to={service.href}
                    className="group block"
                  >
                    <Card className={`h-full border-2 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br ${service.color} hover:shadow-xl hover:-translate-y-1`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                            <service.icon className="w-5 h-5 text-primary" />
                          </div>
                          <Badge variant="secondary" className="text-xs whitespace-nowrap py-1">
                            À partir de {service.price}
                          </Badge>
                        </div>
                        <CardTitle className="text-base group-hover:text-primary transition-colors">
                          {service.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm line-clamp-2">
                          {service.description}
                        </CardDescription>
                        <div className="flex items-center text-xs text-primary font-medium mt-3 group-hover:gap-2 transition-all">
                          En savoir plus
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeInSection>
              ))}
            </div>
          </div>
        }
        whySection={{
          title: "Pourquoi Investir dans le Référencement SEO ?",
          content: (
            <div id="pourquoi" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FadeInSection>
                   <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                          <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Trafic Qualifié Durable</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Contrairement aux publicités payantes, <strong>le SEO génère un trafic constant sans coût par clic</strong>. Vos positions acquises continuent de vous apporter des visiteurs qualifiés mois après mois, année après année.
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>

                <FadeInSection delay={100}>
                   <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                          <BarChart3 className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">ROI Supérieur à Long Terme</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Le référencement naturel offre <strong>le meilleur retour sur investissement</strong> parmi tous les canaux d'acquisition digitale, avec un coût par lead jusqu'à 61% inférieur au SEA.
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>

                <FadeInSection delay={200}>
                   <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                          <Target className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Crédibilité et Confiance</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        <strong>75% des utilisateurs ne dépassent jamais la première page</strong> de résultats. Être bien positionné renforce votre crédibilité et la confiance des internautes envers votre marque.
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>

                <FadeInSection delay={300}>
                   <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                          <Search className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Avantage Concurrentiel Local</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Le <strong>SEO local vous permet de dominer votre marché géographique</strong> à Lyon et de capter les recherches « près de chez moi » qui représentent une intention d'achat immédiate.
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre Méthodologie SEO Éprouvée",
          content: (
            <div id="processus" className="space-y-6">
              <div className="relative">
                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />
                
                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Audit SEO Complet",
                      description: "Analyse approfondie de votre site : technique, contenu, netlinking et concurrence pour identifier les opportunités d'amélioration.",
                      duration: "1 semaine"
                    },
                    {
                      step: "2",
                      title: "Stratégie de Mots-Clés",
                      description: "Recherche et sélection des mots-clés pertinents pour votre activité et votre marché local lyonnais.",
                      duration: "1 semaine"
                    },
                    {
                      step: "3",
                      title: "Optimisation On-Page",
                      description: "Optimisation technique et éditoriale : balises, structure, contenus, maillage interne et expérience utilisateur.",
                      duration: "2-3 semaines"
                    },
                    {
                      step: "4",
                      title: "Netlinking & Autorité",
                      description: "Développement de votre profil de liens pour renforcer votre autorité et votre positionnement dans les résultats de recherche.",
                      duration: "Continu"
                    },
                    {
                      step: "5",
                      title: "Suivi & Reporting",
                      description: "Analyse mensuelle des performances, ajustements stratégiques et rapports détaillés sur vos positions et votre trafic.",
                      duration: "Mensuel"
                    }
                  ].map((item, index) => (
                     <FadeInSection key={item.step} delay={index * 100}>
                       <div className="relative flex gap-6 items-start group">
                         <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                           {item.step}
                         </div>
                         
                         <Card className="flex-1 glass-card border-2 hover:border-primary/50 transition-all">
                           <CardHeader>
                             <div className="flex items-start justify-between gap-4">
                               <h3 className="text-xl font-semibold">{item.title}</h3>
                              <span className="text-sm text-muted-foreground whitespace-nowrap bg-secondary/20 px-3 py-1 rounded-full">
                                {item.duration}
                              </span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </div>
          )
        }}
        features={features}
        pricing={pricingOptions}
        faq={faqs}
        relatedServices={relatedServices}
        ctaTitle="Prêt à Améliorer Votre Référencement ?"
        ctaDescription="Demandez votre audit SEO gratuit et découvrez comment nous pouvons booster votre visibilité"
      />

      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ReferencementSEO;
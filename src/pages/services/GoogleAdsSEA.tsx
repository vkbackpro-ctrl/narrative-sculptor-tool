import { Helmet } from 'react-helmet';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Target, TrendingUp, MousePointer, BarChart3, DollarSign, Zap, ShoppingBag, MapPin, ArrowRight, Sparkles } from 'lucide-react';
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

const googleAdsSubServices = [
  {
    name: "Campagnes Search",
    description: "Publicités texte sur le réseau de recherche Google",
    href: "/google-ads-search-lyon",
    icon: Target,
    color: "from-blue-500/10 to-blue-400/5"
  },
  {
    name: "Google Shopping",
    description: "Campagnes produits pour e-commerce",
    href: "/google-shopping-lyon",
    icon: ShoppingBag,
    color: "from-green-500/10 to-green-400/5"
  },
  {
    name: "Display & Remarketing",
    description: "Bannières visuelles et reciblage publicitaire",
    href: "/google-display-remarketing-lyon",
    icon: MousePointer,
    color: "from-purple-500/10 to-purple-400/5"
  },
  {
    name: "Google Local Ads",
    description: "Publicités locales pour commerces physiques",
    href: "/google-local-ads-lyon",
    icon: MapPin,
    color: "from-indigo-500/10 to-indigo-400/5"
  },
  {
    name: "YouTube Ads",
    description: "Publicités vidéo sur YouTube",
    href: "/youtube-ads-lyon",
    icon: Zap,
    color: "from-orange-500/10 to-orange-400/5"
  },
  {
    name: "Optimisation ROI",
    description: "Amélioration continue des performances",
    href: "/optimisation-google-ads-lyon",
    icon: TrendingUp,
    color: "from-teal-500/10 to-teal-400/5"
  },
  {
    name: "Audit Google Ads",
    description: "Analyse complète de vos campagnes existantes",
    href: "/audit-google-ads-lyon",
    icon: BarChart3,
    color: "from-pink-500/10 to-pink-400/5"
  },
  {
    name: "Gestion Budgétaire",
    description: "Pilotage stratégique des investissements",
    href: "/gestion-budget-google-ads-lyon",
    icon: DollarSign,
    color: "from-amber-500/10 to-amber-400/5"
  }
];

const GoogleAdsSEA = () => {
  const features = [
    {
      title: "Ciblage Précis",
      description: "Mots-clés, localisation, audiences et intentions d'achat pour toucher vos clients idéaux."
    },
    {
      title: "Résultats Immédiats",
      description: "Visibilité instantanée en première page Google dès l'activation de vos campagnes."
    },
    {
      title: "Budget Maîtrisé",
      description: "Contrôle total du budget quotidien et paiement uniquement au clic effectif."
    },
    {
      title: "Tracking Précis",
      description: "Mesure exacte du ROI avec conversion tracking et Google Analytics 4."
    },
    {
      title: "Optimisation Continue",
      description: "Tests A/B, ajustements d'enchères et amélioration des performances."
    },
    {
      title: "Reporting Transparent",
      description: "Rapports détaillés mensuels avec KPIs, recommandations et plan d'action."
    }
  ];

  const pricingOptions = [
    {
      name: "Audit Google Ads",
      price: "490€",
      features: [
        "Analyse compte existant",
        "Opportunités identifiées",
        "Recommandations d'optimisation",
        "Plan d'action détaillé",
        "Estimation ROI",
        "Présentation 1h"
      ]
    },
    {
      name: "Gestion Mensuelle",
      price: "15% du budget pub",
      features: [
        "Min. 400€/mois",
        "Configuration campagnes",
        "Optimisation continue",
        "Reporting mensuel",
        "Support prioritaire",
        "Ajustements illimités"
      ],
      popular: true
    },
    {
      name: "Pack Démarrage",
      price: "990€ + gestion",
      features: [
        "Création compte Google Ads",
        "Recherche mots-clés",
        "3 campagnes configurées",
        "Tracking conversions",
        "Extensions annonces",
        "Formation incluse"
      ]
    }
  ];

  const faqs = [
    {
      question: "Quel budget prévoir pour Google Ads ?",
      answer: "Le budget dépend de votre secteur et vos objectifs. Pour des résultats significatifs à Lyon, nous recommandons un budget publicitaire minimum de 500-1000€/mois. Le CPC (coût par clic) varie selon la concurrence : de 0,50€ à 5€+ pour des mots-clés concurrentiels. Contactez-nous pour une estimation précise adaptée à votre activité."
    },
    {
      question: "Quelle est la différence entre SEO et SEA (Google Ads) ?",
      answer: "Le SEO (référencement naturel) est gratuit mais prend 3-6 mois pour générer du trafic durable. Le SEA (Google Ads) est payant mais génère du trafic immédiat dès l'activation. Les deux sont complémentaires : SEA pour des résultats rapides, SEO pour un ROI long terme. Nous recommandons une stratégie combinée."
    },
    {
      question: "Combien de temps pour voir des résultats ?",
      answer: "Les résultats sont immédiats : vos annonces apparaissent dès l'activation. Cependant, l'optimisation des performances nécessite 2-3 mois de tests et ajustements pour maximiser le ROI. Les premiers leads arrivent généralement sous 48h après le lancement."
    },
    {
      question: "Comment calculez-vous vos honoraires ?",
      answer: "Nos honoraires représentent 15% de votre budget publicitaire mensuel (minimum 400€/mois). Si vous investissez 2000€/mois en publicité Google, nos honoraires sont de 300€/mois. Ce modèle aligne nos intérêts : plus vos campagnes performent, plus vous investissez, et plus nous gagnons."
    },
    {
      question: "Puis-je arrêter Google Ads à tout moment ?",
      answer: "Oui, Google Ads fonctionne sans engagement. Vous pouvez mettre en pause ou arrêter vos campagnes quand vous voulez. Cependant, arrêter les campagnes stoppe immédiatement le trafic. Contrairement au SEO, il n'y a pas d'effet résiduel après l'arrêt du paiement."
    },
    {
      question: "Quelles sont les erreurs courantes à éviter ?",
      answer: "Budget trop faible pour être compétitif, mots-clés trop génériques, pages de destination non optimisées, absence de tracking conversions, enchères automatiques mal paramétrées, et abandon prématuré avant l'optimisation. Notre expertise évite ces pièges coûteux."
    },
    {
      question: "Google Ads fonctionne-t-il pour toutes les activités ?",
      answer: "Google Ads est particulièrement efficace pour les services locaux (plomberie, avocat, dentiste), e-commerce, B2B et services à forte valeur ajoutée. Pour des produits très bas de gamme ou marchés ultra-saturés, le ROI peut être faible. Notre analyse détermine la pertinence pour votre activité."
    },
    {
      question: "Comment mesurez-vous le succès des campagnes ?",
      answer: "Nous suivons les KPIs essentiels : CPC (coût par clic), CTR (taux de clic), taux de conversion, coût par conversion, et surtout le ROI (retour sur investissement). Vous accédez à un dashboard en temps réel et recevez des rapports mensuels détaillés avec analyses et recommandations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Google Ads Lyon | Agence SEA & Publicité Google - VKBack</title>
        <meta 
          name="description" 
          content="Agence Google Ads à Lyon : campagnes SEA performantes, Google Shopping et Display. Génération de leads qualifiés avec ROI optimisé. Devis personnalisé." 
        />
        <meta name="keywords" content="google ads lyon, sea lyon, publicité google, agence google ads, campagne adwords lyon, google shopping" />
        <link rel="canonical" href="https://vkback.fr/google-ads-sea-lyon" />
        
        <meta property="og:title" content="Google Ads Lyon | Agence SEA & Publicité Google - VKBack" />
        <meta property="og:description" content="Agence Google Ads à Lyon : campagnes SEA performantes, Google Shopping et Display. Génération de leads qualifiés avec ROI optimisé." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vkback.fr/google-ads-sea-lyon" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Google Ads & SEA",
            "provider": {
              "@type": "Organization",
              "name": "VKBack",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lyon",
                "addressCountry": "FR"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Lyon"
            },
            "description": "Services de publicité Google Ads et SEA à Lyon pour générer des leads qualifiés"
          })}
        </script>
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Google Ads & SEA Lyon" }
        ]}
        heroTitle="Google Ads & SEA à Lyon"
        heroSubtitle="Génération de leads qualifiés avec des campagnes Google Ads performantes. ROI optimisé, ciblage précis et résultats immédiats pour votre activité à Lyon."
        heroImage="/src/assets/hero-creation-site-lyon.jpg"
        introduction={
          <div id="introduction" className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Publicité Google Ads Efficace</h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Des Leads Qualifiés Dès Aujourd&apos;hui</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Besoin de <strong>résultats rapides</strong> pour votre entreprise à Lyon ? Google Ads (anciennement AdWords) vous positionne immédiatement en première page de Google. Notre <strong>agence SEA spécialisée</strong> crée et optimise vos campagnes publicitaires pour un ROI maximum : Search, Shopping, Display, YouTube et Local Ads.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Avec <strong>Google Ads</strong>, payez uniquement au clic effectif et maîtrisez votre budget publicitaire. Notre expertise certifiée Google Partner transforme votre investissement publicitaire en leads qualifiés et clients réels.
              </p>
            </div>

            {/* CTA enrichi */}
            <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-primary" />
                    Nos Services Google Ads
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Découvrez notre gamme complète de services de publicité Google pour booster votre visibilité à Lyon.
                  </p>
                </div>
                <Button size="lg" className="btn-cta whitespace-nowrap">
                  Demander un Devis Gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Grid des sous-services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {googleAdsSubServices.map((service, index) => (
                <FadeInSection key={service.name} delay={index * 50}>
                  <a 
                    href={service.href}
                    className="group block"
                  >
                    <Card className={`h-full border-2 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br ${service.color} hover:shadow-xl hover:-translate-y-1`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                            <service.icon className="w-5 h-5 text-primary" />
                          </div>
                          <Badge variant="secondary" className="text-xs whitespace-nowrap py-1">
                            {service.name.includes("Audit") ? "490€" : "Sur devis"}
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
                  </a>
                </FadeInSection>
              ))}
            </div>
          </div>
        }
        whySection={{
          title: "Pourquoi Investir dans Google Ads ?",
          content: (
            <div id="pourquoi" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FadeInSection>
                  <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                          <Zap className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Résultats Immédiats</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Contrairement au SEO qui prend 3-6 mois, <strong>Google Ads génère du trafic dès le premier jour</strong>. Idéal pour un lancement produit, promotion ou besoin urgent de visibilité.
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>

                <FadeInSection delay={100}>
                  <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                          <Target className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Ciblage Ultra-Précis</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Ciblez par mots-clés, localisation (Lyon et alentours), horaires, appareils et même audiences personnalisées. <strong>Touchez exactement vos clients potentiels</strong> au moment où ils cherchent vos services.
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>

                <FadeInSection delay={200}>
                  <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                          <DollarSign className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Budget Maîtrisé</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Définissez votre budget quotidien maximum et <strong>payez uniquement quand quelqu&apos;un clique</strong> sur votre annonce. Contrôle total des dépenses et rentabilité mesurable au centime près.
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>

                <FadeInSection delay={300}>
                  <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                          <BarChart3 className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">ROI Mesurable</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Tracking précis des conversions, coût par acquisition et ROI. <strong>Sachez exactement ce que vous rapporte chaque euro investi</strong> en publicité Google et optimisez en continu.
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre Méthodologie Google Ads",
          content: (
            <div id="processus" className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Stratégie publicitaire complète : recherche de mots-clés, création d&apos;annonces, optimisation des enchères et amélioration continue du ROI.
              </p>
            </div>
          )
        }}
        features={features}
        pricing={pricingOptions}
        faq={faqs}
        relatedServices={[
          {
            title: "Référencement SEO",
            description: "Visibilité organique durable",
            href: "/referencement-seo-lyon",
            icon: <Target className="w-8 h-8" />
          },
          {
            title: "Sites E-commerce",
            description: "Boutique optimisée conversions",
            href: "/creation-site-ecommerce-lyon",
            icon: <TrendingUp className="w-8 h-8" />
          }
        ]}
      />

      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default GoogleAdsSEA;
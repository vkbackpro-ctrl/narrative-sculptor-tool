import ServiceTemplate from "@/components/ServiceTemplate";
import { Globe, ShoppingCart, FileText, Building2, Package, Languages, Sparkles, ArrowRight, CheckCircle2, TrendingUp, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroTeamCreationSiteLyon from "@/assets/hero-team-creation-site-lyon.jpg";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import FadeInSection from "@/components/FadeInSection";

const subServicesList = [
  {
    name: "Site Vitrine Lyon",
    description: "Site web professionnel pour présenter votre entreprise",
    href: "/creation-site-vitrine-lyon",
    icon: Building2,
    color: "from-blue-500/10 to-blue-400/5"
  },
  {
    name: "Site E-commerce Lyon",
    description: "Boutique en ligne avec WooCommerce ou PrestaShop",
    href: "/creation-site-ecommerce-lyon",
    icon: ShoppingCart,
    color: "from-green-500/10 to-green-400/5"
  },
  {
    name: "Refonte de Site Lyon",
    description: "Modernisez votre site internet existant",
    href: "/refonte-site-internet-lyon",
    icon: Sparkles,
    color: "from-purple-500/10 to-purple-400/5"
  },
  {
    name: "Site Corporate Lyon",
    description: "Site d'entreprise B2B haut de gamme",
    href: "/creation-site-corporate-lyon",
    icon: Building2,
    color: "from-indigo-500/10 to-indigo-400/5"
  },
  {
    name: "Site One Page Lyon",
    description: "Site web moderne sur une seule page",
    href: "/creation-site-one-page-lyon",
    icon: FileText,
    color: "from-orange-500/10 to-orange-400/5"
  },
  {
    name: "Site Catalogue Lyon",
    description: "Présentez vos produits sans vente en ligne",
    href: "/creation-site-catalogue-lyon",
    icon: Package,
    color: "from-teal-500/10 to-teal-400/5"
  },
  {
    name: "Site Multilingue Lyon",
    description: "Site web international en plusieurs langues",
    href: "/creation-site-multilingue-lyon",
    icon: Languages,
    color: "from-pink-500/10 to-pink-400/5"
  },
  {
    name: "Migration de Site Lyon",
    description: "Migrez votre site vers WordPress",
    href: "/migration-site-internet-lyon",
    icon: TrendingUp,
    color: "from-amber-500/10 to-amber-400/5"
  }
];

const CreationSiteInternet = () => {
  // Schema.org structured data for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://vkback.com/#organization",
        "name": "VK Back - Agence WordPress Lyon",
        "image": "https://vkback.com/logo.png",
        "description": "Agence web WordPress à Lyon spécialisée en création de sites internet depuis 2014. Sites vitrine, e-commerce, SEO local et maintenance.",
        "url": "https://vkback.com",
        "telephone": "+33478888888",
        "email": "contact@vkback.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Lyon",
          "addressLocality": "Lyon",
          "postalCode": "69002",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "45.7578",
          "longitude": "4.8320"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "45.7578",
            "longitude": "4.8320"
          },
          "geoRadius": "50000"
        },
        "priceRange": "€€€",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "200"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Création de Site Internet",
        "provider": {
          "@id": "https://vkback.com/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Lyon"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services de création web",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Site Vitrine WordPress",
                "description": "Création de site vitrine professionnel sur WordPress"
              },
              "price": "4000",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Site E-commerce WooCommerce",
                "description": "Boutique en ligne complète avec WooCommerce"
              },
              "price": "5000",
              "priceCurrency": "EUR"
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Création Site Internet Lyon | Agence WordPress Depuis 2014 | VKBack</title>
        <meta 
          name="description" 
          content="Agence web Lyon ⭐ Création site WordPress vitrine, e-commerce, corporate. Design moderne, SEO optimisé. Devis gratuit 24h. +200 clients Lyon satisfaits 4.9/5" 
        />
        <meta name="keywords" content="création site internet Lyon, agence web Lyon, WordPress Lyon, site vitrine Lyon, e-commerce Lyon, développeur WordPress Lyon, agence digitale Lyon" />
        <link rel="canonical" href="https://vkback.com/creation-site-internet-lyon" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      
      <ProgressBar />
      <Header />
      <StickyCtaButton />
      
      <main>
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 max-w-7xl mx-auto px-4 mt-8">
          <div>
            <ServiceTemplate
          breadcrumb={[
            { label: "Agence Web WordPress Lyon", href: "/" },
            { label: "Création de Site Internet Lyon" }
          ]}
          heroTitle="Création de Site Internet à Lyon"
          heroSubtitle="Agence web experte en création WordPress depuis 2014. Design moderne, référencement optimisé et accompagnement personnalisé pour votre projet web à Lyon."
          heroImage={heroTeamCreationSiteLyon}
          introduction={
        <div id="introduction" className="space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Vous êtes une <strong>TPE ou PME à Lyon</strong> et vous souhaitez créer votre site internet ? <strong className="text-primary">VKBack</strong>, <strong>agence web WordPress locale</strong> depuis plus de 10 ans, vous accompagne de A à Z dans la création de votre présence en ligne.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Site vitrine, e-commerce, corporate, multilingue</strong> : nous créons des sites professionnels, modernes et <strong>optimisés pour Google</strong>. Notre équipe de <strong>développeurs WordPress certifiés</strong> met son expertise à votre service pour un résultat à la hauteur de vos ambitions.
            </p>
          </div>

          {/* CTA enrichi */}
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Nos Types de Sites Internet
                </h3>
                <p className="text-muted-foreground mb-4">
                  Découvrez notre gamme complète de solutions web adaptées à votre activité et vos objectifs à Lyon et sa région.
                </p>
              </div>
              <Button size="lg" className="btn-cta whitespace-nowrap">
                Demander un Devis Gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Grid des sous-services avec liens internes pour le SEO */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {subServicesList.map((service, index) => (
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
                        <Badge variant="secondary" className="text-xs">
                          {service.name.includes("E-commerce") ? "À partir de 5 000€" : "À partir de 4 000€"}
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
                      <div className="flex items-center gap-2 mt-3 text-primary text-sm font-medium">
                        <span>En savoir plus</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </FadeInSection>
            ))}
          </div>

          {/* Texte SEO enrichi */}
          <div className="prose prose-lg max-w-none mt-8 bg-muted/30 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              Pourquoi Choisir VKBack pour la Création de Votre Site Internet à Lyon ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-base">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Expertise WordPress Lyon
                </h3>
                <p className="text-muted-foreground">
                  Plus de <strong>10 ans d'expérience</strong> dans la création de sites WordPress à Lyon. Nous maîtrisons toutes les facettes du CMS leader mondial, de la création de thèmes sur-mesure à l'optimisation des performances.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Accompagnement Local
                </h3>
                <p className="text-muted-foreground">
                  Basés à <strong>Lyon</strong>, nous intervenons dans tous les arrondissements et la métropole. Rencontres en personne possibles pour un accompagnement personnalisé et une meilleure compréhension de vos besoins.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  SEO Intégré
                </h3>
                <p className="text-muted-foreground">
                  Chaque site que nous créons est <strong>optimisé pour le référencement naturel</strong> dès sa conception. Structure SEO, balises optimisées, vitesse de chargement : tout est pensé pour votre visibilité sur Google.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Support Continu
                </h3>
                <p className="text-muted-foreground">
                  Notre relation ne s'arrête pas à la livraison. <strong>Formation complète</strong>, documentation détaillée et <strong>support technique</strong> pour que vous soyez autonome dans la gestion quotidienne de votre site.
                </p>
              </div>
            </div>
          </div>
        </div>
      }
      whySection={{
        title: "Pourquoi Créer un Site Internet Professionnel en 2025 ?",
        content: (
          <div id="pourquoi" className="space-y-8">
            <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              En 2025, avoir un <strong>site internet professionnel</strong> n'est plus une option, c'est une nécessité pour toute entreprise à Lyon et sa région qui souhaite se développer.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass-card border-2 hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="mb-3 p-3 bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8 text-blue-500" />
                  </div>
                  <CardTitle className="text-xl">Visibilité 24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Votre entreprise <strong>accessible jour et nuit</strong>, partout dans le monde. Vos clients potentiels peuvent découvrir vos services même en dehors de vos horaires d'ouverture.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-2 hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="mb-3 p-3 bg-gradient-to-br from-green-500/10 to-green-400/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-green-500" />
                  </div>
                  <CardTitle className="text-xl">Crédibilité Professionnelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>75% des consommateurs</strong> jugent la crédibilité d'une entreprise via son site web. Un site professionnel renforce votre image de marque.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-2 hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="mb-3 p-3 bg-gradient-to-br from-purple-500/10 to-purple-400/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-purple-500" />
                  </div>
                  <CardTitle className="text-xl">Génération de Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Formulaires de contact</strong>, devis en ligne, chatbot : captez vos futurs clients et développez votre chiffre d'affaires.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-2 hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="mb-3 p-3 bg-gradient-to-br from-orange-500/10 to-orange-400/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl">Développement Commercial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Élargissez votre <strong>zone de chalandise</strong> au-delà de Lyon et sa région. Internet vous ouvre les portes de nouveaux marchés.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-2 hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="mb-3 p-3 bg-gradient-to-br from-teal-500/10 to-teal-400/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                    <Sparkles className="w-8 h-8 text-teal-500" />
                  </div>
                  <CardTitle className="text-xl">Communication Efficace</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Présentez vos <strong>services, actualités et expertise</strong> en un seul endroit. Blog, portfolio, témoignages clients : tout est centralisé.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-2 hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="mb-3 p-3 bg-gradient-to-br from-red-500/10 to-red-400/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-8 h-8 text-red-500" />
                  </div>
                  <CardTitle className="text-xl">Avantage Concurrentiel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Vos concurrents ont déjà un site. <strong>Ne prenez pas de retard !</strong> Un site professionnel vous différencie de la concurrence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      }}
      expertise={{
        title: "Notre Processus de Création en 6 Étapes Clés",
        content: (
          <div id="processus" className="space-y-8">
            <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Une <strong>méthodologie éprouvée</strong> qui garantit la réussite de votre projet de création de site internet à Lyon. Transparence et communication à chaque étape.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass-card border-l-4 border-l-primary hover:shadow-xl transition-all group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-primary font-bold text-xl">1</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">1 semaine</Badge>
                  </div>
                  <CardTitle className="text-lg">Analyse des Besoins</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    <strong>Rendez-vous pour comprendre</strong> votre activité, vos objectifs et votre cible. Analyse concurrentielle et benchmark de votre secteur à Lyon.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      Audit de l'existant
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      Définition des objectifs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      Étude de la concurrence
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card border-l-4 border-l-secondary hover:shadow-xl transition-all group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-secondary font-bold text-xl">2</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">2-3 jours</Badge>
                  </div>
                  <CardTitle className="text-lg">Devis & Cahier des Charges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    <strong>Proposition commerciale détaillée</strong> sous 24-48h avec planning prévisionnel et tarifs transparents. Pas de surprise !
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-secondary" />
                      Devis personnalisé
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-secondary" />
                      Planning détaillé
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-secondary" />
                      Cahier des charges
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card border-l-4 border-l-accent hover:shadow-xl transition-all group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-accent font-bold text-xl">3</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">1-2 semaines</Badge>
                  </div>
                  <CardTitle className="text-lg">Maquettes & Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Création de <strong>wireframes et maquettes graphiques</strong> (Figma). Choix des couleurs, typographies et validation avec vous.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-accent" />
                      Wireframes UX
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-accent" />
                      Maquettes desktop & mobile
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-accent" />
                      Charte graphique
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card border-l-4 border-l-blue-500 hover:shadow-xl transition-all group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-blue-500 font-bold text-xl">4</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">2-4 semaines</Badge>
                  </div>
                  <CardTitle className="text-lg">Développement WordPress</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    <strong>Intégration HTML/CSS/JS</strong>, développement WordPress, responsive design et intégration de votre contenu.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-blue-500" />
                      Développement WordPress
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-blue-500" />
                      Intégration responsive
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-blue-500" />
                      Optimisation SEO technique
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card border-l-4 border-l-green-500 hover:shadow-xl transition-all group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-400/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-green-500 font-bold text-xl">5</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">1 semaine</Badge>
                  </div>
                  <CardTitle className="text-lg">Tests & Validation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    <strong>Tests multi-navigateurs</strong>, responsive, performance. Corrections et validation finale avec vous.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      Tests de compatibilité
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      Tests de performance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      Validation client
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card border-l-4 border-l-purple-500 hover:shadow-xl transition-all group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-purple-500 font-bold text-xl">6</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">1-2 jours</Badge>
                  </div>
                  <CardTitle className="text-lg">Formation & Mise en Ligne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    <strong>Formation complète</strong> (2-4h), documentation, mise en ligne et configuration Analytics.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-purple-500" />
                      Formation WordPress
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-purple-500" />
                      Documentation complète
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-purple-500" />
                      Mise en production
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-2xl font-bold text-primary mb-2">
                Délai total : 4 à 8 semaines
              </p>
              <p className="text-muted-foreground">
                selon la complexité de votre projet de site internet à Lyon
              </p>
            </div>
          </div>
        )
      }}
      features={[
        {
          title: "Design Responsive",
          description: "Site adapté à tous les écrans : mobile, tablette, desktop"
        },
        {
          title: "Optimisation SEO",
          description: "Structure optimisée pour le référencement Google"
        },
        {
          title: "Performance Optimale",
          description: "Temps de chargement rapide, images optimisées"
        },
        {
          title: "Sécurité Renforcée",
          description: "Certificat SSL, sauvegardes automatiques, firewall"
        },
        {
          title: "Formation Complète",
          description: "Apprenez à gérer votre site en toute autonomie"
        },
        {
          title: "Support Continu",
          description: "Assistance technique après la mise en ligne"
        }
      ]}
      pricing={[
        {
          name: "Site Vitrine",
          price: "À partir de 4 000€",
          features: [
            "5 à 15 pages",
            "Design sur-mesure",
            "Responsive mobile/tablette",
            "Formulaire de contact",
            "Optimisation SEO de base",
            "Formation incluse",
            "Support 3 mois"
          ]
        },
        {
          name: "Site E-commerce",
          price: "À partir de 5 000€",
          popular: true,
          features: [
            "Boutique en ligne complète",
            "Paiement sécurisé",
            "Gestion des stocks",
            "Espace client",
            "Optimisation SEO avancée",
            "Formation approfondie",
            "Support 6 mois"
          ]
        },
        {
          name: "Site Sur-Mesure",
          price: "Sur devis",
          features: [
            "Fonctionnalités personnalisées",
            "Intégrations API",
            "Multilingue",
            "Espace membre",
            "Application web complexe",
            "Formation complète",
            "Support dédié"
          ]
        }
      ]}
      faq={[
        {
          question: "Quel est le délai moyen pour créer un site internet à Lyon ?",
          answer: "Le délai varie selon la complexité : 4 semaines pour un site vitrine simple, 6-8 semaines pour un e-commerce. Nous établissons un planning précis dès le début du projet avec des jalons clairs."
        },
        {
          question: "Puis-je modifier mon site moi-même après la livraison ?",
          answer: "Absolument ! Nous utilisons WordPress qui vous permet de modifier facilement vos contenus (textes, images, articles). Nous vous formons pendant 2 à 4 heures à la gestion autonome de votre site WordPress."
        },
        {
          question: "Le site sera-t-il visible sur mobile et tablette ?",
          answer: "Oui, tous nos sites sont responsive design, c'est-à-dire qu'ils s'adaptent automatiquement à tous les écrans (mobile, tablette, desktop). Le responsive est inclus systématiquement dans nos tarifs."
        },
        {
          question: "Qu'est-ce qui est inclus dans le prix d'un site internet ?",
          answer: "Le prix comprend : analyse des besoins, maquettes UI/UX, développement WordPress, responsive design, optimisation SEO de base, intégration de contenu, formation complète, nom de domaine et hébergement la première année."
        },
        {
          question: "Proposez-vous un contrat de maintenance WordPress ?",
          answer: "Oui, nous proposons des contrats de maintenance à partir de 49€/mois incluant : mises à jour WordPress et plugins, sauvegardes quotidiennes, monitoring sécurité, support technique prioritaire et modifications mineures de contenu."
        },
        {
          question: "Mon site sera-t-il bien référencé sur Google dès le début ?",
          answer: "Nous optimisons la structure technique de votre site pour le SEO (balises meta, vitesse de chargement, mobile-first, sitemap XML). Pour un référencement local poussé à Lyon, nous proposons des prestations SEO complémentaires avec suivi de positionnement."
        },
        {
          question: "Puis-je voir des exemples de vos réalisations à Lyon ?",
          answer: "Bien sûr ! Consultez notre portfolio avec plus de 200 sites créés pour des entreprises lyonnaises de tous secteurs (restauration, immobilier, services B2B, e-commerce). Nous pouvons vous montrer des cas similaires à votre projet lors d'un rendez-vous."
        },
        {
          question: "Comment se passe le paiement d'un site internet ?",
          answer: "Nous fonctionnons en 3 fois sans frais : 30% à la signature du devis, 40% à la validation des maquettes graphiques, 30% à la mise en ligne finale. Paiement par virement bancaire ou chèque accepté."
        },
        {
          question: "Fournissez-vous l'hébergement et le nom de domaine ?",
          answer: "Oui, nous incluons l'hébergement haute performance et le nom de domaine .fr ou .com la première année. L'hébergement est optimisé spécifiquement pour WordPress avec SSD, CDN et certificat SSL inclus pour des performances maximales."
        },
        {
          question: "Quelle est la différence entre un site vitrine et un site e-commerce ?",
          answer: "Un site vitrine présente votre entreprise, vos services et permet le contact (formulaires, téléphone). Un site e-commerce permet la vente en ligne avec catalogue produits, panier, paiement sécurisé et gestion des commandes. Les tarifs commencent à 4000€ pour un vitrine, 5000€ pour un e-commerce."
        },
        {
          question: "Utilisez-vous des templates ou créez-vous des sites sur-mesure ?",
          answer: "Nous créons des designs sur-mesure adaptés à votre charte graphique et vos besoins spécifiques. Nous n'utilisons pas de templates tout faits mais développons avec des frameworks professionnels comme Divi ou Elementor Pro pour garantir qualité et flexibilité."
        },
        {
          question: "Le site sera-t-il conforme au RGPD et aux normes d'accessibilité ?",
          answer: "Oui, tous nos sites respectent les normes RGPD (cookies, mentions légales, politique de confidentialité) et nous appliquons les bonnes pratiques d'accessibilité WCAG pour que votre site soit utilisable par tous. Bandeau cookies et formulaires conformes inclus."
        },
        {
          question: "Puis-je avoir un site multilingue (français/anglais) ?",
          answer: "Absolument ! Nous créons des sites multilingues avec le plugin WPML ou Polylang. Chaque page peut être traduite et le visiteur choisit sa langue. Coût additionnel selon le nombre de langues et de pages à traduire (à partir de +1500€)."
        },
        {
          question: "Proposez-vous l'intégration d'un système de réservation en ligne ?",
          answer: "Oui, nous intégrons des systèmes de réservation pour restaurants, hôtels, salles, prestations de services (coiffeurs, garages, etc.). Calendrier en temps réel, paiement en ligne, notifications automatiques. Tarif sur devis selon la complexité (+2000€ environ)."
        },
        {
          question: "Combien coûte un site e-commerce sur WooCommerce à Lyon ?",
          answer: "Un site e-commerce WooCommerce débute à 5000€ pour une boutique standard (50-100 produits, paiement CB, gestion stocks). Pour des besoins avancés (multi-vendeurs, abonnements, marketplace), le tarif est sur devis. Nous utilisons WooCommerce car c'est la solution e-commerce WordPress la plus complète."
        },
        {
          question: "Que se passe-t-il si je ne suis pas satisfait du design proposé ?",
          answer: "Nous travaillons en itération : après les wireframes, nous créons 2 maquettes graphiques. Vous pouvez demander des ajustements jusqu'à validation complète. Nous incluons 2 rounds de modifications dans nos tarifs. Votre satisfaction est notre priorité !"
        },
        {
          question: "Puis-je migrer mon site existant vers WordPress ?",
          answer: "Oui, nous proposons des prestations de migration depuis Wix, Jimdo, Joomla, PrestaShop ou autre CMS vers WordPress. Nous récupérons votre contenu, améliorons le design et optimisons le SEO. Consultez notre page migration de site internet pour plus de détails."
        },
        {
          question: "Créez-vous aussi des applications mobiles ou seulement des sites web ?",
          answer: "Nous sommes spécialisés dans les sites web WordPress responsive qui fonctionnent parfaitement sur mobile. Pour des applications mobiles natives (iOS/Android), nous travaillons avec des partenaires de confiance que nous pouvons vous recommander."
        }
      ]}
      relatedServices={[
        {
          title: "Référencement SEO",
          description: "Améliorez votre visibilité sur Google",
          href: "/agence-seo-lyon",
          icon: <Globe className="h-12 w-12" />
        },
        {
          title: "Maintenance WordPress",
          description: "Sécurisez et mettez à jour votre site",
          href: "/maintenance-site-web-lyon",
          icon: <FileText className="h-12 w-12" />
        },
        {
          title: "Hébergement Web",
          description: "Hébergement haute performance",
          href: "/hebergement-web-lyon",
          icon: <Building2 className="h-12 w-12" />
        }
      ]}
    />
            
            <PortfolioSection />
            <div className="max-w-4xl mx-auto px-4 my-16">
              <QuoteCalculator />
            </div>
            <TeamSection />
            <LyonMap />
            <CertificationBadges />
          </div>
          
          <aside className="hidden lg:block">
            <TableOfContents />
          </aside>
        </div>
      </main>
      <ScrollToTop />
    </>
  );
};

export default CreationSiteInternet;

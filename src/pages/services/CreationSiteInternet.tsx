import ServiceTemplate from "@/components/ServiceTemplate";
import { Globe, ShoppingCart, FileText, Building2, Package, Languages, Sparkles, ArrowRight, CheckCircle2, TrendingUp, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroTeamCreationSiteLyon from "@/assets/agence-creation-site-internet-wordpress-lyon.jpg";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import FadeInSection from "@/components/FadeInSection";
import { Helmet } from "react-helmet";
import ProgressBar from "@/components/ProgressBar";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import CertificationBadges from "@/components/CertificationBadges";
import Footer from "@/components/Footer";

const subServicesList = [
  {
    name: "Site Vitrine Lyon",
    description: "Site web professionnel pour présenter votre entreprise",
    href: "/creation-site-vitrine-lyon",
    icon: Building2,
    color: "from-blue-500/10 to-blue-400/5",
    price: "2 500€"
  },
  {
    name: "Refonte de Site Lyon",
    description: "Modernisez votre site internet existant",
    href: "/refonte-site-internet-lyon",
    icon: Sparkles,
    color: "from-purple-500/10 to-purple-400/5",
    price: "3 000€"
  },
  {
    name: "Site Corporate Lyon",
    description: "Site d'entreprise B2B haut de gamme",
    href: "/creation-site-corporate-lyon",
    icon: Building2,
    color: "from-indigo-500/10 to-indigo-400/5",
    price: "8 000€"
  },
  {
    name: "Site One Page Lyon",
    description: "Site web moderne sur une seule page",
    href: "/creation-site-one-page-lyon",
    icon: FileText,
    color: "from-orange-500/10 to-orange-400/5",
    price: "1 800€"
  },
  {
    name: "Site Catalogue Lyon",
    description: "Présentez vos produits sans vente en ligne",
    href: "/creation-site-catalogue-lyon",
    icon: Package,
    color: "from-teal-500/10 to-teal-400/5",
    price: "3 500€"
  },
  {
    name: "Site Multilingue Lyon",
    description: "Site web international en plusieurs langues",
    href: "/creation-site-multilingue-lyon",
    icon: Languages,
    color: "from-pink-500/10 to-pink-400/5",
    price: "5 500€"
  },
  {
    name: "Migration de Site Lyon",
    description: "Migrez votre site vers WordPress",
    href: "/migration-site-internet-lyon",
    icon: TrendingUp,
    color: "from-amber-500/10 to-amber-400/5",
    price: "2 000€"
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
        "description": "Agence web WordPress à Lyon avec 14 ans d'expérience en création de sites internet. Sites vitrine, e-commerce, SEO local et maintenance.",
        "url": "https://vkback.com",
        "telephone": "+33411789113",
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
        "areaServed": [
          { "@type": "City", "name": "Lyon" },
          { "@type": "City", "name": "Villeurbanne" },
          { "@type": "City", "name": "Caluire-et-Cuire" },
          { "@type": "City", "name": "Écully" },
          { "@type": "City", "name": "Vénissieux" },
          { "@type": "City", "name": "Bron" },
          { "@type": "City", "name": "Oullins" }
        ],
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
        "areaServed": [
          { "@type": "City", "name": "Lyon" },
          { "@type": "City", "name": "Villeurbanne" },
          { "@type": "City", "name": "Caluire-et-Cuire" },
          { "@type": "City", "name": "Écully" },
          { "@type": "City", "name": "Vénissieux" }
        ],
        "priceRange": "1 500€ - 15 000€",
        "keywords": "création site internet Lyon, agence web Lyon, WordPress Lyon, site vitrine Villeurbanne, développeur web Lyon 3, création site Rhône-Alpes, agence WordPress Caluire, site corporate Écully",
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
              "price": "1500",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Site Corporate WordPress",
                "description": "Site d'entreprise B2B haut de gamme"
              },
              "price": "8000",
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
        <title>Création Site Internet Lyon | Agence WordPress - VKBack</title>
        <meta 
          name="description" 
          content="Agence web Lyon ⭐ Création site WordPress vitrine, e-commerce, corporate. Design moderne, SEO optimisé. Devis gratuit 24h. +200 clients Lyon satisfaits 4.9/5" 
        />
        <meta name="keywords" content="création site internet Lyon, agence web Lyon, WordPress Lyon, site vitrine Lyon, e-commerce Lyon, développeur WordPress Lyon, agence digitale Lyon" />
        <link rel="canonical" href="https://vkback.com/creation-site-internet-lyon" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quel est le délai de création d'un site internet ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le délai varie selon la complexité du projet. Comptez 4 à 6 semaines pour un site vitrine, 6 à 10 semaines pour un site corporate et 8 à 12 semaines pour un site e-commerce. Nous définissons ensemble un planning précis lors du brief initial."
                }
              },
              {
                "@type": "Question",
                "name": "Combien coûte la création d'un site internet à Lyon ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le prix dépend de vos besoins : à partir de 1 500€ pour un site vitrine, 8 000€ pour un site corporate et 5 000€ pour une boutique e-commerce. Nous établissons un devis détaillé gratuit après analyse de votre projet."
                }
              },
              {
                "@type": "Question",
                "name": "Pourquoi choisir WordPress pour mon site ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "WordPress équipe plus de 43% des sites web mondiaux. Il offre flexibilité, facilité de gestion du contenu, excellent référencement natif et des milliers de plugins. Vous gardez la main sur votre site sans dépendre d'un développeur pour chaque modification."
                }
              },
              {
                "@type": "Question",
                "name": "Mon site sera-t-il bien référencé sur Google ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, nous optimisons le SEO dès la conception : structure technique, balises meta, vitesse de chargement, responsive design. Nous incluons aussi la configuration de Google Search Console et Analytics pour suivre vos performances."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <ProgressBar />
      <Header />
      <StickyCtaButton />
      
      <main>
        <ServiceTemplate
          breadcrumb={[
            { label: "Agence Web Lyon", href: "/" },
            { label: "Création de Site Internet Lyon" }
          ]}
          painPointHook={{
            question: "Vous n'avez pas de site web ou votre site actuel ne vous rapporte rien ?",
            answer: "C'est souvent là que tout bloque. On peut débloquer ça ensemble."
          }}
          painPoints={[
            {
              problem: "Je n'ai pas le temps de m'occuper d'un site",
              solution: "On gère tout de A à Z, vous validez et c'est en ligne",
              icon: "⏱️"
            },
            {
              problem: "Mon site actuel fait amateur et me fait honte",
              solution: "Design pro, moderne et qui reflète votre sérieux",
              icon: "✨"
            },
            {
              problem: "Je n'apparais pas sur Google Lyon",
              solution: "SEO local intégré dès la conception du site",
              icon: "📍"
            },
            {
              problem: "Les devis web sont incompréhensibles",
              solution: "Prix clairs, pas de frais cachés, engagement qualité",
              icon: "💎"
            }
          ]}
          heroTitle="Création de Site Internet WordPress à Lyon"
          heroSubtitle="Votre site actuel est invisible sur Google ? Pas adapté mobile ? Ne reflète pas votre professionnalisme ? Nous créons des sites WordPress modernes qui génèrent vraiment des clients à Lyon."
          heroImage={heroTeamCreationSiteLyon}
          heroAlt="Agence création site internet WordPress Lyon - Équipe VKBack développement web professionnel et design moderne"
          ctaPrimary={{ label: "Améliorer ma visibilité", href: "/contact" }}
          ctaSecondary={{ label: "Voir nos créations", href: "/realisations" }}
          introduction={
        <div id="introduction" className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Création de Site Internet à Lyon</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Vous êtes une <strong>TPE ou PME à Lyon</strong> et vous souhaitez créer votre site internet ? <strong className="text-primary">VKBack</strong>, <strong>agence web WordPress locale avec 14 ans d'expérience</strong>, vous accompagne de A à Z dans la création de votre présence en ligne.
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
              <Button asChild size="lg" className="btn-cta whitespace-nowrap">
                <Link to="/contact">
                  Améliorer ma visibilité
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Grid des sous-services avec liens internes pour le SEO */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {subServicesList.map((service, index) => (
              <FadeInSection key={service.name} delay={index * 50}>
                <Link 
                  to={service.href}
                  className="group block"
                >
                  <Card className={`h-full border-2 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br ${service.color} hover:shadow-xl hover:-translate-y-1`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform shrink-0">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs py-1 shrink-0">
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
        title: "Pourquoi un Site Professionnel ?",
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
                      <h3 className="text-xl font-semibold">Visibilité 24/7</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Un site internet est <strong>votre vitrine digitale accessible en permanence</strong>. Vos clients potentiels peuvent découvrir vos services à tout moment, depuis Lyon ou partout en France. C'est votre <strong>commercial qui ne dort jamais</strong>.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>

              <FadeInSection delay={100}>
                <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Crédibilité Professionnelle</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <strong>85% des consommateurs</strong> recherchent une entreprise en ligne avant de la contacter. Un site web moderne et professionnel <strong>rassure vos clients</strong> et vous différencie de la concurrence à Lyon.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>

              <FadeInSection delay={200}>
                <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Acquisition de Clients</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Un site <strong>optimisé pour le référencement local</strong> (SEO Lyon) génère des demandes de contact qualifiées. C'est un <strong>investissement rentable</strong> qui se transforme en nouveaux clients pour votre entreprise.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>

              <FadeInSection delay={300}>
                <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Automatisation & Efficacité</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Formulaires de contact, réservations en ligne, catalogue produits... Un site internet <strong>automatise de nombreuses tâches</strong> et libère du temps pour vous concentrer sur votre cœur de métier.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
        )
      }}
      expertise={{
        title: "Notre Processus en 6 Étapes",
        content: (
          <div id="processus" className="space-y-6">
            <div className="relative">
              {/* Timeline verticale */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />
              
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Audit & Stratégie",
                    description: "Nous analysons vos besoins, vos objectifs et votre marché. Nous définissons ensemble la stratégie digitale et l'arborescence de votre futur site.",
                    duration: "1 semaine"
                  },
                  {
                    step: "2",
                    title: "Design & Maquettes",
                    description: "Notre designer UI/UX crée des maquettes sur-mesure qui reflètent votre identité. Vous validez le design avant le développement.",
                    duration: "2 semaines"
                  },
                  {
                    step: "3",
                    title: "Développement WordPress",
                    description: "Nos développeurs WordPress créent votre site : intégration des maquettes, fonctionnalités custom, optimisation des performances.",
                    duration: "3-4 semaines"
                  },
                  {
                    step: "4",
                    title: "Contenu & SEO",
                    description: "Intégration de vos contenus optimisés SEO, configuration du référencement local Lyon, mise en place des balises et métadonnées.",
                    duration: "1 semaine"
                  },
                  {
                    step: "5",
                    title: "Tests & Formation",
                    description: "Tests approfondis (navigation, formulaires, responsive). Formation pour que vous soyez autonome sur WordPress.",
                    duration: "1 semaine"
                  },
                  {
                    step: "6",
                    title: "Mise en Ligne & Suivi",
                    description: "Mise en production, monitoring des performances et accompagnement post-lancement pendant 1 mois.",
                    duration: "Suivi continu"
                  }
                ].map((item, index) => (
                  <FadeInSection key={item.step} delay={index * 100}>
                    <div className="relative flex gap-6 items-start group">
                      {/* Numéro de step */}
                      <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                        {item.step}
                      </div>
                      
                      {/* Contenu */}
                      <Card className="flex-1 glass-card border-2 hover:border-primary/50 transition-all">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <Badge variant="secondary" className="text-xs shrink-0">
                              {item.duration}
                            </Badge>
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
      features={[
        {
          title: "Design Responsive",
          description: "Site adapté à tous les écrans (mobile, tablette, desktop) pour une expérience optimale"
        },
        {
          title: "SEO Optimisé",
          description: "Référencement naturel intégré dès la conception pour être visible sur Google"
        },
        {
          title: "WordPress Sur-Mesure",
          description: "Administration intuitive WordPress avec formations incluses"
        },
        {
          title: "Performance Web",
          description: "Temps de chargement optimisés, cache avancé et images WebP"
        },
        {
          title: "Sécurité Renforcée",
          description: "Certificat SSL, sauvegardes automatiques, protection anti-hack"
        },
        {
          title: "RGPD Compliant",
          description: "Conformité RGPD : cookies, mentions légales, politique de confidentialité"
        },
        {
          title: "Support Technique",
          description: "Assistance technique pendant 3 mois après la mise en ligne"
        },
        {
          title: "Hébergement Inclus",
          description: "Hébergement performant en France pendant 1 an offert"
        },
        {
          title: "Analytics & Suivi",
          description: "Google Analytics configuré pour suivre vos performances"
        }
      ]}
      pricing={[
        {
          name: "Site Vitrine",
          price: "À partir de 1 500€",
          features: [
            "5 pages personnalisées",
            "Design responsive moderne",
            "SEO local Lyon optimisé",
            "Formulaire de contact",
            "1 an d'hébergement offert",
            "Formation WordPress incluse",
            "3 mois de support technique"
          ]
        },
        {
          name: "Site Business",
          price: "À partir de 2 500€",
          popular: true,
          features: [
            "10 pages personnalisées",
            "Design premium sur-mesure",
            "SEO avancé + Blog",
            "Formulaires multiples",
            "Newsletter intégrée",
            "Formation complète",
            "Support 3-6 mois",
            "Animations & interactions"
          ]
        },
        {
          name: "Site Corporate",
          price: "À partir de 8 000€",
          features: [
            "Site institutionnel haut de gamme",
            "Pages illimitées",
            "Design premium personnalisé",
            "Multi-publics (presse, RH, investisseurs)",
            "Site multilingue (2-3 langues)",
            "SEO corporate avancé",
            "Formation complète équipe",
            "Support prioritaire 6 mois"
          ]
        }
      ]}
      faq={[
        {
          question: "Combien de temps faut-il pour créer un site internet à Lyon ?",
          answer: "En moyenne, un site vitrine nécessite 4 à 6 semaines, un site e-commerce 8 à 12 semaines. Le délai dépend de la complexité du projet, du nombre de pages, des fonctionnalités spécifiques et de la rapidité de vos retours. Nous établissons un planning précis dès le début du projet."
        },
        {
          question: "Quel est le prix d'un site internet à Lyon en 2025 ?",
          answer: "Un site vitrine démarre à partir de 2 000€, un site professionnel autour de 4 000€ et un e-commerce à partir de 5 000€. Le prix varie selon vos besoins : nombre de pages, fonctionnalités, design personnalisé, intégrations tierces. Nous proposons des devis détaillés et transparents."
        },
        {
          question: "Pourquoi choisir WordPress pour créer mon site ?",
          answer: "WordPress est le CMS le plus utilisé au monde (43% du web). Il offre une grande flexibilité, une facilité d'administration, des milliers d'extensions, une excellente compatibilité SEO et une communauté active. Vous serez autonome pour gérer votre contenu après notre formation."
        },
        {
          question: "Mon site sera-t-il bien référencé sur Google à Lyon ?",
          answer: "Oui, nous intégrons les bonnes pratiques SEO dès la conception : structure optimisée, balises meta, vitesse de chargement, responsive design, contenu optimisé. Pour le référencement local Lyon, nous configurons Google My Business et les annuaires locaux. Un suivi SEO mensuel est recommandé."
        },
        {
          question: "Puis-je modifier mon site moi-même après la livraison ?",
          answer: "Absolument ! WordPress est conçu pour être utilisé sans compétences techniques. Nous incluons une formation personnalisée de 2h pour vous apprendre à modifier vos textes, ajouter des images, publier des articles, gérer vos pages. Nous restons disponibles pour vos questions."
        },
        {
          question: "L'hébergement et le nom de domaine sont-ils inclus ?",
          answer: "La première année d'hébergement est offerte (valeur 200€). Le nom de domaine (.fr ou .com) est offert également. Ensuite, l'hébergement coûte environ 15-30€/mois selon vos besoins. Nous vous conseillons sur le meilleur hébergeur pour votre projet."
        },
        {
          question: "Proposez-vous un contrat de maintenance ?",
          answer: "Oui, nous proposons des contrats de maintenance mensuels (à partir de 100€/mois) incluant : mises à jour WordPress, sauvegardes automatiques, monitoring de sécurité, corrections de bugs, modifications de contenu. C'est recommandé pour garantir la sécurité et les performances."
        },
        {
          question: "Comment se passe la création d'un site e-commerce à Lyon ?",
          answer: "Nous utilisons WooCommerce, la solution e-commerce de WordPress. Le processus inclut : configuration de la boutique, intégration des moyens de paiement (CB, PayPal, virement), gestion des stocks, emails automatiques, tunnel de commande optimisé, formation à la gestion des produits et commandes."
        },
        {
          question: "Faites-vous des sites multilingues ?",
          answer: "Oui, nous créons des sites multilingues avec l'extension WPML ou Polylang. Vous pouvez ainsi proposer votre site en plusieurs langues (français, anglais, italien...). Idéal pour les entreprises qui exportent ou accueillent une clientèle internationale à Lyon."
        },
        {
          question: "Que se passe-t-il si je ne suis pas satisfait du design ?",
          answer: "Nous travaillons en étroite collaboration avec vous. Vous validez les maquettes avant le développement. Nous incluons 2 séries de modifications pour ajuster le design selon vos retours. Notre objectif est votre satisfaction totale."
        },
        {
          question: "Puis-je avoir un site e-commerce + blog + espace membre ?",
          answer: "Oui, WordPress permet de combiner plusieurs types de contenus : boutique en ligne, blog d'actualités, espace membre privé, forum, portfolio. Nous concevons des sites hybrides répondant à tous vos besoins business."
        },
        {
          question: "Travaillez-vous avec des clients en dehors de Lyon ?",
          answer: "Oui, bien que nous soyons basés à Lyon, nous accompagnons des clients partout en France et même à l'international. La plupart des échanges se font en visioconférence. Nous nous déplaçons sur demande dans la région Auvergne-Rhône-Alpes."
        },
        {
          question: "Proposez-vous un accompagnement SEO après la création ?",
          answer: "Oui, nous proposons des prestations SEO mensuelles : audit régulier, optimisation de contenu, netlinking, suivi de positionnement, stratégie de mots-clés locaux Lyon. Le SEO est un travail continu pour maintenir et améliorer votre visibilité sur Google."
        },
        {
          question: "Que se passe-t-il si mon site est piraté ou tombe en panne ?",
          answer: "Avec un contrat de maintenance, nous intervenons rapidement en cas de problème : restauration des sauvegardes, nettoyage du site, renforcement de la sécurité. Sans contrat, nous proposons des interventions d'urgence facturées à l'heure."
        },
        {
          question: "Comment mesurer les performances de mon site internet ?",
          answer: "Nous installons Google Analytics et Search Console pour suivre : nombre de visiteurs, pages vues, taux de conversion, sources de trafic, mots-clés qui génèrent du trafic. Nous vous formons à lire ces statistiques et à prendre des décisions data-driven."
        },
        {
          question: "Mon ancien site peut-il être migré vers WordPress ?",
          answer: "Oui, nous réalisons des migrations depuis d'autres CMS (Joomla, Wix, Squarespace...) vers WordPress. Nous conservons vos contenus, optimisons votre SEO pour éviter les pertes de référencement, et mettons en place les redirections 301 nécessaires."
        },
        {
          question: "Puis-je intégrer des outils tiers (CRM, ERP, newsletter) ?",
          answer: "Oui, WordPress s'intègre facilement avec de nombreux outils : Mailchimp, HubSpot, Salesforce, Stripe, PayPal, Google Workspace, etc. Nous configurons les connexions API nécessaires pour automatiser vos processus métier."
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
        
        {/* Sections supplémentaires */}
        <div>
          <PortfolioSection />
          <TeamSection />
          <ContactSection />
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default CreationSiteInternet;

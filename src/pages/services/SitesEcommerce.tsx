import { Helmet } from "react-helmet";
import { ArrowRight, Badge as BadgeIcon, CheckCircle2, Sparkles, TrendingUp, Shield, Smartphone, Zap, ShoppingCart, CreditCard, Package, Users, Globe, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import ServiceTemplate from "@/components/ServiceTemplate";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import FadeInSection from "@/components/FadeInSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroSiteEcommerce from "@/assets/hero-site-ecommerce.jpg";

const subServicesList = [
  {
    name: "Boutique WooCommerce",
    description: "Création de boutique en ligne complète avec WooCommerce, la solution e-commerce N°1 pour WordPress",
    href: "/services/boutique-woocommerce-lyon/",
    icon: ShoppingCart,
    color: "from-green-500/5 to-green-400/5"
  },
  {
    name: "Optimisation WooCommerce",
    description: "Optimisation performances et conversions de votre boutique WooCommerce existante",
    href: "/services/optimisation-woocommerce-lyon/",
    icon: TrendingUp,
    color: "from-orange-500/5 to-orange-400/5"
  },
  {
    name: "Optimisation Conversion",
    description: "Amélioration du taux de conversion pour transformer vos visiteurs en clients",
    href: "/services/optimisation-conversion-ecommerce-lyon/",
    icon: TrendingUp,
    color: "from-purple-500/5 to-purple-400/5"
  },
  {
    name: "SEO E-commerce",
    description: "Référencement naturel spécialisé pour boutiques en ligne et fiches produits",
    href: "/services/seo-ecommerce-lyon/",
    icon: Zap,
    color: "from-orange-500/5 to-orange-400/5"
  },
  {
    name: "Refonte E-commerce",
    description: "Modernisation de votre boutique existante pour améliorer performances et expérience utilisateur",
    href: "/services/refonte-site-ecommerce-lyon/",
    icon: Smartphone,
    color: "from-pink-500/5 to-pink-400/5"
  },
  {
    name: "Paiement Sécurisé",
    description: "Intégration de solutions de paiement sécurisées : Stripe, PayPal, paiement en plusieurs fois",
    href: "/services/integration-paiement-ecommerce-lyon/",
    icon: CreditCard,
    color: "from-red-500/5 to-red-400/5"
  },
  {
    name: "Marketplace",
    description: "Création de place de marché multi-vendeurs pour développer votre écosystème commercial",
    href: "/services/creation-marketplace-lyon/",
    icon: Users,
    color: "from-teal-500/5 to-teal-400/5"
  },
  {
    name: "Dropshipping",
    description: "Solution e-commerce sans stock avec automatisation des commandes et livraisons",
    href: "/services/dropshipping-lyon/",
    icon: Shield,
    color: "from-indigo-500/5 to-indigo-400/5"
  }
];

const SitesEcommerce = () => {
  return (
    <>
      <Helmet>
        <title>Création Site E-commerce WooCommerce Lyon | Boutique WordPress - VKBack</title>
        <meta 
          name="description" 
          content="Création de boutique en ligne WooCommerce à Lyon. Solution WordPress e-commerce clé en main avec paiement sécurisé, gestion stocks et livraisons. Devis gratuit." 
        />
        <meta name="keywords" content="création site e-commerce lyon, boutique en ligne lyon, woocommerce lyon, site marchand lyon, wordpress ecommerce" />
        <link rel="canonical" href="https://www.vkback.fr/creation-site-ecommerce-lyon" />
        
        <meta property="og:title" content="Création Site E-commerce WooCommerce Lyon | Boutique WordPress - VKBack" />
        <meta property="og:description" content="Création de boutique en ligne WooCommerce à Lyon. Solution WordPress e-commerce clé en main avec paiement sécurisé, gestion stocks et livraisons." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vkback.fr/creation-site-ecommerce-lyon" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Création Site E-commerce",
            "provider": {
              "@type": "Organization",
              "name": "VKBack",
              "url": "https://www.vkback.fr"
            },
            "areaServed": {
              "@type": "City",
              "name": "Lyon"
            },
            "offers": {
              "@type": "Offer",
              "price": "5000",
              "priceCurrency": "EUR"
            }
          })}
        </script>
      </Helmet>

      <ProgressBar />
      <Header />
      
      <main>
        <ServiceTemplate
          breadcrumb={[
            { label: "Agence Web Lyon", href: "/" },
            { label: "Création Site E-commerce Lyon" }
          ]}
          
          heroTitle="Création de Boutique E-commerce WooCommerce à Lyon"
          heroSubtitle="Développez votre activité en ligne avec une boutique WooCommerce sur WordPress performante. Solution e-commerce complète : catalogue produits, paiement sécurisé, gestion des stocks et livraisons."
          heroImage={heroSiteEcommerce}
          
          introduction={
            <div id="introduction" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Solutions E-commerce à Lyon</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed">
                  Spécialiste de la <strong>création de sites e-commerce à Lyon</strong>, nous concevons des boutiques en ligne performantes qui génèrent des ventes. 
                  Nous créons exclusivement des solutions <strong>WooCommerce sur WordPress</strong>, la plateforme e-commerce la plus populaire au monde, adaptée à votre activité et votre budget.
                </p>
                <p className="text-lg leading-relaxed">
                  De la mise en place du catalogue produits à l'intégration des moyens de paiement, en passant par la gestion des stocks et des livraisons : 
                  nous prenons en charge tous les aspects techniques pour que vous puissiez vous concentrer sur votre commerce.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-primary" />
                      Nos Solutions E-commerce
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Découvrez notre gamme complète de solutions e-commerce adaptées à votre activité commerciale à Lyon.
                    </p>
                  </div>
                  <Button asChild size="lg" className="btn-cta whitespace-nowrap">
                    <a href="/contact">
                      Demander un Devis Gratuit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>

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
                            <Badge variant="secondary" className="text-xs whitespace-nowrap py-1">
                              À partir de 5 000€
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
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
            title: "Pourquoi Investir dans un Site E-commerce ?",
            content: (
              <div id="pourquoi" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FadeInSection>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                            <ShoppingCart className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold">Vendre 24/7</h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Votre boutique est <strong>ouverte jour et nuit</strong> pour générer des ventes en continu, même pendant votre sommeil. Élargissez votre zone de chalandise au-delà de votre boutique physique.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={100}>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                            <TrendingUp className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold">Élargir sa Clientèle</h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Touchez de nouveaux clients au-delà de votre zone géographique et <strong>développez votre chiffre d'affaires</strong>. Vendez dans toute la France et même à l'international.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={200}>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                            <Smartphone className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold">Expérience Mobile</h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Plus de <strong>60% des achats en ligne</strong> se font sur mobile. Votre boutique sera parfaitement optimisée pour offrir une expérience d'achat fluide sur tous les écrans.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={300}>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                            <Shield className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold">Paiement Sécurisé</h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Rassurez vos clients avec des <strong>solutions de paiement certifiées</strong> : Stripe, PayPal, CB sécurisée, paiement en 3x/4x. Conformité PCI-DSS garantie.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                </div>
              </div>
            )
          }}
          
          expertise={{
            title: "Notre Processus de Création E-commerce",
            content: (
              <div id="processus" className="space-y-6">
                <div className="relative">
                  <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />
                  
                  <div className="space-y-8">
                    {[
                      {
                        step: "1",
                        title: "Analyse de Votre Activité",
                        description: "Étude de vos produits, cibles clients, concurrence et objectifs commerciaux pour définir la meilleure stratégie e-commerce.",
                        duration: "1 semaine"
                      },
                      {
                        step: "2",
                        title: "Configuration Catalogue",
                        description: "Mise en place de votre catalogue produits : catégories, fiches produits, variations (tailles, couleurs), stock et tarifs.",
                        duration: "2 semaines"
                      },
                      {
                        step: "3",
                        title: "Paiement & Livraison",
                        description: "Intégration des moyens de paiement sécurisés et configuration des modes de livraison (Colissimo, Chronopost, retrait...).",
                        duration: "1 semaine"
                      },
                      {
                        step: "4",
                        title: "Design & Expérience",
                        description: "Création d'une interface attractive et ergonomique, optimisée pour la conversion et le parcours d'achat mobile.",
                        duration: "3 semaines"
                      },
                      {
                        step: "5",
                        title: "Optimisation SEO",
                        description: "Référencement naturel de vos fiches produits et catégories pour générer du trafic qualifié depuis Google.",
                        duration: "1 semaine"
                      },
                      {
                        step: "6",
                        title: "Formation & Lancement",
                        description: "Formation complète à la gestion de votre boutique (commandes, stocks, produits) et accompagnement au lancement.",
                        duration: "Suivi continu"
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
                                <Badge variant="secondary" className="whitespace-nowrap">
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
              title: "Catalogue Produits",
              description: "Gestion illimitée de produits avec catégories, filtres, variations et gestion des stocks en temps réel"
            },
            {
              title: "Paiement Sécurisé",
              description: "Intégration Stripe, PayPal, CB 3D Secure, paiement en plusieurs fois et coupons de réduction"
            },
            {
              title: "Gestion Livraisons",
              description: "Configuration des modes de livraison : Colissimo, Chronopost, click & collect. Calcul automatique des frais"
            },
            {
              title: "Comptes Clients",
              description: "Espace client avec historique commandes, suivi livraison, wishlist et adresses enregistrées"
            },
            {
              title: "Statistiques Ventes",
              description: "Tableau de bord : CA, produits populaires, panier moyen, taux de conversion et comportement clients"
            },
            {
              title: "Responsive Mobile",
              description: "Design 100% adaptatif pour smartphones et tablettes. Expérience d'achat optimale sur tous les écrans"
            },
            {
              title: "SEO E-commerce",
              description: "Optimisation technique : URLs propres, balises structurées, rich snippets produits, sitemap XML"
            },
            {
              title: "Sécurité & RGPD",
              description: "Certificat SSL, conformité RGPD, sauvegardes automatiques et protection anti-fraude"
            }
          ]}
          
          pricing={[
            {
              name: "Starter",
              price: "À partir de 5 000€",
              features: [
                "Jusqu'à 50 produits",
                "Design sur-mesure responsive",
                "Paiement sécurisé (Stripe/PayPal)",
                "3 modes de livraison",
                "Comptes clients",
                "Formation 2h",
                "SEO de base",
                "Support 1 mois"
              ]
            },
            {
              name: "Business",
              price: "À partir de 8 500€",
              popular: true,
              features: [
                "Jusqu'à 200 produits",
                "Design premium personnalisé",
                "Paiement avancé (3x/4x sans frais)",
                "Livraisons illimitées",
                "Système de réservations",
                "Blog intégré",
                "Formation 4h",
                "SEO avancé",
                "Support 3 mois"
              ]
            },
            {
              name: "Entreprise",
              price: "Sur devis",
              features: [
                "Produits illimités",
                "Marketplace multi-vendeurs",
                "ERP/Comptabilité intégrés",
                "Développements spécifiques",
                "Multi-devises & multi-langues",
                "Application mobile",
                "Formation équipe",
                "SEO international",
                "Support prioritaire 12 mois"
              ]
            }
          ]}
          
          faq={[
            {
              question: "Pourquoi choisir WooCommerce pour ma boutique en ligne ?",
              answer: "WooCommerce est la solution e-commerce n°1 mondiale, idéale pour des boutiques jusqu'à 1000 produits. Elle offre une grande flexibilité, un excellent SEO grâce à WordPress, des coûts maîtrisés et une maintenance simplifiée. Parfait pour TPE/PME souhaitant vendre en ligne efficacement."
            },
            {
              question: "Quels moyens de paiement puis-je proposer ?",
              answer: "Nous intégrons les solutions les plus populaires : Stripe (CB, Apple Pay, Google Pay), PayPal, paiement en 3x/4x sans frais (Alma, Oney), virement bancaire et chèque. Toutes les transactions sont sécurisées et conformes aux normes PCI-DSS."
            },
            {
              question: "Comment gérer les livraisons et les frais de port ?",
              answer: "Nous configurons vos modes de livraison : Colissimo, Chronopost, Mondial Relay, transporteurs spécifiques, ou click & collect. Les frais de port peuvent être calculés automatiquement selon le poids, le montant du panier ou offerts à partir d'un certain montant."
            },
            {
              question: "Est-ce que je peux gérer mon stock de produits ?",
              answer: "Oui, WooCommerce inclut une gestion complète des stocks : quantités disponibles, alertes de rupture, produits en précommande, variations (tailles, couleurs), et synchronisation possible avec votre logiciel de gestion."
            },
            {
              question: "Mon site e-commerce sera-t-il bien référencé sur Google ?",
              answer: "Nous appliquons les meilleures pratiques SEO e-commerce : optimisation des fiches produits, URLs propres, rich snippets (prix, avis, stock), sitemap XML, optimisation des images. Nous pouvons aussi mettre en place une stratégie de contenu (blog, guides d'achat)."
            },
            {
              question: "Puis-je vendre à l'international ?",
              answer: "Oui, nous pouvons créer une boutique multilingue et multi-devises. Vous pourrez gérer différents catalogues par pays, adapter vos prix selon les devises, et configurer des modes de livraison internationaux spécifiques."
            },
            {
              question: "Comment gérer les retours et remboursements ?",
              answer: "Nous configurons vos politiques de retour et remboursement directement dans la boutique. Les clients peuvent faire leurs demandes depuis leur espace personnel, et vous gérez les remboursements depuis votre tableau de bord."
            },
            {
              question: "Quel est le délai pour lancer ma boutique ?",
              answer: "Comptez 6 à 10 semaines selon la complexité : 2 semaines pour le design et la structure, 2-3 semaines pour l'intégration des produits et fonctionnalités, puis 2 semaines pour les tests et optimisations."
            },
            {
              question: "Vais-je être formé à la gestion de ma boutique ?",
              answer: "Absolument ! Nous vous formons sur : l'ajout/modification de produits, la gestion des commandes et clients, le paramétrage des promotions et codes promo, les exports pour la comptabilité, et l'analyse des statistiques de vente."
            },
            {
              question: "Puis-je avoir un système d'avis clients sur mes produits ?",
              answer: "Oui, nous intégrons un système d'avis clients vérifié (notes et commentaires) sur vos fiches produits. Les avis améliorent votre taux de conversion et votre SEO grâce aux rich snippets (étoiles dans Google)."
            },
            {
              question: "Est-il possible de créer des codes promo et promotions ?",
              answer: "Oui, vous pourrez créer facilement : codes de réduction (%, montant fixe), promotions sur catégories ou produits, offres de livraison gratuite, bundles (achète 3 paie 2), et programmes de fidélité."
            },
            {
              question: "Mon site e-commerce sera-t-il sécurisé ?",
              answer: "Sécurité maximale garantie : certificat SSL (HTTPS), paiements certifiés PCI-DSS, protection anti-fraude, sauvegardes quotidiennes automatiques, et conformité RGPD. Nous installons aussi des protections contre les attaques."
            }
          ]}
          
          relatedServices={[
            {
              title: "SEO E-commerce",
              description: "Référencement naturel spécialisé pour générer du trafic qualifié",
              href: "/services/seo-ecommerce-lyon/",
              icon: <Zap className="h-12 w-12" />
            },
            {
              title: "Google Shopping",
              description: "Campagnes publicitaires pour promouvoir vos produits",
              href: "/services/campagnes-google-shopping-lyon/",
              icon: <Globe className="h-12 w-12" />
            },
            {
              title: "Maintenance E-commerce",
              description: "Support technique et optimisations pour votre boutique",
              href: "/maintenance-site-web-lyon",
              icon: <FileText className="h-12 w-12" />
            }
          ]}
        />
        
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

export default SitesEcommerce;

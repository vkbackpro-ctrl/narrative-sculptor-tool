import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Server, Shield, Zap, HardDrive, Globe, Lock, CloudCog, Gauge, ArrowRight, Sparkles } from 'lucide-react';
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
import heroHebergementWeb from "@/assets/hebergement-web-france-serveurs.jpg";

const hebergementSubServices = [
  {
    name: "Hébergement WordPress",
    description: "Hébergement optimisé spécialement pour WordPress",
    href: "/hebergement-wordpress-lyon",
    icon: Globe,
    color: "from-blue-500/10 to-blue-400/5",
    price: "15€/mois"
  },
  {
    name: "Hébergement E-commerce",
    description: "Infrastructure haute performance pour boutiques",
    href: "/hebergement-ecommerce-lyon",
    icon: Server,
    color: "from-green-500/10 to-green-400/5",
    price: "45€/mois"
  },
  {
    name: "Serveur Dédié",
    description: "Serveur privé avec ressources garanties",
    href: "/serveur-dedie-lyon",
    icon: HardDrive,
    color: "from-purple-500/10 to-purple-400/5",
    price: "149€/mois"
  },
  {
    name: "VPS Managé",
    description: "Serveur virtuel privé avec gestion complète",
    href: "/vps-manage-lyon",
    icon: CloudCog,
    color: "from-indigo-500/10 to-indigo-400/5",
    price: "39€/mois"
  },
  {
    name: "SSL & Sécurité",
    description: "Certificat HTTPS et protection avancée",
    href: "/certificat-ssl-securite-lyon",
    icon: Lock,
    color: "from-orange-500/10 to-orange-400/5",
    price: "90€"
  },
  {
    name: "Migration Hébergeur",
    description: "Transfert de site vers un hébergement performant",
    href: "/migration-hebergement-lyon",
    icon: Zap,
    color: "from-teal-500/10 to-teal-400/5",
    price: "190€"
  },
  {
    name: "CDN & Performances",
    description: "Accélération mondiale avec Content Delivery Network",
    href: "/cdn-acceleration-site-lyon",
    icon: Gauge,
    color: "from-pink-500/10 to-pink-400/5",
    price: "290€"
  },
  {
    name: "Infogérance Serveur",
    description: "Gestion technique complète de votre infrastructure",
    href: "/infogerance-serveur-lyon",
    icon: Shield,
    color: "from-amber-500/10 to-amber-400/5",
    price: "99€/mois"
  }
];

const HebergementWeb = () => {
  const features = [
    {
      title: "Serveurs en France",
      description: "Data centers à Paris et Lyon pour respect du RGPD et latence minimale."
    },
    {
      title: "99,9% de Disponibilité",
      description: "Infrastructure redondante et monitoring 24/7 pour garantir la disponibilité."
    },
    {
      title: "SSL Gratuit",
      description: "Certificat HTTPS Let's Encrypt inclus avec renouvellement automatique."
    },
    {
      title: "Sauvegardes Quotidiennes",
      description: "Backup journalier automatique avec conservation 30 jours et restauration en un clic."
    },
    {
      title: "Vitesse Optimisée",
      description: "SSD NVMe, LiteSpeed, cache serveur et PHP 8+ pour des performances maximales."
    },
    {
      title: "Support Expert",
      description: "Assistance technique réactive par des experts WordPress et serveurs."
    }
  ];

  const pricingOptions = [
    {
      name: "Hébergement Starter",
      price: "15€/mois",
      features: [
        "1 site WordPress",
        "10 Go SSD NVMe",
        "Trafic illimité",
        "SSL gratuit inclus",
        "Sauvegarde hebdo",
        "Support par email"
      ]
    },
    {
      name: "Hébergement Pro",
      price: "35€/mois",
      features: [
        "5 sites WordPress",
        "50 Go SSD NVMe",
        "Trafic illimité",
        "SSL & CDN inclus",
        "Sauvegarde quotidienne",
        "Support prioritaire"
      ],
      popular: true
    },
    {
      name: "VPS Managé",
      price: "99€/mois",
      features: [
        "Sites illimités",
        "200 Go SSD NVMe",
        "Ressources garanties",
        "Infogérance complète",
        "Backup temps réel",
        "Support 7j/7"
      ]
    }
  ];

  const faqs = [
    {
      question: "Quelle est la différence entre hébergement mutualisé et VPS ?",
      answer: "L'hébergement mutualisé partage les ressources serveur entre plusieurs sites (économique, adapté aux sites faible/moyen trafic). Le VPS vous attribue des ressources dédiées (CPU, RAM) pour des performances garanties et stables, idéal pour sites à fort trafic ou e-commerce exigeants."
    },
    {
      question: "Mon site sera-t-il hébergé en France ?",
      answer: "Oui, nous utilisons exclusivement des data centers en France (Paris, Lyon, Roubaix) pour garantir la conformité RGPD, réduire la latence pour vos visiteurs français et bénéficier d'un support en français. Vos données restent sur le territoire français."
    },
    {
      question: "Puis-je migrer mon site existant facilement ?",
      answer: "Absolument ! Nous gérons gratuitement la migration de votre site actuel vers notre hébergement : transfert des fichiers, base de données, configuration DNS et tests complets. Zéro temps d'arrêt pendant la migration et assistance complète."
    },
    {
      question: "Qu'est-ce qu'un certificat SSL et pourquoi en ai-je besoin ?",
      answer: "Le SSL (HTTPS) chiffre les données entre votre site et les visiteurs. C'est obligatoire pour : la confiance des visiteurs, le SEO Google (critère de ranking), les paiements en ligne et le RGPD. Nous l'installons gratuitement avec renouvellement automatique."
    },
    {
      question: "Que se passe-t-il si mon site dépasse les ressources de mon offre ?",
      answer: "Nous vous prévenons avant que cela impacte les performances. Vous pouvez facilement upgrader vers une offre supérieure en quelques clics. Pour les pics de trafic temporaires, nous avons des ressources élastiques qui absorbent automatiquement les surcharges."
    },
    {
      question: "L'hébergement e-commerce est-il vraiment différent ?",
      answer: "Oui, les boutiques en ligne nécessitent plus de ressources (catalogue, images, requêtes base de données) et des standards de sécurité renforcés (paiements, données clients). Notre hébergement e-commerce inclut : ressources CPU/RAM supérieures, cache avancé, SSL EV, firewall applicatif et conformité PCI-DSS."
    },
    {
      question: "Puis-je changer d'offre d'hébergement à tout moment ?",
      answer: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. L'upgrade est instantané. Le downgrade prend effet au prochain renouvellement. Nous vous guidons pour choisir l'offre adaptée à votre évolution."
    },
    {
      question: "Comment sont gérées les sauvegardes de mon site ?",
      answer: "Sauvegardes automatiques quotidiennes (plans Pro et VPS) avec conservation 30 jours. Stockage sur serveurs distants sécurisés. Restauration en un clic depuis votre espace client. Vous pouvez également télécharger vos backups à tout moment."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hébergement Web Lyon | Serveur WordPress - VKBack</title>
        <meta 
          name="description" 
          content="Hébergement web rapide et sécurisé à Lyon. Serveurs SSD en France, SSL gratuit, 99,9% disponibilité. Spécialisé WordPress et e-commerce dès 15€/mois." 
        />
        <meta name="keywords" content="hébergement web lyon, hébergement wordpress, serveur dédié, vps managé, hébergement france" />
        <link rel="canonical" href="https://vkback.com/hebergement-web-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quelle est la différence entre hébergement mutualisé et VPS ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "L'hébergement mutualisé partage les ressources serveur entre plusieurs sites (économique). Le VPS vous attribue des ressources dédiées pour des performances garanties, idéal pour sites à fort trafic."
                }
              },
              {
                "@type": "Question",
                "name": "Mon site sera-t-il hébergé en France ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, nous utilisons exclusivement des data centers en France (Paris, Lyon) pour garantir la conformité RGPD, réduire la latence et bénéficier d'un support en français."
                }
              },
              {
                "@type": "Question",
                "name": "Puis-je migrer mon site existant facilement ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolument ! Nous gérons gratuitement la migration de votre site actuel : transfert des fichiers, base de données, configuration DNS et tests complets. Zéro temps d'arrêt."
                }
              },
              {
                "@type": "Question",
                "name": "Qu'est-ce qu'un certificat SSL et pourquoi en ai-je besoin ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le SSL (HTTPS) chiffre les données entre votre site et les visiteurs. C'est obligatoire pour la confiance, le SEO Google, les paiements et le RGPD. Nous l'installons gratuitement."
                }
              }
            ]
          })}
        </script>
        
        <meta property="og:title" content="Hébergement Web Lyon | Serveur WordPress Haute Performance - VKBack" />
        <meta property="og:description" content="Hébergement web rapide et sécurisé à Lyon. Serveurs SSD en France, SSL gratuit, 99,9% disponibilité." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vkback.com/hebergement-web-lyon" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Hébergement Web",
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
            "description": "Services d'hébergement web haute performance en France pour WordPress et e-commerce",
            "priceRange": "15€ - 199€/mois",
            "keywords": "hébergement web Lyon, hébergement WordPress Villeurbanne, serveur dédié Lyon 3, VPS managé Rhône-Alpes, hébergement e-commerce Caluire, serveur France Écully"
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
          { label: "Hébergement Web Lyon" }
        ]}
        painPointHook={{
          question: "Votre site est lent, souvent en panne ou mal protégé ?",
          answer: "Un mauvais hébergement peut tout plomber. Changeons ça."
        }}
        heroTitle="Hébergement Web WordPress Lyon"
        heroSubtitle="Site qui rame ? Temps de chargement de 5+ secondes ? Hébergeur injoignable en cas de problème ? Nos serveurs SSD en France garantissent vitesse, sécurité et tranquillité d'esprit."
        heroImage={heroHebergementWeb}
        heroAlt="Hébergement web France serveurs haute performance - Infrastructure hosting WordPress Lyon sécurisé rapide 99.9% disponibilité"
        ctaPrimary={{ label: "Accélérer mon site", href: "/contact" }}
        ctaSecondary={{ label: "Comparer les offres", href: "#tarifs" }}
        introduction={
          <div id="introduction" className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hébergement Web Performant</h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold mb-4">L&apos;Infrastructure qui Fait la Différence</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Votre site mérite un <strong>hébergement rapide, sécurisé et fiable</strong>. Nos serveurs <strong>SSD NVMe en France</strong> (Lyon, Paris) garantissent des temps de chargement ultra-rapides et une disponibilité de 99,9%. Spécialisés <strong>WordPress et e-commerce</strong>, nous optimisons chaque aspect technique pour des performances maximales.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Du simple hébergement mutualisé au serveur dédié, nous proposons des solutions adaptées à votre trafic et vos besoins. SSL gratuit, sauvegardes automatiques, CDN et support expert WordPress inclus.
              </p>
            </div>

            {/* CTA enrichi */}
            <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-primary" />
                    Nos Solutions d&apos;Hébergement
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Découvrez notre gamme complète d&apos;hébergement web haute performance à Lyon.
                  </p>
                </div>
                <Button asChild size="lg" className="btn-cta whitespace-nowrap">
                  <Link to="/contact">
                    Accélérer mon site
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Grid des sous-services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {hebergementSubServices.map((service, index) => (
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
                            Dès {service.price}
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
          title: "Pourquoi Choisir Notre Hébergement ?",
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
                        <h3 className="text-xl font-semibold">Vitesse Maximale</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Serveurs <strong>SSD NVMe dernière génération</strong>, LiteSpeed Web Server, cache serveur et PHP 8.2 pour des temps de chargement de moins de 1 seconde. La vitesse impacte directement votre SEO et conversions.
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
                        <h3 className="text-xl font-semibold">Sécurité Renforcée</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Pare-feu applicatif, anti-DDoS, détection malware en temps réel et <strong>SSL gratuit inclus</strong>. Data centers certifiés ISO27001 en France pour conformité RGPD totale.
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>

                <FadeInSection delay={200}>
                  <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                          <Server className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Disponibilité Garantie</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        <strong>99,9% de uptime garanti</strong> avec infrastructure redondante, monitoring 24/7 et intervention automatique en cas de problème. Votre site accessible en permanence.
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>

                <FadeInSection delay={300}>
                  <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                          <HardDrive className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Sauvegardes Automatiques</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Backup quotidien automatique avec <strong>conservation 30 jours</strong> et stockage externe sécurisé. Restauration en un clic depuis votre espace client en cas de besoin.
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Infrastructure d'Hébergement",
          content: (
            <div id="processus" className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Data centers certifiés ISO27001 en France avec serveurs SSD NVMe, cache avancé et optimisations WordPress pour des performances maximales.
              </p>
            </div>
          )
        }}
        features={features}
        pricing={pricingOptions}
        faq={faqs}
        relatedServices={[
          {
            title: "Maintenance WordPress",
            description: "Mises à jour et sécurité",
            href: "/maintenance-support-wordpress-lyon",
            icon: <Server className="w-8 h-8" />
          },
          {
            title: "Migration Site",
            description: "Transfert vers hébergement performant",
            href: "/migration-site-internet-lyon",
            icon: <Zap className="w-8 h-8" />
          }
        ]}
      />

      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HebergementWeb;
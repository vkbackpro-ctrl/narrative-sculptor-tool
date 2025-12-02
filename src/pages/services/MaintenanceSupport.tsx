import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Wrench, Shield, RefreshCw, Database, Lock, Rocket, Clock, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';
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
import heroMaintenanceSupport from "@/assets/maintenance-support-wordpress-lyon.jpg";

const maintenanceSubServices = [
  {
    name: "Maintenance WordPress",
    description: "Mises à jour et sécurité WordPress",
    href: "/services/maintenance-wordpress-lyon",
    icon: Wrench,
    color: "from-blue-500/10 to-blue-400/5",
    price: "59€/mois"
  },
  {
    name: "Sauvegardes Automatiques",
    description: "Backup quotidien et restauration rapide",
    href: "/services/sauvegarde-site-wordpress-lyon",
    icon: Database,
    color: "from-green-500/10 to-green-400/5",
    price: "29€/mois"
  },
  {
    name: "Sécurité & Protection",
    description: "Protection anti-piratage et monitoring",
    href: "/services/securite-site-wordpress-lyon",
    icon: Shield,
    color: "from-purple-500/10 to-purple-400/5",
    price: "49€/mois"
  },
  {
    name: "Optimisation Performance",
    description: "Amélioration vitesse et Core Web Vitals",
    href: "/services/optimisation-performance-wordpress-lyon",
    icon: Rocket,
    color: "from-indigo-500/10 to-indigo-400/5",
    price: "399€"
  },
  {
    name: "Support Technique",
    description: "Assistance et résolution de bugs",
    href: "/services/support-technique-wordpress-lyon",
    icon: AlertTriangle,
    color: "from-orange-500/10 to-orange-400/5",
    price: "89€/h"
  },
  {
    name: "Mises à Jour Plugins",
    description: "Gestion des extensions et compatibilité",
    href: "/services/mise-a-jour-plugins-wordpress-lyon",
    icon: RefreshCw,
    color: "from-teal-500/10 to-teal-400/5",
    price: "39€/mois"
  },
  {
    name: "Certificat SSL",
    description: "Installation et renouvellement HTTPS",
    href: "/services/certificat-ssl-wordpress-lyon",
    icon: Lock,
    color: "from-pink-500/10 to-pink-400/5",
    price: "79€/an"
  },
  {
    name: "Infogérance WordPress",
    description: "Gestion complète déléguée de votre site",
    href: "/services/infogerance-wordpress-lyon",
    icon: Clock,
    color: "from-amber-500/10 to-amber-400/5",
    price: "299€/mois"
  }
];

const MaintenanceSupport = () => {
  const features = [
    {
      title: "Mises à Jour Régulières",
      description: "WordPress, thèmes et plugins mis à jour chaque semaine pour garantir sécurité et performances optimales."
    },
    {
      title: "Sauvegardes Quotidiennes",
      description: "Backup automatique journalier avec conservation 30 jours et restauration rapide en cas de problème."
    },
    {
      title: "Monitoring 24/7",
      description: "Surveillance permanente de votre site : disponibilité, temps de réponse et détection d'anomalies."
    },
    {
      title: "Sécurité Renforcée",
      description: "Protection anti-malware, pare-feu, détection d'intrusion et corrections de vulnérabilités."
    },
    {
      title: "Support Prioritaire",
      description: "Assistance technique réactive par email et téléphone avec résolution sous 24h ouvrées."
    },
    {
      title: "Rapports Mensuels",
      description: "Compte-rendu détaillé des actions réalisées, statistiques et recommandations d'amélioration."
    }
  ];

  const pricingOptions = [
    {
      name: "Maintenance Essentielle",
      price: "59€/mois",
      features: [
        "Mises à jour WordPress",
        "Sauvegardes hebdomadaires",
        "Monitoring quotidien",
        "Support par email",
        "Rapport mensuel",
        "1h d'assistance/mois"
      ]
    },
    {
      name: "Maintenance Pro",
      price: "129€/mois",
      features: [
        "Tout Essentielle +",
        "Sauvegardes quotidiennes",
        "Sécurité avancée",
        "Support prioritaire",
        "Optimisation mensuelle",
        "3h d'assistance/mois"
      ],
      popular: true
    },
    {
      name: "Infogérance Premium",
      price: "299€/mois",
      features: [
        "Tout Pro +",
        "Monitoring 24/7",
        "Support téléphonique",
        "Évolutions fonctionnelles",
        "Consultant dédié",
        "10h d'assistance/mois"
      ]
    }
  ];

  const faqs = [
    {
      question: "Pourquoi la maintenance WordPress est-elle importante ?",
      answer: "Sans maintenance régulière, votre site WordPress devient vulnérable aux piratages, bugs et lenteurs. 70% des sites WordPress piratés utilisaient des versions obsolètes. La maintenance prévient ces risques et assure performances optimales et sécurité renforcée."
    },
    {
      question: "Que se passe-t-il si mon site tombe en panne ?",
      answer: "Nous intervenons rapidement pour diagnostiquer et résoudre le problème. Grâce à nos sauvegardes quotidiennes, nous pouvons restaurer votre site en quelques minutes. Avec le plan Pro et Premium, vous bénéficiez d'une intervention prioritaire."
    },
    {
      question: "Les mises à jour peuvent-elles casser mon site ?",
      answer: "C'est un risque réel, c'est pourquoi nous effectuons les mises à jour dans un environnement de test avant de les appliquer sur votre site en production. Si un problème survient, nous restaurons immédiatement depuis la sauvegarde."
    },
    {
      question: "Puis-je résilier mon contrat de maintenance ?",
      answer: "Oui, nos contrats sont sans engagement. Vous pouvez résilier à tout moment avec un préavis de 30 jours. Nous vous remettons une sauvegarde complète de votre site lors de votre départ."
    },
    {
      question: "Que comprend l'assistance technique ?",
      answer: "Résolution de bugs, aide à l'utilisation de WordPress, modifications mineures de contenu, conseil sur les bonnes pratiques et assistance pour vos questions. Les développements importants sont facturés en sus selon notre tarif horaire."
    },
    {
      question: "Comment se déroule la prise en charge initiale ?",
      answer: "Nous réalisons un audit complet de votre site existant, installons nos outils de monitoring et sauvegarde, puis effectuons les mises à jour nécessaires. La mise en place prend 48h et vous recevez un rapport d'état initial."
    },
    {
      question: "Gérez-vous l'hébergement également ?",
      answer: "Nous assurons la maintenance applicative WordPress. L'hébergement reste chez votre hébergeur actuel ou nous pouvons recommander et gérer la migration vers un hébergeur performant. Nous proposons également des solutions d'infogérance complète."
    },
    {
      question: "Les sauvegardes sont-elles stockées où ?",
      answer: "Vos sauvegardes sont stockées sur des serveurs sécurisés en France (OVH, AWS Europe) avec chiffrement des données. Vous pouvez télécharger vos sauvegardes à tout moment depuis votre espace client."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Maintenance WordPress Lyon | Support Web - VKBack</title>
        <meta 
          name="description" 
          content="Maintenance WordPress à Lyon : mises à jour, sauvegardes, sécurité et support technique. Contrats sans engagement dès 59€/mois. Monitoring 24/7 et intervention rapide." 
        />
        <meta name="keywords" content="maintenance wordpress lyon, support wordpress, infogérance wordpress, sauvegarde site web, sécurité wordpress lyon" />
        <link rel="canonical" href="https://vkback.com/maintenance-support-wordpress-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Pourquoi la maintenance WordPress est-elle importante ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sans maintenance régulière, votre site WordPress devient vulnérable aux piratages, bugs et lenteurs. 70% des sites WordPress piratés utilisaient des versions obsolètes. La maintenance prévient ces risques."
                }
              },
              {
                "@type": "Question",
                "name": "Que se passe-t-il si mon site tombe en panne ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous intervenons rapidement pour diagnostiquer et résoudre le problème. Grâce à nos sauvegardes quotidiennes, nous pouvons restaurer votre site en quelques minutes."
                }
              },
              {
                "@type": "Question",
                "name": "Les mises à jour peuvent-elles casser mon site ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "C'est un risque réel, c'est pourquoi nous effectuons les mises à jour dans un environnement de test avant de les appliquer en production. Si un problème survient, nous restaurons immédiatement."
                }
              },
              {
                "@type": "Question",
                "name": "Puis-je résilier mon contrat de maintenance ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, nos contrats sont sans engagement. Vous pouvez résilier à tout moment avec un préavis de 30 jours. Nous vous remettons une sauvegarde complète de votre site."
                }
              }
            ]
          })}
        </script>
        
        <meta property="og:title" content="Maintenance WordPress Lyon | Support & Infogérance Site Web - VKBack" />
        <meta property="og:description" content="Maintenance WordPress à Lyon : mises à jour, sauvegardes, sécurité et support technique. Contrats sans engagement dès 59€/mois." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vkback.com/maintenance-support-wordpress-lyon" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Maintenance WordPress",
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
            "description": "Services de maintenance, support et infogérance WordPress à Lyon",
            "priceRange": "59€ - 299€/mois",
            "keywords": "maintenance WordPress Lyon, support WordPress Villeurbanne, infogérance site web Lyon 3, sécurité WordPress Rhône-Alpes, sauvegarde site Caluire, mise à jour WordPress Écully"
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
          { label: "Maintenance & Support WordPress Lyon" }
        ]}
        painPointHook={{
          question: "Votre site WordPress est lent, bugué ou a déjà été piraté ?",
          answer: "Trop de sites souffrent par manque de maintenance. Le vôtre mérite mieux."
        }}
        heroTitle="Maintenance & Support WordPress Lyon"
        heroSubtitle="Mises à jour jamais faites ? Peur de tout casser ? Site déjà planté ou piraté ? Nous prenons soin de votre WordPress pour que vous puissiez vous concentrer sur votre métier."
        heroImage={heroMaintenanceSupport}
        heroAlt="Maintenance support WordPress Lyon - Sécurité mises à jour sauvegarde site web infogérance technique professionnelle"
        ctaPrimary={{ label: "Sécuriser mon site", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos forfaits", href: "#tarifs" }}
        introduction={
          <div id="introduction" className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Maintenance WordPress Professionnelle</h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Votre Site WordPress Entre de Bonnes Mains</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Un site WordPress nécessite une <strong>maintenance régulière</strong> pour rester sécurisé, performant et à jour. À Lyon, <strong>VKBack</strong> assure la maintenance complète de votre site : mises à jour, sauvegardes, sécurité, optimisation et support technique. Concentrez-vous sur votre activité, nous veillons sur votre site.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nos contrats de maintenance <strong>sans engagement</strong> incluent monitoring 24/7, sauvegardes automatiques et intervention rapide en cas de problème. Protégez votre investissement digital avec un service professionnel.
              </p>
            </div>

            {/* CTA enrichi */}
            <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-primary" />
                    Nos Services de Maintenance
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Découvrez notre gamme complète de services de maintenance et support WordPress à Lyon.
                  </p>
                </div>
                <Button asChild size="lg" className="btn-cta whitespace-nowrap">
                  <Link to="/contact">
                    Sécuriser mon site
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Grid des sous-services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {maintenanceSubServices.map((service, index) => (
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
          title: "Pourquoi Maintenir Votre Site WordPress ?",
          content: (
            <div id="pourquoi" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FadeInSection>
                  <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                          <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Sécurité Maximale</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        <strong>70% des sites WordPress piratés</strong> utilisaient des versions obsolètes. Les mises à jour régulières corrigent les failles de sécurité et protègent votre site contre les attaques malveillantes.
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>

                <FadeInSection delay={100}>
                  <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                          <Rocket className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Performances Optimales</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Un site mal entretenu accumule fichiers inutiles et base de données saturée. <strong>L'optimisation régulière maintient la vitesse de chargement</strong> et améliore l'expérience utilisateur.
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>

                <FadeInSection delay={200}>
                  <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                          <Database className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Protection des Données</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Les sauvegardes automatiques quotidiennes garantissent que <strong>vos données sont protégées</strong>. En cas de crash serveur ou erreur, restauration immédiate de votre site.
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>

                <FadeInSection delay={300}>
                  <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Gain de Temps</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Déléguer la maintenance vous libère du temps pour vous concentrer sur votre cœur de métier. <strong>Notre équipe gère tous les aspects techniques</strong> de votre site WordPress.
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre Processus de Maintenance",
          content: (
            <div id="processus" className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Maintenance proactive avec surveillance 24/7 et intervention rapide pour garantir la sécurité et les performances de votre site WordPress.
              </p>
            </div>
          )
        }}
        features={features}
        pricing={pricingOptions}
        faq={faqs}
        relatedServices={[
          {
            title: "Création Sites WordPress",
            description: "Nouveau site professionnel optimisé",
            href: "/creation-site-internet-lyon",
            icon: <Wrench className="w-8 h-8" />
          },
          {
            title: "Hébergement Web",
            description: "Serveurs performants en France",
            href: "/hebergement-web-lyon",
            icon: <Shield className="w-8 h-8" />
          }
        ]}
      />

      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default MaintenanceSupport;
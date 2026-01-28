import { Helmet } from "react-helmet-async";
import SchemaOrg from "@/components/SchemaOrg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Award, 
  MapPin, 
  Users, 
  Target, 
  Heart, 
  Shield, 
  TrendingUp, 
  Star,
  Phone,
  Mail,
  Calendar,
  CheckCircle2,
  Lightbulb,
  Zap,
  Code2,
  Building2,
  GraduationCap,
  Network
} from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import Breadcrumb from "@/components/Breadcrumb";
import heroImage from "@/assets/agence-web-lyon-equipe-reunion.jpg";
import marcPhoto from "@/assets/team-member-1.png";
import florianPhoto from "@/assets/team-member-2.png";
import ExperienceBadges from "@/components/ExperienceBadges";
import TimelineHistory from "@/components/TimelineHistory";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Performance",
      description: "Chaque site que nous créons est optimisé pour la vitesse, le SEO et les conversions. Votre réussite est notre priorité."
    },
    {
      icon: Heart,
      title: "Proximité",
      description: "Basés à Lyon, nous privilégions les rendez-vous en présentiel et une relation de confiance avec nos clients."
    },
    {
      icon: Shield,
      title: "Transparence",
      description: "Des tarifs clairs, pas de surprises. Nous communiquons ouvertement sur chaque étape de votre projet."
    },
    {
      icon: TrendingUp,
      title: "Résultats",
      description: "Notre objectif : transformer votre site en un outil de génération de leads et de croissance pour votre entreprise."
    }
  ];

  const expertise = [
    {
      icon: Code2,
      title: "WordPress Exclusif",
      description: "Spécialistes WordPress avec 14 ans d'expérience, nous maîtrisons cette plateforme sur le bout des doigts."
    },
    {
      icon: Star,
      title: "SEO & Visibilité",
      description: "Experts en référencement naturel, nous positionnons votre site en première page de Google."
    },
    {
      icon: Zap,
      title: "Performance Web",
      description: "Sites ultra-rapides, optimisés pour le mobile et conformes aux dernières normes Google."
    },
    {
      icon: Lightbulb,
      title: "Conseil Personnalisé",
      description: "Accompagnement sur-mesure adapté à vos besoins spécifiques et à votre budget."
    }
  ];

  const stats = [
    { value: "14", label: "Ans d'expérience" },
    { value: "100+", label: "Sites créés" },
    { value: "4.9/5", label: "Note Google" },
    { value: "95%", label: "Clients satisfaits" }
  ];

  const certifications = [
    "WordPress Certified",
    "Google Ads Partner",
    "SEO Expert Certified",
    "RGPD Compliant",
    "Hébergement France"
  ];

  return (
    <>
      <Helmet>
        <title>À Propos de VKBack | Agence Web Lyon - Notre Histoire</title>
        <meta 
          name="description" 
          content="Découvrez VKBack, agence web WordPress à Lyon. Équipe de 2 experts avec 14 ans d'expérience, 100+ sites créés, spécialistes SEO et création sites WordPress." 
        />
        <meta property="og:title" content="À Propos de VKBack | Agence Web Lyon - Notre Histoire" />
        <meta property="og:description" content="Découvrez VKBack, agence web WordPress à Lyon. Équipe de 2 experts avec 14 ans d'expérience, 100+ sites créés, spécialistes SEO et création sites WordPress." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vkback.com/a-propos/" />
      </Helmet>

      <SchemaOrg 
        type="about"
        pageTitle="À Propos de VKBack | Agence Web Lyon - Notre Histoire"
        pageDescription="Découvrez VKBack, agence web WordPress à Lyon. Équipe de 2 experts avec 14 ans d'expérience, 100+ sites créés."
        pageUrl="https://vkback.com/a-propos/"
        breadcrumbs={[
          { name: "Accueil", url: "https://vkback.com/" },
          { name: "À propos", url: "https://vkback.com/a-propos/" }
        ]}
      />

      <div className="min-h-screen flex flex-col bg-background">
        <ProgressBar />
        <Header />
        <ScrollToTop />
        <StickyCtaButton />

        <main className="flex-grow">
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { label: "Agence Web Lyon", href: "/" },
              { label: "À propos" }
            ]}
          />

          {/* Hero Section */}
          <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <ExperienceBadges variant="horizontal" size="md" />
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    L'Agence Web WordPress à Lyon qui transforme vos ambitions en réalité digitale
                  </h1>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    VKBack est une agence web lyonnaise spécialisée en création de sites WordPress, référencement SEO et développement e-commerce. 
                    Fondée en 2021 par Marc et Florian, forts de 14 ans d'expérience dans la création web, 
                    nous accompagnons les TPE et PME dans leur transformation digitale avec une approche personnalisée et des résultats concrets.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button asChild size="lg" className="gap-2">
                      <Link to="/contact">
                        <Phone className="w-4 h-4" />
                        04 11 78 91 13
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="gap-2">
                      <Link to="/realisations/">
                        Nos réalisations
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <img 
                    src={heroImage} 
                    alt="Équipe agence web WordPress Lyon VKBack en réunion créative"
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                    <div className="text-3xl font-bold">14</div>
                    <div className="text-sm">Années d'expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-secondary">{stat.value}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Notre Histoire */}
          <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto mb-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Histoire</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    VKBack a été officiellement créée en <strong className="text-foreground">2021</strong> à Lyon, 
                    mais notre histoire a commencé bien avant...
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <Card className="border-2 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-base text-foreground leading-relaxed">
                            Marc et Florian, nés en 1988, découvrent leur <strong>passion pour le web dès leurs 23 ans</strong>.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 bg-gradient-to-br from-accent/5 to-transparent hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-base text-foreground leading-relaxed">
                            En <strong>2011</strong>, premiers sites pour clients locaux puis intégration dans des <strong>agences web prestigieuses</strong>.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 bg-gradient-to-br from-secondary/5 to-transparent hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-base text-foreground leading-relaxed">
                            Parallèlement : <strong>sites d'affiliation</strong> personnels et missions <strong>freelance</strong> (WordPress, SEO, Google Ads).
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-base text-foreground leading-relaxed">
                            Triple expérience <strong>(agence + projets perso + freelance)</strong> = <strong>14 ans d'expertise terrain unique</strong>.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-8">
                  <Card className="border-2 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 inline-block">
                    <CardContent className="p-6">
                      <p className="text-lg text-foreground font-medium">
                        🚀 En <strong className="text-primary">2021</strong>, fondation de VKBack : 
                        une agence web de proximité à Lyon alliant <strong>expertise technique pointue</strong> et <strong>accompagnement humain</strong>.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <TimelineHistory />

              {/* Section Pourquoi VKBack */}
              <div className="mt-16 max-w-4xl mx-auto">
                <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-8 md:p-12">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Pourquoi avoir créé VKBack en 2021 ?
                      </h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Après 10 ans d'expérience, Marc et Florian constatent un besoin sur le marché lyonnais.
                      </p>
                      <p>
                        Les TPE et PME cherchaient une agence WordPress de <strong className="text-foreground">proximité</strong>, combinant expertise technique et relation humaine authentique.
                      </p>
                      <p>
                        Trop d'agences proposaient des solutions génériques avec peu de suivi.
                      </p>
                      <p>
                        VKBack est née pour faire différemment : <strong className="text-foreground">expertise WordPress exclusive</strong>, accompagnement personnalisé et présence locale à Lyon.
                      </p>
                      <p>
                        Aujourd'hui, <strong className="text-foreground">4 ans après</strong> : 200+ sites créés, 4.9/5 sur Google, et des clients satisfaits qui nous recommandent.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Section Expertise Terrain */}
          <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Une Expertise Terrain Éprouvée</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Nous ne vendons que ce que nous maîtrisons personnellement. Chaque service proposé est une technique que nous avons testée, 
                  optimisée et validée sur nos propres projets.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Expérience Agence</h3>
                        <p className="text-sm text-muted-foreground">
                          Des années dans des <strong>agences prestigieuses</strong>, 
                          gestion de <strong>centaines de projets clients</strong> variés, 
                          maîtrise des process professionnels et des standards de qualité les plus exigeants.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/20 rounded-xl flex-shrink-0">
                        <Users className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Missions Freelance</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Depuis 2011</strong>, nous travaillons également en <strong>freelance</strong> pour de nombreux clients : 
                          création de sites WordPress, SEO, Google Ads, maintenance. 
                          Une double activité qui nourrit notre expertise au quotidien.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/20 rounded-xl flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Projets d'Affiliation</h3>
                        <p className="text-sm text-muted-foreground">
                          Création et gestion de nos <strong>propres sites d'affiliation rentables</strong>. 
                          Nous testons et validons toutes les <strong>techniques SEO, conversion et monétisation</strong> 
                          avant de les proposer à nos clients.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/20 rounded-xl flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Maîtrise Complète</h3>
                        <p className="text-sm text-muted-foreground">
                          <strong>Nous utilisons nous-mêmes</strong> chaque service que nous vendons : 
                          SEO, Google Ads, WooCommerce, maintenance, hébergement. 
                          Notre expertise est <strong>réelle et vérifiable</strong>.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Formation Continue</h3>
                        <p className="text-sm text-muted-foreground">
                          Nous nous formons en permanence via des <strong>formations gratuites et payantes</strong> : 
                          certifications professionnelles, cours premium, webinaires, tutoriels. 
                          Rester à jour est essentiel dans notre métier en constante évolution.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/20 rounded-xl flex-shrink-0">
                        <Network className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Communautés Actives</h3>
                        <p className="text-sm text-muted-foreground">
                          Membres actifs de <strong>nombreuses communautés WordPress, SEO et web marketing</strong>. 
                          Échanges réguliers avec d'autres experts, veille permanente sur les dernières tendances et bonnes pratiques du secteur.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 max-w-3xl mx-auto">
                <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-8">
                    <p className="text-center text-muted-foreground leading-relaxed">
                      <strong className="text-foreground text-lg">Notre différence ?</strong><br />
                      Nous ne sommes pas de simples prestataires. Nous sommes des <strong className="text-foreground">praticiens actifs</strong> 
                      qui appliquent quotidiennement les mêmes techniques sur nos propres projets. 
                      Quand nous vous conseillons une stratégie SEO ou une optimisation de conversion, 
                      c'est parce que <strong className="text-foreground">nous l'avons testée et qu'elle fonctionne</strong>.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Notre Équipe */}
          <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">L'Équipe VKBack</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Une équipe complémentaire de 2 experts passionnés, avec 28 ans d'expérience cumulée dans le web et le digital.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-32 h-32 mx-auto mb-4">
                      <img 
                        src={marcPhoto} 
                        alt="Marc D. - Co-fondateur et développeur WordPress VKBack Lyon"
                        className="w-full h-full object-cover rounded-full border-4 border-primary/20"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Marc D.</h3>
                      <p className="text-primary font-medium mb-3">Co-fondateur & Développeur WordPress</p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">14 ans d'expérience</strong> en développement web. Expert WordPress et WooCommerce, Marc supervise la réalisation technique de tous les projets et garantit la qualité du code.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center pt-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">WordPress</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">WooCommerce</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">PHP</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">React</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-32 h-32 mx-auto mb-4">
                      <img 
                        src={florianPhoto} 
                        alt="Florian C. - Co-fondateur et expert SEO VKBack Lyon"
                        className="w-full h-full object-cover rounded-full border-4 border-primary/20"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Florian C.</h3>
                      <p className="text-primary font-medium mb-3">Co-fondateur & Expert SEO</p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">14 ans d'expérience</strong> en référencement et gestion de projet. Florian pilote la stratégie SEO de l'agence et accompagne les clients dans leur croissance digitale.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center pt-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">SEO</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Google Ads</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Analytics</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">UX</span>
                    </div>
                    <div className="pt-3">
                      <a 
                        href="https://florianconsultantseosealyon.fr/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline font-medium"
                      >
                        Florian Consultant SEO SEA Lyon
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>
          </section>

          {/* Nos Valeurs */}
          <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos Valeurs</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Les principes qui guident notre travail et notre relation avec nos clients au quotidien.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value) => (
                  <Card key={value.title} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="p-6 space-y-4">
                      <div className="p-3 bg-primary/10 rounded-xl w-fit">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Notre Expertise */}
          <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Expertise</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Des compétences techniques pointues au service de votre réussite digitale.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {expertise.map((item) => (
                  <Card key={item.title} className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Certifications & Garanties</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Des certifications qui attestent de notre expertise et de notre engagement qualité.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {certifications.map((cert) => (
                  <Card key={cert} className="border-2">
                    <CardContent className="p-6 text-center">
                      <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="font-semibold text-sm">{cert}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Zone d'Intervention */}
          <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Zone d'Intervention</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Basés à Lyon, nous intervenons dans toute la métropole lyonnaise et la région Rhône-Alpes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Lyon et ses arrondissements</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      "Lyon 1er - Presqu'île",
                      "Lyon 2e - Bellecour",
                      "Lyon 3e - Part-Dieu",
                      "Lyon 4e - Croix-Rousse",
                      "Lyon 5e - Vieux Lyon",
                      "Lyon 6e - Tête d'Or",
                      "Lyon 7e - Gerland",
                      "Lyon 8e - Monplaisir",
                      "Lyon 9e - Vaise"
                    ].map((zone) => (
                      <div key={zone} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{zone}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-3">Métropole de Lyon</h3>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      "Villeurbanne",
                      "Caluire-et-Cuire",
                      "Bron",
                      "Vénissieux",
                      "Écully",
                      "Oullins"
                    ].map((ville) => (
                      <div key={ville} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{ville}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm font-medium">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Et toute la région Rhône-Alpes
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89076.99376181398!2d4.752724385706214!3d45.7580408541739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d15d22f665fd7f%3A0xd1f3a085a22ddef9!2sVK%20Back%20-%20Agence%20WordPress%20Lyon%20%7C%20Cr%C3%A9ation%20Sites%20Internet%20%26%20SEO!5e0!3m2!1sfr!2sfr!4v1762951865445!5m2!1sfr!2sfr" 
                    width="100%" 
                    height="450" 
                    className="border-0 rounded-xl shadow-lg"
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VK Back - Agence WordPress Lyon sur Google Maps"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Prêt à lancer votre projet web ?
              </h2>
              <p className="text-lg opacity-90">
                Parlons de votre projet autour d'un café. Rencontrons-nous à Lyon pour discuter de vos objectifs et vous proposer la meilleure solution digitale.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button asChild size="lg" variant="secondary" className="gap-2">
                  <Link to="/contact">
                    <Mail className="w-4 h-4" />
                    Nous contacter
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2">
                  <a href="tel:0411789113">
                    <Phone className="w-4 h-4" />
                    04 11 78 91 13
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;

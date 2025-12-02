import { Helmet } from "react-helmet";
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
  Code2
} from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import Breadcrumb from "@/components/Breadcrumb";
import heroImage from "@/assets/agence-web-lyon-equipe-reunion.jpg";
import teamMeeting from "@/assets/team-meeting-lyon.jpg";

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
      description: "Spécialistes WordPress depuis plus de 10 ans, nous maîtrisons cette plateforme sur le bout des doigts."
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
    { value: "10+", label: "Ans d'expérience" },
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
        <title>À propos - VKBack Agence Web WordPress Lyon | Notre Histoire</title>
        <meta 
          name="description" 
          content="Découvrez VKBack, agence web WordPress à Lyon depuis 2014. Équipe de 2 experts, 100+ sites créés, spécialistes SEO et création sites WordPress." 
        />
        <meta property="og:title" content="À propos - VKBack Agence Web WordPress Lyon | Notre Histoire" />
        <meta property="og:description" content="Découvrez VKBack, agence web WordPress à Lyon depuis 2014. Équipe de 2 experts, 100+ sites créés, spécialistes SEO et création sites WordPress." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vkback.fr/a-propos/" />
      </Helmet>

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
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                    <Award className="w-4 h-4" />
                    <span>Agence Web WordPress depuis 2014</span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    L'Agence Web WordPress à Lyon qui transforme vos ambitions en réalité digitale
                  </h1>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    VKBack est une agence web lyonnaise spécialisée en création de sites WordPress, référencement SEO et développement e-commerce. Depuis plus de 10 ans, nous accompagnons les TPE et PME dans leur transformation digitale.
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
                    <div className="text-3xl font-bold">10+</div>
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
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Histoire</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fondée en 2014 à Lyon, VKBack est née de la passion commune de Marc et Florian pour le web et l'entrepreneuriat digital. 
                  Notre mission : créer des sites WordPress performants qui génèrent des résultats concrets pour nos clients.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <Card className="border-2">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">2014 - Les Débuts</h3>
                        <p className="text-muted-foreground">
                          Création de VKBack à Lyon avec une vision claire : proposer des sites WordPress de qualité professionnelle aux TPE et PME lyonnaises.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">2017 - Spécialisation SEO</h3>
                        <p className="text-muted-foreground">
                          Développement de notre expertise en référencement naturel. Florian devient consultant SEO certifié et prend en charge cette branche stratégique.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Code2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">2020 - WordPress Exclusif</h3>
                        <p className="text-muted-foreground">
                          Décision stratégique de nous concentrer exclusivement sur WordPress et WooCommerce pour offrir une expertise inégalée sur ces plateformes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">2025 - Reconnaissance</h3>
                        <p className="text-muted-foreground">
                          Plus de 100 sites créés, une note de 4.9/5 sur Google, et une équipe soudée dédiée à la réussite de nos clients lyonnais.
                        </p>
                      </div>
                    </div>
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
                  Une équipe complémentaire de 2 experts passionnés, avec plus de 20 ans d'expérience cumulée dans le web et le digital.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Marc D.</h3>
                      <p className="text-primary font-medium mb-3">Co-fondateur & Développeur WordPress</p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">12 ans d'expérience</strong> en développement web. Expert WordPress et WooCommerce, Marc supervise la réalisation technique de tous les projets et garantit la qualité du code.
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
                    <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Florian C.</h3>
                      <p className="text-primary font-medium mb-3">Co-fondateur & Expert SEO</p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">10 ans d'expérience</strong> en référencement et gestion de projet. Florian pilote la stratégie SEO de l'agence et accompagne les clients dans leur croissance digitale.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center pt-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">SEO</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Google Ads</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Analytics</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">UX</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 text-center">
                <img 
                  src={teamMeeting} 
                  alt="Équipe VKBack agence web Lyon lors d'une réunion de travail"
                  className="rounded-xl shadow-xl max-w-3xl mx-auto w-full h-auto"
                />
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

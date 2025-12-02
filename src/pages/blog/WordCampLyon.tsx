import { Helmet } from "react-helmet";
import { Calendar, User, ArrowLeft, ArrowRight, MapPin, Clock, Users, Cpu, Brain, Bot, Globe, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import FadeInSection from "@/components/FadeInSection";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import blogImage from "@/assets/blog-wordcamp-lyon.jpg";

const WordCampLyon = () => {
  const infosPratiques = [
    { label: "Dates", value: "16 et 17 Septembre 2026", icon: Calendar },
    { label: "Lieu", value: "Cité Internationale de Lyon", icon: MapPin },
    { label: "Visiteurs attendus", value: "10 000+", icon: Users },
    { label: "Exposants", value: "400+", icon: Globe },
  ];

  const thematiques = [
    {
      titre: "Intelligence Artificielle",
      description: "IA générative, LLMs, automatisation intelligente, éthique de l'IA",
      icon: Brain,
    },
    {
      titre: "Internet des Objets (IoT)",
      description: "Capteurs connectés, smart cities, industrie 4.0, edge computing",
      icon: Cpu,
    },
    {
      titre: "Robotique & Automatisation",
      description: "Cobots, automatisation industrielle, robotique de service",
      icon: Bot,
    },
    {
      titre: "Réalité Mixte (XR)",
      description: "Réalité virtuelle, augmentée, métavers industriel, formation immersive",
      icon: Globe,
    },
  ];

  const pourquoiYAller = [
    {
      raison: "Veille technologique",
      description: "Découvrez les tendances qui façonneront le web et le digital dans les 2-3 prochaines années.",
    },
    {
      raison: "Networking qualifié",
      description: "Rencontrez des décideurs, des experts techniques et des partenaires potentiels.",
    },
    {
      raison: "Inspiration concrète",
      description: "Des cas d'usage réels et des retours d'expérience de grandes entreprises et startups.",
    },
    {
      raison: "Formation continue",
      description: "Ateliers pratiques et conférences pour monter en compétence sur les nouvelles technologies.",
    },
  ];

  const editionsPrecedentes = [
    { annee: "2025", visiteurs: "9 500", exposants: "380", speakers: "210" },
    { annee: "2024", visiteurs: "8 800", exposants: "350", speakers: "190" },
    { annee: "2023", visiteurs: "8 200", exposants: "320", speakers: "180" },
  ];

  return (
    <>
      <Helmet>
        <title>SIDO Lyon 2026 : Salon IoT, IA et Robotique | VKBack</title>
        <meta 
          name="description" 
          content="SIDO Lyon 2026, le plus grand salon européen dédié à l'IoT, l'IA et la robotique. 16-17 septembre à la Cité Internationale. Programme et informations pratiques." 
        />
        <link rel="canonical" href="https://vkback.com/blog/sido-lyon-2026" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Blog", href: "/blog" },
          { label: "SIDO Lyon 2026" }
        ]} 
      />

      <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-8">
              <Button asChild variant="ghost" className="mb-6">
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour au blog
                </Link>
              </Button>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge>Événement</Badge>
                <Badge variant="outline">Lyon</Badge>
                <Badge variant="outline">2026</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                SIDO Lyon 2026 : Le Rendez-vous Européen de l'IoT, l'IA et la Robotique
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Marc D.
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  2 Décembre 2025
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  6 min de lecture
                </span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <img 
              src={blogImage} 
              alt="SIDO Lyon 2026 - Salon international IoT, Intelligence Artificielle et Robotique à la Cité Internationale"
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />
          </FadeInSection>

          {/* Infos pratiques */}
          <FadeInSection delay={150}>
            <Card className="mb-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6 text-center">Informations Pratiques</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {infosPratiques.map((info, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-bold">{info.value}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Button asChild>
                    <a href="https://www.sido-event.com/" target="_blank" rel="noopener noreferrer">
                      <Ticket className="w-4 h-4 mr-2" />
                      Site officiel SIDO
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>

          <div className="prose prose-lg max-w-none">
            <FadeInSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                Le <strong>SIDO (Showroom de l'Intelligence des Objets)</strong> revient pour sa 12ème édition les 16 et 17 septembre 2026 à Lyon. Plus grand salon européen B2B dédié à la convergence IoT, IA, XR et Robotique, cet événement incontournable rassemble chaque année plus de 10 000 professionnels.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Qu'est-ce que le SIDO ?</h2>
              
              <p className="mb-4">
                Créé en 2015, le SIDO est devenu en quelques années <strong>le rendez-vous européen de référence</strong> pour les professionnels des technologies connectées et de l'intelligence artificielle. L'événement se déroule chaque année à la <strong>Cité Internationale de Lyon</strong>, un lieu emblématique au bord du Rhône.
              </p>

              <p className="mb-6">
                Le SIDO se distingue par son approche <strong>B2B concrète</strong> : pas de gadgets grand public, mais des solutions industrielles, des cas d'usage réels et des technologies déployées en entreprise. C'est un lieu de business autant que de veille technologique.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Les 4 Thématiques Clés de 2026</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {thematiques.map((theme, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <theme.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{theme.titre}</h3>
                          <p className="text-sm text-muted-foreground">{theme.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Pourquoi Y Aller ?</h2>
              
              <p className="mb-4">
                En tant qu'agence web à Lyon, nous participons régulièrement au SIDO. Voici ce que vous pouvez en retirer :
              </p>

              <div className="space-y-4 mb-8">
                {pourquoiYAller.map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-1">{item.raison}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Ce qui Nous Intéresse en 2026</h2>
              
              <p className="mb-4">
                Pour une agence web spécialisée WordPress comme VKBack, le SIDO est l'occasion de :
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Explorer les outils IA</strong> pour la création de contenu, le SEO et l'automatisation marketing</li>
                <li><strong>Découvrir les nouvelles interfaces</strong> : chatbots, assistants vocaux, recherche conversationnelle</li>
                <li><strong>Comprendre l'impact de l'IA générative</strong> sur nos métiers et ceux de nos clients</li>
                <li><strong>Rencontrer des partenaires techniques</strong> pour intégrer de nouvelles fonctionnalités à nos sites</li>
                <li><strong>Anticiper les tendances</strong> pour conseiller nos clients sur leur stratégie digitale</li>
              </ul>

              <Card className="mb-8 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">🎯 Notre sélection de conférences</p>
                  <p>
                    Nous suivons particulièrement les sessions sur <strong>l'IA appliquée au marketing digital</strong>, <strong>la personnalisation e-commerce</strong> et <strong>l'automatisation des tâches répétitives</strong>. Ces innovations impactent directement les sites que nous créons pour nos clients.
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Chiffres des Éditions Précédentes</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border p-3 text-left font-semibold">Édition</th>
                      <th className="border p-3 text-left font-semibold">Visiteurs</th>
                      <th className="border p-3 text-left font-semibold">Exposants</th>
                      <th className="border p-3 text-left font-semibold">Speakers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {editionsPrecedentes.map((edition, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                        <td className="border p-3 font-medium">SIDO {edition.annee}</td>
                        <td className="border p-3">{edition.visiteurs}</td>
                        <td className="border p-3">{edition.exposants}</td>
                        <td className="border p-3">{edition.speakers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Informations Pratiques</h2>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Dates</strong> : 16 et 17 Septembre 2026</li>
                <li><strong>Lieu</strong> : Cité Internationale de Lyon, 50 Quai Charles de Gaulle, 69006 Lyon</li>
                <li><strong>Accès</strong> : Métro B arrêt "Cité Internationale", Tram T1, parkings à proximité</li>
                <li><strong>Tarif</strong> : Gratuit sur inscription (badge visiteur), pass business disponible</li>
                <li><strong>Site officiel</strong> : <a href="https://www.sido-event.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.sido-event.com</a></li>
              </ul>

              <Card className="mb-8 border-amber-500/30 bg-amber-500/5">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">💡 Conseil</p>
                  <p>
                    Inscrivez-vous tôt pour accéder aux <strong>rendez-vous business one-to-one</strong>. Le SIDO propose une plateforme de matching pour organiser des rencontres ciblées avec les exposants qui vous intéressent.
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Conclusion</h2>
              
              <p className="mb-8">
                Le SIDO Lyon 2026 s'annonce comme une édition majeure, avec un focus particulier sur <strong>l'IA et ses applications concrètes</strong>. Que vous soyez entrepreneur, responsable IT, ou simplement curieux des technologies de demain, cet événement vaut le déplacement. Nous y serons, et vous ?
              </p>
            </FadeInSection>
          </div>

          {/* CTA */}
          <FadeInSection delay={300}>
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Vous Avez un Projet Digital ?</h3>
              <p className="text-muted-foreground mb-6">
                Discutons de comment les nouvelles technologies peuvent booster votre activité.
              </p>
              <Button asChild size="lg" className="btn-cta">
                <Link to="/contact">
                  Parlons de votre projet
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </FadeInSection>

          {/* Articles liés */}
          <FadeInSection delay={400}>
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Articles liés</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/blog/cprint-lyon-2026" className="group">
                  <Card className="h-full transition-all hover:border-primary/50">
                    <CardContent className="p-6">
                      <Badge className="mb-3">Événement</Badge>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        C!Print Lyon 2026 : Salon Communication Visuelle
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        3-5 février 2026 à Eurexpo Lyon.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/blog/google-ads-sea-lyon" className="group">
                  <Card className="h-full transition-all hover:border-primary/50">
                    <CardContent className="p-6">
                      <Badge className="mb-3">Stratégie</Badge>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        Google Ads vs SEO : Que Choisir ?
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Comparatif pour votre stratégie digitale.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </FadeInSection>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default WordCampLyon;
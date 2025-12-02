import { Helmet } from "react-helmet";
import { Calendar, User, ArrowLeft, ArrowRight, MapPin, Clock, Users, Palette, Printer, Package, Ticket } from "lucide-react";
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
import blogImage from "@/assets/blog-salon-ecommerce.jpg";

const SalonEcommerceLyon = () => {
  const infosPratiques = [
    { label: "Dates", value: "3, 4 et 5 Février 2026", icon: Calendar },
    { label: "Lieu", value: "Eurexpo Lyon", icon: MapPin },
    { label: "Visiteurs attendus", value: "18 000+", icon: Users },
    { label: "Exposants", value: "450+", icon: Package },
  ];

  const thematiques = [
    {
      titre: "Impression Grand Format",
      description: "Signalétique, affichage publicitaire, décoration intérieure, covering véhicules",
      icon: Printer,
    },
    {
      titre: "Personnalisation & Marquage",
      description: "Textile personnalisé, objets publicitaires, gravure, flocage, sublimation",
      icon: Palette,
    },
    {
      titre: "Packaging & PLV",
      description: "Emballages créatifs, présentoirs, merchandising en point de vente",
      icon: Package,
    },
    {
      titre: "Digital & Phygital",
      description: "Écrans LED, affichage dynamique, réalité augmentée appliquée au print",
      icon: Users,
    },
  ];

  const pourquoiYAller = [
    {
      raison: "Trouver des prestataires impression",
      description: "Comparez les offres de centaines d'imprimeurs et personnalisateurs en un seul lieu.",
    },
    {
      raison: "Découvrir les innovations",
      description: "Nouvelles techniques d'impression, matériaux éco-responsables, finitions premium.",
    },
    {
      raison: "Commander vos supports marketing",
      description: "Cartes de visite, flyers, kakémonos, PLV... profitez des offres salon.",
    },
    {
      raison: "Networking local",
      description: "Rencontrez des acteurs lyonnais et rhônalpins de la communication visuelle.",
    },
  ];

  const editionsPrecedentes = [
    { annee: "2025", visiteurs: "17 200", exposants: "430", nouveautes: "85" },
    { annee: "2024", visiteurs: "16 500", exposants: "410", nouveautes: "78" },
    { annee: "2023", visiteurs: "15 800", exposants: "380", nouveautes: "72" },
  ];

  return (
    <>
      <Helmet>
        <title>C!Print Lyon 2026 : Salon Communication Visuelle - 3-5 Fév</title>
        <meta 
          name="description" 
          content="C!Print Lyon 2026, le salon de la communication visuelle et des industries graphiques. 3-5 février à Eurexpo. Impression, personnalisation, signalétique." 
        />
        <link rel="canonical" href="https://vkback.com/blog/cprint-lyon-2026" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Blog", href: "/blog" },
          { label: "C!Print Lyon 2026" }
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
                C!Print Lyon 2026 : Le Salon de la Communication Visuelle
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Florian C.
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  2 Décembre 2025
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  5 min de lecture
                </span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <img 
              src={blogImage} 
              alt="C!Print Lyon 2026 - Salon de la communication visuelle et industries graphiques à Eurexpo"
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
                    <a href="https://www.salon-cprint.com/" target="_blank" rel="noopener noreferrer">
                      <Ticket className="w-4 h-4 mr-2" />
                      Site officiel C!Print
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>

          <div className="prose prose-lg max-w-none">
            <FadeInSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                <strong>C!Print Lyon</strong> revient pour sa 13ème édition du 3 au 5 février 2026 à Eurexpo. Ce salon incontournable de la <strong>communication visuelle</strong> et des <strong>industries graphiques</strong> rassemble chaque année plus de 18 000 professionnels à la recherche de solutions d'impression, de personnalisation et de signalétique.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Qu'est-ce que C!Print ?</h2>
              
              <p className="mb-4">
                C!Print (prononcez "See Print") est le <strong>premier salon français</strong> dédié à la communication visuelle. Depuis 2014, il rassemble à Lyon l'écosystème complet de l'industrie graphique : imprimeurs, fabricants de machines, fournisseurs de consommables, agences et annonceurs.
              </p>

              <p className="mb-6">
                L'événement se déroule à <strong>Eurexpo Lyon</strong>, le plus grand parc d'expositions de la région Auvergne-Rhône-Alpes, facilement accessible depuis le centre-ville et les principales autoroutes.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Les 4 Univers du Salon</h2>
              
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

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Pourquoi C!Print Nous Intéresse ?</h2>
              
              <p className="mb-4">
                En tant qu'agence web, vous vous demandez peut-être ce qu'on va faire à un salon d'impression ? La réponse est simple : <strong>le digital et le print sont complémentaires</strong>.
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Cohérence de marque</strong> : les supports print doivent être alignés avec l'identité web</li>
                <li><strong>QR codes et phygital</strong> : créer des ponts entre supports papier et expériences digitales</li>
                <li><strong>E-commerce et packaging</strong> : l'expérience client passe aussi par l'emballage physique</li>
                <li><strong>Partenaires impression</strong> : trouver des prestataires fiables pour nos clients</li>
                <li><strong>Veille design</strong> : tendances graphiques applicables au web</li>
              </ul>

              <Card className="mb-8 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">🎨 Le saviez-vous ?</p>
                  <p>
                    Les entreprises qui combinent <strong>stratégie digitale et supports print</strong> ont un taux de mémorisation 70% supérieur. Un flyer bien conçu avec un QR code vers votre site peut booster significativement vos conversions.
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Pourquoi Y Aller ?</h2>
              
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

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Tendances 2026 à Surveiller</h2>
              
              <p className="mb-4">
                Voici les innovations attendues pour cette édition :
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Impression éco-responsable</strong> : encres végétales, supports recyclés, réduction des déchets</li>
                <li><strong>Personnalisation de masse</strong> : impression variable, éditions limitées, sur-mesure industrialisé</li>
                <li><strong>Textile connecté</strong> : vêtements avec technologie NFC intégrée</li>
                <li><strong>Réalité augmentée</strong> : supports print qui prennent vie avec une application</li>
                <li><strong>Impression 3D</strong> : objets promotionnels et signalétique en relief</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Chiffres des Éditions Précédentes</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border p-3 text-left font-semibold">Édition</th>
                      <th className="border p-3 text-left font-semibold">Visiteurs</th>
                      <th className="border p-3 text-left font-semibold">Exposants</th>
                      <th className="border p-3 text-left font-semibold">Nouveautés</th>
                    </tr>
                  </thead>
                  <tbody>
                    {editionsPrecedentes.map((edition, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                        <td className="border p-3 font-medium">C!Print {edition.annee}</td>
                        <td className="border p-3">{edition.visiteurs}</td>
                        <td className="border p-3">{edition.exposants}</td>
                        <td className="border p-3">{edition.nouveautes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Informations Pratiques</h2>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Dates</strong> : 3, 4 et 5 Février 2026</li>
                <li><strong>Horaires</strong> : 9h - 18h (17h le dernier jour)</li>
                <li><strong>Lieu</strong> : Eurexpo Lyon, Boulevard de l'Europe, 69680 Chassieu</li>
                <li><strong>Accès</strong> : Tram T5 terminus "Eurexpo", parking gratuit sur place</li>
                <li><strong>Tarif</strong> : Gratuit sur inscription préalable</li>
                <li><strong>Site officiel</strong> : <a href="https://www.salon-cprint.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.salon-cprint.com</a></li>
              </ul>

              <Card className="mb-8 border-amber-500/30 bg-amber-500/5">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">💡 Conseil pratique</p>
                  <p>
                    Prévoyez <strong>au moins une demi-journée</strong> pour visiter le salon correctement. Notez à l'avance les exposants que vous souhaitez rencontrer et préparez vos questions. Le badge visiteur vous donne accès aux conférences gratuitement.
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Conclusion</h2>
              
              <p className="mb-8">
                C!Print Lyon 2026 est une opportunité unique pour <strong>découvrir les dernières innovations</strong> en communication visuelle et <strong>rencontrer des prestataires</strong> de qualité. Que vous cherchiez à imprimer vos supports marketing, à découvrir de nouvelles techniques ou simplement à faire de la veille, ce salon mérite le détour.
              </p>
            </FadeInSection>
          </div>

          {/* CTA */}
          <FadeInSection delay={300}>
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Besoin de Supports Print pour Votre Entreprise ?</h3>
              <p className="text-muted-foreground mb-6">
                Nous créons des identités visuelles cohérentes pour le web ET le print.
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
                <Link to="/blog/sido-lyon-2026" className="group">
                  <Card className="h-full transition-all hover:border-primary/50">
                    <CardContent className="p-6">
                      <Badge className="mb-3">Événement</Badge>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        SIDO Lyon 2026 : Salon IoT, IA et Robotique
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        16-17 septembre à la Cité Internationale.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/blog/prix-creation-site-internet" className="group">
                  <Card className="h-full transition-all hover:border-primary/50">
                    <CardContent className="p-6">
                      <Badge className="mb-3">Guide</Badge>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        Combien Coûte un Site Internet en 2025 ?
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Tarifs détaillés selon le type de site.
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

export default SalonEcommerceLyon;
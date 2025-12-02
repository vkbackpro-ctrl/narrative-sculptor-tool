import { Helmet } from "react-helmet";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import FadeInSection from "@/components/FadeInSection";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import portfolioDutilleul from "@/assets/portfolio-dutilleul.jpg";
import portfolioMaloys from "@/assets/portfolio-maloys.jpg";
import portfolioSomerville from "@/assets/portfolio-somerville.jpg";
import portfolioGrandGite from "@/assets/portfolio-grandgite.jpg";
import portfolioNumero1 from "@/assets/portfolio-numero1.jpg";
import portfolioStockAmericain from "@/assets/portfolio-stockamericain.jpg";

const projectsByCategory = {
  vitrine: [
    {
      title: "Maloy's Immobilier",
      category: "Site Vitrine",
      image: portfolioMaloys,
      description: "Site vitrine pour agence immobilière à Châtillon d'Azergues - Recherche de biens, estimation en ligne",
      tags: ["WordPress", "Immobilier", "Vallée d'Azergues"],
      year: "2024",
      url: "https://www.maloys-immobilier.com/"
    },
    {
      title: "Grand Gîte Lyon",
      category: "Site Vitrine",
      image: portfolioGrandGite,
      description: "Site de location de gîte de groupe près de Lyon - Réservation en ligne, galerie photos, calendrier",
      tags: ["WordPress", "Tourisme", "Réservation"],
      year: "2024",
      url: "https://grandgitelyon.com/"
    },
    {
      title: "Dutilleul Entreprise",
      category: "Site Vitrine",
      image: portfolioDutilleul,
      description: "Site vitrine plombier-chauffagiste - Présentation services, devis en ligne, certifications RGE",
      tags: ["WordPress", "Artisan", "Dépannage"],
      year: "2024",
      url: "https://www.depannage-chauffage-dutilleul.fr/"
    },
    {
      title: "Numéro 1 Scolarité",
      category: "Site Vitrine",
      image: portfolioNumero1,
      description: "Site accompagnement scolaire pour élèves Dys, TDAH, Autistes - Formulaires de contact, présentation services",
      tags: ["WordPress", "Éducation", "Social"],
      year: "2024",
      url: "https://www.numero1-scolarite.com/"
    }
  ],
  ecommerce: [
    {
      title: "Stock Américain",
      category: "E-commerce",
      image: portfolioStockAmericain,
      description: "Boutique en ligne surplus militaire - Catalogue produits, paiement sécurisé, programme fidélité",
      tags: ["WooCommerce", "E-commerce", "Surplus"],
      year: "2024",
      url: "https://www.stock-americain.com/fr/"
    }
  ],
  corporate: [
    {
      title: "Somerville Media",
      category: "Site Corporate",
      image: portfolioSomerville,
      description: "Site corporate international pour agence de production vidéo - Portfolio, services, devis en ligne",
      tags: ["WordPress", "Production Vidéo", "International"],
      year: "2023",
      url: "https://www.somervillemedia.com/"
    }
  ]
};

const categories = [
  { id: "vitrine", label: "Sites Vitrine", anchor: "#vitrine" },
  { id: "ecommerce", label: "E-commerce", anchor: "#ecommerce" },
  { id: "corporate", label: "Sites Corporate", anchor: "#corporate" }
];

const Realisations = () => {
  return (
    <>
      <Helmet>
        <title>Nos Réalisations | Portfolio Sites Web Lyon - VKBack</title>
        <meta 
          name="description" 
          content="Découvrez nos réalisations de sites internet à Lyon : sites vitrine, e-commerce, corporate. Portfolio de +200 projets web réussis depuis 14 ans." 
        />
        <meta name="keywords" content="portfolio web lyon, réalisations sites internet, projets web lyon, agence web portfolio" />
        <link rel="canonical" href="https://vkback.fr/realisations/" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Nos Réalisations" }
        ]} 
      />

      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <FadeInSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Nos Réalisations Web à Lyon
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Plus de <strong>200 sites internet créés</strong> depuis 14 ans pour des TPE, PME et grandes entreprises lyonnaises. 
                Découvrez nos projets WordPress, e-commerce et corporate.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="secondary" className="px-4 py-2">200+ projets</Badge>
                <Badge variant="secondary" className="px-4 py-2">14 ans d'expérience</Badge>
                <Badge variant="secondary" className="px-4 py-2">4.9/5 satisfaction</Badge>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30 border-b">
          <div className="max-w-7xl mx-auto">
            <nav className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={cat.anchor}
                  className="px-6 py-2.5 rounded-full bg-background border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 font-medium text-sm"
                >
                  {cat.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Sites Vitrine Section */}
        <section id="vitrine" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Sites Vitrine
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Sites web professionnels pour présenter votre activité, vos services et gagner en visibilité locale.
              </p>
            </FadeInSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsByCategory.vitrine.map((project, index) => (
                <FadeInSection key={project.title} delay={index * 100}>
                  <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-4 right-4 bg-primary/90">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {project.title}
                        <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-xs">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Voir le projet
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* E-commerce Section */}
        <section id="ecommerce" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Boutiques E-commerce
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Solutions de vente en ligne complètes avec gestion des stocks, paiements sécurisés et suivi des commandes.
              </p>
            </FadeInSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsByCategory.ecommerce.map((project, index) => (
                <FadeInSection key={project.title} delay={index * 100}>
                  <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-4 right-4 bg-primary/90">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {project.title}
                        <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-xs">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Voir le projet
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Section */}
        <section id="corporate" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-32">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Sites Corporate & Professionnels
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Sites institutionnels haut de gamme pour entreprises et cabinets professionnels exigeants.
              </p>
            </FadeInSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsByCategory.corporate.map((project, index) => (
                <FadeInSection key={project.title} delay={index * 100}>
                  <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-4 right-4 bg-primary/90">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {project.title}
                        <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-xs">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Voir le projet
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Votre Projet est le Prochain ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nous créons des sites internet uniques et performants adaptés à votre activité et vos objectifs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-cta">
                  <a href="/contact">
                    Demander un Devis
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/contact">
                    Discuter de mon projet
                  </a>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Realisations;
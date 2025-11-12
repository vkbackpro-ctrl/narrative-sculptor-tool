import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import portfolioDutilleul from "@/assets/portfolio-dutilleul.jpg";
import portfolioSomerville from "@/assets/portfolio-somerville.jpg";
import portfolioMaloys from "@/assets/portfolio-maloys.jpg";
import FadeInSection from "./FadeInSection";
const projects = [{
  image: portfolioDutilleul,
  category: "Site Vitrine",
  title: "Dutilleul Entreprise - Plombier Chauffagiste",
  tags: ["WordPress", "SEO Local", "Tourcoing"],
  result: "Visibilité locale optimisée",
  link: "/realisations/dutilleul-plombier-chauffagiste/"
}, {
  image: portfolioSomerville,
  category: "Corporate",
  title: "Somerville Media - Production Vidéo",
  tags: ["WordPress", "Portfolio", "Singapour"],
  result: "Présence internationale",
  link: "/realisations/somerville-video-production/"
}, {
  image: portfolioMaloys,
  category: "Immobilier",
  title: "Maloy's Immobilier - Agence Châtillon",
  tags: ["WordPress", "Immobilier", "SEO"],
  result: "Génération de leads qualifiés",
  link: "/realisations/maloys-immobilier/"
}];
const PortfolioCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % projects.length);
  };
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
  };
  return <section className="section-container bg-muted/30">
      <FadeInSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nos Dernières Réalisations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Découvrez les sites web que nous avons créés pour nos clients</p>
        </div>
      </FadeInSection>

      {/* Desktop: Grid view */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
        {projects.map((project, index) => <FadeInSection key={project.title} delay={index * 150}>
            <Card className="overflow-hidden card-hover group h-full">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>)}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong className="text-primary">Résultat :</strong> {project.result}
                </p>
                <a href={project.link} className="text-primary font-medium hover:underline inline-flex items-center group-hover:translate-x-2 transition-transform">
                  Voir le projet →
                </a>
              </CardContent>
            </Card>
          </FadeInSection>)}
      </div>

      {/* Mobile/Tablet: Carousel */}
      <div className="lg:hidden mb-8">
        <div className="relative">
          <Card className="overflow-hidden">
            <div className="relative overflow-hidden">
              <img src={projects[currentIndex].image} alt={projects[currentIndex].title} className="w-full h-64 object-cover" />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary">{projects[currentIndex].category}</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">{projects[currentIndex].title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {projects[currentIndex].tags.map(tag => <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>)}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-primary">Résultat :</strong> {projects[currentIndex].result}
              </p>
              <a href={projects[currentIndex].link} className="text-primary font-medium hover:underline inline-flex items-center">
                Voir le projet →
              </a>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {projects.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-primary w-8" : "bg-border"}`} />)}
            </div>
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <FadeInSection delay={400}>
        <div className="text-center">
          <Button asChild size="lg" className="group">
            <a href="/realisations">
              Voir toutes nos réalisations
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </FadeInSection>
    </section>;
};
export default PortfolioCarousel;
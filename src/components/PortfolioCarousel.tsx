import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import portfolioMode from "@/assets/portfolio-mode.jpg";
import portfolioArtisan from "@/assets/portfolio-artisan.jpg";
import portfolioCorporate from "@/assets/portfolio-corporate.jpg";
import FadeInSection from "./FadeInSection";

const projects = [
  {
    image: portfolioMode,
    category: "E-commerce",
    title: "Boutique Mode Féminine",
    tags: ["WooCommerce", "200+ produits"],
    result: "+150% de ventes en 6 mois",
    link: "/realisations/boutique-ecommerce-mode/",
  },
  {
    image: portfolioArtisan,
    category: "Site Vitrine",
    title: "Artisan Plombier Lyon 6",
    tags: ["WordPress", "SEO Local"],
    result: "Top 3 Google en 3 mois",
    link: "/realisations/site-artisan-plombier/",
  },
  {
    image: portfolioCorporate,
    category: "Corporate",
    title: "PME Industrielle Rhône",
    tags: ["WordPress", "Multilingue"],
    result: "Présence internationale",
    link: "/realisations/site-corporate-b2b/",
  },
];

const PortfolioCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="section-container bg-muted/30">
      <FadeInSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Nos Dernières Réalisations à Lyon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les sites web que nous avons créés pour nos clients lyonnais
          </p>
        </div>
      </FadeInSection>

      {/* Desktop: Grid view */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
        {projects.map((project, index) => (
          <FadeInSection key={project.title} delay={index * 150}>
            <Card className="overflow-hidden card-hover group h-full">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
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
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong className="text-primary">Résultat :</strong> {project.result}
                </p>
                <a
                  href={project.link}
                  className="text-primary font-medium hover:underline inline-flex items-center group-hover:translate-x-2 transition-transform"
                >
                  Voir le projet →
                </a>
              </CardContent>
            </Card>
          </FadeInSection>
        ))}
      </div>

      {/* Mobile/Tablet: Carousel */}
      <div className="lg:hidden mb-8">
        <div className="relative">
          <Card className="overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary">{projects[currentIndex].category}</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">{projects[currentIndex].title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {projects[currentIndex].tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                <strong className="text-primary">Résultat :</strong> {projects[currentIndex].result}
              </p>
              <a
                href={projects[currentIndex].link}
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                Voir le projet →
              </a>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <FadeInSection delay={400}>
        <div className="text-center">
          <Button size="lg" className="group">
            Voir toutes nos réalisations
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </FadeInSection>
    </section>
  );
};

export default PortfolioCarousel;

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Filter } from "lucide-react";
import portfolioDutilleul from "@/assets/portfolio-dutilleul.jpg";
import portfolioMaloys from "@/assets/portfolio-maloys.jpg";
import portfolioSomerville from "@/assets/portfolio-somerville.jpg";
import FadeInSection from "./FadeInSection";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
}

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      title: "Dutilleul Immobilier",
      category: "vitrine",
      description: "Site vitrine premium pour promoteur immobilier lyonnais",
      image: portfolioDutilleul,
      tags: ["WordPress", "Immobilier", "Lyon 6e"],
      url: "#",
    },
    {
      title: "Maloys Restaurant",
      category: "ecommerce",
      description: "Site de réservation et commande en ligne pour restaurant",
      image: portfolioMaloys,
      tags: ["WooCommerce", "Restauration", "Lyon 2e"],
      url: "#",
    },
    {
      title: "Somerville Consulting",
      category: "corporate",
      description: "Site corporate pour cabinet de conseil B2B",
      image: portfolioSomerville,
      tags: ["WordPress", "B2B", "Villeurbanne"],
      url: "#",
    },
  ];

  const filters = [
    { value: "all", label: "Tous les projets" },
    { value: "vitrine", label: "Sites Vitrine" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "corporate", label: "Corporate" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="section-container">
      <FadeInSection>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Portfolio Lyon
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair mb-4">
            Nos Réalisations Web à Lyon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques projets réalisés pour nos clients lyonnais
          </p>
        </div>
      </FadeInSection>

      {/* Filtres */}
      <FadeInSection delay={200}>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.value)}
              className="gap-2"
            >
              <Filter className="w-4 h-4" />
              {filter.label}
            </Button>
          ))}
        </div>
      </FadeInSection>

      {/* Grille de projets */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <FadeInSection key={project.title} delay={index * 100}>
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={`Capture d'écran du projet ${project.title} - Création site web à Lyon par VKBack`}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button size="sm" variant="secondary" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir le projet
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;

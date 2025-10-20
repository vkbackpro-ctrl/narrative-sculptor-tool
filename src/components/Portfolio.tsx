import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import portfolioMode from "@/assets/portfolio-mode.jpg";
import portfolioArtisan from "@/assets/portfolio-artisan.jpg";
import portfolioCorporate from "@/assets/portfolio-corporate.jpg";

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

const Portfolio = () => {
  return (
    <section className="section-container bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Nos Dernières Réalisations à Lyon
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Découvrez les sites web que nous avons créés pour nos clients lyonnais
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden card-hover group">
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary">{project.category}</Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
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
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                Voir le projet →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg">Voir toutes nos réalisations</Button>
      </div>
    </section>
  );
};

export default Portfolio;

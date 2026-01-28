import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getRoutesByCategory } from "@/config/routes";
import { FileText, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Sitemap = () => {
  const routesByCategory = getRoutesByCategory();

  // Ordre d'affichage des catégories
  const categoryOrder = [
    "Pages principales",
    "Services principaux",
    "Création de Sites",
    "E-commerce",
    "Référencement SEO",
    "Maintenance & Support",
    "Google Ads & SEA",
    "Hébergement Web",
    "Blog",
    "Pages légales"
  ];

  return (
    <>
      <Helmet>
        <title>Plan du Site - VKBack Agence Web Lyon</title>
        <meta 
          name="description" 
          content="Plan du site VKBack : toutes nos pages de services, articles de blog et ressources. Trouvez rapidement l'information que vous cherchez sur notre site." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                  <FileText className="w-4 h-4" />
                  Navigation
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Plan du Site
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Accédez rapidement à toutes les pages de notre site. Découvrez nos services, 
                  articles de blog et ressources pour votre projet web à Lyon.
                </p>
              </div>
            </div>
          </section>

          {/* Sitemap Content */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8">
                {categoryOrder.map((category) => {
                  const routes = routesByCategory.get(category);
                  if (!routes) return null;

                  return (
                    <Card key={category} className="border-2 hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-bold mb-4 text-primary">
                          {category}
                        </h2>
                        <ul className="space-y-3">
                          {routes.map((route) => (
                            <li key={route.path}>
                              <Link
                                to={route.path}
                                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                              >
                                <ChevronRight className="w-4 h-4 text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                                <span className="group-hover:underline">{route.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* CTA Section */}
              <div className="mt-16 text-center">
                <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 border-primary/20">
                  <CardContent className="p-8 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Vous ne trouvez pas ce que vous cherchez ?
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Notre équipe est à votre disposition pour répondre à toutes vos questions 
                      et vous accompagner dans votre projet web.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Contactez-nous
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </Link>
                      <Link
                        to="/tarifs/"
                        className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        Voir nos tarifs
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Sitemap;

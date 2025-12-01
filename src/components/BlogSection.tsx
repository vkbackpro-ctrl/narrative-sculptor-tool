import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import blogPrixCreation from "@/assets/blog-prix-creation-site.jpg";
import blogWordpressCMS from "@/assets/blog-wordpress-cms.jpg";
import blogWooCommerce from "@/assets/blog-woocommerce-prestashop.jpg";

const articles = [
  {
    image: blogPrixCreation,
    category: "SEO",
    title: "Prix Création Site Internet à Lyon en 2025 : Guide Complet",
    excerpt: "Découvrez les tarifs moyens pour créer un site web à Lyon selon le type de projet : vitrine, e-commerce, sur-mesure...",
    date: "15 oct. 2025",
    readTime: "8 min",
    link: "/blog/prix-creation-site-internet-lyon-2025/",
  },
  {
    image: blogWooCommerce,
    category: "E-commerce",
    title: "Pourquoi Choisir WooCommerce pour Votre E-commerce en 2025 ?",
    excerpt: "Découvrez tous les avantages de WooCommerce pour créer votre boutique en ligne : flexibilité, SEO, coûts maîtrisés.",
    date: "5 oct. 2025",
    readTime: "8 min",
    link: "/blog/pourquoi-choisir-woocommerce/",
  },
];

const BlogSection = () => {
  return (
    <section className="section-container bg-muted/30">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Derniers Articles du Blog
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Conseils, guides et actualités web pour votre entreprise
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {articles.map((article) => (
          <Card key={article.title} className="card-hover overflow-hidden group">
            <div className="relative overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary">
                  {article.category}
                </Badge>
              </div>
            </div>
            <CardHeader className="pb-3">
              <h3 className="text-lg font-bold leading-tight">
                {article.title}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <Link
                to={article.link}
                className="text-primary font-medium hover:underline inline-flex items-center group-hover:translate-x-2 transition-transform"
              >
                Lire : {article.title}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Voir tous les articles
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;

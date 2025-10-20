import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const articles = [
  {
    category: "SEO",
    title: "Prix Création Site Internet à Lyon en 2025 : Guide Complet",
    excerpt: "Découvrez les tarifs moyens pour créer un site web à Lyon selon le type de projet : vitrine, e-commerce, sur-mesure...",
    date: "15 oct. 2025",
    readTime: "8 min",
    link: "/blog/prix-creation-site-internet-lyon-2025/",
  },
  {
    category: "WordPress",
    title: "WordPress vs Autres CMS : Pourquoi Choisir WordPress en 2025 ?",
    excerpt: "Comparatif complet des avantages de WordPress face à Wix, Shopify, et autres plateformes pour votre projet web.",
    date: "10 oct. 2025",
    readTime: "6 min",
    link: "/blog/wordpress-vs-autres-cms-2025/",
  },
  {
    category: "E-commerce",
    title: "WooCommerce ou PrestaShop : Quel CMS E-commerce Choisir ?",
    excerpt: "Guide détaillé pour choisir entre WooCommerce et PrestaShop selon vos besoins e-commerce et votre budget.",
    date: "5 oct. 2025",
    readTime: "10 min",
    link: "/blog/woocommerce-prestashop-comparatif/",
  },
];

const BlogSection = () => {
  return (
    <section className="section-container bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Derniers Articles du Blog
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Conseils, guides et actualités web pour votre entreprise
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card key={article.title} className="card-hover">
            <CardHeader>
              <Badge className="w-fit mb-4" variant="secondary">
                {article.category}
              </Badge>
              <h3 className="text-xl font-bold leading-tight mb-3">
                {article.title}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
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

              <a
                href={article.link}
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                Lire l'article →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

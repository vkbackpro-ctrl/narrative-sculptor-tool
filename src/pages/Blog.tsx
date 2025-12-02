import { Helmet } from "react-helmet";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
import blogPrixCreation from "@/assets/blog-prix-creation-site.jpg";
import blogWooCommerce from "@/assets/blog-woocommerce-ecommerce.jpg";
import blogSeoLyon from "@/assets/blog-seo-lyon.jpg";
import blogMaintenanceWp from "@/assets/blog-maintenance-wordpress.jpg";
import blogGoogleAds from "@/assets/blog-google-ads.jpg";
import blogHebergement from "@/assets/blog-hebergement-web.jpg";
import blogSidoLyon from "@/assets/blog-wordcamp-lyon.jpg";
import blogCprintLyon from "@/assets/blog-salon-ecommerce.jpg";

const articles = [
  {
    title: "Prix Création Site Internet Lyon 2025 : Guide Complet",
    slug: "prix-creation-site-internet-lyon",
    excerpt: "Découvrez les tarifs réels pour créer un site internet à Lyon en 2025. Guide complet des prix selon le type de site : vitrine, e-commerce, corporate.",
    image: blogPrixCreation,
    alt: "Tarifs création site internet Lyon 2025 - Guide complet des prix agence web",
    category: "Création Site Internet",
    author: "Marc D.",
    date: "15 Janvier 2025",
    readTime: "8 min"
  },
  {
    title: "Pourquoi Choisir WooCommerce pour Votre E-commerce en 2025 ?",
    slug: "pourquoi-choisir-woocommerce",
    excerpt: "Guide complet des avantages de WooCommerce pour créer votre boutique en ligne : flexibilité, SEO, coûts maîtrisés et écosystème WordPress.",
    image: blogWooCommerce,
    alt: "WooCommerce e-commerce WordPress - Boutique en ligne Lyon 2025",
    category: "Site E-commerce",
    author: "Florian C.",
    date: "10 Janvier 2025",
    readTime: "10 min"
  },
  {
    title: "Comment Choisir son Agence SEO à Lyon : 10 Critères",
    slug: "referencement-seo-lyon",
    excerpt: "10 critères essentiels pour bien choisir votre agence SEO à Lyon. Red flags, questions à poser, tarifs du marché. Guide pratique.",
    image: blogSeoLyon,
    alt: "Choisir agence SEO Lyon - 10 critères référencement naturel Google",
    category: "Référencement SEO",
    author: "Florian C.",
    date: "8 Janvier 2025",
    readTime: "12 min"
  },
  {
    title: "Maintenance WordPress en 2025 : Guide Complet",
    slug: "maintenance-wordpress",
    excerpt: "Guide complet de la maintenance WordPress : mises à jour, sécurité, sauvegardes, performance. Checklist et bonnes pratiques.",
    image: blogMaintenanceWp,
    alt: "Maintenance WordPress Lyon - Guide sécurité mises à jour plugins 2025",
    category: "Maintenance & Support",
    author: "Marc D.",
    date: "5 Janvier 2025",
    readTime: "14 min"
  },
  {
    title: "Google Ads vs SEO : Que Choisir pour Votre Entreprise ?",
    slug: "google-ads-sea-lyon",
    excerpt: "Comparatif complet Google Ads vs SEO. Avantages, coûts, délais. Guide décisionnel selon votre situation et vos objectifs.",
    image: blogGoogleAds,
    alt: "Google Ads vs SEO Lyon - Comparatif référencement payant et naturel",
    category: "Google Ads & SEA",
    author: "Florian C.",
    date: "2 Janvier 2025",
    readTime: "10 min"
  },
  {
    title: "Migrer son Site vers un Nouvel Hébergeur : Guide Complet",
    slug: "hebergement-web-france",
    excerpt: "Guide complet pour migrer votre site sans interruption. 8 étapes détaillées, erreurs à éviter, checklist pratique.",
    image: blogHebergement,
    alt: "Migration hébergement web France - Guide transfert site WordPress",
    category: "Hébergement Web",
    author: "Marc D.",
    date: "28 Décembre 2024",
    readTime: "12 min"
  },
  {
    title: "SIDO Lyon 2026 : Le Rendez-vous Européen de l'IoT et l'IA",
    slug: "sido-lyon-2026",
    excerpt: "SIDO Lyon 2026, le plus grand salon européen dédié à l'IoT, l'IA et la robotique. 16-17 septembre à la Cité Internationale.",
    image: blogSidoLyon,
    alt: "SIDO Lyon 2026 - Salon IoT Intelligence Artificielle Robotique Cité Internationale",
    category: "Événement",
    author: "Marc D.",
    date: "2 Décembre 2025",
    readTime: "6 min"
  },
  {
    title: "C!Print Lyon 2026 : Le Salon de la Communication Visuelle",
    slug: "cprint-lyon-2026",
    excerpt: "C!Print Lyon 2026, le salon de la communication visuelle. 3-5 février à Eurexpo. Impression, personnalisation, signalétique.",
    image: blogCprintLyon,
    alt: "C!Print Lyon 2026 - Salon communication visuelle impression Eurexpo",
    category: "Événement",
    author: "Florian C.",
    date: "2 Décembre 2025",
    readTime: "5 min"
  }
];

const categories = [
  "Tous les articles",
  "Création Site Internet",
  "Référencement SEO",
  "Site E-commerce",
  "Maintenance & Support",
  "Google Ads & SEA",
  "Hébergement Web",
  "Événement"
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous les articles");

  const filteredArticles = selectedCategory === "Tous les articles"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Blog Agence Web Lyon | Conseils Sites & SEO - VKBack</title>
        <meta 
          name="description" 
          content="Blog agence web Lyon : conseils création sites internet, SEO, e-commerce, WordPress. Guides pratiques et actualités web par nos experts." 
        />
        <meta name="keywords" content="blog web lyon, conseils création site, seo lyon, wordpress, e-commerce" />
        <link rel="canonical" href="https://vkback.com/blog/" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Blog" }
        ]} 
      />

      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto text-center">
            <FadeInSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Blog Agence Web Lyon
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Conseils, guides et actualités sur la <strong>création de sites internet</strong>, le <strong>référencement SEO</strong> et le <strong>marketing digital à Lyon</strong>.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((cat) => (
                  <Badge 
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "secondary"}
                    className="px-4 py-2 cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  Aucun article trouvé dans cette catégorie.
                </p>
              </div>
            ) : (
              <>
                <FadeInSection>
                  <p className="text-center text-muted-foreground mb-8">
                    {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} {selectedCategory !== "Tous les articles" ? `dans "${selectedCategory}"` : 'au total'}
                  </p>
                </FadeInSection>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((article, index) => (
                <FadeInSection key={article.slug} delay={index * 100}>
                  <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.alt}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-4 right-4 bg-primary/90">
                        {article.category}
                      </Badge>
                    </div>
                    
                    <CardHeader className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 text-xs mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Link to={`/blog/${article.slug}`}>
                          Lire l'article
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
              </>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin d'un Expert Web à Lyon ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Notre agence web accompagne les entreprises lyonnaises dans leur transformation digitale.
              </p>
              <Button asChild size="lg" className="btn-cta">
                <Link to="/contact">
                  Discuter de votre projet
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;

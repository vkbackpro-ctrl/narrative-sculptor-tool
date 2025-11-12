import { Helmet } from "react-helmet";
import { ArrowRight, CheckCircle2, Globe, Sparkles, TrendingUp, Shield, Zap, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import ServiceTemplate from "@/components/ServiceTemplate";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import FadeInSection from "@/components/FadeInSection";
import StickyCtaButton from "@/components/StickyCtaButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-team-creation-site-lyon.jpg";

const SiteVitrine = () => {
  return (
    <>
      <Helmet>
        <title>Création Site Vitrine WordPress Lyon | Site Web Professionnel - VKBack</title>
        <meta 
          name="description" 
          content="Création de site vitrine WordPress à Lyon. Design moderne, responsive et optimisé SEO pour présenter votre entreprise sur le web. Devis gratuit." 
        />
        <meta name="keywords" content="site vitrine lyon, création site vitrine, site web professionnel lyon, agence web lyon" />
        <link rel="canonical" href="https://www.vkback.fr/creation-site-vitrine-lyon" />
        
        <meta property="og:title" content="Création Site Vitrine Lyon | Site Web Professionnel - VKBack" />
        <meta property="og:description" content="Création de site vitrine professionnel à Lyon. Design moderne, responsive et optimisé SEO pour présenter votre entreprise sur le web." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vkback.fr/creation-site-vitrine-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      
      <main>
        <ServiceTemplate
          breadcrumb={[
            { label: "Agence Web Lyon", href: "/" },
            { label: "Création Site Internet", href: "/creation-site-internet-lyon" },
            { label: "Site Vitrine Lyon" }
          ]}
          
          heroTitle="Création de Site Vitrine WordPress à Lyon"
          heroSubtitle="Donnez à votre entreprise une présence web professionnelle avec un site vitrine moderne, responsive et optimisé pour le référencement naturel."
          heroImage={heroImage}
          
          introduction={
            <div id="introduction" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Site Vitrine WordPress Professionnel à Lyon</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed">
                  Un <strong>site vitrine WordPress</strong> est la carte de visite numérique de votre entreprise. 
                  Accessible 24h/24 et 7j/7, il présente vos activités, vos services et vos valeurs à vos clients potentiels à Lyon et partout en France.
                </p>
                <p className="text-lg leading-relaxed">
                  Notre agence web à Lyon crée des <strong>sites vitrines WordPress sur-mesure</strong> : design professionnel, 
                  ergonomie optimale, contenu structuré et référencement naturel intégré pour générer des contacts qualifiés.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-primary" />
                      Site Vitrine Clé en Main
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      De la conception à la mise en ligne, nous gérons l'ensemble de votre projet web pour un site vitrine performant et professionnel.
                    </p>
                  </div>
                  <Button asChild size="lg" className="btn-cta whitespace-nowrap">
                    <a href="/contact">
                      Demander un Devis Gratuit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          }
          
          whySection={{
            title: "Pourquoi un Site Vitrine pour Votre Entreprise ?",
            content: (
              <div id="pourquoi" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FadeInSection>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <Eye className="w-12 h-12 text-primary mb-4" />
                        <CardTitle className="text-2xl">Visibilité 24/7</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Votre entreprise accessible en permanence, jour et nuit. Vos clients trouvent vos informations quand ils en ont besoin, même en dehors de vos horaires d'ouverture.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={100}>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <Shield className="w-12 h-12 text-primary mb-4" />
                        <CardTitle className="text-2xl">Crédibilité Professionnelle</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Un site vitrine professionnel renforce votre image de marque et inspire confiance. 81% des consommateurs recherchent en ligne avant d'acheter.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={200}>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <TrendingUp className="w-12 h-12 text-primary mb-4" />
                        <CardTitle className="text-2xl">Génération de Leads</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Formulaires de contact, appels à l'action stratégiques et optimisation SEO pour transformer vos visiteurs en prospects qualifiés.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={300}>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <Globe className="w-12 h-12 text-primary mb-4" />
                        <CardTitle className="text-2xl">Portée Géographique</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Touchez des clients au-delà de Lyon : votre site vitrine vous permet de développer votre activité dans toute la région Rhône-Alpes et au-delà.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                </div>
              </div>
            )
          }}
          
          expertise={{
            title: "Notre Processus de Création",
            content: (
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Notre méthodologie éprouvée garantit un site vitrine professionnel qui répond à vos objectifs. 
                  En 6 étapes claires, nous transformons votre projet en réalité digitale.
                </p>
              </div>
            )
          }}
          
          features={[
            { title: "Design Responsive", description: "Site adapté à tous les écrans (mobile, tablette, desktop)" },
            { title: "Optimisation SEO", description: "Référencement naturel intégré pour être visible sur Google" },
            { title: "Formulaires de Contact", description: "Génération de leads avec formulaires optimisés" },
            { title: "Google Analytics", description: "Suivi des statistiques et analyse du trafic" },
            { title: "Sécurité SSL", description: "Certificat de sécurité pour protéger vos données" },
            { title: "Formation Incluse", description: "Apprenez à gérer votre site WordPress en autonomie" }
          ]}
          
          pricing={[
            {
              name: "Site Vitrine Essentiel",
              price: "À partir de 1 500€",
              features: [
                "Design personnalisé",
                "5 pages (Accueil, Services, À propos, Réalisations, Contact)",
                "Version responsive",
                "Optimisation SEO de base",
                "Formulaire de contact",
                "Formation 1h",
                "Support 1 mois"
              ]
            },
            {
              name: "Site Vitrine Pro",
              price: "À partir de 3 000€",
              features: [
                "Tout du pack Essentiel",
                "Jusqu'à 10 pages",
                "Blog intégré",
                "SEO avancé",
                "Animations et effets",
                "Intégration réseaux sociaux",
                "Google Analytics",
                "Formation 2h",
                "Support 3 mois"
              ],
              popular: true
            },
            {
              name: "Site Vitrine Premium",
              price: "À partir de 5 000€",
              features: [
                "Tout du pack Pro",
                "Pages illimitées",
                "Multilingue",
                "Espace client/membre",
                "Intégrations avancées",
                "Stratégie de contenu",
                "SEO technique complet",
                "Formation complète",
                "Support 6 mois"
              ]
            }
          ]}
          
          faq={[
            {
              question: "Quelle est la différence entre un site vitrine et un site e-commerce ?",
              answer: "Un site vitrine présente votre entreprise, vos services et vos coordonnées sans vente en ligne. Un site e-commerce permet de vendre directement vos produits via une boutique en ligne avec paiement sécurisé. Le site vitrine est idéal pour générer des contacts et présenter votre activité."
            },
            {
              question: "Combien de temps faut-il pour créer un site vitrine ?",
              answer: "La création d'un site vitrine prend entre 2 et 6 semaines selon la complexité du projet, le nombre de pages et la disponibilité des contenus (textes, images). Nous vous accompagnons à chaque étape pour respecter les délais convenus."
            },
            {
              question: "Puis-je modifier mon site vitrine après sa mise en ligne ?",
              answer: "Absolument ! Nous développons sur WordPress avec Divi, un CMS intuitif que nous vous formons à utiliser. Vous pourrez modifier vos textes, images et ajouter du contenu en toute autonomie. Pour des modifications graphiques importantes, nous restons à votre disposition."
            },
            {
              question: "Le site vitrine sera-t-il optimisé pour le référencement ?",
              answer: "Oui, tous nos sites vitrines incluent une optimisation SEO de base : structure Hn, balises meta, données structurées, sitemap XML, optimisation des images et vitesse de chargement. Pour un référencement plus poussé, nous proposons des prestations SEO dédiées."
            },
            {
              question: "Fournissez-vous l'hébergement du site vitrine ?",
              answer: "Nous vous recommandons des hébergeurs performants et sécurisés adaptés à WordPress. Vous pouvez choisir votre hébergeur ou nous confier la gestion technique. L'hébergement n'est pas inclus dans nos tarifs de création mais nous pouvons le gérer pour vous."
            },
            {
              question: "Mon site vitrine sera-t-il visible sur mobile ?",
              answer: "Tous nos sites vitrines sont 100% responsive, c'est-à-dire qu'ils s'adaptent automatiquement à tous les écrans : smartphones, tablettes et ordinateurs. Avec plus de 60% du trafic web sur mobile, c'est désormais indispensable."
            }
          ]}
          
          relatedServices={[
            {
              title: "Référencement SEO",
              description: "Améliorez la visibilité de votre site vitrine sur Google",
              href: "/referencement-seo-lyon",
              icon: <Zap className="h-12 w-12" />
            },
            {
              title: "Site E-commerce",
              description: "Passez à la vente en ligne avec une boutique WooCommerce",
              href: "/creation-site-ecommerce-lyon",
              icon: <Globe className="h-12 w-12" />
            }
          ]}
          
          ctaTitle="Prêt à Créer Votre Site Vitrine ?"
          ctaDescription="Contactez-nous pour un devis gratuit et personnalisé. Notre équipe vous accompagne dans votre projet web à Lyon."
        />
        
        <FadeInSection>
          <PortfolioSection />
        </FadeInSection>
        
        <FadeInSection>
          <TeamSection />
        </FadeInSection>
        
        <FadeInSection>
          <ContactSection />
        </FadeInSection>
      </main>
      
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default SiteVitrine;

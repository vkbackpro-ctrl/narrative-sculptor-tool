import ServiceTemplate from "@/components/ServiceTemplate";
import { Building2, ArrowRight, CheckCircle2, Clock, Users, Zap, Globe, Smartphone, ShoppingCart, Search, Headphones } from "lucide-react";
import heroImage from "@/assets/site-vitrine-wordpress-lyon.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import FadeInSection from "@/components/FadeInSection";
import { Helmet } from "react-helmet";
import ProgressBar from "@/components/ProgressBar";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const SiteVitrine = () => {
  return (
    <>
      <Helmet>
        <title>Site Vitrine WordPress Lyon | Création Pro - VKBack</title>
        <meta 
          name="description" 
          content="Création site vitrine WordPress Lyon ⭐ Design moderne et responsive. Optimisé SEO. Présence en ligne professionnelle. À partir de 2 500€."
        />
        <link rel="canonical" href="https://vkback.com/creation-site-vitrine-lyon" />
      </Helmet>
      
      <ProgressBar />
      <Header />
      <StickyCtaButton />
      
      <main>
        <ServiceTemplate
          breadcrumb={[
            { label: "Agence Web Lyon", href: "/" },
            { label: "Création de Site Internet", href: "/creation-site-internet-lyon" },
            { label: "Site Vitrine Lyon" }
          ]}
          painPointHook={{
            question: "Vous n'avez pas de présence en ligne crédible ?",
            answer: "85% des clients recherchent une entreprise sur Google avant de la contacter. Changeons ça."
          }}
          painPoints={[
            { problem: "Pas de site web ou site amateur qui fait fuir vos prospects", solution: "Site vitrine professionnel qui rassure et convertit", icon: "🌐" },
            { problem: "Vos concurrents ont des sites modernes, pas vous", solution: "Design actuel et responsive qui inspire confiance", icon: "🎨" },
            { problem: "Vous n'avez pas de moyen de capter des contacts", solution: "Formulaires optimisés pour la génération de leads", icon: "📧" },
            { problem: "Votre site actuel n'apparaît pas sur Google Lyon", solution: "SEO local intégré dès la création", icon: "📍" }
          ]}
          heroTitle="Création de Site Vitrine WordPress à Lyon"
          heroSubtitle="Pas de site web ou site amateur qui fait fuir vos prospects ? Nous créons des sites vitrines professionnels qui rassurent vos clients et génèrent des contacts qualifiés."
          heroImage={heroImage}
          heroAlt="Site vitrine WordPress responsive sur desktop, tablette et smartphone - Lyon"
          ctaPrimary={{ label: "Créer mon site vitrine", href: "/contact" }}
          ctaSecondary={{ label: "Voir nos créations", href: "/realisations" }}
          schemaServiceName="Site Vitrine WordPress Lyon"
          schemaServiceDescription="Création site vitrine WordPress Lyon. Design moderne et responsive. Optimisé SEO. Présence en ligne professionnelle."
          schemaServicePrice="À partir de 2 500€"
          schemaPageUrl="https://vkback.com/creation-site-vitrine-lyon"
          schemaServicePriceRange="2 500€ - 6 000€"
          schemaServiceKeywords={["site vitrine Lyon", "création site vitrine WordPress Lyon", "site web professionnel Villeurbanne", "site vitrine Lyon 3", "agence site vitrine Rhône-Alpes", "création site artisan Caluire", "site TPE PME Écully"]}
          introduction={
            <div id="introduction" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Votre Vitrine Digitale à Lyon</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed">
                  Vous êtes <strong>artisan, commerçant, profession libérale ou TPE à Lyon</strong> ? Un <strong className="text-primary">site vitrine WordPress</strong> est la solution idéale pour développer votre présence en ligne et attirer de nouveaux clients.
                </p>
                <p className="text-lg leading-relaxed">
                  Notre agence web lyonnaise crée des <strong>sites vitrines professionnels</strong> qui mettent en valeur votre activité : présentation de vos services, portfolio de réalisations, formulaire de contact optimisé. <strong>Design sur-mesure, responsive et optimisé pour le référencement local Lyon</strong>.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Site Vitrine Clé en Main</h3>
                    <p className="text-muted-foreground">
                      De la conception au lancement, nous gérons votre projet de A à Z. Vous n'avez qu'à valider les étapes.
                    </p>
                  </div>
                  <Button asChild size="lg" className="btn-cta whitespace-nowrap">
                    <Link to="/contact">
                      Créer mon site vitrine
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          }
          whySection={{
            title: "Pourquoi un Site Vitrine ?",
            content: (
              <div id="pourquoi" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <FadeInSection>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                            <Users className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold">Crédibilité Professionnelle</h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Un site web moderne rassure vos clients potentiels. <strong>85% des consommateurs</strong> recherchent une entreprise en ligne avant de la contacter.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={100}>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                            <Globe className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold">Visibilité 24/7</h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Votre vitrine digitale est accessible en permanence. Vos clients peuvent découvrir vos services à tout moment depuis Lyon et sa région.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={200}>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold">Génération de Contacts</h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Formulaire de contact optimisé, appel à l'action stratégique. Transformez vos visiteurs en clients grâce au <strong>référencement local Lyon</strong>.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={300}>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                            <Smartphone className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold">Responsive & Mobile</h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          <strong>Plus de 60% du trafic</strong> vient des mobiles. Votre site s'adapte automatiquement à tous les écrans pour une expérience optimale.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                </div>
              </div>
            )
          }}
          expertise={{
            title: "Notre Méthode de Création",
            content: (
              <div id="processus" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Building2,
                      title: "Analyse & Stratégie",
                      description: "Audit de vos besoins, définition de l'arborescence et des objectifs du site vitrine."
                    },
                    {
                      icon: Zap,
                      title: "Design & Développement",
                      description: "Création de maquettes sur-mesure puis développement WordPress responsive et optimisé."
                    },
                    {
                      icon: CheckCircle2,
                      title: "Lancement & Formation",
                      description: "Tests, mise en ligne et formation pour gérer votre site vitrine en autonomie."
                    }
                  ].map((step, index) => (
                    <FadeInSection key={index} delay={index * 100}>
                      <Card className="glass-card h-full">
                        <CardHeader>
                          <div className="p-3 bg-primary/10 rounded-xl w-fit mb-3">
                            <step.icon className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">{step.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            )
          }}
          features={[
            {
              title: "Design Sur-Mesure",
              description: "Maquettes personnalisées reflétant votre identité visuelle et votre positionnement."
            },
            {
              title: "100% Responsive",
              description: "Affichage optimisé sur tous les supports : desktop, tablette et mobile."
            },
            {
              title: "SEO Optimisé",
              description: "Référencement naturel inclus pour être visible sur Google Lyon dès le lancement."
            },
            {
              title: "Performances Rapides",
              description: "Temps de chargement optimisé pour une meilleure expérience utilisateur et SEO."
            },
            {
              title: "Formulaire de Contact",
              description: "Captez les demandes clients avec des formulaires optimisés et sécurisés."
            },
            {
              title: "Formation Incluse",
              description: "Apprenez à gérer votre contenu WordPress en toute autonomie."
            }
          ]}
          pricing={[
            {
              name: "Site Vitrine Essentiel",
              price: "À partir de 2 500€",
              features: [
                "5 pages optimisées",
                "Design responsive",
                "Formulaire de contact",
                "SEO de base",
                "Formation 2h",
                "Hébergement 1 an offert"
              ]
            },
            {
              name: "Site Vitrine Business",
              price: "À partir de 4 000€",
              popular: true,
              features: [
                "10 pages optimisées",
                "Design sur-mesure",
                "Blog intégré",
                "SEO optimisé",
                "Formulaires avancés",
                "Formation 4h",
                "Support 3 mois"
              ]
            },
            {
              name: "Site Vitrine Premium",
              price: "À partir de 6 000€",
              features: [
                "Pages illimitées",
                "Design haut de gamme",
                "Fonctionnalités avancées",
                "SEO premium + netlinking",
                "Formation complète",
                "Maintenance 12 mois"
              ]
            }
          ]}
          faq={[
            {
              question: "Combien de temps pour créer un site vitrine WordPress ?",
              answer: "Le délai moyen est de 4 à 6 semaines selon la complexité. Cela inclut la phase de conception des maquettes, le développement WordPress, l'intégration du contenu et les tests. Nous respectons scrupuleusement les délais convenus."
            },
            {
              question: "Puis-je modifier mon site vitrine après la livraison ?",
              answer: "Oui, absolument ! WordPress est un CMS intuitif. Nous vous formons à la gestion de votre contenu (textes, images, pages). Vous pourrez facilement ajouter des actualités, modifier vos services et mettre à jour vos coordonnées."
            },
            {
              question: "Le site vitrine sera-t-il visible sur Google à Lyon ?",
              answer: "Oui, nous intégrons le référencement naturel (SEO) dès la création. Configuration technique SEO, optimisation des contenus, balises meta, Google My Business. Le positionnement s'améliore progressivement dans les semaines suivant la mise en ligne."
            },
            {
              question: "Qu'est-ce qui est inclus dans un site vitrine WordPress ?",
              answer: "Design responsive, pages personnalisées (accueil, services, à propos, contact), formulaire de contact, optimisation SEO, compatibilité mobile/tablette, formation à l'administration, hébergement première année. Tout est clé en main."
            },
            {
              question: "Puis-je transformer mon site vitrine en e-commerce plus tard ?",
              answer: "Oui, WordPress permet d'évoluer facilement. Nous pouvons ajouter WooCommerce pour transformer votre site vitrine en boutique en ligne. L'architecture initiale est conçue pour faciliter ces évolutions futures."
            },
            {
              question: "Proposez-vous la rédaction des contenus du site vitrine ?",
              answer: "Nous pouvons vous accompagner dans la rédaction ou l'optimisation de vos textes (prestation supplémentaire). Nous vous fournissons également une trame de contenu à compléter si vous préférez rédiger vous-même."
            }
          ]}
          relatedServices={[
            {
              title: "Site E-commerce WordPress",
              description: "Créez votre boutique en ligne avec WooCommerce",
              href: "/sites-ecommerce",
              icon: <ShoppingCart className="h-12 w-12" />
            },
            {
              title: "Référencement SEO",
              description: "Améliorez votre visibilité sur Google",
              href: "/referencement-seo",
              icon: <Search className="h-12 w-12" />
            },
            {
              title: "Maintenance & Support",
              description: "Assurez la pérennité de votre site",
              href: "/maintenance-support",
              icon: <Headphones className="h-12 w-12" />
            }
          ]}
        />

        <PortfolioSection />
        <TeamSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default SiteVitrine;
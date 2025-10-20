import ServiceTemplate from "@/components/ServiceTemplate";
import { Globe, ShoppingCart, FileText, Building2, Package, Languages } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mockupDevices from "@/assets/mockup-devices.png";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const CreationSiteInternet = () => {
  return (
    <>
      <Header />
      <main>
        <ServiceTemplate
          breadcrumb={[
            { label: "Accueil", href: "/" },
            { label: "Création de Site Internet Lyon" }
          ]}
          heroTitle="Création de Site Internet à Lyon"
          heroSubtitle="Solutions web sur-mesure pour TPE, PME et grandes entreprises. Site vitrine, e-commerce, corporate : nous créons votre présence en ligne."
          heroImage={mockupDevices}
      introduction={
        <>
          <p>
            Vous êtes une TPE ou PME à Lyon et vous souhaitez créer votre site internet ? <strong>VKBack</strong>, agence web locale depuis 10+ ans, vous accompagne de A à Z dans la création de votre présence en ligne.
          </p>
          <p>
            Site vitrine, e-commerce, corporate : nous créons des sites professionnels, modernes et optimisés pour Google. Notre équipe de développeurs WordPress certifiés met son expertise à votre service pour un résultat à la hauteur de vos ambitions.
          </p>
        </>
      }
      whySection={{
        title: "Pourquoi Créer un Site Internet en 2025 ?",
        content: (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Visibilité 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Votre entreprise accessible jour et nuit, partout dans le monde.</p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Crédibilité Professionnelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p>75% des consommateurs jugent la crédibilité d'une entreprise via son site web.</p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Génération de Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Formulaires de contact, devis en ligne, captez vos futurs clients.</p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Développement Commercial</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Élargissez votre zone de chalandise au-delà de Lyon et sa région.</p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Communication Efficace</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Présentez vos services, actualités et expertise en un seul endroit.</p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Avantage Concurrentiel</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Vos concurrents ont déjà un site. Ne prenez pas de retard !</p>
              </CardContent>
            </Card>
          </div>
        )
      }}
      expertise={{
        title: "Notre Processus de Création en 6 Étapes",
        content: (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <CardTitle className="text-lg">Analyse des Besoins</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Rendez-vous pour comprendre votre activité, vos objectifs et votre cible. Analyse concurrentielle et benchmark.
                  </p>
                  <p className="text-xs text-primary font-semibold mt-2">Durée : 1 semaine</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <CardTitle className="text-lg">Devis & Cahier des Charges</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Proposition commerciale détaillée sous 24-48h avec planning prévisionnel et tarifs transparents.
                  </p>
                  <p className="text-xs text-primary font-semibold mt-2">Durée : 2-3 jours</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <CardTitle className="text-lg">Maquettes & Design</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Création de wireframes et maquettes graphiques (Figma). Choix des couleurs, typographies et validation.
                  </p>
                  <p className="text-xs text-primary font-semibold mt-2">Durée : 1-2 semaines</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <CardTitle className="text-lg">Développement</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Intégration HTML/CSS/JS, développement WordPress, responsive design et intégration du contenu.
                  </p>
                  <p className="text-xs text-primary font-semibold mt-2">Durée : 2-4 semaines</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">5</span>
                    </div>
                    <CardTitle className="text-lg">Tests & Validation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Tests multi-navigateurs, responsive, performance. Corrections et validation finale.
                  </p>
                  <p className="text-xs text-primary font-semibold mt-2">Durée : 1 semaine</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">6</span>
                    </div>
                    <CardTitle className="text-lg">Formation & Mise en Ligne</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Formation complète (2-4h), documentation, mise en ligne et configuration Analytics.
                  </p>
                  <p className="text-xs text-primary font-semibold mt-2">Durée : 1-2 jours</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-primary">
                Délai total : 4 à 8 semaines selon complexité
              </p>
            </div>
          </div>
        )
      }}
      features={[
        {
          title: "Design Responsive",
          description: "Site adapté à tous les écrans : mobile, tablette, desktop"
        },
        {
          title: "Optimisation SEO",
          description: "Structure optimisée pour le référencement Google"
        },
        {
          title: "Performance Optimale",
          description: "Temps de chargement rapide, images optimisées"
        },
        {
          title: "Sécurité Renforcée",
          description: "Certificat SSL, sauvegardes automatiques, firewall"
        },
        {
          title: "Formation Complète",
          description: "Apprenez à gérer votre site en toute autonomie"
        },
        {
          title: "Support Continu",
          description: "Assistance technique après la mise en ligne"
        }
      ]}
      pricing={[
        {
          name: "Site Vitrine",
          price: "À partir de 4 000€",
          features: [
            "5 à 15 pages",
            "Design sur-mesure",
            "Responsive mobile/tablette",
            "Formulaire de contact",
            "Optimisation SEO de base",
            "Formation incluse",
            "Support 3 mois"
          ]
        },
        {
          name: "Site E-commerce",
          price: "À partir de 5 000€",
          popular: true,
          features: [
            "Boutique en ligne complète",
            "Paiement sécurisé",
            "Gestion des stocks",
            "Espace client",
            "Optimisation SEO avancée",
            "Formation approfondie",
            "Support 6 mois"
          ]
        },
        {
          name: "Site Sur-Mesure",
          price: "Sur devis",
          features: [
            "Fonctionnalités personnalisées",
            "Intégrations API",
            "Multilingue",
            "Espace membre",
            "Application web complexe",
            "Formation complète",
            "Support dédié"
          ]
        }
      ]}
      faq={[
        {
          question: "Quel est le délai moyen pour créer un site internet ?",
          answer: "Le délai varie selon la complexité : 4 semaines pour un site vitrine simple, 6-8 semaines pour un e-commerce. Nous établissons un planning précis dès le début du projet."
        },
        {
          question: "Puis-je modifier mon site moi-même après la livraison ?",
          answer: "Absolument ! Nous utilisons WordPress qui vous permet de modifier facilement vos contenus (textes, images, articles). Nous vous formons pendant 2 à 4 heures à la gestion de votre site."
        },
        {
          question: "Le site sera-t-il visible sur mobile ?",
          answer: "Oui, tous nos sites sont responsive design, c'est-à-dire qu'ils s'adaptent automatiquement à tous les écrans (mobile, tablette, desktop). C'est inclus systématiquement."
        },
        {
          question: "Qu'est-ce qui est inclus dans le prix ?",
          answer: "Le prix comprend : analyse des besoins, maquettes, développement, responsive design, optimisation SEO de base, formation, nom de domaine et hébergement la première année."
        },
        {
          question: "Proposez-vous un contrat de maintenance ?",
          answer: "Oui, nous proposons des contrats de maintenance à partir de 49€/mois incluant : mises à jour, sauvegardes, sécurité, support technique et modifications mineures."
        },
        {
          question: "Mon site sera-t-il bien référencé sur Google ?",
          answer: "Nous optimisons la structure de votre site pour le SEO (balises, vitesse, mobile-friendly). Pour un référencement poussé, nous proposons des prestations SEO complémentaires."
        },
        {
          question: "Puis-je voir des exemples de vos réalisations ?",
          answer: "Bien sûr ! Consultez notre portfolio avec plus de 200 sites créés pour des entreprises lyonnaises de tous secteurs."
        },
        {
          question: "Comment se passe le paiement ?",
          answer: "Nous fonctionnons en 3 fois : 30% à la commande, 40% à la validation des maquettes, 30% à la mise en ligne. Paiement par virement ou chèque."
        }
      ]}
      relatedServices={[
        {
          title: "Référencement SEO",
          description: "Améliorez votre visibilité sur Google",
          href: "/agence-seo-lyon",
          icon: <Globe className="h-12 w-12" />
        },
        {
          title: "Maintenance WordPress",
          description: "Sécurisez et mettez à jour votre site",
          href: "/maintenance-site-web-lyon",
          icon: <FileText className="h-12 w-12" />
        },
        {
          title: "Hébergement Web",
          description: "Hébergement haute performance",
          href: "/hebergement-web-lyon",
          icon: <Building2 className="h-12 w-12" />
        }
      ]}
    />
      </main>
      <ScrollToTop />
    </>
  );
};

export default CreationSiteInternet;

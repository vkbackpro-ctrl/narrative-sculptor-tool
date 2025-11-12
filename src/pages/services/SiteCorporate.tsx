import { Helmet } from "react-helmet";
import { ArrowRight, Building2, Users, Globe, TrendingUp, Shield, Zap, FileText } from "lucide-react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/agence-creation-site-internet-wordpress-lyon.jpg";

const SiteCorporate = () => {
  return (
    <>
      <Helmet>
        <title>Site Corporate WordPress Lyon | Entreprise - VKBack</title>
        <meta 
          name="description" 
          content="Création de site corporate WordPress à Lyon pour entreprises B2B. Site d'entreprise haut de gamme avec espace actionnaires, multilingue et design premium." 
        />
        <meta name="keywords" content="site corporate lyon, site entreprise b2b, création site institutionnel lyon, agence web corporate" />
        <link rel="canonical" href="https://www.vkback.fr/creation-site-corporate-lyon" />
        
        <meta property="og:title" content="Création Site Corporate Lyon | Site Entreprise B2B - VKBack" />
        <meta property="og:description" content="Création de site corporate à Lyon pour entreprises B2B. Site d'entreprise haut de gamme avec espace actionnaires, multilingue et design premium." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vkback.fr/creation-site-corporate-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      
      <main>
        <ServiceTemplate
          breadcrumb={[
            { label: "Agence Web Lyon", href: "/" },
            { label: "Création Site Internet", href: "/creation-site-internet-lyon" },
            { label: "Site Corporate Lyon" }
          ]}
          
          heroTitle="Création de Site Corporate WordPress à Lyon"
          heroSubtitle="Site d'entreprise haut de gamme pour valoriser votre image institutionnelle. Design premium, contenu structuré et fonctionnalités avancées pour le B2B."
          heroImage={heroImage}
          heroAlt="Création site corporate WordPress Lyon - Site entreprise institutionnel B2B design premium multilingue espace actionnaires"
          
          introduction={
            <div id="introduction" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Site Corporate WordPress & Institutionnel à Lyon</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed">
                  Un <strong>site corporate WordPress</strong> est bien plus qu'un simple site vitrine. C'est la vitrine digitale premium de votre entreprise, 
                  conçue pour inspirer confiance à vos partenaires B2B, investisseurs, actionnaires et clients grands comptes.
                </p>
                <p className="text-lg leading-relaxed">
                  Notre agence web à Lyon crée des <strong>sites institutionnels WordPress haut de gamme</strong> : 
                  design élégant et professionnel, architecture de contenu structurée, espaces dédiés (presse, investisseurs, RH) 
                  et fonctionnalités avancées (multilingue, extranet, rapports annuels).
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                      <Building2 className="w-6 h-6 text-primary" />
                      Site Corporate Premium
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Solution complète pour entreprises exigeantes : design sur-mesure, contenus structurés et fonctionnalités professionnelles.
                    </p>
                  </div>
                  <Button asChild size="lg" className="btn-cta whitespace-nowrap">
                    <a href="/contact">
                      Demander un Devis
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          }
          
          whySection={{
            title: "Pourquoi un Site Corporate pour Votre Entreprise ?",
            content: (
              <div id="pourquoi" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FadeInSection>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <Shield className="w-12 h-12 text-primary mb-4" />
                        <CardTitle className="text-2xl">Image Premium</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Un site corporate haut de gamme renforce votre crédibilité auprès de vos prospects B2B, partenaires et investisseurs. 
                          Design élégant et contenus structurés reflètent votre professionnalisme.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={100}>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <Users className="w-12 h-12 text-primary mb-4" />
                        <CardTitle className="text-2xl">Cibles Multiples</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Adressez efficacement toutes vos audiences : clients B2B, candidats, journalistes, actionnaires. 
                          Chaque espace répond aux besoins spécifiques de votre écosystème professionnel.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={200}>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <Globe className="w-12 h-12 text-primary mb-4" />
                        <CardTitle className="text-2xl">Rayonnement International</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Site multilingue pour toucher vos marchés internationaux. Traductions professionnelles et adaptation culturelle 
                          pour une communication globale cohérente.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={300}>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <TrendingUp className="w-12 h-12 text-primary mb-4" />
                        <CardTitle className="text-2xl">Communication Institutionnelle</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Centralisez votre communication corporate : actualités, communiqués de presse, rapports annuels, 
                          documents financiers. Information accessible et organisée.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                </div>
              </div>
            )
          }}
          
          expertise={{
            title: "Notre Approche pour Votre Site Corporate",
            content: (
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Nous développons des sites corporate haut de gamme adaptés aux exigences B2B. 
                  Notre approche stratégique garantit une communication institutionnelle cohérente et professionnelle sur tous vos marchés.
                </p>
              </div>
            )
          }}
          
          features={[
            { title: "Design Premium", description: "Création graphique sur-mesure haut de gamme" },
            { title: "Architecture Multi-Publics", description: "Espaces dédiés clients, presse, RH et investisseurs" },
            { title: "Site Multilingue", description: "Traductions professionnelles pour vos marchés internationaux" },
            { title: "Espace Presse", description: "Communiqués, dossiers et médiathèque pour les journalistes" },
            { title: "Espace Investisseurs", description: "Zone sécurisée pour actionnaires et documents financiers" },
            { title: "SEO B2B", description: "Référencement optimisé pour visibilité professionnelle" }
          ]}
          
          pricing={[
            {
              name: "Site Corporate Essentiel",
              price: "À partir de 8 000€",
              features: [
                "Design professionnel personnalisé",
                "Jusqu'à 15 pages",
                "2 langues",
                "Espace actualités",
                "Espace presse",
                "Formulaires avancés",
                "SEO corporate",
                "Formation 3h",
                "Support 3 mois"
              ]
            },
            {
              name: "Site Corporate Premium",
              price: "À partir de 15 000€",
              features: [
                "Tout du pack Essentiel",
                "Pages illimitées",
                "Multilingue (3+ langues)",
                "Espace investisseurs",
                "Espace carrières/RH",
                "Bibliothèque documents",
                "Extranet sécurisé",
                "SEO international",
                "Formation complète",
                "Support 6 mois"
              ],
              popular: true
            },
            {
              name: "Site Corporate Sur Mesure",
              price: "Sur devis",
              features: [
                "Tout du pack Premium",
                "Développements spécifiques",
                "Intégrations complexes (CRM, ERP)",
                "Intranet/Extranet avancé",
                "Plateforme documentaire",
                "Stratégie digitale globale",
                "Chef de projet dédié",
                "Support illimité",
                "SLA garanti"
              ]
            }
          ]}
          
          faq={[
            {
              question: "Quelle est la différence entre un site corporate et un site vitrine classique ?",
              answer: "Un site corporate est plus complexe qu'un site vitrine : il intègre des espaces dédiés à différentes audiences (presse, investisseurs, RH), du contenu institutionnel structuré (rapports, publications), souvent un aspect multilingue et des fonctionnalités avancées (extranet, bibliothèque documentaire). C'est une plateforme de communication globale pour l'entreprise."
            },
            {
              question: "Proposez-vous la rédaction des contenus corporate ?",
              answer: "Oui, nous pouvons vous accompagner dans la rédaction de vos contenus institutionnels (pages corporate, communiqués, présentations). Nous travaillons avec des rédacteurs spécialisés en communication B2B et corporate pour garantir un ton professionnel et adapté."
            },
            {
              question: "Le site corporate peut-il être multilingue ?",
              answer: "Absolument ! La plupart de nos sites corporate incluent une version multilingue (2 langues minimum). Nous utilisons des plugins professionnels (WPML) et pouvons vous recommander des traducteurs natifs pour garantir la qualité des traductions."
            },
            {
              question: "Pouvez-vous intégrer un espace sécurisé pour nos actionnaires ?",
              answer: "Oui, nous créons des espaces réservés avec authentification pour vos actionnaires, partenaires ou membres. Ces espaces sécurisés permettent de partager des documents confidentiels, rapports financiers et informations privilégiées."
            },
            {
              question: "Combien de temps faut-il pour créer un site corporate ?",
              answer: "La création d'un site corporate prend généralement entre 2 et 4 mois selon la complexité : nombre de pages, langues, fonctionnalités spécifiques et volume de contenus. Les projets sur-mesure avec intégrations complexes peuvent nécessiter jusqu'à 6 mois."
            },
            {
              question: "Assurez-vous la maintenance du site corporate ?",
              answer: "Oui, nous proposons des contrats de maintenance adaptés aux sites corporate : mises à jour de sécurité, sauvegardes, monitoring, support technique et évolutions fonctionnelles. Un site corporate nécessite un suivi professionnel continu."
            }
          ]}
          
          relatedServices={[
            {
              title: "Site Multilingue",
              description: "Déployez votre site en plusieurs langues pour vos marchés internationaux",
              href: "/creation-site-multilingue-lyon",
              icon: <Globe className="h-12 w-12" />
            },
            {
              title: "Référencement SEO",
              description: "Optimisez votre visibilité B2B sur Google",
              href: "/referencement-seo-lyon",
              icon: <Zap className="h-12 w-12" />
            }
          ]}
          
          ctaTitle="Créons Votre Site Corporate Premium"
          ctaDescription="Discutons de votre projet institutionnel. Notre équipe vous accompagne pour créer un site corporate à la hauteur de votre entreprise."
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

export default SiteCorporate;

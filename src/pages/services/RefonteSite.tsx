import { Helmet } from "react-helmet";
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Shield, Zap, RefreshCw, Rocket } from "lucide-react";
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
import heroImage from "@/assets/hero-team-creation-site-lyon.jpg";

const RefonteSite = () => {
  return (
    <>
      <Helmet>
        <title>Refonte Site Internet vers WordPress Lyon | Migration Sécurisée - VKBack</title>
        <meta 
          name="description" 
          content="Refonte et migration vers WordPress à Lyon. Modernisez votre site web : design actuel, performances optimisées, SEO amélioré. Migration sécurisée garantie." 
        />
        <meta name="keywords" content="refonte site internet lyon, modernisation site web, migration wordpress lyon, redesign site lyon" />
        <link rel="canonical" href="https://www.vkback.fr/refonte-site-internet-lyon" />
        
        <meta property="og:title" content="Refonte Site Internet Lyon | Modernisation Site Web - VKBack" />
        <meta property="og:description" content="Refonte de site internet à Lyon. Modernisez votre site web : design actuel, performances optimisées, SEO amélioré." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vkback.fr/refonte-site-internet-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      
      <main>
        <ServiceTemplate
          breadcrumb={[
            { label: "Agence Web Lyon", href: "/" },
            { label: "Création Site Internet", href: "/creation-site-internet-lyon" },
            { label: "Refonte Site Lyon" }
          ]}
          
          heroTitle="Refonte de Site Internet vers WordPress à Lyon"
          heroSubtitle="Modernisez votre site web vieillissant. Design actuel, performances optimisées, expérience utilisateur améliorée et référencement boosté."
          heroImage={heroImage}
          
          introduction={
            <div id="introduction" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Refonte et Migration WordPress à Lyon</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed">
                  Votre site internet date de plusieurs années et ne correspond plus aux standards actuels ? 
                  Une <strong>refonte et migration vers WordPress</strong> permet de repartir sur des bases saines : design moderne, 
                  code optimisé, expérience utilisateur fluide et référencement naturel performant.
                </p>
                <p className="text-lg leading-relaxed">
                  Notre agence web à Lyon analyse votre site existant, identifie les points d'amélioration et 
                  propose une <strong>refonte WordPress complète ou partielle</strong> adaptée à vos objectifs business et votre budget. Migration sécurisée garantie.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                      <RefreshCw className="w-6 h-6 text-primary" />
                      Redonnez Vie à Votre Site
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Audit complet, stratégie de refonte et migration sécurisée pour un site web performant qui génère des résultats.
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
            title: "Pourquoi Refondre Votre Site Internet ?",
            content: (
              <div id="pourquoi" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FadeInSection>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <Sparkles className="w-12 h-12 text-primary mb-4" />
                        <CardTitle className="text-2xl">Design Dépassé</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Un design vieillissant donne une image négative de votre entreprise. Une refonte apporte un design moderne, actuel et aligné avec votre identité de marque.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={100}>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <Rocket className="w-12 h-12 text-primary mb-4" />
                        <CardTitle className="text-2xl">Performances Faibles</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Site lent, code obsolète, compatibilité mobile insuffisante : ces problèmes techniques font fuir vos visiteurs et pénalisent votre SEO.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={200}>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <TrendingUp className="w-12 h-12 text-primary mb-4" />
                        <CardTitle className="text-2xl">Référencement Insuffisant</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Google pénalise les sites mal optimisés. Une refonte intègre les meilleures pratiques SEO pour améliorer votre positionnement et générer du trafic qualifié.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={300}>
                    <Card className="glass-card border-2 hover:border-primary/30 transition-colors h-full">
                      <CardHeader>
                        <Shield className="w-12 h-12 text-primary mb-4" />
                        <CardTitle className="text-2xl">Sécurité Obsolète</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Technologies dépassées, failles de sécurité : votre site est une cible facile pour les pirates. Une refonte sécurise vos données et celles de vos clients.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                </div>
              </div>
            )
          }}
          
          expertise={{
            title: "Notre Processus de Refonte",
            content: (
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Nous analysons en profondeur votre site existant pour identifier les axes d'amélioration. 
                  Notre processus de refonte garantit la préservation de votre référencement tout en modernisant l'ensemble de votre présence web.
                </p>
              </div>
            )
          }}
          
          features={[
            { title: "Audit Complet", description: "Analyse technique, ergonomique et SEO de votre site actuel" },
            { title: "Design Moderne", description: "Refonte graphique complète avec tendances actuelles" },
            { title: "Migration Sécurisée", description: "Transfert de tous vos contenus sans perte de données" },
            { title: "Préservation SEO", description: "Redirections 301 pour maintenir votre positionnement Google" },
            { title: "Performances Optimisées", description: "Vitesse de chargement et Core Web Vitals améliorés" },
            { title: "Formation Incluse", description: "Prise en main de votre site refondu" }
          ]}
          
          pricing={[
            {
              name: "Refonte Express",
              price: "À partir de 2 500€",
              features: [
                "Audit technique",
                "Nouveau design (template premium)",
                "Migration contenus",
                "Optimisation SEO de base",
                "Redirections 301",
                "Responsive mobile",
                "Formation 1h",
                "Support 1 mois"
              ]
            },
            {
              name: "Refonte Pro",
              price: "À partir de 5 000€",
              features: [
                "Tout de la Refonte Express",
                "Design 100% personnalisé",
                "Audit SEO approfondi",
                "Optimisation avancée",
                "Stratégie de contenu",
                "Animations et effets",
                "Formation complète",
                "Support 3 mois"
              ],
              popular: true
            },
            {
              name: "Refonte Premium",
              price: "Sur mesure",
              features: [
                "Tout de la Refonte Pro",
                "Stratégie digitale globale",
                "Développement spécifique",
                "Intégrations complexes",
                "Multilingue",
                "Suivi SEO 6 mois",
                "Consultant dédié",
                "Support prioritaire"
              ]
            }
          ]}
          
          faq={[
            {
              question: "Combien de temps prend une refonte de site internet ?",
              answer: "La durée d'une refonte varie selon l'ampleur du projet : de 4 semaines pour une refonte express à 3-4 mois pour une refonte complète avec développements spécifiques. Après l'audit initial, nous vous proposons un planning détaillé."
            },
            {
              question: "Vais-je perdre mon référencement Google avec une refonte ?",
              answer: "Non, si la refonte est bien gérée. Nous mettons en place des redirections 301 pour chaque URL modifiée, conservons votre architecture SEO optimale et veillons à préserver (voire améliorer) votre positionnement Google."
            },
            {
              question: "Puis-je garder mon nom de domaine et mon hébergement ?",
              answer: "Absolument ! Nous travaillons avec votre infrastructure existante. Si nécessaire, nous recommandons une migration vers un hébergeur plus performant pour optimiser les temps de chargement."
            },
            {
              question: "Que devient mon ancien site pendant la refonte ?",
              answer: "Votre site actuel reste en ligne pendant toute la durée de la refonte. Nous développons le nouveau site sur un environnement de préproduction, puis nous effectuons la bascule lorsque tout est validé."
            },
            {
              question: "La refonte inclut-elle la réécriture des contenus ?",
              answer: "Nous migrons vos contenus existants en les optimisant pour le SEO (structure, balises, mots-clés). La réécriture complète des textes peut être proposée en option avec nos rédacteurs web spécialisés."
            },
            {
              question: "Combien coûte une refonte de site internet à Lyon ?",
              answer: "Le coût d'une refonte varie de 2 500€ à 15 000€+ selon la complexité : nombre de pages, niveau de personnalisation, fonctionnalités spécifiques et travail SEO. Nous établissons un devis personnalisé après audit de votre site actuel."
            }
          ]}
          
          relatedServices={[
            {
              title: "Référencement SEO",
              description: "Boostez la visibilité de votre site refondu",
              href: "/referencement-seo-lyon",
              icon: <Zap className="h-12 w-12" />
            },
            {
              title: "Migration WordPress",
              description: "Migrez vers WordPress depuis n'importe quelle plateforme",
              href: "/migration-site-internet-lyon",
              icon: <RefreshCw className="h-12 w-12" />
            }
          ]}
          
          ctaTitle="Prêt à Moderniser Votre Site ?"
          ctaDescription="Demandez un audit gratuit de votre site actuel. Nous identifions les axes d'amélioration et vous proposons une stratégie de refonte adaptée."
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

export default RefonteSite;

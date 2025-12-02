import { Helmet } from "react-helmet";
import { Calendar, User, ArrowLeft, ArrowRight, CheckCircle, XCircle, Target, TrendingUp, Clock, Euro, Zap, Search, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import FadeInSection from "@/components/FadeInSection";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import blogImage from "@/assets/blog-google-ads.jpg";

const GoogleAdsSEALyon = () => {
  const tableOfContents = [
    { id: "differences", title: "Différences fondamentales" },
    { id: "avantages-seo", title: "Avantages du SEO" },
    { id: "avantages-ads", title: "Avantages de Google Ads" },
    { id: "comparatif-couts", title: "Comparatif des coûts" },
    { id: "scenarios", title: "Quel choix selon votre situation ?" },
    { id: "combiner", title: "Combiner SEO et Google Ads" },
    { id: "conclusion", title: "Conclusion" },
  ];

  const comparatifTableau = [
    { critere: "Délai de résultats", seo: "3-12 mois", ads: "Immédiat", avantage: "ads" },
    { critere: "Coût initial", seo: "Moyen à élevé", ads: "Faible", avantage: "ads" },
    { critere: "Coût récurrent", seo: "Faible", ads: "Élevé", avantage: "seo" },
    { critere: "ROI long terme", seo: "Excellent", ads: "Variable", avantage: "seo" },
    { critere: "Pérennité", seo: "Durable", ads: "Stop = 0 trafic", avantage: "seo" },
    { critere: "Ciblage précis", seo: "Limité", ads: "Très précis", avantage: "ads" },
    { critere: "Crédibilité perçue", seo: "Forte", ads: "Moyenne", avantage: "seo" },
    { critere: "Scalabilité", seo: "Progressive", ads: "Immédiate", avantage: "ads" },
  ];

  const scenariosChoix = [
    {
      situation: "Lancement d'activité / Nouveau site",
      recommandation: "Google Ads + SEO",
      explication: "Google Ads pour générer du trafic immédiat pendant que le SEO se met en place. Investissez 70% en Ads au début, puis inversez progressivement.",
      icon: Zap,
    },
    {
      situation: "Budget limité",
      recommandation: "SEO prioritaire",
      explication: "Le SEO offre le meilleur ROI sur le long terme. Commencez par les optimisations techniques et le contenu, résultats en 6-12 mois.",
      icon: Euro,
    },
    {
      situation: "Secteur très concurrentiel",
      recommandation: "Google Ads + SEO",
      explication: "Le SEO seul prendra trop de temps. Google Ads permet de se positionner immédiatement sur des requêtes où le SEO est très difficile.",
      icon: Target,
    },
    {
      situation: "E-commerce / Ventes directes",
      recommandation: "Google Ads prioritaire",
      explication: "Google Shopping et les campagnes Search génèrent des ventes directes avec un ROI mesurable. Le SEO renforce ensuite la présence organique.",
      icon: BarChart3,
    },
    {
      situation: "Services locaux (Lyon)",
      recommandation: "SEO local + Ads ciblé",
      explication: "Le SEO local (Google My Business) est très efficace. Complétez avec des campagnes Ads géolocalisées pour les périodes clés.",
      icon: Search,
    },
    {
      situation: "Site établi avec trafic existant",
      recommandation: "SEO prioritaire",
      explication: "Optimisez d'abord le SEO existant pour maximiser le trafic gratuit. Google Ads en complément pour des campagnes ponctuelles.",
      icon: TrendingUp,
    },
  ];

  const coutsComparatifs = [
    { type: "Audit initial", seo: "800€ - 2 500€", ads: "Gratuit - 500€" },
    { type: "Setup / Mise en place", seo: "1 500€ - 4 000€", ads: "500€ - 1 500€" },
    { type: "Accompagnement mensuel", seo: "600€ - 2 000€/mois", ads: "300€ - 1 000€/mois + budget pub" },
    { type: "Budget publicitaire", seo: "0€", ads: "500€ - 10 000€+/mois" },
    { type: "Coût par clic moyen (Lyon)", seo: "0€", ads: "0,50€ - 5€ selon secteur" },
  ];

  return (
    <>
      <Helmet>
        <title>Google Ads vs SEO : Que Choisir en 2025 ? | VKBack</title>
        <meta 
          name="description" 
          content="Google Ads ou SEO ? Comparatif complet pour choisir la meilleure stratégie selon votre budget, vos objectifs et votre secteur. Guide décisionnel." 
        />
        <link rel="canonical" href="https://vkback.com/blog/google-ads-sea-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Google Ads vs SEO" }
        ]} 
      />

      <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-8">
              <Button asChild variant="ghost" className="mb-6">
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour au blog
                </Link>
              </Button>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge>Stratégie</Badge>
                <Badge variant="outline">Comparatif</Badge>
                <Badge variant="outline">Guide décisionnel</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Google Ads vs SEO : Que Choisir pour Votre Entreprise ?
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Florian C.
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Mis à jour le 2 Décembre 2025
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  10 min de lecture
                </span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <img 
              src={blogImage} 
              alt="Comparatif Google Ads vs SEO - Quelle stratégie choisir pour votre visibilité en ligne"
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />
          </FadeInSection>

          {/* Sommaire */}
          <FadeInSection delay={150}>
            <Card className="mb-12 bg-muted/30">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Sommaire de l'article
                </h2>
                <nav>
                  <ol className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <li key={item.id}>
                        <a 
                          href={`#${item.id}`}
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <span className="text-primary font-medium">{index + 1}.</span>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </CardContent>
            </Card>
          </FadeInSection>

          <div className="prose prose-lg max-w-none">
            <FadeInSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                "Dois-je investir en SEO ou en Google Ads ?" C'est LA question que se posent toutes les entreprises qui veulent développer leur visibilité en ligne. La réponse n'est pas binaire : elle dépend de votre contexte, vos objectifs et votre budget. Ce guide vous aide à faire le bon choix.
              </p>

              {/* Section 1 - Différences */}
              <section id="differences">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Différences Fondamentales entre SEO et Google Ads</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Search className="w-5 h-5 text-green-500" />
                        SEO (Référencement Naturel)
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Optimiser votre site pour apparaître <strong>gratuitement</strong> dans les résultats organiques de Google.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Trafic gratuit et durable</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Crédibilité renforcée</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Résultats en 3-12 mois</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-blue-500" />
                        Google Ads (SEA)
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Payer pour apparaître <strong>immédiatement</strong> en haut des résultats sponsorisés.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Résultats immédiats</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Ciblage très précis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Coût récurrent (stop = 0 trafic)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border p-3 text-left font-semibold">Critère</th>
                        <th className="border p-3 text-left font-semibold text-green-600">SEO</th>
                        <th className="border p-3 text-left font-semibold text-blue-600">Google Ads</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparatifTableau.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                          <td className="border p-3 font-medium">{row.critere}</td>
                          <td className={`border p-3 ${row.avantage === 'seo' ? 'text-green-600 font-medium' : ''}`}>
                            {row.seo}
                          </td>
                          <td className={`border p-3 ${row.avantage === 'ads' ? 'text-blue-600 font-medium' : ''}`}>
                            {row.ads}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 2 - Avantages SEO */}
              <section id="avantages-seo">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Avantages du SEO</h2>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>ROI exceptionnel sur le long terme</strong>
                      <p className="text-muted-foreground">Une fois positionné, le trafic est gratuit. Un article bien référencé peut générer des visites pendant des années.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Crédibilité et confiance</strong>
                      <p className="text-muted-foreground">75% des utilisateurs ne cliquent pas sur les annonces. Être en position organique renforce la légitimité.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Effet cumulatif</strong>
                      <p className="text-muted-foreground">Chaque optimisation renforce les précédentes. Votre autorité de domaine croît avec le temps.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Indépendance publicitaire</strong>
                      <p className="text-muted-foreground">Pas de dépendance au budget publicitaire. Votre visibilité ne s'effondre pas si vous arrêtez de payer.</p>
                    </div>
                  </li>
                </ul>

                <p className="mb-6">
                  Selon une étude de <a href="https://www.blogdumoderateur.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BDM</a>, le SEO génère en moyenne 5,3x plus de trafic que les réseaux sociaux et les publicités combinés pour les sites B2B.
                </p>
              </section>

              {/* Section 3 - Avantages Ads */}
              <section id="avantages-ads">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Avantages de Google Ads</h2>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Résultats immédiats</strong>
                      <p className="text-muted-foreground">Votre annonce peut être en ligne dans l'heure. Idéal pour les lancements, promotions ou tests de marché.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Ciblage ultra-précis</strong>
                      <p className="text-muted-foreground">Géolocalisation, horaires, appareils, audiences... Vous touchez exactement qui vous voulez.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Mesurabilité parfaite</strong>
                      <p className="text-muted-foreground">Chaque euro dépensé est traçable. Vous connaissez votre coût par acquisition exact.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Scalabilité immédiate</strong>
                      <p className="text-muted-foreground">Augmentez votre budget = augmentez votre visibilité instantanément.</p>
                    </div>
                  </li>
                </ul>

                <Card className="mb-8 border-blue-500/20 bg-blue-500/5">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">📊 Statistique clé</p>
                    <p>
                      Les annonces Google Ads ont un taux de clic moyen de <strong>3,17%</strong> sur le réseau Search. Pour certains secteurs (services juridiques, assurances), ce taux peut atteindre 6-7%.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Section 4 - Coûts */}
              <section id="comparatif-couts">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Comparatif des Coûts</h2>
                
                <p className="mb-4">
                  Voici les fourchettes de prix constatées sur le marché français en 2025 :
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border p-3 text-left font-semibold">Type de coût</th>
                        <th className="border p-3 text-left font-semibold text-green-600">SEO</th>
                        <th className="border p-3 text-left font-semibold text-blue-600">Google Ads</th>
                      </tr>
                    </thead>
                    <tbody>
                      {coutsComparatifs.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                          <td className="border p-3 font-medium">{row.type}</td>
                          <td className="border p-3">{row.seo}</td>
                          <td className="border p-3">{row.ads}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Card className="mb-8 border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">💡 Exemple concret</p>
                    <p>
                      <strong>Budget 1 500€/mois pendant 12 mois :</strong><br />
                      • <strong>100% SEO</strong> : ~18 000€ investis → trafic pérenne qui continue après l'arrêt<br />
                      • <strong>100% Ads</strong> : ~18 000€ investis → trafic à 0 dès l'arrêt des campagnes<br />
                      • <strong>50/50</strong> : équilibre entre résultats immédiats et construction long terme
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Section 5 - Scénarios */}
              <section id="scenarios">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Quel Choix Selon Votre Situation ?</h2>
                
                <div className="space-y-6 mb-8">
                  {scenariosChoix.map((scenario, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <scenario.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1">{scenario.situation}</h3>
                            <Badge className="mb-3" variant="outline">{scenario.recommandation}</Badge>
                            <p className="text-muted-foreground">{scenario.explication}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Section 6 - Combiner */}
              <section id="combiner">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Combiner SEO et Google Ads : La Stratégie Gagnante</h2>
                
                <p className="mb-4">
                  La vraie question n'est pas "SEO OU Google Ads" mais "comment les combiner intelligemment". Voici les synergies possibles :
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Utilisez Ads pour tester vos mots-clés SEO</strong> : avant d'investir 6 mois en SEO sur un mot-clé, testez son potentiel de conversion avec Ads</li>
                  <li><strong>Couvrez les requêtes où le SEO est difficile</strong> : certaines requêtes ultra-concurrentielles nécessitent Ads en complément</li>
                  <li><strong>Remarketing</strong> : ciblez en Ads les visiteurs venus du SEO qui n'ont pas converti</li>
                  <li><strong>Double présence</strong> : être en organique ET en payant augmente la confiance et le taux de clic global</li>
                  <li><strong>Saisonnalité</strong> : boostez avec Ads pendant les pics d'activité (fêtes, soldes...)</li>
                </ul>

                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Nos services complémentaires</h3>
                    <p className="mb-4 text-muted-foreground">
                      Chez VKBack, nous proposons des stratégies combinées SEO + Ads adaptées à votre budget :
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild variant="outline" size="sm">
                        <Link to="/referencement-seo-lyon">Référencement SEO</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/google-ads-sea-lyon">Google Ads & SEA</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/services/audit-seo-lyon">Audit SEO</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Conclusion */}
              <section id="conclusion">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Conclusion</h2>
                
                <p className="mb-4">
                  <strong>En résumé :</strong>
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>✅ <strong>Choisissez le SEO</strong> si vous avez du temps et cherchez un ROI durable</li>
                  <li>✅ <strong>Choisissez Google Ads</strong> si vous avez besoin de résultats immédiats et un budget récurrent</li>
                  <li>✅ <strong>Combinez les deux</strong> pour une stratégie complète et équilibrée</li>
                </ul>

                <p className="mb-8">
                  La meilleure stratégie dépend de votre situation unique. N'hésitez pas à nous contacter pour un diagnostic personnalisé de votre visibilité en ligne.
                </p>
              </section>
            </FadeInSection>
          </div>

          {/* CTA */}
          <FadeInSection delay={300}>
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Besoin d'aide pour choisir ?</h3>
              <p className="text-muted-foreground mb-6">
                Discutons de votre projet pour définir la stratégie la plus adaptée.
              </p>
              <Button asChild size="lg" className="btn-cta">
                <Link to="/contact">
                  Demander un diagnostic gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </FadeInSection>

          {/* Articles liés */}
          <FadeInSection delay={400}>
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Articles liés</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/blog/referencement-seo-lyon" className="group">
                  <Card className="h-full transition-all hover:border-primary/50">
                    <CardContent className="p-6">
                      <Badge className="mb-3">SEO</Badge>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        Comment Choisir son Agence SEO à Lyon ?
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        10 critères essentiels pour bien choisir.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/blog/prix-creation-site-internet-lyon" className="group">
                  <Card className="h-full transition-all hover:border-primary/50">
                    <CardContent className="p-6">
                      <Badge className="mb-3">Guide</Badge>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        Combien Coûte un Site Internet en 2025 ?
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Tarifs détaillés selon le type de site.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </FadeInSection>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default GoogleAdsSEALyon;
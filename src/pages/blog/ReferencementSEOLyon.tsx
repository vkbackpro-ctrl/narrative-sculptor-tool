import { Helmet } from "react-helmet";
import { Calendar, User, ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, Target, Award, MessageSquare, TrendingUp, Clock, Euro, Shield, Users } from "lucide-react";
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
import blogImage from "@/assets/blog-seo-lyon.jpg";

const ReferencementSEOLyon = () => {
  const tableOfContents = [
    { id: "pourquoi-agence", title: "Pourquoi faire appel à une agence SEO ?" },
    { id: "criteres-essentiels", title: "10 critères pour bien choisir" },
    { id: "red-flags", title: "Les signaux d'alerte" },
    { id: "questions-poser", title: "Questions à poser" },
    { id: "budget-tarifs", title: "Budget et tarifs pratiqués" },
    { id: "lyon-specificites", title: "Spécificités du marché lyonnais" },
    { id: "conclusion", title: "Conclusion" },
  ];

  const criteresSelection = [
    {
      numero: 1,
      titre: "Transparence sur les méthodes",
      description: "Une bonne agence explique clairement ses techniques SEO. Méfiez-vous de celles qui restent vagues ou parlent de 'secrets'.",
      icon: Shield,
    },
    {
      numero: 2,
      titre: "Références et études de cas",
      description: "Demandez des exemples concrets de résultats obtenus pour des clients similaires à votre secteur.",
      icon: Award,
    },
    {
      numero: 3,
      titre: "Audit gratuit ou payant de qualité",
      description: "Un audit initial montre le niveau d'expertise. Un audit bâclé = prestations bâclées.",
      icon: Target,
    },
    {
      numero: 4,
      titre: "Reporting régulier et compréhensible",
      description: "Rapports mensuels clairs avec KPIs pertinents : positions, trafic organique, conversions.",
      icon: TrendingUp,
    },
    {
      numero: 5,
      titre: "Équipe dédiée et interlocuteur unique",
      description: "Avoir un chef de projet attitré facilite la communication et le suivi.",
      icon: Users,
    },
    {
      numero: 6,
      titre: "Pas de promesses irréalistes",
      description: "Aucune agence sérieuse ne peut garantir la première position Google. Le SEO prend du temps.",
      icon: Clock,
    },
    {
      numero: 7,
      titre: "Contrats flexibles",
      description: "Évitez les engagements de 24 mois minimum. 6-12 mois est raisonnable pour voir des résultats.",
      icon: CheckCircle,
    },
    {
      numero: 8,
      titre: "Expertise technique prouvée",
      description: "L'agence maîtrise-t-elle le SEO technique, le contenu ET le netlinking ? Les trois sont essentiels.",
      icon: Shield,
    },
    {
      numero: 9,
      titre: "Connaissance de votre secteur",
      description: "Une expérience dans votre domaine (e-commerce, services, B2B) est un plus significatif.",
      icon: Target,
    },
    {
      numero: 10,
      titre: "Tarifs cohérents avec le marché",
      description: "Ni trop cher ni suspicieusement bas. Un SEO de qualité a un coût justifié.",
      icon: Euro,
    },
  ];

  const redFlags = [
    "Garantie de première position Google",
    "Tarifs anormalement bas (< 300€/mois)",
    "Aucune transparence sur les méthodes utilisées",
    "Pas de références vérifiables",
    "Engagement contractuel très long (> 18 mois)",
    "Promesse de résultats en moins de 3 mois",
    "Communication difficile ou absente",
    "Pas d'audit préalable avant devis",
    "Utilisation de techniques black hat (achat massif de liens)",
    "Absence de reporting mensuel",
  ];

  const questionsAgence = [
    {
      question: "Quelles techniques SEO utilisez-vous ?",
      bonne_reponse: "Réponse détaillée sur l'optimisation technique, le contenu et le netlinking white hat",
      mauvaise_reponse: "Réponse vague ou refus de répondre pour 'secret professionnel'",
    },
    {
      question: "Pouvez-vous me montrer des résultats concrets ?",
      bonne_reponse: "Études de cas avec données chiffrées, évolution des positions, captures d'écran",
      mauvaise_reponse: "Pas de preuves ou uniquement des témoignages non vérifiables",
    },
    {
      question: "Comment mesurez-vous le succès ?",
      bonne_reponse: "KPIs clairs : positions, trafic organique, taux de conversion, CA généré",
      mauvaise_reponse: "Métriques floues comme 'visibilité' ou 'notoriété'",
    },
    {
      question: "Quelle est la durée minimale d'engagement ?",
      bonne_reponse: "6 à 12 mois avec possibilité de résiliation raisonnable",
      mauvaise_reponse: "24 mois minimum sans possibilité de sortie",
    },
    {
      question: "Qui sera mon interlocuteur principal ?",
      bonne_reponse: "Un chef de projet dédié avec ses coordonnées directes",
      mauvaise_reponse: "Pas d'interlocuteur attitré ou uniquement un commercial",
    },
    {
      question: "Que se passe-t-il si je ne suis pas satisfait ?",
      bonne_reponse: "Processus clair de réclamation et ajustement de la stratégie",
      mauvaise_reponse: "Pas de réponse ou renvoi vers les conditions générales",
    },
  ];

  const tarifsMarche = [
    { service: "Audit SEO complet", fourchette: "800€ - 2 500€", frequence: "One-shot" },
    { service: "Accompagnement SEO mensuel", fourchette: "600€ - 2 500€", frequence: "Par mois" },
    { service: "Création de contenu SEO", fourchette: "150€ - 500€", frequence: "Par article" },
    { service: "Netlinking", fourchette: "400€ - 1 500€", frequence: "Par mois" },
    { service: "SEO local", fourchette: "400€ - 1 000€", frequence: "Par mois" },
    { service: "Formation SEO", fourchette: "500€ - 1 500€", frequence: "Par jour" },
  ];

  return (
    <>
      <Helmet>
        <title>Comment Choisir son Agence SEO à Lyon ? Guide 2025</title>
        <meta 
          name="description" 
          content="10 critères essentiels pour bien choisir votre agence SEO à Lyon. Red flags, questions à poser, tarifs du marché. Guide pratique pour ne pas se tromper." 
        />
        <link rel="canonical" href="https://vkback.com/blog/referencement-seo-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Comment choisir son agence SEO" }
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
                <Badge>SEO</Badge>
                <Badge variant="outline">Guide d'achat</Badge>
                <Badge variant="outline">Lyon</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comment Choisir son Agence SEO à Lyon : 10 Critères Essentiels
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
                  12 min de lecture
                </span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <img 
              src={blogImage} 
              alt="Comment choisir son agence SEO à Lyon - guide pratique avec critères de sélection"
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />
          </FadeInSection>

          {/* Sommaire cliquable */}
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
                Vous cherchez une agence SEO à Lyon pour améliorer votre visibilité sur Google ? Le marché lyonnais compte des dizaines de prestataires, du freelance spécialisé à la grande agence digitale. Comment s'y retrouver et éviter les mauvaises surprises ? Ce guide vous donne <strong>10 critères concrets</strong> pour faire le bon choix.
              </p>

              {/* Section 1 */}
              <section id="pourquoi-agence">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Pourquoi Faire Appel à une Agence SEO ?</h2>
                
                <p className="mb-4">
                  Le référencement naturel est devenu une discipline complexe qui combine :
                </p>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Expertise technique</strong> : optimisation du code, vitesse, mobile-first</li>
                  <li><strong>Stratégie de contenu</strong> : recherche de mots-clés, rédaction optimisée</li>
                  <li><strong>Netlinking</strong> : acquisition de liens de qualité</li>
                  <li><strong>Veille constante</strong> : Google met à jour son algorithme des centaines de fois par an</li>
                </ul>

                <p className="mb-6">
                  Une agence SEO professionnelle apporte cette triple compétence et suit les évolutions de Google au quotidien. Selon une étude de <a href="https://www.journaldunet.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">JDN</a>, les entreprises qui investissent en SEO obtiennent en moyenne un ROI de 5,3x leur investissement sur 3 ans.
                </p>

                <Card className="mb-8 border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">💡 À savoir</p>
                    <p className="font-medium">
                      À Lyon, la concurrence SEO est forte dans des secteurs comme l'immobilier, la restauration, les services juridiques et la santé. Un accompagnement professionnel peut faire la différence entre la page 1 et l'invisibilité.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Section 2 - Les 10 critères */}
              <section id="criteres-essentiels">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">10 Critères pour Bien Choisir son Agence SEO</h2>
                
                <div className="grid gap-6 mb-8">
                  {criteresSelection.map((critere) => (
                    <Card key={critere.numero} className="border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-bold">{critere.numero}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{critere.titre}</h3>
                            <p className="text-muted-foreground">{critere.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <p className="mb-6">
                  Pour approfondir ces critères, consultez également le guide de la <a href="https://www.cnil.fr/fr/comprendre-le-rgpd" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CNIL</a> sur les bonnes pratiques numériques, notamment pour les aspects liés à la collecte de données dans les audits SEO.
                </p>
              </section>

              {/* Section 3 - Red Flags */}
              <section id="red-flags">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Les Signaux d'Alerte (Red Flags)</h2>
                
                <p className="mb-4">
                  Certains comportements doivent vous alerter immédiatement. Fuyez si vous observez :
                </p>

                <Card className="mb-8 border-destructive/30 bg-destructive/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                      <h3 className="font-bold text-destructive">À éviter absolument</h3>
                    </div>
                    <ul className="space-y-3">
                      {redFlags.map((flag, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-destructive mt-1">✗</span>
                          <span>{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <p className="mb-6">
                  Ces pratiques sont souvent le signe d'agences qui utilisent des techniques "black hat" (contraires aux guidelines Google). Les risques ? <strong>Pénalités Google</strong> pouvant aller jusqu'à la désindexation complète de votre site. Consultez les <a href="https://developers.google.com/search/docs/essentials" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Search Essentials</a> pour comprendre les pratiques recommandées.
                </p>
              </section>

              {/* Section 4 - Questions à poser */}
              <section id="questions-poser">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">6 Questions à Poser lors du Premier Rendez-vous</h2>
                
                <p className="mb-6">
                  Lors de votre premier contact avec une agence SEO, posez ces questions et analysez les réponses :
                </p>

                <div className="space-y-6 mb-8">
                  {questionsAgence.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <MessageSquare className="w-5 h-5 text-primary" />
                          <h3 className="font-bold">{item.question}</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-green-500/10 rounded-lg">
                            <p className="text-sm font-medium text-green-700 dark:text-green-400 mb-1">✓ Bonne réponse</p>
                            <p className="text-sm">{item.bonne_reponse}</p>
                          </div>
                          <div className="p-4 bg-red-500/10 rounded-lg">
                            <p className="text-sm font-medium text-red-700 dark:text-red-400 mb-1">✗ Mauvaise réponse</p>
                            <p className="text-sm">{item.mauvaise_reponse}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Section 5 - Budget et tarifs */}
              <section id="budget-tarifs">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Budget et Tarifs Pratiqués à Lyon</h2>
                
                <p className="mb-4">
                  Les tarifs SEO varient selon l'expérience de l'agence, la complexité du projet et la concurrence dans votre secteur. Voici les fourchettes de prix constatées sur le marché lyonnais en 2025 :
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border p-3 text-left font-semibold">Service</th>
                        <th className="border p-3 text-left font-semibold">Fourchette de prix</th>
                        <th className="border p-3 text-left font-semibold">Fréquence</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tarifsMarche.map((tarif, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                          <td className="border p-3">{tarif.service}</td>
                          <td className="border p-3 font-medium">{tarif.fourchette}</td>
                          <td className="border p-3 text-muted-foreground">{tarif.frequence}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Card className="mb-8 border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">💰 Conseil budget</p>
                    <p>
                      Pour un accompagnement SEO efficace, prévoyez un budget minimum de <strong>600€/mois sur 12 mois</strong>. Un investissement inférieur risque de produire des résultats insuffisants et de vous décourager. Le SEO est un marathon, pas un sprint.
                    </p>
                  </CardContent>
                </Card>

                <p className="mb-6">
                  Ces tarifs sont conformes aux études de marché publiées par <a href="https://www.frenchweb.fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FrenchWeb</a> et le <a href="https://www.blogdumoderateur.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Blog du Modérateur</a>.
                </p>
              </section>

              {/* Section 6 - Spécificités Lyon */}
              <section id="lyon-specificites">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Spécificités du Marché Lyonnais</h2>
                
                <p className="mb-4">
                  Lyon est la 2ème métropole française avec plus de <strong>2 millions d'habitants</strong> dans l'aire urbaine. Quelques particularités à connaître :
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Forte concurrence locale</strong> : les requêtes "X Lyon" sont très compétitives</li>
                  <li><strong>Importance du SEO local</strong> : Google My Business est crucial pour les commerces de proximité</li>
                  <li><strong>Écosystème tech dynamique</strong> : nombreuses agences web et SEO de qualité variable</li>
                  <li><strong>Spécificités par arrondissement</strong> : le 6ème et le 2ème ont des comportements de recherche différents</li>
                </ul>

                <p className="mb-6">
                  Privilégiez une agence qui connaît bien le tissu économique lyonnais et ses spécificités. La <a href="https://www.lyon-metropole.cci.fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CCI Lyon Métropole</a> publie régulièrement des études sur l'économie numérique locale.
                </p>

                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Nos services SEO à Lyon</h3>
                    <p className="mb-4 text-muted-foreground">
                      Chez VKBack, nous accompagnons les entreprises lyonnaises depuis 2011. Découvrez nos prestations :
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild variant="outline" size="sm">
                        <Link to="/referencement-seo-lyon">Référencement SEO</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/services/audit-seo-lyon">Audit SEO</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/services/seo-local-lyon">SEO Local</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/services/consultant-seo-lyon">Consultant SEO</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Conclusion */}
              <section id="conclusion">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Conclusion : Prenez le Temps de Bien Choisir</h2>
                
                <p className="mb-4">
                  Choisir son agence SEO est une décision importante qui aura un impact durable sur votre visibilité en ligne. En résumé :
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>✅ Vérifiez les références et études de cas</li>
                  <li>✅ Exigez de la transparence sur les méthodes</li>
                  <li>✅ Méfiez-vous des promesses trop belles</li>
                  <li>✅ Prévoyez un budget réaliste (min. 600€/mois)</li>
                  <li>✅ Privilégiez les contrats flexibles (6-12 mois)</li>
                  <li>✅ Demandez un interlocuteur dédié</li>
                </ul>

                <p className="mb-8">
                  N'hésitez pas à rencontrer plusieurs agences avant de vous décider. Un bon feeling et une communication fluide sont aussi importants que l'expertise technique.
                </p>
              </section>
            </FadeInSection>
          </div>

          {/* CTA */}
          <FadeInSection delay={300}>
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Vous Cherchez une Agence SEO à Lyon ?</h3>
              <p className="text-muted-foreground mb-6">
                Discutons de votre projet et de vos objectifs de visibilité.
              </p>
              <Button asChild size="lg" className="btn-cta">
                <Link to="/contact">
                  Parlons de votre projet
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
                <Link to="/blog/prix-creation-site-internet-lyon" className="group">
                  <Card className="h-full transition-all hover:border-primary/50">
                    <CardContent className="p-6">
                      <Badge className="mb-3">Guide</Badge>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        Combien Coûte un Site Internet en 2025 ?
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Tarifs détaillés pour tous types de sites web.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/blog/pourquoi-choisir-woocommerce" className="group">
                  <Card className="h-full transition-all hover:border-primary/50">
                    <CardContent className="p-6">
                      <Badge className="mb-3">E-commerce</Badge>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        Pourquoi Choisir WooCommerce pour votre Boutique ?
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Comparatif et avantages de WooCommerce.
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

export default ReferencementSEOLyon;
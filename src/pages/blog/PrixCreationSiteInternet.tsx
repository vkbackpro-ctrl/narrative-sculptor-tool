import { Helmet } from "react-helmet";
import SchemaOrg from "@/components/SchemaOrg";
import { Calendar, User, ArrowLeft, ArrowRight, Clock, TrendingUp, Euro, CheckCircle, AlertTriangle } from "lucide-react";
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
import RelatedServices from "@/components/RelatedServices";
import blogImage from "@/assets/blog-prix-creation-site.jpg";

const PrixCreationSiteInternet = () => {
  return (
    <>
      <Helmet>
        <title>Prix Site Internet Lyon 2025 : Guide Complet - VKBack</title>
        <meta 
          name="description" 
          content="Tarifs création site internet Lyon 2025 : prix site vitrine, e-commerce, corporate. Guide complet des coûts réels. Devis gratuit." 
        />
        <link rel="canonical" href="https://vkback.com/blog/prix-creation-site-internet-lyon" />
      </Helmet>

      <SchemaOrg 
        type="blog"
        pageUrl="https://vkback.com/blog/prix-creation-site-internet-lyon"
        pageTitle="Prix Site Internet Lyon 2025 : Guide Complet"
        pageDescription="Tarifs création site internet Lyon 2025 : prix site vitrine, e-commerce, corporate. Guide complet des coûts réels."
        articleTitle="Prix Création Site Internet Lyon 2025 : Guide Complet"
        articleDescription="Tarifs création site internet Lyon 2025 : prix site vitrine, e-commerce, corporate. Guide complet des coûts réels."
        articlePublishedDate="2025-01-15"
        articleModifiedDate="2025-01-15"
        articleAuthor="Marc D."
        breadcrumbs={[
          { name: "Accueil", url: "https://vkback.com/" },
          { name: "Blog", url: "https://vkback.com/blog/" },
          { name: "Prix Création Site Internet", url: "https://vkback.com/blog/prix-creation-site-internet-lyon" }
        ]}
      />

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Prix Création Site Internet Lyon 2025" }
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
                <Badge>Création Web</Badge>
                <Badge variant="outline">Tarifs 2025</Badge>
                <Badge variant="outline">Lyon</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Prix Création Site Internet Lyon 2025 : Le Guide Complet des Tarifs
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Marc D.
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  15 Janvier 2025
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
              alt="Guide des prix pour la création de site internet à Lyon en 2025"
              className="w-full h-96 object-cover rounded-lg mb-12"
            />
          </FadeInSection>

          {/* Sommaire */}
          <FadeInSection delay={150}>
            <Card className="mb-12 bg-muted/30">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">📑 Sommaire de l'article</h2>
                <ul className="space-y-2 text-sm">
                  <li><a href="#marche-lyon" className="text-primary hover:underline">1. Le marché de la création web à Lyon</a></li>
                  <li><a href="#prix-site-vitrine" className="text-primary hover:underline">2. Prix d'un site vitrine professionnel</a></li>
                  <li><a href="#prix-ecommerce" className="text-primary hover:underline">3. Tarif site e-commerce WooCommerce</a></li>
                  <li><a href="#prix-corporate" className="text-primary hover:underline">4. Coût site corporate et institutionnel</a></li>
                  <li><a href="#facteurs-prix" className="text-primary hover:underline">5. Les facteurs qui influencent le prix</a></li>
                  <li><a href="#couts-annexes" className="text-primary hover:underline">6. Coûts annexes à prévoir</a></li>
                  <li><a href="#agence-vs-freelance" className="text-primary hover:underline">7. Agence vs Freelance : que choisir ?</a></li>
                  <li><a href="#pourquoi-lyon" className="text-primary hover:underline">8. Pourquoi choisir une agence lyonnaise ?</a></li>
                  <li><a href="#questions-devis" className="text-primary hover:underline">9. Questions à poser avant de signer</a></li>
                </ul>
              </CardContent>
            </Card>
          </FadeInSection>

          <div className="prose prose-lg max-w-none">
            <FadeInSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                <strong>Combien coûte réellement la création d'un site internet à Lyon en 2025 ?</strong> C'est LA question que se posent tous les entrepreneurs et responsables marketing avant de lancer leur projet digital. Dans ce guide exhaustif, nous vous dévoilons les <strong>tarifs pratiqués par les agences web lyonnaises</strong>, les facteurs qui influencent les prix, et nos conseils pour obtenir le meilleur rapport qualité-prix.
              </p>

              <div className="p-6 bg-primary/10 rounded-lg mb-8 border-l-4 border-primary">
                <p className="text-sm mb-0">
                  <strong>💡 À retenir :</strong> Selon une étude de la{" "}
                  <a 
                    href="https://www.fevad.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    FEVAD
                  </a>
                  , 87% des consommateurs effectuent des recherches en ligne avant d'acheter. Un site web professionnel n'est plus une option, c'est une nécessité business.
                </p>
              </div>

              <h2 id="marche-lyon" className="text-3xl font-bold mt-12 mb-6">1. Le Marché de la Création Web à Lyon en 2025</h2>
              
              <p className="mb-4">
                Lyon, deuxième pôle économique de France après Paris selon{" "}
                <a 
                  href="https://www.insee.fr/fr/statistiques/1893198" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  l'INSEE
                </a>
                , compte plus de <strong>500 agences web et freelances spécialisés</strong>. Cette concurrence est une bonne nouvelle pour les entreprises : elle tire les prix vers le bas tout en maintenant un niveau de qualité élevé.
              </p>

              <p className="mb-4">
                La métropole lyonnaise héberge un écosystème digital dynamique, porté par des structures comme{" "}
                <a 
                  href="https://www.digital-league.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Digital League
                </a>
                {" "}(le cluster numérique régional) et de nombreuses écoles du web (Digital Campus, HETIC, etc.).
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <Card className="text-center p-4">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold">+15%</p>
                  <p className="text-sm text-muted-foreground">Croissance du marché web Lyon 2024</p>
                </Card>
                <Card className="text-center p-4">
                  <Euro className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold">2 500€ - 25 000€</p>
                  <p className="text-sm text-muted-foreground">Fourchette de prix moyenne</p>
                </Card>
                <Card className="text-center p-4">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm text-muted-foreground">Agences web à Lyon</p>
                </Card>
              </div>

              <h2 id="prix-site-vitrine" className="text-3xl font-bold mt-12 mb-6">2. Prix d'un Site Vitrine Professionnel à Lyon</h2>
              
              <p className="mb-4">
                Un <Link to="/creation-site-vitrine-lyon" className="text-primary hover:underline font-semibold">site vitrine professionnel</Link> permet de présenter votre entreprise, vos services et de générer des contacts qualifiés. C'est le type de site le plus demandé par les TPE/PME lyonnaises.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Tarifs site vitrine selon la gamme</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left">Gamme</th>
                      <th className="border border-border p-3 text-left">Prix</th>
                      <th className="border border-border p-3 text-left">Inclus</th>
                      <th className="border border-border p-3 text-left">Idéal pour</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-semibold">Essentiel</td>
                      <td className="border border-border p-3">2 500€ - 3 500€</td>
                      <td className="border border-border p-3">5-7 pages, design responsive, formulaire contact, SEO de base</td>
                      <td className="border border-border p-3">Artisans, indépendants</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-3 font-semibold">Business</td>
                      <td className="border border-border p-3">4 000€ - 6 000€</td>
                      <td className="border border-border p-3">10-15 pages, design sur-mesure, blog intégré, animations, SEO optimisé</td>
                      <td className="border border-border p-3">PME, professions libérales</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-semibold">Premium</td>
                      <td className="border border-border p-3">6 000€ - 10 000€</td>
                      <td className="border border-border p-3">20+ pages, design premium, multilingue, espace client, intégrations avancées</td>
                      <td className="border border-border p-3">ETI, groupes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-4">
                Chez <strong>VKBack</strong>, nous proposons des <Link to="/tarifs/" className="text-primary hover:underline">tarifs transparents</Link> pour la création de sites vitrines WordPress, avec un excellent rapport qualité-prix adapté aux entreprises lyonnaises.
              </p>

              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg mb-6">
                <p className="flex items-start gap-2 text-sm mb-0">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Attention aux prix trop bas :</strong> Un site vitrine à moins de 1 500€ cache souvent des compromis sur la qualité (templates génériques, pas de SEO, support limité). Comme le rappelle{" "}
                    <a 
                      href="https://www.journaldunet.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Le Journal du Net
                    </a>
                    , "un site web est un investissement, pas une dépense".
                  </span>
                </p>
              </div>

              <h2 id="prix-ecommerce" className="text-3xl font-bold mt-12 mb-6">3. Tarif Site E-commerce WooCommerce à Lyon</h2>
              
              <p className="mb-4">
                Une <Link to="/creation-site-ecommerce-lyon" className="text-primary hover:underline font-semibold">boutique en ligne WooCommerce</Link> nécessite plus de développement et d'intégrations qu'un site vitrine. Les fonctionnalités de paiement, gestion de stock et logistique ajoutent de la complexité.
              </p>

              <p className="mb-4">
                Selon{" "}
                <a 
                  href="https://woocommerce.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  WooCommerce
                </a>
                , cette solution propulse plus de <strong>6,5 millions de boutiques</strong> dans le monde, ce qui en fait la plateforme e-commerce la plus utilisée.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Grille tarifaire e-commerce 2025</h3>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left">Type de boutique</th>
                      <th className="border border-border p-3 text-left">Budget</th>
                      <th className="border border-border p-3 text-left">Fonctionnalités</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-semibold">E-commerce starter</td>
                      <td className="border border-border p-3">5 000€ - 8 000€</td>
                      <td className="border border-border p-3">Jusqu'à 100 produits, paiement CB/PayPal, gestion stock basique, frais de port</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-3 font-semibold">E-commerce business</td>
                      <td className="border border-border p-3">8 000€ - 12 000€</td>
                      <td className="border border-border p-3">100-500 produits, filtres avancés, avis clients, cross-selling, emails automatisés</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-semibold">E-commerce avancé</td>
                      <td className="border border-border p-3">12 000€ - 20 000€</td>
                      <td className="border border-border p-3">Catalogue illimité, multilingue, multi-devises, intégration ERP/CRM, marketplace</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-4">
                Découvrez nos offres de <Link to="/boutique-woocommerce-lyon" className="text-primary hover:underline">création de boutique WooCommerce</Link> adaptées à tous les budgets, ou notre service de <Link to="/migration-woocommerce-lyon" className="text-primary hover:underline">migration WooCommerce</Link> si vous avez déjà une boutique existante.
              </p>

              <h2 id="prix-corporate" className="text-3xl font-bold mt-12 mb-6">4. Coût Site Corporate et Institutionnel</h2>
              
              <p className="mb-4">
                Les <Link to="/creation-site-corporate-lyon" className="text-primary hover:underline font-semibold">sites corporate</Link> pour grandes entreprises et institutions demandent un niveau de finition supérieur, une charte graphique élaborée et souvent des fonctionnalités sur-mesure.
              </p>

              <p className="mb-4">
                Budget à prévoir : <strong>8 000€ à 25 000€+</strong> pour un site institutionnel complet à Lyon. Ce type de projet inclut généralement :
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Audit stratégique préalable</strong> : Analyse de l'existant, benchmark concurrentiel</li>
                <li><strong>Direction artistique</strong> : Design premium aligné sur l'identité de marque</li>
                <li><strong>Architecture complexe</strong> : Multi-sites, portails intranet/extranet</li>
                <li><strong>Fonctionnalités avancées</strong> : Espace membres, annuaire, agenda, documentation</li>
                <li><strong>Accessibilité RGAA</strong> : Conformité aux normes d'accessibilité (obligatoire pour le secteur public)</li>
              </ul>

              <h2 id="facteurs-prix" className="text-3xl font-bold mt-12 mb-6">5. Les Facteurs qui Influencent le Prix</h2>

              <p className="mb-4">
                Comprendre ce qui fait varier le prix d'un site web vous aidera à mieux définir votre budget et vos priorités.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">5.1. Le nombre de pages et la structure</h3>
              <p className="mb-4">
                Un site de 5 pages ne demande pas le même travail qu'un site de 50 pages. Chaque page nécessite conception, intégration et optimisation SEO. Comptez <strong>150€ à 300€ par page supplémentaire</strong> en moyenne.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">5.2. Le design : template vs sur-mesure</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Template personnalisé</strong> : 800€ - 2 000€ (adaptation d'un thème existant)</li>
                <li><strong>Design 100% sur-mesure</strong> : 3 000€ - 8 000€ (création originale par un webdesigner)</li>
              </ul>
              <p className="mb-4">
                Chez VKBack, nous travaillons avec le builder <strong>Divi</strong> qui permet un excellent compromis entre personnalisation et budget maîtrisé.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">5.3. Les fonctionnalités spécifiques</h3>
              <p className="mb-4">
                Certaines fonctionnalités augmentent significativement le budget :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Espace client sécurisé</strong> : +1 500€ à 4 000€</li>
                <li><strong>Système de réservation</strong> : +1 000€ à 3 000€</li>
                <li><strong>Site multilingue</strong> : +30% à 50% du budget (voir notre page <Link to="/creation-site-multilingue-lyon" className="text-primary hover:underline">site multilingue</Link>)</li>
                <li><strong>Intégration CRM/ERP</strong> : +2 000€ à 8 000€ selon la complexité</li>
                <li><strong>Calculateur ou configurateur</strong> : +1 500€ à 5 000€</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">5.4. L'optimisation SEO</h3>
              <p className="mb-4">
                Le <Link to="/referencement-seo-lyon" className="text-primary hover:underline font-semibold">référencement naturel</Link> est souvent sous-estimé dans les devis. Pourtant, selon les experts du site{" "}
                <a 
                  href="https://www.abondance.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Abondance
                </a>
                , le SEO génère plus de <strong>50% du trafic web</strong>. Un site sans SEO est un site invisible.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>SEO de base</strong> (inclus) : Balises meta, URLs optimisées, sitemap</li>
                <li><strong>SEO avancé</strong> (+500€ à 1 500€) : Recherche mots-clés, optimisation on-page complète</li>
                <li><strong>SEO premium</strong> (+2 000€ à 5 000€) : Stratégie de contenu, cocon sémantique, netlinking</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">5.5. Les contenus (textes et médias)</h3>
              <p className="mb-4">
                La rédaction web professionnelle et les visuels de qualité ont un coût :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Rédaction web SEO</strong> : 80€ à 200€ par page</li>
                <li><strong>Shooting photo professionnel</strong> : 400€ à 1 500€ la demi-journée</li>
                <li><strong>Vidéo de présentation</strong> : 1 000€ à 5 000€</li>
                <li><strong>Banque d'images</strong> : 100€ à 300€ pour un lot de visuels premium</li>
              </ul>

              <h2 id="couts-annexes" className="text-3xl font-bold mt-12 mb-6">6. Coûts Annexes à Prévoir (Budget Récurrent)</h2>
              
              <p className="mb-4">
                Au-delà de la création initiale, votre site web engendre des coûts récurrents qu'il faut anticiper :
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left">Poste de dépense</th>
                      <th className="border border-border p-3 text-left">Coût annuel</th>
                      <th className="border border-border p-3 text-left">Remarques</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3"><Link to="/hebergement-web-lyon" className="text-primary hover:underline">Hébergement web</Link></td>
                      <td className="border border-border p-3">180€ - 600€/an</td>
                      <td className="border border-border p-3">Serveurs France recommandés pour le SEO local</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-3">Nom de domaine</td>
                      <td className="border border-border p-3">10€ - 50€/an</td>
                      <td className="border border-border p-3">.fr ou .com recommandé</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3"><Link to="/maintenance-support-wordpress-lyon" className="text-primary hover:underline">Maintenance WordPress</Link></td>
                      <td className="border border-border p-3">700€ - 1 800€/an</td>
                      <td className="border border-border p-3">Mises à jour, sauvegardes, sécurité</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-3"><Link to="/services/certificat-ssl-wordpress-lyon" className="text-primary hover:underline">Certificat SSL</Link></td>
                      <td className="border border-border p-3">Gratuit - 150€/an</td>
                      <td className="border border-border p-3">Let's Encrypt gratuit ou SSL EV payant</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Extensions premium</td>
                      <td className="border border-border p-3">100€ - 500€/an</td>
                      <td className="border border-border p-3">Licences plugins pro (SEO, cache, backup)</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-3"><Link to="/referencement-seo-lyon" className="text-primary hover:underline">SEO continu</Link></td>
                      <td className="border border-border p-3">3 600€ - 24 000€/an</td>
                      <td className="border border-border p-3">Optionnel mais recommandé pour la croissance</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-primary/10 rounded-lg mb-8">
                <p className="text-sm mb-0">
                  <strong>💰 Budget annuel récurrent minimum :</strong> Comptez environ <strong>1 000€ à 2 500€/an</strong> pour maintenir un site professionnel en bon état de marche. C'est un investissement, pas un coût : votre site génère du business 24h/24.
                </p>
              </div>

              <h2 id="agence-vs-freelance" className="text-3xl font-bold mt-12 mb-6">7. Agence vs Freelance : Que Choisir à Lyon ?</h2>

              <p className="mb-4">
                C'est une question fréquente. Voici les avantages et inconvénients de chaque option :
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Freelance WordPress</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Prix</strong> : 20% à 40% moins cher qu'une agence</li>
                <li><strong>Avantages</strong> : Relation directe, flexibilité, réactivité</li>
                <li><strong>Inconvénients</strong> : Un seul point de contact, disponibilité variable, risque de pérennité</li>
                <li><strong>Idéal pour</strong> : Petits projets, budgets serrés, projets simples</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Agence Web</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Prix</strong> : Plus élevé mais prestations complètes</li>
                <li><strong>Avantages</strong> : Équipe pluridisciplinaire, garantie de suivi, expertise diversifiée</li>
                <li><strong>Inconvénients</strong> : Process parfois plus longs, communication indirecte possible</li>
                <li><strong>Idéal pour</strong> : Projets ambitieux, sites e-commerce, besoins de maintenance</li>
              </ul>

              <p className="mb-4">
                <strong>Notre conseil :</strong> Privilégiez une <strong>petite agence de 2 à 5 personnes</strong> qui combine les avantages des deux : expertise d'agence avec la réactivité et les tarifs d'un freelance. C'est précisément le positionnement de VKBack.
              </p>

              <h2 id="pourquoi-lyon" className="text-3xl font-bold mt-12 mb-6">8. Pourquoi Choisir une Agence Web à Lyon ?</h2>
              
              <p className="mb-4">
                Faire appel à une <strong>agence web locale à Lyon</strong> présente plusieurs avantages concrets :
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <Card className="p-4">
                  <h4 className="font-bold mb-2">🤝 Proximité</h4>
                  <p className="text-sm text-muted-foreground">Rendez-vous physiques pour discuter de votre projet. Nous vous accueillons dans nos locaux ou nous déplaçons chez vous.</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-bold mb-2">📍 SEO Local Optimisé</h4>
                  <p className="text-sm text-muted-foreground">Nous connaissons le marché lyonnais et optimisons votre référencement pour les recherches locales ("plombier Lyon 6", etc.).</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-bold mb-2">⚡ Support Réactif</h4>
                  <p className="text-sm text-muted-foreground">Assistance technique rapide, en français, dans le même fuseau horaire. Pas d'attente interminable avec un support offshore.</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-bold mb-2">🔗 Réseau Local</h4>
                  <p className="text-sm text-muted-foreground">Nous travaillons avec des partenaires lyonnais (photographes, rédacteurs, graphistes) pour des projets complets.</p>
                </Card>
              </div>

              <p className="mb-4">
                Comme le souligne le réseau des{" "}
                <a 
                  href="https://www.cci.fr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  CCI de France
                </a>
                , travailler avec des prestataires locaux renforce le tissu économique régional et facilite les collaborations long terme.
              </p>

              <h2 id="questions-devis" className="text-3xl font-bold mt-12 mb-6">9. Questions à Poser Avant de Signer un Devis</h2>

              <p className="mb-4">
                Avant de vous engager avec une agence ou un freelance, posez ces questions essentielles :
              </p>

              <ol className="list-decimal pl-6 mb-6 space-y-3">
                <li><strong>Qui sera mon interlocuteur principal ?</strong> Évitez les agences où vous ne parlez jamais au développeur.</li>
                <li><strong>Le site sera-t-il responsive (mobile) ?</strong> En 2025, c'est non-négociable.</li>
                <li><strong>L'hébergement et le nom de domaine sont-ils inclus ?</strong> Clarifiez ce qui est compris.</li>
                <li><strong>Serai-je propriétaire du code et des contenus ?</strong> Vérifiez les clauses de propriété intellectuelle.</li>
                <li><strong>Quelle formation est prévue ?</strong> Assurez-vous de pouvoir gérer votre site ensuite.</li>
                <li><strong>Que se passe-t-il après la livraison ?</strong> Support inclus ? Durée ? Coûts de maintenance ?</li>
                <li><strong>Combien de révisions sont comprises ?</strong> Évitez les mauvaises surprises.</li>
                <li><strong>Pouvez-vous me montrer des réalisations similaires ?</strong> Vérifiez l'expérience dans votre secteur.</li>
              </ol>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion : Investir dans un Site Web Rentable</h2>
              
              <p className="mb-4">
                Le prix d'un site internet à Lyon varie selon vos besoins et ambitions :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Site vitrine professionnel</strong> : 2 500€ à 10 000€</li>
                <li><strong>Site e-commerce WooCommerce</strong> : 5 000€ à 20 000€</li>
                <li><strong>Site corporate institutionnel</strong> : 8 000€ à 25 000€+</li>
              </ul>

              <p className="mb-4">
                <strong>Notre conseil final :</strong> Ne cherchez pas le prix le plus bas, cherchez le meilleur <strong>retour sur investissement</strong>. Un site à 3 000€ qui génère 10 prospects par mois est plus rentable qu'un site à 1 000€ qui n'en génère aucun.
              </p>

              <p className="mb-8">
                Chez <strong>VKBack</strong>, nous proposons des <Link to="/tarifs/" className="text-primary hover:underline">tarifs transparents</Link> adaptés aux TPE/PME lyonnaises. <strong>Première année d'hébergement offerte</strong> et formation WordPress incluse pour tous nos clients. Consultez nos <Link to="/realisations/" className="text-primary hover:underline">réalisations</Link> pour voir des exemples concrets de notre travail.
              </p>
            </FadeInSection>
          </div>

          <FadeInSection delay={300}>
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Obtenez Votre Devis Personnalisé</h3>
              <p className="text-muted-foreground mb-6">
                Recevez un devis détaillé et transparent pour votre projet web sous 24h. Échange téléphonique offert pour bien comprendre vos besoins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-cta">
                  <Link to="/contact">
                    Demander un devis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/tarifs/">
                    Voir nos tarifs
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInSection>

          {/* Services liés */}
          <RelatedServices
            services={[
              { title: "Création Site Vitrine", description: "Site web professionnel pour présenter votre activité", href: "/creation-site-vitrine-lyon", price: "2 500€" },
              { title: "Site E-commerce", description: "Boutique en ligne WooCommerce clé en main", href: "/creation-site-ecommerce-lyon", price: "5 000€" },
              { title: "Site Corporate", description: "Site d'entreprise haut de gamme et sur-mesure", href: "/creation-site-corporate-lyon", price: "8 000€" },
              { title: "Refonte de Site", description: "Modernisez votre site existant", href: "/refonte-site-internet-lyon", price: "3 000€" },
              { title: "Site One Page", description: "Site moderne sur une seule page", href: "/creation-site-one-page-lyon", price: "1 800€" },
              { title: "Tous nos tarifs", description: "Consultez notre grille tarifaire complète", href: "/tarifs" },
            ]}
          />

          {/* Articles connexes */}
          <FadeInSection delay={400}>
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Articles Connexes</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/blog/pourquoi-choisir-woocommerce" className="group">
                  <Card className="p-4 h-full hover:border-primary transition-colors">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">Pourquoi Choisir WooCommerce en 2025 ?</h4>
                    <p className="text-sm text-muted-foreground mt-2">Découvrez tous les avantages de la solution e-commerce n°1 mondiale.</p>
                  </Card>
                </Link>
                <Link to="/blog/maintenance-wordpress" className="group">
                  <Card className="p-4 h-full hover:border-primary transition-colors">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">Maintenance WordPress : Guide Essentiel</h4>
                    <p className="text-sm text-muted-foreground mt-2">Tout savoir sur les coûts et l'importance de la maintenance WordPress.</p>
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

export default PrixCreationSiteInternet;

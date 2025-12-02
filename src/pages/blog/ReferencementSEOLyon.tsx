import { Helmet } from "react-helmet";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import FadeInSection from "@/components/FadeInSection";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import blogImage from "@/assets/blog-wordpress-cms.jpg";

const ReferencementSEOLyon = () => {
  return (
    <>
      <Helmet>
        <title>SEO Lyon : Premier sur Google 2025 - VKBack</title>
        <meta 
          name="description" 
          content="Guide complet du référencement naturel à Lyon. Stratégies SEO local, optimisation technique et création de contenu pour dominer Google." 
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
          { label: "Référencement SEO Lyon" }
        ]} 
      />

      <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-8">
              <Button asChild variant="ghost" className="mb-6">
                <a href="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour au blog
                </a>
              </Button>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge>SEO</Badge>
                <Badge variant="outline">Lyon</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Référencement SEO Lyon : Comment Être Premier sur Google
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Florian C.
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  8 Janvier 2025
                </span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <img 
              src={blogImage} 
              alt="Référencement SEO Lyon"
              className="w-full h-96 object-cover rounded-lg mb-12"
            />
          </FadeInSection>

          <div className="prose prose-lg max-w-none">
            <FadeInSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                Le référencement naturel (SEO) est indispensable pour être visible sur Google à Lyon. Découvrez notre guide complet pour dominer les résultats de recherche locaux en 2025.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Pourquoi le SEO est Crucial à Lyon ?</h2>
              <p className="mb-4">
                Lyon est la 3ème ville de France avec une forte concurrence digitale. Pour se démarquer, le <strong>référencement naturel</strong> est essentiel :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>75% des clics</strong> vont aux 3 premiers résultats Google</li>
                <li><strong>SEO local</strong> : 46% des recherches Google ont une intention locale</li>
                <li><strong>ROI durable</strong> : Le SEO génère du trafic gratuit sur le long terme</li>
                <li><strong>Crédibilité</strong> : Être bien positionné renforce la confiance</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Les 3 Piliers du SEO</h2>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">1. SEO Technique</h3>
              <p className="mb-4">
                L'optimisation technique est la fondation d'un bon référencement :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Vitesse de chargement</strong> : Site rapide (Score PageSpeed &gt;90)</li>
                <li><strong>Mobile-friendly</strong> : Design responsive parfait sur mobile</li>
                <li><strong>Structure URL</strong> : URLs propres et descriptives</li>
                <li><strong>HTTPS</strong> : Certificat SSL obligatoire</li>
                <li><strong>Sitemap XML</strong> : Faciliter l'indexation Google</li>
                <li><strong>Schema.org</strong> : Données structurées pour les rich snippets</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">2. Contenu Optimisé</h3>
              <p className="mb-4">
                Le contenu est roi en SEO. Créez du contenu de qualité :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Mots-clés</strong> : Recherche et intégration naturelle des requêtes cibles</li>
                <li><strong>Balises Hn</strong> : Structure hiérarchique claire (H1, H2, H3)</li>
                <li><strong>Meta descriptions</strong> : 150-160 caractères engageants</li>
                <li><strong>Images optimisées</strong> : Alt text descriptifs, compression WebP</li>
                <li><strong>Contenu long</strong> : Articles 1500+ mots pour se positionner</li>
                <li><strong>Fraîcheur</strong> : Mises à jour régulières du contenu</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">3. Netlinking</h3>
              <p className="mb-4">
                Les backlinks (liens entrants) sont essentiels pour la crédibilité :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Qualité &gt; Quantité</strong> : Privilégier les sites autoritaires</li>
                <li><strong>Liens locaux</strong> : Annuaires Lyon, partenaires locaux</li>
                <li><strong>Guest blogging</strong> : Articles invités sur blogs thématiques</li>
                <li><strong>Relations presse</strong> : Mentions dans médias locaux</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">SEO Local Lyon : Stratégies Gagnantes</h2>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Google My Business</h3>
              <p className="mb-4">
                Fiche Google My Business optimisée = visibilité dans le Local Pack (les 3 premiers résultats locaux) :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Informations complètes</strong> : Adresse Lyon, horaires, téléphone</li>
                <li><strong>Photos professionnelles</strong> : Vitrine, équipe, réalisations</li>
                <li><strong>Avis clients</strong> : Solliciter des avis Google authentiques</li>
                <li><strong>Posts GMB</strong> : Publier régulièrement actualités et offres</li>
                <li><strong>Q&amp;R</strong> : Répondre aux questions fréquentes</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Contenu Géolocalisé</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Pages par zone</strong> : Créer pages dédiées par arrondissement Lyon</li>
                <li><strong>Mots-clés locaux</strong> : "plombier Lyon 6", "avocat Lyon Bellecour"</li>
                <li><strong>Adresse visible</strong> : Footer avec adresse complète Lyon</li>
                <li><strong>Carte intégrée</strong> : Google Maps sur page contact</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Erreurs SEO à Éviter</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Duplicate content</strong> : Contenu dupliqué pénalisé par Google</li>
                <li><strong>Keyword stuffing</strong> : Suroptimisation = pénalité</li>
                <li><strong>Liens toxiques</strong> : Acheter des backlinks de mauvaise qualité</li>
                <li><strong>Site lent</strong> : Temps de chargement &gt;3 secondes = abandon</li>
                <li><strong>Pas de stratégie mobile</strong> : 60% des recherches sur mobile</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Combien de Temps pour Voir des Résultats ?</h2>
              <p className="mb-4">
                Le SEO est un investissement long terme :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>3-6 mois</strong> : Premiers résultats visibles (mots-clés longue traîne)</li>
                <li><strong>6-12 mois</strong> : Positionnement stable sur requêtes moyennes</li>
                <li><strong>12-18 mois</strong> : Top 3 sur requêtes compétitives Lyon</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Budget SEO à Lyon</h2>
              <p className="mb-4">
                Tarifs indicatifs pour le référencement naturel à Lyon :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Audit SEO</strong> : 800€ - 1 500€</li>
                <li><strong>SEO mensuel</strong> : 600€ - 2 000€/mois selon concurrence</li>
                <li><strong>Optimisation technique</strong> : 1 500€ - 3 000€ (one-shot)</li>
                <li><strong>Création contenu SEO</strong> : 150€ - 400€ par article</li>
                <li><strong>Netlinking</strong> : 400€ - 1 500€/mois</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
              <p className="mb-8">
                Le <strong>référencement SEO à Lyon</strong> demande expertise technique, création de contenu de qualité et stratégie netlinking solide. C'est un investissement rentable sur le long terme qui génère du trafic qualifié et des leads. Notre agence vous accompagne pour dominer Google sur vos requêtes stratégiques.
              </p>
            </FadeInSection>
          </div>

          <FadeInSection delay={300}>
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Boostez Votre Visibilité Google</h3>
              <p className="text-muted-foreground mb-6">
                Demandez votre devis SEO personnalisé.
              </p>
              <Button asChild size="lg" className="btn-cta">
                <a href="/contact">
                  Demander un devis SEO
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </FadeInSection>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default ReferencementSEOLyon;

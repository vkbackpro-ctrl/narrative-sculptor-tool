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
import blogImage from "@/assets/blog-prix-creation-site.jpg";

const GoogleAdsSEALyon = () => {
  return (
    <>
      <Helmet>
        <title>Google Ads Lyon : Pub Rentable 2025 - VKBack</title>
        <meta 
          name="description" 
          content="Comment créer des campagnes Google Ads rentables à Lyon. Budget, ciblage, mots-clés et optimisation ROI." 
        />
        <link rel="canonical" href="https://vkback.fr/blog/google-ads-sea-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Google Ads Lyon" }
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
                <Badge>Publicité</Badge>
                <Badge variant="outline">Google Ads</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Google Ads Lyon : Stratégie Pub en Ligne Rentable 2025
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Florian C.
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  2 Janvier 2025
                </span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <img 
              src={blogImage} 
              alt="Google Ads Lyon"
              className="w-full h-96 object-cover rounded-lg mb-12"
            />
          </FadeInSection>

          <div className="prose prose-lg max-w-none">
            <FadeInSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                Google Ads (anciennement AdWords) est LE levier marketing pour générer rapidement des leads qualifiés à Lyon. Découvrez comment créer des campagnes publicitaires rentables en 2025.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Qu'est-ce que Google Ads ?</h2>
              <p className="mb-4">
                <strong>Google Ads</strong> est la régie publicitaire de Google qui vous permet d'afficher vos annonces en haut des résultats de recherche. Vous ne payez que lorsqu'un utilisateur clique sur votre annonce (CPC = Coût Par Clic).
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Résultats immédiats</strong> : Trafic dès le lancement de la campagne</li>
                <li><strong>Ciblage précis</strong> : Par mots-clés, localisation, horaires, appareils</li>
                <li><strong>Budget maîtrisé</strong> : Vous fixez le budget quotidien maximum</li>
                <li><strong>ROI mesurable</strong> : Tracking conversions et performance en temps réel</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Pourquoi Utiliser Google Ads à Lyon ?</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Concurrence locale</strong> : Devancer vos concurrents lyonnais sur les recherches clés</li>
                <li><strong>Intention d'achat forte</strong> : Les utilisateurs cherchent activement un produit/service</li>
                <li><strong>Complémentaire au SEO</strong> : Couvrir 100% de la première page Google</li>
                <li><strong>Flexibilité</strong> : Campagnes activables/désactivables à volonté</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Les Types de Campagnes Google Ads</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">1. Campagnes Réseau de Recherche</h3>
              <p className="mb-4">
                Annonces textuelles affichées dans les résultats Google. <strong>Idéal pour</strong> : générer des leads, vendre des services/produits locaux.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Format</strong> : Titre (30 car) + Description (90 car) + URL</li>
                <li><strong>Position</strong> : Au-dessus des résultats organiques</li>
                <li><strong>CPC moyen Lyon</strong> : 1€ à 5€ selon secteur</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">2. Campagnes Display</h3>
              <p className="mb-4">
                Bannières visuelles sur millions de sites partenaires Google. <strong>Idéal pour</strong> : notoriété de marque, remarketing.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">3. Campagnes Shopping</h3>
              <p className="mb-4">
                Fiches produits avec image, prix et avis. <strong>Idéal pour</strong> : e-commerce, conversion directe.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">4. Campagnes Vidéo YouTube</h3>
              <p className="mb-4">
                Publicités vidéo sur YouTube. <strong>Idéal pour</strong> : engagement, storytelling de marque.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Comment Créer une Campagne Google Ads Rentable ?</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Étape 1 : Recherche de Mots-Clés</h3>
              <p className="mb-4">
                Sélectionner les bons mots-clés = 70% du succès :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Longue traîne</strong> : "plombier urgence Lyon 6" plutôt que "plombier"</li>
                <li><strong>Intention d'achat</strong> : "acheter", "devis", "prix", "tarif"</li>
                <li><strong>Mots-clés négatifs</strong> : Exclure "gratuit", "formation", "emploi"</li>
                <li><strong>Volume vs concurrence</strong> : Trouver l'équilibre rentabilité/trafic</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Étape 2 : Structure des Campagnes</h3>
              <p className="mb-4">
                Organisation claire = meilleure performance :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>1 campagne = 1 objectif</strong> : Leads / Ventes / Trafic</li>
                <li><strong>Groupes d'annonces thématiques</strong> : 10-20 mots-clés similaires max</li>
                <li><strong>3-4 annonces par groupe</strong> : Tester messages différents</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Étape 3 : Rédaction Annonces Performantes</h3>
              <p className="mb-4">
                Une bonne annonce = CTR élevé + Quality Score élevé = CPC réduit :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Titre accrocheur</strong> : Inclure mot-clé + bénéfice clair</li>
                <li><strong>Description persuasive</strong> : USP, urgence, call-to-action</li>
                <li><strong>Extensions</strong> : Liens site, appels, avis, prix</li>
                <li><strong>A/B testing</strong> : Tester 2-3 variantes en continu</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Étape 4 : Optimisation Landing Page</h3>
              <p className="mb-4">
                60% des clics partent si la page de destination déçoit :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Cohérence annonce/page</strong> : Message identique</li>
                <li><strong>Vitesse de chargement</strong> : &lt;2 secondes</li>
                <li><strong>CTA visible</strong> : Bouton d'action clair en haut de page</li>
                <li><strong>Mobile-friendly</strong> : 70% du trafic Google Ads sur mobile</li>
                <li><strong>Formulaire court</strong> : 3-5 champs maximum</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Étape 5 : Tracking & Conversion</h3>
              <p className="mb-4">
                Impossible d'optimiser sans mesurer :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Google Analytics 4</strong> : Lier compte Ads + Analytics</li>
                <li><strong>Conversion tracking</strong> : Formulaires, appels, achats</li>
                <li><strong>Remarketing</strong> : Recibler visiteurs non convertis</li>
                <li><strong>Tableau de bord</strong> : KPIs clés (CTR, CPC, taux conversion, ROI)</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Budget Google Ads à Lyon</h2>
              <p className="mb-4">
                Quel budget prévoir pour Google Ads à Lyon ?
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Budget pub minimum</strong> : 500€/mois (test secteur peu concurrentiel)</li>
                <li><strong>Budget pub recommandé</strong> : 1 000€ - 3 000€/mois pour résultats significatifs</li>
                <li><strong>Gestion campagne</strong> : 15% du budget pub ou 400€/mois minimum</li>
                <li><strong>Setup initial</strong> : 600€ - 1 200€ (configuration compte, tracking, campagnes)</li>
              </ul>
              <p className="mb-4">
                <strong>Exemple</strong> : Budget total 2 000€/mois = 1 700€ publicité Google + 300€ gestion agence
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Erreurs à Éviter</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Ciblage trop large</strong> : Gaspiller budget sur clics non qualifiés</li>
                <li><strong>Pas de mots-clés négatifs</strong> : Payer pour trafic inutile</li>
                <li><strong>Landing page générique</strong> : Envoyer vers homepage au lieu de page dédiée</li>
                <li><strong>Aucun suivi conversion</strong> : Impossible de mesurer ROI</li>
                <li><strong>Abandonner trop vite</strong> : Google Ads demande 3 mois d'optimisation minimum</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Google Ads vs SEO : Que Choisir ?</h2>
              <p className="mb-4">
                La meilleure stratégie = combiner les deux :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Court terme</strong> : Google Ads pour résultats immédiats</li>
                <li><strong>Long terme</strong> : SEO pour trafic gratuit durable</li>
                <li><strong>Synergie</strong> : Données Ads pour identifier meilleurs mots-clés SEO</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
              <p className="mb-8">
                <strong>Google Ads à Lyon</strong> est un levier puissant pour générer des leads qualifiés rapidement. Avec une stratégie bien pensée, un ciblage précis et des landing pages optimisées, le ROI peut être excellent. Notre agence gère vos campagnes Google Ads de A à Z pour maximiser votre rentabilité publicitaire.
              </p>
            </FadeInSection>
          </div>

          <FadeInSection delay={300}>
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Lancez Vos Campagnes Google Ads</h3>
              <p className="text-muted-foreground mb-6">
                Notre agence certifiée Google Partner vous accompagne.
              </p>
              <Button asChild size="lg" className="btn-cta">
                <a href="/contact">
                  Demander un devis Google Ads
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

export default GoogleAdsSEALyon;

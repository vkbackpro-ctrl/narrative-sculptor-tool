import { Helmet } from "react-helmet";
import { Calendar, User, ArrowLeft, ArrowRight, MapPin, Clock } from "lucide-react";
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

const WordCampLyon = () => {
  return (
    <>
      <Helmet>
        <title>WordCamp Lyon 2025 : Événement WordPress - VKBack</title>
        <meta 
          name="description" 
          content="Le WordCamp Lyon 2025 revient ! Programme, speakers, ateliers WordPress et networking entre passionnés du CMS." 
        />
        <link rel="canonical" href="https://vkback.fr/blog/wordcamp-lyon-2025" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Blog", href: "/blog" },
          { label: "WordCamp Lyon 2025" }
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
                <Badge>Événement</Badge>
                <Badge variant="outline">WordPress</Badge>
                <Badge variant="outline">Lyon</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                WordCamp Lyon 2025 : Rendez-vous de la Communauté WordPress
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Marc D.
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  3 Janvier 2025
                </span>
              </div>

              <div className="p-6 bg-primary/10 rounded-lg mb-8">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">📅 Informations Pratiques</h3>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <strong>Date :</strong> Samedi 10 Mai 2025
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <strong>Lieu :</strong> La Sucrière, Confluence Lyon
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <strong>Horaires :</strong> 9h - 18h
                      </p>
                    </div>
                  </div>
                  <Button size="lg" className="btn-cta whitespace-nowrap">
                    S'inscrire gratuitement
                  </Button>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <img 
              src={blogImage} 
              alt="WordCamp Lyon 2025"
              className="w-full h-96 object-cover rounded-lg mb-12"
            />
          </FadeInSection>

          <div className="prose prose-lg max-w-none">
            <FadeInSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                Le WordCamp Lyon fait son grand retour le 10 mai 2025 ! Événement incontournable de la communauté WordPress en Auvergne-Rhône-Alpes, découvrez le programme, les speakers et tout ce qu'il faut savoir pour ne rien rater.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Qu'est-ce qu'un WordCamp ?</h2>
              <p className="mb-4">
                Un <strong>WordCamp</strong> est une conférence communautaire organisée localement autour de <strong>WordPress</strong>. Ces événements rassemblent développeurs, designers, créateurs de contenu, blogueurs et passionnés du CMS le plus utilisé au monde.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Gratuit ou tarif symbolique</strong> : Accessible à tous (environ 20€)</li>
                <li><strong>Organisé par des bénévoles</strong> : Communauté WordPress locale</li>
                <li><strong>Conférences</strong> : Talks de 20-40 minutes sur des sujets variés</li>
                <li><strong>Networking</strong> : Rencontrer d'autres professionnels WordPress</li>
                <li><strong>After Party</strong> : Soirée conviviale pour prolonger les échanges</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Programme du WordCamp Lyon 2025</h2>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">Track Débutant</h3>
              <p className="mb-4">
                Pour ceux qui découvrent WordPress ou veulent consolider leurs bases :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>9h30 - 10h</strong> : Accueil café & networking</li>
                <li><strong>10h - 10h40</strong> : "Créer son premier site WordPress en 2025"</li>
                <li><strong>11h - 11h40</strong> : "Choisir et personnaliser son thème WordPress"</li>
                <li><strong>12h - 12h40</strong> : "Extensions indispensables pour un site professionnel"</li>
                <li><strong>14h - 14h40</strong> : "Sécuriser son site WordPress : les bases"</li>
                <li><strong>15h - 15h40</strong> : "SEO WordPress : les fondamentaux"</li>
                <li><strong>16h - 16h40</strong> : "WooCommerce : créer sa boutique facilement"</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Track Avancé</h3>
              <p className="mb-4">
                Pour développeurs et utilisateurs confirmés :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>10h - 10h40</strong> : "Développer des blocs Gutenberg custom"</li>
                <li><strong>11h - 11h40</strong> : "WordPress Headless : REST API et React"</li>
                <li><strong>12h - 12h40</strong> : "Optimisation performances : cache et CDN"</li>
                <li><strong>14h - 14h40</strong> : "Hooks et filtres WordPress avancés"</li>
                <li><strong>15h - 15h40</strong> : "Créer un thème WordPress FSE (Full Site Editing)"</li>
                <li><strong>16h - 16h40</strong> : "Sécurité avancée : WAF, 2FA et hardening"</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Track Business</h3>
              <p className="mb-4">
                Pour freelances, agences et entrepreneurs :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>10h - 10h40</strong> : "Vendre des prestations WordPress : tarifs et positionnement"</li>
                <li><strong>11h - 11h40</strong> : "Maintenance WordPress : créer une offre récurrente"</li>
                <li><strong>12h - 12h40</strong> : "Trouver des clients WordPress en 2025"</li>
                <li><strong>14h - 14h40</strong> : "Gérer plusieurs sites WordPress efficacement"</li>
                <li><strong>15h - 15h40</strong> : "Monétiser un blog WordPress en 2025"</li>
                <li><strong>16h - 16h40</strong> : "Créer une agence WordPress rentable"</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Speakers Confirmés</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Amaury Balmer</strong> : Core Contributor WordPress, fondateur WP Media (Imagify, WP Rocket)</li>
                <li><strong>Aurélien Denis</strong> : SEO & WordPress expert, créateur SEOPress</li>
                <li><strong>Jenny Dupuy</strong> : Développeuse WordPress, spécialiste FSE et Gutenberg</li>
                <li><strong>Nicolas Mercatili</strong> : Agence WordPress Lyon, expert WooCommerce</li>
                <li><strong>Lycia Diaz</strong> : WordPress evangelist, auteure et formatrice</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Ateliers Pratiques</h2>
              <p className="mb-4">
                Des sessions hands-on en petits groupes (20 personnes max) :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>10h - 12h</strong> : "Créer son premier bloc Gutenberg" (développeurs)</li>
                <li><strong>14h - 16h</strong> : "Migrer un site WordPress vers le cloud" (tous niveaux)</li>
                <li><strong>14h - 16h</strong> : "Design system avec WordPress FSE" (designers/développeurs)</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Zone Sponsors & Exposants</h2>
              <p className="mb-4">
                Rencontrez les acteurs majeurs de l'écosystème WordPress français :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>WP Media</strong> : WP Rocket, Imagify</li>
                <li><strong>Kinsta</strong> : Hébergement WordPress managé</li>
                <li><strong>Divi by Elegant Themes</strong> : Page builder n°1</li>
                <li><strong>O2Switch</strong> : Hébergeur WordPress français</li>
                <li><strong>Agences locales</strong> : VKBack, WP Trads, Capitaine WP</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Contributor Day (Dimanche 11 Mai)</h2>
              <p className="mb-4">
                Le dimanche est dédié à la <strong>contribution à WordPress</strong> (participation libre) :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Core</strong> : Développement WordPress</li>
                <li><strong>Traduction</strong> : Traduire WordPress et extensions en français</li>
                <li><strong>Documentation</strong> : Améliorer la doc officielle</li>
                <li><strong>Support</strong> : Répondre aux questions du forum WordPress.org</li>
                <li><strong>Plugins/Thèmes</strong> : Contribuer à des projets open-source</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">After Party</h2>
              <p className="mb-4">
                Samedi soir, prolongez l'expérience lors de la soirée officielle :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Lieu</strong> : Bar Le Ninkasi, Confluence (500m de la Sucrière)</li>
                <li><strong>Horaires</strong> : 19h - 23h</li>
                <li><strong>Gratuit</strong> : Boissons et petite restauration offertes</li>
                <li><strong>Ambiance</strong> : Networking décontracté, musique, jeux</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Informations Pratiques</h2>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">Tarifs</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Billet samedi</strong> : 20€ (déjeuner inclus)</li>
                <li><strong>Contributor Day dimanche</strong> : Gratuit</li>
                <li><strong>Ateliers</strong> : Inclus dans le billet</li>
                <li><strong>After Party</strong> : Gratuit pour participants</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Accès La Sucrière</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Tramway</strong> : T1 arrêt "Montrochet" (5 min à pied)</li>
                <li><strong>Vélo</strong> : Stations Vélo'v à proximité</li>
                <li><strong>Voiture</strong> : Parking Confluence (payant)</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Restauration</h3>
              <p className="mb-4">
                Déjeuner buffet végétarien inclus dans le billet. Pauses café/thé toute la journée.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Pourquoi Venir au WordCamp Lyon ?</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Apprendre</strong> : Conférences de qualité par des experts reconnus</li>
                <li><strong>Networker</strong> : Rencontrer la communauté WordPress lyonnaise</li>
                <li><strong>Découvrir</strong> : Dernières tendances WordPress 2025</li>
                <li><strong>S'amuser</strong> : Ambiance conviviale et bienveillante</li>
                <li><strong>Contribuer</strong> : Participer à l'amélioration de WordPress</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
              <p className="mb-8">
                Le <strong>WordCamp Lyon 2025</strong> est l'événement à ne pas manquer pour tous les passionnés de WordPress. Que vous soyez débutant ou expert, développeur ou utilisateur, vous trouverez votre bonheur parmi les 30+ conférences proposées. Pour seulement 20€, c'est une occasion unique de monter en compétences et de rencontrer votre communauté. À très bientôt à La Sucrière !
              </p>
            </FadeInSection>
          </div>

          <FadeInSection delay={300}>
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">VKBack Sponsor du WordCamp</h3>
              <p className="text-muted-foreground mb-6">
                Notre agence est fière de soutenir la communauté WordPress lyonnaise. Venez nous rencontrer sur notre stand !
              </p>
              <Button asChild size="lg" className="btn-cta">
                <a href="/contact">
                  Discuter avec nous
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

export default WordCampLyon;

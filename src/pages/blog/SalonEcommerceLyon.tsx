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
import blogImage from "@/assets/blog-salon-ecommerce.jpg";

const SalonEcommerceLyon = () => {
  return (
    <>
      <Helmet>
        <title>Salon E-commerce Lyon 2025 : Programme - VKBack</title>
        <meta 
          name="description" 
          content="Découvrez le programme complet du Salon E-commerce Lyon 2025. Conférences, exposants et dernières innovations du commerce en ligne." 
        />
        <link rel="canonical" href="https://vkback.com/blog/salon-ecommerce-lyon-2025" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Salon du E-commerce Lyon 2025" }
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
                <Badge variant="outline">E-commerce</Badge>
                <Badge variant="outline">Lyon</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Salon du E-commerce Lyon 2025 : Programme et Innovations
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Florian C.
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  12 Janvier 2025
                </span>
              </div>

              <div className="p-6 bg-primary/10 rounded-lg mb-8">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">📅 Informations Pratiques</h3>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <strong>Dates :</strong> 18-19 Mars 2025
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <strong>Lieu :</strong> Eurexpo Lyon, Hall 4
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <strong>Horaires :</strong> 9h - 18h
                      </p>
                    </div>
                  </div>
                  <Button size="lg" className="btn-cta whitespace-nowrap">
                    Réserver mon badge gratuit
                  </Button>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <img 
              src={blogImage} 
              alt="Salon E-commerce Lyon 2025"
              className="w-full h-96 object-cover rounded-lg mb-12"
            />
          </FadeInSection>

          <div className="prose prose-lg max-w-none">
            <FadeInSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                Le Salon du E-commerce de Lyon revient les 18 et 19 mars 2025 à Eurexpo ! Rendez-vous incontournable des professionnels du commerce en ligne, découvrez le programme complet, les innovations et nos conseils pour profiter au maximum de l'événement.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Pourquoi Participer au Salon E-commerce Lyon ?</h2>
              <p className="mb-4">
                Le <strong>Salon du E-commerce Lyon</strong> rassemble plus de <strong>10 000 visiteurs</strong> et <strong>200 exposants</strong> chaque année. C'est l'occasion idéale pour :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Découvrir les dernières innovations</strong> : IA, marketplace, logistique, paiement</li>
                <li><strong>Rencontrer des experts</strong> : Conférences et ateliers pratiques</li>
                <li><strong>Networker</strong> : Échanger avec d'autres e-commerçants et partenaires</li>
                <li><strong>Se former</strong> : Sessions dédiées aux débutants et confirmés</li>
                <li><strong>Trouver des solutions</strong> : Comparer prestataires et outils</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Programme des Conférences</h2>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">Jour 1 - Mardi 18 Mars 2025</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>9h30 - 10h30</strong> : "IA et E-commerce : Comment automatiser votre boutique en ligne ?"</li>
                <li><strong>11h - 12h</strong> : "Marketplace : Vendre sur Amazon, Cdiscount et La Redoute"</li>
                <li><strong>14h - 15h</strong> : "SEO E-commerce : Techniques avancées 2025"</li>
                <li><strong>15h30 - 16h30</strong> : "Paiement fractionné : Booster vos conversions avec Alma, Klarna"</li>
                <li><strong>17h - 18h</strong> : "Retour d'expérience : De 0 à 1M€ de CA en e-commerce"</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Jour 2 - Mercredi 19 Mars 2025</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>9h30 - 10h30</strong> : "TikTok Shop et Social Commerce : Nouvelles opportunités"</li>
                <li><strong>11h - 12h</strong> : "WooCommerce : créer sa boutique facilement"</li>
                <li><strong>14h - 15h</strong> : "Logistique e-commerce : Optimiser vos coûts de livraison"</li>
                <li><strong>15h30 - 16h30</strong> : "Email Marketing : Stratégies pour augmenter votre panier moyen"</li>
                <li><strong>17h - 18h</strong> : "Table ronde : L'avenir du e-commerce en France"</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Les Exposants Phares 2025</h2>
              <p className="mb-4">
                Plus de 200 exposants vous attendent sur les stands :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Plateformes e-commerce</strong> : WooCommerce, Shopify, Magento</li>
                <li><strong>Paiement</strong> : Stripe, PayPal, Alma, Lydia Pro</li>
                <li><strong>Logistique</strong> : Colissimo, Chronopost, Mondial Relay, Boxtal</li>
                <li><strong>Marketing</strong> : Sendinblue, Mailchimp, Google Ads, Meta Business</li>
                <li><strong>Marketplace</strong> : Amazon, Cdiscount, Fnac Darty, La Redoute</li>
                <li><strong>Agences web</strong> : VKBack et autres spécialistes e-commerce Lyon</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Ateliers Pratiques</h2>
              <p className="mb-4">
                Des ateliers en petits groupes (inscription obligatoire) :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Créer sa boutique WooCommerce de A à Z</strong> (2h)</li>
                <li><strong>Optimiser ses fiches produits pour le SEO</strong> (1h30)</li>
                <li><strong>Lancer sa première campagne Google Shopping</strong> (2h)</li>
                <li><strong>Mettre en place un chatbot pour son e-commerce</strong> (1h)</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Nouveautés 2025</h2>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Zone Innovation</h3>
              <p className="mb-4">
                Un espace dédié aux dernières technologies :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>IA générative</strong> : Créer automatiquement fiches produits et visuels</li>
                <li><strong>Réalité augmentée</strong> : Essai virtuel produits (mode, déco)</li>
                <li><strong>Blockchain NFT</strong> : Programme de fidélité nouvelle génération</li>
                <li><strong>Vocal Commerce</strong> : Vente via Alexa et Google Assistant</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Speed-Networking</h3>
              <p className="mb-4">
                Sessions de 5 minutes pour rencontrer rapidement des partenaires potentiels (inscription sur place).
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Nos Conseils pour Profiter du Salon</h2>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Avant l'Événement</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Réservez votre badge gratuit</strong> en ligne (éviter la file d'attente)</li>
                <li><strong>Consultez le plan du salon</strong> et listez les stands à visiter</li>
                <li><strong>Inscrivez-vous aux ateliers</strong> qui vous intéressent (places limitées)</li>
                <li><strong>Préparez vos questions</strong> pour les exposants ciblés</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Pendant le Salon</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Arrivez tôt</strong> : 9h pour éviter la foule</li>
                <li><strong>Prenez des notes</strong> et demandez les coordonnées des contacts intéressants</li>
                <li><strong>Assistez à 2-3 conférences max</strong> : privilégiez la qualité</li>
                <li><strong>Visitez la zone innovation</strong> pour découvrir les tendances</li>
                <li><strong>Participez au networking</strong> : discussions informelles autour d'un café</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Après le Salon</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Relancez vos contacts</strong> dans les 48h</li>
                <li><strong>Faites le tri</strong> dans la documentation récupérée</li>
                <li><strong>Implémentez</strong> les idées et conseils collectés</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Informations Pratiques</h2>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Accès</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>En voiture</strong> : Parking gratuit Eurexpo (5000 places)</li>
                <li><strong>En tramway</strong> : Ligne T2 arrêt "Eurexpo"</li>
                <li><strong>En train</strong> : Gare Part-Dieu + Tramway T2 (25 min)</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Tarifs</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Badge visiteur</strong> : Gratuit (inscription en ligne obligatoire)</li>
                <li><strong>Ateliers</strong> : Gratuits sur inscription</li>
                <li><strong>Restauration</strong> : Food trucks et snacks sur place</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
              <p className="mb-8">
                Le <strong>Salon E-commerce Lyon 2025</strong> est LE rendez-vous incontournable pour tous les acteurs du commerce en ligne. Que vous soyez débutant ou e-commerçant confirmé, c'est l'occasion de découvrir les innovations, se former et développer son réseau. Notre agence VKBack sera présente sur le stand B42 pour échanger sur vos projets e-commerce !
              </p>
            </FadeInSection>
          </div>

          <FadeInSection delay={300}>
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Retrouvez VKBack au Salon</h3>
              <p className="text-muted-foreground mb-6">
                Venez nous rencontrer sur le stand B42. Nous serons ravis d'échanger sur votre projet e-commerce !
              </p>
              <Button asChild size="lg" className="btn-cta">
                <a href="/contact">
                  Prendre rendez-vous
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

export default SalonEcommerceLyon;

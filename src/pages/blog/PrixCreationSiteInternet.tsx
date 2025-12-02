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

const PrixCreationSiteInternet = () => {
  return (
    <>
      <Helmet>
        <title>Prix Site Internet Lyon 2025 : Guide - VKBack</title>
        <meta 
          name="description" 
          content="Découvrez les tarifs réels pour créer un site internet à Lyon en 2025. Guide complet des prix selon le type de site : vitrine, e-commerce, corporate." 
        />
        <link rel="canonical" href="https://vkback.com/blog/prix-creation-site-internet-lyon" />
      </Helmet>

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
                <a href="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour au blog
                </a>
              </Button>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge>Création Web</Badge>
                <Badge variant="outline">Tarifs</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Prix Création Site Internet Lyon 2025 : Guide Complet
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Marc D.
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  15 Janvier 2025
                </span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <img 
              src={blogImage} 
              alt="Prix création site internet Lyon"
              className="w-full h-96 object-cover rounded-lg mb-12"
            />
          </FadeInSection>

          <div className="prose prose-lg max-w-none">
            <FadeInSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                Combien coûte réellement la création d'un site internet à Lyon en 2025 ? Ce guide complet vous dévoile les tarifs pratiqués par les agences web lyonnaises selon le type de projet.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Prix d'un Site Vitrine à Lyon</h2>
              <p className="mb-4">
                Un <strong>site vitrine professionnel</strong> permet de présenter votre entreprise, vos services et de générer des contacts qualifiés. À Lyon, comptez entre <strong>2 500€ et 6 000€</strong> pour un site vitrine selon la complexité.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Site vitrine basique (2 500€ - 3 500€)</strong> : 5-7 pages, design responsive, formulaire contact, SEO de base</li>
                <li><strong>Site vitrine premium (4 000€ - 6 000€)</strong> : 10-15 pages, design sur-mesure, blog intégré, animations, SEO optimisé</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Tarif Site E-commerce Lyon</h2>
              <p className="mb-4">
                Une <strong>boutique en ligne WooCommerce</strong> nécessite plus de développement et d'intégrations. Budget à prévoir : <strong>5 000€ à 15 000€</strong>.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>E-commerce standard (5 000€ - 8 000€)</strong> : Catalogue produits, paiement en ligne, gestion stock basique</li>
                <li><strong>E-commerce avancé (8 000€ - 15 000€)</strong> : Fonctionnalités avancées, multilingue, intégrations ERP/CRM, marketplace</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Coût Site Corporate B2B</h2>
              <p className="mb-4">
                Les <strong>sites institutionnels</strong> pour grandes entreprises demandent un niveau de finition supérieur. Prévoyez <strong>8 000€ à 25 000€</strong> pour un site corporate à Lyon.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Ce Qui Influence le Prix</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Nombre de pages</strong> : Plus il y a de pages, plus le coût augmente</li>
                <li><strong>Design personnalisé</strong> : Template modifié ou création 100% sur-mesure</li>
                <li><strong>Fonctionnalités</strong> : E-commerce, espace client, multilingue, API tierces</li>
                <li><strong>Optimisation SEO</strong> : Référencement basique ou stratégie SEO complète</li>
                <li><strong>Contenus</strong> : Rédaction, photos professionnelles, vidéos</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Coûts Annexes à Prévoir</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Hébergement web</strong> : 15€ à 50€/mois selon performances</li>
                <li><strong>Nom de domaine</strong> : 10€ à 20€/an (.fr, .com)</li>
                <li><strong>Maintenance WordPress</strong> : 59€ à 150€/mois</li>
                <li><strong>Référencement SEO</strong> : 600€ à 2 000€/mois</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Pourquoi Choisir une Agence Web à Lyon ?</h2>
              <p className="mb-4">
                Faire appel à une <strong>agence web locale à Lyon</strong> présente plusieurs avantages :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Proximité</strong> : Rendez-vous physiques pour discuter de votre projet</li>
                <li><strong>Connaissance du marché local</strong> : SEO local Lyon optimisé, réseau de partenaires</li>
                <li><strong>Support réactif</strong> : Assistance technique rapide et en français</li>
                <li><strong>Suivi personnalisé</strong> : Accompagnement sur le long terme</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
              <p className="mb-4">
                Le prix d'un site internet à Lyon varie selon vos besoins et ambitions. Pour un <strong>site vitrine professionnel</strong>, comptez 2 500€ à 6 000€. Pour un <strong>e-commerce</strong>, entre 5 000€ et 15 000€. Un <strong>site corporate</strong> démarre à 8 000€.
              </p>
              <p className="mb-8">
                Notre agence web VKBack propose des <strong>tarifs transparents</strong> et adaptés aux TPE/PME lyonnaises. Première année d'hébergement offerte et formation WordPress incluse.
              </p>
            </FadeInSection>
          </div>

          <FadeInSection delay={300}>
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Obtenez votre Devis Gratuit</h3>
              <p className="text-muted-foreground mb-6">
                Recevez un devis personnalisé pour votre projet web sous 24h.
              </p>
              <Button asChild size="lg" className="btn-cta">
                <a href="/contact">
                  Demander un devis
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

export default PrixCreationSiteInternet;

import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { Search, BarChart3, FileText, Zap, Target, TrendingUp } from "lucide-react";
import auditHero from "@/assets/referencement-seo-naturel-lyon.jpg";

const AuditSEO = () => {
  return (
    <>
      <Helmet>
        <title>Audit SEO Lyon - Analyse Technique & Sémantique | VKBack</title>
        <meta name="description" content="Audit SEO complet à Lyon. Analyse technique, sémantique et concurrentielle. Recommandations concrètes pour améliorer votre référencement Google." />
        <link rel="canonical" href="https://vkback.com/services/audit-seo-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Référencement SEO Lyon", href: "/referencement-seo-lyon" },
          { label: "Audit SEO Lyon" }
        ]}
        painPointHook={{
          question: "Vous ne savez pas pourquoi votre site n'apparaît pas sur Google ?",
          answer: "La plupart des problèmes SEO sont invisibles. Un audit révèle tout."
        }}
        heroTitle="Audit SEO Complet Lyon"
        heroSubtitle="Votre site stagne en page 2, 3 ou pire ? Nous analysons plus de 200 critères pour identifier tous les blocages et vous fournir un plan d'action priorisé."
        heroImage={auditHero}
        heroAlt="Audit SEO complet analyse technique site WordPress à Lyon"
        ctaPrimary={{ label: "Diagnostiquer mon SEO", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos résultats", href: "/realisations" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Votre site n'apparaît pas sur Google ? Vous avez perdu des positions ? Notre agence SEO à Lyon réalise des audits complets qui identifient tous les problèmes bloquant votre référencement naturel.
            </p>
            <p className="text-lg leading-relaxed">
              Un audit SEO est la première étape indispensable pour améliorer votre visibilité. Nous analysons plus de 200 critères techniques, sémantiques et concurrentiels pour vous fournir un rapport détaillé avec des recommandations priorisées et actionnables.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi réaliser un audit SEO ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Identifier les problèmes invisibles</h3>
                <p className="text-lg text-muted-foreground">
                  La plupart des problèmes SEO sont invisibles pour un non-expert : erreurs techniques, contenu dupliqué, problèmes d'indexation, structure inadaptée. Un audit révèle tous ces blocages cachés qui empêchent votre site d'être bien classé.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Plan d'action priorisé et ROI rapide</h3>
                <p className="text-lg text-muted-foreground">
                  Nous ne vous donnons pas une simple liste de problèmes. Nous priorisons les actions selon leur impact et difficulté, vous permettant de corriger d'abord ce qui apportera le plus de résultats rapidement.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre méthodologie d'audit SEO à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Avec plus de 10 ans d'expérience en SEO à Lyon, nous avons audité des centaines de sites WordPress et e-commerce. Notre audit combine analyse technique, sémantique et concurrentielle pour une vision 360° de votre référencement.
              </p>
              <p className="text-lg">
                Nous utilisons les meilleurs outils du marché (Screaming Frog, SEMrush, Ahrefs) couplés à notre expertise pour identifier tous les leviers d'amélioration. Chaque audit est suivi d'une restitution en visioconférence pour expliquer les résultats et le plan d'action.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Audit technique complet",
            description: "Crawl du site, analyse de l'indexation, vitesse de chargement, Core Web Vitals, structure HTML, données structurées, robots.txt et sitemap XML."
          },
          {
            title: "Audit sémantique",
            description: "Analyse des mots-clés actuels, recherche d'opportunités, optimisation des balises meta, structure Hn, densité des mots-clés et qualité du contenu."
          },
          {
            title: "Audit concurrentiel",
            description: "Analyse des 5 principaux concurrents : positionnement, stratégie de contenu, backlinks, autorité de domaine et opportunités de mots-clés."
          },
          {
            title: "Analyse des backlinks",
            description: "Profil de liens entrants, liens toxiques à désavouer, opportunités de netlinking et comparaison avec la concurrence."
          },
          {
            title: "Audit mobile & UX",
            description: "Compatibilité mobile, expérience utilisateur, taux de rebond, parcours utilisateur et optimisations d'ergonomie pour le SEO."
          },
          {
            title: "Plan d'action priorisé",
            description: "Recommandations classées par priorité (impact vs difficulté), roadmap SEO sur 6 mois, estimations de ROI et quick wins à implémenter immédiatement."
          }
        ]}
        pricing={[
          {
            name: "Audit Essentiel",
            price: "À partir de 800€",
            features: [
              "Audit technique complet",
              "Audit sémantique (20 pages)",
              "Analyse concurrentielle (3 sites)",
              "Rapport 30-40 pages",
              "Recommandations priorisées",
              "1h de restitution en visio",
              "Support 2 semaines"
            ]
          },
          {
            name: "Audit Complet",
            price: "À partir de 1 200€",
            popular: true,
            features: [
              "Audit technique approfondi",
              "Audit sémantique (50 pages)",
              "Analyse concurrentielle (5 sites)",
              "Audit backlinks détaillé",
              "Recherche mots-clés avancée",
              "Rapport 50-70 pages",
              "2h de restitution + Q&A",
              "Support 1 mois"
            ]
          },
          {
            name: "Audit Premium E-commerce",
            price: "À partir de 2 500€",
            features: [
              "Audit technique e-commerce",
              "Audit 100+ fiches produits",
              "Stratégie catégories SEO",
              "Audit UX & conversion",
              "Analyse multi-concurrents",
              "Rapport 80-100 pages",
              "Roadmap SEO 12 mois",
              "Support prioritaire 2 mois"
            ]
          }
        ]}
        faq={[
          {
            question: "Qu'est-ce qu'un audit SEO et pourquoi est-ce important ?",
            answer: "Un audit SEO est une analyse complète de votre site qui identifie tous les problèmes techniques, sémantiques et structurels qui empêchent un bon référencement Google. C'est la première étape indispensable avant toute stratégie SEO, car vous ne pouvez pas améliorer ce que vous ne connaissez pas."
          },
          {
            question: "Combien de temps dure un audit SEO ?",
            answer: "Un audit SEO essentiel prend 5-7 jours, un audit complet 10-15 jours, et un audit premium e-commerce 3-4 semaines. Le délai dépend de la taille de votre site (nombre de pages) et de la profondeur d'analyse souhaitée."
          },
          {
            question: "Que contient le rapport d'audit SEO ?",
            answer: "Le rapport inclut : état des lieux complet (score SEO global), liste détaillée des problèmes avec captures d'écran, analyse concurrentielle, opportunités de mots-clés, recommandations priorisées par impact/difficulté, roadmap SEO, et estimation de ROI. Format PDF + présentation visuelle."
          },
          {
            question: "Dois-je faire un audit SEO régulièrement ?",
            answer: "Un audit SEO complet est recommandé tous les 12-18 mois, ou après un événement majeur (refonte de site, perte de trafic, changement d'algorithme Google). Des mini-audits trimestriels permettent de suivre l'évolution et détecter rapidement les nouveaux problèmes."
          },
          {
            question: "L'audit SEO inclut-il la correction des problèmes ?",
            answer: "L'audit identifie et documente les problèmes avec les solutions recommandées. La correction des problèmes n'est pas incluse mais nous proposons des forfaits d'implémentation ou un accompagnement SEO mensuel pour corriger progressivement les points bloquants."
          },
          {
            question: "Puis-je faire l'audit SEO moi-même avec des outils gratuits ?",
            answer: "Les outils gratuits (Google Search Console, PageSpeed Insights) donnent des indications mais restent limités. Un audit professionnel combine plusieurs outils payants (Screaming Frog, SEMrush, Ahrefs), des analyses manuelles et surtout l'expertise pour interpréter les données et prioriser les actions selon votre contexte business."
          }
        ]}
        relatedServices={[
          {
            title: "Référencement SEO",
            description: "Optimisation continue de votre référencement",
            href: "/referencement-seo-lyon",
            icon: <TrendingUp className="w-8 h-8" />
          },
          {
            title: "SEO Local Lyon",
            description: "Optimisation Google My Business",
            href: "/services/seo-local-lyon",
            icon: <Target className="w-8 h-8" />
          }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default AuditSEO;

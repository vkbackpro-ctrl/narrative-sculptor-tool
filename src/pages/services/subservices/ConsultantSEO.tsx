import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { User, Target, TrendingUp, Lightbulb, BarChart3, Zap } from "lucide-react";
import consultantHero from "@/assets/team-meeting-lyon.jpg";

const ConsultantSEO = () => {
  return (
    <>
      <Helmet>
        <title>Consultant SEO Lyon | Expert Référencement - VKBack</title>
        <meta name="description" content="Consultant SEO expert à Lyon. Accompagnement stratégique, audit, formation et pilotage de vos projets SEO. +10 ans d'expérience référencement naturel." />
        <link rel="canonical" href="https://vkback.com/services/consultant-seo-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Référencement SEO Lyon", href: "/referencement-seo-lyon" },
          { label: "Consultant SEO Lyon" }
        ]}
        painPointHook={{
          question: "Vous avez besoin d'un expert pour guider votre stratégie SEO ?",
          answer: "Un consultant senior évite les erreurs coûteuses et accélère vos résultats."
        }}
        heroTitle="Consultant SEO Lyon"
        heroSubtitle="Besoin d'un regard expert sur votre SEO ? Notre consultant senior analyse, conseille et forme vos équipes pour maximiser votre ROI sans gaspiller temps et budget."
        heroImage={consultantHero}
        heroAlt="Consultant SEO expert référencement naturel Lyon accompagnement stratégique"
        ctaPrimary={{ label: "Être accompagné", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos résultats", href: "/realisations" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Vous avez une équipe marketing mais vous manquez d'expertise SEO pointue ? Vous voulez monter en compétences sur le référencement naturel ? Notre consultant SEO senior à Lyon vous accompagne pour définir votre stratégie, former vos équipes et piloter vos projets SEO.
            </p>
            <p className="text-lg leading-relaxed">
              Contrairement à une agence qui exécute, le consultant SEO apporte son expertise stratégique et son recul d'expert. Il audite, conseille, forme, et vous aide à prendre les bonnes décisions pour maximiser votre ROI SEO sans perdre de temps et d'argent dans de mauvaises directions.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi faire appel à un consultant SEO ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Expertise senior et recul stratégique</h3>
                <p className="text-lg text-muted-foreground">
                  Un consultant SEO expérimenté a vu des centaines de cas et sait ce qui fonctionne vraiment. Il vous évite les erreurs coûteuses, identifie rapidement les leviers prioritaires et vous donne une vision stratégique long terme au-delà des quick wins.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Flexibilité et accompagnement sur-mesure</h3>
                <p className="text-lg text-muted-foreground">
                  Besoin d'un audit ponctuel ? D'un accompagnement régulier ? D'une formation équipe ? Le consultant s'adapte à vos besoins et intervient de façon ciblée là où vous en avez besoin, sans engagement long terme obligatoire.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre expertise de consultant SEO à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Plus de 10 ans d'expérience en SEO à Lyon, ayant accompagné des dizaines d'entreprises B2B et e-commerce dans leur stratégie de référencement naturel. Certifications Google, expertise technique WordPress, e-commerce WooCommerce et SEO international.
              </p>
              <p className="text-lg">
                Notre approche : comprendre votre business et vos enjeux avant de parler SEO. Nous ne plaquons pas une recette toute faite mais construisons avec vous une stratégie SEO alignée sur vos objectifs business, votre budget et vos ressources internes.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Stratégie SEO sur-mesure",
            description: "Définition d'une roadmap SEO alignée sur vos objectifs business : mots-clés stratégiques, priorisation des actions, budgets et KPIs à suivre."
          },
          {
            title: "Audit SEO complet",
            description: "Analyse technique, sémantique et concurrentielle approfondie. Identification des blocages et opportunités, plan d'action priorisé par impact/effort."
          },
          {
            title: "Pilotage de projets SEO",
            description: "Accompagnement de vos refontes, migrations, lancements de produits pour sécuriser le SEO. Cahier des charges SEO, recettes, validation techniques."
          },
          {
            title: "Formation équipes",
            description: "Formation de vos équipes marketing, rédaction, développeurs aux bonnes pratiques SEO. Workshops personnalisés selon vos besoins et niveaux."
          },
          {
            title: "Conseil et arbitrage",
            description: "Conseil stratégique pour arbitrer entre plusieurs options (CMS, structure, stratégie de contenu). Vision externe et objective pour prendre les bonnes décisions."
          },
          {
            title: "Suivi et optimisation continue",
            description: "Rendez-vous réguliers pour suivre les KPIs, analyser les résultats, ajuster la stratégie et définir les actions prioritaires du mois."
          }
        ]}
        pricing={[
          {
            name: "Mission Ponctuelle",
            price: "À partir de 800€",
            features: [
              "Audit SEO complet",
              "Ou formation équipe (½ journée)",
              "Ou accompagnement refonte",
              "Livrable PDF détaillé",
              "1h de restitution",
              "Support 2 semaines",
              "Facturation à la prestation"
            ]
          },
          {
            name: "Accompagnement Mensuel",
            price: "À partir de 1 200€/mois",
            popular: true,
            features: [
              "1-2 jours/mois de conseil",
              "Stratégie et pilotage SEO",
              "Réunions régulières (visio/présentiel)",
              "Validation actions équipes",
              "Reporting mensuel personnalisé",
              "Support illimité par email",
              "Sans engagement (3 mois mini)"
            ]
          },
          {
            name: "Direction SEO Externalisée",
            price: "À partir de 2 500€/mois",
            features: [
              "3-5 jours/mois de conseil",
              "Direction stratégique complète",
              "Management équipe SEO",
              "Coordination prestataires",
              "Roadmap trimestrielle",
              "Reporting direction",
              "Support prioritaire illimité"
            ]
          }
        ]}
        faq={[
          {
            question: "Quelle est la différence entre une agence SEO et un consultant SEO ?",
            answer: "Une agence SEO exécute les tâches (création de contenu, netlinking, optimisations techniques). Un consultant SEO est un expert qui audite, conseille, définit la stratégie et forme vos équipes. Il peut aussi piloter une agence pour vous. Le consultant apporte expertise stratégique et recul, l'agence exécute."
          },
          {
            question: "Combien de temps d'accompagnement consultant SEO faut-il prévoir ?",
            answer: "Cela dépend de vos besoins. Pour un audit ponctuel, 1-2 semaines suffisent. Pour un accompagnement stratégique avec résultats mesurables, nous recommandons minimum 6-12 mois. Le SEO est un marathon, pas un sprint. Un consultant à la journée peut intervenir 1-3 jours/mois selon vos besoins."
          },
          {
            question: "Le consultant SEO fait-il le travail lui-même ou seulement du conseil ?",
            answer: "Le consultant SEO conseille, audite, forme et pilote mais ne fait généralement pas l'exécution opérationnelle (rédaction de 50 articles, création de 100 backlinks). Il peut réaliser des quick wins lors des audits, mais l'implémentation est faite par vos équipes internes ou une agence que le consultant peut piloter."
          },
          {
            question: "Un consultant SEO peut-il m'aider sur une refonte de site ?",
            answer: "Absolument ! C'est même recommandé. Le consultant intervient en amont pour rédiger le cahier des charges SEO, pendant la refonte pour valider les choix techniques et structure, et après pour vérifier les redirections et récupération du SEO. Cela évite les pertes de trafic catastrophiques qu'on voit trop souvent sur les refontes mal préparées."
          },
          {
            question: "Quelle est votre zone d'intervention en tant que consultant SEO ?",
            answer: "Nous sommes basés à Lyon mais intervenons partout en France et à l'international (en français et anglais). La plupart des missions se font en remote (visio) avec ponctuellement des déplacements sur site si besoin. Pour les entreprises lyonnaises, nous proposons des rendez-vous en présentiel réguliers."
          },
          {
            question: "Comment mesurer le ROI d'un consultant SEO ?",
            answer: "Nous définissons dès le départ des KPIs clairs : évolution du trafic organique, positions sur mots-clés stratégiques, conversions générées par le SEO, chiffre d'affaires attribué au SEO. Un bon consultant SEO doit générer 3x à 10x le coût de son intervention en valeur SEO créée (trafic x taux de conversion x valeur client)."
          }
        ]}
        relatedServices={[
          {
            title: "Audit SEO",
            description: "Analyse complète de votre référencement",
            href: "/services/audit-seo-lyon",
            icon: <BarChart3 className="w-8 h-8" />
          },
          {
            title: "Formation SEO",
            description: "Formez vos équipes au référencement",
            href: "/services/formation-seo-lyon",
            icon: <Lightbulb className="w-8 h-8" />
          }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default ConsultantSEO;

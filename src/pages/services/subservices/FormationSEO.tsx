import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { GraduationCap, Users, BookOpen, Target, TrendingUp, Lightbulb, Bot } from "lucide-react";
import formationHero from "@/assets/team-meeting-lyon.jpg";

const FormationSEO = () => {
  return (
    <>
      <Helmet>
        <title>Formation SEO Lyon | Apprendre le Référencement - VKBack</title>
        <meta name="description" content="Formation SEO à Lyon pour entreprises et marketeurs. Apprenez le référencement naturel Google : technique, contenu, netlinking. Inter ou intra-entreprise." />
        <link rel="canonical" href="https://vkback.com/services/formation-seo-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Référencement SEO Lyon", href: "/referencement-seo-lyon" },
          { label: "Formation SEO Lyon" }
        ]}
        painPointHook={{
          question: "Vous dépendez d'une agence SEO sans comprendre ce qu'elle fait ?",
          answer: "Devenez autonome. Formez-vous ou formez vos équipes au SEO."
        }}
        heroTitle="Formation SEO Lyon"
        heroSubtitle="Marre de payer une agence sans comprendre le SEO ? Vous voulez reprendre le contrôle ? Notre formation SEO à Lyon vous rend autonome sur le référencement Google."
        heroImage={formationHero}
        heroAlt="Formation SEO référencement naturel Google Lyon entreprise équipe"
        ctaPrimary={{ label: "Me former au SEO", href: "/contact" }}
        ctaSecondary={{ label: "Voir le programme", href: "#tarifs" }}
        schemaServiceName="Formation SEO Lyon"
        schemaServiceDescription="Formation SEO à Lyon pour entreprises et marketeurs. Apprenez le référencement naturel Google : technique, contenu, netlinking. Inter ou intra-entreprise."
        schemaServicePrice="À partir de 1 500€/jour"
        schemaPageUrl="https://vkback.com/services/formation-seo-lyon"
        schemaServicePriceRange="600€ - 1500€/jour"
        schemaServiceKeywords={["formation SEO Lyon", "apprendre référencement Villeurbanne", "formation Google Lyon 2", "cours SEO entreprise Rhône-Alpes", "formation rédaction web Lyon Part-Dieu", "stage SEO Caluire", "atelier référencement Écully"]}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Vous voulez devenir autonome sur le SEO et ne plus dépendre d'une agence ? Vous souhaitez former vos équipes marketing au référencement naturel ? Notre formation SEO à Lyon vous apprend les fondamentaux et les techniques avancées pour améliorer durablement votre visibilité Google.
            </p>
            <p className="text-lg leading-relaxed">
              Formation opérationnelle et orientée résultats : 80% de pratique sur votre propre site. Vous repartez avec un plan d'action SEO concret à déployer immédiatement. Adaptée aux débutants comme aux marketeurs confirmés qui veulent monter en compétences SEO.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi se former au SEO ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Autonomie et économies long terme</h3>
                <p className="text-lg text-muted-foreground">
                  Former vos équipes au SEO vous rend autonome. Vous n'avez plus besoin de payer une agence 1000-3000€/mois pour des tâches que vous pouvez faire vous-même. L'investissement dans la formation est rentabilisé en 3-6 mois.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Le SEO est une compétence indispensable en marketing digital</h3>
                <p className="text-lg text-muted-foreground">
                  Que vous soyez chef de projet web, rédacteur, community manager ou dirigeant, comprendre le SEO est devenu indispensable. C'est le canal d'acquisition le plus rentable sur le long terme et il impacte tous les aspects du marketing digital.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre approche pédagogique SEO à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Avec plus de 10 ans d'expérience en SEO à Lyon, nous avons formé des centaines de professionnels au référencement naturel. Nos formations sont reconnues pour leur côté pratique et opérationnel : on ne vous noie pas dans la théorie, on travaille sur votre site.
              </p>
              <p className="text-lg">
                Chaque formation est adaptée à votre niveau, votre secteur d'activité et vos objectifs. Nous utilisons votre propre site comme cas pratique pour que vous puissiez appliquer immédiatement ce que vous apprenez. Format présentiel à Lyon ou distanciel selon vos préférences.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Formation SEO Fondamentaux",
            description: "Bases du référencement naturel : comment fonctionne Google, critères de ranking, recherche de mots-clés, optimisation on-page, mesure des résultats. Idéal débutants."
          },
          {
            title: "Formation SEO Technique",
            description: "Crawl, indexation, structure HTML, Core Web Vitals, données structurées, robots.txt, sitemap, redirections, migration SEO. Pour développeurs et chefs de projet."
          },
          {
            title: "Formation Rédaction Web SEO",
            description: "Écrire du contenu optimisé Google : recherche d'intentions, structure Hn, densité mots-clés, maillage interne, longueur optimale. Pour rédacteurs et content managers."
          },
          {
            title: "Formation Netlinking",
            description: "Stratégie de liens entrants : comment obtenir des backlinks de qualité, guest blogging, relations presse digitales, linkbaiting, analyse de profil de liens."
          },
          {
            title: "Formation SEO Local",
            description: "Optimisation Google My Business, citations locales, stratégie d'avis clients, contenu géolocalisé. Pour commerces et services de proximité à Lyon."
          },
          {
            title: "Audit SEO de votre site",
            description: "Partie pratique de la formation où nous auditons votre site ensemble et définissons un plan d'action priorisé que vous pourrez déployer immédiatement."
          }
        ]}
        pricing={[
          {
            name: "Formation Découverte SEO",
            price: "À partir de 600€",
            features: [
              "½ journée (3h30)",
              "Fondamentaux du SEO",
              "Pour 1-3 personnes",
              "Présentiel Lyon ou visio",
              "Support de formation PDF",
              "Audit express inclus",
              "Suivi 2 semaines"
            ]
          },
          {
            name: "Formation SEO Complète",
            price: "À partir de 1 200€",
            popular: true,
            features: [
              "1 journée complète (7h)",
              "SEO technique + contenu + netlinking",
              "Pour 1-5 personnes",
              "Cas pratique sur votre site",
              "Plan d'action SEO personnalisé",
              "Support + outils recommandés",
              "Suivi 1 mois"
            ]
          },
          {
            name: "Formation Intra-Entreprise",
            price: "Sur devis",
            features: [
              "Programme sur-mesure (1-3 jours)",
              "Adapté à votre niveau et secteur",
              "Jusqu'à 10 participants",
              "Présentiel dans vos locaux",
              "Ateliers pratiques personnalisés",
              "Audit SEO complet inclus",
              "Support 3 mois post-formation"
            ]
          }
        ]}
        faq={[
          {
            question: "À qui s'adressent vos formations SEO ?",
            answer: "Nos formations s'adressent aux marketeurs, chefs de projet web, rédacteurs, community managers, entrepreneurs et dirigeants qui veulent monter en compétences SEO. Aucun prérequis technique nécessaire pour la formation fondamentaux. Pour la formation technique, des notions HTML/CSS sont recommandées."
          },
          {
            question: "Quelle est la durée idéale d'une formation SEO ?",
            answer: "Pour acquérir les fondamentaux, une demi-journée suffit. Pour une formation complète opérationnelle (technique + contenu + netlinking), nous recommandons 1 journée pleine. Pour devenir vraiment autonome et expert, un programme sur-mesure de 2-3 jours étalés sur plusieurs semaines est idéal."
          },
          {
            question: "La formation est-elle éligible au financement OPCO ?",
            answer: "Oui, nos formations sont éligibles aux financements OPCO (Opérateurs de Compétences) pour les salariés, ainsi qu'au CPF (Compte Personnel de Formation) si vous choisissez une certification. Nous vous accompagnons dans les démarches administratives de prise en charge."
          },
          {
            question: "Vais-je vraiment pouvoir faire du SEO moi-même après la formation ?",
            answer: "Oui ! Nos formations sont 80% pratique. Vous travaillez sur votre propre site pendant la formation et repartez avec un plan d'action concret à déployer. Nous restons disponibles 1 mois après pour répondre à vos questions lors de la mise en pratique. Le SEO demande de la pratique régulière pour progresser."
          },
          {
            question: "Proposez-vous des formations SEO à distance ?",
            answer: "Oui, toutes nos formations sont disponibles en distanciel (visio). Le format est identique au présentiel avec partage d'écran, cas pratiques, et interactivité. Le distanciel permet de former des équipes réparties géographiquement. Nous recommandons toutefois le présentiel pour les groupes de 5+ personnes."
          },
          {
            question: "Combien de temps faut-il pour voir des résultats après une formation SEO ?",
            answer: "Vous pouvez implémenter les quick wins (corrections techniques, optimisation de contenu existant) immédiatement après la formation avec des premiers résultats en 1-2 mois. Pour des résultats significatifs (doublement du trafic), comptez 6-12 mois de travail régulier en appliquant ce que vous avez appris."
          }
        ]}
        relatedServices={[
          {
            title: "Consultant SEO",
            description: "Accompagnement SEO personnalisé",
            href: "/services/consultant-seo-lyon",
            icon: <Users className="w-8 h-8" />
          },
          {
            title: "Audit SEO",
            description: "Analyse complète de votre site",
            href: "/services/audit-seo-lyon",
            icon: <Target className="w-8 h-8" />
          },
          {
            title: "GEO - Référencement IA",
            description: "Se former à l'optimisation pour l'IA",
            href: "/services/geo-referencement-ia-lyon",
            icon: <Bot className="w-8 h-8" />
          }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default FormationSEO;

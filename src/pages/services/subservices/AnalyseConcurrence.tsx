import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { Target, Search, TrendingUp, BarChart3, Eye, Lightbulb } from "lucide-react";
import analyseHero from "@/assets/referencement-seo-naturel-lyon.jpg";

const AnalyseConcurrence = () => {
  return (
    <>
      <Helmet>
        <title>Analyse Concurrentielle SEO Lyon - Benchmark SEO | VKBack</title>
        <meta name="description" content="Analyse concurrentielle SEO à Lyon. Benchmark de vos concurrents : mots-clés, backlinks, contenu, stratégie. Identifiez leurs failles et opportunités." />
        <link rel="canonical" href="https://vkback.com/services/analyse-concurrentielle-seo-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Référencement SEO Lyon", href: "/referencement-seo-lyon" },
          { label: "Analyse Concurrentielle SEO Lyon" }
        ]}
        painPointHook={{
          question: "Vos concurrents vous devancent sur Google et vous ne savez pas pourquoi ?",
          answer: "Découvrez leur stratégie SEO pour les rattraper et les dépasser."
        }}
        heroTitle="Analyse Concurrentielle SEO Lyon"
        heroSubtitle="Pourquoi vos concurrents sont devant vous sur Google ? Notre analyse SEO concurrentielle révèle leurs secrets : mots-clés, backlinks, contenus gagnants."
        heroImage={analyseHero}
        heroAlt="Analyse concurrentielle SEO benchmark stratégie référencement Lyon"
        ctaPrimary={{ label: "Analyser mes concurrents", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos analyses", href: "#tarifs" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Pour dominer votre secteur sur Google à Lyon, vous devez connaître la stratégie SEO de vos concurrents : sur quels mots-clés se positionnent-ils ? D'où viennent leurs backlinks ? Quelle est leur stratégie de contenu ? Notre analyse concurrentielle SEO vous révèle tout.
            </p>
            <p className="text-lg leading-relaxed">
              L'analyse concurrentielle SEO n'est pas de l'espionnage, c'est de l'intelligence stratégique. En comprenant ce qui fonctionne (et ne fonctionne pas) chez vos concurrents, vous gagnez des mois de tests et évitez leurs erreurs. Vous identifiez aussi les opportunités de mots-clés qu'ils n'exploitent pas.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi analyser vos concurrents SEO ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Identifier les opportunités de mots-clés</h3>
                <p className="text-lg text-muted-foreground">
                  Vos concurrents se positionnent sur des mots-clés que vous n'avez jamais ciblés. L'analyse révèle ces "keyword gaps" : des mots-clés pertinents pour votre activité sur lesquels vos concurrents rankent mais pas vous. Ce sont des quick wins faciles à exploiter.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Comprendre ce qui fonctionne dans votre secteur</h3>
                <p className="text-lg text-muted-foreground">
                  Plutôt que de tester au hasard, l'analyse concurrentielle vous montre ce qui fonctionne déjà : types de contenu, stratégie de netlinking, structure de site, pages qui performent. Vous gagnez des mois en appliquant directement les bonnes pratiques de votre secteur.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre méthodologie d'analyse concurrentielle SEO",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Avec plus de 10 ans d'expérience en SEO à Lyon, nous avons réalisé des centaines d'analyses concurrentielles dans tous les secteurs. Nous utilisons les meilleurs outils du marché (SEMrush, Ahrefs, Screaming Frog) pour extraire toutes les données pertinentes.
              </p>
              <p className="text-lg">
                Notre analyse ne se limite pas à un tableau Excel de mots-clés. Nous analysons en profondeur la stratégie globale de chaque concurrent (technique, contenu, netlinking, UX), identifions leurs forces et faiblesses, et vous livrons des recommandations concrètes pour les dépasser sur Google.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Identification des concurrents SEO",
            description: "Identification des 5-10 concurrents SEO réels (pas forcément vos concurrents business). Analyse de leur part de voix organique et trafic estimé."
          },
          {
            title: "Analyse des mots-clés",
            description: "Extraction de tous les mots-clés sur lesquels vos concurrents se positionnent. Identification des keyword gaps (mots-clés qu'ils ont et pas vous)."
          },
          {
            title: "Analyse du contenu",
            description: "Benchmark des types de contenu qui performent : pages piliers, articles de blog, formats, longueur moyenne, angle éditorial, fréquence de publication."
          },
          {
            title: "Analyse des backlinks",
            description: "Profil de liens de chaque concurrent : autorité de domaine, nombre et qualité des backlinks, sources de liens principales, stratégie de netlinking."
          },
          {
            title: "Analyse technique",
            description: "Benchmark technique : vitesse de chargement, Core Web Vitals, structure du site, données structurées, indexation, architecture d'information."
          },
          {
            title: "Matrice d'opportunités",
            description: "Livrable final avec toutes les opportunités identifiées, classées par priorité impact/difficulté, et plan d'action pour dépasser vos concurrents sur Google."
          }
        ]}
        pricing={[
          {
            name: "Analyse Express",
            price: "À partir de 800€",
            features: [
              "Analyse 3 concurrents",
              "Keyword gaps (200+ mots-clés)",
              "Benchmark contenu",
              "Analyse backlinks basique",
              "Rapport 20-30 pages",
              "1h de restitution",
              "Livraison 7 jours"
            ]
          },
          {
            name: "Analyse Complète",
            price: "À partir de 1 500€",
            popular: true,
            features: [
              "Analyse 5-7 concurrents",
              "Keyword gaps complet (500+ mots-clés)",
              "Analyse approfondie contenu",
              "Profil backlinks détaillé",
              "Benchmark technique",
              "Rapport 40-60 pages",
              "Matrice opportunités priorisée",
              "2h de restitution + Q&A"
            ]
          },
          {
            name: "Veille Concurrentielle",
            price: "À partir de 400€/mois",
            features: [
              "Monitoring mensuel 3-5 concurrents",
              "Alertes nouveaux mots-clés",
              "Suivi positions concurrents",
              "Nouveaux backlinks acquis",
              "Nouveaux contenus publiés",
              "Rapport mensuel comparatif",
              "Ajustements stratégie SEO"
            ]
          }
        ]}
        faq={[
          {
            question: "Comment identifiez-vous mes concurrents SEO ?",
            answer: "Vos concurrents SEO ne sont pas forcément vos concurrents commerciaux. Nous utilisons des outils (SEMrush, Ahrefs) pour identifier les sites qui se positionnent sur les mêmes mots-clés que vous, ont une audience similaire et captent votre trafic potentiel sur Google. Nous validons ensuite la liste avec vous."
          },
          {
            question: "Que sont les 'keyword gaps' et pourquoi sont-ils importants ?",
            answer: "Les keyword gaps sont les mots-clés sur lesquels vos concurrents se positionnent mais pas vous. Ce sont des opportunités faciles à exploiter car ces mots-clés sont pertinents pour votre secteur (vos concurrents rankent dessus) mais vous ne les avez jamais ciblés. C'est souvent là où le ROI SEO est le plus rapide."
          },
          {
            question: "L'analyse concurrentielle inclut-elle une analyse de leurs backlinks ?",
            answer: "Oui, absolument ! L'analyse des backlinks de vos concurrents est cruciale. Nous identifions leurs sources de liens principales (médias, annuaires, blogs, partenaires) pour reproduire leur stratégie de netlinking, et parfois trouver les mêmes opportunités de liens pour vous."
          },
          {
            question: "À quelle fréquence faut-il faire une analyse concurrentielle SEO ?",
            answer: "Une analyse complète tous les 12-18 mois est recommandée car les stratégies SEO évoluent. Entre deux, une veille mensuelle légère permet de détecter les nouveaux contenus, backlinks et mots-clés de vos concurrents. Nous proposons des forfaits de veille concurrentielle continue."
          },
          {
            question: "Puis-je copier la stratégie SEO de mes concurrents ?",
            answer: "Vous pouvez vous en inspirer mais pas copier exactement. Google pénalise le duplicate content et les stratégies trop similaires. Notre analyse vous montre ce qui fonctionne, mais nous adaptons les recommandations à votre contexte, vos ressources et votre identité de marque pour créer une stratégie différenciante."
          },
          {
            question: "L'analyse concurrentielle suffit-elle ou faut-il aussi un audit de mon site ?",
            answer: "Les deux sont complémentaires. L'analyse concurrentielle identifie les opportunités et la direction à prendre. L'audit de votre site identifie vos problèmes internes et blocages techniques. Idéalement, faites les deux en même temps pour avoir une vision 360° : état des lieux interne + benchmark externe."
          }
        ]}
        relatedServices={[
          {
            title: "Audit SEO",
            description: "Analyse complète de votre site",
            href: "/services/audit-seo-lyon",
            icon: <Search className="w-8 h-8" />
          },
          {
            title: "Consultant SEO",
            description: "Accompagnement stratégique SEO",
            href: "/services/consultant-seo-lyon",
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

export default AnalyseConcurrence;

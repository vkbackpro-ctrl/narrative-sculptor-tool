import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { Link2, TrendingUp, Target, Shield, BarChart3, Zap } from "lucide-react";
import netlinkingHero from "@/assets/referencement-seo-naturel-lyon.jpg";

const Netlinking = () => {
  return (
    <>
      <Helmet>
        <title>Netlinking SEO Lyon - Stratégie Backlinks Qualité | VKBack</title>
        <meta name="description" content="Netlinking et backlinks SEO à Lyon. Stratégie de liens entrants qualitatifs pour augmenter votre autorité de domaine et vos positions Google." />
        <link rel="canonical" href="https://vkback.com/services/netlinking-backlinks-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Qu'est-ce qu'un backlink de qualité en SEO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un backlink de qualité provient d'un site d'autorité dans votre thématique, avec un bon Trust Flow, du trafic réel, et un lien contextuel (dans le contenu, pas en footer). Il doit être naturel (pas suroptimisé), sur une page avec du contenu pertinent, et idéalement en dofollow."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de backlinks faut-il pour bien se positionner ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Il n'y a pas de nombre magique. Cela dépend de la compétitivité de vos mots-clés et du nombre de liens de vos concurrents. Pour des requêtes peu concurrentielles, 10-20 bons liens suffisent. Pour des mots-clés compétitifs à Lyon, comptez 50-100+ backlinks de qualité."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle est la différence entre netlinking white hat et black hat ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le white hat respecte les guidelines Google : obtention de liens naturels via du contenu de qualité, partenariats légitimes et relations presse. Le black hat utilise des techniques risquées : achat massif de liens, PBN (réseaux de sites), spam de commentaires. Nous ne pratiquons que le white hat pour éviter les pénalités."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de temps avant de voir l'impact du netlinking sur les positions ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les premiers effets apparaissent en 2-3 mois : amélioration de l'autorité de domaine et légère hausse des positions. L'impact significatif se mesure en 6-12 mois de netlinking continu. Le netlinking est un investissement long terme mais très rentable."
                }
              },
              {
                "@type": "Question",
                "name": "Puis-je acheter des backlinks directement ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "L'achat direct de liens est contre les guidelines Google et risque une pénalité. Nous ne vendons pas de liens mais proposons des stratégies légitimes : articles sponsorisés sur médias (déclarés nofollow ou sponsored), guest blogging, et création de contenu attractif qui génère des liens naturels."
                }
              },
              {
                "@type": "Question",
                "name": "Comment savoir si un lien est toxique pour mon SEO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un lien toxique provient d'un site spam, pénalisé, avec un Trust Flow faible, du contenu dupliqué ou illégal. Nous utilisons des outils (Majestic, Ahrefs) pour identifier ces liens et les désavouer via Google Search Console pour protéger votre site."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Référencement SEO Lyon", href: "/referencement-seo-lyon" },
          { label: "Netlinking & Backlinks Lyon" }
        ]}
        painPointHook={{
          question: "Votre site manque d'autorité aux yeux de Google ?",
          answer: "Sans backlinks de qualité, vos concurrents vous devancent. Changeons ça."
        }}
        painPoints={[
          { problem: "Bon contenu mais aucune visibilité sur Google", solution: "Les backlinks sont le carburant qui manque", icon: "🔗" },
          { problem: "Concurrents mieux positionnés malgré contenu similaire", solution: "Analyse et stratégie pour les dépasser", icon: "🏆" },
          { problem: "Techniques de netlinking risquées qui vous font peur", solution: "Approche 100% white hat éthique", icon: "✅" },
          { problem: "Budget limité pour des liens de qualité", solution: "Stratégie adaptée à votre budget", icon: "💰" }
        ]}
        heroTitle="Netlinking & Backlinks SEO Lyon"
        heroSubtitle="Votre site stagne malgré du bon contenu ? Les backlinks sont le carburant qui manque. Nous développons votre autorité avec des liens qualitatifs et naturels."
        heroImage={netlinkingHero}
        heroAlt="Netlinking SEO backlinks stratégie liens entrants à Lyon"
        ctaPrimary={{ label: "Renforcer mon autorité", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos résultats", href: "/realisations" }}
        schemaServiceName="Netlinking Backlinks Lyon"
        schemaServiceDescription="Netlinking et backlinks SEO à Lyon. Stratégie de liens entrants qualitatifs pour augmenter votre autorité de domaine et vos positions Google."
        schemaServicePrice="À partir de 800€/mois"
        schemaPageUrl="https://vkback.com/services/netlinking-backlinks-lyon"
        schemaServicePriceRange="600€ - 1500€/mois"
        schemaServiceKeywords={["netlinking Lyon", "backlinks SEO Villeurbanne", "stratégie liens entrants Lyon 1", "acquisition backlinks Rhône-Alpes", "guest blogging Lyon Part-Dieu", "agence netlinking Caluire Croix-Rousse", "création backlinks qualité Écully"]}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Les backlinks (liens entrants depuis d'autres sites) sont l'un des 3 facteurs les plus importants du référencement Google. Notre agence SEO à Lyon développe des stratégies de netlinking éthiques et durables pour augmenter votre autorité et vos positions.
            </p>
            <p className="text-lg leading-relaxed">
              Le netlinking ne consiste pas à acheter des milliers de liens de mauvaise qualité, mais à obtenir des liens pertinents, contextualisés et naturels depuis des sites d'autorité de votre secteur. C'est un travail de longue haleine qui paie durablement.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi le netlinking est essentiel en SEO ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Autorité et confiance Google</h3>
                <p className="text-lg text-muted-foreground">
                  Google considère les backlinks comme des "votes de confiance". Plus vous avez de liens qualitatifs depuis des sites reconnus dans votre thématique, plus Google juge votre site digne de confiance et le positionne favorablement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Impossible de ranker sur les requêtes concurrentielles sans liens</h3>
                <p className="text-lg text-muted-foreground">
                  Sur des mots-clés compétitifs à Lyon, l'optimisation on-page ne suffit plus. Vos concurrents ont des centaines de backlinks. Sans stratégie de netlinking, vous ne pourrez jamais les dépasser, même avec un contenu excellent.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre approche netlinking white hat à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Avec plus de 10 ans d'expérience en SEO à Lyon, nous avons développé un réseau de partenaires médias et blogueurs de qualité dans tous les secteurs. Notre approche privilégie la qualité à la quantité et le white hat aux techniques risquées.
              </p>
              <p className="text-lg">
                Nous créons des stratégies de netlinking naturelles : guest blogging, relations presse digitales, linkbaiting avec contenu viral, partenariats thématiques, et récupération de liens perdus. Chaque lien est contextualisé, pertinent et apporte de la valeur à l'utilisateur.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Analyse du profil de liens",
            description: "Audit de vos backlinks actuels, identification des liens toxiques à désavouer, analyse du profil de liens des concurrents et opportunités de liens."
          },
          {
            title: "Stratégie netlinking personnalisée",
            description: "Définition d'une stratégie adaptée à votre secteur, budget et objectifs : types de liens, ancres optimisées, rythme d'acquisition naturel."
          },
          {
            title: "Création de contenu linkable",
            description: "Production de contenus à forte valeur ajoutée conçus pour attirer des liens naturels : infographies, études, guides complets, outils gratuits."
          },
          {
            title: "Guest blogging & articles sponsorisés",
            description: "Rédaction et publication d'articles invités sur des sites d'autorité de votre thématique avec liens contextuels vers votre site."
          },
          {
            title: "Relations presse digitales",
            description: "Diffusion de communiqués de presse optimisés SEO sur des médias en ligne pour obtenir des backlinks médiatiques de qualité."
          },
          {
            title: "Suivi et reporting mensuel",
            description: "Monitoring des nouveaux backlinks acquis, évolution de l'autorité de domaine (DA), impact sur les positions, désaveu des liens toxiques."
          }
        ]}
        pricing={[
          {
            name: "Audit Backlinks",
            price: "À partir de 600€",
            features: [
              "Analyse profil de liens complet",
              "Identification liens toxiques",
              "Analyse concurrence (5 sites)",
              "Opportunités de liens",
              "Stratégie recommandée",
              "Rapport détaillé",
              "1h de restitution"
            ]
          },
          {
            name: "Netlinking Mensuel",
            price: "À partir de 800€/mois",
            popular: true,
            features: [
              "3-5 backlinks qualité/mois",
              "Création contenu linkable",
              "Guest blogging",
              "Monitoring liens",
              "Désaveu liens toxiques",
              "Reporting mensuel détaillé",
              "Support continu"
            ]
          },
          {
            name: "Netlinking Intensif",
            price: "À partir de 1 500€/mois",
            features: [
              "8-12 backlinks qualité/mois",
              "Relations presse digitales",
              "Linkbaiting avancé",
              "Partenariats thématiques",
              "Récupération liens perdus",
              "Reporting hebdomadaire",
              "Support prioritaire"
            ]
          }
        ]}
        faq={[
          {
            question: "Qu'est-ce qu'un backlink de qualité en SEO ?",
            answer: "Un backlink de qualité provient d'un site d'autorité dans votre thématique, avec un bon Trust Flow, du trafic réel, et un lien contextuel (dans le contenu, pas en footer). Il doit être naturel (pas suroptimisé), sur une page avec du contenu pertinent, et idéalement en dofollow."
          },
          {
            question: "Combien de backlinks faut-il pour bien se positionner ?",
            answer: "Il n'y a pas de nombre magique. Cela dépend de la compétitivité de vos mots-clés et du nombre de liens de vos concurrents. Pour des requêtes peu concurrentielles, 10-20 bons liens suffisent. Pour des mots-clés compétitifs à Lyon, comptez 50-100+ backlinks de qualité."
          },
          {
            question: "Quelle est la différence entre netlinking white hat et black hat ?",
            answer: "Le white hat respecte les guidelines Google : obtention de liens naturels via du contenu de qualité, partenariats légitimes et relations presse. Le black hat utilise des techniques risquées : achat massif de liens, PBN (réseaux de sites), spam de commentaires. Nous ne pratiquons que le white hat pour éviter les pénalités."
          },
          {
            question: "Combien de temps avant de voir l'impact du netlinking sur les positions ?",
            answer: "Les premiers effets apparaissent en 2-3 mois : amélioration de l'autorité de domaine et légère hausse des positions. L'impact significatif se mesure en 6-12 mois de netlinking continu. Le netlinking est un investissement long terme mais très rentable."
          },
          {
            question: "Puis-je acheter des backlinks directement ?",
            answer: "L'achat direct de liens est contre les guidelines Google et risque une pénalité. Nous ne vendons pas de liens mais proposons des stratégies légitimes : articles sponsorisés sur médias (déclarés nofollow ou sponsored), guest blogging, et création de contenu attractif qui génère des liens naturels."
          },
          {
            question: "Comment savoir si un lien est toxique pour mon SEO ?",
            answer: "Un lien toxique provient d'un site spam, pénalisé, avec un Trust Flow faible, du contenu dupliqué ou illégal. Nous utilisons des outils (Majestic, Ahrefs) pour identifier ces liens et les désavouer via Google Search Console pour protéger votre site."
          }
        ]}
        relatedServices={[
          {
            title: "Audit SEO",
            description: "Analyse complète de votre site",
            href: "/services/audit-seo-lyon",
            icon: <Target className="w-8 h-8" />
          },
          {
            title: "Référencement SEO",
            description: "Optimisation globale de votre référencement",
            href: "/referencement-seo-lyon",
            icon: <TrendingUp className="w-8 h-8" />
          }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default Netlinking;

import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { FileText, PenTool, Target, TrendingUp, Search, Zap, Bot } from "lucide-react";
import redactionHero from "@/assets/referencement-seo-naturel-lyon.jpg";

const RedactionWeb = () => {
  return (
    <>
      <Helmet>
        <title>Rédaction Web SEO Lyon - Contenu Optimisé Google | VKBack</title>
        <meta name="description" content="Rédaction web SEO à Lyon. Création de contenu optimisé pour Google : articles de blog, fiches produits, pages de services. Rédacteurs experts SEO." />
        <link rel="canonical" href="https://vkback.com/services/redaction-web-seo-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quelle est la longueur idéale d'un article de blog SEO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Il n'y a pas de longueur idéale universelle. Cela dépend de l'intention de recherche et de la concurrence. Pour des requêtes informationnelles compétitives, comptez 1500-2500 mots. Pour des questions simples, 800-1200 mots suffisent. L'important est de répondre complètement à la question de l'utilisateur."
                }
              },
              {
                "@type": "Question",
                "name": "Dois-je publier du contenu régulièrement pour le SEO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, la fréquence de publication est un signal positif pour Google. Nous recommandons 2-4 articles par mois minimum pour des résultats SEO significatifs. La régularité est plus importante que la quantité : mieux vaut 2 articles de qualité par mois que 10 contenus médiocres."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle est la différence entre rédaction web et rédaction SEO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La rédaction web classique se concentre sur le style et l'engagement. La rédaction SEO ajoute une couche d'optimisation : recherche de mots-clés, structure Hn optimisée, densité des mots-clés, maillage interne, et respect des critères E-E-A-T de Google. C'est du contenu qui plait aux humains ET à Google."
                }
              },
              {
                "@type": "Question",
                "name": "Faut-il réécrire tout mon ancien contenu ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pas nécessairement. Nous recommandons un audit de contenu pour identifier les pages à forte valeur (bon trafic mais mauvais positionnement) et les optimiser en priorité. Mieux vaut optimiser 20 pages stratégiques que réécrire 100 pages peu importantes."
                }
              },
              {
                "@type": "Question",
                "name": "Le contenu IA (ChatGPT) est-il bon pour le SEO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le contenu 100% IA est détectable par Google et souvent de faible qualité (générique, répétitif, sans expertise). Nous utilisons l'IA comme assistant pour la recherche et la structure, mais tous nos contenus sont rédigés, enrichis et vérifiés par des rédacteurs humains experts."
                }
              },
              {
                "@type": "Question",
                "name": "Comment mesurez-vous le ROI de la rédaction web SEO ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous suivons les KPIs suivants : positions Google des mots-clés ciblés, trafic organique généré par chaque article, taux de conversion (formulaires, ventes), temps passé sur la page, et taux de rebond. Un bon article de blog peut générer 500-5000 visiteurs/mois pendant des années."
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
          { label: "Rédaction Web SEO Lyon" }
        ]}
        painPointHook={{
          question: "Pas le temps d'écrire du contenu ? Ou vos textes ne rankent pas sur Google ?",
          answer: "La rédaction SEO est un métier. Déléguez à des experts."
        }}
        heroTitle="Rédaction Web SEO Lyon"
        heroSubtitle="Zéro trafic sur vos articles ? Contenus qui ne convertissent pas ? Nous rédigeons des textes optimisés SEO qui positionnent ET engagent vos visiteurs."
        heroImage={redactionHero}
        heroAlt="Rédaction web SEO contenu optimisé Google à Lyon"
        ctaPrimary={{ label: "Commander du contenu", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos offres", href: "#tarifs" }}
        schemaServiceName="Rédaction Web SEO Lyon"
        schemaServiceDescription="Rédaction web SEO à Lyon. Création de contenu optimisé pour Google : articles de blog, fiches produits, pages de services. Rédacteurs experts SEO."
        schemaServicePrice="À partir de 150€/article"
        schemaPageUrl="https://vkback.com/services/redaction-web-seo-lyon"
        schemaServicePriceRange="150€ - 500€/article"
        schemaServiceKeywords={["rédaction web SEO Lyon", "contenu optimisé Google Villeurbanne", "rédacteur web Lyon 2", "articles blog SEO Rhône-Alpes", "création contenu Lyon Part-Dieu", "rédaction fiches produits Caluire", "copywriting SEO Écully Presqu'île"]}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Le contenu est le carburant du SEO. Sans contenu de qualité, optimisé et régulièrement publié, votre site stagne dans les résultats Google. Notre agence à Lyon rédige du contenu SEO qui positionne, engage vos visiteurs et convertit.
            </p>
            <p className="text-lg leading-relaxed">
              Nous ne rédigeons pas de contenu générique bourré de mots-clés. Nos rédacteurs web experts SEO créent des contenus à forte valeur ajoutée qui répondent précisément aux intentions de recherche de votre audience tout en respectant les critères de qualité Google.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi investir dans la rédaction web SEO ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Le contenu est le ROI le plus élevé en SEO</h3>
                <p className="text-lg text-muted-foreground">
                  Un article de blog bien optimisé peut vous apporter du trafic gratuit pendant des années. Contrairement à la publicité qui s'arrête dès que vous coupez le budget, le contenu SEO génère un ROI durable et croissant dans le temps.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Google favorise le contenu frais et de qualité</h3>
                <p className="text-lg text-muted-foreground">
                  Les sites qui publient régulièrement du contenu expert et à jour sont mieux classés. Google évalue la qualité, l'expertise (E-E-A-T) et la fraîcheur du contenu. Publier 2-4 articles/mois améliore significativement votre visibilité SEO.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre méthode de rédaction web SEO à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Avec plus de 10 ans d'expérience en SEO à Lyon, nos rédacteurs web maîtrisent l'équilibre entre optimisation Google et qualité rédactionnelle. Nous ne produisons pas du contenu à la chaîne mais du contenu pensé pour votre audience et vos objectifs business.
              </p>
              <p className="text-lg">
                Chaque contenu suit notre processus éprouvé : recherche de mots-clés et d'intentions de recherche, brief rédactionnel SEO détaillé, rédaction par un expert de votre secteur, optimisation on-page (balises, structure Hn, maillage interne), et relecture qualité avant livraison.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Recherche de mots-clés",
            description: "Identification des mots-clés stratégiques pour votre activité, analyse de l'intention de recherche, étude de la concurrence et opportunités de contenu."
          },
          {
            title: "Brief rédactionnel SEO",
            description: "Document détaillé avec mots-clés principaux et secondaires, structure Hn optimisée, longueur cible, angle éditorial et consignes de style."
          },
          {
            title: "Rédaction experte",
            description: "Rédaction par des experts de votre secteur qui connaissent votre métier. Contenu unique, informatif et engageant qui répond aux questions de votre audience."
          },
          {
            title: "Optimisation on-page",
            description: "Optimisation des balises title et meta, structure des titres (H1-H6), densité des mots-clés, maillage interne, images alt text et URL SEO-friendly."
          },
          {
            title: "Contenu enrichi",
            description: "Ajout d'éléments visuels (images, infographies), vidéos, tableaux comparatifs, FAQ schema markup pour enrichir l'expérience et le SEO."
          },
          {
            title: "Suivi des performances",
            description: "Monitoring des positions Google de chaque contenu, analyse du trafic généré, taux de conversion, et optimisations continues pour améliorer les résultats."
          }
        ]}
        pricing={[
          {
            name: "Article de Blog SEO",
            price: "À partir de 150€",
            features: [
              "1 article 800-1200 mots",
              "Recherche mots-clés incluse",
              "Optimisation on-page",
              "Images libres de droits",
              "1 révision incluse",
              "Livraison 5-7 jours",
              "Format WordPress prêt"
            ]
          },
          {
            name: "Pack Contenu Mensuel",
            price: "À partir de 500€/mois",
            popular: true,
            features: [
              "4 articles de blog/mois",
              "1500-2000 mots/article",
              "Stratégie éditoriale incluse",
              "Optimisation SEO avancée",
              "Maillage interne optimisé",
              "Révisions illimitées",
              "Reporting mensuel"
            ]
          },
          {
            name: "Rédaction Sur-Mesure",
            price: "Sur devis",
            features: [
              "Piliers de contenu (3000+ mots)",
              "Fiches produits e-commerce",
              "Pages de services",
              "Guides et livres blancs",
              "Rédaction technique/juridique",
              "Interviews et témoignages",
              "Support prioritaire"
            ]
          }
        ]}
        faq={[
          {
            question: "Quelle est la longueur idéale d'un article de blog SEO ?",
            answer: "Il n'y a pas de longueur idéale universelle. Cela dépend de l'intention de recherche et de la concurrence. Pour des requêtes informationnelles compétitives, comptez 1500-2500 mots. Pour des questions simples, 800-1200 mots suffisent. L'important est de répondre complètement à la question de l'utilisateur."
          },
          {
            question: "Dois-je publier du contenu régulièrement pour le SEO ?",
            answer: "Oui, la fréquence de publication est un signal positif pour Google. Nous recommandons 2-4 articles par mois minimum pour des résultats SEO significatifs. La régularité est plus importante que la quantité : mieux vaut 2 articles de qualité par mois que 10 contenus médiocres."
          },
          {
            question: "Quelle est la différence entre rédaction web et rédaction SEO ?",
            answer: "La rédaction web classique se concentre sur le style et l'engagement. La rédaction SEO ajoute une couche d'optimisation : recherche de mots-clés, structure Hn optimisée, densité des mots-clés, maillage interne, et respect des critères E-E-A-T de Google. C'est du contenu qui plait aux humains ET à Google."
          },
          {
            question: "Faut-il réécrire tout mon ancien contenu ?",
            answer: "Pas nécessairement. Nous recommandons un audit de contenu pour identifier les pages à forte valeur (bon trafic mais mauvais positionnement) et les optimiser en priorité. Mieux vaut optimiser 20 pages stratégiques que réécrire 100 pages peu importantes."
          },
          {
            question: "Le contenu IA (ChatGPT) est-il bon pour le SEO ?",
            answer: "Le contenu 100% IA est détectable par Google et souvent de faible qualité (générique, répétitif, sans expertise). Nous utilisons l'IA comme assistant pour la recherche et la structure, mais tous nos contenus sont rédigés, enrichis et vérifiés par des rédacteurs humains experts."
          },
          {
            question: "Comment mesurez-vous le ROI de la rédaction web SEO ?",
            answer: "Nous suivons les KPIs suivants : positions Google des mots-clés ciblés, trafic organique généré par chaque article, taux de conversion (formulaires, ventes), temps passé sur la page, et taux de rebond. Un bon article de blog peut générer 500-5000 visiteurs/mois pendant des années."
          }
        ]}
        relatedServices={[
          {
            title: "Référencement SEO",
            description: "Optimisation globale de votre site",
            href: "/referencement-seo-lyon",
            icon: <TrendingUp className="w-8 h-8" />
          },
          {
            title: "GEO - Référencement IA",
            description: "Contenu optimisé pour ChatGPT et Google AI",
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

export default RedactionWeb;

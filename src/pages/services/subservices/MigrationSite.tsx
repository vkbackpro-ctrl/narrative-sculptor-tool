import { Helmet } from "react-helmet";
import ServiceTemplate from "@/components/ServiceTemplate";
import { TrendingUp, Shield, Zap, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import heroImage from "@/assets/migration-site-wordpress-lyon.jpg";

const MigrationSite = () => {
  return (
    <>
      <Helmet>
        <title>Migration Site vers WordPress Lyon | VKBack</title>
        <meta 
          name="description" 
          content="Migration site internet vers WordPress à Lyon. Transfert sécurisé, conservation du SEO, zéro perte de données. Expertise migration depuis tous CMS." 
        />
        <link rel="canonical" href="https://vkback.fr/migration-site-internet-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Création de Site Internet", href: "/creation-site-internet-lyon" },
          { label: "Migration Site Lyon" }
        ]}
        painPointHook={{
          question: "Votre CMS actuel vous limite ou votre site est obsolète ?",
          answer: "Migrez vers WordPress sans perdre votre SEO ni vos données."
        }}
        heroTitle="Migration de Site vers WordPress à Lyon"
        heroSubtitle="Site vieillissant sur Joomla, Drupal ou plateforme propriétaire ? Nous migrons tout vers WordPress en conservant 100% de votre référencement Google."
        heroImage={heroImage}
        heroAlt="Migration site vers WordPress Lyon - Transfert sécurisé conservation SEO données"
        ctaPrimary={{ label: "Migrer mon site", href: "/contact" }}
        ctaSecondary={{ label: "Voir le processus", href: "#tarifs" }}
        
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Votre site actuel ne répond plus à vos besoins ? La <strong>migration vers WordPress</strong> vous permet 
              de bénéficier d'un CMS moderne, flexible et puissant tout en conservant votre référencement Google 
              et vos contenus existants.
            </p>
            <p className="text-lg leading-relaxed">
              Nous gérons la migration complète depuis n'importe quel CMS ou site HTML vers WordPress : 
              transfert des contenus, redirections SEO, design moderne et formation à la nouvelle plateforme.
            </p>
          </div>
        }
        
        whySection={{
          title: "Pourquoi Migrer vers WordPress ?",
          content: (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg border">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Flexibilité Maximale</h3>
                <p className="text-muted-foreground">
                  WordPress offre infinies possibilités d'évolution et des milliers d'extensions pour étendre les fonctionnalités.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">SEO Préservé</h3>
                <p className="text-muted-foreground">
                  Mise en place de redirections 301 pour conserver 100% de votre référencement Google acquis.
                </p>
              </div>
            </div>
          )
        }}
        
        expertise={{
          title: "Processus de Migration vers WordPress",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Notre processus de migration sécurisé garantit zéro perte de données et conservation totale du SEO. 
                Nous testons exhaustivement avant la bascule et assurons un suivi post-migration.
              </p>
              <p className="text-lg">
                Nous migrons depuis tous les CMS (Joomla, Drupal, sites HTML statiques, anciennes plateformes propriétaires) 
                vers WordPress. À Lyon, nous avons accompagné des dizaines d'entreprises dans leur transition vers WordPress 
                avec succès : référencement préservé, design modernisé et autonomie retrouvée sur leur site.
              </p>
            </div>
          )
        }}
        
        features={[
          {
            title: "Audit Complet de l'Existant",
            description: "Analyse détaillée de votre site actuel : contenus, URLs, référencement, fonctionnalités et performances"
          },
          {
            title: "Transfert Intégral des Contenus",
            description: "Migration de tous vos textes, images, documents, médias et base de données vers WordPress"
          },
          {
            title: "Plan de Redirections 301",
            description: "Mapping complet anciennes vers nouvelles URLs pour conserver 100% du référencement Google"
          },
          {
            title: "Design WordPress Modernisé",
            description: "Nouvelle interface responsive et moderne adaptée à votre charte graphique existante"
          },
          {
            title: "Tests & Validation Pré-Bascule",
            description: "Tests exhaustifs sur environnement de staging avant mise en production définitive"
          },
          {
            title: "Suivi Post-Migration",
            description: "Surveillance du référencement et corrections pendant 1 mois après la mise en ligne"
          }
        ]}
        
        pricing={[
          {
            name: "Migration Site Simple",
            price: "À partir de 1 800€",
            features: [
              "Site jusqu'à 20 pages",
              "Audit basique",
              "Transfert contenus",
              "Redirections 301",
              "Design WordPress standard",
              "Formation 2h",
              "Support 1 mois"
            ]
          },
          {
            name: "Migration Site Business",
            price: "À partir de 3 000€",
            popular: true,
            features: [
              "Site jusqu'à 50 pages",
              "Audit complet détaillé",
              "Transfert intégral + médias",
              "Plan redirections SEO avancé",
              "Design WordPress sur-mesure",
              "Tests pré-bascule complets",
              "Formation 4h",
              "Support 2 mois"
            ]
          },
          {
            name: "Migration Site Complexe",
            price: "À partir de 5 000€",
            features: [
              "Site 50+ pages ou e-commerce",
              "Audit technique approfondi",
              "Migration base de données",
              "Redirections + stratégie SEO",
              "Design premium WordPress",
              "Intégrations spécifiques",
              "Formation complète équipe",
              "Support 3 mois + suivi SEO"
            ]
          }
        ]}
        
        faq={[
          {
            question: "Vais-je perdre mon référencement Google ?",
            answer: "Non, avec une migration bien exécutée et des redirections 301 correctement configurées, votre référencement est préservé à 100%. Nous assurons un suivi post-migration pour vérifier que toutes les positions sont maintenues."
          },
          {
            question: "Combien de temps dure une migration ?",
            answer: "Selon la taille et complexité de votre site, une migration prend entre 2 et 6 semaines. Cela inclut l'audit, le développement, les tests et la mise en production avec période de surveillance."
          },
          {
            question: "Depuis quels CMS pouvez-vous migrer vers WordPress ?",
            answer: "Nous migrons depuis tous les CMS : Joomla, Drupal, sites HTML statiques, anciennes plateformes propriétaires, solutions e-commerce diverses. Quelle que soit votre situation actuelle, nous avons l'expertise pour basculer vers WordPress en toute sécurité."
          },
          {
            question: "Puis-je garder mon nom de domaine et hébergement ?",
            answer: "Oui, vous gardez votre nom de domaine. Pour l'hébergement, vous pouvez conserver le vôtre s'il est compatible WordPress, ou nous vous recommandons un hébergeur optimisé WordPress français. Nous gérons toute la partie technique du transfert."
          }
        ]}
        
        relatedServices={[
          {
            title: "Refonte de Site",
            description: "Modernisation complète de votre site",
            href: "/refonte-site-internet-lyon",
            icon: <TrendingUp className="w-8 h-8" />
          },
          {
            title: "Référencement SEO",
            description: "Optimisation SEO post-migration",
            href: "/referencement-seo-lyon",
            icon: <CheckCircle className="w-8 h-8" />
          }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default MigrationSite;

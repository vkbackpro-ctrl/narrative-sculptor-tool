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
        <link rel="canonical" href="https://vkback.com/migration-site-internet-lyon" />
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
        heroTitle="Migration de Site vers WordPress à Lyon"
        heroSubtitle="Migrez votre site vers WordPress en toute sécurité. Conservation du SEO, transfert des données, redirections 301 et accompagnement personnalisé."
        heroImage={heroImage}
        heroAlt="Migration site vers WordPress Lyon - Transfert sécurisé conservation SEO données"
        
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
          title: "Processus de Migration",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Notre processus de migration sécurisé garantit zéro perte de données et conservation totale du SEO. 
                Nous testons exhaustivement avant la bascule et assurons un suivi post-migration.
              </p>
            </div>
          )
        }}
        
        features={[
          {
            title: "Audit de l'Existant",
            description: "Analyse complète de votre site actuel : contenus, URLs, référencement et fonctionnalités"
          },
          {
            title: "Transfert des Contenus",
            description: "Migration de tous vos textes, images, documents et médias vers WordPress"
          },
          {
            title: "Redirections SEO 301",
            description: "Mapping complet des anciennes vers nouvelles URLs pour conserver le référencement"
          },
          {
            title: "Design Modernisé",
            description: "Nouvelle interface WordPress responsive et moderne adaptée à votre charte"
          }
        ]}
        
        pricing={[
          {
            name: "Migration Site",
            price: "À partir de 2 000€",
            features: [
              "Audit du site actuel",
              "Transfert des contenus",
              "Redirections 301 complètes",
              "Design WordPress responsive",
              "Formation WordPress",
              "Support 1 mois"
            ],
            popular: true
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

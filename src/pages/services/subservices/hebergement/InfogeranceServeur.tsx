import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { Shield, Server } from "lucide-react";
import heroHebergement from "@/assets/infogerance-serveur-admin-lyon.jpg";

const InfogeranceServeur = () => {
  return (
    <>
      <Helmet>
        <title>Infogérance Serveur Lyon | Gestion Technique - VKBack</title>
        <meta name="description" content="Infogérance serveur à Lyon. Gestion technique complète de votre infrastructure : monitoring, sécurité, mises à jour et support expert." />
        <link rel="canonical" href="https://vkback.com/infogerance-serveur-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Pouvez-vous gérer un serveur que je loue ailleurs ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, nous pouvons infogérer des serveurs chez OVH, Scaleway, AWS, ou tout autre hébergeur. Nous avons juste besoin d'un accès administrateur." }},
              { "@type": "Question", "name": "Que se passe-t-il en cas de panne la nuit ?", "acceptedAnswer": { "@type": "Answer", "text": "Notre monitoring détecte les pannes automatiquement. Selon votre contrat, nous intervenons immédiatement ou dès le lendemain matin." }},
              { "@type": "Question", "name": "Ai-je toujours accès à mon serveur ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, vous gardez un accès complet. Nous travaillons en coordination avec vous et documentons toutes nos interventions." }},
              { "@type": "Question", "name": "Quelle différence avec l'infogérance WordPress ?", "acceptedAnswer": { "@type": "Answer", "text": "L'infogérance serveur gère l'infrastructure (OS, services, sécurité système). L'infogérance WordPress gère l'application (mises à jour CMS, plugins, contenus)." }}
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
          { label: "Hébergement Web Lyon", href: "/hebergement-web-lyon" },
          { label: "Infogérance Serveur Lyon" }
        ]}
        painPointHook={{
          question: "Vous n'avez pas le temps ni les compétences pour gérer votre serveur ?",
          answer: "Confiez-nous l'administration, concentrez-vous sur votre business."
        }}
        painPoints={[
          { problem: "Administration serveur trop complexe", solution: "Gestion complète par nos experts sysadmin", icon: "🛠️" },
          { problem: "Pannes et incidents non anticipés", solution: "Monitoring 24/7 avec alertes proactives", icon: "🚨" },
          { problem: "Mises à jour de sécurité négligées", solution: "Patches et updates appliqués régulièrement", icon: "🔒" },
          { problem: "Pas de temps pour optimiser les performances", solution: "Optimisations continues incluses", icon: "⚡" }
        ]}
        heroTitle="Infogérance Serveur Lyon"
        heroSubtitle="Déléguez la gestion technique de votre serveur à nos experts. Monitoring 24/7, sécurité, mises à jour et support réactif inclus."
        heroImage={heroHebergement}
        heroAlt="Infogérance serveur Lyon - Administration technique infrastructure"
        ctaPrimary={{ label: "Demander un devis", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos offres", href: "/tarifs" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              L'infogérance serveur, c'est externaliser l'administration technique de votre infrastructure. Nos experts gèrent tout : installation, configuration, sécurité, mises à jour et monitoring.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi externaliser l'administration serveur ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Expertise à la demande</h3>
                <p className="text-lg text-muted-foreground">
                  Un administrateur système senior coûte cher à temps plein. L'infogérance vous donne accès à cette expertise pour une fraction du coût.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Tranquillité d'esprit</h3>
                <p className="text-lg text-muted-foreground">
                  Monitoring 24/7, interventions proactives, mises à jour de sécurité : vous dormez tranquille pendant que nous veillons sur votre serveur.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre service d'infogérance à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Nous gérons des serveurs pour des PME lyonnaises depuis 14 ans. Notre équipe maîtrise les environnements Linux, les stacks LAMP/LEMP et les spécificités WordPress/WooCommerce.
              </p>
            </div>
          )
        }}
        features={[
          { title: "Monitoring 24/7", description: "Surveillance permanente avec alertes et interventions proactives." },
          { title: "Mises à jour sécurité", description: "Patches de sécurité appliqués rapidement pour protéger votre serveur." },
          { title: "Sauvegardes automatiques", description: "Backup quotidien avec tests de restauration réguliers." },
          { title: "Optimisation performance", description: "Configuration et tuning pour des performances optimales." },
          { title: "Gestion des incidents", description: "Intervention rapide en cas de problème, jour et nuit." },
          { title: "Rapports mensuels", description: "Bilan d'activité, métriques et recommandations." }
        ]}
        pricing={[
          { name: "Infogérance Basique", price: "99€/mois", features: ["Monitoring 24/7", "Mises à jour mensuelles", "Backup hebdomadaire", "Support email", "Intervention J+1"] },
          { name: "Infogérance Pro", price: "199€/mois", popular: true, features: ["Monitoring avancé", "Mises à jour continues", "Backup quotidien", "Support prioritaire", "Intervention < 4h", "Rapport mensuel"] },
          { name: "Infogérance Premium", price: "399€/mois", features: ["Monitoring temps réel", "Gestion proactive", "Backup temps réel", "Support téléphone", "Intervention < 1h", "SLA garanti"] }
        ]}
        faq={[
          { question: "Pouvez-vous gérer un serveur que je loue ailleurs ?", answer: "Oui, nous pouvons infogérer des serveurs chez OVH, Scaleway, AWS, ou tout autre hébergeur. Nous avons juste besoin d'un accès administrateur." },
          { question: "Que se passe-t-il en cas de panne la nuit ?", answer: "Notre monitoring détecte les pannes automatiquement. Selon votre contrat, nous intervenons immédiatement ou dès le lendemain matin." },
          { question: "Ai-je toujours accès à mon serveur ?", answer: "Oui, vous gardez un accès complet. Nous travaillons en coordination avec vous et documentons toutes nos interventions." },
          { question: "Quelle différence avec l'infogérance WordPress ?", answer: "L'infogérance serveur gère l'infrastructure (OS, services, sécurité système). L'infogérance WordPress gère l'application (mises à jour CMS, plugins, contenus)." }
        ]}
        relatedServices={[
          { title: "Serveur Dédié", description: "Location de serveur managé", href: "/serveur-dedie-lyon", icon: <Server className="w-8 h-8" /> },
          { title: "Infogérance WordPress", description: "Gestion de votre CMS", href: "/services/infogerance-wordpress-lyon", icon: <Shield className="w-8 h-8" /> }
        ]}
        schemaServiceName="Infogérance Serveur Lyon"
        schemaServiceDescription="Infogérance serveur à Lyon. Gestion technique complète de votre infrastructure : monitoring, sécurité, mises à jour et support expert."
        schemaServicePrice="À partir de 99€/mois"
        schemaPageUrl="https://vkback.com/infogerance-serveur-lyon"
        schemaServicePriceRange="99€ - 399€/mois"
        schemaServiceKeywords={["infogérance serveur Lyon", "gestion serveur Lyon", "administration serveur Villeurbanne", "infogérance technique Lyon 3", "monitoring serveur Rhône-Alpes", "gestion infrastructure Lyon Part-Dieu", "maintenance serveur Caluire", "administration système Écully"]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default InfogeranceServeur;

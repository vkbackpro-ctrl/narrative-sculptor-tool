import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { Zap, Server } from "lucide-react";
import heroHebergement from "@/assets/hebergement-web-france-serveurs.jpg";

const MigrationHebergement = () => {
  return (
    <>
      <Helmet>
        <title>Migration Hébergement Lyon | Transfert Site Web - VKBack</title>
        <meta name="description" content="Migration d'hébergement à Lyon sans coupure de service. Transfert de votre site vers un hébergeur performant en toute sécurité." />
        <link rel="canonical" href="https://vkback.com/migration-hebergement-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Hébergement Web Lyon", href: "/hebergement-web-lyon" },
          { label: "Migration Hébergement Lyon" }
        ]}
        painPointHook={{
          question: "Vous voulez changer d'hébergeur mais craignez la coupure ?",
          answer: "Nous migrons votre site sans interruption de service."
        }}
        heroTitle="Migration Hébergement Lyon"
        heroSubtitle="Votre hébergeur actuel ne vous satisfait plus ? Nous transférons votre site vers un hébergement performant sans aucune coupure de service."
        heroImage={heroHebergement}
        heroAlt="Migration hébergement Lyon - Transfert site web sans coupure"
        ctaPrimary={{ label: "Migrer mon site", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos offres", href: "/tarifs" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Changer d'hébergeur peut sembler risqué : peur de perdre des données, de casser le site ou d'avoir une longue coupure. Notre processus de migration élimine ces risques.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi nous confier votre migration ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Zéro temps d'arrêt</h3>
                <p className="text-lg text-muted-foreground">
                  Nous copions d'abord tout sur le nouvel hébergement, testons, puis basculons les DNS. Votre site reste accessible pendant toute l'opération.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre processus de migration",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Audit de l'existant, copie complète des fichiers et base de données, tests sur environnement temporaire, puis bascule DNS coordonnée. Vérification post-migration et rollback possible si nécessaire.
              </p>
            </div>
          )
        }}
        features={[
          { title: "Audit pré-migration", description: "Analyse de votre site actuel et planification du transfert." },
          { title: "Copie complète", description: "Transfert de tous les fichiers, base de données et emails." },
          { title: "Tests avant bascule", description: "Vérification complète sur URL temporaire avant mise en production." },
          { title: "Bascule DNS", description: "Changement des serveurs de noms sans coupure perceptible." },
          { title: "Vérification post-migration", description: "Tests fonctionnels et monitoring les premiers jours." },
          { title: "Support réactif", description: "Assistance en cas de problème après la migration." }
        ]}
        pricing={[
          { name: "Migration Simple", price: "190€", features: ["Site vitrine WordPress", "Copie fichiers + BDD", "Configuration serveur", "Bascule DNS", "Vérification"] },
          { name: "Migration E-commerce", price: "390€", popular: true, features: ["Boutique WooCommerce", "Migration complète", "Test commandes", "SSL configuré", "Support 1 semaine"] },
          { name: "Migration Complexe", price: "Sur devis", features: ["Multi-sites", "Volumes importants", "Emails à migrer", "Configuration avancée", "Support étendu"] }
        ]}
        faq={[
          { question: "Combien de temps dure une migration ?", answer: "Une migration simple prend 1-2 jours. Pour les sites complexes ou e-commerce, comptez 3-5 jours avec phase de tests approfondie." },
          { question: "Mon site sera-t-il inaccessible pendant la migration ?", answer: "Non, nous utilisons une méthode de migration sans coupure. Votre site reste accessible sur l'ancien hébergement pendant que nous préparons le nouveau." },
          { question: "Faut-il résilier mon ancien hébergement avant ?", answer: "Non, gardez-le actif jusqu'à la fin de la migration et la propagation DNS (24-48h). Nous vous dirons quand vous pourrez le résilier." },
          { question: "Que se passe-t-il si quelque chose ne fonctionne pas ?", answer: "Nous gardons une sauvegarde complète et pouvons revenir en arrière rapidement si nécessaire. C'est notre filet de sécurité." }
        ]}
        relatedServices={[
          { title: "Hébergement WordPress", description: "Notre offre d'hébergement", href: "/hebergement-wordpress-lyon", icon: <Server className="w-8 h-8" /> },
          { title: "CDN & Performances", description: "Accélération de votre site", href: "/cdn-acceleration-site-lyon", icon: <Zap className="w-8 h-8" /> }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default MigrationHebergement;

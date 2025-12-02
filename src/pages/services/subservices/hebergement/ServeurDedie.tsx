import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { HardDrive, Server } from "lucide-react";
import heroHebergement from "@/assets/hebergement-web-france-serveurs.jpg";

const ServeurDedie = () => {
  return (
    <>
      <Helmet>
        <title>Serveur Dédié Lyon | Hébergement Haute Performance - VKBack</title>
        <meta name="description" content="Serveur dédié à Lyon avec ressources garanties. Performance maximale, sécurité totale et gestion complète pour sites à fort trafic." />
        <link rel="canonical" href="https://vkback.com/serveur-dedie-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Hébergement Web Lyon", href: "/hebergement-web-lyon" },
          { label: "Serveur Dédié Lyon" }
        ]}
        painPointHook={{
          question: "Votre site partage ses ressources avec des milliers d'autres ?",
          answer: "Un serveur dédié vous garantit des performances constantes."
        }}
        heroTitle="Serveur Dédié Lyon"
        heroSubtitle="Ressources 100% dédiées à votre projet. Performance maximale, contrôle total et sécurité renforcée pour les sites exigeants."
        heroImage={heroHebergement}
        heroAlt="Serveur dédié Lyon - Hébergement haute performance ressources garanties"
        ctaPrimary={{ label: "Demander un devis", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos offres", href: "/tarifs" }}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Un serveur dédié vous offre des ressources exclusives : CPU, RAM et stockage ne sont partagés avec personne. Idéal pour les sites à fort trafic ou les applications critiques.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi choisir un serveur dédié ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Performances garanties</h3>
                <p className="text-lg text-muted-foreground">
                  Contrairement à l'hébergement mutualisé, vos performances ne dépendent pas des autres sites. Ressources constantes 24/7.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Serveurs dédiés managés à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Nous gérons l'administration de votre serveur : mises à jour, sécurité, monitoring, backups. Vous profitez de la puissance d'un dédié sans la complexité technique.
              </p>
            </div>
          )
        }}
        features={[
          { title: "Ressources dédiées", description: "CPU, RAM et stockage exclusivement pour vous." },
          { title: "Administration complète", description: "Installation, configuration et maintenance incluses." },
          { title: "Monitoring 24/7", description: "Surveillance permanente avec alertes proactives." },
          { title: "Sécurité renforcée", description: "Firewall, anti-DDoS et mises à jour de sécurité." },
          { title: "Backup quotidien", description: "Sauvegarde complète avec restauration rapide." },
          { title: "Support expert", description: "Assistance technique par des administrateurs système." }
        ]}
        pricing={[
          { name: "Dédié Entry", price: "149€/mois", features: ["4 cœurs CPU", "16 Go RAM", "500 Go SSD", "Bande passante 1 Gbps", "Infogérance basique"] },
          { name: "Dédié Pro", price: "299€/mois", popular: true, features: ["8 cœurs CPU", "32 Go RAM", "1 To SSD NVMe", "Bande passante 1 Gbps", "Infogérance complète", "Support prioritaire"] },
          { name: "Dédié Enterprise", price: "Sur devis", features: ["Configuration sur-mesure", "Multi-serveurs", "Load balancing", "SLA 99,99%", "Support dédié"] }
        ]}
        faq={[
          { question: "Quelle différence avec un VPS ?", answer: "Un serveur dédié offre du matériel physique exclusif, un VPS partage le matériel avec virtualisation. Le dédié offre des performances supérieures et plus prévisibles." },
          { question: "Faut-il des compétences techniques ?", answer: "Non, nous gérons tout : installation, configuration, sécurité et maintenance. Vous n'avez rien à administrer." },
          { question: "Puis-je faire évoluer les ressources ?", answer: "Oui, nous pouvons upgrader RAM, stockage ou migrer vers un serveur plus puissant selon vos besoins." },
          { question: "Où sont situés vos serveurs ?", answer: "En France (Paris et Lyon) pour une latence minimale et le respect du RGPD." }
        ]}
        relatedServices={[
          { title: "VPS Managé", description: "Alternative plus économique", href: "/vps-manage-lyon", icon: <Server className="w-8 h-8" /> },
          { title: "Infogérance Serveur", description: "Gestion technique complète", href: "/infogerance-serveur-lyon", icon: <HardDrive className="w-8 h-8" /> }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default ServeurDedie;

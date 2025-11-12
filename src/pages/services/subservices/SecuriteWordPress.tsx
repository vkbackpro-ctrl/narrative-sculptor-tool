import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ServiceTemplate from '@/components/ServiceTemplate';
import { Shield, Lock, AlertTriangle, Eye, FileCheck, Server } from 'lucide-react';
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@/components/ProgressBar";
import StickyCtaButton from "@/components/StickyCtaButton";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import heroSecurite from "@/assets/securite-wordpress-lyon.jpg";

const SecuriteWordPress = () => {
  const features = [
    {
      title: "Firewall Applicatif WAF",
      description: "Pare-feu WordPress qui bloque les attaques SQL injection, XSS et brute force."
    },
    {
      title: "Scan Anti-Malware",
      description: "Analyse quotidienne des fichiers pour détecter codes malveillants et backdoors."
    },
    {
      title: "Protection Brute Force",
      description: "Limitation des tentatives de connexion et blocage IP automatique après 3 échecs."
    },
    {
      title: "Monitoring 24/7",
      description: "Surveillance permanente avec alertes temps réel en cas d'activité suspecte."
    },
    {
      title: "Durcissement WordPress",
      description: "Application des recommandations OWASP : masquage version, désactivation XML-RPC, etc."
    },
    {
      title: "Certificat SSL",
      description: "Installation et renouvellement automatique HTTPS avec redirection forcée."
    }
  ];

  const pricingOptions = [
    {
      name: "Sécurité Essentielle",
      price: "49€/mois",
      features: [
        "Firewall WordPress basique",
        "Scan malware hebdomadaire",
        "Protection brute force",
        "SSL Let's Encrypt",
        "Monitoring uptime",
        "Support email"
      ]
    },
    {
      name: "Sécurité Pro",
      price: "99€/mois",
      features: [
        "Firewall WAF premium",
        "Scan quotidien + nettoyage",
        "Blocage géographique",
        "SSL EV avec garantie",
        "Monitoring 24/7 avec alertes",
        "Support prioritaire"
      ],
      popular: true
    },
    {
      name: "Sécurité Enterprise",
      price: "199€/mois",
      features: [
        "Tout de la Sécurité Pro",
        "Protection DDoS avancée",
        "Audit sécurité trimestriel",
        "CDN avec WAF global",
        "Assurance cyber-risques",
        "Intervention d'urgence 24/7"
      ]
    }
  ];

  const faqs = [
    {
      question: "Mon site WordPress peut-il vraiment être piraté ?",
      answer: "Oui, WordPress est la cible n°1 des hackers car il représente 43% des sites web mondiaux. En 2023, plus de 13 000 sites WordPress sont piratés chaque jour. Les attaques les plus courantes sont : brute force sur wp-admin, exploitation de failles dans les plugins obsolètes, et injection SQL. Une protection adaptée réduit ces risques de 99%."
    },
    {
      question: "Que se passe-t-il si mon site est déjà piraté ?",
      answer: "Nous proposons un service de nettoyage d'urgence sous 24h : identification et suppression des codes malveillants, fermeture des backdoors, analyse forensique pour comprendre le vecteur d'attaque, et mise en place de protections pour éviter toute récidive. Tarif intervention : 299€ (inclus dans formule Enterprise)."
    },
    {
      question: "Un antivirus suffit-il à protéger mon site WordPress ?",
      answer: "Non. Un antivirus/anti-malware est nécessaire mais insuffisant. Une protection complète combine : firewall applicatif (WAF), limitation des tentatives de connexion, masquage de wp-admin, mises à jour régulières, sauvegardes, monitoring actif et durcissement du code. C'est cette approche en couches que nous mettons en œuvre."
    },
    {
      question: "Comment protégez-vous contre les attaques DDoS ?",
      answer: "Sur nos formules Pro et Enterprise, nous utilisons un CDN avec protection DDoS intégrée (Cloudflare ou Sucuri) qui filtre le trafic malveillant avant même qu'il n'atteigne votre serveur. Cela permet d'absorber des attaques DDoS jusqu'à plusieurs millions de requêtes par seconde sans impacter votre site."
    }
  ];

  const relatedServices = [
    {
      title: "Maintenance WordPress",
      description: "Mises à jour sécurité et surveillance",
      href: "/services/maintenance-wordpress-lyon",
      icon: <FileCheck className="w-8 h-8" />
    },
    {
      title: "Sauvegarde Automatique",
      description: "Backup quotidien et restauration rapide",
      href: "/services/sauvegarde-site-wordpress-lyon",
      icon: <Server className="w-8 h-8" />
    },
    {
      title: "Certificat SSL",
      description: "Installation HTTPS sécurisé",
      href: "/services/certificat-ssl-wordpress-lyon",
      icon: <Lock className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sécurité WordPress Lyon | Protection Anti-Piratage WAF</title>
        <meta 
          name="description" 
          content="Sécurisation WordPress à Lyon. Firewall WAF, scan anti-malware, protection DDoS et monitoring 24/7. Protégez votre site contre le piratage." 
        />
        <link rel="canonical" href="https://vkback.fr/services/securite-site-wordpress-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Maintenance & Support WordPress", href: "/maintenance-support-wordpress-lyon" },
          { label: "Sécurité WordPress Lyon" }
        ]}
        heroTitle="Sécurité WordPress Lyon"
        heroSubtitle="Protection anti-piratage et monitoring 24/7 pour votre site WordPress"
        heroImage={heroSecurite}
        heroAlt="Sécurité WordPress Lyon - Protection anti-piratage firewall WAF scan malware monitoring surveillance expert sécurité web"
        introduction={
          <>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La <strong>sécurité WordPress</strong> n'est pas une option : 43% des sites piratés utilisaient une version obsolète de WordPress ou de leurs plugins. Notre service de sécurisation WordPress à Lyon combine firewall applicatif (WAF), scan anti-malware quotidien, protection brute force et monitoring 24/7.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Protégez votre site contre les attaques avant qu'il ne soit trop tard.
            </p>
          </>
        }
        features={features}
        whySection={{
          title: "Pourquoi sécuriser votre WordPress ?",
          content: (
            <p className="text-lg text-muted-foreground leading-relaxed">
              WordPress représente 43% des sites web et est la cible n°1 des hackers. Une sécurisation professionnelle est indispensable pour protéger vos données, votre réputation et votre business.
            </p>
          )
        }}
        pricing={pricingOptions}
        faq={faqs}
        relatedServices={relatedServices}
        expertise={{
          title: "Expertise Sécurité WordPress à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Depuis plus de 10 ans, nous sécurisons des sites WordPress pour des clients à Lyon, Villeurbanne et dans tout le Rhône. Notre approche de sécurité en couches (defense in depth) applique les recommandations OWASP et WordPress.org.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous avons traité des dizaines de cas de piratage WordPress et savons identifier les vecteurs d'attaque les plus fréquents pour protéger votre site efficacement.
              </p>
            </div>
          )
        }}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default SecuriteWordPress;

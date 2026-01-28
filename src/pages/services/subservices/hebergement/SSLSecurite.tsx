import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { Lock, Shield } from "lucide-react";
import heroHebergement from "@/assets/ssl-securite-https-lyon.jpg";

const SSLSecurite = () => {
  return (
    <>
      <Helmet>
        <title>Certificat SSL Lyon | Sécurité HTTPS Site Web - VKBack</title>
        <meta name="description" content="Installation certificat SSL et sécurisation HTTPS à Lyon. Protégez votre site, rassurez vos visiteurs et améliorez votre référencement Google." />
        <link rel="canonical" href="https://vkback.com/certificat-ssl-securite-lyon" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Mon hébergeur propose déjà un SSL gratuit, pourquoi payer ?", "acceptedAnswer": { "@type": "Answer", "text": "Si votre hébergeur propose Let's Encrypt, c'est suffisant pour la plupart des sites. Notre service inclut l'installation propre et la correction des problèmes (mixed content, redirections)." }},
              { "@type": "Question", "name": "Le passage en HTTPS va-t-il impacter mon référencement ?", "acceptedAnswer": { "@type": "Answer", "text": "Positivement ! Google favorise les sites HTTPS. Nous gérons les redirections 301 pour conserver tout votre référencement existant." }},
              { "@type": "Question", "name": "Quelle différence entre SSL gratuit et payant ?", "acceptedAnswer": { "@type": "Answer", "text": "Techniquement, le niveau de chiffrement est identique. Les SSL payants offrent une validation d'identité (EV/OV), une garantie financière et sont recommandés pour l'e-commerce." }},
              { "@type": "Question", "name": "Combien de temps pour installer un SSL ?", "acceptedAnswer": { "@type": "Answer", "text": "Installation sous 24-48h pour Let's Encrypt. Les certificats payants avec validation d'organisation prennent 3-5 jours (vérifications obligatoires)." }}
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
          { label: "SSL & Sécurité Lyon" }
        ]}
        painPointHook={{
          question: "Votre site affiche 'Non sécurisé' dans le navigateur ?",
          answer: "Un certificat SSL résout ce problème et booste votre SEO."
        }}
        painPoints={[
          { problem: "Avertissement 'Non sécurisé' qui fait fuir", solution: "Cadenas vert et HTTPS activés", icon: "🔒" },
          { problem: "Pénalité SEO Google sans HTTPS", solution: "Boost de référencement avec SSL", icon: "📈" },
          { problem: "Mixed content qui bloque le cadenas", solution: "Correction complète de toutes les ressources", icon: "🔧" },
          { problem: "Certificat expiré ou mal configuré", solution: "Renouvellement automatique garanti", icon: "✅" }
        ]}
        heroTitle="Certificat SSL & Sécurité Lyon"
        heroSubtitle="Le HTTPS est obligatoire en 2024. Nous installons et configurons votre certificat SSL pour sécuriser votre site et rassurer vos visiteurs."
        heroImage={heroHebergement}
        heroAlt="Certificat SSL sécurité HTTPS Lyon - Protection site web"
        ctaPrimary={{ label: "Sécuriser mon site", href: "/contact" }}
        ctaSecondary={{ label: "En savoir plus", href: "/tarifs" }}
        schemaServiceName="Certificat SSL & Sécurité Lyon"
        schemaServiceDescription="Installation certificat SSL et sécurisation HTTPS à Lyon. Protégez votre site, rassurez vos visiteurs et améliorez votre référencement Google."
        schemaServicePrice="À partir de 90€"
        schemaPageUrl="https://vkback.com/certificat-ssl-securite-lyon"
        schemaServicePriceRange="90€ - 390€"
        schemaServiceKeywords={["certificat SSL Lyon", "sécurité HTTPS Lyon", "installation SSL Villeurbanne", "certificat sécurité Lyon 3", "HTTPS WordPress Rhône-Alpes", "SSL e-commerce Lyon Part-Dieu", "sécurisation site Caluire", "certificat Let's Encrypt Écully"]}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Le certificat SSL active le protocole HTTPS et affiche le cadenas dans la barre d'adresse. C'est devenu indispensable : Google pénalise les sites non sécurisés et les navigateurs affichent des avertissements.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi le SSL est indispensable ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Confiance des visiteurs</h3>
                <p className="text-lg text-muted-foreground">
                  Le cadenas rassure vos visiteurs. Sans SSL, Chrome affiche "Non sécurisé" et beaucoup quittent immédiatement le site.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Boost SEO Google</h3>
                <p className="text-lg text-muted-foreground">
                  Google favorise les sites HTTPS dans ses résultats. Le SSL est un critère de classement officiel depuis 2014.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Installation SSL à Lyon",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Nous installons et configurons votre certificat SSL avec redirection automatique HTTP vers HTTPS. Migration propre sans perte de référencement ni liens cassés.
              </p>
            </div>
          )
        }}
        features={[
          { title: "Let's Encrypt gratuit", description: "Certificat SSL gratuit avec renouvellement automatique tous les 90 jours." },
          { title: "SSL Business", description: "Certificat payant avec validation étendue pour e-commerce." },
          { title: "Redirection HTTPS", description: "Configuration automatique de toutes les URLs vers HTTPS." },
          { title: "Mixed content fix", description: "Correction des ressources HTTP qui bloquent le cadenas." },
          { title: "HSTS activé", description: "Forçage HTTPS permanent pour une sécurité maximale." },
          { title: "Renouvellement auto", description: "Pas de risque d'expiration, tout est automatisé." }
        ]}
        pricing={[
          { name: "SSL Let's Encrypt", price: "90€", features: ["Certificat gratuit", "Installation complète", "Redirection HTTPS", "Mixed content fix", "Test de sécurité"] },
          { name: "SSL Business", price: "190€/an", popular: true, features: ["Certificat OV/EV", "Validation organisation", "Garantie financière", "Installation complète", "Support prioritaire"] },
          { name: "Sécurité Complète", price: "390€", features: ["SSL + Firewall", "Protection DDoS", "Scan malware", "Monitoring sécurité", "Rapport mensuel"] }
        ]}
        faq={[
          { question: "Mon hébergeur propose déjà un SSL gratuit, pourquoi payer ?", answer: "Si votre hébergeur propose Let's Encrypt, c'est suffisant pour la plupart des sites. Notre service inclut l'installation propre et la correction des problèmes (mixed content, redirections)." },
          { question: "Le passage en HTTPS va-t-il impacter mon référencement ?", answer: "Positivement ! Google favorise les sites HTTPS. Nous gérons les redirections 301 pour conserver tout votre référencement existant." },
          { question: "Quelle différence entre SSL gratuit et payant ?", answer: "Techniquement, le niveau de chiffrement est identique. Les SSL payants offrent une validation d'identité (EV/OV), une garantie financière et sont recommandés pour l'e-commerce." },
          { question: "Combien de temps pour installer un SSL ?", answer: "Installation sous 24-48h pour Let's Encrypt. Les certificats payants avec validation d'organisation prennent 3-5 jours (vérifications obligatoires)." }
        ]}
        relatedServices={[
          { title: "Sécurité WordPress", description: "Protection complète de votre site", href: "/services/securite-site-wordpress-lyon", icon: <Shield className="w-8 h-8" /> },
          { title: "Hébergement WordPress", description: "SSL inclus dans nos offres", href: "/hebergement-wordpress-lyon", icon: <Lock className="w-8 h-8" /> }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default SSLSecurite;

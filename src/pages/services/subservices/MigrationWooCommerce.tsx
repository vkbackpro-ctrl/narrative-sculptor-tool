import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import ProgressBar from "@/components/ProgressBar";
import ServiceTemplate from "@/components/ServiceTemplate";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import { RefreshCw, Shield, Database, Zap, CheckCircle, Clock } from "lucide-react";
import migrationHero from "@/assets/migration-site-wordpress-lyon.jpg";

const MigrationWooCommerce = () => {
  return (
    <>
      <Helmet>
        <title>Migration WooCommerce Lyon | Transfert Boutique - VKBack</title>
        <meta name="description" content="Migration de votre boutique vers WooCommerce à Lyon. Transfert sécurisé de vos produits, commandes et clients depuis n'importe quelle plateforme e-commerce." />
        <link rel="canonical" href="https://vkback.com/services/migration-woocommerce-lyon" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />
      <StickyCtaButton />

      <ServiceTemplate
        breadcrumb={[
          { label: "Agence Web Lyon", href: "/" },
          { label: "Sites E-commerce Lyon", href: "/creation-site-ecommerce-lyon" },
          { label: "Migration WooCommerce Lyon" }
        ]}
        painPointHook={{
          question: "Votre plateforme e-commerce actuelle vous limite ?",
          answer: "Shopify, PrestaShop... Les commissions et contraintes vous freinent. Libérez-vous."
        }}
        heroTitle="Migration WooCommerce Lyon"
        heroSubtitle="Marre des commissions de votre plateforme ? Besoin de plus de flexibilité ? Nous migrons votre boutique vers WooCommerce sans perte de données ni de SEO."
        heroImage={migrationHero}
        heroAlt="Migration boutique e-commerce vers WooCommerce WordPress à Lyon"
        ctaPrimary={{ label: "Migrer vers WooCommerce", href: "/contact" }}
        ctaSecondary={{ label: "Voir nos réalisations", href: "/realisations" }}
        schemaServiceName="Migration WooCommerce Lyon"
        schemaServiceDescription="Migration de votre boutique vers WooCommerce à Lyon. Transfert sécurisé de vos produits, commandes et clients depuis n'importe quelle plateforme e-commerce."
        schemaServicePrice="À partir de 2 500€"
        schemaPageUrl="https://vkback.com/services/migration-woocommerce-lyon"
        schemaServicePriceRange="2500€ - 10000€"
        schemaServiceKeywords={["migration WooCommerce Lyon", "transfert boutique e-commerce Villeurbanne", "migration Shopify WooCommerce Lyon 3", "migration PrestaShop WordPress Rhône-Alpes", "transfert site marchand Lyon Part-Dieu", "migration e-commerce Caluire", "agence migration boutique Écully"]}
        introduction={
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Vous souhaitez quitter Shopify, PrestaShop ou une autre plateforme e-commerce pour bénéficier de la flexibilité de WooCommerce ? Notre agence web à Lyon gère votre migration complète sans perte de données.
            </p>
            <p className="text-lg leading-relaxed">
              Nous migrons chaque année des dizaines de boutiques vers WooCommerce. Notre processus éprouvé garantit zéro perte de données, conservation de votre SEO, et une transition en douceur sans interruption de vos ventes.
            </p>
          </div>
        }
        whySection={{
          title: "Pourquoi migrer vers WooCommerce ?",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Liberté et indépendance totale</h3>
                <p className="text-lg text-muted-foreground">
                  Échappez aux abonnements mensuels coûteux et aux commissions sur vos ventes. Avec WooCommerce, vous êtes propriétaire à 100% de votre boutique et de vos données client.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Réduction des coûts long terme</h3>
                <p className="text-lg text-muted-foreground">
                  Les plateformes SaaS facturent des abonnements qui augmentent avec votre chiffre d'affaires. WooCommerce vous libère de ces contraintes : payez une seule fois la création, puis maîtrisez vos coûts d'hébergement.
                </p>
              </div>
            </div>
          )
        }}
        expertise={{
          title: "Notre processus de migration sécurisé",
          content: (
            <div className="space-y-6">
              <p className="text-lg">
                Avec plus de 10 ans d'expérience dans les migrations e-commerce à Lyon, nous avons développé un protocole qui garantit une transition sans accroc.
              </p>
              <p className="text-lg">
                Nous transférons l'intégralité de vos données : produits avec images et variations, catégories, clients, historique de commandes, avis clients, codes promo. Nous configurons vos moyens de paiement, options de livraison, et optimisons votre boutique pour maintenir vos positions SEO sur Google.
              </p>
            </div>
          )
        }}
        features={[
          {
            title: "Transfert complet des données",
            description: "Migration de tous vos produits, catégories, variations, images, clients, commandes, avis et contenus sans perte."
          },
          {
            title: "Sécurité garantie",
            description: "Protocole de migration sécurisé avec sauvegarde complète. Votre boutique actuelle reste active pendant toute la migration."
          },
          {
            title: "Conservation du SEO",
            description: "Redirections 301 automatiques, conservation des URL, optimisation SEO pour maintenir vos positions Google."
          },
          {
            title: "Reconception du design",
            description: "Profitez de la migration pour moderniser votre boutique avec un design responsive et optimisé pour la conversion."
          },
          {
            title: "Optimisation des performances",
            description: "Votre nouvelle boutique WooCommerce sera plus rapide : cache, compression images, optimisation base de données."
          },
          {
            title: "Migration express",
            description: "Bascule rapide en weekend ou horaire choisi pour minimiser l'impact sur votre activité commerciale."
          }
        ]}
        pricing={[
          {
            name: "Essentiel",
            price: "À partir de 2 500€",
            features: [
              "Jusqu'à 100 produits",
              "Migration données complète",
              "Redirections SEO",
              "Design standard WooCommerce",
              "Configuration paiements",
              "Formation administration",
              "Support 1 mois post-migration"
            ]
          },
          {
            name: "Business",
            price: "À partir de 4 500€",
            popular: true,
            features: [
              "Jusqu'à 500 produits",
              "Migration + historique complet",
              "Redirections SEO avancées",
              "Design personnalisé",
              "Optimisation performances",
              "Configuration avancée",
              "Formation complète équipe",
              "Support 3 mois"
            ]
          },
          {
            name: "Complexe",
            price: "Sur devis",
            features: [
              "Plus de 500 produits",
              "Migration multi-boutiques",
              "Intégrations ERP/CRM",
              "Développements spécifiques",
              "Tests et validation poussés",
              "Accompagnement dédié",
              "Formation approfondie",
              "Support prioritaire 6 mois"
            ]
          }
        ]}
        faq={[
          {
            question: "Quelles plateformes e-commerce pouvez-vous migrer vers WooCommerce ?",
            answer: "Nous migrons depuis toutes les plateformes : Shopify, PrestaShop, Magento, Wix, Squarespace, Shopware, et boutiques custom. Chaque plateforme a ses spécificités, que nous maîtrisons parfaitement."
          },
          {
            question: "Vais-je perdre mon référencement Google pendant la migration ?",
            answer: "Non, nous mettons en place toutes les redirections 301 nécessaires pour conserver votre SEO. Nous optimisons même votre nouvelle boutique WooCommerce pour améliorer vos positions Google après la migration."
          },
          {
            question: "Combien de temps dure une migration WooCommerce ?",
            answer: "Une migration standard (jusqu'à 200 produits) prend 3-5 semaines. Une migration complexe (500+ produits, intégrations) demande 6-10 semaines. La bascule finale se fait en quelques heures, généralement un weekend."
          },
          {
            question: "Ma boutique actuelle restera-t-elle active pendant la migration ?",
            answer: "Oui, absolument ! Votre boutique actuelle reste 100% opérationnelle pendant toute la durée de la migration. Nous travaillons sur un environnement de test, puis basculons rapidement le jour J."
          },
          {
            question: "Que se passe-t-il pour mes clients et leurs comptes ?",
            answer: "Tous vos clients sont migrés avec leurs informations (email, nom, historique). Nous pouvons configurer une connexion automatique ou leur demander de réinitialiser leur mot de passe pour des raisons de sécurité."
          },
          {
            question: "Conserverai-je mes avis clients après la migration ?",
            answer: "Oui, nous migrons tous vos avis clients et les associons aux bons produits dans WooCommerce. Les avis sont précieux pour votre e-réputation et votre conversion, nous y apportons une attention particulière."
          }
        ]}
        relatedServices={[
          {
            title: "Boutique WooCommerce",
            description: "Création de boutique en ligne complète",
            href: "/services/boutique-woocommerce-lyon",
            icon: <RefreshCw className="w-8 h-8" />
          },
          {
            title: "Refonte E-commerce",
            description: "Modernisation de votre boutique existante",
            href: "/services/refonte-ecommerce-lyon",
            icon: <Shield className="w-8 h-8" />
          }
        ]}
      />

      <ContactSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default MigrationWooCommerce;
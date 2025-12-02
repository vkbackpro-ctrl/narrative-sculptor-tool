import { LucideIcon } from "lucide-react";

export interface PricingPlan {
  name: string;
  price: string;
  pricePrefix?: string;
  description?: string;
  features: string[];
  notIncluded?: string[];
  popular?: boolean;
  link?: string;
}

export interface ServicePricing {
  category: string;
  description: string;
  plans: PricingPlan[];
}

// Création de Sites WordPress
export const creationSitesPricing: ServicePricing = {
  category: "Création de Sites WordPress",
  description: "Sites WordPress professionnels, modernes et optimisés SEO",
  plans: [
    {
      name: "Site Vitrine Essentiel",
      price: "2 500€",
      pricePrefix: "À partir de",
      description: "Site vitrine 5 pages pour présenter votre activité",
      features: [
        "Design responsive moderne",
        "5 pages (Accueil, Services, À propos, Blog, Contact)",
        "Formulaire de contact",
        "SEO de base",
        "Formation WordPress 1h",
        "Support 1 mois",
      ],
      notIncluded: ["E-commerce", "Multilingue", "Animation avancée"],
      link: "/creation-site-vitrine-lyon"
    },
    {
      name: "Site Vitrine Pro",
      price: "4 000€",
      pricePrefix: "À partir de",
      description: "Site vitrine complet avec fonctionnalités avancées",
      features: [
        "Design sur-mesure premium",
        "10 pages personnalisées",
        "Blog intégré",
        "SEO optimisé Lyon",
        "Animations modernes",
        "Intégrations tierces (Google Maps, etc.)",
        "Formation WordPress 2h",
        "Support 3 mois",
      ],
      notIncluded: ["E-commerce"],
      popular: true,
      link: "/creation-site-vitrine-lyon"
    },
    {
      name: "Site Corporate",
      price: "8 000€",
      pricePrefix: "À partir de",
      description: "Site institutionnel haut de gamme B2B",
      features: [
        "Design premium sur-mesure",
        "Architecture complexe",
        "Espace client sécurisé",
        "Multilingue",
        "Fonctionnalités avancées",
        "Intégrations CRM/ERP",
        "SEO multilingue",
        "Formation & documentation complète",
        "Support 6 mois",
      ],
      link: "/creation-site-corporate-lyon"
    },
    {
      name: "Site One Page",
      price: "1 800€",
      pricePrefix: "À partir de",
      description: "Site moderne sur une seule page",
      features: [
        "Design moderne one-page",
        "Navigation fluide par ancres",
        "Formulaire de contact",
        "SEO optimisé",
        "Formation 1h",
        "Support 1 mois"
      ],
      link: "/creation-site-one-page-lyon"
    },
    {
      name: "Site Catalogue",
      price: "3 500€",
      pricePrefix: "À partir de",
      description: "Présentation produits sans vente en ligne",
      features: [
        "Catalogue produits sans paiement",
        "Fiches produits détaillées",
        "Filtres et recherche",
        "Demande de devis intégrée",
        "SEO catalogue",
        "Formation 2h",
        "Support 2 mois"
      ],
      link: "/creation-site-catalogue-lyon"
    },
    {
      name: "Site Multilingue",
      price: "5 500€",
      pricePrefix: "À partir de",
      description: "Site en plusieurs langues",
      features: [
        "2 langues minimum",
        "SEO multilingue",
        "Gestion traductions",
        "Sélecteur de langue",
        "Formation 2h",
        "Support 3 mois"
      ],
      link: "/creation-site-multilingue-lyon"
    },
    {
      name: "Refonte de Site",
      price: "3 000€",
      pricePrefix: "À partir de",
      description: "Modernisation de site existant",
      features: [
        "Audit site actuel",
        "Nouveau design moderne",
        "Migration de contenu",
        "Redirection SEO",
        "Formation 2h",
        "Support 3 mois"
      ],
      link: "/refonte-site-internet-lyon"
    },
    {
      name: "Migration vers WordPress",
      price: "2 000€",
      pricePrefix: "À partir de",
      description: "Migration complète vers WordPress",
      features: [
        "Migration base de données",
        "Transfert contenu",
        "Redirections SEO",
        "Tests complets",
        "Formation 2h",
        "Support 2 mois"
      ],
      link: "/migration-site-internet-lyon"
    }
  ]
};

// E-commerce & WooCommerce
export const ecommercePricing: ServicePricing = {
  category: "Sites E-commerce WooCommerce",
  description: "Boutiques en ligne WordPress avec WooCommerce",
  plans: [
    {
      name: "E-commerce Starter",
      price: "5 000€",
      pricePrefix: "À partir de",
      description: "Boutique en ligne essentielle",
      features: [
        "Jusqu'à 50 produits",
        "Design responsive WooCommerce",
        "Paiement CB + PayPal",
        "2 modes de livraison",
        "Gestion stocks basique",
        "Formation administration",
        "Support 3 mois"
      ],
      link: "/services/boutique-woocommerce-lyon"
    },
    {
      name: "E-commerce Business",
      price: "8 000€",
      pricePrefix: "À partir de",
      description: "Boutique complète et optimisée",
      features: [
        "Produits illimités + variations",
        "Design premium personnalisé",
        "Paiements multiples (Stripe, 3x sans frais)",
        "Livraison avancée (zones, tarifs)",
        "Codes promo et bons cadeaux",
        "SEO e-commerce optimisé",
        "Formation complète",
        "Support 6 mois"
      ],
      popular: true,
      link: "/services/boutique-woocommerce-lyon"
    },
    {
      name: "E-commerce Premium",
      price: "Sur devis",
      description: "Marketplace et fonctionnalités avancées",
      features: [
        "Marketplace multi-vendeurs",
        "Intégrations ERP/CRM",
        "Configurateur de produits",
        "Programme de fidélité",
        "Abonnements et ventes récurrentes",
        "Multi-devises et multilingue",
        "Formation équipe complète",
        "Support prioritaire 12 mois"
      ],
      link: "/services/marketplace-woocommerce-lyon"
    },
    {
      name: "Migration WooCommerce",
      price: "2 500€",
      pricePrefix: "À partir de",
      description: "Migration depuis autre plateforme",
      features: [
        "Migration produits et clients",
        "Import commandes historiques",
        "Redirections SEO",
        "Tests approfondis",
        "Formation 2h",
        "Support 2 mois"
      ],
      link: "/services/migration-woocommerce-lyon"
    },
    {
      name: "Refonte E-commerce",
      price: "4 500€",
      pricePrefix: "À partir de",
      description: "Modernisation boutique existante",
      features: [
        "Nouveau design moderne",
        "Optimisation conversions",
        "Migration données",
        "SEO maintenu",
        "Formation 2h",
        "Support 3 mois"
      ],
      link: "/services/refonte-ecommerce-lyon"
    },
    {
      name: "Optimisation Conversion",
      price: "1 500€",
      pricePrefix: "À partir de",
      description: "Augmentez vos ventes",
      features: [
        "Audit UX et tunnel",
        "Optimisations techniques",
        "A/B testing setup",
        "Suivi Analytics",
        "Rapport détaillé",
        "Support 1 mois"
      ],
      link: "/services/optimisation-conversion-lyon"
    },
    {
      name: "SEO E-commerce",
      price: "1 200€",
      pricePrefix: "À partir de",
      description: "Référencement produits",
      features: [
        "Optimisation fiches produits",
        "Stratégie mots-clés",
        "Rich Snippets",
        "Netlinking e-commerce",
        "Reporting mensuel",
        "Support continu"
      ],
      link: "/services/seo-ecommerce-lyon"
    },
    {
      name: "Dropshipping WooCommerce",
      price: "3 500€",
      pricePrefix: "À partir de",
      description: "Solution sans stock",
      features: [
        "Configuration dropshipping",
        "Automatisation commandes",
        "Intégration fournisseurs",
        "Gestion marges",
        "Formation complète",
        "Support 3 mois"
      ],
      link: "/services/dropshipping-woocommerce-lyon"
    }
  ]
};

// Référencement SEO
export const seoPricing: ServicePricing = {
  category: "Référencement SEO Google",
  description: "Boostez votre visibilité sur Google",
  plans: [
    {
      name: "Audit SEO Complet",
      price: "800€",
      description: "Analyse complète de votre site",
      features: [
        "Audit technique complet",
        "Analyse contenu & mots-clés",
        "Étude concurrentielle",
        "Analyse backlinks",
        "Plan d'action détaillé 20 pages",
        "Présentation 1h"
      ],
      link: "/services/audit-seo-lyon"
    },
    {
      name: "SEO Mensuel",
      price: "700€/mois",
      pricePrefix: "À partir de",
      description: "Référencement continu et optimisation",
      features: [
        "Optimisation technique",
        "Création contenu SEO",
        "Netlinking qualitatif",
        "Suivi positions",
        "Reporting mensuel détaillé",
        "Support prioritaire"
      ],
      popular: true,
      link: "/referencement-seo-lyon"
    },
    {
      name: "SEO Local Lyon",
      price: "400€/mois",
      pricePrefix: "À partir de",
      description: "Optimisation locale Google",
      features: [
        "Google Business Profile",
        "Citations locales",
        "Avis clients",
        "SEO géolocalisé",
        "Reporting local",
        "Support mensuel"
      ],
      link: "/services/seo-local-lyon"
    },
    {
      name: "Consultant SEO",
      price: "800€",
      pricePrefix: "À partir de",
      description: "Accompagnement stratégique",
      features: [
        "Stratégie personnalisée",
        "Conseils d'expert",
        "Audit et recommandations",
        "Formation équipe",
        "Support dédié"
      ],
      link: "/services/consultant-seo-lyon"
    },
    {
      name: "Formation SEO",
      price: "1 200€",
      description: "Formation référencement",
      features: [
        "2 jours de formation",
        "SEO technique et contenu",
        "Exercices pratiques",
        "Support 1 mois",
        "Certification"
      ],
      link: "/services/formation-seo-lyon"
    },
    {
      name: "Rédaction Web SEO",
      price: "80€",
      pricePrefix: "Par article",
      description: "Contenu optimisé SEO",
      features: [
        "Articles 800-1500 mots",
        "Recherche mots-clés",
        "Optimisation SEO",
        "Images incluses",
        "Révisions illimitées"
      ],
      link: "/services/redaction-web-seo-lyon"
    },
    {
      name: "Netlinking",
      price: "600€/mois",
      pricePrefix: "À partir de",
      description: "Stratégie de backlinks",
      features: [
        "5-10 backlinks/mois",
        "Sites autorité DR>30",
        "Liens do-follow",
        "Reporting mensuel",
        "Suivi positions"
      ],
      link: "/services/netlinking-backlinks-lyon"
    },
    {
      name: "Analyse Concurrentielle",
      price: "600€",
      description: "Étude de marché SEO",
      features: [
        "Analyse 5 concurrents",
        "Gaps de contenu",
        "Opportunités mots-clés",
        "Stratégie différenciation",
        "Rapport détaillé"
      ],
      link: "/services/analyse-concurrentielle-seo-lyon"
    },
    {
      name: "Audit GEO",
      price: "490€",
      description: "Analyse présence IA",
      features: [
        "Analyse présence ChatGPT, Perplexity",
        "Audit contenus pour IA",
        "Rapport opportunités",
        "Recommandations prioritaires",
        "Plan d'action GEO"
      ],
      link: "/services/geo-referencement-ia-lyon"
    },
    {
      name: "GEO Mensuel",
      price: "990€/mois",
      description: "Référencement moteurs IA",
      features: [
        "Optimisation contenus IA",
        "Données structurées avancées",
        "Création contenus autoritaires",
        "Monitoring mentions IA",
        "Reporting mensuel"
      ],
      link: "/services/geo-referencement-ia-lyon"
    },
    {
      name: "GEO Premium",
      price: "1 990€/mois",
      description: "Stratégie IA complète",
      features: [
        "Tout du GEO Mensuel",
        "Multi-plateforme IA",
        "Contenus expert",
        "Veille technologique IA",
        "Consultant dédié"
      ],
      link: "/services/geo-referencement-ia-lyon"
    }
  ]
};

// Maintenance & Support
export const maintenancePricing: ServicePricing = {
  category: "Maintenance & Support WordPress",
  description: "Maintenez votre site performant et sécurisé",
  plans: [
    {
      name: "Maintenance Essentielle",
      price: "79€/mois",
      description: "Maintenance de base",
      features: [
        "Mises à jour hebdomadaires",
        "Sauvegardes automatiques",
        "Monitoring quotidien",
        "Support par email",
        "1h assistance/mois"
      ],
      popular: true,
      link: "/services/maintenance-wordpress-lyon"
    },
    {
      name: "Maintenance Pro",
      price: "149€/mois",
      description: "Maintenance complète",
      features: [
        "Tout du plan Essentiel",
        "Sécurité renforcée",
        "Optimisation vitesse",
        "Support prioritaire",
        "3h assistance/mois",
        "Reporting mensuel"
      ],
      link: "/services/maintenance-wordpress-lyon"
    },
    {
      name: "Infogérance Complète",
      price: "299€/mois",
      description: "Gestion déléguée totale",
      features: [
        "Tout du plan Pro",
        "Gestion contenu",
        "Modifications illimitées",
        "Support 24/7",
        "Consultant dédié",
        "SLA garanti"
      ],
      link: "/services/infogerance-wordpress-lyon"
    },
    {
      name: "Optimisation Performance",
      price: "800€",
      description: "Boost vitesse site",
      features: [
        "Audit performance complet",
        "Optimisation images",
        "Mise en cache avancée",
        "Minification code",
        "CDN configuration",
        "Tests Core Web Vitals"
      ],
      link: "/services/optimisation-performance-wordpress-lyon"
    },
    {
      name: "Sécurité WordPress",
      price: "500€",
      description: "Sécurisation complète",
      features: [
        "Audit sécurité",
        "Pare-feu WAF",
        "Anti-malware",
        "Certificat SSL",
        "Protection DDoS",
        "Support sécurité"
      ],
      link: "/services/securite-site-wordpress-lyon"
    },
    {
      name: "Support Technique",
      price: "100€/h",
      description: "Assistance ponctuelle",
      features: [
        "Résolution bugs",
        "Modifications techniques",
        "Conseil expert",
        "Intervention rapide",
        "Sans engagement"
      ],
      link: "/services/support-technique-wordpress-lyon"
    },
    {
      name: "Certificat SSL",
      price: "90€",
      description: "HTTPS sécurisé",
      features: [
        "Installation SSL",
        "Configuration HTTPS",
        "Renouvellement auto",
        "Support technique",
        "Migration sécurisée"
      ],
      link: "/services/certificat-ssl-wordpress-lyon"
    },
    {
      name: "Sauvegardes Pro",
      price: "49€/mois",
      description: "Backup automatique",
      features: [
        "Sauvegarde quotidienne",
        "Stockage externe",
        "Restauration facile",
        "Conservation 90 jours",
        "Support dédié"
      ],
      link: "/services/sauvegarde-site-wordpress-lyon"
    }
  ]
};

// Google Ads & SEA
export const googleAdsPricing: ServicePricing = {
  category: "Google Ads & SEA",
  description: "Publicité Google rentable et optimisée",
  plans: [
    {
      name: "Campagnes Search",
      price: "490€/mois",
      pricePrefix: "À partir de",
      description: "Annonces texte Google Search",
      features: [
        "Configuration campagnes",
        "Recherche mots-clés",
        "Rédaction annonces",
        "Optimisation continue",
        "Reporting mensuel"
      ],
      popular: true,
      link: "/google-ads-search-lyon"
    },
    {
      name: "Google Shopping",
      price: "590€/mois",
      pricePrefix: "À partir de",
      description: "Campagnes Shopping e-commerce",
      features: [
        "Configuration Shopping",
        "Feed produits optimisé",
        "Gestion enchères",
        "Remarketing",
        "Reporting e-commerce"
      ],
      link: "/google-shopping-lyon"
    },
    {
      name: "Display & Remarketing",
      price: "450€/mois",
      pricePrefix: "À partir de",
      description: "Bannières et reciblage",
      features: [
        "Création bannières",
        "Audiences personnalisées",
        "Remarketing dynamique",
        "Optimisation placements",
        "Reporting mensuel"
      ],
      link: "/google-display-remarketing-lyon"
    },
    {
      name: "Google Local Ads",
      price: "390€/mois",
      pricePrefix: "À partir de",
      description: "Publicité locale commerces",
      features: [
        "Google Maps Ads",
        "Extensions de lieu",
        "Click-to-call",
        "Ciblage géographique",
        "Suivi visites magasin"
      ],
      link: "/google-local-ads-lyon"
    },
    {
      name: "YouTube Ads",
      price: "590€/mois",
      pricePrefix: "À partir de",
      description: "Publicité vidéo YouTube",
      features: [
        "Campagnes TrueView",
        "Bumper Ads 6s",
        "Ciblage audiences",
        "Remarketing vidéo",
        "Reporting performance"
      ],
      link: "/youtube-ads-lyon"
    },
    {
      name: "Optimisation ROI",
      price: "350€/mois",
      pricePrefix: "À partir de",
      description: "Amélioration performances",
      features: [
        "Analyse compte",
        "Tests A/B",
        "Optimisation enchères",
        "Réduction CPA",
        "Reporting ROI"
      ],
      link: "/optimisation-google-ads-lyon"
    },
    {
      name: "Audit Google Ads",
      price: "490€",
      description: "Analyse compte existant",
      features: [
        "Audit complet 50+ points",
        "Analyse performances",
        "Benchmark concurrence",
        "Plan d'action priorisé",
        "Présentation 1h"
      ],
      link: "/audit-google-ads-lyon"
    },
    {
      name: "Gestion Budgétaire",
      price: "15% du budget",
      pricePrefix: "À partir de",
      description: "Pilotage investissements",
      features: [
        "Allocation budget",
        "Prévisions ROI",
        "Optimisation dépenses",
        "Reporting financier",
        "Recommandations"
      ],
      link: "/gestion-budget-google-ads-lyon"
    }
  ]
};

// Hébergement Web
export const hebergementPricing: ServicePricing = {
  category: "Hébergement Web",
  description: "Hébergement rapide, sécurisé et performant",
  plans: [
    {
      name: "Hébergement WordPress",
      price: "15€/mois",
      description: "Optimisé WordPress",
      features: [
        "10 Go SSD NVMe",
        "Trafic illimité",
        "SSL gratuit",
        "Backup quotidien",
        "Support expert WordPress"
      ],
      link: "/hebergement-wordpress-lyon"
    },
    {
      name: "Hébergement E-commerce",
      price: "49€/mois",
      description: "Pour boutiques WooCommerce",
      features: [
        "50 Go SSD NVMe",
        "Ressources dédiées",
        "SSL gratuit",
        "Backup 2x/jour",
        "CDN inclus",
        "Support prioritaire"
      ],
      popular: true,
      link: "/hebergement-ecommerce-lyon"
    },
    {
      name: "Serveur Dédié",
      price: "199€/mois",
      pricePrefix: "À partir de",
      description: "Ressources garanties",
      features: [
        "CPU/RAM dédiés",
        "SSD NVMe 500 Go+",
        "Infogérance incluse",
        "Backup temps réel",
        "Support 24/7"
      ],
      link: "/serveur-dedie-lyon"
    },
    {
      name: "VPS Managé",
      price: "99€/mois",
      pricePrefix: "À partir de",
      description: "Serveur virtuel géré",
      features: [
        "Ressources évolutives",
        "Gestion complète",
        "Monitoring 24/7",
        "Backup quotidien",
        "Support expert"
      ],
      link: "/vps-manage-lyon"
    },
    {
      name: "SSL & Sécurité",
      price: "150€/an",
      description: "Certificat HTTPS",
      features: [
        "Installation SSL",
        "Configuration HTTPS",
        "Renouvellement auto",
        "Pare-feu WAF",
        "Protection DDoS"
      ],
      link: "/certificat-ssl-securite-lyon"
    },
    {
      name: "Migration Hébergement",
      price: "290€",
      description: "Transfert sans coupure",
      features: [
        "Audit hébergement actuel",
        "Migration complète",
        "Configuration DNS",
        "Tests complets",
        "Support post-migration"
      ],
      link: "/migration-hebergement-lyon"
    },
    {
      name: "CDN & Performance",
      price: "49€/mois",
      pricePrefix: "À partir de",
      description: "Accélération mondiale",
      features: [
        "CDN mondial",
        "Cache intelligent",
        "Compression assets",
        "Optimisation images",
        "Monitoring vitesse"
      ],
      link: "/cdn-acceleration-site-lyon"
    },
    {
      name: "Infogérance Serveur",
      price: "199€/mois",
      pricePrefix: "À partir de",
      description: "Gestion technique complète",
      features: [
        "Administration serveur",
        "Monitoring 24/7",
        "Mises à jour sécurité",
        "Optimisation performance",
        "Support dédié"
      ],
      link: "/infogerance-serveur-lyon"
    }
  ]
};

// Export de toutes les catégories
export const allPricingCategories: ServicePricing[] = [
  creationSitesPricing,
  ecommercePricing,
  seoPricing,
  maintenancePricing,
  googleAdsPricing,
  hebergementPricing
];

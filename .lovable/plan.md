
# Plan de Correction des URLs des Sous-services

## Objectif
Retirer le préfixe `/services/` des URLs des sous-services pour les catégories E-commerce, SEO et Maintenance, et mettre en place des redirections 301 pour le SEO.

## URLs concernees

### E-commerce (8 URLs)
| Ancienne URL | Nouvelle URL |
|-------------|-------------|
| /services/boutique-woocommerce-lyon | /boutique-woocommerce-lyon |
| /services/migration-woocommerce-lyon | /migration-woocommerce-lyon |
| /services/optimisation-conversion-lyon | /optimisation-conversion-lyon |
| /services/seo-ecommerce-lyon | /seo-ecommerce-lyon |
| /services/refonte-ecommerce-lyon | /refonte-ecommerce-lyon |
| /services/marketplace-woocommerce-lyon | /marketplace-woocommerce-lyon |
| /services/paiement-securise-woocommerce-lyon | /paiement-securise-woocommerce-lyon |
| /services/dropshipping-woocommerce-lyon | /dropshipping-woocommerce-lyon |

### Referencement SEO (9 URLs)
| Ancienne URL | Nouvelle URL |
|-------------|-------------|
| /services/audit-seo-lyon | /audit-seo-lyon |
| /services/seo-local-lyon | /seo-local-lyon |
| /services/netlinking-backlinks-lyon | /netlinking-backlinks-lyon |
| /services/redaction-web-seo-lyon | /redaction-web-seo-lyon |
| /services/optimisation-google-my-business-lyon | /optimisation-google-my-business-lyon |
| /services/consultant-seo-lyon | /consultant-seo-lyon |
| /services/formation-seo-lyon | /formation-seo-lyon |
| /services/analyse-concurrentielle-seo-lyon | /analyse-concurrentielle-seo-lyon |
| /services/geo-referencement-ia-lyon | /geo-referencement-ia-lyon |

### Maintenance & Support (8 URLs)
| Ancienne URL | Nouvelle URL |
|-------------|-------------|
| /services/maintenance-wordpress-lyon | /maintenance-wordpress-lyon |
| /services/sauvegarde-site-wordpress-lyon | /sauvegarde-site-wordpress-lyon |
| /services/securite-site-wordpress-lyon | /securite-site-wordpress-lyon |
| /services/optimisation-performance-wordpress-lyon | /optimisation-performance-wordpress-lyon |
| /services/support-technique-wordpress-lyon | /support-technique-wordpress-lyon |
| /services/mise-a-jour-plugins-wordpress-lyon | /mise-a-jour-plugins-wordpress-lyon |
| /services/certificat-ssl-wordpress-lyon | /certificat-ssl-wordpress-lyon |
| /services/infogerance-wordpress-lyon | /infogerance-wordpress-lyon |

---

## Etapes d'implementation

### Etape 1 : Configuration des routes (src/config/routes.ts)
Modifier les 25 URLs dans le fichier de configuration centralisee pour retirer le prefixe `/services/`.

### Etape 2 : Routes dans App.tsx
Modifier les 25 routes dans le fichier App.tsx pour pointer vers les nouvelles URLs sans `/services/`.

### Etape 3 : Ajouter les redirections 301
Creer un composant de redirection pour gerer les anciennes URLs `/services/*` vers les nouvelles URLs. Cela permet de :
- Ne pas perdre le jus SEO des liens existants
- Rediriger les utilisateurs avec des bookmarks

### Etape 4 : Liens internes - Pages principales de service
Mettre a jour les liens dans :
- `src/pages/services/SitesEcommerce.tsx` (8 liens)
- `src/pages/services/ReferencementSEO.tsx` (9 liens)
- `src/pages/services/MaintenanceSupport.tsx` (8 liens)

### Etape 5 : Liens internes - ServicesGrid
Mettre a jour `src/components/ServicesGrid.tsx` avec les 25 nouveaux liens pour les sous-services E-commerce, SEO et Maintenance.

### Etape 6 : Liens internes - Footer
Mettre a jour `src/components/Footer.tsx` pour les liens vers :
- /audit-seo-lyon
- /seo-local-lyon  
- /boutique-woocommerce-lyon

### Etape 7 : URLs canoniques dans les sous-pages
Mettre a jour les canonical URLs et schema URLs dans chaque fichier de sous-service (25 fichiers) :
- E-commerce : 8 fichiers dans `src/pages/services/subservices/`
- SEO : 9 fichiers dans `src/pages/services/subservices/`
- Maintenance : 8 fichiers dans `src/pages/services/subservices/`

### Etape 8 : Related Services dans les sous-pages
Mettre a jour les liens `relatedServices` dans chaque sous-page qui reference d'autres sous-services avec `/services/`.

### Etape 9 : Liens dans les articles de blog
Mettre a jour les liens dans :
- `src/pages/blog/PrixCreationSiteInternet.tsx`
- `src/pages/blog/GoogleAdsSEALyon.tsx`
- `src/pages/blog/ReferencementSEOLyon.tsx`

---

## Section technique

### Structure des redirections
Le composant `ServiceRedirects.tsx` contiendra un mapping des anciennes vers nouvelles URLs et effectuera une redirection avec `replace: true` pour simuler un 301 :

```text
/services/boutique-woocommerce-lyon → /boutique-woocommerce-lyon
/services/audit-seo-lyon → /audit-seo-lyon
...
```

### Fichiers a modifier (liste complete)

**Fichiers de configuration :**
1. src/config/routes.ts
2. src/App.tsx

**Composants partages :**
3. src/components/ServicesGrid.tsx
4. src/components/Footer.tsx
5. src/components/ServiceRedirects.tsx (nouveau)

**Pages principales de service :**
6. src/pages/services/SitesEcommerce.tsx
7. src/pages/services/ReferencementSEO.tsx
8. src/pages/services/MaintenanceSupport.tsx

**Sous-services E-commerce (8 fichiers) :**
9-16. BoutiqueWooCommerce.tsx, MigrationWooCommerce.tsx, OptimisationConversion.tsx, SEOEcommerce.tsx, RefonteEcommerce.tsx, Marketplace.tsx, PaiementSecurise.tsx, Dropshipping.tsx

**Sous-services SEO (9 fichiers) :**
17-25. AuditSEO.tsx, SEOLocal.tsx, Netlinking.tsx, RedactionWeb.tsx, GoogleMyBusiness.tsx, ConsultantSEO.tsx, FormationSEO.tsx, AnalyseConcurrence.tsx, GEO.tsx

**Sous-services Maintenance (8 fichiers) :**
26-33. MaintenanceWordPress.tsx, SauvegardeAutomatique.tsx, SecuriteWordPress.tsx, OptimisationPerformance.tsx, SupportTechnique.tsx, MiseAJourPlugins.tsx, CertificatSSL.tsx, InfogeranceWordPress.tsx

**Hebergement (liens croises seulement) :**
34. HebergementEcommerce.tsx

**Articles de blog :**
35-37. PrixCreationSiteInternet.tsx, GoogleAdsSEALyon.tsx, ReferencementSEOLyon.tsx

---

## Resultat attendu
- 25 URLs de sous-services harmonisees sans prefixe `/services/`
- Redirections 301 pour les anciennes URLs
- Tous les liens internes mis a jour
- URLs canoniques corrigees
- Sitemap XML regenere automatiquement au build

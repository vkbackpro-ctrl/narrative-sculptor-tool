import { Helmet } from "react-helmet";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import FadeInSection from "@/components/FadeInSection";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import blogImage from "@/assets/blog-wordpress-cms.jpg";

const MaintenanceWordPress = () => {
  return (
    <>
      <Helmet>
        <title>Maintenance WordPress : Guide Essentiel 2025 - VKBack</title>
        <meta 
          name="description" 
          content="Tout ce qu'il faut savoir sur la maintenance WordPress : mises à jour, sécurité, sauvegardes et optimisation des performances." 
        />
        <link rel="canonical" href="https://vkback.com/blog/maintenance-wordpress" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Maintenance WordPress" }
        ]} 
      />

      <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-8">
              <Button asChild variant="ghost" className="mb-6">
                <a href="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour au blog
                </a>
              </Button>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge>Maintenance</Badge>
                <Badge variant="outline">WordPress</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Maintenance WordPress : Pourquoi C'est Essentiel en 2025
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Marc D.
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  5 Janvier 2025
                </span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <img 
              src={blogImage} 
              alt="Maintenance WordPress"
              className="w-full h-96 object-cover rounded-lg mb-12"
            />
          </FadeInSection>

          <div className="prose prose-lg max-w-none">
            <FadeInSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                Un site WordPress sans maintenance, c'est comme une voiture sans révision : tôt ou tard, les problèmes apparaissent. Découvrez pourquoi la maintenance WordPress est indispensable en 2025.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Pourquoi la Maintenance WordPress est Cruciale ?</h2>
              <p className="mb-4">
                WordPress propulse <strong>43% des sites web mondiaux</strong>. Cette popularité en fait une cible privilégiée pour les pirates. Sans maintenance régulière, votre site risque :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Piratage</strong> : 90% des sites WordPress hackés n'étaient pas à jour</li>
                <li><strong>Perte de données</strong> : Sans sauvegarde, récupération impossible</li>
                <li><strong>Ralentissements</strong> : Accumulation de cache, base de données surchargée</li>
                <li><strong>Incompatibilités</strong> : Mises à jour non testées = site cassé</li>
                <li><strong>Pénalité SEO</strong> : Google sanctionne les sites lents ou piratés</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Les 7 Piliers de la Maintenance WordPress</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">1. Mises à Jour Régulières</h3>
              <p className="mb-4">
                WordPress, thèmes et extensions doivent être mis à jour régulièrement :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>WordPress Core</strong> : Nouvelles versions tous les 3-4 mois</li>
                <li><strong>Extensions</strong> : Mises à jour de sécurité hebdomadaires</li>
                <li><strong>Thème</strong> : Updates design et compatibilité</li>
                <li><strong>PHP</strong> : Migration vers versions récentes (PHP 8.2+)</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">2. Sauvegardes Automatiques</h3>
              <p className="mb-4">
                Sans sauvegarde = risque de tout perdre. Une stratégie de backup solide inclut :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Sauvegardes quotidiennes</strong> : Base de données + fichiers</li>
                <li><strong>Stockage externe</strong> : Cloud (Google Drive, Dropbox, AWS S3)</li>
                <li><strong>Rétention 30 jours</strong> : Historique pour restauration</li>
                <li><strong>Test de restauration</strong> : Vérifier que les backups fonctionnent</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">3. Sécurité Renforcée</h3>
              <p className="mb-4">
                La sécurité WordPress nécessite une vigilance constante :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Pare-feu (WAF)</strong> : Bloquer attaques et bots malveillants</li>
                <li><strong>Scan malware</strong> : Détection virus et code malicieux</li>
                <li><strong>SSL actif</strong> : HTTPS obligatoire pour la sécurité</li>
                <li><strong>Authentification forte</strong> : 2FA, limitation tentatives login</li>
                <li><strong>Permissions fichiers</strong> : Sécuriser wp-config.php et .htaccess</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">4. Optimisation des Performances</h3>
              <p className="mb-4">
                Un site lent = visiteurs qui partent et SEO pénalisé :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Cache navigateur</strong> : Réduction temps de chargement 50%</li>
                <li><strong>Optimisation images</strong> : Compression WebP, lazy loading</li>
                <li><strong>Minification CSS/JS</strong> : Réduire taille des fichiers</li>
                <li><strong>CDN</strong> : Distribution contenu mondiale rapide</li>
                <li><strong>Base de données</strong> : Nettoyage révisions, spam, transients</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">5. Monitoring Uptime</h3>
              <p className="mb-4">
                Surveillance 24/7 pour détecter les pannes :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Alertes en temps réel</strong> : Email/SMS si site down</li>
                <li><strong>Temps de réponse</strong> : Surveillance vitesse de chargement</li>
                <li><strong>SSL monitoring</strong> : Alertes expiration certificat</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">6. Mises à Jour Contenu</h3>
              <p className="mb-4">
                Maintenance = aussi fraîcheur du contenu :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Liens cassés</strong> : Détecter et corriger les erreurs 404</li>
                <li><strong>Contenu obsolète</strong> : Actualiser infos périmées</li>
                <li><strong>Commentaires spam</strong> : Modération et nettoyage</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">7. Support Technique</h3>
              <p className="mb-4">
                Assistance rapide en cas de problème :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Hotline prioritaire</strong> : Réponse &lt;2h</li>
                <li><strong>Correction bugs</strong> : Résolution problèmes techniques</li>
                <li><strong>Conseils d'expert</strong> : Guidance sur évolutions</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Fréquence de Maintenance Recommandée</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Quotidien</strong> : Sauvegardes automatiques, monitoring uptime</li>
                <li><strong>Hebdomadaire</strong> : Mises à jour mineures extensions, scan sécurité</li>
                <li><strong>Mensuel</strong> : Mises à jour WordPress Core, optimisation BDD, rapport performances</li>
                <li><strong>Trimestriel</strong> : Audit sécurité complet, test restauration backup</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Tarifs Maintenance WordPress Lyon</h2>
              <p className="mb-4">
                Budget à prévoir pour une maintenance WordPress professionnelle :
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Formule Basique</strong> : 59€/mois - Mises à jour + sauvegardes + monitoring</li>
                <li><strong>Formule Pro</strong> : 99€/mois - Basique + optimisations + sécurité renforcée</li>
                <li><strong>Formule Premium</strong> : 159€/mois - Pro + support prioritaire + 2h assistance/mois</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Faire Soi-Même ou Déléguer ?</h2>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Maintenance DIY (Do It Yourself)</h3>
              <p className="mb-4">
                <strong>Avantages</strong> : Économique, contrôle total
                <br />
                <strong>Inconvénients</strong> : Chronophage, compétences techniques requises, risque d'erreur
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Maintenance par Agence</h3>
              <p className="mb-4">
                <strong>Avantages</strong> : Expertise, gain de temps, réactivité, tranquillité d'esprit
                <br />
                <strong>Inconvénients</strong> : Coût mensuel (mais rentable au final)
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
              <p className="mb-8">
                La <strong>maintenance WordPress</strong> n'est pas une option mais une nécessité en 2025. Un site non maintenu = risques sécurité, pertes de données et pénalités SEO. Pour 59€/mois, protégez votre investissement et dormez tranquille. Notre agence VKBack assure une maintenance WordPress complète pour entreprises lyonnaises.
              </p>
            </FadeInSection>
          </div>

          <FadeInSection delay={300}>
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Confiez-nous Votre Maintenance WordPress</h3>
              <p className="text-muted-foreground mb-6">
                Formules dès 59€/mois. Support expert et réactivité garantie.
              </p>
              <Button asChild size="lg" className="btn-cta">
                <a href="/contact">
                  Demander un devis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </FadeInSection>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default MaintenanceWordPress;

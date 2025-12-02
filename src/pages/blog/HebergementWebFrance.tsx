import { Helmet } from "react-helmet";
import { Calendar, User, ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, Server, Clock, Shield, Zap, Database, Globe, FileCheck, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import StickyCtaButton from "@/components/StickyCtaButton";
import FadeInSection from "@/components/FadeInSection";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import blogImage from "@/assets/blog-hebergement-web.jpg";

const HebergementWebFrance = () => {
  const tableOfContents = [
    { id: "pourquoi-migrer", title: "Pourquoi migrer son hébergement ?" },
    { id: "preparation", title: "Préparer la migration" },
    { id: "etapes-migration", title: "Les 8 étapes de la migration" },
    { id: "erreurs-eviter", title: "Erreurs à éviter" },
    { id: "temps-interruption", title: "Minimiser le temps d'interruption" },
    { id: "apres-migration", title: "Après la migration" },
    { id: "conclusion", title: "Conclusion" },
  ];

  const raisonsMigration = [
    {
      raison: "Performances insuffisantes",
      description: "Site lent, temps de chargement > 3 secondes, serveur saturé",
      icon: Zap,
    },
    {
      raison: "Support technique inexistant",
      description: "Réponses tardives, incompétence, pas de support en français",
      icon: Settings,
    },
    {
      raison: "Sécurité défaillante",
      description: "Pas de SSL gratuit, sauvegardes insuffisantes, failles récurrentes",
      icon: Shield,
    },
    {
      raison: "Tarifs qui explosent",
      description: "Prix d'appel puis augmentation massive au renouvellement",
      icon: AlertTriangle,
    },
    {
      raison: "Fonctionnalités manquantes",
      description: "Pas de staging, pas de CDN, versions PHP obsolètes",
      icon: Database,
    },
    {
      raison: "Localisation des données",
      description: "Serveurs hors France/UE, problèmes RGPD",
      icon: Globe,
    },
  ];

  const etapesMigration = [
    {
      numero: 1,
      titre: "Audit de l'existant",
      description: "Listez tous les éléments : fichiers, bases de données, emails, DNS, certificats SSL, cronjobs.",
      duree: "1-2 heures",
      critique: false,
    },
    {
      numero: 2,
      titre: "Sauvegarde complète",
      description: "Téléchargez une copie intégrale de votre site (fichiers FTP + export SQL). Gardez-la en local ET sur un cloud.",
      duree: "30 min - 2h",
      critique: true,
    },
    {
      numero: 3,
      titre: "Configuration du nouvel hébergeur",
      description: "Créez votre compte, configurez le domaine en mode 'addon', créez la base de données et les comptes FTP.",
      duree: "30 minutes",
      critique: false,
    },
    {
      numero: 4,
      titre: "Transfert des fichiers",
      description: "Uploadez vos fichiers via FTP/SFTP ou utilisez un plugin de migration (Duplicator, All-in-One WP Migration).",
      duree: "30 min - 3h",
      critique: false,
    },
    {
      numero: 5,
      titre: "Import de la base de données",
      description: "Importez votre fichier SQL via phpMyAdmin. Vérifiez l'encodage UTF-8. Mettez à jour wp-config.php si WordPress.",
      duree: "15-30 min",
      critique: true,
    },
    {
      numero: 6,
      titre: "Test en environnement temporaire",
      description: "Testez le site sur l'URL temporaire du nouvel hébergeur AVANT de changer les DNS. Vérifiez toutes les pages.",
      duree: "1-2 heures",
      critique: true,
    },
    {
      numero: 7,
      titre: "Changement des DNS",
      description: "Pointez votre domaine vers le nouvel hébergeur. Propagation : 24-48h maximum (souvent 2-6h).",
      duree: "2-48h propagation",
      critique: true,
    },
    {
      numero: 8,
      titre: "Vérifications post-migration",
      description: "SSL actif, emails fonctionnels, formulaires testés, vitesse vérifiée, 404 détectées.",
      duree: "2-4 heures",
      critique: false,
    },
  ];

  const erreursEviter = [
    {
      erreur: "Ne pas faire de sauvegarde avant migration",
      consequence: "Perte de données irréversible en cas de problème",
      solution: "Toujours 2 sauvegardes minimum (local + cloud)",
    },
    {
      erreur: "Changer les DNS trop tôt",
      consequence: "Site cassé visible par tous vos visiteurs",
      solution: "Tester sur URL temporaire avant changement DNS",
    },
    {
      erreur: "Oublier les emails",
      consequence: "Perte d'emails entrants pendant la migration",
      solution: "Recréer les comptes mail sur le nouvel hébergeur AVANT le changement DNS",
    },
    {
      erreur: "Ignorer le fichier .htaccess",
      consequence: "Redirections cassées, problèmes de sécurité",
      solution: "Copier et adapter le .htaccess au nouvel environnement",
    },
    {
      erreur: "Ne pas mettre à jour les URLs en base",
      consequence: "Liens internes cassés, images qui ne s'affichent pas",
      solution: "Utiliser Search-Replace-DB ou WP-CLI pour WordPress",
    },
    {
      erreur: "Supprimer l'ancien hébergement trop vite",
      consequence: "Impossible de revenir en arrière si problème",
      solution: "Garder l'ancien hébergement actif 1-2 semaines après migration",
    },
  ];

  const checklistPreMigration = [
    "Liste complète des fichiers et dossiers",
    "Export de toutes les bases de données",
    "Liste des comptes email à recréer",
    "Copie des enregistrements DNS actuels",
    "Sauvegarde des certificats SSL personnalisés",
    "Liste des cronjobs/tâches planifiées",
    "Copie des configurations spécifiques (.htaccess, php.ini)",
    "Documentation des redirections en place",
  ];

  return (
    <>
      <Helmet>
        <title>Migrer son Site vers un Nouvel Hébergeur : Guide 2025</title>
        <meta 
          name="description" 
          content="Guide complet pour migrer votre site vers un nouvel hébergeur sans interruption. 8 étapes détaillées, erreurs à éviter, checklist téléchargeable." 
        />
        <link rel="canonical" href="https://vkback.com/blog/hebergement-web-france" />
      </Helmet>

      <ProgressBar />
      <Header />
      <StickyCtaButton />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Migrer son hébergement" }
        ]} 
      />

      <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-8">
              <Button asChild variant="ghost" className="mb-6">
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour au blog
                </Link>
              </Button>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge>Technique</Badge>
                <Badge variant="outline">Guide pratique</Badge>
                <Badge variant="outline">Migration</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Migrer son Site vers un Nouvel Hébergeur : Guide Complet
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Marc D.
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Mis à jour le 2 Décembre 2025
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  12 min de lecture
                </span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <img 
              src={blogImage} 
              alt="Guide de migration d'hébergement web - Comment changer d'hébergeur sans interruption"
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />
          </FadeInSection>

          {/* Sommaire */}
          <FadeInSection delay={150}>
            <Card className="mb-12 bg-muted/30">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5 text-primary" />
                  Sommaire de l'article
                </h2>
                <nav>
                  <ol className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <li key={item.id}>
                        <a 
                          href={`#${item.id}`}
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <span className="text-primary font-medium">{index + 1}.</span>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </CardContent>
            </Card>
          </FadeInSection>

          <div className="prose prose-lg max-w-none">
            <FadeInSection delay={200}>
              <p className="text-xl text-muted-foreground mb-8">
                Changer d'hébergeur web peut sembler intimidant : risque de perdre des données, site inaccessible, emails perdus... Pourtant, avec une méthode rigoureuse, la migration peut se faire <strong>sans aucune interruption de service</strong>. Ce guide vous accompagne étape par étape.
              </p>

              {/* Section 1 - Pourquoi migrer */}
              <section id="pourquoi-migrer">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Pourquoi Migrer son Hébergement ?</h2>
                
                <p className="mb-4">
                  Plusieurs raisons peuvent justifier un changement d'hébergeur :
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {raisonsMigration.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{item.raison}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <p className="mb-6">
                  Selon la <a href="https://www.cnil.fr/fr/rgpd-de-quoi-parle-t-on" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CNIL</a>, héberger ses données en France ou en UE est fortement recommandé pour la conformité RGPD. C'est souvent un facteur déclencheur de migration.
                </p>
              </section>

              {/* Section 2 - Préparation */}
              <section id="preparation">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Préparer la Migration</h2>
                
                <p className="mb-4">
                  Une migration réussie se prépare minutieusement. Voici la checklist des éléments à rassembler <strong>avant</strong> de commencer :
                </p>

                <Card className="mb-8 border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-primary" />
                      Checklist pré-migration
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {checklistPreMigration.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-amber-500/30 bg-amber-500/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                      <h3 className="font-bold text-amber-700 dark:text-amber-400">Point crucial</h3>
                    </div>
                    <p>
                      Planifiez votre migration un <strong>jour de faible trafic</strong> (mardi ou mercredi généralement) et prévoyez une plage horaire de 4-6 heures. Informez vos équipes et évitez les périodes de rush (soldes, fêtes...).
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Section 3 - Les 8 étapes */}
              <section id="etapes-migration">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Les 8 Étapes de la Migration</h2>
                
                <div className="space-y-6 mb-8">
                  {etapesMigration.map((etape) => (
                    <Card key={etape.numero} className={`border-l-4 ${etape.critique ? 'border-l-red-500' : 'border-l-primary'}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${etape.critique ? 'bg-red-500/10 text-red-500' : 'bg-primary/10 text-primary'}`}>
                            <span className="font-bold">{etape.numero}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className="font-bold text-lg">{etape.titre}</h3>
                              {etape.critique && (
                                <Badge variant="destructive" className="text-xs">Critique</Badge>
                              )}
                              <Badge variant="outline" className="text-xs">
                                <Clock className="w-3 h-3 mr-1" />
                                {etape.duree}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground">{etape.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Section 4 - Erreurs à éviter */}
              <section id="erreurs-eviter">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Les 6 Erreurs à Éviter</h2>
                
                <div className="space-y-4 mb-8">
                  {erreursEviter.map((item, index) => (
                    <Card key={index} className="border-red-500/20">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" />
                          {item.erreur}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          <strong>Conséquence :</strong> {item.consequence}
                        </p>
                        <p className="text-sm bg-green-500/10 p-3 rounded">
                          <strong className="text-green-700 dark:text-green-400">✓ Solution :</strong> {item.solution}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Section 5 - Minimiser interruption */}
              <section id="temps-interruption">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Minimiser le Temps d'Interruption</h2>
                
                <p className="mb-4">
                  Avec une bonne méthode, vous pouvez migrer votre site avec <strong>zéro temps d'interruption</strong> visible pour vos visiteurs :
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Réduisez le TTL DNS 24-48h avant</strong> : passez de 86400 à 300 secondes pour une propagation plus rapide</li>
                  <li><strong>Synchronisez les données juste avant le switch</strong> : re-exportez la base de données une dernière fois</li>
                  <li><strong>Changez les DNS en heures creuses</strong> : entre 2h et 6h du matin idéalement</li>
                  <li><strong>Gardez les deux hébergements actifs</strong> : l'ancien continue de servir pendant la propagation</li>
                  <li><strong>Utilisez un CDN</strong> : Cloudflare peut servir de tampon et accélérer la transition</li>
                </ul>

                <Card className="mb-8 border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">💡 Astuce pro</p>
                    <p>
                      Pour les sites WordPress, le plugin <strong>Duplicator Pro</strong> ou <strong>All-in-One WP Migration</strong> peut automatiser 80% du processus et réduire le risque d'erreur humaine.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Section 6 - Après migration */}
              <section id="apres-migration">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Après la Migration : Vérifications Essentielles</h2>
                
                <p className="mb-4">
                  Une fois les DNS propagés, effectuez ces vérifications :
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>✅ <strong>Certificat SSL actif</strong> : vérifiez le cadenas dans la barre d'adresse</li>
                  <li>✅ <strong>Toutes les pages fonctionnent</strong> : testez navigation, formulaires, panier</li>
                  <li>✅ <strong>Emails envoyés et reçus</strong> : testez l'envoi depuis les formulaires</li>
                  <li>✅ <strong>Vitesse de chargement</strong> : testez avec <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PageSpeed Insights</a></li>
                  <li>✅ <strong>Pas d'erreurs 404</strong> : vérifiez dans la Search Console</li>
                  <li>✅ <strong>Sauvegardes automatiques actives</strong> : configurez les backups sur le nouvel hébergeur</li>
                  <li>✅ <strong>Monitoring actif</strong> : mettez en place une alerte de disponibilité</li>
                </ul>

                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Nos services de migration et hébergement</h3>
                    <p className="mb-4 text-muted-foreground">
                      Vous préférez confier la migration à des experts ? Nous nous occupons de tout :
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild variant="outline" size="sm">
                        <Link to="/hebergement-web-lyon">Hébergement Web</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/migration-site-internet-lyon">Migration de Site</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/maintenance-support-wordpress-lyon">Maintenance WordPress</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Conclusion */}
              <section id="conclusion">
                <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Conclusion</h2>
                
                <p className="mb-4">
                  Migrer son site vers un nouvel hébergeur n'est pas compliqué si vous suivez une méthode rigoureuse. Les points clés à retenir :
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>✅ <strong>Sauvegardez tout</strong> avant de commencer (fichiers + base de données)</li>
                  <li>✅ <strong>Testez sur URL temporaire</strong> avant de changer les DNS</li>
                  <li>✅ <strong>N'oubliez pas les emails</strong> et les configurations spécifiques</li>
                  <li>✅ <strong>Gardez l'ancien hébergement actif</strong> 1-2 semaines après migration</li>
                  <li>✅ <strong>Vérifiez tout</strong> après la migration (SSL, formulaires, vitesse)</li>
                </ul>

                <p className="mb-8">
                  Si vous n'êtes pas à l'aise avec ces manipulations techniques, faites appel à un professionnel. Une migration mal faite peut coûter bien plus cher qu'une prestation d'accompagnement.
                </p>
              </section>
            </FadeInSection>
          </div>

          {/* CTA */}
          <FadeInSection delay={300}>
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Besoin d'Aide pour Migrer ?</h3>
              <p className="text-muted-foreground mb-6">
                Nous gérons votre migration de A à Z, sans interruption de service.
              </p>
              <Button asChild size="lg" className="btn-cta">
                <Link to="/contact">
                  Demander un devis migration
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </FadeInSection>

          {/* Articles liés */}
          <FadeInSection delay={400}>
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Articles liés</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/blog/maintenance-wordpress" className="group">
                  <Card className="h-full transition-all hover:border-primary/50">
                    <CardContent className="p-6">
                      <Badge className="mb-3">Maintenance</Badge>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        Maintenance WordPress : Guide Complet 2025
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Les 8 piliers d'une maintenance efficace.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/blog/prix-creation-site-internet-lyon" className="group">
                  <Card className="h-full transition-all hover:border-primary/50">
                    <CardContent className="p-6">
                      <Badge className="mb-3">Guide</Badge>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        Combien Coûte un Site Internet en 2025 ?
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Tarifs détaillés selon le type de site.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </FadeInSection>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default HebergementWebFrance;
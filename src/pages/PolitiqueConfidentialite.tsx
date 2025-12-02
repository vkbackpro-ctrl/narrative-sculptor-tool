import { Helmet } from "react-helmet";
import SchemaOrg from "@/components/SchemaOrg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import FadeInSection from "@/components/FadeInSection";
import Breadcrumb from "@/components/Breadcrumb";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité - VKBack Agence Web Lyon</title>
        <meta 
          name="description" 
          content="Politique de confidentialité et protection des données personnelles de VKBack, conforme au RGPD." 
        />
        <link rel="canonical" href="https://vkback.com/politique-confidentialite" />
      </Helmet>

      <SchemaOrg 
        type="legal"
        pageTitle="Politique de Confidentialité - VKBack"
        pageDescription="Politique de confidentialité et protection des données personnelles de VKBack, conforme au RGPD."
        pageUrl="https://vkback.com/politique-confidentialite"
        breadcrumbs={[
          { name: "Accueil", url: "https://vkback.com/" },
          { name: "Politique de Confidentialité", url: "https://vkback.com/politique-confidentialite" }
        ]}
      />

      <ProgressBar />
      <Header />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Politique de Confidentialité" }
        ]} 
      />

      <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Politique de Confidentialité
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              VKBack accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données conformément au RGPD.
            </p>
          </FadeInSection>

          <div className="prose prose-lg max-w-none space-y-8">
            <FadeInSection delay={100}>
              <section>
                <h2 className="text-3xl font-bold mb-4">1. Responsable du Traitement</h2>
                <p className="mb-4">
                  Le responsable du traitement des données personnelles est :
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>VKBack</strong></li>
                  <li>Lyon, Rhône (69), France</li>
                  <li>Email : contact@vkback.com</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={200}>
              <section>
                <h2 className="text-3xl font-bold mb-4">2. Données Collectées</h2>
                <p className="mb-4">
                  Nous collectons uniquement les données nécessaires à la réalisation de nos services :
                </p>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">2.1 Formulaire de Contact</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone (optionnel)</li>
                  <li>Nom de l'entreprise (optionnel)</li>
                  <li>Message</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">2.2 Données de Navigation</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées</li>
                  <li>Durée de visite</li>
                  <li>Provenance du trafic</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">2.3 Cookies</h3>
                <p>
                  Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser l'audience du site. Vous pouvez refuser les cookies via les paramètres de votre navigateur.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={300}>
              <section>
                <h2 className="text-3xl font-bold mb-4">3. Finalités du Traitement</h2>
                <p className="mb-4">
                  Vos données personnelles sont collectées pour les finalités suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Répondre à vos demandes</strong> : Traitement de vos demandes de contact et devis</li>
                  <li><strong>Améliorer nos services</strong> : Analyse de l'utilisation du site et amélioration de l'expérience utilisateur</li>
                  <li><strong>Communication marketing</strong> : Envoi de newsletters et informations commerciales (avec votre consentement)</li>
                  <li><strong>Obligations légales</strong> : Respect de nos obligations légales et réglementaires</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={400}>
              <section>
                <h2 className="text-3xl font-bold mb-4">4. Base Légale</h2>
                <p className="mb-4">
                  Le traitement de vos données repose sur les bases légales suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Consentement</strong> : Pour l'envoi de communications marketing</li>
                  <li><strong>Exécution du contrat</strong> : Pour traiter vos demandes de services</li>
                  <li><strong>Intérêt légitime</strong> : Pour l'analyse statistique et l'amélioration du site</li>
                  <li><strong>Obligation légale</strong> : Pour la conservation de certaines données</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={500}>
              <section>
                <h2 className="text-3xl font-bold mb-4">5. Durée de Conservation</h2>
                <p className="mb-4">
                  Vos données sont conservées pendant les durées suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Demandes de contact</strong> : 3 ans à compter du dernier contact</li>
                  <li><strong>Clients</strong> : Durée de la relation commerciale + 5 ans (obligations comptables)</li>
                  <li><strong>Prospects</strong> : 3 ans à compter du dernier contact</li>
                  <li><strong>Données de navigation</strong> : 13 mois maximum (cookies)</li>
                  <li><strong>Logs de connexion</strong> : 12 mois (obligations légales de sécurité)</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={600}>
              <section>
                <h2 className="text-3xl font-bold mb-4">6. Destinataires des Données</h2>
                <p className="mb-4">
                  Vos données peuvent être transmises aux destinataires suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personnel interne</strong> : Équipe VKBack pour le traitement de vos demandes</li>
                  <li><strong>Prestataires techniques</strong> : Hébergeur, service d'emailing (sous contrat de confidentialité)</li>
                  <li><strong>Services analytiques</strong> : Google Analytics (données anonymisées)</li>
                  <li><strong>Autorités légales</strong> : En cas d'obligation légale ou judiciaire</li>
                </ul>
                <p className="mt-4">
                  Nous ne vendons ni ne louons vos données personnelles à des tiers.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={700}>
              <section>
                <h2 className="text-3xl font-bold mb-4">7. Vos Droits</h2>
                <p className="mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Droit d'accès</strong> : Obtenir une copie de vos données personnelles</li>
                  <li><strong>Droit de rectification</strong> : Corriger des données inexactes ou incomplètes</li>
                  <li><strong>Droit à l'effacement</strong> : Demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation</strong> : Limiter le traitement de vos données</li>
                  <li><strong>Droit d'opposition</strong> : S'opposer au traitement de vos données</li>
                  <li><strong>Droit à la portabilité</strong> : Récupérer vos données dans un format structuré</li>
                  <li><strong>Droit de retirer votre consentement</strong> : À tout moment pour les traitements basés sur le consentement</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous à : <strong>contact@vkback.com</strong>
                </p>
                <p className="mt-2">
                  Nous répondrons à votre demande dans un délai d'1 mois maximum.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={800}>
              <section>
                <h2 className="text-3xl font-bold mb-4">8. Sécurité des Données</h2>
                <p className="mb-4">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cryptage SSL/TLS pour toutes les communications</li>
                  <li>Hébergement sécurisé avec sauvegardes régulières</li>
                  <li>Accès aux données strictement limité aux personnes autorisées</li>
                  <li>Pare-feu et protection contre les cyberattaques</li>
                  <li>Audits de sécurité réguliers</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={900}>
              <section>
                <h2 className="text-3xl font-bold mb-4">9. Cookies et Technologies Similaires</h2>
                <p className="mb-4">
                  Nous utilisons les cookies suivants :
                </p>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">Cookies Essentiels</h3>
                <p className="mb-4">
                  Nécessaires au fonctionnement du site (session, sécurité). Ces cookies ne peuvent pas être désactivés.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Cookies Analytiques</h3>
                <p className="mb-4">
                  Google Analytics pour mesurer l'audience (données anonymisées). Vous pouvez les refuser.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">Gestion des Cookies</h3>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti de leur dépôt. La suppression des cookies peut affecter la navigation sur le site.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={1000}>
              <section>
                <h2 className="text-3xl font-bold mb-4">10. Transferts Internationaux</h2>
                <p className="mb-4">
                  Vos données sont hébergées et traitées au sein de l'Union Européenne. En cas de transfert hors UE, nous nous assurons que des garanties appropriées sont mises en place (clauses contractuelles types, Privacy Shield).
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={1100}>
              <section>
                <h2 className="text-3xl font-bold mb-4">11. Réclamation</h2>
                <p className="mb-4">
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Site web :</strong> <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a></li>
                  <li><strong>Adresse :</strong> 3 Place de Fontenoy, TSA 80715, 75334 PARIS CEDEX 07</li>
                  <li><strong>Téléphone :</strong> 01 53 73 22 22</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={1200}>
              <section>
                <h2 className="text-3xl font-bold mb-4">12. Modification de la Politique</h2>
                <p className="mb-4">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entreront en vigueur dès leur publication sur cette page. Nous vous encourageons à consulter régulièrement cette page.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={1300}>
              <section>
                <h2 className="text-3xl font-bold mb-4">13. Contact</h2>
                <p className="mb-4">
                  Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits :
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Email :</strong> contact@vkback.com</li>
                  <li><strong>Adresse :</strong> VKBack, Lyon, Rhône (69), France</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={1400}>
              <section className="pt-8 border-t">
                <p className="text-sm text-muted-foreground">
                  <strong>Dernière mise à jour :</strong> Janvier 2025
                </p>
              </section>
            </FadeInSection>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PolitiqueConfidentialite;

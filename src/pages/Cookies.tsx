import { Helmet } from "react-helmet";
import SchemaOrg from "@/components/SchemaOrg";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import FadeInSection from "@/components/FadeInSection";
import Breadcrumb from "@/components/Breadcrumb";

const Cookies = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Cookies - VKBack Agence Web Lyon</title>
        <meta 
          name="description" 
          content="Politique de gestion des cookies de VKBack. Informations sur l'utilisation des cookies et vos choix." 
        />
        <link rel="canonical" href="https://vkback.com/cookies" />
      </Helmet>

      <SchemaOrg 
        type="legal"
        pageTitle="Politique de Cookies - VKBack"
        pageDescription="Politique de gestion des cookies de VKBack. Informations sur l'utilisation des cookies et vos choix."
        pageUrl="https://vkback.com/cookies"
        breadcrumbs={[
          { name: "Accueil", url: "https://vkback.com/" },
          { name: "Cookies", url: "https://vkback.com/cookies" }
        ]}
      />

      <ProgressBar />
      <Header />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Politique de Cookies" }
        ]} 
      />

      <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Politique de Cookies
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Cette page vous informe sur notre utilisation des cookies et technologies similaires sur le site vkback.com
            </p>
          </FadeInSection>

          <div className="prose prose-lg max-w-none space-y-8">
            <FadeInSection delay={100}>
              <section>
                <h2 className="text-3xl font-bold mb-4">1. Qu'est-ce qu'un cookie ?</h2>
                <p className="mb-4">
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site internet. 
                  Il permet au site de mémoriser des informations sur votre visite, comme votre langue préférée et d'autres paramètres, 
                  afin de faciliter votre prochaine visite et de rendre le site plus utile.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={200}>
              <section>
                <h2 className="text-3xl font-bold mb-4">2. Types de cookies utilisés</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">2.1 Cookies strictement nécessaires</h3>
                <p className="mb-4">
                  Ces cookies sont indispensables au fonctionnement du site. Ils vous permettent de naviguer sur le site et d'utiliser ses fonctionnalités essentielles. 
                  Sans ces cookies, les services que vous avez demandés ne peuvent pas être fournis.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Cookies de session : maintiennent votre session active pendant votre navigation</li>
                  <li>Cookies de sécurité : protègent contre les attaques et assurent la sécurité de vos données</li>
                  <li>Cookies de consentement : mémorisent vos choix concernant les cookies</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">2.2 Cookies de performance et analytiques</h3>
                <p className="mb-4">
                  Ces cookies collectent des informations anonymes sur la façon dont les visiteurs utilisent notre site. 
                  Ils nous aident à améliorer le fonctionnement du site en comprenant comment les visiteurs interagissent avec lui.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Google Analytics : analyse du trafic et du comportement des utilisateurs</li>
                  <li>Mesure d'audience : statistiques de fréquentation et performance des pages</li>
                  <li>Tests A/B : optimisation de l'expérience utilisateur</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">2.3 Cookies de fonctionnalité</h3>
                <p className="mb-4">
                  Ces cookies permettent au site de se souvenir des choix que vous faites et fournissent des fonctionnalités améliorées et personnalisées.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Préférences linguistiques</li>
                  <li>Thème d'affichage (mode clair/sombre)</li>
                  <li>Personnalisation de l'interface</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">2.4 Cookies publicitaires et de ciblage</h3>
                <p className="mb-4">
                  Ces cookies sont utilisés pour diffuser des publicités plus pertinentes pour vous et vos intérêts. 
                  Ils sont également utilisés pour limiter le nombre de fois où vous voyez une publicité et pour mesurer l'efficacité des campagnes publicitaires.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Google Ads : publicités ciblées</li>
                  <li>Remarketing : affichage de publicités basées sur vos visites précédentes</li>
                  <li>Conversion tracking : mesure des conversions publicitaires</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={300}>
              <section>
                <h2 className="text-3xl font-bold mb-4">3. Cookies tiers</h2>
                <p className="mb-4">
                  Nous utilisons des services tiers qui peuvent également déposer des cookies sur votre terminal :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics</strong> : analyse de trafic</li>
                  <li><strong>Google Ads</strong> : publicité en ligne</li>
                  <li><strong>LinkedIn</strong> : partage de contenu et publicité</li>
                  <li><strong>Facebook Pixel</strong> : mesure de performance publicitaire</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={400}>
              <section>
                <h2 className="text-3xl font-bold mb-4">4. Durée de conservation des cookies</h2>
                <p className="mb-4">
                  Les cookies ont des durées de vie variables :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cookies de session</strong> : supprimés automatiquement à la fermeture du navigateur</li>
                  <li><strong>Cookies persistants</strong> : conservés jusqu'à 13 mois maximum</li>
                  <li><strong>Cookies analytiques</strong> : conservés jusqu'à 26 mois</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={500}>
              <section>
                <h2 className="text-3xl font-bold mb-4">5. Gestion de vos préférences cookies</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">5.1 Via notre bandeau de consentement</h3>
                <p className="mb-4">
                  Lors de votre première visite sur notre site, un bandeau vous informe de la présence de cookies et vous permet de :
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Accepter tous les cookies</li>
                  <li>Refuser les cookies non essentiels</li>
                  <li>Personnaliser vos choix par catégorie</li>
                </ul>
                <p className="mb-4">
                  Vous pouvez à tout moment modifier vos préférences en cliquant sur le lien "Paramètres des cookies" présent en bas de chaque page.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">5.2 Via les paramètres de votre navigateur</h3>
                <p className="mb-4">
                  Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Chrome</strong> : Paramètres → Confidentialité et sécurité → Cookies</li>
                  <li><strong>Mozilla Firefox</strong> : Options → Vie privée et sécurité → Cookies</li>
                  <li><strong>Safari</strong> : Préférences → Confidentialité → Cookies</li>
                  <li><strong>Microsoft Edge</strong> : Paramètres → Confidentialité → Cookies</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={600}>
              <section>
                <h2 className="text-3xl font-bold mb-4">6. Conséquences du refus des cookies</h2>
                <p className="mb-4">
                  Le refus des cookies non essentiels n'empêche pas la navigation sur le site mais peut limiter certaines fonctionnalités :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Impossibilité de mémoriser vos préférences</li>
                  <li>Limitation des fonctionnalités de personnalisation</li>
                  <li>Perte de certaines optimisations de navigation</li>
                  <li>Statistiques moins précises pour améliorer le site</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={700}>
              <section>
                <h2 className="text-3xl font-bold mb-4">7. Protection de vos données personnelles</h2>
                <p className="mb-4">
                  Les données collectées via les cookies sont traitées conformément à notre 
                  <Link to="/politique-confidentialite" className="text-primary hover:underline"> Politique de Confidentialité</Link> et 
                  au Règlement Général sur la Protection des Données (RGPD).
                </p>
                <p className="mb-4">
                  Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, 
                  d'opposition et de portabilité de vos données personnelles.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={800}>
              <section>
                <h2 className="text-3xl font-bold mb-4">8. Mises à jour de cette politique</h2>
                <p className="mb-4">
                  Nous nous réservons le droit de modifier cette politique de cookies à tout moment. 
                  La date de dernière mise à jour est indiquée ci-dessous. Nous vous encourageons à consulter régulièrement cette page.
                </p>
                <p className="mb-4">
                  <strong>Dernière mise à jour :</strong> 22 janvier 2025
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={900}>
              <section>
                <h2 className="text-3xl font-bold mb-4">9. Contact</h2>
                <p className="mb-4">
                  Pour toute question concernant notre politique de cookies, vous pouvez nous contacter :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Email :</strong> contact@vkback.com</li>
                  <li><strong>Téléphone :</strong> 04 11 78 91 13</li>
                  <li><strong>Adresse :</strong> Lyon, France</li>
                </ul>
              </section>
            </FadeInSection>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cookies;

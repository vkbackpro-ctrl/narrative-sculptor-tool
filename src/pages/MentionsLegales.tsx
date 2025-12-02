import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import FadeInSection from "@/components/FadeInSection";
import Breadcrumb from "@/components/Breadcrumb";

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales - VKBack Agence Web Lyon</title>
        <meta 
          name="description" 
          content="Mentions légales de VKBack, agence web à Lyon. Informations légales et éditoriales." 
        />
        <link rel="canonical" href="https://vkback.com/mentions-legales" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Mentions Légales" }
        ]} 
      />

      <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Mentions Légales
            </h1>
          </FadeInSection>

          <div className="prose prose-lg max-w-none space-y-8">
            <FadeInSection delay={100}>
              <section>
                <h2 className="text-3xl font-bold mb-4">1. Éditeur du Site</h2>
                <p className="mb-4">
                  Le site <strong>vkback.com</strong> est édité par :
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Raison sociale :</strong> VKBack</li>
                  <li><strong>Forme juridique :</strong> SAS</li>
                  <li><strong>SIRET :</strong> 89509258300015</li>
                  <li><strong>Adresse :</strong> Lyon 1er, Rhône (69), France</li>
                  <li><strong>Email :</strong> contact@vkback.com</li>
                  <li><strong>Téléphone :</strong> 04 11 78 91 13</li>
                  <li><strong>Directeur de publication :</strong> Marc D.</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={200}>
              <section>
                <h2 className="text-3xl font-bold mb-4">2. Hébergement</h2>
                <p className="mb-4">
                  Le site est hébergé par :
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Hébergeur :</strong> O2switch</li>
                  <li><strong>Adresse :</strong> 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France</li>
                  <li><strong>Téléphone :</strong> 04 44 44 60 40</li>
                  <li><strong>Site web :</strong> <a href="https://www.o2switch.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.o2switch.fr</a></li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={300}>
              <section>
                <h2 className="text-3xl font-bold mb-4">3. Propriété Intellectuelle</h2>
                <p className="mb-4">
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) est la propriété exclusive de VKBack ou de ses partenaires. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de VKBack.
                </p>
                <p className="mb-4">
                  Toute utilisation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={400}>
              <section>
                <h2 className="text-3xl font-bold mb-4">4. Liens Hypertextes</h2>
                <p className="mb-4">
                  Le site <strong>vkback.com</strong> peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site vkback.com.
                </p>
                <p className="mb-4">
                  Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de l'éditeur. Aucune autorisation ou demande d'information préalable ne peut être exigée par l'éditeur à l'égard d'un site qui souhaite établir un lien vers le site de l'éditeur. Il convient toutefois d'afficher ce site dans une nouvelle fenêtre du navigateur. Cependant, l'éditeur se réserve le droit de demander la suppression d'un lien qu'il estime non conforme à l'objet du site vkback.com.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={500}>
              <section>
                <h2 className="text-3xl font-bold mb-4">5. Responsabilité</h2>
                <p className="mb-4">
                  Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise possible (page posant problème, action déclenchante, type d'ordinateur et de navigateur utilisé, etc.).
                </p>
                <p className="mb-4">
                  VKBack décline toute responsabilité :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>En cas d'impossibilité d'accès au site</li>
                  <li>En cas de dommages de toute nature, directs ou indirects, résultant de l'utilisation du site</li>
                  <li>Concernant le contenu des sites vers lesquels des liens hypertextes sont proposés</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={600}>
              <section>
                <h2 className="text-3xl font-bold mb-4">6. Données Personnelles</h2>
                <p className="mb-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="mb-4">
                  Pour exercer ces droits, vous pouvez nous contacter par email à : <strong>contact@vkback.com</strong>
                </p>
                <p className="mb-4">
                  Pour plus d'informations sur la gestion de vos données personnelles, consultez notre <Link to="/politique-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</Link>.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={700}>
              <section>
                <h2 className="text-3xl font-bold mb-4">7. Cookies</h2>
                <p className="mb-4">
                  Le site <strong>vkback.com</strong> peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
                </p>
                <p className="mb-4">
                  Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations. Certaines parties de ce site ne peuvent être fonctionnelles sans l'acceptation de cookies.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={800}>
              <section>
                <h2 className="text-3xl font-bold mb-4">8. Droit Applicable</h2>
                <p className="mb-4">
                  Le présent site et les présentes mentions légales sont soumis au droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={900}>
              <section>
                <h2 className="text-3xl font-bold mb-4">9. Crédits</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Conception et développement :</strong> VKBack</li>
                  <li><strong>Photographies :</strong> Images libres de droits et ressources internes</li>
                  <li><strong>Hébergement :</strong> O2switch</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={1000}>
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

export default MentionsLegales;

import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import FadeInSection from "@/components/FadeInSection";
import Breadcrumb from "@/components/Breadcrumb";

const CGV = () => {
  return (
    <>
      <Helmet>
        <title>Conditions Générales de Vente - VKBack Agence Web Lyon</title>
        <meta 
          name="description" 
          content="Conditions Générales de Vente de VKBack. Modalités de prestations, tarifs, paiement et garanties." 
        />
        <link rel="canonical" href="https://vkback.fr/cgv" />
      </Helmet>

      <ProgressBar />
      <Header />
      <ScrollToTop />

      <Breadcrumb 
        items={[
          { label: "Conditions Générales de Vente" }
        ]} 
      />

      <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Conditions Générales de Vente
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre VKBack et ses clients dans le cadre de prestations de création de sites internet et services web.
            </p>
          </FadeInSection>

          <div className="prose prose-lg max-w-none space-y-8">
            <FadeInSection delay={100}>
              <section>
                <h2 className="text-3xl font-bold mb-4">1. Objet</h2>
                <p className="mb-4">
                  Les présentes CGV ont pour objet de définir les conditions dans lesquelles VKBack fournit ses prestations de services web :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Création de sites internet (vitrine, e-commerce, corporate)</li>
                  <li>Référencement SEO</li>
                  <li>Maintenance et support WordPress</li>
                  <li>Campagnes Google Ads & SEA</li>
                  <li>Hébergement web</li>
                  <li>Autres prestations connexes</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={200}>
              <section>
                <h2 className="text-3xl font-bold mb-4">2. Acceptation des CGV</h2>
                <p className="mb-4">
                  Toute commande de prestation implique l'acceptation sans réserve des présentes CGV qui prévalent sur tout autre document du client, et notamment sur ses propres conditions générales d'achat.
                </p>
                <p>
                  Le client reconnaît avoir pris connaissance de l'ensemble des présentes CGV et les accepter sans restriction ni réserve.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={300}>
              <section>
                <h2 className="text-3xl font-bold mb-4">3. Devis et Commande</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">3.1 Devis</h3>
                <p className="mb-4">
                  Tout devis établi par VKBack est valable pendant 30 jours à compter de sa date d'émission. Passé ce délai, VKBack se réserve le droit de modifier ses tarifs.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">3.2 Commande</h3>
                <p className="mb-4">
                  La commande devient ferme et définitive après :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Signature du devis par le client</li>
                  <li>Réception de l'acompte prévu</li>
                  <li>Fourniture de l'ensemble des éléments nécessaires (textes, images, accès)</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={400}>
              <section>
                <h2 className="text-3xl font-bold mb-4">4. Tarifs</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">4.1 Prix</h3>
                <p className="mb-4">
                  Les prix sont indiqués en euros hors taxes (HT). La TVA au taux en vigueur sera ajoutée le cas échéant.
                </p>
                <p className="mb-4">
                  Les tarifs indiqués sur le site <strong>vkback.fr</strong> sont donnés à titre indicatif et peuvent varier selon la complexité du projet.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">4.2 Révision des Prix</h3>
                <p>
                  VKBack se réserve le droit de modifier ses tarifs à tout moment. Les tarifs applicables sont ceux en vigueur au jour de la commande.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={500}>
              <section>
                <h2 className="text-3xl font-bold mb-4">5. Conditions de Paiement</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">5.1 Modalités de Paiement</h3>
                <p className="mb-4">
                  Sauf accord contraire, les paiements s'effectuent selon l'échéancier suivant :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Acompte de 40%</strong> à la commande</li>
                  <li><strong>40%</strong> à la validation du design/maquette</li>
                  <li><strong>20%</strong> à la livraison du site</li>
                </ul>
                <p className="mt-4">
                  Pour les projets supérieurs à 10 000€, un échéancier personnalisé peut être proposé.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">5.2 Moyens de Paiement</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Virement bancaire</li>
                  <li>Chèque</li>
                  <li>Carte bancaire (pour montants &lt; 3000€)</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">5.3 Retard de Paiement</h3>
                <p className="mb-4">
                  En cas de retard de paiement, VKBack se réserve le droit de :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Suspendre la prestation en cours jusqu'au règlement complet</li>
                  <li>Appliquer des pénalités de retard au taux de 3 fois le taux d'intérêt légal</li>
                  <li>Facturer une indemnité forfaitaire de 40€ pour frais de recouvrement</li>
                  <li>Désactiver le site hébergé en cas de non-paiement supérieur à 30 jours</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={600}>
              <section>
                <h2 className="text-3xl font-bold mb-4">6. Obligations du Client</h2>
                <p className="mb-4">
                  Le client s'engage à :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fournir tous les éléments nécessaires à la réalisation (textes, images, logos) dans les délais convenus</li>
                  <li>Vérifier et valider les étapes du projet (maquettes, contenus, fonctionnalités)</li>
                  <li>Respecter les délais de validation (5 jours ouvrés par défaut)</li>
                  <li>Informer VKBack de tout dysfonctionnement dans les 48h suivant la livraison</li>
                  <li>Ne pas divulguer les accès et identifiants fournis</li>
                  <li>S'assurer que les contenus fournis ne violent pas les droits de propriété intellectuelle de tiers</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={700}>
              <section>
                <h2 className="text-3xl font-bold mb-4">7. Obligations de VKBack</h2>
                <p className="mb-4">
                  VKBack s'engage à :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Réaliser les prestations conformément au devis validé</li>
                  <li>Respecter les délais annoncés (sous réserve de la fourniture des éléments par le client)</li>
                  <li>Former le client à l'utilisation du site (session de 1 à 2h selon formule)</li>
                  <li>Assurer le support technique pendant la période garantie</li>
                  <li>Respecter la confidentialité des informations du client</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={800}>
              <section>
                <h2 className="text-3xl font-bold mb-4">8. Délais de Réalisation</h2>
                <p className="mb-4">
                  Les délais indicatifs de réalisation sont les suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Site vitrine</strong> : 4 à 6 semaines</li>
                  <li><strong>Site e-commerce</strong> : 6 à 8 semaines</li>
                  <li><strong>Site corporate</strong> : 8 à 12 semaines</li>
                </ul>
                <p className="mt-4">
                  Ces délais sont donnés à titre indicatif et peuvent varier selon la complexité du projet et la réactivité du client. Le délai ne court qu'à partir de la réception de l'acompte et de l'ensemble des éléments nécessaires.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={900}>
              <section>
                <h2 className="text-3xl font-bold mb-4">9. Livraison et Recette</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">9.1 Livraison</h3>
                <p className="mb-4">
                  La livraison du site s'effectue par mise en ligne sur un serveur de production après validation finale du client.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">9.2 Période de Recette</h3>
                <p className="mb-4">
                  Le client dispose d'un délai de 7 jours ouvrés à compter de la livraison pour effectuer des tests et signaler d'éventuels dysfonctionnements. Passé ce délai sans retour, le site sera considéré comme conforme et définitivement accepté.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">9.3 Corrections</h3>
                <p>
                  Les corrections de bugs ou dysfonctionnements constatés pendant la période de recette sont prises en charge gratuitement. Les demandes de modifications ou ajouts de fonctionnalités feront l'objet d'un devis complémentaire.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={1000}>
              <section>
                <h2 className="text-3xl font-bold mb-4">10. Garanties</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">10.1 Garantie de Conformité</h3>
                <p className="mb-4">
                  VKBack garantit que le site livré est conforme aux spécifications du devis validé. Cette garantie est valable 30 jours après la livraison.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">10.2 Support Technique</h3>
                <p className="mb-4">
                  Une période de support technique gratuit est incluse selon la formule choisie :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Site vitrine essentiel : 1 mois</li>
                  <li>Site vitrine pro : 3 mois</li>
                  <li>Site e-commerce : 3 mois</li>
                  <li>Site corporate : 6 mois</li>
                </ul>
              </section>
            </FadeInSection>

            <FadeInSection delay={1100}>
              <section>
                <h2 className="text-3xl font-bold mb-4">11. Propriété Intellectuelle</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">11.1 Droits du Client</h3>
                <p className="mb-4">
                  À la fin du projet et après paiement intégral, le client devient propriétaire du design graphique et des développements spécifiques réalisés pour son site.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">11.2 Droits de VKBack</h3>
                <p className="mb-4">
                  VKBack conserve la propriété intellectuelle de sa méthodologie, de son code source générique et de ses outils de développement. VKBack se réserve le droit d'utiliser les réalisations comme références et de les présenter dans son portfolio.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">11.3 Éléments Tiers</h3>
                <p>
                  Les licences des thèmes WordPress, extensions et bibliothèques tierces restent soumises à leurs conditions d'utilisation respectives.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={1200}>
              <section>
                <h2 className="text-3xl font-bold mb-4">12. Résiliation et Annulation</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">12.1 Annulation par le Client</h3>
                <p className="mb-4">
                  En cas d'annulation par le client :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Avant le début des travaux : remboursement de l'acompte moins 20% de frais de dossier</li>
                  <li>Après le début des travaux : facturation du temps passé au prorata + 30% du solde restant</li>
                  <li>Après validation du design : aucun remboursement, paiement du solde dû</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">12.2 Résiliation par VKBack</h3>
                <p>
                  VKBack peut résilier le contrat en cas de non-paiement, de non-fourniture des éléments nécessaires pendant plus de 60 jours, ou de comportement abusif du client.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={1300}>
              <section>
                <h2 className="text-3xl font-bold mb-4">13. Responsabilité</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">13.1 Limitation de Responsabilité</h3>
                <p className="mb-4">
                  La responsabilité de VKBack est limitée au montant TTC du devis. VKBack ne peut être tenu responsable de :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pertes de données dues à une mauvaise manipulation du client</li>
                  <li>Piratage ou intrusion malveillante</li>
                  <li>Dysfonctionnements dus à des modifications non autorisées du site</li>
                  <li>Dommages indirects ou perte de chiffre d'affaires</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 mb-3">13.2 Force Majeure</h3>
                <p>
                  VKBack ne peut être tenu responsable en cas de force majeure (catastrophe naturelle, grève, défaillance des réseaux de télécommunication, etc.).
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={1400}>
              <section>
                <h2 className="text-3xl font-bold mb-4">14. Confidentialité</h2>
                <p className="mb-4">
                  VKBack s'engage à maintenir confidentielles toutes les informations communiquées par le client dans le cadre de la prestation. Cette obligation de confidentialité reste valable pendant et après l'exécution du contrat.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={1500}>
              <section>
                <h2 className="text-3xl font-bold mb-4">15. Droit Applicable et Litiges</h2>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3">15.1 Droit Applicable</h3>
                <p className="mb-4">
                  Les présentes CGV sont soumises au droit français.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">15.2 Règlement des Litiges</h3>
                <p className="mb-4">
                  En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, le litige sera porté devant les tribunaux compétents du ressort de Lyon.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-3">15.3 Médiation</h3>
                <p>
                  Conformément à la réglementation, le client peut recourir gratuitement à un médiateur de la consommation en cas de litige non résolu.
                </p>
              </section>
            </FadeInSection>

            <FadeInSection delay={1600}>
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

export default CGV;

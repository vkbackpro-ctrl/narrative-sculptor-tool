import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeInSection from "./FadeInSection";

const faqs = [
  {
    question: "Combien coûte la création d'un site web à Lyon ?",
    answer: "Les tarifs varient selon le type de projet : un site vitrine simple débute à partir de 990€, un site vitrine business autour de 2 490€, et une boutique e-commerce à partir de 3 990€. Chaque projet est unique, nous vous proposons un devis personnalisé gratuit sous 24h.",
  },
  {
    question: "Combien de temps faut-il pour créer un site internet ?",
    answer: "Le délai moyen est de 4 à 8 semaines selon la complexité du projet. Un site vitrine simple prend 3-4 semaines, tandis qu'une boutique e-commerce complète nécessite 6-8 semaines. Nous établissons un planning précis dès le début du projet.",
  },
  {
    question: "Pourquoi choisir WordPress pour mon site web ?",
    answer: "WordPress est le CMS le plus utilisé au monde (43% des sites web). Il offre une grande flexibilité, un coût maîtrisé, une excellente base pour le SEO, et vous permet d'être autonome dans la gestion de votre contenu après notre formation.",
  },
  {
    question: "Proposez-vous la maintenance après la création ?",
    answer: "Oui, nous proposons plusieurs formules de maintenance : Basic (59€/mois), Premium (99€/mois) et Business (149€/mois). Cela inclut les mises à jour, sauvegardes, sécurité, et support technique. La première année, 3 mois de maintenance sont offerts.",
  },
  {
    question: "Mon site sera-t-il visible sur Google ?",
    answer: "Tous nos sites sont optimisés SEO dès la création (structure, vitesse, balises). Pour un référencement optimal, nous proposons des prestations SEO complémentaires : audit, optimisation de contenu, netlinking, et suivi de positionnement.",
  },
  {
    question: "Puis-je modifier mon site moi-même après la création ?",
    answer: "Absolument ! Nous incluons systématiquement une formation de 2 à 4h pour vous rendre autonome. Vous apprendrez à modifier vos textes, ajouter des images, créer des articles de blog, et gérer vos produits (e-commerce).",
  },
  {
    question: "Travaillez-vous uniquement sur Lyon ?",
    answer: "Nous sommes basés à Lyon et intervenons principalement sur Lyon et sa région (Rhône-Alpes). Cependant, nous travaillons aussi en visioconférence pour des clients partout en France. L'essentiel de notre expertise en SEO local bénéficie particulièrement aux entreprises lyonnaises.",
  },
  {
    question: "Quelle est la différence entre un site vitrine et un site e-commerce ?",
    answer: "Un site vitrine présente votre entreprise, vos services/produits et permet aux visiteurs de vous contacter. Un site e-commerce permet en plus de vendre directement en ligne avec paiement sécurisé, gestion des stocks, et suivi des commandes.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-container">
      <FadeInSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur la création de sites web à Lyon
          </p>
        </div>
      </FadeInSection>

      <FadeInSection delay={200}>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-card hover:bg-muted/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-base">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </FadeInSection>

      <FadeInSection delay={400}>
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Vous avez d'autres questions ?
          </p>
          <a
            href="/contact/"
            className="text-primary font-medium hover:underline inline-flex items-center"
          >
            Contactez-nous →
          </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default FAQSection;

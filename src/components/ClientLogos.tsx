import FadeInSection from "./FadeInSection";
import clientLogos from "@/assets/client-logos.png";

const ClientLogos = () => {
  return (
    <section className="section-container bg-muted/30">
      <FadeInSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ils Nous Font Confiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des entreprises lyonnaises de tous secteurs nous confient leur présence web
          </p>
        </div>
      </FadeInSection>

      <FadeInSection delay={200}>
        <div className="max-w-5xl mx-auto">
          <img
            src={clientLogos}
            alt="Logos de nos clients : Zalot, Sinéville, La Maison des Sons, Matchers, Kwest, Selva, GRDF, Grand Gite Lyon, AirAgent, Atech, Marabooth, Kaïvara, Le Sandwich Jaune, Estelle Charlier, Université de Lille"
            className="w-full h-auto"
          />
        </div>
      </FadeInSection>

      <FadeInSection delay={400}>
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            + de 200 clients satisfaits - 14 ans d'expérience
          </p>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ClientLogos;

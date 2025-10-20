import FadeInSection from "./FadeInSection";

// Logos de clients (à remplacer par les vrais logos)
const clients = [
  { name: "Client 1", logo: "https://via.placeholder.com/150x80/003D7A/FFFFFF?text=Client+1" },
  { name: "Client 2", logo: "https://via.placeholder.com/150x80/003D7A/FFFFFF?text=Client+2" },
  { name: "Client 3", logo: "https://via.placeholder.com/150x80/003D7A/FFFFFF?text=Client+3" },
  { name: "Client 4", logo: "https://via.placeholder.com/150x80/003D7A/FFFFFF?text=Client+4" },
  { name: "Client 5", logo: "https://via.placeholder.com/150x80/003D7A/FFFFFF?text=Client+5" },
  { name: "Client 6", logo: "https://via.placeholder.com/150x80/003D7A/FFFFFF?text=Client+6" },
];

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection delay={400}>
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            + de 200 clients satisfaits depuis 2014
          </p>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ClientLogos;

import FadeInSection from "./FadeInSection";

// Logos de clients représentés par des initiales stylisées
const clients = [
  { name: "Restaurant Le Gourmet", initials: "RG" },
  { name: "Artisan Plomberie", initials: "AP" },
  { name: "Boutique Mode Lyon", initials: "BM" },
  { name: "Cabinet Avocat", initials: "CA" },
  { name: "Garage Auto Pro", initials: "GP" },
  { name: "Institut Beauté", initials: "IB" },
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
              className="flex items-center justify-center p-6 bg-background rounded-lg hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/50 group"
              title={client.name}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <span className="text-xl font-bold text-primary">{client.initials}</span>
                </div>
                <span className="text-xs text-muted-foreground text-center">{client.name}</span>
              </div>
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

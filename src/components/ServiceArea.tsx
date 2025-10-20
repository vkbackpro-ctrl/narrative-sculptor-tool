import { MapPin } from "lucide-react";

const arrondissements = [
  "Lyon 1er",
  "Lyon 2e",
  "Lyon 3e",
  "Lyon 4e",
  "Lyon 5e",
  "Lyon 6e",
  "Lyon 7e",
  "Lyon 8e",
  "Lyon 9e",
  "Villeurbanne",
  "Vénissieux",
  "Caluire-et-Cuire",
];

const ServiceArea = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Nous Intervenons dans Tout Lyon et sa Région
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Agence locale, nous nous déplaçons chez vous ou organisons une visio
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Map placeholder */}
        <div className="relative aspect-square bg-muted rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-24 h-24 mx-auto mb-4 text-primary" />
            <p className="text-xl font-bold">Lyon et Rhône-Alpes</p>
            <p className="text-muted-foreground">Zone d'intervention</p>
          </div>
        </div>

        {/* Cities list */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Nos Zones d'Intervention</h3>
          <div className="grid grid-cols-2 gap-4">
            {arrondissements.map((city) => (
              <div key={city} className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{city}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-muted/50 rounded-xl">
            <h4 className="font-bold mb-4">Modes d'intervention :</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">Rendez-vous chez vous (Lyon et agglomération)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">Visioconférence pour plus de flexibilité</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">Support téléphonique et email</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;

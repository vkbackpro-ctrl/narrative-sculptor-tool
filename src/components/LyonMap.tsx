import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import FadeInSection from "./FadeInSection";
import lyonPlaceBellecour from "@/assets/lyon-place-bellecour.jpg";

const LyonMap = () => {
  return (
    <section className="section-container">
      <FadeInSection>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Lyon & Métropole
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair mb-4">
            Une Agence Web Locale à Votre Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Basés au cœur de Lyon, nous intervenons dans toute la métropole pour créer votre site internet
          </p>
        </div>
      </FadeInSection>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Carte visuelle */}
        <FadeInSection delay={200}>
          <Card className="overflow-hidden border-2 h-full">
            <div className="relative h-full min-h-[400px]">
              <img
                src={lyonPlaceBellecour}
                alt="Place Bellecour Lyon - Zone d'intervention VKBack pour création de sites internet"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="mb-3">
                  <MapPin className="w-3 h-3 mr-1" />
                  Toute la métropole de Lyon
                </Badge>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Intervention dans tous les arrondissements
                </h3>
                <p className="text-white/80 text-sm">
                  Lyon 1er au 9e, Villeurbanne, Caluire, Écully, Tassin, Oullins et plus...
                </p>
              </div>
            </div>
          </Card>
        </FadeInSection>

        {/* Informations de contact */}
        <FadeInSection delay={300}>
          <div className="space-y-4">
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Adresse</h4>
                  <p className="text-sm text-muted-foreground">
                    69002 Lyon, France
                    <br />
                    Métro Bellecour
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Téléphone</h4>
                  <a
                    href="tel:+33478888888"
                    className="text-sm text-primary hover:underline"
                  >
                    +33 (0)4 78 88 88 88
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:contact@vkback.com"
                    className="text-sm text-primary hover:underline"
                  >
                    contact@vkback.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Horaires</h4>
                  <p className="text-sm text-muted-foreground">
                    Lundi - Vendredi : 9h - 18h
                    <br />
                    Rendez-vous sur RDV uniquement
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default LyonMap;

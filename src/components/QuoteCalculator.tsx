import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calculator, ArrowRight, Check } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

const QuoteCalculator = () => {
  const [siteType, setSiteType] = useState("vitrine");
  const [features, setFeatures] = useState<string[]>([]);

  const siteTypes = [
    { value: "vitrine", label: "Site Vitrine", price: 4000 },
    { value: "ecommerce", label: "Site E-commerce", price: 7000 },
    { value: "corporate", label: "Site Corporate", price: 6000 },
    { value: "onepage", label: "Site One Page", price: 3000 },
  ];

  const additionalFeatures = [
    { id: "blog", label: "Blog intégré", price: 500 },
    { id: "multilingue", label: "Version multilingue", price: 1500 },
    { id: "booking", label: "Système de réservation", price: 2000 },
    { id: "custom-forms", label: "Formulaires avancés", price: 800 },
    { id: "seo-premium", label: "SEO Premium", price: 1200 },
    { id: "chat", label: "Chatbot IA", price: 1500 },
  ];

  const toggleFeature = (featureId: string) => {
    setFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const calculateTotal = () => {
    const basePrice = siteTypes.find((type) => type.value === siteType)?.price || 0;
    const featuresPrice = features.reduce((sum, featureId) => {
      const feature = additionalFeatures.find((f) => f.id === featureId);
      return sum + (feature?.price || 0);
    }, 0);
    return basePrice + featuresPrice;
  };

  return (
    <Card className="overflow-hidden border-2 border-primary/20">
      <CardHeader className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <Badge variant="secondary">Estimateur en ligne</Badge>
        </div>
        <CardTitle className="text-2xl font-playfair">
          Calculez Votre Devis en 2 Minutes
        </CardTitle>
        <CardDescription>
          Obtenez une estimation instantanée et personnalisée pour votre projet web
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        {/* Type de site */}
        <div>
          <Label className="text-base font-semibold mb-3 block">
            Quel type de site souhaitez-vous ?
          </Label>
          <RadioGroup value={siteType} onValueChange={setSiteType} className="space-y-3">
            {siteTypes.map((type) => (
              <div
                key={type.value}
                className="flex items-center space-x-3 p-4 rounded-lg border-2 hover:border-primary/50 transition-all cursor-pointer"
              >
                <RadioGroupItem value={type.value} id={type.value} />
                <Label
                  htmlFor={type.value}
                  className="flex-1 cursor-pointer font-medium"
                >
                  {type.label}
                </Label>
                <Badge variant="outline">{type.price.toLocaleString('fr-FR')} €</Badge>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Fonctionnalités additionnelles */}
        <div>
          <Label className="text-base font-semibold mb-3 block">
            Fonctionnalités additionnelles (optionnel)
          </Label>
          <div className="space-y-3">
            {additionalFeatures.map((feature) => (
              <div
                key={feature.id}
                className="flex items-center space-x-3 p-4 rounded-lg border hover:border-primary/50 transition-all"
              >
                <Checkbox
                  id={feature.id}
                  checked={features.includes(feature.id)}
                  onCheckedChange={() => toggleFeature(feature.id)}
                />
                <Label
                  htmlFor={feature.id}
                  className="flex-1 cursor-pointer font-medium"
                >
                  {feature.label}
                </Label>
                <Badge variant="outline">+{feature.price.toLocaleString('fr-FR')} €</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Total estimé */}
        <div className="pt-6 border-t">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Estimation totale</p>
                <p className="text-4xl font-bold text-primary font-playfair">
                  {calculateTotal().toLocaleString('fr-FR')} €
                </p>
              </div>
              <Check className="w-12 h-12 text-primary/30" />
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Prix indicatif hors TVA. Devis personnalisé gratuit sous 24h.
            </p>
            <Button size="lg" className="w-full btn-cta group">
              Obtenir Mon Devis Détaillé
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteCalculator;

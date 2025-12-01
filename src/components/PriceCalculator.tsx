import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Calculator, Check, ArrowRight, Sparkles, TrendingDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CalculatorService {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  isRecurring?: boolean;
  recurringPeriod?: string;
  description: string;
  popular?: boolean;
}

const availableServices: CalculatorService[] = [
  // Création Sites
  { id: "site-vitrine-essentiel", name: "Site Vitrine Essentiel", category: "Création", basePrice: 2500, description: "5 pages responsive" },
  { id: "site-vitrine-pro", name: "Site Vitrine Pro", category: "Création", basePrice: 4000, description: "10 pages sur-mesure", popular: true },
  { id: "site-corporate", name: "Site Corporate", category: "Création", basePrice: 8000, description: "Site institutionnel B2B" },
  { id: "site-ecommerce-starter", name: "E-commerce Starter", category: "E-commerce", basePrice: 5000, description: "Boutique 50 produits" },
  { id: "site-ecommerce-business", name: "E-commerce Business", category: "E-commerce", basePrice: 8000, description: "Boutique complète", popular: true },
  { id: "refonte-site", name: "Refonte de Site", category: "Création", basePrice: 3000, description: "Modernisation existant" },
  
  // SEO
  { id: "audit-seo", name: "Audit SEO Complet", category: "SEO", basePrice: 800, description: "Analyse technique complète" },
  { id: "seo-mensuel", name: "SEO Mensuel", category: "SEO", basePrice: 700, isRecurring: true, recurringPeriod: "mois", description: "Référencement continu", popular: true },
  { id: "seo-local", name: "SEO Local Lyon", category: "SEO", basePrice: 500, isRecurring: true, recurringPeriod: "mois", description: "Visibilité locale" },
  
  // Maintenance
  { id: "maintenance-essentielle", name: "Maintenance Essentielle", category: "Maintenance", basePrice: 79, isRecurring: true, recurringPeriod: "mois", description: "Mises à jour & backup", popular: true },
  { id: "maintenance-pro", name: "Maintenance Pro", category: "Maintenance", basePrice: 149, isRecurring: true, recurringPeriod: "mois", description: "Maintenance complète" },
  { id: "infogerance", name: "Infogérance Complète", category: "Maintenance", basePrice: 299, isRecurring: true, recurringPeriod: "mois", description: "Gestion déléguée totale" },
  
  // Google Ads
  { id: "google-ads", name: "Gestion Google Ads", category: "Publicité", basePrice: 490, isRecurring: true, recurringPeriod: "mois", description: "Campagnes optimisées", popular: true },
  { id: "google-shopping", name: "Google Shopping", category: "Publicité", basePrice: 590, isRecurring: true, recurringPeriod: "mois", description: "Campagnes e-commerce" },
  
  // Hébergement
  { id: "hebergement-starter", name: "Hébergement Starter", category: "Hébergement", basePrice: 15, isRecurring: true, recurringPeriod: "mois", description: "10 Go SSD" },
  { id: "hebergement-business", name: "Hébergement Business", category: "Hébergement", basePrice: 35, isRecurring: true, recurringPeriod: "mois", description: "50 Go SSD", popular: true },
  { id: "hebergement-ecommerce", name: "Hébergement E-commerce", category: "Hébergement", basePrice: 75, isRecurring: true, recurringPeriod: "mois", description: "100 Go SSD" },
];

const categories = Array.from(new Set(availableServices.map(s => s.category)));

const PriceCalculator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const filteredServices = selectedCategory === "all" 
    ? availableServices 
    : availableServices.filter(s => s.category === selectedCategory);

  const { oneTimeTotal, recurringTotal, hasRecurring, selectedCount, estimatedDiscount } = useMemo(() => {
    const selected = availableServices.filter(s => selectedServices.includes(s.id));
    
    const oneTime = selected
      .filter(s => !s.isRecurring)
      .reduce((sum, s) => sum + s.basePrice, 0);
    
    const recurring = selected
      .filter(s => s.isRecurring)
      .reduce((sum, s) => sum + s.basePrice, 0);
    
    // Calcul de la remise estimée basée sur le nombre de services
    let discount = 0;
    if (selected.length >= 5) {
      discount = (oneTime + recurring * 12) * 0.20; // 20% pour 5+ services
    } else if (selected.length >= 3) {
      discount = (oneTime + recurring * 12) * 0.15; // 15% pour 3-4 services
    } else if (selected.length >= 2) {
      discount = (oneTime + recurring * 12) * 0.10; // 10% pour 2 services
    }
    
    return {
      oneTimeTotal: oneTime,
      recurringTotal: recurring,
      hasRecurring: recurring > 0,
      selectedCount: selected.length,
      estimatedDiscount: discount
    };
  }, [selectedServices]);

  const firstYearTotal = oneTimeTotal + (recurringTotal * 12) - estimatedDiscount;

  return (
    <div className="grid lg:grid-cols-[1fr,400px] gap-8">
      {/* Selection des services */}
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Calculateur de Prix</h3>
              <p className="text-sm text-muted-foreground">Sélectionnez les services dont vous avez besoin</p>
            </div>
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Toutes catégories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes catégories</SelectItem>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {filteredServices.map(service => {
            const isSelected = selectedServices.includes(service.id);
            
            return (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  isSelected ? 'border-primary border-2 bg-primary/5' : 'border-2'
                }`}
                onClick={() => toggleService(service.id)}
              >
                <CardHeader className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 flex-1">
                      <Checkbox 
                        checked={isSelected}
                        onCheckedChange={() => toggleService(service.id)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <Label 
                        htmlFor={service.id} 
                        className="font-semibold cursor-pointer leading-tight"
                      >
                        {service.name}
                      </Label>
                    </div>
                    {service.popular && (
                      <Badge variant="secondary" className="text-xs">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Populaire
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-xs">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {service.basePrice.toLocaleString('fr-FR')}€
                    </span>
                    {service.isRecurring && (
                      <span className="text-sm text-muted-foreground">/{service.recurringPeriod}</span>
                    )}
                  </div>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {service.category}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Résumé et Total */}
      <div className="lg:sticky lg:top-24 h-fit">
        <Card className="border-2 shadow-xl">
          <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardTitle>Votre Devis Personnalisé</CardTitle>
            <CardDescription>
              {selectedCount === 0 
                ? "Sélectionnez des services pour voir le prix" 
                : `${selectedCount} service${selectedCount > 1 ? 's' : ''} sélectionné${selectedCount > 1 ? 's' : ''}`
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            {selectedCount === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Calculator className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm">Sélectionnez des services pour calculer votre devis</p>
              </div>
            ) : (
              <>
                {/* Services sélectionnés */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Services sélectionnés
                  </h4>
                  {availableServices
                    .filter(s => selectedServices.includes(s.id))
                    .map(service => (
                      <div key={service.id} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span>{service.name}</span>
                        </div>
                        <span className="font-semibold">
                          {service.basePrice.toLocaleString('fr-FR')}€
                          {service.isRecurring && <span className="text-xs text-muted-foreground">/mois</span>}
                        </span>
                      </div>
                    ))
                  }
                </div>

                <Separator />

                {/* Calcul des totaux */}
                <div className="space-y-3">
                  {oneTimeTotal > 0 && (
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Coût initial</span>
                      <span className="font-semibold">{oneTimeTotal.toLocaleString('fr-FR')}€</span>
                    </div>
                  )}
                  
                  {hasRecurring && (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Mensuel</span>
                        <span className="font-semibold">{recurringTotal.toLocaleString('fr-FR')}€/mois</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Sur 12 mois</span>
                        <span className="font-medium">{(recurringTotal * 12).toLocaleString('fr-FR')}€</span>
                      </div>
                    </>
                  )}

                  {estimatedDiscount > 0 && (
                    <div className="flex items-center justify-between text-green-600">
                      <div className="flex items-center gap-2">
                        <TrendingDown className="w-4 h-4" />
                        <span className="font-medium">Remise estimée ({selectedCount >= 5 ? '20%' : selectedCount >= 3 ? '15%' : '10%'})</span>
                      </div>
                      <span className="font-semibold">-{estimatedDiscount.toLocaleString('fr-FR')}€</span>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Total première année */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Total 1ère année</span>
                    <div className="text-right">
                      {estimatedDiscount > 0 && (
                        <div className="text-sm text-muted-foreground line-through">
                          {(oneTimeTotal + recurringTotal * 12).toLocaleString('fr-FR')}€
                        </div>
                      )}
                      <div className="text-3xl font-bold text-primary">
                        {Math.round(firstYearTotal).toLocaleString('fr-FR')}€
                      </div>
                    </div>
                  </div>
                  {hasRecurring && (
                    <p className="text-xs text-muted-foreground text-center">
                      Puis {recurringTotal.toLocaleString('fr-FR')}€/mois les années suivantes
                    </p>
                  )}
                </div>

                {/* Avantages */}
                {selectedCount >= 2 && (
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-green-900 dark:text-green-100">
                          Package avantageux !
                        </p>
                        <p className="text-xs text-green-700 dark:text-green-300">
                          {selectedCount >= 5 
                            ? "Bénéficiez de 20% de remise sur ce package complet" 
                            : selectedCount >= 3
                            ? "Économisez 15% en combinant ces services"
                            : "Économisez 10% en combinant 2 services"
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="space-y-3 pt-2">
                  <Button asChild className="w-full btn-cta" size="lg">
                    <Link to="/contact">
                      <span className="hidden sm:inline">Demander ce devis personnalisé</span>
                      <span className="sm:hidden">Demander ce devis</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Réponse sous 24h • Devis détaillé gratuit • Sans engagement
                  </p>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Info complémentaire */}
        {selectedCount > 0 && (
          <Card className="mt-4 border-2">
            <CardContent className="pt-6">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Paiement en 3 fois sans frais disponible</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Garantie satisfait ou remboursé</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Formation et support inclus</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PriceCalculator;

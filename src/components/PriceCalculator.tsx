import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Calculator, Check, ArrowRight, Sparkles, Download, Share2, Phone, Info } from "lucide-react";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import jsPDF from "jspdf";
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
  // Création Sites WordPress (8 services)
  { id: "site-vitrine-essentiel", name: "Site Vitrine Essentiel", category: "Création", basePrice: 2500, description: "5 pages responsive" },
  { id: "site-vitrine-pro", name: "Site Vitrine Pro", category: "Création", basePrice: 4000, description: "10 pages sur-mesure", popular: true },
  { id: "site-corporate", name: "Site Corporate", category: "Création", basePrice: 8000, description: "Site institutionnel B2B" },
  { id: "site-one-page", name: "Site One Page", category: "Création", basePrice: 1800, description: "Site moderne une page" },
  { id: "site-catalogue", name: "Site Catalogue", category: "Création", basePrice: 3500, description: "Produits sans vente" },
  { id: "site-multilingue", name: "Site Multilingue", category: "Création", basePrice: 5500, description: "2 langues minimum" },
  { id: "refonte-site", name: "Refonte de Site", category: "Création", basePrice: 3000, description: "Modernisation existant" },
  { id: "migration-wordpress", name: "Migration WordPress", category: "Création", basePrice: 2000, description: "Migration complète" },
  
  // E-commerce WooCommerce (8 services)
  { id: "ecommerce-starter", name: "E-commerce Starter", category: "E-commerce", basePrice: 5000, description: "Boutique 50 produits" },
  { id: "ecommerce-business", name: "E-commerce Business", category: "E-commerce", basePrice: 8000, description: "Boutique complète", popular: true },
  { id: "ecommerce-premium", name: "E-commerce Premium", category: "E-commerce", basePrice: 15000, description: "Marketplace avancée" },
  { id: "migration-woocommerce", name: "Migration WooCommerce", category: "E-commerce", basePrice: 2500, description: "Migration plateforme" },
  { id: "refonte-ecommerce", name: "Refonte E-commerce", category: "E-commerce", basePrice: 4500, description: "Modernisation boutique" },
  { id: "optimisation-conversion", name: "Optimisation Conversion", category: "E-commerce", basePrice: 1500, description: "Augmentation ventes" },
  { id: "seo-ecommerce", name: "SEO E-commerce", category: "E-commerce", basePrice: 1200, description: "Référencement produits" },
  { id: "dropshipping", name: "Dropshipping WooCommerce", category: "E-commerce", basePrice: 3500, description: "Solution sans stock" },
  
  // Référencement SEO Google (8 services)
  { id: "audit-seo", name: "Audit SEO Complet", category: "SEO", basePrice: 800, description: "Analyse complète site" },
  { id: "seo-mensuel", name: "SEO Mensuel", category: "SEO", basePrice: 700, isRecurring: true, recurringPeriod: "mois", description: "Référencement continu", popular: true },
  { id: "seo-local", name: "SEO Local Lyon", category: "SEO", basePrice: 500, isRecurring: true, recurringPeriod: "mois", description: "Visibilité locale" },
  { id: "consultant-seo", name: "Consultant SEO", category: "SEO", basePrice: 150, description: "150€/heure conseil" },
  { id: "formation-seo", name: "Formation SEO", category: "SEO", basePrice: 1200, description: "2 jours formation" },
  { id: "redaction-web-seo", name: "Rédaction Web SEO", category: "SEO", basePrice: 80, description: "Par article 800+ mots" },
  { id: "netlinking", name: "Netlinking", category: "SEO", basePrice: 600, isRecurring: true, recurringPeriod: "mois", description: "Stratégie backlinks" },
  { id: "analyse-concurrence", name: "Analyse Concurrentielle", category: "SEO", basePrice: 600, description: "Étude marché SEO" },
  
  // Maintenance & Support WordPress (8 services)
  { id: "maintenance-essentielle", name: "Maintenance Essentielle", category: "Maintenance", basePrice: 79, isRecurring: true, recurringPeriod: "mois", description: "Mises à jour & backup", popular: true },
  { id: "maintenance-pro", name: "Maintenance Pro", category: "Maintenance", basePrice: 149, isRecurring: true, recurringPeriod: "mois", description: "Maintenance complète" },
  { id: "infogerance", name: "Infogérance Complète", category: "Maintenance", basePrice: 299, isRecurring: true, recurringPeriod: "mois", description: "Gestion déléguée totale" },
  { id: "optimisation-performance", name: "Optimisation Performance", category: "Maintenance", basePrice: 800, description: "Boost vitesse site" },
  { id: "securite-wordpress", name: "Sécurité WordPress", category: "Maintenance", basePrice: 500, description: "Sécurisation complète" },
  { id: "support-technique", name: "Support Technique", category: "Maintenance", basePrice: 100, description: "100€/heure assistance" },
  { id: "certificat-ssl", name: "Certificat SSL", category: "Maintenance", basePrice: 150, isRecurring: true, recurringPeriod: "an", description: "HTTPS sécurisé" },
  { id: "sauvegardes-pro", name: "Sauvegardes Pro", category: "Maintenance", basePrice: 49, isRecurring: true, recurringPeriod: "mois", description: "Backup automatique" },
  
  // Google Ads & SEA (4 services)
  { id: "google-ads", name: "Gestion Google Ads", category: "Publicité", basePrice: 490, isRecurring: true, recurringPeriod: "mois", description: "Campagnes optimisées", popular: true },
  { id: "google-shopping", name: "Google Shopping", category: "Publicité", basePrice: 590, isRecurring: true, recurringPeriod: "mois", description: "Campagnes e-commerce" },
  { id: "audit-google-ads", name: "Audit Google Ads", category: "Publicité", basePrice: 400, description: "Analyse compte existant" },
  { id: "formation-google-ads", name: "Formation Google Ads", category: "Publicité", basePrice: 1000, description: "2 jours formation" },
  
  // Hébergement Web (3 services)
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

  const { oneTimeTotal, recurringTotal, hasRecurring, selectedCount } = useMemo(() => {
    const selected = availableServices.filter(s => selectedServices.includes(s.id));
    
    const oneTime = selected
      .filter(s => !s.isRecurring)
      .reduce((sum, s) => sum + s.basePrice, 0);
    
    const recurring = selected
      .filter(s => s.isRecurring)
      .reduce((sum, s) => sum + s.basePrice, 0);
    
    return {
      oneTimeTotal: oneTime,
      recurringTotal: recurring,
      hasRecurring: recurring > 0,
      selectedCount: selected.length
    };
  }, [selectedServices]);

  const firstYearTotal = oneTimeTotal + (recurringTotal * 12);

  const handleExportPDF = () => {
    if (selectedCount === 0) {
      toast.error("Veuillez sélectionner au moins un service");
      return;
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Header
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("VKBack - Estimation de Devis", pageWidth / 2, 20, { align: "center" });
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Cette estimation est indicative et nécessite confirmation par téléphone", pageWidth / 2, 28, { align: "center" });
    
    // Date
    const today = new Date().toLocaleDateString("fr-FR");
    doc.setFontSize(10);
    doc.text(`Date: ${today}`, 20, 40);
    
    // Services sélectionnés
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Services sélectionnés:", 20, 55);
    
    let yPos = 65;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    
    availableServices
      .filter(s => selectedServices.includes(s.id))
      .forEach((service, index) => {
        const priceText = service.isRecurring 
          ? `${service.basePrice.toLocaleString("fr-FR")}€/${service.recurringPeriod}`
          : `${service.basePrice.toLocaleString("fr-FR")}€`;
        
        doc.text(`${index + 1}. ${service.name}`, 20, yPos);
        doc.text(priceText, pageWidth - 60, yPos);
        doc.setFontSize(9);
        doc.setTextColor(100);
        doc.text(service.description, 25, yPos + 5);
        doc.setTextColor(0);
        doc.setFontSize(10);
        yPos += 15;
        
        if (yPos > 250) {
          doc.addPage();
          yPos = 20;
        }
      });
    
    // Totaux
    yPos += 10;
    doc.setDrawColor(200);
    doc.line(20, yPos, pageWidth - 20, yPos);
    yPos += 10;
    
    if (oneTimeTotal > 0) {
      doc.text("Coût initial:", 20, yPos);
      doc.text(`${oneTimeTotal.toLocaleString("fr-FR")}€`, pageWidth - 60, yPos);
      yPos += 8;
    }
    
    if (hasRecurring) {
      doc.text("Coût mensuel:", 20, yPos);
      doc.text(`${recurringTotal.toLocaleString("fr-FR")}€/mois`, pageWidth - 60, yPos);
      yPos += 8;
      doc.text("Sur 12 mois:", 20, yPos);
      doc.text(`${(recurringTotal * 12).toLocaleString("fr-FR")}€`, pageWidth - 60, yPos);
      yPos += 8;
    }
    
    yPos += 5;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Total première année:", 20, yPos);
    doc.text(`${Math.round(firstYearTotal).toLocaleString("fr-FR")}€`, pageWidth - 60, yPos);
    
    // Footer
    yPos += 20;
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(100);
    doc.text("Cette estimation est indicative. Un entretien téléphonique est nécessaire pour confirmer", pageWidth / 2, yPos, { align: "center" });
    doc.text("le périmètre exact du projet et établir un devis définitif.", pageWidth / 2, yPos + 5, { align: "center" });
    
    yPos += 15;
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0);
    doc.text("Contact: 04 11 78 91 13 - vkbackpro@gmail.com", pageWidth / 2, yPos, { align: "center" });
    
    // Save
    doc.save(`VKBack-Estimation-${today.replace(/\//g, "-")}.pdf`);
    toast.success("PDF téléchargé avec succès");
  };

  const handleShare = async () => {
    if (selectedCount === 0) {
      toast.error("Veuillez sélectionner au moins un service");
      return;
    }

    const selectedServicesList = availableServices
      .filter(s => selectedServices.includes(s.id))
      .map(s => s.name)
      .join(", ");

    const shareText = `Estimation VKBack: ${selectedCount} service(s) sélectionné(s) - Total 1ère année: ${Math.round(firstYearTotal).toLocaleString("fr-FR")}€\nServices: ${selectedServicesList}\n\nDemandez votre devis: https://vkback.fr/contact`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Mon estimation VKBack",
          text: shareText,
        });
        toast.success("Partagé avec succès");
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          copyToClipboard(shareText);
        }
      }
    } else {
      copyToClipboard(shareText);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Estimation copiée dans le presse-papier");
  };

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
            <SelectContent className="max-h-[300px]">
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
                </div>

                <Separator />

                {/* Total première année */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Total estimé 1ère année</span>
                    <div className="text-right">
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

                {/* Avertissement estimation */}
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                        Estimation indicative
                      </p>
                      <p className="text-xs text-blue-700 dark:text-blue-300">
                        Cette estimation nécessite un entretien téléphonique pour confirmer le périmètre exact de votre projet et établir un devis définitif personnalisé.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions d'export et partage */}
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleExportPDF}
                    className="w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Export PDF</span>
                    <span className="sm:hidden">PDF</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleShare}
                    className="w-full"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Partager</span>
                    <span className="sm:hidden">Partager</span>
                  </Button>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Button asChild className="w-full btn-cta" size="lg">
                    <Link to="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">Prendre RDV téléphonique</span>
                      <span className="sm:hidden">Prendre RDV</span>
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

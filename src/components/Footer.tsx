import { MapPin, Phone, Mail, Clock, Award, Shield, Star, TrendingUp, Target, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const arrondissements = [
  { name: "Lyon 1er", detail: "Presqu'île" },
  { name: "Lyon 2e", detail: "Confluence, Bellecour" },
  { name: "Lyon 3e", detail: "Part-Dieu, Montchat" },
  { name: "Lyon 4e", detail: "Croix-Rousse" },
  { name: "Lyon 5e", detail: "Vieux Lyon, Fourvière" },
  { name: "Lyon 6e", detail: "Brotteaux, Tête d'Or" },
  { name: "Lyon 7e", detail: "Gerland, Guillotière" },
  { name: "Lyon 8e", detail: "Monplaisir, États-Unis" },
  { name: "Lyon 9e", detail: "Vaise, Gorge de Loup" },
  { name: "Villeurbanne", detail: "" },
  { name: "Caluire-et-Cuire", detail: "" },
  { name: "Bron", detail: "" },
  { name: "Vénissieux", detail: "" },
];

const LazyGoogleMap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mapRef} className="mt-4">
      {isVisible ? (
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89076.99376181398!2d4.752724385706214!3d45.7580408541739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d15d22f665fd7f%3A0xd1f3a085a22ddef9!2sVK%20Back%20-%20Agence%20WordPress%20Lyon%20%7C%20Cr%C3%A9ation%20Sites%20Internet%20%26%20SEO!5e0!3m2!1sfr!2sfr!4v1762951865445!5m2!1sfr!2sfr" 
          width="100%" 
          height="250" 
          className="border-0 rounded-lg"
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="VK Back - Agence WordPress Lyon | Création Sites Internet & SEO"
        />
      ) : (
        <div className="w-full h-[250px] bg-background/10 rounded-lg flex items-center justify-center">
          <span className="text-sm opacity-60">Chargement de la carte...</span>
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <footer className="bg-foreground text-background">
      {/* Certifications & Garanties - Section haute */}
      <div className="border-b border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 className="font-bold text-xl text-center mb-6 font-playfair">
            Certifications & Garanties
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              {
                icon: Award,
                title: "WordPress Certified",
                description: "Expert certifié WordPress"
              },
              {
                icon: Shield,
                title: "RGPD Compliant",
                description: "Respect des normes RGPD"
              },
              {
                icon: Star,
                title: "4.9/5 sur Google",
                description: "Note moyenne clients"
              },
              {
                icon: TrendingUp,
                title: "SEO Certifié",
                description: "Expert référencement"
              },
              {
                icon: Target,
                title: "Google Ads Partner",
                description: "Partenaire certifié Google"
              }
            ].map((cert) => (
              <div key={cert.title} className="text-center group">
                <div className="inline-flex p-3 bg-background/10 rounded-xl mb-2 group-hover:scale-110 transition-transform">
                  <cert.icon className="w-6 h-6" />
                </div>
                <div className="border border-background/20 rounded-lg px-2 py-1 mb-1.5 text-xs font-medium whitespace-normal break-words">
                  {cert.title}
                </div>
                <p className="text-xs opacity-70 whitespace-normal">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Column 1: Logo + Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold">VKBack</div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Agence web à Lyon avec 14 ans d'expérience. Nous créons des{" "}
              <Link to="/creation-site-internet-lyon" className="text-secondary hover:text-secondary/80 underline transition-colors">
                sites internet WordPress
              </Link>{" "}
              professionnels, des{" "}
              <Link to="/creation-site-ecommerce-lyon" className="text-secondary hover:text-secondary/80 underline transition-colors">
                sites e-commerce WooCommerce
              </Link>
              , et des{" "}
              <Link to="/creation-site-vitrine-lyon" className="text-secondary hover:text-secondary/80 underline transition-colors">
                sites vitrine
              </Link>{" "}
              performants. Expertise en{" "}
              <Link to="/referencement-seo-lyon" className="text-secondary hover:text-secondary/80 underline transition-colors">
                référencement SEO naturel
              </Link>
              ,{" "}
              <Link to="/google-ads-sea-lyon" className="text-secondary hover:text-secondary/80 underline transition-colors">
                publicité Google Ads
              </Link>
              ,{" "}
              <Link to="/maintenance-support-wordpress-lyon" className="text-secondary hover:text-secondary/80 underline transition-colors">
                maintenance WordPress
              </Link>{" "}
              et{" "}
              <Link to="/hebergement-web-lyon" className="text-secondary hover:text-secondary/80 underline transition-colors">
                hébergement web sécurisé
              </Link>
              . Solutions sur-mesure pour TPE et PME lyonnaises.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="opacity-80">Lyon et Rhône-Alpes</span>
            </div>

            {/* Google My Business Map - Lazy loaded */}
            <LazyGoogleMap />
          </div>

          {/* Column 2: Services + Sub-services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/creation-site-internet-lyon" className="hover:opacity-100 font-medium">
                  Création WordPress
                </Link>
                <ul className="ml-3 mt-1 space-y-1 text-xs opacity-70">
                  <li><Link to="/creation-site-vitrine-lyon" className="hover:opacity-100">Site Vitrine</Link></li>
                  <li><Link to="/refonte-site-internet-lyon" className="hover:opacity-100">Refonte de Site</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/referencement-seo-lyon" className="hover:opacity-100 font-medium">
                  Référencement SEO
                </Link>
                <ul className="ml-3 mt-1 space-y-1 text-xs opacity-70">
                  <li><Link to="/services/audit-seo-lyon" className="hover:opacity-100">Audit SEO</Link></li>
                  <li><Link to="/services/seo-local-lyon" className="hover:opacity-100">SEO Local</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/creation-site-ecommerce-lyon" className="hover:opacity-100 font-medium">
                  Site E-commerce
                </Link>
                <ul className="ml-3 mt-1 space-y-1 text-xs opacity-70">
                  <li><Link to="/services/boutique-woocommerce-lyon" className="hover:opacity-100">Boutique WooCommerce</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/google-ads-sea-lyon" className="hover:opacity-100 font-medium">
                  Google Ads & SEA
                </Link>
              </li>
              <li>
                <Link to="/maintenance-support-wordpress-lyon" className="hover:opacity-100 font-medium">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link to="/hebergement-web-lyon" className="hover:opacity-100 font-medium">
                  Hébergement Web
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/realisations" className="hover:opacity-100">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:opacity-100">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="hover:opacity-100">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:opacity-100">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:opacity-100">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:opacity-100">
                  Demander un devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact + Zone */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm opacity-80 mb-6">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a 
                  href="tel:0411789113"
                  className="hover:opacity-100 transition-opacity"
                  onClick={() => {
                    if ((window as any).gtag) {
                      (window as any).gtag('event', 'click_to_call', {
                        event_category: 'engagement',
                        event_label: 'Footer'
                      });
                    }
                  }}
                >
                  04 11 78 91 13
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contact@vkback.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Lun-Ven : 9h-18h</span>
              </li>
            </ul>

            <div>
              <h3 className="font-semibold text-sm mb-3 text-background">Zone d'intervention</h3>
              <div className="space-y-1 text-xs text-background/70">
                {arrondissements.map((zone) => (
                  <div key={zone.name} className="flex items-start gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-background mt-1.5 flex-shrink-0" />
                    <span>
                      <h4 className="font-medium inline text-xs text-background">{zone.name}</h4>
                      {zone.detail && <span className="opacity-60"> - {zone.detail}</span>}
                    </span>
                  </div>
                ))}
                <div className="flex items-start gap-1.5 pt-1">
                  <span className="w-1 h-1 rounded-full bg-background mt-1.5 flex-shrink-0" />
                  <span className="font-medium opacity-80">... et toute la région Rhône-Alpes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Accordions */}
        <div className="md:hidden space-y-4 mb-8">
          {/* Logo + Description - Always visible on mobile */}
          <div className="space-y-4 pb-4 border-b border-background/20">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">VKBack</div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Agence web à Lyon avec 14 ans d'expérience. Solutions sur-mesure pour TPE et PME lyonnaises.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="opacity-80">Lyon et Rhône-Alpes</span>
            </div>
          </div>

          {/* Services Accordion */}
          <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 border-b border-background/20">
              <h3 className="font-bold text-lg">Services</h3>
              <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="space-y-2 text-sm opacity-80 py-3">
                <li><Link to="/creation-site-internet-lyon" className="block py-1">Création WordPress</Link></li>
                <li><Link to="/referencement-seo-lyon" className="block py-1">Référencement SEO</Link></li>
                <li><Link to="/creation-site-ecommerce-lyon" className="block py-1">Site E-commerce</Link></li>
                <li><Link to="/google-ads-sea-lyon" className="block py-1">Google Ads & SEA</Link></li>
                <li><Link to="/maintenance-support-wordpress-lyon" className="block py-1">Maintenance</Link></li>
                <li><Link to="/hebergement-web-lyon" className="block py-1">Hébergement Web</Link></li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          {/* Resources Accordion */}
          <Collapsible open={resourcesOpen} onOpenChange={setResourcesOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 border-b border-background/20">
              <h3 className="font-bold text-lg">Ressources</h3>
              <ChevronDown className={`w-5 h-5 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="space-y-2 text-sm opacity-80 py-3">
                <li><Link to="/realisations" className="block py-1">Réalisations</Link></li>
                <li><Link to="/blog" className="block py-1">Blog</Link></li>
                <li><Link to="/tarifs" className="block py-1">Tarifs</Link></li>
                <li><Link to="/a-propos" className="block py-1">À propos</Link></li>
                <li><Link to="/contact" className="block py-1">Contact</Link></li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          {/* Contact Accordion */}
          <Collapsible open={contactOpen} onOpenChange={setContactOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 border-b border-background/20">
              <h3 className="font-bold text-lg">Contact</h3>
              <ChevronDown className={`w-5 h-5 transition-transform ${contactOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="space-y-3 text-sm opacity-80 py-3">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:0411789113">04 11 78 91 13</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@vkback.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Lun-Ven : 9h-18h</span>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© 2025 VKBack - Agence Web Lyon - Tous droits réservés</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <Link to="/mentions-legales" className="hover:opacity-100">
                Mentions légales
              </Link>
              <Link to="/cgv" className="hover:opacity-100">
                CGV
              </Link>
              <Link to="/politique-confidentialite" className="hover:opacity-100">
                Confidentialité
              </Link>
              <Link to="/cookies" className="hover:opacity-100">
                Cookies
              </Link>
              <Link to="/plan-du-site" className="hover:opacity-100">
                Plan du site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
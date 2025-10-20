import { MapPin, Phone, Mail, Clock } from "lucide-react";

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

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Column 1: Logo + Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold">VKBack</div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Agence web WordPress à Lyon depuis 10+ ans. Nous créons des sites internet 
              professionnels, performants et optimisés SEO pour les TPE et PME lyonnaises. 
              Expertise WordPress, e-commerce, référencement naturel et maintenance.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="opacity-80">Lyon et Rhône-Alpes</span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="/agence-wordpress-lyon" className="hover:opacity-100">
                  Création WordPress
                </a>
              </li>
              <li>
                <a href="/agence-seo-lyon" className="hover:opacity-100">
                  Référencement SEO
                </a>
              </li>
              <li>
                <a href="/creation-site-ecommerce-lyon" className="hover:opacity-100">
                  Site E-commerce
                </a>
              </li>
              <li>
                <a href="/agence-google-ads-lyon" className="hover:opacity-100">
                  Google Ads & SEA
                </a>
              </li>
              <li>
                <a href="/maintenance-site-web-lyon" className="hover:opacity-100">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="/hebergement-web-lyon" className="hover:opacity-100">
                  Hébergement Web
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="/realisations/" className="hover:opacity-100">
                  Réalisations
                </a>
              </li>
              <li>
                <a href="/blog/" className="hover:opacity-100">
                  Blog
                </a>
              </li>
              <li>
                <a href="/tarifs/" className="hover:opacity-100">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="/a-propos/" className="hover:opacity-100">
                  À propos
                </a>
              </li>
              <li>
                <a href="/contact/" className="hover:opacity-100">
                  Contact
                </a>
              </li>
              <li>
                <a href="/devis/" className="hover:opacity-100">
                  Demander un devis
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact + Zone */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm opacity-80 mb-6">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>04 XX XX XX XX</span>
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
              <h4 className="font-semibold text-sm mb-3">Zone d'intervention</h4>
              <div className="space-y-1 text-xs opacity-70">
                {arrondissements.map((zone) => (
                  <div key={zone.name} className="flex items-start gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-background mt-1.5 flex-shrink-0" />
                    <span>
                      <span className="font-medium">{zone.name}</span>
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

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© 2025 VKBack - Agence Web WordPress Lyon - Tous droits réservés</p>
            <div className="flex gap-4">
              <a href="/mentions-legales/" className="hover:opacity-100">
                Mentions légales
              </a>
              <a href="/cgv/" className="hover:opacity-100">
                CGV
              </a>
              <a href="/confidentialite/" className="hover:opacity-100">
                Confidentialité
              </a>
              <a href="/cookies/" className="hover:opacity-100">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="/services/agence-wordpress-lyon/" className="hover:opacity-100">
                  Création WordPress
                </a>
              </li>
              <li>
                <a href="/services/agence-seo-lyon/" className="hover:opacity-100">
                  Référencement SEO
                </a>
              </li>
              <li>
                <a href="/services/creation-site-ecommerce-lyon/" className="hover:opacity-100">
                  Site E-commerce
                </a>
              </li>
              <li>
                <a href="/services/maintenance-site-web-lyon/" className="hover:opacity-100">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="/services/hebergement-web-lyon/" className="hover:opacity-100">
                  Hébergement Web
                </a>
              </li>
              <li>
                <a href="/services/" className="hover:opacity-100 font-medium">
                  → Tous les services
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="/realisations/" className="hover:opacity-100">
                  Portfolio / Réalisations
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
                <a href="/zones-intervention/" className="hover:opacity-100">
                  Zone d'intervention
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Agency */}
          <div>
            <h3 className="font-bold text-lg mb-4">Agence</h3>
            <ul className="space-y-2 text-sm opacity-80">
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

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Lyon et Rhône-Alpes</span>
              </li>
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© 2025 VK Back - Agence Web WordPress Lyon - Tous droits réservés</p>
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

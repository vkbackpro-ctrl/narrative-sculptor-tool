import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, Globe, ShoppingCart, Search, Building2, Sparkles, RefreshCw, Wrench, Target, Server } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border transition-all duration-300 ${
      isScrolled ? "shadow-lg" : ""
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? "h-14 md:h-16" : "h-16 md:h-20"
        }`}>
          {/* Logo */}
          <Logo className={isScrolled ? "scale-90" : ""} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px]">
                      <div className="grid grid-cols-2 gap-3">
                        <NavigationMenuLink asChild>
                          <a
                            href="/creation-site-internet-lyon"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center gap-2">
                              <Globe className="h-4 w-4 text-primary" />
                              <div className="text-sm font-medium leading-none">Création Site Internet</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Sites vitrine, corporate et sur-mesure
                            </p>
                          </a>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink asChild>
                          <a
                            href="/creation-site-ecommerce-lyon"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center gap-2">
                              <ShoppingCart className="h-4 w-4 text-primary" />
                              <div className="text-sm font-medium leading-none">Site E-commerce</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Boutiques WooCommerce sur WordPress
                            </p>
                          </a>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink asChild>
                          <a
                            href="/referencement-seo-lyon"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center gap-2">
                              <Search className="h-4 w-4 text-primary" />
                              <div className="text-sm font-medium leading-none">Référencement SEO</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Optimisation pour Google et visibilité web
                            </p>
                          </a>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <a
                            href="/maintenance-support-wordpress-lyon"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center gap-2">
                              <Wrench className="h-4 w-4 text-primary" />
                              <div className="text-sm font-medium leading-none">Maintenance & Support</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Mises à jour, sauvegardes et sécurité
                            </p>
                          </a>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <a
                            href="/google-ads-sea-lyon"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center gap-2">
                              <Target className="h-4 w-4 text-primary" />
                              <div className="text-sm font-medium leading-none">Google Ads & SEA</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Publicité Google et génération de leads
                            </p>
                          </a>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                          <a
                            href="/hebergement-web-lyon"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center gap-2">
                              <Server className="h-4 w-4 text-primary" />
                              <div className="text-sm font-medium leading-none">Hébergement Web</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Serveurs performants en France
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a href="/realisations/" className="text-foreground hover:text-primary transition-colors">
              Réalisations
            </a>
            <a href="/tarifs/" className="text-foreground hover:text-primary transition-colors">
              Tarifs
            </a>
            <a href="/blog/" className="text-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="/contact/" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="btn-cta group relative overflow-hidden">
              <span className="relative z-10">Devis Gratuit</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4">
            <div className="space-y-2">
              <div className="py-2 font-semibold text-foreground">Services</div>
              <div className="pl-4 space-y-2">
                <a
                  href="/creation-site-internet-lyon"
                  className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  Création Site Internet
                </a>
                <a
                  href="/creation-site-ecommerce-lyon"
                  className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  Site E-commerce
                </a>
                <a
                  href="/referencement-seo-lyon"
                  className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  Référencement SEO
                </a>
                <a
                  href="/maintenance-support-wordpress-lyon"
                  className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  Maintenance & Support
                </a>
                <a
                  href="/google-ads-sea-lyon"
                  className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  Google Ads & SEA
                </a>
                <a
                  href="/hebergement-web-lyon"
                  className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  Hébergement Web
                </a>
              </div>
            </div>
            
            <a
              href="/realisations/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Réalisations
            </a>
            <a
              href="/tarifs/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Tarifs
            </a>
            <a
              href="/blog/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Blog
            </a>
            <a
              href="/contact/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Button className="btn-cta w-full mt-4">
              Devis Gratuit
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

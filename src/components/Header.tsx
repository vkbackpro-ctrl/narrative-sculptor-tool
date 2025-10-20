import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="/services/" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
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
            <a
              href="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Accueil
            </a>
            <a
              href="/services/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
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

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary">
              VK Back
            </a>
          </div>

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
            <Button className="btn-cta">
              Devis Gratuit
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

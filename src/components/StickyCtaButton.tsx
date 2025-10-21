import { useState, useEffect } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "./ui/button";

const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 animate-fade-in">
      <Button
        size="lg"
        onClick={scrollToContact}
        className="btn-cta shadow-xl hover:shadow-2xl group"
      >
        <span className="hidden sm:inline">Devis Gratuit</span>
        <span className="sm:hidden">Devis</span>
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
      <a href="tel:+33478888888">
        <Button size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl">
          <Phone className="h-5 w-5" />
        </Button>
      </a>
    </div>
  );
};

export default StickyCtaButton;

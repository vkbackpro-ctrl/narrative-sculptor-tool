import { useState, useEffect } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
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
        asChild
        size="lg"
        className="btn-cta shadow-xl hover:shadow-2xl group"
      >
        <Link to="/contact">
          <span className="hidden sm:inline">Améliorer mon site</span>
          <span className="sm:hidden">Améliorer</span>
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
      <a href="tel:+33411789113">
        <Button size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl">
          <Phone className="h-5 w-5" />
        </Button>
      </a>
    </div>
  );
};

export default StickyCtaButton;

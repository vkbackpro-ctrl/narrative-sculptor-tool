import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Card } from "./ui/card";

interface TOCItem {
  id: string;
  title: string;
}

const TableOfContents = () => {
  const [activeId, setActiveId] = useState("");

  const sections: TOCItem[] = [
    { id: "introduction", title: "Types de Sites Internet" },
    { id: "pourquoi", title: "Pourquoi un Site Professionnel ?" },
    { id: "processus", title: "Notre Processus en 6 Étapes" },
    { id: "portfolio", title: "Nos Réalisations à Lyon" },
    { id: "features", title: "Fonctionnalités Incluses" },
    { id: "equipe", title: "Notre Équipe Lyonnaise" },
    { id: "pricing", title: "Tarifs & Formules" },
    { id: "faq", title: "Questions Fréquentes" },
    { id: "contact", title: "Demander un Devis" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Card className="sticky top-24 p-6 hidden lg:block">
      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
        <ChevronRight className="w-5 h-5 text-primary" />
        Sur cette page
      </h3>
      <nav className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
              activeId === section.id
                ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            }`}
          >
            {section.title}
          </button>
        ))}
      </nav>
    </Card>
  );
};

export default TableOfContents;

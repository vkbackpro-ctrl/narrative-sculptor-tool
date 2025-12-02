import { Calendar, TrendingUp, Code2, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
  bgClass: string;
  textClass: string;
  dotClass: string;
}

const TimelineHistory = () => {
  const events: TimelineEvent[] = [
    {
      year: "2011-2021",
      title: "Agence, Freelance & Projets Perso",
      description: "Marc et Florian travaillent dans des agences web prestigieuses, gérant des centaines de projets clients variés. Ils travaillent également en freelance pour de nombreux clients (création de sites WordPress, SEO, Google Ads, maintenance). En parallèle, ils créent leurs propres sites d'affiliation et projets personnels, testant et perfectionnant toutes les techniques qu'ils maîtrisent aujourd'hui.",
      icon: Calendar,
      colorClass: "text-primary",
      bgClass: "bg-primary/10",
      textClass: "text-primary",
      dotClass: "bg-primary"
    },
    {
      year: "2017",
      title: "Spécialisation WordPress et SEO",
      description: "Après 6 ans d'expérience variée, choix stratégique de se spécialiser exclusivement sur WordPress et le référencement naturel. Florian devient consultant SEO certifié et développe cette expertise clé.",
      icon: TrendingUp,
      colorClass: "text-accent-foreground",
      bgClass: "bg-accent/20",
      textClass: "text-accent-foreground",
      dotClass: "bg-accent"
    },
    {
      year: "2021",
      title: "Création de VKBack",
      description: "Après 10 ans d'expérience terrain, Marc et Florian fondent officiellement VKBack à Lyon. L'objectif : offrir une agence WordPress de proximité, alliant expertise technique pointue et relation humaine avec les clients lyonnais.",
      icon: Code2,
      colorClass: "text-secondary",
      bgClass: "bg-secondary/20",
      textClass: "text-secondary",
      dotClass: "bg-secondary"
    },
    {
      year: "2025",
      title: "Reconnaissance et Croissance",
      description: "4 ans après la création de l'agence, 14 ans d'expertise personnelle : plus de 200 sites créés, une note de 4.9/5 sur Google, et une équipe soudée dédiée à la réussite de nos clients lyonnais. La confiance et la proximité restent au cœur de notre approche.",
      icon: Award,
      colorClass: "text-primary",
      bgClass: "bg-primary/10",
      textClass: "text-primary",
      dotClass: "bg-primary"
    }
  ];

  return (
    <div className="relative">
      {/* Ligne verticale centrale - desktop uniquement */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform -translate-x-1/2" />

      <div className="space-y-12 md:space-y-16">
        {events.map((event, index) => {
          const Icon = event.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={event.year}
              className={`relative group ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } flex flex-col md:flex items-center gap-8`}
            >
              {/* Contenu - à gauche sur desktop pour les événements pairs, à droite pour les impairs */}
              <div className={`w-full md:w-5/12 ${isEven ? "md:text-right" : "md:text-left"}`}>
                <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${event.bgClass} rounded-xl flex-shrink-0 ${!isEven && "md:order-last"}`}>
                        <Icon className={`w-6 h-6 ${event.colorClass}`} />
                      </div>
                      <div className={isEven ? "md:text-right" : "md:text-left"}>
                        <div className={`text-3xl font-bold ${event.textClass} mb-2`}>
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Point central avec animation */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className={`relative w-6 h-6 rounded-full ${event.dotClass} border-4 border-background shadow-lg group-hover:scale-150 transition-all duration-300`}>
                  <div className={`absolute inset-0 rounded-full ${event.dotClass} animate-ping opacity-75`} />
                </div>
              </div>

              {/* Espace vide de l'autre côté pour équilibrer */}
              <div className="hidden md:block w-5/12" />
            </div>
          );
        })}
      </div>

      {/* Version mobile : ligne verticale à gauche avec points */}
      <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />
      
      {/* Points pour mobile */}
      {events.map((event, index) => (
        <div 
          key={`mobile-dot-${event.year}`}
          className={`md:hidden absolute left-6 transform -translate-x-1/2 w-4 h-4 rounded-full ${event.dotClass} border-2 border-background z-10`}
          style={{ top: `${index * 25}%` }}
        />
      ))}
    </div>
  );
};

export default TimelineHistory;


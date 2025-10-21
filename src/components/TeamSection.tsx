import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Award, Users } from "lucide-react";
import teamMember from "@/assets/team-member-portrait.jpg";
import FadeInSection from "./FadeInSection";

const TeamSection = () => {
  const team = [
    {
      name: "Vincent K.",
      role: "Fondateur & Développeur WordPress",
      image: teamMember,
      bio: "Expert WordPress depuis 2014, spécialisé en développement sur-mesure",
      location: "Lyon 2e",
    },
    {
      name: "Sophie M.",
      role: "Designer UI/UX",
      image: teamMember,
      bio: "Designer passionnée par l'expérience utilisateur et l'accessibilité",
      location: "Lyon 7e",
    },
    {
      name: "Thomas R.",
      role: "Expert SEO Local",
      image: teamMember,
      bio: "Spécialiste du référencement local à Lyon depuis 8 ans",
      location: "Villeurbanne",
    },
  ];

  return (
    <section id="equipe" className="section-container bg-muted/30">
      <FadeInSection>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Notre Équipe
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair mb-4">
            Une Équipe Locale au Cœur de Lyon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des experts WordPress passionnés, installés à Lyon et dédiés à la réussite de vos projets web
          </p>
        </div>
      </FadeInSection>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {team.map((member, index) => (
          <FadeInSection key={member.name} delay={index * 100}>
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden">
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role} chez VKBack Lyon`}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                  <Badge variant="secondary" className="mb-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    {member.location}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          </FadeInSection>
        ))}
      </div>

      {/* Stats équipe */}
      <FadeInSection delay={400}>
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Card className="text-center p-6 border-2">
            <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-3">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-bold text-primary mb-1">10+</p>
            <p className="text-sm text-muted-foreground">Années d'expérience</p>
          </Card>
          <Card className="text-center p-6 border-2">
            <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-3">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-bold text-primary mb-1">5</p>
            <p className="text-sm text-muted-foreground">Experts dédiés</p>
          </Card>
          <Card className="text-center p-6 border-2">
            <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-3">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-bold text-primary mb-1">100%</p>
            <p className="text-sm text-muted-foreground">Lyonnais</p>
          </Card>
        </div>
      </FadeInSection>
    </section>
  );
};

export default TeamSection;

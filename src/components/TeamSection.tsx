import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Award, Users } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.png";
import teamMember2 from "@/assets/team-member-2.png";
import teamMemberDefault from "@/assets/team-member-portrait.jpg";
import FadeInSection from "./FadeInSection";
const TeamSection = () => {
  const team = [{
    name: "Marc D.",
    role: "Fondateur & Développeur WordPress",
    image: teamMember1,
    bio: "Expert WordPress depuis 2014, spécialisé en développement sur-mesure",
    location: "Développement sur-mesure"
  }, {
    name: "Florian C.",
    role: "Expert SEO SEA et chargé de projet",
    image: teamMember2,
    bio: "Spécialiste du référencement et de la gestion de projets web",
    location: "Stratégie digitale"
  }];
  return <section id="equipe" className="section-container bg-muted/30">
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

      <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
        {team.map((member, index) => <FadeInSection key={member.name} delay={index * 100}>
            <Card className="overflow-hidden border-2 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 group h-full">
              <div className="relative h-64 overflow-hidden">
                <img src={member.image} alt={`${member.name} - ${member.role}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  {member.location}
                </div>
              </CardContent>
            </Card>
          </FadeInSection>)}
      </div>

      {/* Stats équipe */}
      <FadeInSection delay={400}>
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
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
            <p className="text-3xl font-bold text-primary mb-1">2</p>
            <p className="text-sm text-muted-foreground">Experts dédiés</p>
          </Card>
        </div>
      </FadeInSection>
    </section>;
};
export default TeamSection;
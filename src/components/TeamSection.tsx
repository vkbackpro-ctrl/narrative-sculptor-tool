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
    bio: "Expert WordPress avec 14 ans d'expérience, spécialisé en développement sur-mesure",
    location: "Développement sur-mesure",
    experience: "14 années"
  }, {
    name: "Florian C.",
    role: "Co-fondateur & Expert SEO SEA",
    image: teamMember2,
    bio: "Spécialiste du référencement et de la gestion de projets web",
    location: "Stratégie digitale",
    experience: "14 années"
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
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {member.location}
                  </div>
                  <div className="flex items-center text-sm">
                    <Award className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-semibold text-primary">{member.experience}</span>
                    <span className="text-muted-foreground ml-1">d'expérience</span>
                  </div>
                </div>
              </CardContent>
            </Card>
      </FadeInSection>)}
      </div>
    </section>;
};
export default TeamSection;
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";

const painPoints = [
  {
    problem: "Je n'ai pas le temps de gérer un site",
    solution: "On s'occupe de tout, de A à Z",
    icon: "⏱️",
  },
  {
    problem: "Mon site actuel est lent et ne convertit pas",
    solution: "Sites WordPress optimisés qui génèrent des leads",
    icon: "🚀",
  },
  {
    problem: "Google, référencement, SEO, SEA... je ne comprends rien",
    solution: "On vous explique tout en français clair, sans termes compliqués",
    icon: "📈",
  },
  {
    problem: "J'ai peur de me faire arnaquer",
    solution: "Devis transparent, pas de frais cachés",
    icon: "💎",
  },
];

const PainPointsSection = () => {
  return (
    <section className="section-container bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <FadeInSection>
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            On comprend vos <span className="gradient-text">difficultés</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Créer un site qui marche, c'est complexe. On est là pour vous simplifier la vie.
          </p>
        </div>
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-6 relative z-10 max-w-5xl mx-auto">
        {painPoints.map((item, index) => (
          <FadeInSection key={index} delay={index * 100}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="card-hover border-2 hover:border-primary/50 transition-all duration-300 h-full bg-gradient-to-br from-background via-background to-muted/20">
                <CardContent className="p-6 space-y-4">
                  {/* Problem */}
                  <div className="flex items-start gap-3">
                    <div className="text-3xl flex-shrink-0 mt-1">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start gap-2 mb-3">
                        <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <p className="text-base font-medium text-muted-foreground">
                          "{item.problem}"
                        </p>
                      </div>
                      
                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-3" />
                      
                      {/* Solution */}
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-base font-semibold text-foreground">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default PainPointsSection;

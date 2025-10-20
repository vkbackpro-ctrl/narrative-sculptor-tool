import BeforeAfterSlider from "./BeforeAfterSlider";
import FadeInSection from "./FadeInSection";

const beforeAfterProjects = [
  {
    beforeImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    title: "Refonte Site E-commerce",
    description: "Modernisation complète d'une boutique en ligne avec amélioration de 150% du taux de conversion"
  },
  {
    beforeImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
    title: "Site Vitrine Corporate",
    description: "Transformation digitale d'un site institutionnel avec design moderne et optimisation SEO"
  }
];

const BeforeAfterSection = () => {
  return (
    <section className="section-container bg-muted/20">
      <FadeInSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Avant / Après : Nos Transformations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nous transformons des sites web existants en expériences modernes et performantes
          </p>
        </div>
      </FadeInSection>

      <div className="grid lg:grid-cols-2 gap-8">
        {beforeAfterProjects.map((project, index) => (
          <FadeInSection key={index} delay={index * 200} scale>
            <div className="space-y-4">
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
              />
              <div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default BeforeAfterSection;

import AnimatedCounter from "./AnimatedCounter";
import FadeInSection from "./FadeInSection";

const stats = [
  {
    number: 10,
    suffix: "+",
    label: "Ans d'Expérience",
  },
  {
    number: 200,
    suffix: "+",
    label: "Sites Créés",
  },
  {
    number: 95,
    suffix: "%",
    label: "Clients Satisfaits",
  },
  {
    number: 4.9,
    suffix: "/5",
    label: "Note Google",
    decimals: 1,
  },
];

const StatsSection = () => {
  return (
    <section className="section-container bg-gradient-to-br from-primary via-primary to-primary-light text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
        {stats.map((stat, index) => (
          <FadeInSection key={stat.label} delay={index * 150}>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 group-hover:scale-110 transition-transform">
                <AnimatedCounter 
                  end={stat.number} 
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                  duration={2000}
                />
              </div>
              <div className="text-lg md:text-xl opacity-90">{stat.label}</div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

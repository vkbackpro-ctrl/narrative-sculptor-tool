const stats = [
  {
    number: "10+",
    label: "Ans d'Expérience",
  },
  {
    number: "200+",
    label: "Sites Créés",
  },
  {
    number: "95%",
    label: "Clients Satisfaits",
  },
  {
    number: "4.9/5",
    label: "Note Google",
  },
];

const StatsSection = () => {
  return (
    <section className="section-container bg-primary text-primary-foreground">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
              {stat.number}
            </div>
            <div className="text-lg md:text-xl opacity-90">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

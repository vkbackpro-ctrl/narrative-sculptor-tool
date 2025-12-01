import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    quote: "VK Back a créé notre site vitrine en 4 semaines. Le résultat est au-delà de nos attentes : design moderne, site rapide, et formation très complète. Nous sommes maintenant visibles sur Google !",
    author: "Théodore Villemont",
    role: "Artisan Plombier",
    location: "Lyon 6e",
  },
  {
    rating: 5,
    quote: "Agence très professionnelle et à l'écoute. Notre boutique WooCommerce fonctionne parfaitement, et nous avons doublé nos ventes en ligne en 6 mois. Support technique toujours disponible !",
    author: "Agathe Mercier",
    role: "Boutique Mode Féminine",
    location: "Lyon 2e",
  },
  {
    rating: 5,
    quote: "Refonte de notre site corporate réussie. VK Back a su comprendre nos enjeux B2B et créer un site élégant qui reflète notre expertise. Le SEO a aussi été grandement amélioré.",
    author: "Fabien Delacroix",
    role: "Directeur Marketing, PME Industrielle",
    location: "Villeurbanne",
  },
];

const Testimonials = () => {
  return (
    <section className="section-container bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ce Que Nos Clients Disent de Nous
        </h2>
        <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-accent fill-accent" />
          ))}
          <span className="ml-2">Note moyenne 4.9/5 sur Google (50+ avis)</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
        {testimonials.slice(0, 2).map((testimonial, index) => (
          <Card key={index} className="card-hover relative overflow-hidden">
            <CardContent className="p-6 md:p-8">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-lg">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

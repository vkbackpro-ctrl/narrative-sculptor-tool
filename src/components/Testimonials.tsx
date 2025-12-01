import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

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
  {
    rating: 5,
    quote: "Excellent accompagnement SEO. En 8 mois, nous sommes passés de la page 3 à la 1ère page Google sur nos mots-clés principaux. Le chiffre d'affaires a suivi !",
    author: "Léonore Beauchamp",
    role: "Restaurateur",
    location: "Lyon 7e",
  },
  {
    rating: 5,
    quote: "Maintenance WordPress impeccable. Plus aucun souci technique depuis 2 ans. L'équipe réagit très vite en cas de problème. Je recommande vivement !",
    author: "Augustin Renard",
    role: "Consultant Indépendant",
    location: "Caluire",
  },
  {
    rating: 5,
    quote: "Notre campagne Google Ads est très rentable grâce à VK Back. ROI positif dès le 2ème mois. Suivi régulier et optimisations constantes.",
    author: "Clémence Durand",
    role: "Directrice E-commerce",
    location: "Lyon 3e",
  },
];

const Testimonials = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

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

      <div className="max-w-5xl mx-auto">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="card-hover relative overflow-hidden h-full">
                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-muted-foreground mb-6 leading-relaxed text-base flex-grow">
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Navigation dots for mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-primary/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

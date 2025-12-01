import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    quote: "VK Back a créé notre site vitrine en 4 semaines. Le résultat est au-delà de nos attentes : design moderne, site rapide, et formation très complète. Nous sommes maintenant visibles sur Google !",
    author: "Jean Dupont",
    role: "Artisan Plombier",
    location: "Lyon 6e",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=80&h=80&fit=crop"
  },
  {
    rating: 5,
    quote: "Agence très professionnelle et à l'écoute. Notre boutique WooCommerce fonctionne parfaitement, et nous avons doublé nos ventes en ligne en 6 mois. Support technique toujours disponible !",
    author: "Marie Martin",
    role: "Boutique Mode Féminine",
    location: "Lyon 2e",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=80&h=80&fit=crop"
  },
  {
    rating: 5,
    quote: "Refonte de notre site corporate réussie. VK Back a su comprendre nos enjeux B2B et créer un site élégant qui reflète notre expertise. Le SEO a aussi été grandement amélioré.",
    author: "Paul Bernard",
    role: "Directeur Marketing, PME Industrielle",
    location: "Villeurbanne",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&h=80&fit=crop"
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
          <Card key={index} className="card-hover relative overflow-hidden group">
            <CardContent className="p-8">
              {/* Company Logo - Top Right */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
                <img 
                  src={testimonial.logo} 
                  alt="Logo client"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                "{testimonial.quote}"
              </p>

              {/* Author with Avatar */}
              <div className="border-t border-border pt-6 flex items-center gap-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <p className="font-bold text-lg">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

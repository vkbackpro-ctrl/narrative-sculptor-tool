import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import FadeInSection from "./FadeInSection";

interface RelatedService {
  title: string;
  description: string;
  href: string;
  price?: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
  title?: string;
}

const RelatedServices = ({ services, title = "Services Liés" }: RelatedServicesProps) => {
  return (
    <FadeInSection delay={350}>
      <div className="mt-12 p-6 bg-muted/30 rounded-lg border">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6 text-sm">
          Découvrez nos services professionnels en lien avec cet article
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link key={service.href} to={service.href} className="group">
              <Card className="p-4 h-full hover:border-primary hover:shadow-md transition-all">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {service.description}
                </p>
                {service.price && (
                  <p className="text-sm font-medium text-primary mt-2">
                    À partir de {service.price}
                  </p>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
};

export default RelatedServices;

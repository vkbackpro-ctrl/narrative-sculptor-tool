import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Building2, Award } from "lucide-react";

interface ExperienceBadgesProps {
  variant?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  showIcons?: boolean;
}

const ExperienceBadges = ({ 
  variant = "horizontal", 
  size = "md",
  showIcons = true 
}: ExperienceBadgesProps) => {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base"
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  return (
    <TooltipProvider>
      <div className={`flex ${variant === "vertical" ? "flex-col" : "flex-row flex-wrap"} gap-2`}>
        {/* Badge VKBack créée en 2021 */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge 
              variant="secondary" 
              className={`${sizeClasses[size]} bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 cursor-help transition-all hover:scale-105`}
            >
              {showIcons && <Building2 className={`${iconSizes[size]} mr-1.5`} />}
              <span className="font-bold">VKBack depuis 2021</span>
            </Badge>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-xs">
            <p className="font-semibold mb-1">L'agence VKBack</p>
            <p className="text-sm">Créée officiellement en 2021 à Lyon par Marc et Florian</p>
          </TooltipContent>
        </Tooltip>

        {/* Badge 14 ans d'expérience */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge 
              variant="secondary" 
              className={`${sizeClasses[size]} bg-accent/20 hover:bg-accent/30 text-accent-foreground border border-accent/30 cursor-help transition-all hover:scale-105`}
            >
              {showIcons && <Award className={`${iconSizes[size]} mr-1.5`} />}
              <span className="font-bold">14 ans d'expertise</span>
            </Badge>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-xs">
            <p className="font-semibold mb-1">L'expérience des fondateurs</p>
            <p className="text-sm">Marc et Florian créent des sites web depuis 2011 (14 ans d'expérience personnelle)</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default ExperienceBadges;

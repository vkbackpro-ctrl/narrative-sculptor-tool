import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  scale?: boolean;
}

const FadeInSection = ({ 
  children, 
  delay = 0, 
  className = "",
  direction = "up",
  scale = false
}: FadeInSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const getTransform = () => {
    if (!inView) {
      switch(direction) {
        case "up": return "translate-y-16";
        case "down": return "-translate-y-16";
        case "left": return "translate-x-16";
        case "right": return "-translate-x-16";
        default: return "translate-y-16";
      }
    }
    return "translate-y-0 translate-x-0";
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        inView 
          ? `opacity-100 ${scale ? 'scale-100' : ''} ${getTransform()}` 
          : `opacity-0 ${scale ? 'scale-95' : ''} ${getTransform()}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;

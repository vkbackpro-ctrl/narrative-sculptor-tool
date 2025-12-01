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
  className = "",
}: FadeInSectionProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default FadeInSection;

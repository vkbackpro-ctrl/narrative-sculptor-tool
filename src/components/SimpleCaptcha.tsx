import { useState, useEffect } from "react";
import { Check, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SimpleCaptchaProps {
  onVerify: (verified: boolean) => void;
  onReset?: () => void;
}

const SimpleCaptcha = ({ onVerify, onReset }: SimpleCaptchaProps) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
    setStartTime(Date.now());
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    // Vérification : le slider doit être à au moins 90% et avoir pris au moins 0.5 secondes
    const timeTaken = startTime ? Date.now() - startTime : 0;
    if (sliderPosition >= 90 && timeTaken >= 500) {
      setIsVerified(true);
      setSliderPosition(100);
      onVerify(true);
    } else {
      // Reset si pas assez loin ou trop rapide (bot detection)
      setSliderPosition(0);
      onVerify(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
    setStartTime(Date.now());
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  useEffect(() => {
    if (isVerified && onReset) {
      // Auto-reset pour permettre une nouvelle soumission après reset du formulaire
      const resetHandler = () => {
        setIsVerified(false);
        setSliderPosition(0);
      };
      return resetHandler;
    }
  }, [isVerified, onReset]);

  return (
    <div className="w-full">
      <div
        className={cn(
          "relative h-12 rounded-lg border-2 overflow-hidden transition-all duration-300 cursor-pointer select-none",
          isVerified 
            ? "bg-primary/10 border-primary" 
            : "bg-muted border-border hover:border-primary/50"
        )}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Progress bar */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-200",
            isVerified ? "bg-primary/20" : "bg-primary/10"
          )}
          style={{ width: `${sliderPosition}%` }}
        />

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className={cn(
              "text-sm font-medium transition-opacity duration-200",
              sliderPosition > 50 ? "opacity-0" : "opacity-100",
              isVerified && "hidden"
            )}
          >
            Glissez pour vérifier
          </span>
          {isVerified && (
            <span className="flex items-center gap-2 text-primary font-semibold">
              <Check className="w-5 h-5" />
              Vérifié !
            </span>
          )}
        </div>

        {/* Slider button */}
        {!isVerified && (
          <div
            className={cn(
              "absolute top-1 left-1 h-10 w-10 rounded-md bg-background border-2 border-primary shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform",
              isDragging && "scale-110"
            )}
            style={{ 
              left: `${sliderPosition}%`,
              transform: `translateX(-${sliderPosition}%)` 
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <MoveRight className="w-5 h-5 text-primary" />
          </div>
        )}
      </div>

      <p className="text-xs text-muted-foreground mt-2 text-center">
        Glissez le curseur vers la droite pour prouver que vous êtes humain
      </p>
    </div>
  );
};

export default SimpleCaptcha;

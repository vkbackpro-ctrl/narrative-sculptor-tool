import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  collapsed?: boolean;
}

const Logo = ({ className = "", collapsed = false }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="contents"
      >
      {/* Icon */}
      <div className="relative">
        <motion.div 
          className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-xl font-bold text-primary-foreground">VK</span>
        </motion.div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity -z-10" />
      </div>
      
      {/* Text */}
      {!collapsed && (
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              VKBack
            </span>
            <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
              Agence Web Lyon
            </span>
          </div>
      )}
      </motion.div>
    </Link>
  );
};

export default Logo;

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  collapsed?: boolean;
}

const Logo = ({ className = "", collapsed = false }: LogoProps) => {
  return (
    <motion.a 
      href="/" 
      className={`flex items-center gap-3 group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Icon */}
      <div className="relative">
        <motion.div 
          className="w-10 h-10 bg-gradient-to-br from-primary via-primary-light to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className="w-6 h-6 text-primary-foreground"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Stylized VK letters forming a modern tech shape */}
            <path 
              d="M4 4 L9 12 L4 20 M9 12 L14 4 M9 12 L14 20 M16 4 L16 20 M16 4 C16 4 20 4 20 8 C20 12 16 12 16 12 M16 12 C16 12 20 12 20 16 C20 20 16 20 16 20" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="drop-shadow-lg"
            />
          </svg>
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
    </motion.a>
  );
};

export default Logo;

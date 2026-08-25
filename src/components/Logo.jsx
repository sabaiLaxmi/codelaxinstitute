import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="relative flex items-center justify-center w-36 h-10 md:w-40 md:h-12 cursor-pointer group"
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {/* Animated glowing border */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 160 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          x="2"
          y="2"
          width="156"
          height="44"
          rx="12"
          stroke="url(#logo-gradient)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Glow effect that pulses and intensifies on hover */}
        <motion.rect
          x="2"
          y="2"
          width="156"
          height="44"
          rx="12"
          stroke="url(#logo-gradient)"
          strokeWidth="4"
          filter="blur(6px)"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          variants={{
            hover: { opacity: 0.8, filter: "blur(8px)", transition: { duration: 0.3 } }
          }}
        />
        
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4338ca" /> {/* indigo */}
            <stop offset="50%" stopColor="#ff6b00" /> {/* orange */}
            <stop offset="100%" stopColor="#4338ca" /> {/* indigo */}
          </linearGradient>
        </defs>
      </motion.svg>
      
      {/* Animated Text */}
      <div className="z-10 flex font-display font-bold text-lg md:text-xl tracking-tight group-hover:scale-105 transition-transform duration-300">
        <motion.span 
          className="text-white"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Code
        </motion.span>
        <motion.span 
          className="text-orange"
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Path
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Logo;

"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    // Pure dark background
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#050505]">
      
      {/* 🌟 Main Atmosphere Cloud (Neon Cyan) */}
      {/* Website khulte hi opacity 0 se dheere-dhere badhegi aur float karegi */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 0.12, 0.08, 0.12], // Bohot halki opacity (12% max) taaki premium dark look barkarar rahe
          scale: [0.8, 1.1, 1, 1.1],
          x: ["0%", "5%", "-5%", "0%"],
          y: ["0%", "-5%", "5%", "0%"],
        }}
        transition={{ 
          duration: 25, // Bohot slow aur smooth movement
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[10%] left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full blur-[150px] md:blur-[250px]"
        style={{ 
          backgroundColor: "#00f2fe", // Pure Neon Cyan
          willChange: "transform, opacity" 
        }}
      />

      {/* 🌟 Second smaller cloud for atmosphere depth */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.08, 0.04, 0.08], // Aur bhi halka 
          x: ["0%", "-5%", "5%", "0%"],
          y: ["0%", "5%", "-5%", "0%"],
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2 // Thodi der baad start hoga entry ke time
        }}
        className="absolute bottom-[5%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[150px] md:blur-[250px]"
        style={{ 
          backgroundColor: "#00f2fe", 
          willChange: "transform, opacity" 
        }}
      />
      
    </div>
  );
}
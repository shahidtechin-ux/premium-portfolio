"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [siteName, setSiteName] = useState("SHAHID WEB STUDIO");
  const pathname = usePathname();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/settings");
        const data = await res.json();
        if (data.success && data.setting && data.setting.siteName) {
          setSiteName(data.setting.siteName);
        }
      } catch (error) {
        console.error("Failed to fetch site settings", error);
      }
    };
    fetchSettings();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  // 🔥 FIX 1: Smooth Animation (Open & Close)
  const menuVariants = {
    closed: {
      clipPath: "circle(0px at calc(100% - 50px) 40px)",
      opacity: 0,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } // Smooth Closing Animation
    },
    open: {
      clipPath: "circle(150% at calc(100% - 50px) 40px)",
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const itemVariants = {
    closed: { y: 30, opacity: 0 },
    open: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: [0.33, 1, 0.68, 1] }
    })
  };

  // LOGO LOGIC
  const nameParts = siteName.split(" ");
  const firstWord = nameParts[0] || "SHAHID";
  const restOfName = nameParts.slice(1).join(" ") || "WEB STUDIO";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">

            {/* PREMIUM BRAND LOGO */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="relative z-[110] flex items-center gap-3 group"
            >
              {/* Premium Glossy Neon Cyan Box */}
              <div className="relative w-11 h-11 md:w-12 md:h-12 shrink-0">

                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-[13px] bg-[#00f2fe]/40 blur-[12px] opacity-80 group-hover:opacity-100 transition-all duration-500" />

                {/* Main Box - Neon Cyan Gradient */}
                <div className="relative w-full h-full rounded-[13px] overflow-hidden bg-gradient-to-br from-[#00f2fe] to-[#0077ff] border border-white/40 shadow-inner group-hover:shadow-[0_0_20px_rgba(0,242,254,0.6)] transition-all duration-500">

                  {/* 🔥 5-SECOND SHINE EFFECT (Box ke liye) 🔥 */}
                  <motion.div
                    initial={{ x: "-150%" }}
                    animate={{ x: "200%" }}
                    transition={{ 
                      duration: 1, 
                      ease: "easeInOut", 
                      repeat: Infinity, 
                      repeatDelay: 4 // 1 sec shine + 4 sec wait = 5 seconds loop
                    }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-[30deg] z-[60] pointer-events-none opacity-90"
                  />

                  {/* GLOSSY FINISH (Top White Fade) */}
                  <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/70 to-transparent pointer-events-none z-10" />
                  
                  {/* Shadow for 3D depth */}
                  <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />

                  {/* Geometric S Symbol (Solid White to pop on Cyan) */}
                  <svg
                    viewBox="0 0 100 100"
                    className="relative w-full h-full p-[8px] md:p-[9px] group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] z-20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Upper S stroke */}
                    <path
                      d="M72 18 H43 C29 18 21 26 21 37 C21 48 29 54 41 57 L58 61 C63 62 66 65 66 69 C66 73 62 77 56 77 H28"
                      stroke="#ffffff"
                      strokeWidth="12"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                    />
                    {/* Lower forward stroke */}
                    <path
                      d="M28 82 H57 C71 82 79 74 79 63 C79 52 71 46 59 43 L42 39 C37 38 34 35 34 31 C34 27 38 23 44 23 H72"
                      stroke="#ffffff"
                      strokeWidth="12"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                    />
                    {/* Center cut */}
                    <path
                      d="M35 50L50 42L65 50L50 58L35 50Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
              </div>

              {/* Premium Wordmark with Line Shine */}
              <div className="relative flex flex-col justify-center overflow-hidden py-1 px-2 -ml-2 rounded-lg">
                
                {/* 🔥 NEW: LINE SHINE EFFECT ON THE NAME 🔥 */}
                <motion.div
                  initial={{ x: "-200%" }}
                  animate={{ x: "400%" }}
                  transition={{ 
                    duration: 1.5, // Thoda slow chalega name ke upar
                    ease: "easeInOut", 
                    repeat: Infinity, 
                    repeatDelay: 3.5 // 1.5 + 3.5 = 5 seconds loop (synchronized with the box)
                  }}
                  className="absolute top-0 left-0 w-[30px] md:w-[50px] h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-[30deg] z-[60] pointer-events-none opacity-80"
                />

                {/* SHAHID - NEON CYAN */}
                <span
                  className="
                    relative z-10
                    text-[21px] md:text-[27px]
                    font-black
                    uppercase
                    leading-none
                    tracking-[0.16em]
                    text-[#00f2fe]
                    drop-shadow-[0_0_8px_rgba(0,242,254,0.4)]
                    group-hover:drop-shadow-[0_0_15px_rgba(0,242,254,0.7)]
                    transition-all duration-300
                  "
                >
                  {firstWord}
                </span>

                {/* WEB STUDIO */}
                <span className="relative z-10 flex items-center mt-[5px]">

                  {/* Small Neon Dash */}
                  <span className="w-3 md:w-4 h-[2px] rounded-full bg-[#00f2fe] mr-2 shadow-[0_0_5px_rgba(0,242,254,0.5)]" />

                  {/* WEB - WHITE */}
                  <span
                    className="
                      text-[8px] md:text-[10px]
                      font-extrabold
                      text-white
                      uppercase
                      tracking-[0.20em]
                      leading-none
                    "
                  >
                    {restOfName.split(" ")[0] || "WEB"}
                  </span>

                  {/* STUDIO - NEON CYAN */}
                  <span
                    className="
                      ml-1.5
                      text-[8px] md:text-[10px]
                      font-extrabold
                      text-[#00f2fe]
                      uppercase
                      tracking-[0.20em]
                      leading-none
                      drop-shadow-[0_0_5px_rgba(0,242,254,0.5)]
                    "
                  >
                    {restOfName.split(" ").slice(1).join(" ") || "STUDIO"}
                  </span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={index}
                    href={link.path}
                    className={`relative text-xs md:text-sm uppercase tracking-widest font-bold transition-all duration-300
                    ${isActive ? "text-neonAccent" : "text-gray-400 hover:text-white"}`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-neonAccent blur-[1px] shadow-[0_0_8px_#00f2fe]"></span>
                    )}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="ml-4 px-6 py-2.5 text-xs uppercase tracking-widest font-bold text-black bg-neonAccent rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,242,254,0.3)]"
              >
                Let's Talk
              </Link>
            </div>

            {/* Premium Pill Menu Button (Mobile) */}
            <div className="md:hidden flex items-center relative z-[110]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-neonAccent/10 text-neonAccent border border-neonAccent/30 px-5 py-2 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-neonAccent hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.15)]"
              >
                {isOpen ? "CLOSE" : "MENU"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Animated Menu Overlay (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            // 🔥 FIX 2: Added pb-28 to push bottom content up 
            className="fixed inset-0 w-full h-screen bg-[#050505] z-[90] flex flex-col justify-between items-center overflow-hidden md:hidden pt-28 pb-28"
          >
            {/* Background Glow inside Menu */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-neonAccent/10 blur-[100px] rounded-full pointer-events-none" />

            {/* 🔥 FIX 3: justify-start aur mt-10 add kiya taaki links upar chale jayein */}
            <div className="flex flex-col items-center gap-6 relative z-10 w-full px-6 flex-1 justify-start mt-10">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div key={i} custom={i} variants={itemVariants}>
                    <Link
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-[22px] font-medium tracking-widest transition-all duration-300 block
                        ${isActive ? "text-neonAccent font-bold" : "text-gray-300 hover:text-white"}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div
              custom={navLinks.length}
              variants={itemVariants}
              className="text-center mt-6 relative z-10"
            >
              <p className="text-gray-400 text-[11px] uppercase tracking-widest mb-4">Available for new projects</p>
              
              {/* 🔥 FIX 4: Button size bada kiya (px-8, py-3.5, text-sm) aur glow add kiya */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-neonAccent/30 text-neonAccent font-bold text-sm tracking-wider hover:bg-neonAccent hover:text-black transition-all shadow-[0_0_20px_rgba(0,242,254,0.15)]"
              >
                Start a Project &rarr;
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
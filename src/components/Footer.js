"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const [settings, setSettings] = useState({ 
    siteName: "SHAHID WEB STUDIO", 
    tagline: "Premium Web Development",
    email: "",
    phone: "",
    address: ""
  });
  const [socials, setSocials] = useState({});
  
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/settings");
        const data = await res.json();
        if (data.success && data.setting) setSettings(data.setting);
      } catch (error) { console.error("Error fetching settings", error); }
    };

    const fetchSocials = async () => {
      try {
        const res = await fetch("/api/social");
        const data = await res.json();
        if (data.success && data.social) setSocials(data.social);
      } catch (error) { console.error("Error fetching socials", error); }
    };

    fetchSettings();
    fetchSocials();
  }, []);

  const nameParts = settings.siteName.split(" ");
  const firstWord = nameParts[0] || "SHAHID";
  const restOfName = nameParts.slice(1).join(" ") || "WEB STUDIO";

  const gmailLink = settings.email ? `https://mail.google.com/mail/?view=cm&fs=1&to=${settings.email}` : "#";

  return (
    // FIX: mt-20 aur pt-20 ko mobile ke liye mt-8 aur pt-10 me badal diya
    <footer className={`bg-[#050505] relative overflow-hidden ${isAdmin ? 'py-4 border-t border-white/5' : 'border-t border-white/10 pt-10 md:pt-20 pb-10 mt-8 md:mt-20'}`}>
      
      {!isAdmin && (
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neonAccent/5 rounded-full blur-[150px] pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {!isAdmin && (
          // FIX: Neeche ke gap ko bhi mobile ke liye mb-16 se mb-10 kar diya hai
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-16">
            
            {/* 1. Brand Section */}
            <div className="lg:pr-4 flex flex-col items-center md:items-start text-center md:text-left">
              
              <Link href="/" className="relative z-[110] flex items-center justify-center md:justify-start gap-3 group mb-5 md:mb-6">
                <div className="relative w-11 h-11 shrink-0">
                  <div className="absolute inset-0 rounded-[13px] bg-[#00f2fe]/40 blur-[12px] opacity-80 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative w-full h-full rounded-[13px] overflow-hidden bg-gradient-to-br from-[#00f2fe] to-[#0077ff] border border-white/40 shadow-inner group-hover:shadow-[0_0_20px_rgba(0,242,254,0.6)] transition-all duration-500">
                    <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    <svg viewBox="0 0 100 100" className="relative w-full h-full p-[8px] group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M72 18 H43 C29 18 21 26 21 37 C21 48 29 54 41 57 L58 61 C63 62 66 65 66 69 C66 73 62 77 56 77 H28" stroke="#ffffff" strokeWidth="12" strokeLinecap="square" strokeLinejoin="miter" />
                      <path d="M28 82 H57 C71 82 79 74 79 63 C79 52 71 46 59 43 L42 39 C37 38 34 35 34 31 C34 27 38 23 44 23 H72" stroke="#ffffff" strokeWidth="12" strokeLinecap="square" strokeLinejoin="miter" />
                      <path d="M35 50L50 42L65 50L50 58L35 50Z" fill="#ffffff" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-center text-left">
                  <span className="text-[21px] font-black uppercase leading-none tracking-[0.16em] text-[#00f2fe] drop-shadow-[0_0_8px_rgba(0,242,254,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(0,242,254,0.7)] transition-all duration-300">
                    {firstWord}
                  </span>
                  <span className="flex items-center mt-[5px]">
                    <span className="w-3 h-[2px] rounded-full bg-[#00f2fe] mr-2 shadow-[0_0_5px_rgba(0,242,254,0.5)]" />
                    <span className="text-[8px] font-extrabold text-white uppercase tracking-[0.20em] leading-none">
                      {restOfName.split(" ")[0] || "WEB"}
                    </span>
                    <span className="ml-1.5 text-[8px] font-extrabold text-[#00f2fe] uppercase tracking-[0.20em] leading-none drop-shadow-[0_0_5px_rgba(0,242,254,0.5)]">
                      {restOfName.split(" ").slice(1).join(" ") || "STUDIO"}
                    </span>
                  </span>
                </div>
              </Link>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                {settings.tagline || "We build premium websites and digital platforms to scale your business to the next level."}
              </p>
            </div>

            {/* 2. Quick Links Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-white font-bold mb-5 md:mb-6 uppercase tracking-widest text-base">Quick Links</h3>
              <ul className="space-y-4 flex flex-col items-center md:items-start">
                <li><Link href="/portfolio" className="text-gray-400 hover:text-neonAccent transition-colors text-sm md:text-base flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-neonAccent/50"></span> Portfolio</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-neonAccent transition-colors text-sm md:text-base flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-neonAccent/50"></span> Services</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-neonAccent transition-colors text-sm md:text-base flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-neonAccent/50"></span> Pricing</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-neonAccent transition-colors text-sm md:text-base flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-neonAccent/50"></span> FAQ</Link></li>
              </ul>
            </div>

            {/* 3. Contact Info Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-white font-bold mb-5 md:mb-6 uppercase tracking-widest text-base">Contact Info</h3>
              <ul className="space-y-4 text-sm md:text-base text-gray-400 flex flex-col items-center md:items-start w-full">
                {settings.email && (
                  <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 w-full justify-center md:justify-start">
                    <FaEnvelope className="text-neonAccent md:mt-1.5 flex-shrink-0" />
                    <a href={gmailLink} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{settings.email}</a>
                  </li>
                )}
                {settings.phone && (
                  <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 w-full justify-center md:justify-start">
                    <FaPhoneAlt className="text-neonAccent md:mt-1.5 flex-shrink-0" />
                    <a href={`tel:${settings.phone}`} className="hover:text-white transition-colors">{settings.phone}</a>
                  </li>
                )}
                {settings.address && (
                  <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 w-full justify-center md:justify-start">
                    <FaMapMarkerAlt className="text-neonAccent md:mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed max-w-[250px] md:max-w-none">{settings.address}</span>
                  </li>
                )}
                {(!settings.email && !settings.phone && !settings.address) && (
                  <li className="italic text-gray-600">Please update contact info in Admin Panel.</li>
                )}
              </ul>
            </div>

            {/* 4. Social Links Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-white font-bold mb-5 md:mb-6 uppercase tracking-widest text-base">Connect With Us</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {socials.instagram && <a href={socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neonAccent hover:text-black hover:-translate-y-1 transition-all shadow-lg"><FaInstagram size={20} /></a>}
                {socials.linkedin && <a href={socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neonAccent hover:text-black hover:-translate-y-1 transition-all shadow-lg"><FaLinkedin size={20} /></a>}
                {socials.github && <a href={socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neonAccent hover:text-black hover:-translate-y-1 transition-all shadow-lg"><FaGithub size={20} /></a>}
                {socials.twitter && <a href={socials.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neonAccent hover:text-black hover:-translate-y-1 transition-all shadow-lg"><FaTwitter size={20} /></a>}
                {socials.facebook && <a href={socials.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neonAccent hover:text-black hover:-translate-y-1 transition-all shadow-lg"><FaFacebook size={20} /></a>}
                {socials.youtube && <a href={socials.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neonAccent hover:text-black hover:-translate-y-1 transition-all shadow-lg"><FaYoutube size={20} /></a>}
              </div>
              {(!socials.instagram && !socials.linkedin && !socials.github && !socials.twitter && !socials.facebook && !socials.youtube) && (
                <p className="text-sm text-gray-600">No social links added yet.</p>
              )}
            </div>

          </div>
        )}

        {/* COPYRIGHT BAR */}
        <div className={`${!isAdmin ? 'border-t border-white/10 pt-6 md:pt-8' : ''} flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left`}>
          <p className="text-gray-500 text-sm md:text-base">
            © {new Date().getFullYear()} {settings.siteName}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <Link href="/privacy" className="text-gray-500 text-sm md:text-base hover:text-neonAccent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 text-sm md:text-base hover:text-neonAccent transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
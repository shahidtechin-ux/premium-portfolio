"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  // Admin panel se data laane ke liye State
  const [settings, setSettings] = useState({ email: "shahid.tech.in@gmail.com", phone: "+91 99716 78312", address: "Delhi, India" });
  const [socials, setSocials] = useState({ instagram: "https://instagram.com/https_shahiddd" });

  useEffect(() => {
    // Database se Website Settings (Email, Phone, Address) lana
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/settings");
        const data = await res.json();
        if (data.success && data.setting) setSettings(data.setting);
      } catch (error) { console.error("Error fetching settings", error); }
    };

    // Database se Social Links (Instagram) lana
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ loading: false, success: true, error: "" });
        setFormData({ name: "", email: "", whatsapp: "", message: "" });
        setTimeout(() => setStatus({ loading: false, success: false, error: "" }), 5000);
      } else {
        setStatus({ loading: false, success: false, error: data.message });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: "Something went wrong. Please try again." });
    }
  };

  // Gmail direct compose link aur WhatsApp link generate karna
  const gmailLink = settings.email ? `https://mail.google.com/mail/?view=cm&fs=1&to=${settings.email}` : "#";
  const whatsappLink = settings.phone ? `https://wa.me/${settings.phone.replace(/[^0-9]/g, "")}` : "#";

  return (
    // FIX: py-20 ko pt-4 md:pt-12 pb-20 kiya
    <div className="relative min-h-screen pt-4 md:pt-12 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-neonAccent/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      {/* FIX: mt-10 ko mt-2 md:mt-10 kiya */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-2 md:mt-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-effect border border-white/10 mb-4 md:mb-6"
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-gray-300 text-[10px] md:text-xs font-bold uppercase tracking-widest">Accepting New Clients</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight"
          >
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonAccent to-blue-500">Project</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-lg"
          >
            Have a bold idea or need to revamp your existing business? Drop us a message or reach out directly on our social channels.
          </motion.p>
        </div>

        {/* FIX: gap-12 ko mobile par gap-8 kiya, aur mb-16 rakha */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-8 mb-16 md:mb-24 relative z-20">
          
          {/* Left: Contact Info & Direct Links */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* FIX: p-8 ko mobile ke liye p-6 kiya */}
            <div className="glass-effect p-6 md:p-8 rounded-2xl border border-white/5 h-full relative z-20">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Direct Contact</h3>
              
              <div className="space-y-6">
                
                {/* Email */}
                {settings.email && (
                  <a href={gmailLink} target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer relative z-30">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neonAccent group-hover:text-neonAccent transition-colors flex-shrink-0">
                      <FaEnvelope className="text-xl md:text-2xl" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-wider">Email Us</p>
                      {/* FIX: break-all lagaya taaki long link tut jaye but layout kharab na kare */}
                      <p className="text-white font-medium text-sm md:text-base group-hover:text-neonAccent transition-colors break-all md:break-normal">{settings.email}</p>
                    </div>
                  </a>
                )}

                {/* WhatsApp */}
                {settings.phone && (
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer relative z-30">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-green-400 group-hover:text-green-400 transition-colors flex-shrink-0">
                      <FaWhatsapp className="text-xl md:text-2xl" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-wider">WhatsApp</p>
                      <p className="text-white font-medium text-sm md:text-base group-hover:text-green-400 transition-colors">{settings.phone}</p>
                    </div>
                  </a>
                )}

                {/* Instagram */}
                {socials.instagram && (
                  <a href={socials.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer relative z-30">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-pink-500 group-hover:text-pink-500 transition-colors flex-shrink-0">
                      <FaInstagram className="text-xl md:text-2xl" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-wider">Instagram</p>
                      {/* FIX: break-all aur text size theek kiya taaki link screen se bahar na jaaye */}
                      <p className="text-white font-medium text-sm md:text-base group-hover:text-pink-500 transition-colors break-all md:break-normal">
                        {socials.instagram.replace("https://www.instagram.com/", "@").replace("https://instagram.com/", "@")}
                      </p>
                    </div>
                  </a>
                )}

                {/* Address */}
                {settings.address && (
                  <div className="flex items-center gap-4 group border-t border-white/10 pt-6 mt-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-400 group-hover:text-blue-400 transition-colors flex-shrink-0">
                      <FaMapMarkerAlt className="text-xl md:text-2xl" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-wider">HQ Location</p>
                      <p className="text-white font-medium text-sm md:text-base">{settings.address}</p>
                    </div>
                  </div>
                )}
                
              </div>
            </div>
          </motion.div>

          {/* Right: Premium Glass Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            // FIX: Padding ko p-6 md:p-10 kiya mobile par compact rakhne ke liye
            className="lg:col-span-3 glass-effect p-6 md:p-10 rounded-2xl border border-white/5 relative bg-[#0a0a0a]/80 z-20"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* FIX: gap-6 ko gap-4 md:gap-6 kiya */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-gray-400 text-[10px] md:text-xs font-bold mb-1.5 md:mb-2 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" name="name" required
                    value={formData.name} onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm md:text-base text-white focus:outline-none focus:border-neonAccent focus:bg-black transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-[10px] md:text-xs font-bold mb-1.5 md:mb-2 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm md:text-base text-white focus:outline-none focus:border-neonAccent focus:bg-black transition-colors"
                    placeholder="john@business.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-[10px] md:text-xs font-bold mb-1.5 md:mb-2 uppercase tracking-wider">WhatsApp Number</label>
                <input 
                  type="text" name="whatsapp"
                  value={formData.whatsapp} onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm md:text-base text-white focus:outline-none focus:border-neonAccent focus:bg-black transition-colors"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-[10px] md:text-xs font-bold mb-1.5 md:mb-2 uppercase tracking-wider">Project Details</label>
                <textarea 
                  name="message" rows="4" required
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm md:text-base text-white focus:outline-none focus:border-neonAccent focus:bg-black transition-colors resize-none"
                  placeholder="Tell us about your business goals and what you need built..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {status.success && (
                <div className="p-3 md:p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2">
                  <FaCheckCircle className="text-base md:text-lg shrink-0" /> Message sent successfully! We will contact you shortly.
                </div>
              )}
              {status.error && (
                <div className="p-3 md:p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs md:text-sm font-bold">
                  {status.error}
                </div>
              )}

              <button 
                type="submit" disabled={status.loading}
                className="w-full py-3.5 md:py-4 mt-2 bg-neonAccent text-black text-sm md:text-base font-bold rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,242,254,0.2)]"
              >
                {status.loading ? "Sending your request..." : (
                  <>Send Request <FaPaperPlane /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Agency Process Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          // FIX: pt-16 ko mobile ke liye pt-10 kiya
          className="border-t border-white/10 pt-10 md:pt-16 relative z-20"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">What Happens <span className="text-blue-400">Next?</span></h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">Here is our simple, transparent process once you submit the form.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl text-neonAccent font-black">1</div>
              <h4 className="text-white font-bold text-base md:text-lg mb-2">Discovery Call</h4>
              <p className="text-gray-400 text-xs md:text-sm">We'll schedule a quick call to understand your business and technical requirements.</p>
            </div>
            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl text-neonAccent font-black">2</div>
              <h4 className="text-white font-bold text-base md:text-lg mb-2">Project Proposal</h4>
              <p className="text-gray-400 text-xs md:text-sm">You'll receive a detailed roadmap, timeline, and a transparent pricing quote.</p>
            </div>
            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl text-neonAccent font-black">3</div>
              <h4 className="text-white font-bold text-base md:text-lg mb-2">Development Begins</h4>
              <p className="text-gray-400 text-xs md:text-sm">Once approved, our team starts engineering your premium digital solution.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
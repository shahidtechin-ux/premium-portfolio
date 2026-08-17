"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaDesktop, FaMobileAlt, FaSearchDollar, FaCheckCircle, FaStar } from "react-icons/fa";

export default function Home() {
  const [dbTestimonials, setDbTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonials");
        const data = await res.json();
        if (data.success) {
          setDbTestimonials(data.testimonials);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="relative pt-2 md:pt-8 pb-10 w-full">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-[-20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-neonAccent/10 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-0 right-[-20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center min-h-[auto] lg:min-h-[80vh]">
        
        {/* FIX: flex-col, items-center aur text-center (Mobile ke liye), left-align (Desktop ke liye) */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="mt-2 lg:mt-0 w-full flex flex-col items-center md:items-start text-center md:text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-effect border border-white/10 mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-gray-300 text-[9px] md:text-xs font-bold uppercase tracking-widest">Available for New Projects</span>
          </div>
          
          {/* FIX: Line breaks exactly as you requested */}
          <h1 className="text-[42px] leading-[1.15] sm:text-5xl md:text-7xl font-extrabold text-white mb-4 md:mb-6 tracking-tight w-full">
            Scale Your Brand <br className="block md:hidden" />
            with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonAccent to-blue-500">Shahid Web Studio</span>
          </h1>
          
          <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-10 leading-relaxed w-full md:max-w-xl">
            We don't just build websites; we build digital growth engines. From high-converting landing pages to custom web applications, we deliver premium digital solutions tailored to skyrocket your business revenue.
          </p>
          
          {/* FIX: Buttons centered on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full justify-center md:justify-start">
            <Link href="/contact" className="px-6 py-3.5 md:px-8 md:py-4 bg-white text-black font-bold rounded-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 text-sm md:text-base">
              Start Your Project <FaRocket />
            </Link>
            <Link href="/services" className="px-6 py-3.5 md:px-8 md:py-4 bg-transparent text-white font-bold rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-center text-sm md:text-base">
              Explore Services
            </Link>
          </div>

          {/* FIX: Checkmarks perfectly aligned left but centered on mobile */}
          <div className="mt-8 md:mt-12 grid grid-cols-2 gap-y-3 gap-x-6 text-xs md:text-sm text-gray-400 font-medium w-max mx-auto md:mx-0 md:w-full">
             <span className="flex items-center justify-start gap-2"><FaCheckCircle className="text-neonAccent flex-shrink-0" /> Custom Design</span>
             <span className="flex items-center justify-start gap-2"><FaCheckCircle className="text-neonAccent flex-shrink-0" /> Mobile Ready</span>
             
             <span className="flex items-center justify-start gap-2"><FaCheckCircle className="text-neonAccent flex-shrink-0" /> SEO Optimized</span>
             <span className="flex items-center justify-start gap-2"><FaCheckCircle className="text-neonAccent flex-shrink-0" /> High Conversion</span>
             
             <span className="flex items-center justify-start gap-2"><FaCheckCircle className="text-neonAccent flex-shrink-0" /> Fast Loading</span>
             <span className="flex items-center justify-start gap-2"><FaCheckCircle className="text-neonAccent flex-shrink-0" /> 24/7 Support</span>
          </div>
        </motion.div>

        {/* Right Side: Growth Chart */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative w-full mt-6 md:mt-0">
          <div className="glass-effect rounded-2xl p-5 md:p-8 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0a0a0a]/80 backdrop-blur-xl">
            <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-5 md:mb-6">
              <div>
                <h3 className="text-white font-bold text-sm md:text-lg">Client Revenue Growth</h3>
                <p className="text-gray-500 text-[9px] md:text-xs uppercase tracking-widest mt-1">Post-Website Launch</p>
              </div>
              <div className="bg-green-500/20 text-green-400 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold flex items-center gap-1 md:gap-2">
                <FaChartLine /> +245%
              </div>
            </div>

            <div className="flex items-end justify-between h-32 md:h-48 gap-2 md:gap-4 pt-4 border-b border-white/5 pb-4">
              <motion.div initial={{ height: 0 }} animate={{ height: "30%" }} transition={{ delay: 0.2, duration: 1 }} className="w-full bg-blue-900/50 rounded-t-md relative group"><span className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 text-[9px] md:text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Q1</span></motion.div>
              <motion.div initial={{ height: 0 }} animate={{ height: "45%" }} transition={{ delay: 0.4, duration: 1 }} className="w-full bg-blue-800/60 rounded-t-md relative group"><span className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 text-[9px] md:text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Q2</span></motion.div>
              <motion.div initial={{ height: 0 }} animate={{ height: "70%" }} transition={{ delay: 0.6, duration: 1 }} className="w-full bg-blue-600/80 rounded-t-md relative group"><span className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 text-[9px] md:text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Q3</span></motion.div>
              <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ delay: 0.8, duration: 1 }} className="w-full bg-gradient-to-t from-blue-500 to-neonAccent rounded-t-md shadow-[0_0_15px_#00f2fe] relative group"><span className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 text-[9px] md:text-xs text-neonAccent font-bold opacity-0 group-hover:opacity-100 transition-opacity">Q4</span></motion.div>
            </div>

            <div className="mt-4 md:mt-6 flex gap-3 md:gap-4">
              <div className="flex-1 glass-effect p-3 md:p-4 rounded-xl border border-white/5">
                <p className="text-gray-500 text-[9px] md:text-xs mb-1 uppercase tracking-wider">Traffic</p>
                <h4 className="text-white font-bold text-sm md:text-xl">50k+</h4>
              </div>
              <div className="flex-1 glass-effect p-3 md:p-4 rounded-xl border border-white/5">
                <p className="text-gray-500 text-[9px] md:text-xs mb-1 uppercase tracking-wider">Conversion</p>
                <h4 className="text-white font-bold text-sm md:text-xl">12.4%</h4>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 md:mt-32">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">Premium Web <span className="text-neonAccent">Solutions</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Everything you need to establish a dominant online presence and convert visitors into paying customers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="glass-effect p-6 md:p-8 rounded-2xl border border-white/5 hover:border-neonAccent/50 transition-colors group">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-xl flex items-center justify-center text-neonAccent text-xl md:text-2xl mb-5 md:mb-6 group-hover:scale-110 transition-transform"><FaDesktop /></div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Custom Websites</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Tailor-made, lightning-fast websites designed to reflect your brand's premium identity and engage your specific target audience.</p>
          </div>
          <div className="glass-effect p-6 md:p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-colors group">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-xl flex items-center justify-center text-blue-400 text-xl md:text-2xl mb-5 md:mb-6 group-hover:scale-110 transition-transform"><FaMobileAlt /></div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Web Applications</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Complex, highly scalable web apps and dashboards built with modern frameworks to streamline your business operations.</p>
          </div>
          <div className="glass-effect p-6 md:p-8 rounded-2xl border border-white/5 hover:border-green-500/50 transition-colors group">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-xl flex items-center justify-center text-green-400 text-xl md:text-2xl mb-5 md:mb-6 group-hover:scale-110 transition-transform"><FaSearchDollar /></div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">E-Commerce & SEO</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Robust online stores optimized for search engines to ensure maximum visibility, seamless checkout, and higher sales.</p>
          </div>
        </div>
      </div>

      {/* Client Testimonials Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 md:mt-32">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">Client <span className="text-blue-400">Success Stories</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Don't just take our word for it. See how Shahid Web Studio has helped businesses achieve their digital goals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="glass-effect p-6 md:p-8 rounded-2xl border border-white/5 relative hover:border-white/10 transition-colors">
            <div className="flex gap-1 text-neonAccent mb-3 md:mb-4 text-sm md:text-base">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-5 md:mb-6 italic">"Shahid Web Studio completely transformed our online presence. Our sales have doubled since the new custom E-commerce website launched. Highly recommended for any serious business owner!"</p>
            <div className="flex items-center gap-3 md:gap-4 border-t border-white/10 pt-4 mt-auto">
              <div className="w-8 h-8 md:w-10 md:h-10 text-xs md:text-sm bg-blue-900/50 rounded-full flex items-center justify-center font-bold text-white border border-blue-500/30">AR</div>
              <div>
                <h4 className="text-white font-bold text-xs md:text-sm">Amit Rajput</h4>
                <p className="text-gray-500 text-[9px] md:text-xs uppercase tracking-wider">Retail Founder</p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-6 md:p-8 rounded-2xl border border-white/5 relative hover:border-white/10 transition-colors">
            <div className="flex gap-1 text-neonAccent mb-3 md:mb-4 text-sm md:text-base">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-5 md:mb-6 italic">"Professional, fast, and extremely talented. They understood exactly what our startup needed and delivered a high-performance web app before the deadline. The ROI has been incredible."</p>
            <div className="flex items-center gap-3 md:gap-4 border-t border-white/10 pt-4 mt-auto">
              <div className="w-8 h-8 md:w-10 md:h-10 text-xs md:text-sm bg-purple-900/50 rounded-full flex items-center justify-center font-bold text-white border border-purple-500/30">SK</div>
              <div>
                <h4 className="text-white font-bold text-xs md:text-sm">Sneha Kapoor</h4>
                <p className="text-gray-500 text-[9px] md:text-xs uppercase tracking-wider">Tech Startup CEO</p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-6 md:p-8 rounded-2xl border border-white/5 relative hover:border-white/10 transition-colors">
            <div className="flex gap-1 text-neonAccent mb-3 md:mb-4 text-sm md:text-base">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-5 md:mb-6 italic">"The design quality is unmatched. We were struggling to get leads with our old site, but the new landing page built by Shahid Web Studio converts traffic like crazy. A true game-changer!"</p>
            <div className="flex items-center gap-3 md:gap-4 border-t border-white/10 pt-4 mt-auto">
              <div className="w-8 h-8 md:w-10 md:h-10 text-xs md:text-sm bg-green-900/50 rounded-full flex items-center justify-center font-bold text-white border border-green-500/30">VM</div>
              <div>
                <h4 className="text-white font-bold text-xs md:text-sm">Vikram Mehta</h4>
                <p className="text-gray-500 text-[9px] md:text-xs uppercase tracking-wider">Real Estate Agent</p>
              </div>
            </div>
          </div>

          {dbTestimonials.map((testi) => (
            <div key={testi._id} className="glass-effect p-6 md:p-8 rounded-2xl border border-white/5 relative hover:border-white/10 transition-colors">
              <div className="flex gap-1 text-neonAccent mb-3 md:mb-4 text-sm md:text-base">
                {[...Array(testi.rating || 5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-5 md:mb-6 italic">"{testi.review}"</p>
              <div className="flex items-center gap-3 md:gap-4 border-t border-white/10 pt-4 mt-auto">
                {testi.image ? (
                  <img src={testi.image} alt={testi.clientName} className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-neonAccent/30" />
                ) : (
                  <div className="w-8 h-8 md:w-10 md:h-10 text-xs md:text-sm bg-blue-900/50 rounded-full flex items-center justify-center font-bold text-white border border-blue-500/30 uppercase">
                    {testi.clientName.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="text-white font-bold text-xs md:text-sm">{testi.clientName}</h4>
                  <p className="text-gray-500 text-[9px] md:text-xs uppercase tracking-wider">{testi.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 md:mt-32 mb-10">
        <div className="glass-effect rounded-3xl p-6 md:p-12 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-neonAccent to-transparent opacity-50"></div>
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">Ready to dominate your industry?</h2>
          <p className="text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-lg">
            Stop losing customers to your competitors because of an outdated website. Let's build a digital experience that drives real revenue.
          </p>
          <Link href="/contact" className="inline-flex justify-center px-6 py-3.5 md:px-8 md:py-4 bg-neonAccent text-black font-bold rounded-lg hover:scale-105 transition-transform relative z-10 w-full sm:w-auto text-sm md:text-base">
            Book a Free Consultation
          </Link>
        </div>
      </div>

    </div>
  );
}
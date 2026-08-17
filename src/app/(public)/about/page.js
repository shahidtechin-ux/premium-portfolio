"use client";
import { motion } from "framer-motion";
import { FaBullseye, FaHandshake, FaLightbulb, FaChartBar } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  const values = [
    {
      title: "Results-Driven Approach",
      desc: "We don't just write code; we engineer solutions that increase your conversion rates, drive traffic, and boost your bottom line.",
      icon: <FaChartBar className="text-blue-400 text-3xl" />
    },
    {
      title: "Uncompromising Quality",
      desc: "From pixel-perfect UI design to flawless backend architecture, we deliver A++ premium digital products that stand out in the market.",
      icon: <FaBullseye className="text-neonAccent text-3xl" />
    },
    {
      title: "Transparent Partnership",
      desc: "We believe in clear communication, honest deadlines, and working with you as a strategic partner, not just a service provider.",
      icon: <FaHandshake className="text-green-400 text-3xl" />
    },
    {
      title: "Forward-Thinking Tech",
      desc: "We leverage the latest and most robust technologies to ensure your platform is highly scalable, secure, and future-proof.",
      icon: <FaLightbulb className="text-purple-400 text-3xl" />
    }
  ];

  return (
    // FIX: py-20 ko pt-4 md:pt-12 pb-20 kar diya taaki layout.js ke pt-24 ke sath top gap badh na jaye
    <div className="relative min-h-screen pt-4 md:pt-12 pb-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neonAccent/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Story Section */}
        {/* FIX: pt-10 ko pt-2 md:pt-10 kiya */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-24 md:mb-32 pt-2 md:pt-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            {/* FIX: Sirf Is wrapper ko flex, items-center aur text-center kiya mobile ke liye. Desktop par left-aligned rahega */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-effect border border-white/10 mb-4 md:mb-6">
                <span className="text-neonAccent text-[10px] md:text-xs font-bold uppercase tracking-widest">Our Vision</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Redefining Digital <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-neonAccent to-blue-500">Excellence.</span>
              </h1>
            </div>

            {/* FIX: Paragraphs wahi text-left me hi rahenge taaki padhne me asaan ho */}
            <div className="space-y-5 md:space-y-6 text-gray-400 text-sm md:text-lg leading-relaxed text-left">
              <p>
                At <strong className="text-white">Shahid Web Studio</strong>, we recognized a massive gap in the digital industry. Too many businesses were settling for generic, template-based websites that looked okay but failed to generate real revenue.
              </p>
              <p>
                We were founded on a simple but powerful principle: <span className="text-gray-300 italic">"Your digital presence should be your most profitable asset."</span>
              </p>
              <p>
                Today, we act as the strategic technical arm for ambitious brands, startups, and enterprises. We combine high-end design aesthetics with robust, scalable engineering to build digital engines that drive unstoppable growth.
              </p>
            </div>
          </motion.div>

          {/* Premium Abstract Visual (Replaced personal developer emoji) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] w-full glass-effect rounded-2xl border border-white/10 overflow-hidden group mt-8 md:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0f1a] to-black z-0"></div>
            {/* Glowing Accents */}
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-blue-500/20 rounded-full blur-[80px] z-10"></div>
            <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-neonAccent/20 rounded-full blur-[80px] z-10"></div>
            
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
              <div className="w-24 h-24 md:w-32 md:h-32 mb-6 md:mb-8 relative flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-neonAccent/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-2 border-2 border-blue-500/50 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-black/50 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-black text-white tracking-wider">SWS</span>
                </div>
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-white tracking-widest uppercase mb-2">Shahid Web Studio</h3>
              <p className="text-neonAccent text-xs md:text-sm uppercase tracking-widest font-bold">Premium Digital Agency</p>
            </div>
          </motion.div>
        </div>

        {/* Core Values / Why Choose Us */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32"
        >
          <div className="text-center mb-12 md:mb-16">
            {/* FIX: Mobile optimized text sizes */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 uppercase tracking-widest">
              The Shahid Studio <span className="text-neonAccent">Advantage</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">What separates us from traditional freelancers and standard agencies.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => (
              <div key={index} className="glass-effect p-6 md:p-8 rounded-xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-2 group">
                <div className="mb-5 md:mb-6 bg-white/5 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 text-center border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
          {/* FIX: Mobile optimized text sizes */}
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">Let's Build Something Great Together</h2>
          <p className="text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-lg">
            Whether you are launching a new startup or scaling an existing enterprise, our team is ready to deliver digital excellence.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 md:px-10 md:py-4 bg-white text-black text-sm md:text-base font-bold rounded-lg hover:bg-neonAccent transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Schedule a Strategy Call
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
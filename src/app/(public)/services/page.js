"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLaptopCode, FaShoppingCart, FaSearchDollar, FaMobileAlt, FaServer, FaShieldAlt, FaArrowRight } from "react-icons/fa";

export default function Services() {
  // 1. Database se aane wali nayi services ke liye state
  const [dbServices, setDbServices] = useState([]);

  // 2. API fetch logic (Nayi services laane ke liye)
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/services");
        const data = await res.json();
        if (data.success) {
          setDbServices(data.services);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  // 3. Aapka original, perfect services array (Ise bilkul nahi chheda gaya hai)
  const staticServices = [
    {
      id: "web-dev",
      title: "Custom Web Development",
      icon: <FaLaptopCode className="text-neonAccent text-4xl" />,
      desc: "We build bespoke, lightning-fast websites from scratch. No bloated templates, just pure, optimized code tailored to your brand's unique identity.",
      features: ["Next.js & React Architectures", "Pixel-Perfect UI/UX", "High-Performance Servers", "CMS Integration"],
      gradient: "from-blue-900/50 to-black"
    },
    {
      id: "ecommerce",
      title: "E-Commerce Solutions",
      icon: <FaShoppingCart className="text-purple-400 text-4xl" />,
      desc: "Turn your visitors into loyal customers with highly secure, conversion-optimized online stores. We handle everything from product catalogs to payment gateways.",
      features: ["Stripe & Razorpay Setup", "Dynamic Product Filters", "Cart Abandonment Recovery", "Admin Order Dashboard"],
      gradient: "from-purple-900/50 to-black"
    },
    {
      id: "seo",
      title: "SEO & Growth Optimization",
      icon: <FaSearchDollar className="text-green-400 text-4xl" />,
      desc: "A beautiful website is useless if nobody sees it. We engineer your platform with technical SEO best practices to dominate Google rankings and drive organic traffic.",
      features: ["Technical Core Web Vitals", "Schema Markup", "On-Page Keyword Strategy", "Lightning Fast Load Times"],
      gradient: "from-green-900/50 to-black"
    },
    {
      id: "web-apps",
      title: "Complex Web Applications",
      icon: <FaServer className="text-blue-400 text-4xl" />,
      desc: "Need a custom SaaS platform, CRM, or a patient portal? We develop robust backend architectures capable of handling complex data and massive user scale.",
      features: ["Node.js & Java Spring Boot", "RESTful APIs", "Database Architecture", "Real-Time Data Sync"],
      gradient: "from-blue-800/50 to-black"
    }
  ];

  // 4. Purani static services aur nayi dbServices ko ek sath joda gaya hai
  const allServices = [...staticServices, ...dbServices];

  return (
    // FIX: py-20 ko pt-4 md:pt-12 pb-20 kar diya taaki layout.js ke pt-24 ke sath extra space na banaye
    <div className="relative min-h-screen pt-4 md:pt-12 pb-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-neonAccent/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -z-10" />

      {/* FIX: mt-10 ko mobile ke liye mt-2 kiya */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-2 md:mt-10">
        
        {/* Header Section */}
        {/* FIX: mb-20 ko mobile ke liye mb-12 kiya */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            // FIX: mb-6 ko mb-3 (mobile) kiya taaki label aur heading paas paas aayen
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-effect border border-white/10 mb-3 md:mb-6"
          >
            <span className="text-neonAccent text-[10px] md:text-xs font-bold uppercase tracking-widest">Our Expertise</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            // FIX: mb-6 ko mb-4 (mobile) kiya aur text size adjust kiya
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight"
          >
            Premium Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonAccent to-blue-500">Ambitious Brands</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-lg"
          >
            At Shahid Web Studio, we provide end-to-end digital services. Discover how our specialized engineering can help you dominate your market.
          </motion.p>
        </div>

        {/* Services Grid (Mapped with combined allServices) */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-24 md:mb-32">
          {allServices.map((service, index) => (
            <motion.div 
              key={service.id || service._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-effect rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all group bg-gradient-to-br ${service.gradient || "from-gray-900/50 to-black"}`}
            >
              <div className="p-8 md:p-10 h-full flex flex-col">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-black/50 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 mb-6 md:mb-8 shadow-lg group-hover:scale-110 transition-transform text-3xl md:text-4xl">
                  {typeof service.icon === 'string' ? <span>{service.icon}</span> : service.icon}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8 leading-relaxed flex-1">
                  {service.desc || service.description}
                </p>
                
                <div className="space-y-3 mb-6 md:mb-8">
                  {(Array.isArray(service.features) && service.features.length > 0 && typeof service.features[0] === 'string' && service.features[0].includes(',') 
                      ? service.features[0].split(',') 
                      : service.features || []
                  ).map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                      <FaShieldAlt className="text-neonAccent/50" /> {typeof feature === 'string' ? feature.trim() : feature}
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 text-white text-sm md:text-base font-bold hover:text-neonAccent transition-colors mt-auto w-fit border-b border-transparent hover:border-neonAccent pb-1">
                  Discuss This Service <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agency Process Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 uppercase tracking-widest">
              How We <span className="text-neonAccent">Execute</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Our streamlined process ensures maximum transparency and a flawless final product.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0"></div>
            
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business goals and analyzing the market." },
              { step: "02", title: "Architecture", desc: "Drafting the blueprint, UI wireframes, and tech stack." },
              { step: "03", title: "Development", desc: "Writing clean, scalable code and rigorous testing." },
              { step: "04", title: "Deployment", desc: "Launching your product and providing ongoing support." }
            ].map((process, index) => (
              <div key={index} className="relative z-10 glass-effect p-6 rounded-2xl border border-white/10 text-center hover:-translate-y-2 transition-transform bg-[#0a0a0a]">
                <div className="w-12 h-12 mx-auto bg-neonAccent text-black font-black rounded-full flex items-center justify-center text-xl mb-4 shadow-[0_0_15px_rgba(0,242,254,0.5)]">
                  {process.step}
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{process.title}</h4>
                <p className="text-gray-500 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 text-center border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">Need a custom solution?</h2>
          <p className="text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-lg">
            Don't see exactly what you're looking for? Let's chat. We can build custom software tailored specifically to your operational needs.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 md:px-10 md:py-4 bg-white text-black text-sm md:text-base font-bold rounded-lg hover:bg-neonAccent transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Request a Custom Quote
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
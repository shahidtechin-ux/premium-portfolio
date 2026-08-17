"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";

export default function PricingPage() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const res = await fetch("/api/pricing");
        const data = await res.json();
        if (data.success) {
          setPlans(data.plans);
        }
      } catch (error) {
        console.error("Error fetching pricing plans:", error);
      }
      setLoading(false);
    };
    fetchPricing();
  }, []);

  return (
    // FIX: pt-32 ko pt-4 md:pt-32 kiya taaki mobile par layout ki double padding na aaye
    <div className="relative min-h-screen bg-[#050505] text-white pt-4 md:pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neonAccent/10 blur-[150px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        {/* FIX: mb-20 ko mb-12 md:mb-20 kiya mobile ke liye */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            // FIX: mb-6 ko mb-4 md:mb-6 kiya label aur heading ko paas laane ke liye
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-white/10 mb-4 md:mb-6"
          >
            <span className="text-neonAccent text-xs font-bold uppercase tracking-widest">Investment</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            // FIX: mb-6 ko mb-4 md:mb-6 kiya
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight"
          >
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonAccent to-blue-500">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            No hidden fees, no surprises. Choose the perfect plan for your business needs and let's build something amazing together.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-neonAccent" />
          </div>
        ) : plans.length === 0 ? (
          <div className="text-center p-20 text-gray-500 glass-effect rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold mb-2">No Plans Available</h3>
            <p>Pricing plans will be updated soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div 
                key={plan._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-300 ${
                  plan.isPopular 
                    ? "bg-gradient-to-b from-[#111] to-black border-2 border-neonAccent shadow-[0_0_30px_rgba(0,242,254,0.15)] md:-translate-y-4 z-10" 
                    : "glass-effect border border-white/5 hover:border-white/20 bg-[#0a0a0a]/80 mt-0"
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neonAccent text-black font-extrabold text-xs px-4 py-2 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(0,242,254,0.5)]">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.planName}</h3>
                <p className="text-gray-400 text-sm mb-6 h-10">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl md:text-5xl font-extrabold text-white">{plan.price}</span>
                </div>

                <Link 
                  href="/contact" 
                  className={`block w-full text-center font-bold py-4 rounded-xl transition-all mb-8 ${
                    plan.isPopular 
                      ? "bg-neonAccent text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  Choose {plan.planName}
                </Link>

                {/* Features List */}
                <div className="space-y-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">What's included</p>
                  {(Array.isArray(plan.features) && plan.features.length > 0 && typeof plan.features[0] === 'string' && plan.features[0].includes(',') 
                    ? plan.features[0].split(',') 
                    : plan.features
                  ).map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <FaCheckCircle className="text-neonAccent mt-0.5 shrink-0" />
                      <span>{typeof feat === 'string' ? feat.trim() : feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [dbFaqs, setDbFaqs] = useState([]);

  // Database se naye FAQs fetch karne ke liye
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch("/api/faq");
        const data = await res.json();
        if (data.success) {
          setDbFaqs(data.faqs);
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };
    fetchFaqs();
  }, []);

  const staticFaqs = [
    {
      question: "How much does a custom website cost?",
      answer: "Every business is unique, and so are our solutions. Our pricing depends on the complexity, features, and scale of your project. We don't offer cheap, pre-made templates; instead, we engineer premium digital assets that guarantee a return on investment. Contact us for a customized quote tailored to your goals."
    },
    {
      question: "How long does it take to build a website?",
      answer: "A standard corporate website typically takes 2 to 4 weeks from discovery to launch. Complex web applications or massive E-commerce platforms can take 6 to 12 weeks. We ensure a realistic timeline during our initial strategy call and stick to it strictly."
    },
    {
      question: "Will my website be mobile-friendly and SEO optimized?",
      answer: "Absolutely. 100% of the platforms we build are fully responsive across all devices (mobile, tablet, desktop). Furthermore, we bake technical SEO into the core architecture, ensuring blazing-fast load times and perfect scores on Google Core Web Vitals."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! A digital platform needs constant care to perform at its peak. We offer monthly retainer packages that cover security updates, server maintenance, content updates, and performance monitoring so you can focus purely on your business."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, enterprise-grade tech stacks. For the frontend, we specialize in Next.js, React, and Tailwind CSS. For backend operations, we utilize Node.js, Express, and robust databases like MongoDB or PostgreSQL, ensuring your platform is scalable and secure."
    }
  ];

  // Purane static FAQs aur Admin panel se aaye dbFaqs ko ek sath jod diya hai
  const allFaqs = [...staticFaqs, ...dbFaqs];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // FIX: py-20 ko pt-4 md:pt-12 pb-20 kiya taaki layout.js ke extra space se gap na bane
    <div className="relative min-h-screen pt-4 md:pt-12 pb-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-neonAccent/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-10 left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] -z-10" />

      {/* FIX: mt-10 ko mt-2 md:mt-10 kiya */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 mt-2 md:mt-10">
        
        {/* Header Section */}
        {/* FIX: mb-16 ko mb-10 md:mb-16 kiya */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-effect border border-white/10 mb-4 md:mb-6"
          >
            <FaQuestionCircle className="text-neonAccent text-[10px] md:text-sm" />
            <span className="text-gray-300 text-[10px] md:text-xs font-bold uppercase tracking-widest">Knowledge Base</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            // FIX: Heading size optimized for mobile (text-3xl)
            className="text-3xl md:text-5xl font-extrabold text-white mb-4 md:mb-6 leading-tight"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonAccent to-blue-500">Questions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            // FIX: Text size optimized for mobile (text-sm)
            className="text-gray-400 text-sm md:text-lg"
          >
            Clear your doubts before we start building your next big digital platform.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {allFaqs.map((faq, index) => (
            <motion.div 
              key={faq._id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`glass-effect border ${openIndex === index ? 'border-neonAccent/50 bg-white/5' : 'border-white/10 hover:border-white/20'} rounded-2xl overflow-hidden transition-all duration-300`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <h3 className={`text-base md:text-lg font-bold pr-4 ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-neonAccent text-black' : 'bg-white/10 text-white'}`}>
                  {openIndex === index ? <FaMinus className="text-xs md:text-sm" /> : <FaPlus className="text-xs md:text-sm" />}
                </div>
              </button>
              
              <div 
                className={`px-5 md:px-6 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 pb-5 md:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400 text-sm md:text-base leading-relaxed pt-2 border-t border-white/5">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner at bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 md:mt-16 text-center glass-effect p-8 md:p-10 rounded-3xl border border-white/10"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Still have a question?</h2>
          <p className="text-gray-400 text-sm md:text-base mb-6">We are here to help. Reach out to us directly for a personalized consultation.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-neonAccent text-black text-sm md:text-base font-bold rounded-lg hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,242,254,0.3)]">
            Contact Support
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-neonAccent/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 mt-10 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Privacy <span className="text-neonAccent">Policy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-sm"
          >
            Last Updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
          </motion.p>
        </div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect p-8 md:p-12 rounded-3xl border border-white/5 bg-[#0a0a0a]/80 shadow-2xl relative z-20"
        >
          <div className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neonAccent"></span> Introduction
              </h2>
              <p>
                Welcome to Shahid Web Studio. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neonAccent"></span> Information We Collect
              </h2>
              <p className="mb-2">We may collect the following types of information when you interact with our website:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and any other details you provide via our contact forms.</li>
                <li><strong>Usage Data:</strong> Information about how you navigate and interact with our website (e.g., IP address, browser type, pages visited).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neonAccent"></span> How We Use Your Information
              </h2>
              <p className="mb-2">The information we collect is used in the following ways:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>To provide, operate, and maintain our web development services.</li>
                <li>To communicate with you regarding your projects, inquiries, or support requests.</li>
                <li>To improve our website's user experience and analyze traffic.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neonAccent"></span> Data Protection & Security
              </h2>
              <p>
                We implement strict security measures to protect your personal data from unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neonAccent"></span> Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party sites (e.g., social media platforms). We are not responsible for the privacy practices or content of these external sites. We encourage you to read their respective privacy policies.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8 mt-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neonAccent"></span> Contact Us
              </h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy, please feel free to reach out to us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10 inline-block">
                <p className="text-neonAccent font-medium">shahid.tech.in@gmail.com</p>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
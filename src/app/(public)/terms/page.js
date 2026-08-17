"use client";
import { motion } from "framer-motion";

export default function TermsOfService() {
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
            Terms of <span className="text-neonAccent">Service</span>
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
                <span className="w-1.5 h-1.5 rounded-full bg-neonAccent"></span> 1. Agreement to Terms
              </h2>
              <p>
                By accessing our website and utilizing the services provided by Shahid Web Studio, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neonAccent"></span> 2. Our Services
              </h2>
              <p>
                Shahid Web Studio specializes in premium web development, custom software solutions, and digital design. The specific details, scope, and timeline of any project will be outlined in a separate project proposal or contract signed by both parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neonAccent"></span> 3. Client Responsibilities
              </h2>
              <p className="mb-2">To ensure the successful and timely delivery of your project, you agree to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>Provide all necessary content, images, and brand assets in a timely manner.</li>
                <li>Review deliverables and provide feedback within the agreed-upon timeframes.</li>
                <li>Ensure you have the legal right to use any materials provided to us for the project.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neonAccent"></span> 4. Payment Terms
              </h2>
              <p>
                A standard upfront deposit is required before the commencement of any project. The remaining balance will be billed based on project milestones or upon completion, prior to the final handover or deployment of the website. All payments are non-refundable unless otherwise stated in the project contract.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neonAccent"></span> 5. Intellectual Property
              </h2>
              <p>
                Upon final payment, you will own the rights to the final website design and custom code built for your project. However, Shahid Web Studio reserves the right to display the completed work in our portfolio and marketing materials. We retain ownership of any pre-existing code libraries or third-party tools used.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neonAccent"></span> 6. Limitation of Liability
              </h2>
              <p>
                Shahid Web Studio shall not be liable for any indirect, incidental, or consequential damages arising out of or in connection with our services. We do not guarantee uninterrupted website hosting or zero downtime, as these rely on third-party server providers.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8 mt-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neonAccent"></span> Contact Information
              </h2>
              <p>
                If you have any questions regarding these Terms of Service, please contact us at:
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
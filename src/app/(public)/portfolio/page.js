"use client";
import { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaSpinner, FaChartLine, FaHeartbeat } from "react-icons/fa";
import Link from "next/link"; 

export default function PortfolioPage() {
  const [dbProjects, setDbProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/portfolio");
        const data = await res.json();
        if (data.success) {
          setDbProjects(data.projects);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
      setLoading(false);
    };
    fetchProjects();
  }, []);

  return (
    // FIX: pt-24 ko pt-4 md:pt-24 kiya, aur px-8 ko mobile ke liye px-6 kiya
    <div className="min-h-screen bg-[#050505] text-white pt-4 md:pt-24 pb-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* PREMIUM HEADER */}
        {/* FIX: mt-10 aur mb-20 ko mobile ke liye mt-2 aur mb-12 kiya */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 mt-2 md:mt-10">
          {/* FIX: padding aur margin mb-6 ko mb-4 kiya */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-effect border border-white/10 mb-4 md:mb-6">
            <span className="text-neonAccent text-[10px] md:text-xs font-bold uppercase tracking-widest">Our Work</span>
          </div>
          {/* FIX: text size ko baaki pages jaisa optimized rakha (text-3xl for mobile) */}
          <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonAccent to-blue-500">Projects</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-lg">
            Explore our latest web and mobile app development projects. We transform complex challenges into elegant digital solutions.
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-neonAccent" />
          </div>
        ) : dbProjects.length === 0 ? (
          <div className="text-center text-gray-500 h-64 flex items-center justify-center border border-white/5 rounded-3xl bg-[#111]">
            <p>No projects found. Please add some from the Admin Panel.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dbProjects.map((project) => (
              <div key={project._id} className="bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all group relative flex flex-col h-full shadow-lg hover:shadow-[0_0_30px_rgba(0,242,254,0.1)]">
                
                {/* Image Section */}
                {project.image ? (
                  <div className="h-64 overflow-hidden relative shrink-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {project.link && (
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a href={project.link} target="_blank" rel="noreferrer" className="bg-neonAccent text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform text-sm md:text-base">
                          View Live Site <FaExternalLinkAlt size={12} />
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={`h-64 bg-gradient-to-br from-gray-800 to-black relative shrink-0 flex items-center justify-center p-6 text-center`}>
                     <h3 className="text-2xl font-bold opacity-50">{project.title}</h3>
                  </div>
                )}
                
                {/* FIX: p-10 ko p-6 md:p-10 kiya taaki mobile par card text zyada space na le */}
                <div className="p-6 md:p-10 flex-1 flex flex-col bg-gradient-to-b from-transparent to-black/50">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base leading-relaxed flex-1">{project.description}</p>
                  
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="text-[10px] md:text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-md text-gray-300">
                           {tech.includes(',') ? tech.split(',')[0].trim() : tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action Section */}
        {/* FIX: mt-32 ko mt-20 kiya mobile ke liye */}
        <div className="mt-20 md:mt-32 glass-effect rounded-3xl p-8 md:p-12 text-center border border-white/10 relative overflow-hidden bg-gradient-to-b from-[#111] to-black mb-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-neonAccent to-transparent opacity-50"></div>
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">Inspired by our work?</h2>
          <p className="text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-lg">
            Every great project starts with a simple conversation. Let's collaborate to turn your vision into a digital masterpiece.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 md:px-10 md:py-4 bg-neonAccent text-black text-sm md:text-base font-bold rounded-lg hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,242,254,0.2)]">
            Start Your Project
          </Link>
        </div>

      </div>
    </div>
  );
}
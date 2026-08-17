"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaEnvelope, FaBriefcase, FaConciergeBell, FaTags, 
  FaStar, FaQuestionCircle, FaImages, 
  FaCog, FaSearch, FaShareAlt, FaSignOutAlt, FaPlus, FaTimes, FaSpinner, FaExternalLinkAlt, FaTrash, FaCheckCircle, FaBars
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function MasterDashboard() {
  const [activeTab, setActiveTab] = useState("leads");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile Menu State
  const [uploading, setUploading] = useState(false);
  
  // Leads States
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  // Portfolio States
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "", image: "", link: "", techStack: "", category: "" });

  // Services States
  const [services, setServices] = useState([]);
  const [loadingServices, setLoadingServices] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [serviceFormData, setServiceFormData] = useState({ title: "", description: "", icon: "", features: "" });

  // Pricing States
  const [plans, setPlans] = useState([]);
  const [loadingPricing, setLoadingPricing] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [pricingFormData, setPricingFormData] = useState({ planName: "", price: "", description: "", features: "", isPopular: false });

  // Testimonials States
  const [testimonials, setTestimonials] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(false);
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [testimonialFormData, setTestimonialFormData] = useState({ clientName: "", company: "", review: "", rating: 5, image: "" });

  // FAQ States
  const [faqs, setFaqs] = useState([]);
  const [loadingFaqs, setLoadingFaqs] = useState(false);
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [faqFormData, setFaqFormData] = useState({ question: "", answer: "" });

  // Media & Images States
  const [media, setMedia] = useState([]);
  const [loadingMedia, setLoadingMedia] = useState(false);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [mediaFormData, setMediaFormData] = useState({ title: "", url: "" });

  // Website Settings States
  const [settings, setSettings] = useState({ siteName: "", tagline: "", email: "", phone: "", address: "" });
  const [loadingSettings, setLoadingSettings] = useState(false);

  // SEO Settings States
  const [seoSettings, setSeoSettings] = useState({ metaTitle: "", metaDescription: "", keywords: "" });
  const [loadingSeo, setLoadingSeo] = useState(false);

  // Social Links States
  const [socialSettings, setSocialSettings] = useState({ instagram: "", linkedin: "", github: "", twitter: "", facebook: "", youtube: "" });
  const [loadingSocial, setLoadingSocial] = useState(false);

  // Admin Menu List
  const menuItems = [
    { id: "leads", name: "Leads / Contacts", icon: <FaEnvelope /> },
    { id: "portfolio", name: "Portfolio", icon: <FaBriefcase /> },
    { id: "services", name: "Services", icon: <FaConciergeBell /> },
    { id: "pricing", name: "Pricing", icon: <FaTags /> },
    { id: "testimonials", name: "Testimonials", icon: <FaStar /> },
    { id: "faq", name: "FAQ", icon: <FaQuestionCircle /> },
    { id: "images", name: "Media & Images", icon: <FaImages /> },
    { id: "seo", name: "SEO Settings", icon: <FaSearch /> },
    { id: "social", name: "Social Links", icon: <FaShareAlt /> },
    { id: "settings", name: "Website Settings", icon: <FaCog /> },
  ];

  // Fetch Data Based on Active Tab
  useEffect(() => {
    if (activeTab === "leads") fetchLeads();
    if (activeTab === "portfolio") fetchProjects();
    if (activeTab === "services") fetchServices();
    if (activeTab === "pricing") fetchPricing();
    if (activeTab === "testimonials") fetchTestimonials();
    if (activeTab === "faq") fetchFaqs();
    if (activeTab === "images") fetchMedia();
    if (activeTab === "settings") fetchSettings();
    if (activeTab === "seo") fetchSeo();
    if (activeTab === "social") fetchSocial();
  }, [activeTab]);

  /* ================= FETCH FUNCTIONS ================= */
  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      if (data.success) setLeads(data.leads);
    } catch (error) { console.error("Failed to fetch leads", error); }
    setLoading(false);
  };

  const fetchProjects = async () => {
    setLoadingProjects(true);
    try {
      const res = await fetch("/api/portfolio");
      const data = await res.json();
      if (data.success) setProjects(data.projects);
    } catch (error) { console.error("Failed to fetch projects", error); }
    setLoadingProjects(false);
  };

  const fetchServices = async () => {
    setLoadingServices(true);
    try {
      const res = await fetch("/api/services");
      const data = await res.json();
      if (data.success) setServices(data.services);
    } catch (error) { console.error("Failed to fetch services", error); }
    setLoadingServices(false);
  };

  const fetchPricing = async () => {
    setLoadingPricing(true);
    try {
      const res = await fetch("/api/pricing");
      const data = await res.json();
      if (data.success) setPlans(data.plans);
    } catch (error) { console.error("Failed to fetch pricing plans", error); }
    setLoadingPricing(false);
  };

  const fetchTestimonials = async () => {
    setLoadingTestimonials(true);
    try {
      const res = await fetch("/api/testimonials");
      const data = await res.json();
      if (data.success) setTestimonials(data.testimonials);
    } catch (error) { console.error("Failed to fetch testimonials", error); }
    setLoadingTestimonials(false);
  };

  const fetchFaqs = async () => {
    setLoadingFaqs(true);
    try {
      const res = await fetch("/api/faq");
      const data = await res.json();
      if (data.success) setFaqs(data.faqs);
    } catch (error) { console.error("Failed to fetch FAQs", error); }
    setLoadingFaqs(false);
  };

  const fetchMedia = async () => {
    setLoadingMedia(true);
    try {
      const res = await fetch("/api/media");
      const data = await res.json();
      if (data.success) setMedia(data.media);
    } catch (error) { console.error("Failed to fetch media", error); }
    setLoadingMedia(false);
  };

  const fetchSettings = async () => {
    setLoadingSettings(true);
    try {
      const res = await fetch("/api/settings");
      const data = await res.json();
      if (data.success && data.setting) {
        setSettings(data.setting);
      }
    } catch (error) { console.error("Failed to fetch settings", error); }
    setLoadingSettings(false);
  };

  const fetchSeo = async () => {
    setLoadingSeo(true);
    try {
      const res = await fetch("/api/seo");
      const data = await res.json();
      if (data.success && data.seo) {
        setSeoSettings(data.seo);
      }
    } catch (error) { console.error("Failed to fetch SEO settings", error); }
    setLoadingSeo(false);
  };

  const fetchSocial = async () => {
    setLoadingSocial(true);
    try {
      const res = await fetch("/api/social");
      const data = await res.json();
      if (data.success && data.social) {
        setSocialSettings(data.social);
      }
    } catch (error) { console.error("Failed to fetch social links", error); }
    setLoadingSocial(false);
  };

  /* ================= SUBMIT & DELETE FUNCTIONS ================= */
  
  // Portfolio
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
    setUploading(true);
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, { method: "POST", body: data });
      const fileData = await res.json();
      setFormData({ ...formData, image: fileData.secure_url });
    } catch (error) { alert("Image upload failed."); }
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) return alert("Please wait for the image to upload first!");
    const res = await fetch("/api/portfolio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, techStack: formData.techStack.split(",") }),
    });
    if (res.ok) {
      setIsModalOpen(false);
      setFormData({ title: "", description: "", image: "", link: "", techStack: "", category: "" });
      alert("Project Added!");
      fetchProjects(); 
    }
  };

  const deleteProject = async (id) => {
    if (!confirm("Are you sure?")) return;
    const res = await fetch(`/api/portfolio?id=${id}`, { method: "DELETE" });
    if (res.ok) fetchProjects();
  };

  // Services
  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...serviceFormData, features: serviceFormData.features.split(",") }),
    });
    if (res.ok) {
      setIsServiceModalOpen(false);
      setServiceFormData({ title: "", description: "", icon: "", features: "" });
      alert("Service Added!");
      fetchServices(); 
    }
  };

  const deleteService = async (id) => {
    if (!confirm("Are you sure?")) return;
    const res = await fetch(`/api/services?id=${id}`, { method: "DELETE" });
    if (res.ok) fetchServices();
  };

  // Pricing
  const handlePricingSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/pricing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...pricingFormData, features: pricingFormData.features.split(",") }),
    });
    if (res.ok) {
      setIsPricingModalOpen(false);
      setPricingFormData({ planName: "", price: "", description: "", features: "", isPopular: false });
      alert("Plan Added!");
      fetchPricing(); 
    }
  };

  const deletePricing = async (id) => {
    if (!confirm("Are you sure?")) return;
    const res = await fetch(`/api/pricing?id=${id}`, { method: "DELETE" });
    if (res.ok) fetchPricing();
  };

  // Testimonials
  const uploadTestimonialImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
    setUploading(true);
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, { method: "POST", body: data });
      const fileData = await res.json();
      setTestimonialFormData({ ...testimonialFormData, image: fileData.secure_url });
    } catch (error) { alert("Image upload failed."); }
    setUploading(false);
  };

  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/testimonials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testimonialFormData),
    });
    if (res.ok) {
      setIsTestimonialModalOpen(false);
      setTestimonialFormData({ clientName: "", company: "", review: "", rating: 5, image: "" });
      alert("Testimonial Added!");
      fetchTestimonials(); 
    }
  };

  const deleteTestimonial = async (id) => {
    if (!confirm("Are you sure?")) return;
    const res = await fetch(`/api/testimonials?id=${id}`, { method: "DELETE" });
    if (res.ok) fetchTestimonials();
  };

  // FAQ
  const handleFaqSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/faq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(faqFormData),
    });
    if (res.ok) {
      setIsFaqModalOpen(false);
      setFaqFormData({ question: "", answer: "" });
      alert("FAQ Added Successfully!");
      fetchFaqs(); 
    }
  };

  const deleteFaq = async (id) => {
    if (!confirm("Are you sure you want to delete this FAQ?")) return;
    const res = await fetch(`/api/faq?id=${id}`, { method: "DELETE" });
    if (res.ok) fetchFaqs();
  };

  // Media
  const uploadMediaImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
    setUploading(true);
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, { method: "POST", body: data });
      const fileData = await res.json();
      setMediaFormData({ ...mediaFormData, url: fileData.secure_url });
    } catch (error) { alert("Image upload failed."); }
    setUploading(false);
  };

  const handleMediaSubmit = async (e) => {
    e.preventDefault();
    if (!mediaFormData.url) return alert("Please wait for the image to upload first!");
    const res = await fetch("/api/media", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mediaFormData),
    });
    if (res.ok) {
      setIsMediaModalOpen(false);
      setMediaFormData({ title: "", url: "" });
      alert("Image Saved Successfully!");
      fetchMedia();
    }
  };

  const deleteMedia = async (id) => {
    if (!confirm("Are you sure you want to delete this image?")) return;
    const res = await fetch(`/api/media?id=${id}`, { method: "DELETE" });
    if (res.ok) fetchMedia();
  };

  // Settings Submit
  const handleSettingsSubmit = async (e) => {
    e.preventDefault();
    setLoadingSettings(true);
    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        alert("Website Settings Updated Successfully!");
        fetchSettings();
      }
    } catch (error) {
      console.error("Failed to save settings", error);
    }
    setLoadingSettings(false);
  };

  // SEO Submit
  const handleSeoSubmit = async (e) => {
    e.preventDefault();
    setLoadingSeo(true);
    try {
      const res = await fetch("/api/seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(seoSettings),
      });
      if (res.ok) {
        alert("SEO Settings Updated Successfully!");
        fetchSeo();
      }
    } catch (error) {
      console.error("Failed to save SEO settings", error);
    }
    setLoadingSeo(false);
  };

  // Social Links Submit
  const handleSocialSubmit = async (e) => {
    e.preventDefault();
    setLoadingSocial(true);
    try {
      const res = await fetch("/api/social", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(socialSettings),
      });
      if (res.ok) {
        alert("Social Links Updated Successfully!");
        fetchSocial();
      }
    } catch (error) {
      console.error("Failed to save social links", error);
    }
    setLoadingSocial(false);
  };

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden relative">
      
      {/* 📱 MOBILE OVERLAY (Darkens background when sidebar is open) */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/80 z-40 backdrop-blur-sm" 
          onClick={() => setIsSidebarOpen(false)} 
        />
      )}

      {/* 🚀 MASTER SIDEBAR */}
      <aside 
        className={`fixed md:relative top-0 left-0 h-full w-72 z-50 glass-effect border-r border-white/5 flex flex-col bg-[#0a0a0a]/95 transition-transform duration-300 shadow-[10px_0_30px_rgba(0,0,0,0.5)] md:shadow-none ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        
        {/* 🌟 PREMIUM LOGO SECTION */}
        <div className="p-6 border-b border-white/5 flex items-center gap-3 group relative">
          
          {/* Mobile Close Button */}
          <button 
            className="md:hidden absolute top-4 right-4 text-gray-500 hover:text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes />
          </button>

          {/* Animated Box */}
          <div className="relative w-10 h-10 shrink-0">
            <div className="absolute inset-0 rounded-[10px] bg-[#00f2fe]/40 blur-[10px] opacity-80 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-gradient-to-br from-[#00f2fe] to-[#0077ff] border border-white/40 shadow-inner group-hover:shadow-[0_0_20px_rgba(0,242,254,0.6)] transition-all duration-500">
              
              {/* Box Shine */}
              <motion.div
                initial={{ x: "-150%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatDelay: 4 }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-[30deg] z-[60] pointer-events-none opacity-90"
              />
              <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/70 to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
              
              <svg viewBox="0 0 100 100" className="relative w-full h-full p-[7px] z-20 group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M72 18 H43 C29 18 21 26 21 37 C21 48 29 54 41 57 L58 61 C63 62 66 65 66 69 C66 73 62 77 56 77 H28" stroke="#ffffff" strokeWidth="12" strokeLinecap="square" strokeLinejoin="miter" />
                <path d="M28 82 H57 C71 82 79 74 79 63 C79 52 71 46 59 43 L42 39 C37 38 34 35 34 31 C34 27 38 23 44 23 H72" stroke="#ffffff" strokeWidth="12" strokeLinecap="square" strokeLinejoin="miter" />
                <path d="M35 50L50 42L65 50L50 58L35 50Z" fill="#ffffff" />
              </svg>
            </div>
          </div>

          {/* Animated Text */}
          <div className="relative flex flex-col justify-center overflow-hidden py-1 px-2 -ml-2 rounded-lg">
            {/* Line Shine */}
            <motion.div
              initial={{ x: "-200%" }}
              animate={{ x: "400%" }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 3.5 }}
              className="absolute top-0 left-0 w-[30px] h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-[30deg] z-[60] pointer-events-none opacity-80"
            />
            <span className="relative z-10 text-[19px] font-black uppercase leading-none tracking-[0.16em] text-[#00f2fe] drop-shadow-[0_0_8px_rgba(0,242,254,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(0,242,254,0.7)] transition-all duration-300">
              SHAHID
            </span>
            <span className="relative z-10 flex items-center mt-[4px]">
              <span className="w-2.5 h-[2px] rounded-full bg-[#00f2fe] mr-1.5 shadow-[0_0_5px_rgba(0,242,254,0.5)]" />
              <span className="text-[8px] font-extrabold text-white uppercase tracking-[0.20em] leading-none">ADMIN</span>
            </span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
          {menuItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => { 
                setActiveTab(item.id);
                setIsSidebarOpen(false); // Mobile pe click karte hi sidebar band ho jayega
              }} 
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${ activeTab === item.id ? "bg-neonAccent text-black font-bold shadow-[0_0_10px_rgba(0,242,254,0.3)]" : "text-gray-400 hover:bg-white/5 hover:text-white" }`}
            >
              <span className="text-lg">{item.icon}</span> {item.name}
            </button>
          ))}
        </nav>
        
        {/* Secure Logout */}
        <div className="p-4 border-t border-white/5 bg-black/50">
          <Link href="/admin/login" className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-all text-sm font-medium">
            <FaSignOutAlt /> Secure Logout
          </Link>
        </div>
      </aside>

      {/* ➡️ MAIN DYNAMIC CONTENT AREA */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative w-full">
        
        {/* 📱 MOBILE TOP HEADER (Sirf mobile pe dikhega) */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-white/5 bg-[#0a0a0a]/95 sticky top-0 z-30 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-[8px] bg-gradient-to-br from-[#00f2fe] to-[#0077ff] flex items-center justify-center font-bold text-white shadow-[0_0_10px_rgba(0,242,254,0.4)]">S</div>
            <div className="font-black text-[#00f2fe] tracking-widest text-lg leading-none">SHAHID<span className="text-white text-xs block tracking-[0.2em] mt-0.5">ADMIN</span></div>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(true)} 
            className="p-2 border border-[#00f2fe]/30 bg-[#00f2fe]/10 rounded-lg text-[#00f2fe] hover:bg-[#00f2fe] hover:text-black transition-colors"
          >
            <FaBars size={20} />
          </button>
        </div>

        {/* Main Workspace */}
        <div className="p-4 md:p-8 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-neonAccent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

          <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8 border-b border-white/5 pb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white capitalize">{activeTab.replace('-', ' ')} Management</h1>
              <p className="text-gray-400 text-xs md:text-sm mt-1">Manage your {activeTab} data directly from here.</p>
            </div>
            
            {/* Action Buttons based on Active Tab */}
            {activeTab === "portfolio" && (
              <button onClick={() => setIsModalOpen(true)} className="glass-effect px-4 py-2 rounded-lg border border-neonAccent/50 text-neonAccent font-bold flex items-center justify-center gap-2 hover:bg-neonAccent hover:text-black transition-all shadow-[0_0_15px_rgba(0,242,254,0.1)] w-full md:w-auto"><FaPlus /> Add New Project</button>
            )}
            {activeTab === "services" && (
              <button onClick={() => setIsServiceModalOpen(true)} className="glass-effect px-4 py-2 rounded-lg border border-neonAccent/50 text-neonAccent font-bold flex items-center justify-center gap-2 hover:bg-neonAccent hover:text-black transition-all shadow-[0_0_15px_rgba(0,242,254,0.1)] w-full md:w-auto"><FaPlus /> Add New Service</button>
            )}
            {activeTab === "pricing" && (
              <button onClick={() => setIsPricingModalOpen(true)} className="glass-effect px-4 py-2 rounded-lg border border-neonAccent/50 text-neonAccent font-bold flex items-center justify-center gap-2 hover:bg-neonAccent hover:text-black transition-all shadow-[0_0_15px_rgba(0,242,254,0.1)] w-full md:w-auto"><FaPlus /> Add New Plan</button>
            )}
            {activeTab === "testimonials" && (
              <button onClick={() => setIsTestimonialModalOpen(true)} className="glass-effect px-4 py-2 rounded-lg border border-neonAccent/50 text-neonAccent font-bold flex items-center justify-center gap-2 hover:bg-neonAccent hover:text-black transition-all shadow-[0_0_15px_rgba(0,242,254,0.1)] w-full md:w-auto"><FaPlus /> Add Testimonial</button>
            )}
            {activeTab === "faq" && (
              <button onClick={() => setIsFaqModalOpen(true)} className="glass-effect px-4 py-2 rounded-lg border border-neonAccent/50 text-neonAccent font-bold flex items-center justify-center gap-2 hover:bg-neonAccent hover:text-black transition-all shadow-[0_0_15px_rgba(0,242,254,0.1)] w-full md:w-auto"><FaPlus /> Add FAQ</button>
            )}
            {activeTab === "images" && (
              <button onClick={() => setIsMediaModalOpen(true)} className="glass-effect px-4 py-2 rounded-lg border border-neonAccent/50 text-neonAccent font-bold flex items-center justify-center gap-2 hover:bg-neonAccent hover:text-black transition-all shadow-[0_0_15px_rgba(0,242,254,0.1)] w-full md:w-auto"><FaPlus /> Add New Image</button>
            )}
          </header>

          {/* 1. Leads View */}
          {activeTab === "leads" && (
            <div className="glass-effect rounded-2xl border border-white/5 overflow-hidden bg-[#0a0a0a]/50">
              {loading ? <div className="flex justify-center p-20"><FaSpinner className="animate-spin text-4xl text-neonAccent" /></div>
              : leads.length === 0 ? <div className="text-center p-20 text-gray-500">No Leads Found</div> : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm min-w-[800px]">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5 text-gray-400 text-xs uppercase tracking-wider">
                        <th className="p-4 font-bold">Client Name</th><th className="p-4 font-bold">Email</th>
                        <th className="p-4 font-bold">WhatsApp</th><th className="p-4 font-bold">Message</th><th className="p-4 font-bold">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {leads.map((lead) => (
                        <tr key={lead._id} className="hover:bg-white/5 transition-colors">
                          <td className="p-4 font-bold text-white">{lead.name}</td>
                          <td className="p-4"><a href={`mailto:${lead.email}`} className="text-neonAccent hover:underline">{lead.email}</a></td>
                          <td className="p-4">{lead.whatsapp ? <a href={`https://wa.me/${lead.whatsapp}`} target="_blank" className="text-green-400 hover:underline">{lead.whatsapp}</a> : "N/A"}</td>
                          <td className="p-4 text-gray-400 max-w-xs truncate">{lead.message}</td>
                          <td className="p-4 text-gray-500 text-xs">{new Date(lead.createdAt).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* 2. Portfolio View */}
          {activeTab === "portfolio" && (
            <div>
              {loadingProjects ? <div className="flex justify-center p-20"><FaSpinner className="animate-spin text-4xl text-neonAccent" /></div>
              : projects.length === 0 ? <div className="text-center p-20 text-gray-500">Portfolio is Empty</div> : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <div key={project._id} className="glass-effect rounded-2xl overflow-hidden border border-white/5 relative group bg-[#0a0a0a]/80">
                      <button onClick={() => deleteProject(project._id)} className="absolute top-3 right-3 bg-red-600 p-2 rounded-full text-white hover:bg-red-800 z-20"><FaTrash size={14} /></button>
                      <div className="h-48 overflow-hidden relative"><img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                      <div className="p-6 relative">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 3. Services View */}
          {activeTab === "services" && (
            <div>
              {loadingServices ? <div className="flex justify-center p-20"><FaSpinner className="animate-spin text-4xl text-neonAccent" /></div>
              : services.length === 0 ? <div className="text-center p-20 text-gray-500"><FaConciergeBell className="text-5xl mx-auto mb-4 opacity-30" />No Services Added Yet.</div> : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <div key={service._id} className="glass-effect rounded-2xl p-6 border border-white/5 relative group bg-[#0a0a0a]/80 hover:border-neonAccent/50 transition-all">
                      <button onClick={() => deleteService(service._id)} className="absolute top-4 right-4 text-red-500 hover:text-red-400 p-2"><FaTrash size={14} /></button>
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                        <span className="text-neonAccent bg-neonAccent/10 p-2 rounded-lg">{service.icon || <FaConciergeBell />}</span> 
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                      {service.features && service.features.length > 0 && (
                        <ul className="space-y-1">
                          {(Array.isArray(service.features) && service.features.length > 0 && typeof service.features[0] === 'string' && service.features[0].includes(',') ? service.features[0].split(',') : service.features).map((feat, i) => (
                            <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-neonAccent"></span> {typeof feat === 'string' ? feat.trim() : feat}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 4. Pricing View */}
          {activeTab === "pricing" && (
            <div>
              {loadingPricing ? <div className="flex justify-center p-20"><FaSpinner className="animate-spin text-4xl text-neonAccent" /></div>
              : plans.length === 0 ? <div className="text-center p-20 text-gray-500"><FaTags className="text-5xl mx-auto mb-4 opacity-30" />No Pricing Plans Added Yet.</div> : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {plans.map((plan) => (
                    <div key={plan._id} className={`glass-effect rounded-2xl p-6 md:p-8 border relative group bg-[#0a0a0a]/80 transition-all ${plan.isPopular ? 'border-neonAccent shadow-[0_0_20px_rgba(0,242,254,0.15)] mt-4 md:mt-0' : 'border-white/5 hover:border-white/20'}`}>
                      {plan.isPopular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neonAccent text-black text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">Most Popular</div>}
                      <button onClick={() => deletePricing(plan._id)} className="absolute top-4 right-4 text-red-500 hover:text-red-400 p-2"><FaTrash size={14} /></button>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 pr-6">{plan.planName}</h3>
                      <p className="text-xs md:text-sm text-gray-400 mb-6">{plan.description}</p>
                      <div className="text-3xl md:text-4xl font-extrabold text-white mb-8">{plan.price}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 5. Testimonials View */}
          {activeTab === "testimonials" && (
            <div>
              {loadingTestimonials ? <div className="flex justify-center p-20"><FaSpinner className="animate-spin text-4xl text-neonAccent" /></div>
              : testimonials.length === 0 ? <div className="text-center p-20 text-gray-500"><FaStar className="text-5xl mx-auto mb-4 opacity-30" />No Testimonials Added Yet.</div> : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testimonials.map((testi) => (
                    <div key={testi._id} className="glass-effect rounded-2xl p-6 border border-white/5 relative group bg-[#0a0a0a]/80 hover:border-neonAccent/50 transition-all">
                      <button onClick={() => deleteTestimonial(testi._id)} className="absolute top-4 right-4 text-red-500 hover:text-red-400 p-2"><FaTrash size={14} /></button>
                      
                      <div className="flex items-center gap-4 mb-4">
                        {testi.image ? (
                          <img src={testi.image} alt={testi.clientName} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-neonAccent/20 flex items-center justify-center text-neonAccent font-bold text-xl border border-neonAccent/30 uppercase">
                            {testi.clientName.charAt(0)}
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg font-bold text-white leading-tight">{testi.clientName}</h3>
                          <p className="text-xs text-gray-400">{testi.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-3 text-neonAccent text-sm">
                        {[...Array(testi.rating || 5)].map((_, i) => <FaStar key={i} />)}
                      </div>
                      
                      <p className="text-sm text-gray-300 italic">"{testi.review}"</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 6. FAQ View */}
          {activeTab === "faq" && (
            <div>
              {loadingFaqs ? <div className="flex justify-center p-20"><FaSpinner className="animate-spin text-4xl text-neonAccent" /></div>
              : faqs.length === 0 ? <div className="text-center p-20 text-gray-500"><FaQuestionCircle className="text-5xl mx-auto mb-4 opacity-30" />No FAQs Added Yet.</div> : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {faqs.map((faq) => (
                    <div key={faq._id} className="glass-effect rounded-2xl p-6 border border-white/5 relative group bg-[#0a0a0a]/80 hover:border-neonAccent/50 transition-all">
                      <button onClick={() => deleteFaq(faq._id)} className="absolute top-4 right-4 text-red-500 hover:text-red-400 p-2"><FaTrash size={14} /></button>
                      <h3 className="text-lg font-bold text-white mb-2 pr-8">{faq.question}</h3>
                      <p className="text-sm text-gray-400">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 7. Media & Images View */}
          {activeTab === "images" && (
            <div>
              {loadingMedia ? <div className="flex justify-center p-20"><FaSpinner className="animate-spin text-4xl text-neonAccent" /></div>
              : media.length === 0 ? <div className="text-center p-20 text-gray-500"><FaImages className="text-5xl mx-auto mb-4 opacity-30" />No Media Uploaded Yet.</div> : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {media.map((img) => (
                    <div key={img._id} className="glass-effect rounded-2xl p-3 md:p-4 border border-white/5 relative group bg-[#0a0a0a]/80 hover:border-neonAccent/50 transition-all">
                      <button onClick={() => deleteMedia(img._id)} className="absolute top-3 right-3 bg-red-600 p-2 rounded-full text-white hover:bg-red-800 z-20"><FaTrash size={12} /></button>
                      <div className="h-32 md:h-40 rounded-xl overflow-hidden mb-3 border border-white/10">
                        <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <h3 className="text-xs md:text-sm font-bold text-white truncate">{img.title}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 8. Website Settings View */}
          {activeTab === "settings" && (
            <div className="w-full lg:max-w-xl glass-effect p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0a]/50">
              {loadingSettings ? (
                <div className="flex justify-center p-10"><FaSpinner className="animate-spin text-3xl text-neonAccent" /></div>
              ) : (
                <form onSubmit={handleSettingsSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Site Name</label>
                    <input type="text" className="w-full bg-white/5 p-3 rounded text-white border border-transparent focus:border-neonAccent outline-none text-sm md:text-base" value={settings.siteName} onChange={(e) => setSettings({...settings, siteName: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Tagline</label>
                    <input type="text" className="w-full bg-white/5 p-3 rounded text-white border border-transparent focus:border-neonAccent outline-none text-sm md:text-base" value={settings.tagline} onChange={(e) => setSettings({...settings, tagline: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Email</label>
                    <input type="email" className="w-full bg-white/5 p-3 rounded text-white border border-transparent focus:border-neonAccent outline-none text-sm md:text-base" value={settings.email} onChange={(e) => setSettings({...settings, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Phone</label>
                    <input type="text" className="w-full bg-white/5 p-3 rounded text-white border border-transparent focus:border-neonAccent outline-none text-sm md:text-base" value={settings.phone} onChange={(e) => setSettings({...settings, phone: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Address</label>
                    <textarea className="w-full bg-white/5 p-3 rounded text-white border border-transparent focus:border-neonAccent outline-none text-sm md:text-base" value={settings.address} onChange={(e) => setSettings({...settings, address: e.target.value})} />
                  </div>
                  <button type="submit" disabled={loadingSettings} className="w-full font-bold py-3 rounded mt-2 bg-neonAccent text-black hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all">
                    Save Settings
                  </button>
                </form>
              )}
            </div>
          )}

          {/* 9. SEO Settings View */}
          {activeTab === "seo" && (
            <div className="w-full lg:max-w-xl glass-effect p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0a]/50">
              {loadingSeo ? (
                <div className="flex justify-center p-10"><FaSpinner className="animate-spin text-3xl text-neonAccent" /></div>
              ) : (
                <form onSubmit={handleSeoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Meta Title</label>
                    <input type="text" className="w-full bg-white/5 p-3 rounded text-white border border-transparent focus:border-neonAccent outline-none text-sm md:text-base" value={seoSettings.metaTitle} onChange={(e) => setSeoSettings({...seoSettings, metaTitle: e.target.value})} placeholder="e.g. Shahid Web Studio - Premium Web Design" required />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Meta Description</label>
                    <textarea className="w-full bg-white/5 p-3 rounded text-white border border-transparent focus:border-neonAccent outline-none min-h-[100px] text-sm md:text-base" value={seoSettings.metaDescription} onChange={(e) => setSeoSettings({...seoSettings, metaDescription: e.target.value})} placeholder="Write a short description that appears on Google search results..." required />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Keywords</label>
                    <input type="text" className="w-full bg-white/5 p-3 rounded text-white border border-transparent focus:border-neonAccent outline-none text-sm md:text-base" value={seoSettings.keywords} onChange={(e) => setSeoSettings({...seoSettings, keywords: e.target.value})} placeholder="e.g. web developer, nextjs, website design, agency" />
                    <p className="text-xs text-gray-500 mt-1">Separate keywords with commas.</p>
                  </div>
                  <button type="submit" disabled={loadingSeo} className="w-full font-bold py-3 rounded mt-2 bg-neonAccent text-black hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all">
                    Save SEO Settings
                  </button>
                </form>
              )}
            </div>
          )}

          {/* 10. Social Links View */}
          {activeTab === "social" && (
            <div className="w-full lg:max-w-xl glass-effect p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0a]/50">
              {loadingSocial ? (
                <div className="flex justify-center p-10"><FaSpinner className="animate-spin text-3xl text-neonAccent" /></div>
              ) : (
                <form onSubmit={handleSocialSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Instagram URL</label>
                    <input type="url" className="w-full bg-white/5 p-3 rounded text-white border border-transparent focus:border-neonAccent outline-none text-sm md:text-base" value={socialSettings.instagram} onChange={(e) => setSocialSettings({...socialSettings, instagram: e.target.value})} placeholder="https://instagram.com/yourprofile" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">LinkedIn URL</label>
                    <input type="url" className="w-full bg-white/5 p-3 rounded text-white border border-transparent focus:border-neonAccent outline-none text-sm md:text-base" value={socialSettings.linkedin} onChange={(e) => setSocialSettings({...socialSettings, linkedin: e.target.value})} placeholder="https://linkedin.com/in/yourprofile" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">GitHub URL</label>
                    <input type="url" className="w-full bg-white/5 p-3 rounded text-white border border-transparent focus:border-neonAccent outline-none text-sm md:text-base" value={socialSettings.github} onChange={(e) => setSocialSettings({...socialSettings, github: e.target.value})} placeholder="https://github.com/yourusername" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Twitter / X URL</label>
                    <input type="url" className="w-full bg-white/5 p-3 rounded text-white border border-transparent focus:border-neonAccent outline-none text-sm md:text-base" value={socialSettings.twitter} onChange={(e) => setSocialSettings({...socialSettings, twitter: e.target.value})} placeholder="https://twitter.com/yourhandle" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Facebook URL</label>
                    <input type="url" className="w-full bg-white/5 p-3 rounded text-white border border-transparent focus:border-neonAccent outline-none text-sm md:text-base" value={socialSettings.facebook} onChange={(e) => setSocialSettings({...socialSettings, facebook: e.target.value})} placeholder="https://facebook.com/yourpage" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">YouTube Channel URL</label>
                    <input type="url" className="w-full bg-white/5 p-3 rounded text-white border border-transparent focus:border-neonAccent outline-none text-sm md:text-base" value={socialSettings.youtube} onChange={(e) => setSocialSettings({...socialSettings, youtube: e.target.value})} placeholder="https://youtube.com/@yourchannel" />
                  </div>
                  <button type="submit" disabled={loadingSocial} className="w-full font-bold py-3 rounded mt-2 bg-neonAccent text-black hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all">
                    Save Social Links
                  </button>
                </form>
              )}
            </div>
          )}

          {/* MODALS */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"><form onSubmit={handleSubmit} className="bg-[#111] p-6 md:p-8 rounded-2xl w-full max-w-lg border border-white/10 relative shadow-2xl"><div className="flex justify-between mb-4"><h2 className="text-lg md:text-xl font-bold">Add New Project</h2><button type="button" onClick={() => setIsModalOpen(false)} className="text-gray-400"><FaTimes size={20} /></button></div><input type="text" placeholder="Project Title" className="w-full bg-white/5 p-3 rounded mb-3 text-white border border-transparent text-sm" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required /><textarea placeholder="Description" className="w-full bg-white/5 p-3 rounded mb-3 text-white border border-transparent text-sm min-h-[80px]" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required /><div className="mb-3 bg-white/5 p-3 rounded border border-white/10"><input type="file" onChange={uploadImage} className="w-full text-xs md:text-sm text-gray-400 file:bg-neonAccent file:text-black" accept="image/*" />{uploading && <p className="text-neonAccent text-xs mt-2"><FaSpinner className="animate-spin inline" /> Uploading image...</p>}{formData.image && <p className="text-green-400 text-xs mt-2">✓ Uploaded!</p>}</div><input type="text" placeholder="Live Link (optional)" className="w-full bg-white/5 p-3 rounded mb-3 text-white text-sm" value={formData.link} onChange={(e) => setFormData({...formData, link: e.target.value})} /><input type="text" placeholder="Tech Stack (comma separated)" className="w-full bg-white/5 p-3 rounded mb-3 text-white text-sm" value={formData.techStack} onChange={(e) => setFormData({...formData, techStack: e.target.value})} /><button type="submit" disabled={uploading} className="w-full font-bold py-3 rounded mt-4 bg-neonAccent text-black">Save Project</button></form></div>
          )}

          {isServiceModalOpen && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"><form onSubmit={handleServiceSubmit} className="bg-[#111] p-6 md:p-8 rounded-2xl w-full max-w-lg border border-white/10 relative shadow-2xl"><div className="flex justify-between mb-4"><h2 className="text-lg md:text-xl font-bold">Add New Service</h2><button type="button" onClick={() => setIsServiceModalOpen(false)} className="text-gray-400"><FaTimes size={20} /></button></div><input type="text" placeholder="Service Title (e.g. Web Development)" className="w-full bg-white/5 p-3 rounded mb-3 text-white border border-transparent text-sm" value={serviceFormData.title} onChange={(e) => setServiceFormData({...serviceFormData, title: e.target.value})} required /><textarea placeholder="Service Description" className="w-full bg-white/5 p-3 rounded mb-3 text-white border border-transparent text-sm" value={serviceFormData.description} onChange={(e) => setServiceFormData({...serviceFormData, description: e.target.value})} required /><input type="text" placeholder="Icon Text (e.g. 💻, 📱, 🎨)" className="w-full bg-white/5 p-3 rounded mb-3 text-white text-sm" value={serviceFormData.icon} onChange={(e) => setServiceFormData({...serviceFormData, icon: e.target.value})} /><input type="text" placeholder="Key Features (comma separated, e.g. Fast, Responsive)" className="w-full bg-white/5 p-3 rounded mb-3 text-white text-sm" value={serviceFormData.features} onChange={(e) => setServiceFormData({...serviceFormData, features: e.target.value})} /><button type="submit" className="w-full font-bold py-3 rounded mt-4 bg-neonAccent text-black hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all">Save Service</button></form></div>
          )}

          {isPricingModalOpen && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"><form onSubmit={handlePricingSubmit} className="bg-[#111] p-6 md:p-8 rounded-2xl w-full max-w-lg border border-white/10 relative shadow-2xl"><div className="flex justify-between mb-4"><h2 className="text-lg md:text-xl font-bold">Add New Pricing Plan</h2><button type="button" onClick={() => setIsPricingModalOpen(false)} className="text-gray-400"><FaTimes size={20} /></button></div><input type="text" placeholder="Plan Name (e.g. Starter, Professional)" className="w-full bg-white/5 p-3 rounded mb-3 text-white border border-transparent text-sm" value={pricingFormData.planName} onChange={(e) => setPricingFormData({...pricingFormData, planName: e.target.value})} required /><input type="text" placeholder="Price (e.g. ₹15,000 or Let's Talk)" className="w-full bg-white/5 p-3 rounded mb-3 text-white border border-transparent text-sm" value={pricingFormData.price} onChange={(e) => setPricingFormData({...pricingFormData, price: e.target.value})} required /><textarea placeholder="Short Description (e.g. Perfect for small businesses)" className="w-full bg-white/5 p-3 rounded mb-3 text-white border border-transparent text-sm" value={pricingFormData.description} onChange={(e) => setPricingFormData({...pricingFormData, description: e.target.value})} required /><input type="text" placeholder="Features (comma separated, e.g. 5 Pages, SEO Setup)" className="w-full bg-white/5 p-3 rounded mb-4 text-white text-sm" value={pricingFormData.features} onChange={(e) => setPricingFormData({...pricingFormData, features: e.target.value})} /><div className="flex items-center gap-3 mb-4"><input type="checkbox" id="isPopular" className="w-4 h-4 accent-neonAccent" checked={pricingFormData.isPopular} onChange={(e) => setPricingFormData({...pricingFormData, isPopular: e.target.checked})} /><label htmlFor="isPopular" className="text-sm text-gray-300">Mark as "Most Popular" Plan</label></div><button type="submit" className="w-full font-bold py-3 rounded mt-2 bg-neonAccent text-black hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all">Save Plan</button></form></div>
          )}

          {isTestimonialModalOpen && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <form onSubmit={handleTestimonialSubmit} className="bg-[#111] p-6 md:p-8 rounded-2xl w-full max-w-lg border border-white/10 relative shadow-2xl">
                <div className="flex justify-between mb-4">
                  <h2 className="text-lg md:text-xl font-bold">Add New Testimonial</h2>
                  <button type="button" onClick={() => setIsTestimonialModalOpen(false)} className="text-gray-400 hover:text-white"><FaTimes size={20} /></button>
                </div>
                <input type="text" placeholder="Client Name" className="w-full bg-white/5 p-3 rounded mb-3 text-white border border-transparent text-sm" value={testimonialFormData.clientName} onChange={(e) => setTestimonialFormData({...testimonialFormData, clientName: e.target.value})} required />
                <input type="text" placeholder="Company/Position (e.g. CEO, TechCorp)" className="w-full bg-white/5 p-3 rounded mb-3 text-white border border-transparent text-sm" value={testimonialFormData.company} onChange={(e) => setTestimonialFormData({...testimonialFormData, company: e.target.value})} />
                <textarea placeholder="Client's Review" className="w-full bg-white/5 p-3 rounded mb-3 text-white border border-transparent min-h-[100px] text-sm" value={testimonialFormData.review} onChange={(e) => setTestimonialFormData({...testimonialFormData, review: e.target.value})} required />
                <div className="mb-3 flex items-center gap-4 bg-white/5 p-3 rounded border border-white/10 text-sm">
                  <label className="text-gray-400">Rating (1-5):</label>
                  <input type="number" min="1" max="5" className="bg-transparent text-white outline-none w-16 text-center border-b border-neonAccent/50" value={testimonialFormData.rating} onChange={(e) => setTestimonialFormData({...testimonialFormData, rating: Number(e.target.value)})} />
                </div>
                <div className="mb-4 bg-white/5 p-3 md:p-4 rounded border border-white/10">
                   <label className="block text-sm text-gray-400 mb-2">Upload Client Photo (Optional)</label>
                   <input type="file" onChange={uploadTestimonialImage} className="w-full text-xs md:text-sm text-gray-400 file:bg-neonAccent file:text-black file:border-0 file:py-1 file:px-3 file:rounded" accept="image/*" />
                   {uploading && <p className="text-neonAccent text-xs mt-2"><FaSpinner className="animate-spin inline" /> Uploading image...</p>}
                   {testimonialFormData.image && <p className="text-green-400 text-xs mt-2">✓ Uploaded successfully!</p>}
                </div>
                <button type="submit" disabled={uploading} className="w-full font-bold py-3 rounded mt-2 bg-neonAccent text-black hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all">Save Testimonial</button>
              </form>
            </div>
          )}

          {isFaqModalOpen && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <form onSubmit={handleFaqSubmit} className="bg-[#111] p-6 md:p-8 rounded-2xl w-full max-w-lg border border-white/10 relative shadow-2xl">
                <div className="flex justify-between mb-4">
                  <h2 className="text-lg md:text-xl font-bold">Add New FAQ</h2>
                  <button type="button" onClick={() => setIsFaqModalOpen(false)} className="text-gray-400 hover:text-white"><FaTimes size={20} /></button>
                </div>
                <input type="text" placeholder="Question (e.g. How long does development take?)" className="w-full bg-white/5 p-3 rounded mb-3 text-white border border-transparent text-sm" value={faqFormData.question} onChange={(e) => setFaqFormData({...faqFormData, question: e.target.value})} required />
                <textarea placeholder="Answer (e.g. Usually 1-2 weeks depending on scope...)" className="w-full bg-white/5 p-3 rounded mb-3 text-white border border-transparent min-h-[120px] text-sm" value={faqFormData.answer} onChange={(e) => setFaqFormData({...faqFormData, answer: e.target.value})} required />
                <button type="submit" className="w-full font-bold py-3 rounded mt-2 bg-neonAccent text-black hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all">Save FAQ</button>
              </form>
            </div>
          )}

          {isMediaModalOpen && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <form onSubmit={handleMediaSubmit} className="bg-[#111] p-6 md:p-8 rounded-2xl w-full max-w-lg border border-white/10 relative shadow-2xl">
                <div className="flex justify-between mb-4">
                  <h2 className="text-lg md:text-xl font-bold">Upload New Image</h2>
                  <button type="button" onClick={() => setIsMediaModalOpen(false)} className="text-gray-400 hover:text-white"><FaTimes size={20} /></button>
                </div>
                <input type="text" placeholder="Image Title / Description" className="w-full bg-white/5 p-3 rounded mb-3 text-white border border-transparent text-sm" value={mediaFormData.title} onChange={(e) => setMediaFormData({...mediaFormData, title: e.target.value})} required />
                <div className="mb-4 bg-white/5 p-3 md:p-4 rounded border border-white/10">
                   <label className="block text-sm text-gray-400 mb-2">Select Image File</label>
                   <input type="file" onChange={uploadMediaImage} className="w-full text-xs md:text-sm text-gray-400 file:bg-neonAccent file:text-black file:border-0 file:py-1 file:px-3 file:rounded" accept="image/*" />
                   {uploading && <p className="text-neonAccent text-xs mt-2"><FaSpinner className="animate-spin inline" /> Uploading image...</p>}
                   {mediaFormData.url && <p className="text-green-400 text-xs mt-2">✓ Uploaded successfully!</p>}
                </div>
                <button type="submit" disabled={uploading} className="w-full font-bold py-3 rounded mt-2 bg-neonAccent text-black hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all">Save Image</button>
              </form>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
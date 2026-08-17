"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLock, FaUserShield } from "react-icons/fa";
// Note: Hum aage chalkar is login ko real JWT authentication se connect karenge.
// Abhi ke liye ye UI aur basic validation setup hai.

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Temporary hardcoded check (Next step me hum isko API aur JWT se replace karenge)
    setTimeout(() => {
      if (credentials.username === "shahid.tech.in@gmail.com" && credentials.password === "shahidwebstudio123") {
        window.location.href = "/admin/dashboard"; // Redirect to dashboard
      } else {
        setError("Invalid username or password");
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="flex-grow flex items-center justify-center relative overflow-hidden">
      {/* Secure Environment Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-neonAccent/10 rounded-full blur-[150px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="glass-effect p-10 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative">
          
          {/* Lock Icon Header */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#050505] rounded-full border border-white/10 flex items-center justify-center glass-effect">
            <FaUserShield className="text-3xl text-neonAccent" />
          </div>

          <div className="text-center mt-8 mb-8">
            <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Admin Access</h2>
            <p className="text-gray-500 text-sm mt-2">Restricted Area. Authorized Personnel Only.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider">Username</label>
              <input 
                type="text" 
                name="username" 
                required
                value={credentials.username} 
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonAccent focus:bg-black/80 transition-colors"
                placeholder="Enter username"
              />
            </div>
            
            <div>
              <label className="block text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider">Password</label>
              <input 
                type="password" 
                name="password" 
                required
                value={credentials.password} 
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonAccent focus:bg-black/80 transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded text-sm text-center">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-neonAccent hover:text-black transition-all flex items-center justify-center gap-2 mt-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              {loading ? (
                <span className="animate-pulse">Authenticating...</span>
              ) : (
                <>Login to Dashboard <FaLock className="text-sm" /></>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
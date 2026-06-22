import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Award, Globe, Zap } from "lucide-react";

interface HomeSectionProps {
  onViewWorkClick: () => void;
  onContactClick: () => void;
}

export default function HomeSection({ onViewWorkClick, onContactClick }: HomeSectionProps) {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["Shivam Yadav", "Creative Developer", "UI/UX Architect"];
  const typingSpeed = 100;
  const deletingSpeed = 60;
  const pauseDelay = 2000;

  // Typing simulator
  useEffect(() => {
    let timer: number;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setTypedText(currentFullText.substring(0, typedText.length - 1));
      }, deletingSpeed);
    } else {
      timer = window.setTimeout(() => {
        setTypedText(currentFullText.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && typedText === currentFullText) {
      timer = window.setTimeout(() => setIsDeleting(true), pauseDelay);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  // Handle Tilt Effect in React
  const [tiltStyle, setTiltStyle] = useState({});
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max 10 degrees tilt
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: "transform 0.5s ease-out",
    });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 px-6 overflow-hidden md:py-32"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column info */}
        <div className="md:col-span-7 flex flex-col items-start gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#a855f7]" />
            <span className="text-[10px] md:text-xs font-mono text-purple-400 uppercase tracking-widest font-medium">
              Welcome to my universe
            </span>
          </motion.div>

          <div className="min-h-[140px] md:min-h-[200px] flex items-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] select-none text-white">
              Hi, I'm <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-cyan-300">
                {typedText}
              </span>
              <span className="typing-caret font-light"></span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={tiltStyle}
            className="w-full max-w-lg glass p-6 rounded-2xl border-l-[6px] border-purple-500 shadow-2xl relative group overflow-hidden cursor-pointer"
          >
            {/* Ambient hover glow line */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed relative z-10">
              Creative Developer & UI/UX Designer crafting premium digital experiences with an interactive physical feel and a futuristic touch.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            {/* Primary view work with sheener effect */}
            <button
              onClick={onViewWorkClick}
              className="relative px-8 py-3.5 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] group overflow-hidden flex items-center gap-2 cursor-pointer border border-purple-400/30"
            >
              {/* Sliding glass overlay beam */}
              <span className="absolute -inset-y-0 -left-[100%] w-1/3 bg-white/20 skew-x-[-25deg] transition-all duration-700 ease-out group-hover:left-[150%]" />
              <span>View Work</span>
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            {/* Glass contact me link */}
            <button
              onClick={onContactClick}
              className="px-8 py-3.5 glass hover:bg-white/10 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer hover:border-white/30"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right column: Interactive illuminated floating console / abstract geometric stitch */}
        <div className="md:col-span-5 h-[350px] md:h-[500px] flex items-center justify-center relative">
          
          {/* Main animated radial neon orbit circles helper */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Ambient outer rotating glow orb */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-purple-500/10 flex items-center justify-center relative"
            >
              {/* Mini glow node */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7]" />
              <div className="absolute bottom-0 left-1/4 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
            </motion.div>

            {/* Inner inverse rotating orb */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full border border-purple-500/5 flex items-center justify-center"
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
            </motion.div>

            {/* Core cosmic synth visualizer sphere */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 0.98, 1],
                boxShadow: [
                  "0 0 35px rgba(168, 85, 247, 0.25), inset 0 0 25px rgba(168, 85, 247, 0.2)",
                  "0 0 50px rgba(168, 85, 247, 0.45), inset 0 0 35px rgba(168, 85, 247, 0.35)",
                  "0 0 30px rgba(34, 211, 238, 0.25), inset 0 0 25px rgba(34, 211, 238, 0.2)",
                  "0 0 35px rgba(168, 85, 247, 0.25), inset 0 0 25px rgba(168, 85, 247, 0.2)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] rounded-full bg-black/80 border-2 border-purple-400 flex items-center justify-center"
            >
              <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-purple-900/30 via-transparent to-cyan-900/30 flex flex-col items-center justify-center gap-1 select-none">
                <span className="text-[10px] font-mono tracking-widest text-[#a855f7] uppercase neon-text-purple font-semibold animate-pulse">LUMINA</span>
                <span className="text-[8px] font-mono text-cyan-400 tracking-wider">ACTIVE</span>
              </div>
            </motion.div>
          </div>

          {/* Glowing tech platform cards on side */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute top-10 left-4 glass p-3 rounded-xl flex items-center gap-3 border-l-2 border-purple-500 shadow-md select-none hidden sm:flex"
          >
            <div className="p-1.5 bg-purple-500/20 text-purple-400 rounded-lg">
              <Zap size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-gray-400">PERFORMANCE</span>
              <span className="text-xs font-bold text-white uppercase">Ultra Fluid</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 right-4 glass p-3 rounded-xl flex items-center gap-3 border-l-2 border-cyan-400 shadow-md select-none hidden sm:flex"
          >
            <div className="p-1.5 bg-cyan-500/20 text-cyan-400 rounded-lg">
              <Globe size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-gray-400">DESIGN INTEGRITY</span>
              <span className="text-xs font-bold text-white uppercase">Glassmorphism</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative subtle gradient background mesh inside the hero section */}
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Scroll indicator clicker */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none animate-bounce">
        <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase">EXPLORE</span>
        <ChevronDown size={14} className="text-purple-400" />
      </div>
    </section>
  );
}

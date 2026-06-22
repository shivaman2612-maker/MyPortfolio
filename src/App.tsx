import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import CustomCursor from "./components/CustomCursor";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { Terminal, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Global mouse coordinates for spotlight glow gradient
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer to highlight active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // accurately covers the visual viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = ["home", "about", "projects", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050811] text-gray-100 overflow-x-hidden font-sans select-text">
      
      {/* Interactive trailing customized cursor */}
      <CustomCursor />

      {/* Floating global cursor spotlight radial gradient */}
      <div id="global-glow" className="pointer-events-none" />

      {/* Futuristic floating canvas grid and particle background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <ParticleBackground />
      </div>

      {/* Grid overlay layout lines */}
      <div className="fixed inset-0 w-full h-full grid-overlay pointer-events-none z-0 opacity-40" />

      {/* Glass navigation header bar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Content layout main stack */}
      <main className="relative z-10 w-full">
        
        {/* Intro hero Section */}
        <HomeSection 
          onViewWorkClick={() => handleScrollToSection("projects")} 
          onContactClick={() => handleScrollToSection("contact")} 
        />

        {/* Profile bio & timelines timeline Section */}
        <AboutSection />

        {/* Project 3D cards specifications Section */}
        <ProjectsSection />

        {/* Contact direct channels communication Section */}
        <ContactSection />

      </main>

      {/* Footer layout console */}
      <footer className="relative z-10 py-10 px-6 border-t border-white/5 bg-[#03050a]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500 font-mono">
          
          <div className="flex items-center gap-2">
            <span className="text-purple-400 neon-text-purple font-bold">SY</span>
            <span className="text-gray-700">|</span>
            <div className="flex items-center gap-1">
              <Terminal size={14} className="text-cyan-400" />
              <span>LOG: PORT 3000 ONLINE</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1.5 text-xs">
            <p className="flex items-center gap-1">
              Crafted with <Heart size={12} className="text-purple-400 fill-purple-400 animate-pulse" /> by Shivam Yadav © {new Date().getFullYear()}
            </p>
            <span className="text-[10px] text-gray-700 uppercase tracking-widest">LUMINA SYNTH DESIGN SYSTEM</span>
          </div>

        </div>
      </footer>
    </div>
  );
}

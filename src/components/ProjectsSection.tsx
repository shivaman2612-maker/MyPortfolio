import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, ArrowUpRight, Github, Info, X, Zap, Eye, Globe, Flame, Shield, Cpu } from "lucide-react";
import { Project } from "../types";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "traffic",
      title: "Traffic Sign Recognition System",
      description: "High-accuracy intelligent mobile application designed to detect, recognize, and narrate traffic signs in real-time.",
      longDescription: "A state-of-the-art Android application engineered in Java utilizing deep Convolutional Neural Networks optimized inside a TensorFlow Lite (TFLite) mobile model for high-efficiency, real-time on-device inference. Features an optimized computer vision frame pipeline that parses live camera streams, handles light variance anomalies, classifies crucial traffic signs, and converts them to audible vocal warnings for active driver assistance.",
      image: "Eye",
      tags: ["Java (Android)", "TensorFlow Lite", "Android SDK", "Computer Vision"],
      githubUrl: "https://github.com/shivam-yadav/traffic-sign-recognition",
      demoUrl: "https://github.com/shivam-yadav/traffic-sign-recognition",
      stats: [
        { label: "Inference Latency", value: "<15ms" },
        { label: "Accuracy Score", value: "98.2%" },
        { label: "Processing FPS", value: "60 FPS" }
      ]
    },
    {
      id: "gaushala",
      title: "Mahanth Gaushala Dynamic Portal",
      description: "An interactive, fully consolidated dynamic website managing livestock records, digital donations, and organic farming details.",
      longDescription: "A fully responsive dynamic portal developed to support Mahanth Gaushala's operations, integrating comprehensive livestock details tables, cow health trackers, automated fodder logistics dashboards, and a robust donation uplink with instant digital receipt generation. Provides detailed data presentation for community engagement and dynamic event tracking.",
      image: "Globe",
      tags: ["HTML & CSS", "JavaScript", "React", "Node.js & Express"],
      githubUrl: "https://github.com/shivam-yadav/mahanth-gaushala",
      demoUrl: "https://github.com/shivam-yadav/mahanth-gaushala",
      stats: [
        { label: "Response Delay", value: "18ms" },
        { label: "Uptime Rating", value: "99.9%" },
        { label: "Donation Channels", value: "Secure SSL" }
      ]
    },
    {
      id: "firesprinkler",
      title: "Smart Fire Detector & Sprinkler",
      description: "IoT automated safety system driven by ESP32 microcontrollers, sensor arrays, and electronic solenoid sprinkler relays.",
      longDescription: "An advanced IoT-driven physical engineering build designed for rapid emergency response. Uses flame sensing diodes, MQ-2 smoke analyzers, and high-precision thermistors connected to an ESP32 microchip. Upon crossing critical thresholds, the controller validates threat metrics, activates local high-decibel acoustic alarms, broadcasts Wi-Fi telemetry updates, and instantly switches 5V electronic relays to trigger high-pressure automatic sprinkler water valves.",
      image: "Flame",
      tags: ["ESP32 Hardware", "Flame / Smoke Sensors", "Embedded C++", "Relay Systems"],
      githubUrl: "https://github.com/shivam-yadav/smart-fire-sprinkler",
      demoUrl: "https://github.com/shivam-yadav/smart-fire-sprinkler",
      stats: [
        { label: "Response Delay", value: "<0.8s" },
        { label: "Telemetry Uplink", value: "MQTT / Blynk" },
        { label: "Valve Actuator", value: "5V Solenoid" }
      ]
    },
    {
      id: "homesecurity",
      title: "ESP32 Autonomous Home Security",
      description: "An offline-first physical security matrix utilizing ultrasonic range finders, PIR movement detectors, and alarms.",
      longDescription: "An edge home defense grid utilizing multi-sensor hardware arrays. Integrates PIR motion detectors, HC-SR04 ultrasonic distance sensors, and magnetic door switches with an ESP32 processing node. Programmed to monitor access boundaries, filter random physical signal variations, and trigger high-output acoustic sirens immediately upon detecting motion thresholds or magnetic gap breaks, while compiling active log updates.",
      image: "Shield",
      tags: ["PIR / Motion Sensors", "Ultrasonic Tech", "ESP32", "MicroPython & C++"],
      githubUrl: "https://github.com/shivam-yadav/esp32-home-security",
      demoUrl: "https://github.com/shivam-yadav/esp32-home-security",
      stats: [
        { label: "Response Interval", value: "<100ms" },
        { label: "Power Efficiency", value: "Deep Sleep State" },
        { label: "Sensor Channels", value: "4 Digital Channels" }
      ]
    }
  ];

  // Helper to render lucide dynamic icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Eye":
        return <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)]"><Eye size={20} /></div>;
      case "Globe":
        return <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.2)]"><Globe size={20} /></div>;
      case "Flame":
        return <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.2)]"><Flame size={20} /></div>;
      case "Shield":
        return <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]"><Shield size={20} /></div>;
      default:
        return <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)]"><FolderGit2 size={20} /></div>;
    }
  };

  // Custom coordinate tracker for 3D card tilt
  const [tiltStyles, setTiltStyles] = useState<{ [key: string]: React.CSSProperties }>({});

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10; // Max 10 deg rotation
    const rotY = ((x - centerX) / centerX) * 10;

    setTiltStyles((prev) => ({
      ...prev,
      [id]: {
        transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: "transform 0.1s ease-out",
      },
    }));
  };

  const handleCardMouseLeave = (id: string) => {
    setTiltStyles((prev) => ({
      ...prev,
      [id]: {
        transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: "transform 0.5s ease-out",
      },
    }));
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden border-t border-white/5">
      
      {/* Background glow filters */}
      <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[15%] w-[350px] h-[350px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <FolderGit2 size={13} className="text-purple-400" />
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-medium">MY BLUEPRINTS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
            Pioneering Digital Products
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
            Click any project console to view comprehensive design specifications, weekly downloads metrics, and operational source links.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseMove={(e) => handleCardMouseMove(e, project.id)}
              onMouseLeave={() => handleCardMouseLeave(project.id)}
              onMouseEnter={() => setHoveredCardId(project.id)}
              className="relative cursor-pointer tilt-card"
              style={tiltStyles[project.id]}
            >
              <div
                onClick={() => setSelectedProject(project)}
                className={`w-full glass p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full gap-6 justify-between ${
                  hoveredCardId === project.id
                    ? "border-purple-500/30 shadow-[0_8px_30px_rgba(168,85,247,0.15)] bg-slate-900/40"
                    : "border-white/10"
                }`}
              >
                
                {/* Visual Glass Sheen effect sliding on card hover */}
                {hoveredCardId === project.id && (
                  <motion.div
                    layoutId="projectGlowSheen"
                    className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-purple-500/[0.04] to-transparent rounded-t-2xl pointer-events-none"
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Card Top: Icons and Details */}
                <div className="flex flex-col gap-5 tilt-card-inner">
                  <div className="flex items-center justify-between">
                    {renderIcon(project.image)}
                    <span className="text-[10px] font-mono text-gray-500 tracking-wider bg-white/5 border border-white/5 px-2.5 py-1 rounded-full uppercase">
                      {project.tags[0]}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-purple-300 flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight size={18} className="text-gray-500 group-hover:text-purple-400 transition-colors" />
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed min-h-[60px]">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Secondary details row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-2 border-t border-white/10 tilt-card-inner">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[9px] font-mono text-cyan-400 bg-cyan-400/5 px-2.5 py-1 rounded border border-cyan-400/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors flex items-center gap-1">
                    <Info size={14} />
                    <span>View Specifications</span>
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Expanded Modal Box */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark glass backdrop layout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal content container */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-2xl glass p-6 sm:p-10 rounded-2xl border border-purple-500/20 shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-y-auto z-10"
            >
              {/* Close Button x */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-full border border-white/10 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Head info */}
              <div className="flex items-center gap-4 mt-2">
                {renderIcon(selectedProject.image)}
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest">PROJECT SPECIFICATION</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Main parameters description */}
              <div className="flex flex-col gap-4 mt-2">
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Statistical Chips */}
              {selectedProject.stats && (
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                  {selectedProject.stats.map((stat, idx) => (
                    <div key={idx} className="glass p-3 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col items-center text-center">
                      <span className="text-base sm:text-lg font-bold text-white font-display neon-text-purple">
                        {stat.value}
                      </span>
                      <span className="text-[9px] font-mono text-gray-400 uppercase tracking-wider mt-1">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags used */}
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-cyan-400 bg-cyan-400/5 px-2.5 py-1 rounded border border-cyan-400/10">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Source actions */}
              <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/10 justify-between items-center">
                <div className="text-[11px] text-gray-500 font-mono flex items-center gap-1.5">
                  <Zap size={14} className="text-[#a855f7]" />
                  <span>PREMIUM SYSTEM ARTIFACT</span>
                </div>
                
                <div className="flex gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-white/15 hover:border-white/30 text-white rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-lg hover:shadow-purple-500/20"
                    >
                      <span>Launch Prototype</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

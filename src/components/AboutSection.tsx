import { useState } from "react";
import { motion } from "motion/react";
import { User, Shield, Compass, Sliders, Briefcase, Calendar, GraduationCap } from "lucide-react";
import { Skill } from "../types";

export default function AboutSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const skillCategories = ["All", "AIML & Data", "Core Tech", "Professional", "Languages"];

  const skills: Skill[] = [
    { name: "Machine Learning", category: "AIML & Data", level: 85 },
    { name: "Data Analysis", category: "AIML & Data", level: 80 },
    { name: "Digital Research", category: "AIML & Data", level: 90 },
    { name: "Report Preparation", category: "AIML & Data", level: 85 },
    { name: "Physical Research", category: "AIML & Data", level: 75 },

    { name: "Software Development", category: "Core Tech", level: 88 },
    { name: "Computer Engineering", category: "Core Tech", level: 92 },
    { name: "System Automation", category: "Core Tech", level: 85 },
    { name: "ESP32 / IoT Hardware", category: "Core Tech", level: 80 },
    { name: "Database Systems", category: "Core Tech", level: 78 },

    { name: "Project Management", category: "Professional", level: 82 },
    { name: "Problem Solving", category: "Professional", level: 95 },
    { name: "Problem Evaluation", category: "Professional", level: 88 },
    { name: "Team Collaboration", category: "Professional", level: 90 },
    { name: "Time Management", category: "Professional", level: 92 },

    { name: "Hindi (Native)", category: "Languages", level: 100 },
    { name: "English (C2)", category: "Languages", level: 95 },
    { name: "Clerical Support", category: "Languages", level: 85 },
    { name: "Effective Comms", category: "Languages", level: 90 },
  ];

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const educationEvents = [
    {
      year: "08/2025 - Current",
      degree: "Bachelor of Engineering: Computer Science Engineering (AIML)",
      institution: "Alamuri Ratanmala Institute of Engineering And Technology, Thane",
      details: "Pursuing B.E CSE (AI&ML), 2nd Year. Focus on machine learning architecture, neural network optimization, and high-level computation structures.",
    },
    {
      year: "08/2022 - 06/2025",
      degree: "Diploma in Computer Engineering",
      institution: "Pravin Patil College of Diploma in Engineering, Bhayandar",
      details: "Completed with GPA: 73.66. Studied core operating systems, data structures, dynamic web development, and digital electronics.",
    },
    {
      year: "Completed",
      degree: "High School Diploma",
      institution: "Maharashtra State Board of Higher and Secondary Education, Bhiwandi",
      details: "Completed with GPA: 76.40. Rigorous academic preparation in analytical disciplines, physics, and computer science basics.",
    },
  ];

  const timelineEvents = [
    {
      year: "06/2024 - 08/2024",
      role: "Internship Student",
      company: "Jetking, Borivali",
      description: "Acquired practical experience in diverse network and system aspects, applying academic knowledge to real-world scenarios. Developed professional skills through practical experience in time management and communication. Worked collaboratively with teams to assess problems, design effective solutions, and organized both digital and physical files in a systematic manner.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-black/40 border-t border-white/5">
      
      {/* Decorative ambient lighting spotlights */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-700/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-cyan-700/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <User size={13} className="text-cyan-400" />
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-medium">DISCOVER ME</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
            Blending Tech and Design
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
            I am a motivated Computer Science (AI&ML) student combining digital software engineering precision with practical IoT integration.
          </p>
        </div>

        {/* Core Layout: Grid of Bio, Education & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Columns */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="glass p-6 sm:p-8 rounded-2xl border-l-4 border-purple-500 shadow-xl flex flex-col gap-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider">professional overview</h4>
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Compass className="text-purple-400" size={20} />
                My Core Philosophy
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                As a Computer Science (AI&ML) engineering student with strong critical thinking, I approach software, AI, and hardware as interconnected systems.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Whether deploying machine learning models, building full-stack dynamic platforms, or programming microcontrollers like ESP32 with physical sensors, my work is driven by practical problem-solving.
              </p>
              
              {/* Stat callouts */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold font-display text-white neon-text-purple">4+</span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">HARDWARE SYS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold font-display text-white neon-text-cyan">76%</span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">HS GRADE</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold font-display text-white text-pink-400">73.6%</span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">DIPLOMA GPA</span>
                </div>
              </div>
            </div>

            {/* Micro details panel */}
            <div className="glass p-6 rounded-2xl border-l-4 border-cyan-400 flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                <Shield size={16} className="text-cyan-400" />
                Durable Methodologies
              </h4>
              <ul className="text-xs text-gray-400 space-y-2.5">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  <span>Practical application of academic theories to real-world products.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  <span>Rigorous system validation, from model metrics to physical sensors.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  <span>Clean documentation and digital system workflows.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Education & Experience Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Education History Card */}
            <div className="glass p-6 sm:p-8 rounded-2xl flex flex-col gap-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <GraduationCap className="text-cyan-400" size={22} />
                Education Timeline
              </h3>
              
              <div className="relative pl-6 sm:pl-8 border-l border-white/15 space-y-8 flex flex-col">
                {educationEvents.map((event, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute top-1.5 -left-[31px] sm:-left-[39px] w-4 h-4 rounded-full bg-black border-2 border-cyan-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
                    </div>

                    <div className="flex flex-col gap-1.5 group">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                          <Calendar size={12} />
                          {event.year}
                        </span>
                        <span className="text-xs font-mono text-gray-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded truncate max-w-[250px]" title={event.institution}>
                          {event.institution.split(",")[0]}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {event.degree}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-1">
                        {event.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Card */}
            <div className="glass p-6 sm:p-8 rounded-2xl flex flex-col gap-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Briefcase className="text-purple-400" size={20} />
                Experience History
              </h3>
              
              <div className="relative pl-6 sm:pl-8 border-l border-white/15 space-y-8 flex flex-col">
                {timelineEvents.map((event, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute top-1.5 -left-[31px] sm:-left-[39px] w-4 h-4 rounded-full bg-black border-2 border-purple-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#a855f7]" />
                    </div>

                    <div className="flex flex-col gap-1.5 group">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-[11px] font-mono text-purple-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                          <Calendar size={12} />
                          {event.year}
                        </span>
                        <span className="text-xs font-mono text-gray-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                          {event.company}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                        {event.role}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-1">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Tech Stack Skills Section */}
        <div className="mt-16 glass p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <Sliders size={18} className="text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Full Abilities Inventory</h3>
            </div>
            
            {/* Category selection bar */}
            <div className="flex flex-wrap gap-2">
              {skillCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-full border transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-purple-600/20 border-purple-500 text-purple-300 shadow-[0_0_8px_rgba(168,85,247,0.3)]"
                      : "bg-black/40 border-white/10 text-gray-400 hover:text-white"
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive animated floating standard skill chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="glass hover:bg-white/5 border border-white/10 hover:border-purple-500/40 p-4 rounded-xl flex flex-col gap-3 group transition-transform hover:scale-[1.03]"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors truncate" title={skill.name}>
                    {skill.name}
                  </span>
                  <span className="text-[9px] font-mono text-purple-400 select-none">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Horizontal dynamic gauge */}
                <div className="w-full h-1 bg-black/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


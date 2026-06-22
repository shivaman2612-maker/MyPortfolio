import React, { useState, useEffect } from "react";
import { Mail, Compass, Send, Github, Linkedin, MessageSquareCode, CheckCircle2, History, Trash2, Calendar } from "lucide-react";
import { ContactMessage } from "../types";

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [sentMessages, setSentMessages] = useState<ContactMessage[]>([]);

  // Load existing sent messages from storage to provide a functional and durable experience
  useEffect(() => {
    const saved = localStorage.getItem("sent_messages");
    if (saved) {
      try {
        setSentMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved contact messages", e);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearMessages = () => {
    localStorage.removeItem("sent_messages");
    setSentMessages([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate futuristic transmission uplink delay
    setTimeout(() => {
      const updatedMessages = [formData, ...sentMessages];
      setSentMessages(updatedMessages);
      localStorage.setItem("sent_messages", JSON.stringify(updatedMessages));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success status indicator after 4 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-black/40 border-t border-white/5">
      
      {/* Decorative localized neon orbs */}
      <div className="absolute top-[10%] left-[-15%] w-[450px] h-[450px] bg-purple-700/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[450px] h-[450px] bg-cyan-700/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#22d3ee]/10 border border-[#22d3ee]/20 rounded-full">
            <Mail size={13} className="text-[#22d3ee]" />
            <span className="text-[10px] font-mono text-[#22d3ee] uppercase tracking-widest font-medium">UPLINK PORTAL</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
            Initiate Connection
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
            Transmit telemetry packets, request collaborative design sprints, or simply say hello.
          </p>
        </div>

        {/* Layout: Sidebar card + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sidebar Contact Info Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass p-6 sm:p-8 rounded-2xl border-l-4 border-cyan-400 flex flex-col gap-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#22d3ee]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <h3 className="text-lg font-bold text-white font-display flex items-center gap-2.5">
                <Compass className="text-[#22d3ee]" size={18} />
                Uplink Vector Coordinates
              </h3>
              
              <p className="text-sm text-gray-400 leading-relaxed">
                Feel free to email me directly or schedule a virtual telemetry session via the form. I typically respond to all incoming telemetry blocks within 24 standard earth hours.
              </p>

              {/* Direct channels */}
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-4 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-[#22d3ee] flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-[9px] font-mono text-gray-500 uppercase">DIRECT MAIL</span>
                    <a href="mailto:shivam9762247088@gmail.com" className="text-xs sm:text-sm text-white hover:text-[#22d3ee] font-semibold transition-colors truncate">
                      shivam9762247088@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[#a855f7] flex items-center justify-center">
                    <Linkedin size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-gray-500 uppercase">INTERACTIVE NETWORK</span>
                    <a href="https://linkedin.com/in/shivam-yadav" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-white hover:text-purple-400 font-semibold transition-colors">
                      linkedin.com/in/shivam-yadav
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center">
                    <Github size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-gray-500 uppercase">CODE REPOSITORY</span>
                    <a href="https://github.com/shivam-yadav" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-white hover:text-pink-400 font-semibold transition-colors">
                      github.com/shivam-yadav
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Outbox Console displaying sent messages history */}
            {sentMessages.length > 0 && (
              <div className="glass p-6 rounded-2xl flex flex-col gap-4 border-l-4 border-purple-500">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                    <History size={14} className="text-purple-400" />
                    Local Transmission Logs ({sentMessages.length})
                  </h4>
                  <button 
                    onClick={handleClearMessages}
                    className="p-1 hover:bg-white/10 rounded text-gray-500 hover:text-white transition-colors cursor-pointer"
                    title="Clear logs"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
                
                <div className="max-h-[160px] overflow-y-auto space-y-3 pr-2">
                  {sentMessages.map((msg, idx) => (
                    <div key={idx} className="bg-white/[0.01] border border-white/5 p-2.5 rounded-lg flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-2.5">
                        <span className="text-[10px] font-mono font-bold text-gray-300 truncate">{msg.name}</span>
                        <span className="text-[9px] font-mono text-gray-500 flex items-center gap-1">
                          <Calendar size={10} />
                          Recent packet
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-purple-400 truncate font-semibold">{msg.subject || "No Subject"}</span>
                      <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed mt-0.5">{msg.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Input Form column */}
          <div className="lg:col-span-7">
            <div className="glass p-6 sm:p-8 rounded-2xl shadow-xl border border-white/10 relative overflow-hidden">
              
              <h3 className="text-base sm:text-lg font-bold text-white mb-6 font-display flex items-center gap-2">
                <MessageSquareCode size={18} className="text-[#a855f7]" />
                Modulate Signal
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-semibold">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alyx Vance"
                      className="w-full bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none p-3.5 rounded-xl font-sans text-sm text-white placeholder-gray-600 transition-colors focus:ring-1 focus:ring-purple-500/20"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-semibold">
                      Return Address <span className="text-[#22d3ee]">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. alyx@blackmesa.org"
                      className="w-full bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none p-3.5 rounded-xl font-sans text-sm text-white placeholder-gray-600 transition-colors focus:ring-1 focus:ring-cyan-500/20"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-semibold">
                    Transmission Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Collaboration Request"
                    className="w-full bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none p-3.5 rounded-xl font-sans text-sm text-white placeholder-gray-600 transition-colors focus:ring-1 focus:ring-purple-500/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-semibold">
                    Telemetry Description <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Express your creative thoughts or request specifications here..."
                    className="w-full bg-black/40 border border-white/10 focus:border-purple-500 focus:outline-none p-3.5 rounded-xl font-sans text-sm text-white placeholder-gray-600 transition-colors resize-none focus:ring-1 focus:ring-purple-500/20"
                  />
                </div>

                <div className="flex justify-between items-center mt-2.5">
                  <span className="text-[10px] font-mono text-gray-500 font-semibold">
                    * REQUIRED TRANSMISSION DATA
                  </span>
                  
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="relative px-8 py-3 bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-white rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] cursor-pointer disabled:opacity-50 select-none border border-white/10 font-display text-sm overflow-hidden group"
                  >
                    <span className="absolute -inset-y-0 -left-[100%] w-1/3 bg-white/20 skew-x-[-25deg] transition-all duration-700 ease-out group-hover:left-[150%]" />
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Packet</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </div>

                {/* Uplink success report status alert banner */}
                {submitSuccess && (
                  <div className="mt-4 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 flex items-center gap-3 animate-fade-in">
                    <CheckCircle2 size={18} className="shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold font-mono">TELEMETRY RECEIVED SUCCESSFUL</span>
                      <span className="text-[11px] text-emerald-400/80">Message uploaded to local browser outbox console safely.</span>
                    </div>
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

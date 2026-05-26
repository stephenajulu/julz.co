/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Globe, Cpu, Sparkles, ArrowRight, ArrowUp } from 'lucide-react';

const NavBar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-10 md:px-12"
    >
      <div className="font-sans font-bold tracking-[0.2em] text-xl uppercase text-white hover:opacity-80 transition-opacity cursor-pointer">
        Julz
      </div>
      <div className="flex items-center gap-10 text-[10px] tracking-[0.3em] font-medium uppercase text-white opacity-60">
        <a href="#philosophy" className="hover:opacity-100 transition-opacity hidden md:block">Philosophy</a>
        <a href="#horizons" className="hover:opacity-100 transition-opacity hidden md:block">Horizons</a>
        <a href="#portfolio" className="hover:opacity-100 transition-opacity hidden md:block">Portfolio</a>
        <a href="#dispatches" className="hover:opacity-100 transition-opacity hidden md:block">Dispatches</a>
        <a href="#contact" className="hover:opacity-100 transition-opacity border-b-2 border-transparent hover:border-[#7851A9] pb-1">Initiate</a>
      </div>
    </motion.nav>
  );
};

const BackgroundGlow = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FFFFFF] blur-[120px] rounded-full"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 6, ease: "easeOut", delay: 1 }}
        className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[#7851A9] blur-[150px] rounded-full mix-blend-screen"
      />
    </div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls past 500px or approximately the hero section
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E5E5E5] font-sans relative selection:bg-white/99 selection:text-black">
      <BackgroundGlow />
      <NavBar />
      
      <main className="relative z-10 w-full overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 relative">
          <motion.div style={{ opacity }} className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <h1 className="font-light text-[48px] sm:text-[72px] md:text-[84px] leading-[0.95] tracking-tighter text-white mb-8 sm:mb-12">
                Sovereign Tech <br />
                <span className="italic font-serif opacity-80">R&D Studio.</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              <div className="md:col-span-4 lg:col-span-4 font-mono text-[9px] uppercase tracking-[0.2em] text-[#555555] leading-relaxed hidden sm:block">
                <p>[ Operating globally ]</p>
                <div className="inline-flex items-center gap-2 mt-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7851A9] shadow-[0_0_8px_rgba(120,81,169,0.7)] animate-pulse"></span>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-[#777777]">System: Active</span>
                </div>
              </div>
              <div className="md:col-span-8 lg:col-span-8 max-w-3xl md:border-l md:border-white/10 md:pl-12">
                <p className="text-sm leading-relaxed text-[#999999] font-light mb-8">
                  Architecting, building, and investing in impactful tech products, brands, businesses, and solutions for a sustainable future worth living in.
                </p>
                <button className="px-8 py-3 bg-white text-black text-[10px] uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors">
                  Explore Possibilities
                </button>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Our Philosophy Section */}
        <section id="philosophy" className="py-32 px-6 md:px-12 border-t border-white/5 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-16 md:gap-32"
            >
              <div className="md:w-1/3">
                <h2 className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#7851A9] mb-2">01 // Our Philosophy</h2>
                <div className="text-xs font-medium text-[#E5E5E5]">Vision & Principles</div>
              </div>
              <div className="md:w-2/3 flex flex-col gap-12">
                <h3 className="text-3xl md:text-[42px] leading-[1.05] tracking-tighter text-white font-light">
                  Architecting progress through <span className="italic font-serif opacity-80">sovereign</span> innovation and <span className="italic font-serif opacity-80">sustainable</span> deployment.
                </h3>
                <div className="w-full h-[1px] bg-white/5" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white mb-4">Sovereign Autonomy</h4>
                    <p className="text-sm text-[#999999] font-light leading-relaxed">
                      We believe in technology that empowers, not extracts. Our R&D focuses on decentralized infrastructure, sovereign systems, and privacy-preserving primitives that give ownership back to the individual.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-[#7851A9] mb-4">Generational Capital</h4>
                    <p className="text-sm text-[#999999] font-light leading-relaxed">
                      Investment is an expression of intent. We allocate capital exclusively to ventures building the hard technical foundations required for a sustainable, energy-abundant future.
                    </p>
                  </div>
                  <div className="sm:col-span-2 text-sm text-[#999999] font-light leading-relaxed border-l border-[#7851A9]/30 pl-6 mt-4 italic">
                    "We do not predict the future; we construct the primitives that make a future worth living in inevitable."
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pillars / Competencies */}
        <section id="ventures" className="py-32 px-6 md:px-12 border-t border-white/5 bg-black/20">
          <div className="max-w-6xl mx-auto">
             <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="mb-24 flex flex-col md:flex-row gap-8 justify-between md:items-end"
             >
                <h2 className="text-4xl md:text-[56px] leading-[0.95] tracking-tighter text-white font-light">Capabilities_</h2>
                <div className="text-[9px] uppercase tracking-[0.2em] text-[#555555] border border-white/5 px-5 py-2.5 rounded-sm inline-flex self-start md:self-auto uppercase">
                  Systems & Capital
                </div>
             </motion.div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Cpu className="w-5 h-5 stroke-1" />,
                    title: "R&D Studio",
                    desc: "Applied research and rapid prototyping of sovereign technologies. From underlying protocol design to refined user interfaces."
                  },
                  {
                    icon: <Globe className="w-5 h-5 stroke-1" />,
                    title: "Holding Co",
                    desc: "Strategic capital allocation and incubation of ventures that align with our thesis of a sustainable, decentralized future."
                  },
                  {
                    icon: <Sparkles className="w-5 h-5 stroke-1" />,
                    title: "Brand Architecture",
                    desc: "Elevating complex technical primitives into compelling, authoritative narratives and market-defining products."
                  }
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                    key={i} 
                    className="group p-8 border border-white/5 hover:border-[#7851A9]/40 bg-transparent hover:bg-[#7851A9]/[0.02] transition-colors duration-500 flex flex-col gap-6 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7851A9]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="text-[#555555] group-hover:text-white transition-colors duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-3 tracking-wide text-white">{item.title}</h4>
                      <p className="text-[#999999] font-light text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>
      </main>

        {/* Future Horizons Section */}
        <section id="horizons" className="py-32 px-6 md:px-12 border-t border-white/5 relative z-10 overflow-hidden">
          <div className="max-w-6xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-24 flex flex-col md:flex-row gap-8 justify-between md:items-end"
            >
              <div>
                 <h2 className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#7851A9] mb-4">02 // The Trajectory</h2>
                 <h2 className="text-4xl md:text-[56px] leading-[0.95] tracking-tighter text-white font-light">Future <span className="italic font-serif opacity-80">Horizons</span></h2>
              </div>
            </motion.div>

            <div className="relative">
               {/* Timeline Line */}
               <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#7851A9]/50 to-transparent md:-translate-x-1/2"></div>
               
               <div className="flex flex-col gap-20">
                 {[
                    { year: "2026", title: "Sovereign Primitives", desc: "Establishing the foundational cryptographic and hardware layers for decentralized data ownership." },
                    { year: "2028", title: "Autonomous Networks", desc: "Deploying self-healing, mesh-based communication and energy grids independent of central points of failure." },
                    { year: "2030", title: "Cognitive Infrastructure", desc: "Integrating local-first, privacy-preserving spatial intelligence into daily human and machine operations." }
                 ].map((h, i) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      key={i}
                      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                       {/* Content */}
                       <div className={`md:w-1/2 flex flex-col ${i % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"} pl-12 md:pl-0`}>
                          <div className="text-[10px] uppercase tracking-[0.2em] text-[#7851A9] mb-2 font-mono">Phase {i+1}</div>
                          <h3 className="text-2xl font-light text-white mb-4">{h.title}</h3>
                          <p className="text-sm text-[#999999] font-light max-w-sm">{h.desc}</p>
                       </div>
                       
                       {/* Node */}
                       <div className="absolute left-[15px] md:static md:w-16 flex justify-center -ml-[7px] md:ml-0 z-10">
                          <div className="w-[15px] h-[15px] rounded-full bg-[#0A0A0B] border-2 border-[#7851A9] relative">
                             <motion.div 
                               animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                               className="absolute inset-0 rounded-full bg-[#7851A9]"
                             />
                          </div>
                       </div>

                       {/* Year */}
                       <div className={`md:w-1/2 hidden md:flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                         <div className="text-[80px] leading-none font-bold tracking-tighter text-white/[0.03] select-none">
                           {h.year}
                         </div>
                       </div>
                    </motion.div>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-32 px-6 md:px-12 border-t border-white/5 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-24 flex flex-col md:flex-row gap-8 justify-between md:items-end"
            >
              <div>
                <h2 className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#7851A9] mb-4">03 // The Work</h2>
                <h2 className="text-4xl md:text-[56px] leading-[0.95] tracking-tighter text-white font-light">Selected<br/><span className="italic font-serif opacity-80">Ventures</span></h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Project 1 - Large */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="group relative h-[400px] md:h-[600px] w-full overflow-hidden flex items-end p-8 border border-white/5"
              >
                <img src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=1200&auto=format&fit=crop" alt="Aether Node" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-40 group-hover:opacity-20 grayscale brightness-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="text-[9px] uppercase tracking-widest text-[#7851A9] mb-3">Energy Infrastructure</div>
                  <h3 className="text-2xl font-light text-white mb-2">Aether Node</h3>
                  <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                    <p className="text-sm text-[#999999] font-light mt-4 mb-6 max-w-sm">
                      Autonomous macro-grid storage solutions optimizing decentralized clean energy distribution.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white hover:text-[#7851A9] transition-colors border-b border-white/20 hover:border-[#7851A9] pb-1">
                      View Dispatch
                    </a>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-col gap-6">
                {/* Project 2 */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="group relative h-[400px] md:h-[288px] w-full overflow-hidden flex items-end p-8 border border-white/5"
                >
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" alt="Cipher Core" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-40 group-hover:opacity-20 grayscale brightness-75" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative z-10 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="text-[9px] uppercase tracking-widest text-[#7851A9] mb-3">Sovereign Primitives</div>
                    <h3 className="text-xl font-light text-white mb-2">Obelisk Cipher</h3>
                    <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                      <p className="text-sm text-[#999999] font-light mt-3 mb-5 max-w-sm">
                        Zero-knowledge cryptographic hardware embedded for sovereign personal data networks.
                      </p>
                      <a href="#" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white hover:text-[#7851A9] transition-colors border-b border-white/20 hover:border-[#7851A9] pb-1">
                        View Dispatch
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Project 3 */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="group relative h-[400px] md:h-[288px] w-full overflow-hidden flex items-end p-8 border border-white/5"
                >
                  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" alt="Synapse AI" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-30 group-hover:opacity-10 grayscale brightness-75" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative z-10 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="text-[9px] uppercase tracking-widest text-[#7851A9] mb-3">Applied Intelligence</div>
                    <h3 className="text-xl font-light text-white mb-2">Synapse Protocol</h3>
                    <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                      <p className="text-sm text-[#999999] font-light mt-3 mb-5 max-w-sm">
                        Local-first spatial intelligence models running entirely on edge compute.
                      </p>
                      <a href="#" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white hover:text-[#7851A9] transition-colors border-b border-white/20 hover:border-[#7851A9] pb-1">
                        View Dispatch
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Dispatches / Blog Section */}
        <section id="dispatches" className="py-32 px-6 md:px-12 border-t border-white/5 relative z-10 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-24 flex flex-col md:flex-row gap-8 justify-between md:items-end"
            >
              <div>
                <h2 className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#7851A9] mb-4">04 // Dispatches</h2>
                <h2 className="text-4xl md:text-[56px] leading-[0.95] tracking-tighter text-white font-light">Signal in <br/><span className="italic font-serif opacity-80">the Noise</span></h2>
              </div>
              <button className="text-[10px] uppercase tracking-widest text-white border-b border-white/20 hover:border-[#7851A9] hover:text-[#7851A9] pb-1 transition-colors self-start md:self-auto">
                 Read All Dispatches
              </button>
            </motion.div>

            <div className="flex flex-col border-t border-white/5">
              {[
                {
                  date: "2026.04.12",
                  title: "The Future of Sustainable Technology",
                  desc: "Why true sustainability requires a paradigm shift from energy extraction to generative network deployment.",
                  author: "The JULZ Team",
                  category: "Thesis"
                },
                {
                  date: "2026.03.28",
                  title: "Architecting Impactful Digital Solutions",
                  desc: "Designing protocols that prioritize individual sovereignty while maintaining global state consensus.",
                  author: "The JULZ Team",
                  category: "Architecture"
                },
                {
                  date: "2026.02.15",
                  title: "Investment Strategies for a Better Tomorrow",
                  desc: "Evaluating the underlying tech primitives rather than surface-level applications for generational alpha.",
                  author: "The JULZ Team",
                  category: "Capital"
                }
              ].map((post, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  key={i}
                  className="group flex flex-col md:flex-row gap-6 md:gap-16 py-10 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer px-4 -mx-4"
                >
                   <div className="md:w-1/4 flex flex-col gap-2">
                     <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#555555] group-hover:text-[#7851A9] transition-colors">{post.date}</span>
                     <span className="text-[10px] uppercase tracking-widest text-[#999999]">{post.category}</span>
                   </div>
                   <div className="md:w-1/2">
                     <h3 className="text-xl text-white font-light mb-3 group-hover:text-[#7851A9] transition-colors">{post.title}</h3>
                     <p className="text-sm text-[#777777] font-light leading-relaxed">{post.desc}</p>
                   </div>
                   <div className="md:w-1/4 flex items-center md:justify-end mt-4 md:mt-0">
                     <div className="flex items-center gap-4">
                       <div className="text-[10px] text-[#555555] uppercase tracking-widest">By {post.author}</div>
                       <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#7851A9] group-hover:bg-[#7851A9]/10 transition-all">
                         <ArrowRight className="w-3 h-3 text-[#555555] group-hover:text-[#7851A9]" />
                       </div>
                     </div>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 md:px-12 border-t border-white/5 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-[56px] leading-[0.95] tracking-tighter text-white font-light mb-6">
                  Initiate <span className="italic font-serif opacity-80 text-[#7851A9]">Transmission</span>
                </h2>
                <p className="text-sm text-[#999999] font-light max-w-lg mx-auto">
                  We seek visionary founders, aligned capital, and engineering talent committed to high-impact problem solving.
                </p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#050505]/50 border border-white/5 p-8 sm:p-12">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-[#555555]">Identity</label>
                  <input type="text" id="name" placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder-[#333333] focus:outline-none focus:border-[#7851A9] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-[#555555]">Terminal</label>
                  <input type="email" id="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder-[#333333] focus:outline-none focus:border-[#7851A9] transition-colors" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="company" className="text-[10px] uppercase tracking-widest text-[#555555]">Affiliation</label>
                  <input type="text" id="company" placeholder="Company / Organization" className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder-[#333333] focus:outline-none focus:border-[#7851A9] transition-colors" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-[#555555]">Transmission</label>
                  <textarea id="message" rows={4} placeholder="Purpose of contact..." className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder-[#333333] focus:outline-none focus:border-[#7851A9] transition-colors resize-none"></textarea>
                </div>
                <div className="md:col-span-2 flex justify-end mt-4">
                  <button type="button" onClick={(e) => e.preventDefault()} className="px-8 py-3 bg-white text-black text-[10px] uppercase tracking-widest font-bold hover:bg-[#7851A9] hover:text-white transition-colors">
                    Execute Protocol
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

      <footer className="relative z-10 border-t border-white/5 py-12 px-6 md:px-12 bg-transparent">
        <div className="max-w-6xl mx-auto flex flex-col xl:flex-row justify-between items-start xl:items-end gap-16 xl:gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 w-full xl:w-auto flex-1">
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-[#555555] mb-2">Studio [01]</div>
              <div className="text-xs font-medium text-[#E5E5E5]">Autonomous Systems</div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-[#555555] mb-2">Ventures [02]</div>
              <div className="text-xs font-medium text-[#E5E5E5]">Clean Energy Alpha</div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-[#555555] mb-2">Holdings [03]</div>
              <div className="text-xs font-medium text-[#E5E5E5]">Digital Infrastructure</div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-[#555555] mb-2">Dispatches [04]</div>
              <form className="relative flex items-center w-full max-w-[200px]" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Join the network..." className="w-full bg-transparent border-b border-white/10 pb-1 text-xs text-white placeholder-[#555555] focus:outline-none focus:border-[#7851A9] transition-colors pr-6" required />
                <button type="submit" className="absolute right-0 bottom-[5px] text-[#555555] hover:text-[#7851A9] transition-colors" aria-label="Subscribe">
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="text-left xl:text-right w-full xl:w-auto">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-[#777777]">System Status: Active</span>
            </div>
            <div className="text-[10px] tracking-widest text-[#555555] uppercase">
              © {new Date().getFullYear()} JULZ SOVEREIGN TECH
            </div>
          </div>
        </div>
      </footer>
      
      {/* Background Texture/Detail */}
      <div className="absolute bottom-0 right-0 p-4 opacity-[0.02] select-none pointer-events-none z-0">
        <div className="text-[100px] md:text-[180px] font-bold leading-none tracking-tighter">ALPHA</div>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 p-3 bg-[#0A0A0B] border border-white/10 hover:border-[#7851A9] group transition-colors duration-300 pointer-events-auto"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-[#555555] group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

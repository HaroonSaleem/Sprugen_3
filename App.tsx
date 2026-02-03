
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  Target, 
  TrendingUp, 
  ArrowRight, 
  Mail, 
  Database, 
  CheckCircle2,
  Cpu,
  Linkedin,
  Menu,
  X,
  CalendarDays,
  Rocket,
  ShoppingCart,
  MessageCircle,
  Share2,
  CreditCard,
  Crosshair,
  Repeat,
  BarChart3,
  BrainCircuit,
  Activity,
  Quote
} from 'lucide-react';
import { NeuralNetworkBackground } from './components/NeuralNetworkBackground';
import { AgenticWorkflowAnimation } from './components/AgenticWorkflowAnimation';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const coreServices = [
    { title: "Sales Lead Automation", desc: "Capture leads and move them directly into your pipeline with zero friction.", icon: <Crosshair className="text-blue-400" /> },
    { title: "Omnichannel Follow-up", desc: "Instant automated responses across WhatsApp & Email that feel human.", icon: <Repeat className="text-cyan-400" /> },
    { title: "CRM Orchestration", desc: "Auto-sync HubSpot, Zoho, or Pipedrive without manual entry or data loss.", icon: <Database className="text-purple-400" /> },
    { title: "Reporting Automation", desc: "Real-time Google Sheets & analytics updates for data-driven decisions.", icon: <BarChart3 className="text-emerald-400" /> },
    { title: "Appointment Booking", desc: "AI-driven scheduling to fill your calendar 24/7 with qualified prospects.", icon: <CalendarDays className="text-orange-400" /> },
    { title: "Customer Onboarding", desc: "Automate the complex transition from lead to happy customer seamlessly.", icon: <Rocket className="text-pink-400" /> },
    { title: "E-commerce Ops", desc: "Streamline order processing, logistics, and customer updates.", icon: <ShoppingCart className="text-indigo-400" /> },
    { title: "Custom AI Assistants", desc: "Custom-built chat agents specialized for your specific business niche.", icon: <BrainCircuit className="text-yellow-400" /> },
    { title: "Social Automation", desc: "Maintain constant brand presence across all major platforms effortlessly.", icon: <Share2 className="text-red-400" /> },
    { title: "Invoice Workflows", desc: "Connect Stripe and billing tools for automated payment recovery and receipts.", icon: <CreditCard className="text-blue-500" /> }
  ];

  const Logo = () => (
    <div className="flex items-center gap-3 group">
      <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
        <img src="logo.png" alt="Sprugen Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
      </div>
      <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-white transition-all duration-300">Sprugen</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 overflow-x-hidden">
      {/* Premium Background Blobs */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" 
        />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#020617]/90 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#"><Logo /></a>
          
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Pricing', 'Contact', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Free Audit
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#020617] pt-24 px-6 md:hidden glass-card"
          >
            <div className="flex flex-col gap-6 text-center">
              {['Services', 'Pricing', 'Contact', 'About'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">
                  {item}
                </a>
              ))}
              <button className="mt-4 px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-bold">
                Free Audit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <NeuralNetworkBackground />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 animate-float">
              <Zap size={14} /> Agentic AI Agency
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
              AI Automation That <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">Drives Real Revenue.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
              Practical AI agents that automate your sales, follow-ups, and operations so your team can focus on closing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                Book Free Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#services" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 text-center transition-all flex items-center justify-center">
                Explore Services
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-card rounded-3xl p-8 border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 animate-pulse">
                      <Activity size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold flex items-center gap-2">
                        <Cpu size={16} className="text-blue-400" /> Sprugen Active Agent
                      </h3>
                      <p className="text-xs text-gray-400">Status: <span className="text-cyan-400">Optimizing Pipeline</span></p>
                    </div>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></div>
                </div>
                
                <div className="space-y-6">
                  {[
                    { label: 'Lead Qualification', status: '92% Match', progress: 92, icon: <Target size={18} /> },
                    { label: 'WhatsApp Outreach', status: 'Active', progress: 100, icon: <MessageCircle size={18} /> },
                    { label: 'CRM Synchronization', status: 'Syncing', progress: 40, icon: <Database size={18} /> }
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-blue-500/20 transition-all duration-500">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <span className="text-blue-400">{item.icon}</span>
                          {item.label}
                        </div>
                        <span className="text-[10px] text-blue-400 uppercase font-bold tracking-tighter">{item.status}</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                          className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold mb-1">Total Revenue Lift</p>
                      <h4 className="text-2xl font-black text-white">+28.5%</h4>
                    </div>
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                      <TrendingUp className="text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-[#020617] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs mb-4">Core Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-6">Scale Your Business <br/><span className="text-blue-500">Automatically.</span></h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              We build revenue-generating workflows tailored to your specific ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-[2.5rem] glass-card border border-white/5 hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-blue-600/10 transition-all duration-500">
                  {React.cloneElement(service.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h4>
                <p className="text-gray-500 text-base leading-relaxed group-hover:text-gray-400 transition-colors">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            {/* FIX: Changed 'class' to 'className' in the span element below */}
            <h3 className="text-4xl md:text-6xl font-black mb-4">Pricing <span className="text-blue-500">Packages.</span></h3>
            <p className="text-gray-400 text-lg">Transparent automation systems designed for business impact.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "AI Starter Pack", 
                price: "$999", 
                tag: "Best for SMEs", 
                features: ["1–3 workflow automations", "Lead capture + follow-up", "CRM Integration", "Basic reporting"],
                cta: "Get Started"
              },
              { 
                name: "Sales Growth System", 
                price: "$2,500", 
                tag: "High Impact", 
                highlight: true,
                popular: true,
                features: ["Full lead intake engine", "AI follow-up sequences", "Custom CRM logic", "Advanced ROI Dashboard", "30-day priority support"],
                cta: "Launch Engine"
              },
              { 
                name: "Enterprise", 
                price: "Custom/mo", 
                tag: "Enterprise", 
                features: ["Continuous optimization", "Dedicated AI Architect", "Unlimited workflow support", "Full strategic partnership"],
                cta: "Contact Sales"
              }
            ].map((offer, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative p-10 rounded-[2.5rem] transition-all duration-500 ${offer.highlight ? 'bg-blue-600 shadow-2xl shadow-blue-600/30 transform scale-[1.02]' : 'glass-card border border-white/5 hover:border-blue-500/20'}`}
              >
                {offer.popular && <div className="absolute top-0 right-10 -translate-y-1/2 px-5 py-1.5 bg-cyan-400 text-blue-900 text-xs font-black rounded-full uppercase tracking-tighter">Most Popular</div>}
                <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${offer.highlight ? 'text-blue-100' : 'text-blue-400'}`}>{offer.tag}</div>
                <h4 className="text-2xl font-black mb-6">{offer.name}</h4>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black tracking-tighter">{offer.price}</span>
                  <span className={`text-sm ${offer.highlight ? 'text-blue-100' : 'text-gray-500'}`}>{offer.name.includes('Enterprise') ? '' : 'setup'}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {offer.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-base font-medium">
                      <CheckCircle2 size={20} className={offer.highlight ? 'text-cyan-300' : 'text-blue-500'} />
                      <span className={offer.highlight ? 'text-blue-50' : 'text-gray-400'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-2xl font-bold transition-all ${offer.highlight ? 'bg-white text-blue-600 hover:bg-blue-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-600 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'}`}>
                  {offer.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-[#020617] to-[#0f172a]">
        {/* FIX: Changed 'class' to 'className' in several elements below */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-7xl font-black mb-8 text-center tracking-tighter">Ready to <span className="text-blue-500">Scale?</span></h3>
            <p className="text-xl text-gray-400 leading-relaxed">Book your free audit and see exactly what we can automate.</p>
          </div>
          
          <motion.form 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16 rounded-[4rem] border border-white/10 space-y-8 hover:border-blue-500/10 transition-colors duration-700"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-400 tracking-wide uppercase">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-blue-500 transition-all outline-none focus:bg-white/[0.08]" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-400 tracking-wide uppercase">Email Address</label>
                <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-blue-500 transition-all outline-none focus:bg-white/[0.08]" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-400 tracking-wide uppercase">Phone Number</label>
                <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-blue-500 transition-all outline-none focus:bg-white/[0.08]" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-400 tracking-wide uppercase">Company Name</label>
                <input type="text" placeholder="Acme Inc." className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-blue-500 transition-all outline-none focus:bg-white/[0.08]" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold text-gray-400 tracking-wide uppercase">Business Objective</label>
              <textarea placeholder="Tell us what you want to automate..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-blue-500 transition-all outline-none focus:bg-white/[0.08]"></textarea>
            </div>
            {/* FIX: Changed 'class' to 'className' in the button below */}
            <button type="submit" className="w-full py-5 bg-blue-600 rounded-2xl font-black text-xl hover:bg-blue-500 shadow-2xl shadow-blue-500/30 transition-all active:scale-[0.98]">Send Message</button>
          </motion.form>
        </div>
      </section>

      {/* About / Founder Section */}
      <section id="about" className="py-32 bg-[#020617]">
        {/* FIX: Changed 'class' to 'className' below */}
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[4rem] p-10 md:p-20 border border-white/10 relative overflow-hidden hover:border-blue-500/10 transition-all duration-1000"
          >
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/5 rounded-full blur-[120px]"></div>
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-white mb-10 shadow-2xl shadow-blue-500/20">
                  <Quote size={40} />
                </div>
                <blockquote className="text-3xl md:text-5xl font-bold leading-tight mb-12 text-white tracking-tight">
                  {/* FIX: Changed 'class' to 'className' in the span element below */}
                  "Your team's brilliance is your competitive advantage. <span className="text-blue-400">Let's stop wasting it</span> on work that machines can do better."
                </blockquote>
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/30 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300" alt="Haroon" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-black text-2xl tracking-tight">Haroon</h5>
                    <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.3em]">Founder @ Sprugen</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Revenue Growth", val: "+35%" },
                  { label: "Hours Saved/Mo", val: "120+" },
                  { label: "Response Time", val: "<1m" },
                  { label: "Avg. ROI", val: "4.5x" }
                ].map((stat, i) => (
                  <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/5 text-center group hover:bg-blue-600/10 hover:border-blue-500/10 transition-all duration-500">
                    <div className="text-5xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors tracking-tighter">{stat.val}</div>
                    <div className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 bg-[#020617] relative">
        {/* FIX: Changed 'class' to 'className' in the grid container below */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#"><Logo /></a>
            <p className="text-gray-500 max-w-sm mb-10 text-lg leading-relaxed mt-8">Practical AI automation systems that increase revenue by automating sales, follow-ups, and operations.</p>
            <div className="flex gap-5">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@sprugen.com" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div>
            <h6 className="font-black mb-8 text-xs uppercase tracking-[0.3em] text-blue-400">Services</h6>
            {/* FIX: Changed 'class' to 'className' in the ul element below */}
            <ul className="space-y-5 text-gray-500 text-base font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Lead Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">CRM Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-commerce Workflows</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-black mb-8 text-xs uppercase tracking-[0.3em] text-blue-400">Company</h6>
            {/* FIX: Changed 'class' to 'className' in the ul element below */}
            <ul className="space-y-5 text-gray-500 text-base font-medium">
              <li><a href="#about" className="hover:text-white transition-colors">Founder Story</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        {/* FIX: Changed 'class' to 'className' in the div element below */}
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-600">© 2024 Sprugen AI Agency. All rights reserved.</div>
          <div className="flex gap-10 text-xs text-gray-700 font-bold uppercase tracking-widest">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

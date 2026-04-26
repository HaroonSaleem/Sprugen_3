
import React, { useState, useEffect, useRef } from 'react';
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
  Quote,
  ChevronDown
} from 'lucide-react';
import { NeuralNetworkBackground } from './NeuralNetworkBackground';
import { AgenticWorkflowAnimation } from './AgenticWorkflowAnimation';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string;

const dialCountries = [
  { flag: '🇦🇫', name: 'Afghanistan', dial: '+93' },
  { flag: '🇦🇱', name: 'Albania', dial: '+355' },
  { flag: '🇩🇿', name: 'Algeria', dial: '+213' },
  { flag: '🇦🇩', name: 'Andorra', dial: '+376' },
  { flag: '🇦🇴', name: 'Angola', dial: '+244' },
  { flag: '🇦🇬', name: 'Antigua and Barbuda', dial: '+1-268' },
  { flag: '🇦🇷', name: 'Argentina', dial: '+54' },
  { flag: '🇦🇲', name: 'Armenia', dial: '+374' },
  { flag: '🇦🇺', name: 'Australia', dial: '+61' },
  { flag: '🇦🇹', name: 'Austria', dial: '+43' },
  { flag: '🇦🇿', name: 'Azerbaijan', dial: '+994' },
  { flag: '🇧🇸', name: 'Bahamas', dial: '+1-242' },
  { flag: '🇧🇭', name: 'Bahrain', dial: '+973' },
  { flag: '🇧🇩', name: 'Bangladesh', dial: '+880' },
  { flag: '🇧🇧', name: 'Barbados', dial: '+1-246' },
  { flag: '🇧🇾', name: 'Belarus', dial: '+375' },
  { flag: '🇧🇪', name: 'Belgium', dial: '+32' },
  { flag: '🇧🇿', name: 'Belize', dial: '+501' },
  { flag: '🇧🇯', name: 'Benin', dial: '+229' },
  { flag: '🇧🇹', name: 'Bhutan', dial: '+975' },
  { flag: '🇧🇴', name: 'Bolivia', dial: '+591' },
  { flag: '🇧🇦', name: 'Bosnia and Herzegovina', dial: '+387' },
  { flag: '🇧🇼', name: 'Botswana', dial: '+267' },
  { flag: '🇧🇷', name: 'Brazil', dial: '+55' },
  { flag: '🇧🇳', name: 'Brunei', dial: '+673' },
  { flag: '🇧🇬', name: 'Bulgaria', dial: '+359' },
  { flag: '🇧🇫', name: 'Burkina Faso', dial: '+226' },
  { flag: '🇧🇮', name: 'Burundi', dial: '+257' },
  { flag: '🇨🇻', name: 'Cabo Verde', dial: '+238' },
  { flag: '🇰🇭', name: 'Cambodia', dial: '+855' },
  { flag: '🇨🇲', name: 'Cameroon', dial: '+237' },
  { flag: '🇨🇦', name: 'Canada', dial: '+1' },
  { flag: '🇨🇫', name: 'Central African Republic', dial: '+236' },
  { flag: '🇹🇩', name: 'Chad', dial: '+235' },
  { flag: '🇨🇱', name: 'Chile', dial: '+56' },
  { flag: '🇨🇳', name: 'China', dial: '+86' },
  { flag: '🇨🇴', name: 'Colombia', dial: '+57' },
  { flag: '🇰🇲', name: 'Comoros', dial: '+269' },
  { flag: '🇨🇩', name: 'Congo (DRC)', dial: '+243' },
  { flag: '🇨🇬', name: 'Congo (Republic)', dial: '+242' },
  { flag: '🇨🇷', name: 'Costa Rica', dial: '+506' },
  { flag: '🇭🇷', name: 'Croatia', dial: '+385' },
  { flag: '🇨🇺', name: 'Cuba', dial: '+53' },
  { flag: '🇨🇾', name: 'Cyprus', dial: '+357' },
  { flag: '🇨🇿', name: 'Czech Republic', dial: '+420' },
  { flag: '🇩🇰', name: 'Denmark', dial: '+45' },
  { flag: '🇩🇯', name: 'Djibouti', dial: '+253' },
  { flag: '🇩🇲', name: 'Dominica', dial: '+1-767' },
  { flag: '🇩🇴', name: 'Dominican Republic', dial: '+1-809' },
  { flag: '🇪🇨', name: 'Ecuador', dial: '+593' },
  { flag: '🇪🇬', name: 'Egypt', dial: '+20' },
  { flag: '🇸🇻', name: 'El Salvador', dial: '+503' },
  { flag: '🇬🇶', name: 'Equatorial Guinea', dial: '+240' },
  { flag: '🇪🇷', name: 'Eritrea', dial: '+291' },
  { flag: '🇪🇪', name: 'Estonia', dial: '+372' },
  { flag: '🇸🇿', name: 'Eswatini', dial: '+268' },
  { flag: '🇪🇹', name: 'Ethiopia', dial: '+251' },
  { flag: '🇫🇯', name: 'Fiji', dial: '+679' },
  { flag: '🇫🇮', name: 'Finland', dial: '+358' },
  { flag: '🇫🇷', name: 'France', dial: '+33' },
  { flag: '🇬🇦', name: 'Gabon', dial: '+241' },
  { flag: '🇬🇲', name: 'Gambia', dial: '+220' },
  { flag: '🇬🇪', name: 'Georgia', dial: '+995' },
  { flag: '🇩🇪', name: 'Germany', dial: '+49' },
  { flag: '🇬🇭', name: 'Ghana', dial: '+233' },
  { flag: '🇬🇷', name: 'Greece', dial: '+30' },
  { flag: '🇬🇩', name: 'Grenada', dial: '+1-473' },
  { flag: '🇬🇹', name: 'Guatemala', dial: '+502' },
  { flag: '🇬🇳', name: 'Guinea', dial: '+224' },
  { flag: '🇬🇼', name: 'Guinea-Bissau', dial: '+245' },
  { flag: '🇬🇾', name: 'Guyana', dial: '+592' },
  { flag: '🇭🇹', name: 'Haiti', dial: '+509' },
  { flag: '🇭🇳', name: 'Honduras', dial: '+504' },
  { flag: '🇭🇺', name: 'Hungary', dial: '+36' },
  { flag: '🇮🇸', name: 'Iceland', dial: '+354' },
  { flag: '🇮🇳', name: 'India', dial: '+91' },
  { flag: '🇮🇩', name: 'Indonesia', dial: '+62' },
  { flag: '🇮🇷', name: 'Iran', dial: '+98' },
  { flag: '🇮🇶', name: 'Iraq', dial: '+964' },
  { flag: '🇮🇪', name: 'Ireland', dial: '+353' },
  { flag: '🇮🇱', name: 'Israel', dial: '+972' },
  { flag: '🇮🇹', name: 'Italy', dial: '+39' },
  { flag: '🇯🇲', name: 'Jamaica', dial: '+1-876' },
  { flag: '🇯🇵', name: 'Japan', dial: '+81' },
  { flag: '🇯🇴', name: 'Jordan', dial: '+962' },
  { flag: '🇰🇿', name: 'Kazakhstan', dial: '+7' },
  { flag: '🇰🇪', name: 'Kenya', dial: '+254' },
  { flag: '🇰🇮', name: 'Kiribati', dial: '+686' },
  { flag: '🇰🇼', name: 'Kuwait', dial: '+965' },
  { flag: '🇰🇬', name: 'Kyrgyzstan', dial: '+996' },
  { flag: '🇱🇦', name: 'Laos', dial: '+856' },
  { flag: '🇱🇻', name: 'Latvia', dial: '+371' },
  { flag: '🇱🇧', name: 'Lebanon', dial: '+961' },
  { flag: '🇱🇸', name: 'Lesotho', dial: '+266' },
  { flag: '🇱🇷', name: 'Liberia', dial: '+231' },
  { flag: '🇱🇾', name: 'Libya', dial: '+218' },
  { flag: '🇱🇮', name: 'Liechtenstein', dial: '+423' },
  { flag: '🇱🇹', name: 'Lithuania', dial: '+370' },
  { flag: '🇱🇺', name: 'Luxembourg', dial: '+352' },
  { flag: '🇲🇬', name: 'Madagascar', dial: '+261' },
  { flag: '🇲🇼', name: 'Malawi', dial: '+265' },
  { flag: '🇲🇾', name: 'Malaysia', dial: '+60' },
  { flag: '🇲🇻', name: 'Maldives', dial: '+960' },
  { flag: '🇲🇱', name: 'Mali', dial: '+223' },
  { flag: '🇲🇹', name: 'Malta', dial: '+356' },
  { flag: '🇲🇭', name: 'Marshall Islands', dial: '+692' },
  { flag: '🇲🇷', name: 'Mauritania', dial: '+222' },
  { flag: '🇲🇺', name: 'Mauritius', dial: '+230' },
  { flag: '🇲🇽', name: 'Mexico', dial: '+52' },
  { flag: '🇫🇲', name: 'Micronesia', dial: '+691' },
  { flag: '🇲🇩', name: 'Moldova', dial: '+373' },
  { flag: '🇲🇨', name: 'Monaco', dial: '+377' },
  { flag: '🇲🇳', name: 'Mongolia', dial: '+976' },
  { flag: '🇲🇪', name: 'Montenegro', dial: '+382' },
  { flag: '🇲🇦', name: 'Morocco', dial: '+212' },
  { flag: '🇲🇿', name: 'Mozambique', dial: '+258' },
  { flag: '🇲🇲', name: 'Myanmar', dial: '+95' },
  { flag: '🇳🇦', name: 'Namibia', dial: '+264' },
  { flag: '🇳🇷', name: 'Nauru', dial: '+674' },
  { flag: '🇳🇵', name: 'Nepal', dial: '+977' },
  { flag: '🇳🇱', name: 'Netherlands', dial: '+31' },
  { flag: '🇳🇿', name: 'New Zealand', dial: '+64' },
  { flag: '🇳🇮', name: 'Nicaragua', dial: '+505' },
  { flag: '🇳🇪', name: 'Niger', dial: '+227' },
  { flag: '🇳🇬', name: 'Nigeria', dial: '+234' },
  { flag: '🇰🇵', name: 'North Korea', dial: '+850' },
  { flag: '🇲🇰', name: 'North Macedonia', dial: '+389' },
  { flag: '🇳🇴', name: 'Norway', dial: '+47' },
  { flag: '🇴🇲', name: 'Oman', dial: '+968' },
  { flag: '🇵🇰', name: 'Pakistan', dial: '+92' },
  { flag: '🇵🇼', name: 'Palau', dial: '+680' },
  { flag: '🇵🇸', name: 'Palestine', dial: '+970' },
  { flag: '🇵🇦', name: 'Panama', dial: '+507' },
  { flag: '🇵🇬', name: 'Papua New Guinea', dial: '+675' },
  { flag: '🇵🇾', name: 'Paraguay', dial: '+595' },
  { flag: '🇵🇪', name: 'Peru', dial: '+51' },
  { flag: '🇵🇭', name: 'Philippines', dial: '+63' },
  { flag: '🇵🇱', name: 'Poland', dial: '+48' },
  { flag: '🇵🇹', name: 'Portugal', dial: '+351' },
  { flag: '🇶🇦', name: 'Qatar', dial: '+974' },
  { flag: '🇷🇴', name: 'Romania', dial: '+40' },
  { flag: '🇷🇺', name: 'Russia', dial: '+7' },
  { flag: '🇷🇼', name: 'Rwanda', dial: '+250' },
  { flag: '🇰🇳', name: 'Saint Kitts and Nevis', dial: '+1-869' },
  { flag: '🇱🇨', name: 'Saint Lucia', dial: '+1-758' },
  { flag: '🇻🇨', name: 'Saint Vincent and the Grenadines', dial: '+1-784' },
  { flag: '🇼🇸', name: 'Samoa', dial: '+685' },
  { flag: '🇸🇲', name: 'San Marino', dial: '+378' },
  { flag: '🇸🇹', name: 'São Tomé and Príncipe', dial: '+239' },
  { flag: '🇸🇦', name: 'Saudi Arabia', dial: '+966' },
  { flag: '🇸🇳', name: 'Senegal', dial: '+221' },
  { flag: '🇷🇸', name: 'Serbia', dial: '+381' },
  { flag: '🇸🇨', name: 'Seychelles', dial: '+248' },
  { flag: '🇸🇱', name: 'Sierra Leone', dial: '+232' },
  { flag: '🇸🇬', name: 'Singapore', dial: '+65' },
  { flag: '🇸🇰', name: 'Slovakia', dial: '+421' },
  { flag: '🇸🇮', name: 'Slovenia', dial: '+386' },
  { flag: '🇸🇧', name: 'Solomon Islands', dial: '+677' },
  { flag: '🇸🇴', name: 'Somalia', dial: '+252' },
  { flag: '🇿🇦', name: 'South Africa', dial: '+27' },
  { flag: '🇰🇷', name: 'South Korea', dial: '+82' },
  { flag: '🇸🇸', name: 'South Sudan', dial: '+211' },
  { flag: '🇪🇸', name: 'Spain', dial: '+34' },
  { flag: '🇱🇰', name: 'Sri Lanka', dial: '+94' },
  { flag: '🇸🇩', name: 'Sudan', dial: '+249' },
  { flag: '🇸🇷', name: 'Suriname', dial: '+597' },
  { flag: '🇸🇪', name: 'Sweden', dial: '+46' },
  { flag: '🇨🇭', name: 'Switzerland', dial: '+41' },
  { flag: '🇸🇾', name: 'Syria', dial: '+963' },
  { flag: '🇹🇼', name: 'Taiwan', dial: '+886' },
  { flag: '🇹🇯', name: 'Tajikistan', dial: '+992' },
  { flag: '🇹🇿', name: 'Tanzania', dial: '+255' },
  { flag: '🇹🇭', name: 'Thailand', dial: '+66' },
  { flag: '🇹🇱', name: 'Timor-Leste', dial: '+670' },
  { flag: '🇹🇬', name: 'Togo', dial: '+228' },
  { flag: '🇹🇴', name: 'Tonga', dial: '+676' },
  { flag: '🇹🇹', name: 'Trinidad and Tobago', dial: '+1-868' },
  { flag: '🇹🇳', name: 'Tunisia', dial: '+216' },
  { flag: '🇹🇷', name: 'Turkey', dial: '+90' },
  { flag: '🇹🇲', name: 'Turkmenistan', dial: '+993' },
  { flag: '🇹🇻', name: 'Tuvalu', dial: '+688' },
  { flag: '🇺🇬', name: 'Uganda', dial: '+256' },
  { flag: '🇺🇦', name: 'Ukraine', dial: '+380' },
  { flag: '🇦🇪', name: 'United Arab Emirates', dial: '+971' },
  { flag: '🇬🇧', name: 'United Kingdom', dial: '+44' },
  { flag: '🇺🇸', name: 'United States', dial: '+1' },
  { flag: '🇺🇾', name: 'Uruguay', dial: '+598' },
  { flag: '🇺🇿', name: 'Uzbekistan', dial: '+998' },
  { flag: '🇻🇺', name: 'Vanuatu', dial: '+678' },
  { flag: '🇻🇦', name: 'Vatican City', dial: '+39' },
  { flag: '🇻🇪', name: 'Venezuela', dial: '+58' },
  { flag: '🇻🇳', name: 'Vietnam', dial: '+84' },
  { flag: '🇾🇪', name: 'Yemen', dial: '+967' },
  { flag: '🇿🇲', name: 'Zambia', dial: '+260' },
  { flag: '🇿🇼', name: 'Zimbabwe', dial: '+263' },
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ 'Full Name': '', 'Email Address': '', 'Phone Number': '', 'Company Name': '', 'Business Objective': '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedCountry, setSelectedCountry] = useState(dialCountries.find(c => c.name === 'United States')!);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const [phoneSearch, setPhoneSearch] = useState('');
  const [rawPhone, setRawPhone] = useState('');
  const phoneDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!phoneDropdownOpen) { setPhoneSearch(''); return; }
    const handler = (e: MouseEvent) => {
      if (phoneDropdownRef.current && !phoneDropdownRef.current.contains(e.target as Node)) {
        setPhoneDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [phoneDropdownOpen]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const url = new URL(GOOGLE_SCRIPT_URL);
      url.searchParams.append('Timestamp', new Date().toLocaleString());
      (Object.entries(formData) as [string, string][]).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
      await fetch(url.toString(), { method: 'GET', mode: 'no-cors' });
      setFormStatus('success');
      setFormData({ 'Full Name': '', 'Email Address': '', 'Phone Number': '', 'Company Name': '', 'Business Objective': '' });
      setRawPhone('');
    } catch {
      setFormStatus('error');
    }
  };

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
    <div className="flex items-center gap-0 group">
      <div className="w-28 h-28 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
        <img src="/Sprugen_logo.png" alt="Sprugen Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
      </div>
      <span className="-ml-6 text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-white transition-all duration-300">Sprugen</span>
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#020617]/90 backdrop-blur-lg border-b border-white/5 py-2' : 'bg-transparent py-3'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#"><Logo /></a>
          
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {['Services', 'Pricing', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xl font-medium text-gray-400 hover:text-blue-400 transition-colors relative group whitespace-nowrap">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Free Audit
            </a>
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
              {['Services', 'Pricing', 'About'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">
                  {item}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-4 px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-bold text-center">
                Free Audit
              </a>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 mt-10 animate-float">
              <Zap size={14} /> Agentic AI Agency
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
              AI Automation That <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">Drives Real Revenue.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
              Practical AI agents that automate your sales, follow-ups, and operations so your team can focus on closing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                Book Free Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
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
            onSubmit={handleFormSubmit}
            className="glass-card p-10 md:p-16 rounded-[4rem] border border-white/10 space-y-8 hover:border-blue-500/10 transition-colors duration-700"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-400 tracking-wide uppercase">Full Name</label>
                <input type="text" name="Full Name" value={formData['Full Name']} onChange={handleFormChange} placeholder="John Doe" required className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-blue-500 transition-all outline-none focus:bg-white/[0.08]" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-400 tracking-wide uppercase">Email Address</label>
                <input type="email" name="Email Address" value={formData['Email Address']} onChange={handleFormChange} placeholder="john@company.com" required className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-blue-500 transition-all outline-none focus:bg-white/[0.08]" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-400 tracking-wide uppercase">Phone Number</label>
                <div className="flex gap-2">
                  <div ref={phoneDropdownRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setPhoneDropdownOpen(o => !o)}
                      className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white hover:bg-white/[0.08] focus:border-blue-500 transition-all outline-none whitespace-nowrap"
                    >
                      <span className="text-xl leading-none">{selectedCountry.flag}</span>
                      <span className="text-sm text-gray-300">{selectedCountry.dial}</span>
                      <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${phoneDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {phoneDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-[#0f172a] border border-white/10 rounded-2xl z-50 shadow-2xl overflow-hidden">
                        <div className="p-3 border-b border-white/10">
                          <input
                            type="text"
                            value={phoneSearch}
                            onChange={e => setPhoneSearch(e.target.value)}
                            placeholder="Search country or code..."
                            autoFocus
                            className="w-full bg-white/10 rounded-xl py-2 px-3 text-sm text-white outline-none placeholder-gray-500 focus:bg-white/15 transition-all"
                          />
                        </div>
                        <div className="max-h-56 overflow-y-auto">
                          {dialCountries
                            .filter(c =>
                              c.name.toLowerCase().includes(phoneSearch.toLowerCase()) ||
                              c.dial.includes(phoneSearch)
                            )
                            .map((c) => (
                              <button
                                key={c.name}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setPhoneDropdownOpen(false);
                                  setFormData(prev => ({ ...prev, 'Phone Number': `${c.dial} ${rawPhone}` }));
                                }}
                                className="flex items-center gap-3 w-full px-4 py-3 hover:bg-white/10 transition-colors text-left"
                              >
                                <span className="text-lg leading-none">{c.flag}</span>
                                <span className="text-sm text-gray-300 flex-1">{c.name}</span>
                                <span className="text-xs text-gray-500 shrink-0">{c.dial}</span>
                              </button>
                            ))}
                          {dialCountries.filter(c =>
                            c.name.toLowerCase().includes(phoneSearch.toLowerCase()) ||
                            c.dial.includes(phoneSearch)
                          ).length === 0 && (
                            <p className="text-center text-gray-500 text-sm py-6">No results</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    value={rawPhone}
                    onChange={(e) => {
                      const val = e.target.value;
                      setRawPhone(val);
                      setFormData(prev => ({ ...prev, 'Phone Number': `${selectedCountry.dial} ${val}` }));
                    }}
                    placeholder="555 000-0000"
                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-blue-500 transition-all outline-none focus:bg-white/[0.08]"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-400 tracking-wide uppercase">Company Name</label>
                <input type="text" name="Company Name" value={formData['Company Name']} onChange={handleFormChange} placeholder="Acme Inc." className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-blue-500 transition-all outline-none focus:bg-white/[0.08]" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold text-gray-400 tracking-wide uppercase">Business Objective</label>
              <textarea name="Business Objective" value={formData['Business Objective']} onChange={handleFormChange} placeholder="Tell us what you want to automate..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-blue-500 transition-all outline-none focus:bg-white/[0.08]"></textarea>
            </div>
            {formStatus === 'success' && (
              <p className="text-emerald-400 font-bold text-center">Message sent! We'll be in touch soon.</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-400 font-bold text-center">Something went wrong. Please try again.</p>
            )}
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full py-5 bg-blue-600 rounded-2xl font-black text-xl hover:bg-blue-500 shadow-2xl shadow-blue-500/30 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
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
                      <img src="/haroon_pic.jpeg" alt="Haroon" className="w-full h-full object-cover transition-all duration-700" />
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

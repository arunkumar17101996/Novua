import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ChevronRight, 
  GraduationCap, 
  Users, 
  BookOpen, 
  CheckCircle2, 
  Award,
  Menu,
  X,
  Stethoscope,
  Atom,
  Calculator,
  Star,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';

// --- Components ---

const BrandLogo = ({ isScrolled, onDarkBackground = false }: { isScrolled?: boolean, onDarkBackground?: boolean }) => (
  <div className="flex items-center gap-4 group">
    {/* Circular Logo Container - Enhanced with better borders and background */}
    <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full overflow-hidden border-2 border-brand-gold bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] flex-shrink-0">
      <img 
        src="/logo.png" 
        alt="Novua Edge Academy" 
        className="w-[85%] h-[85%] object-contain transform group-hover:scale-110 transition-transform duration-500"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
          if (fallback) fallback.classList.remove('hidden');
        }}
      />
      <div className="logo-fallback hidden absolute inset-0 flex items-center justify-center bg-brand-blue">
        <GraduationCap className="text-white w-1/2 h-1/2" />
      </div>
    </div>
    
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className={`font-display font-black text-xl md:text-2xl leading-tight tracking-tight transition-colors duration-300 ${
          isScrolled ? 'text-brand-blue' : (onDarkBackground ? 'text-white' : 'text-brand-blue')
        }`}>
          NOVUA EDGE
        </h1>
        <div className="flex items-center gap-2 -mt-1">
          <span className={`text-[8px] md:text-[10px] tracking-[0.4em] font-black leading-none transition-colors duration-300 ${
            isScrolled ? 'text-brand-blue/60' : (onDarkBackground ? 'text-white/60' : 'text-brand-blue/60')
          }`}>
            ACADEMY
          </span>
          <div className="h-px flex-1 bg-brand-gold" />
        </div>
      </div>
    </div>
  </div>
);

const Navbar = ({ onApply }: { onApply: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Educators', href: '#educators' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <BrandLogo isScrolled={isScrolled} onDarkBackground={false} />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`px-3 py-2 rounded-xl font-bold text-sm transition-all group relative ${
                  isScrolled ? 'text-gray-700 hover:bg-brand-blue/5' : 'text-brand-blue hover:bg-brand-blue/5'
                }`}
              >
                <span className="relative z-10 transition-colors group-hover:text-brand-gold whitespace-nowrap">{link.name}</span>
                <span className={`absolute bottom-1 left-3 right-3 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-brand-gold`} />
              </a>
            ))}
            <button 
              onClick={onApply}
              className="bg-brand-gold hover:bg-yellow-600 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="text-brand-blue" />
            ) : (
              <Menu className="text-brand-blue" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 font-medium text-lg hover:text-brand-blue"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => { setIsMenuOpen(false); onApply(); }}
                className="bg-brand-blue text-white text-center py-3 rounded-lg font-bold w-full"
              >
                Join Today
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onApply }: { onApply: () => void }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-brand-blue skew-x-[-8deg] transform translate-x-32 hidden lg:block shadow-2xl" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-0 flex items-center justify-center md:justify-start gap-4">
                <span className="w-12 h-1 bg-brand-gold rounded-full" />
                <span className="text-brand-blue font-black tracking-[.3em] text-[10px] sm:text-xs uppercase">Premium Educational Academy</span>
              </div>
              
              <div className="mt-8 mb-10 relative inline-block">
                <div className="absolute inset-0 bg-brand-blue rotate-2 rounded-[2.5rem] opacity-5 translate-x-2 translate-y-2" />
                <div className="relative bg-white border-2 border-brand-blue p-6 sm:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,26,77,0.1)]">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-blue leading-[0.9] tracking-tighter">
                    INVESTING <br /> 
                    <span className="text-brand-gold italic">IN MINDS</span> <br />
                    <span className="text-brand-accent">EMPOWERING</span> <br />
                    FUTURES!
                  </h1>
                </div>
              </div>
              
              <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-medium mx-auto md:mx-0">
                Start your success journey with Mumbai's most dedicated team for engineering & medical entrance exams.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                <button 
                  onClick={onApply} 
                  className="bg-brand-blue hover:bg-brand-dark text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-3 transition-all shadow-[0_15px_30px_rgba(0,26,77,0.3)] hover:scale-[1.02] active:scale-95"
                >
                  APPLY NOW
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 rounded-full p-0.5" />
                </button>
                <a 
                  href="https://wa.me/919699939538" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-3 transition-all shadow-[0_15px_30px_rgba(34,197,94,0.3)] hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  WHATSAPP
                </a>
              </div>
  
              <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 md:gap-8 justify-center md:justify-start">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500`}>U{i}</div>
                  ))}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white bg-brand-gold flex items-center justify-center text-[10px] font-black text-brand-blue">+</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="flex gap-1 text-brand-gold justify-center md:justify-start">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <div className="text-slate-400 text-xs md:text-sm font-bold mt-1">Join 500+ Successful Students</div>
                </div>
              </div>
            </motion.div>
  
            {/* Side Content or Image for Hero - Now visible on tablet (md) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden md:block relative"
            >
              <div className="relative z-10 p-4 bg-white/10 backdrop-blur-sm rounded-[3rem] border border-white/20">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-brand-gold p-6 lg:p-8 rounded-[2rem] shadow-xl text-brand-blue transform -rotate-3">
                      <h3 className="text-3xl lg:text-4xl font-black mb-2">15</h3>
                      <p className="font-bold text-[10px] lg:text-sm leading-tight uppercase opacity-70">Students per batch maximum</p>
                    </div>
                    <div className="bg-brand-accent p-6 lg:p-8 rounded-[2rem] shadow-xl text-white transform rotate-2 mt-8 lg:mt-12">
                      <h3 className="text-3xl lg:text-4xl font-black mb-2">100%</h3>
                      <p className="font-bold text-[10px] lg:text-sm leading-tight uppercase opacity-80">Result oriented strategies</p>
                    </div>
                    <div className="col-span-2 bg-white p-6 lg:p-8 rounded-[2.5rem] shadow-2xl flex items-center gap-4 lg:gap-6">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="text-brand-blue w-6 h-6 lg:w-8 lg:h-8" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg lg:text-xl font-black text-brand-blue">Expert Faculty</h4>
                        <p className="text-gray-500 text-sm lg:text-base font-medium">IITians & Post-Graduates</p>
                      </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: 'Concept Clear Teaching', desc: 'Focus on deep understanding rather than rote learning.', icon: BookOpen },
    { title: 'Regular Tests & Practice', desc: 'Systematic evaluation through weekly tests and assignments.', icon: CheckCircle2 },
    { title: 'Personal Attention', desc: 'Batch size limited to 15 students for maximum individual focus.', icon: Users },
    { title: 'Doubt Solving Sessions', desc: 'Dedicated time for clearing every conceptual hurdle.', icon: HelpCircle },
    { title: 'Result Oriented', desc: 'Strategies designed to excel in board and competitive exams.', icon: Award },
    { title: 'Expert Faculty', desc: 'Guided by engineers and post-graduates from top colleges.', icon: GraduationCap },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 underline-brand-gold">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">Why Choose Us?</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-brand-blue/5 rounded-2xl flex items-center justify-center mb-6">
                <f.icon className="text-brand-blue w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-blue">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Courses = ({ onApply }: { onApply: (courseName?: string) => void }) => {
  const courses = [
    {
      title: "School Excellence",
      level: "8th, 9th & 10th",
      board: "ICSE | CBSE | SSC",
      icon: BookOpen,
      features: ["All Subjects Covered", "Board Exam Focus", "Personal Attention", "Regular Test Series"],
      color: "bg-blue-600"
    },
    {
      title: "Competitive Foundation",
      level: "School Level",
      board: "MTSE | NTSE | Olympiads",
      icon: Award,
      features: ["Homi Bhabha Exam", "Maths/Science Olympiads", "Logical Reasoning", "Conceptual Depth"],
      color: "bg-brand-gold"
    },
    {
      title: "Science Success",
      level: "11th & 12th",
      board: "JEE | NEET | MHT-CET",
      icon: Atom,
      features: ["Intensive Coaching", "Physics Specialty", "Formula Mastery", "Expert Mentorship"],
      color: "bg-brand-blue",
      popular: true
    },
    {
      title: "NEET Repeater",
      level: "Medical Aspirants",
      board: "Batch 2025/2026",
      icon: Stethoscope,
      features: ["One Year Intensive", "Rank Improvement", "Full Syllabus Rev.", "Doubt Clearing"],
      color: "bg-brand-accent"
    },
    {
      title: "Home Tuitions",
      level: "Personalized",
      board: "ICSE | NEET | JEE",
      icon: Users,
      features: ["One-on-One Focus", "Science & Maths", "Convenient Timing", "Expert Tutors"],
      color: "bg-green-600"
    }
  ];

  return (
    <section id="courses" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">Our Courses</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Structured curriculum designed to build strong foundations and achieve competitive success.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {courses.map((course, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-[2.5rem] border-2 transition-all hover:scale-[1.02] ${course.popular ? 'border-brand-gold shadow-2xl scale-105 z-10' : 'border-gray-100 shadow-xl'}`}
            >
              {course.popular && (
                <div className="absolute top-6 right-6 bg-brand-gold text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className={`h-32 ${course.color} flex items-center justify-center`}>
                <course.icon className="text-white w-12 h-12 opacity-80" />
              </div>

              <div className="p-8 bg-white">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{course.level}</span>
                <h3 className="text-2xl font-bold mb-2 text-brand-blue">{course.title}</h3>
                <div className="text-brand-gold font-bold mb-6">{course.board}</div>
                
                <ul className="space-y-4 mb-10">
                  {course.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="text-green-600 w-3 h-3" />
                      </div>
                      <span className="text-sm font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onApply(course.title)}
                  className={`w-full block text-center py-4 rounded-2xl font-bold transition-all ${course.popular ? 'bg-brand-blue text-white shadow-lg' : 'bg-gray-100 text-brand-blue hover:bg-gray-200'}`}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Educators = () => {
  const educators = [
    { name: "ArunKumar Yadav", role: "Physics Educator", details: "Founder | B.E. Mechanical | 8+ yrs Exp.", avatar: "AY" },
    { name: "Aju Aniyan", role: "Biology Faculty", details: "M.Sc B.Ed | 18 years of experience", avatar: "AA" },
    { name: "Nikhil Prakash Dhyani", role: "Physics Educator", details: "M.Sc Physics Gold Medalist", avatar: "ND" },
    { name: "Rahul Pandey", role: "Physics Educator", details: "B.Tech Mechanical | 6+ yrs Exp.", avatar: "RP" },
    { name: "Javeriya Sayyed", role: "Chemistry Educator", details: "M.Sc Chemistry | NIT Sikkim", avatar: "JS" },
    { name: "Sujata Yadav", role: "Mathematics Educator", details: "M.Sc, B.Ed Mathematics", avatar: "SY" },
    { name: "Himanshu Yadav", role: "Mathematics Educator", details: "B.E. Mechanical Engineer", avatar: "HY" },
    { name: "Rishikesh Shelar", role: "Chemistry Educator", details: "M.Sc Chemistry | NIT Sikkim", avatar: "RS" },
  ];

  return (
    <section id="educators" className="py-32 bg-brand-dark overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Mentors Who <span className="text-brand-gold italic">Shape</span> Futures
            </h2>
            <p className="text-blue-100/70 text-lg leading-relaxed">
              Our expert faculty members are dedicated post-graduates and engineers from premier institutions, committed to delivering excellence.
            </p>
          </div>
          <div className="hidden lg:block">
            <Award className="text-brand-gold w-20 h-20 opacity-20" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {educators.map((ed, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/10 transition-all text-center group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-24 h-24 bg-brand-gold rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-black text-brand-blue shadow-[0_0_40px_rgba(255,184,0,0.2)] group-hover:scale-110 transition-transform">
                {ed.avatar}
              </div>
              <h3 className="text-white font-bold text-xl mb-1 group-hover:text-brand-gold transition-colors">{ed.name}</h3>
              <div className="text-blue-300 font-bold text-xs mb-4 uppercase tracking-[0.2em]">{ed.role}</div>
              <p className="text-gray-400 text-sm leading-relaxed">{ed.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sandeep Gupta",
      role: "Parent of 10th Std Student",
      content: "The personal attention my child received at Novua Edge Academy was exceptional. The 15-student batch size really makes a difference in understanding basic concepts.",
      stars: 5
    },
    {
      name: "Pratiksha Rao",
      role: "NEET Aspirant",
      content: "Best coaching institute in Bhandup for NEET. The teachers are very supportive and the doubt-solving sessions helped me clear my physics hurdles easily.",
      stars: 5
    },
    {
      name: "Ishaan Mehta",
      role: "JEE Main Student",
      content: "Arun Sir's Physics classes simplified complex equations for me. Competitive preparation here is systematic and result-oriented. Highly recommended!",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="text-brand-accent font-black text-sm uppercase tracking-[0.3em] mb-4">Real Results</div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6">Trusted by <span className="text-brand-blue">Success</span> Seekers</h2>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 relative group transition-all hover:shadow-2xl hover:bg-white"
            >
              <div className="absolute -top-6 left-10 p-4 bg-brand-gold rounded-2xl shadow-lg">
                <Quote className="text-brand-blue w-6 h-6" />
              </div>
              <div className="flex gap-1 mb-8 pt-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-10 leading-relaxed text-lg font-medium tracking-tight">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white font-black">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-brand-dark text-lg mb-0.5">{t.name}</div>
                  <div className="text-sm text-slate-400 font-bold uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a 
            href="https://maps.app.goo.gl/NUvHqDt3HyyNq3BH8" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-brand-blue font-black text-lg hover:text-brand-accent transition-all group"
          >
            See 50+ Five-Star Reviews on Google
            <div className="bg-brand-blue/5 p-2 rounded-full group-hover:bg-brand-accent group-hover:text-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { 
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop", 
      title: "Experienced Faculty",
      desc: "Guided by IITians & Gold Medalists"
    },
    { 
      url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop", 
      title: "Small Batch",
      desc: "Limited to 15 students for personal focus"
    },
    { 
      url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop", 
      title: "Weekly Mock Test",
      desc: "Systematic performance tracking"
    },
    { 
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", 
      title: "Personalized Guidance",
      desc: "One-on-one doubt solving & career planning"
    },
  ];

  return (
    <section id="why-choose-us" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 leading-tight">
              Why <span className="text-brand-accent">Novua</span> Edge?
            </h2>
            <p className="text-slate-500 text-lg">
              Our commitment to quality education through a student-centric approach.
            </p>
          </div>
          <a 
            href="https://wa.me/919699939538" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-4 bg-white px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-slate-100"
          >
            <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <MessageCircle size={20} />
            </div>
            <span className="font-bold text-brand-dark">Know More</span>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative min-h-[400px] rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer bg-slate-100"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url('${img.url}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent flex flex-col justify-end p-10 z-10">
                <h4 className="text-white font-black text-3xl tracking-tight mb-2">{img.title}</h4>
                <p className="text-blue-100/80 font-bold mb-4">{img.desc}</p>
                <div className="w-16 h-1 bg-brand-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', course: 'School Section (8th-10th)', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-+]/g, '').slice(-10))) {
      newErrors.phone = 'Please enter a valid 10-digit number';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', course: 'School Section (8th-10th)', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-brand-gold/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white font-bold text-xs uppercase tracking-widest">Admissions Open 2024-25</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Start Your <span className="text-brand-gold">Excellence</span> Journey
            </h2>
            
            <div className="space-y-10 mt-16">
              {[
                { icon: Phone, label: "Hotline Support", value: "+91 96999 39538", color: "bg-brand-blue" },
                { icon: Mail, label: "Official Inquiry", value: "novuaedgeacademy@gmail.com", color: "bg-brand-gold" },
                { icon: MapPin, label: "Institute Location", value: "Shop No 104/105, Skicity Retail, Bhandup West, Mumbai - 400078", color: "bg-brand-accent" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-8 group">
                  <div className={`w-16 h-16 ${item.color} rounded-3xl flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:rotate-12 transition-transform`}>
                    <item.icon className="text-white w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200 font-black uppercase tracking-[0.3em] mb-1 opacity-50">{item.label}</div>
                    <div className="text-xl md:text-2xl font-bold text-white tracking-tight">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] relative">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-brand-dark mb-4">Request Received!</h3>
                  <p className="text-slate-500 font-medium">Sit tight! Our coordinator will contact you via WhatsApp shortly.</p>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <h3 className="text-3xl font-black text-brand-dark mb-2 tracking-tight">Direct Admission</h3>
                  <p className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-10">Fill the form for instant callback</p>
                  
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:bg-white focus:border-brand-blue transition-all font-bold text-brand-dark" 
                        placeholder="Student Full Name" 
                      />
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:bg-white focus:border-brand-blue transition-all font-bold text-brand-dark" 
                        placeholder="WhatsApp Number" 
                      />
                      <select 
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:bg-white focus:border-brand-blue transition-all font-bold text-brand-dark appearance-none"
                      >
                        <option>School Excellence (8th-10th)</option>
                        <option>Competitive Foundation (Olympiads)</option>
                        <option>Home Tuitions (ICSE/NEET/JEE)</option>
                        <option>Science Success (11th-12th)</option>
                        <option>JEE / NEET Intensive</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full bg-brand-dark text-white py-6 rounded-2xl font-black text-xl shadow-2xl hover:bg-brand-blue hover:scale-[1.02] active:scale-[0.98] transition-all">
                      Confirm Registration
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-gold to-brand-accent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8">
              <BrandLogo onDarkBackground={true} />
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
              Investing in Minds, <span className="text-white">Empowering Futures!</span> Premium coaching center dedicated to academic and competitive excellence.
            </p>
            <div className="flex gap-4">
              {[MessageCircle, Phone, MapPin].map((Icon, idx) => (
                <div key={idx} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-brand-gold hover:text-brand-dark transition-all cursor-pointer">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-xl mb-8 tracking-tight">Academic Pathways</h4>
            <ul className="space-y-4">
              {['Board Excellence', 'IIT-JEE Intensive', 'NEET Specialization', 'Foundation (8th-10th)', 'Home Tuitions'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-brand-gold hover:translate-x-2 transition-all inline-block font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-xl mb-8 tracking-tight">Quick Navigation</h4>
            <ul className="space-y-4">
              {['Success Stories', 'Meet Mentors', 'Tour Campus', 'Enrollment', 'Contact Hub'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-xl mb-8 tracking-tight">Stay Connected</h4>
            <p className="text-slate-400 mb-6 font-medium">Get internal updates and career counseling tips regularily.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Future student email" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-4 focus:ring-brand-gold/20 focus:border-brand-gold transition-all font-bold placeholder:text-slate-600" 
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-gold px-6 rounded-xl text-brand-dark font-black text-xs uppercase tracking-widest shadow-xl">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-sm font-bold tracking-tight">
            © {new Date().getFullYear()} NOVUA EDGE ACADEMY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-10 text-slate-500 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// HelpCircle was missed in imports originally, adding it here or removing from Features
const HelpCircle = (props: any) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const WHATSAPP_NUMBER = "919699939538";

const generateWhatsAppLink = (name: string, phone: string, course: string) => {
  const text = `*New Admission Inquiry*\n\n*Student Name:* ${name}\n*Phone:* ${phone}\n*Intersted Course:* ${course}\n\nPlease share more details about this course and the admission process.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

const ApplyModal = ({ isOpen, onClose, selectedCourse }: { isOpen: boolean, onClose: () => void, selectedCourse?: string }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', course: selectedCourse || 'Foundation Batch' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedCourse) setFormData(prev => ({ ...prev, course: selectedCourse }));
  }, [selectedCourse]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-+]/g, '').slice(-10))) {
      newErrors.phone = 'Valid 10-digit number required';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const link = generateWhatsAppLink(formData.name, formData.phone, formData.course);
      window.open(link, '_blank');
      onClose();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-blue/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <div className="bg-brand-blue p-8 text-white">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-2">Apply for Admission</h3>
              <p className="text-blue-200 text-sm">Fill your details and we will connect on WhatsApp.</p>
            </div>
            
            <form className="p-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Student Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
                  className={`w-full bg-gray-50 border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-blue/20'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all`} 
                  placeholder="Enter full name" 
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">WhatsApp Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); setErrors({ ...errors, phone: '' }); }}
                  className={`w-full bg-gray-50 border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-blue/20'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all`} 
                  placeholder="+91" 
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Select Course</label>
                <select 
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all appearance-none"
                >
                  <option>School Excellence (ICSE/CBSE/SSC)</option>
                  <option>Competitive Foundation (MTSE/NTSE)</option>
                  <option>Home Tuitions (Science/Maths)</option>
                  <option>Science Success (11th/12th)</option>
                  <option>JEE / NEET Intensive</option>
                  <option>NEET Repeater Batch</option>
                </select>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]">
                <MessageCircle size={20} />
                Continue to WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>();

  const handleApplyNow = (courseName?: string) => {
    setSelectedCourse(courseName);
    setIsApplyModalOpen(true);
  };

  return (
    <div className="relative min-h-screen">
      <Navbar onApply={() => handleApplyNow()} />
      <Hero onApply={() => handleApplyNow()} />
      <Features />
      <Courses onApply={handleApplyNow} />
      <Gallery />
      <Educators />
      <Testimonials />
      <Contact />
      <Footer />

      <ApplyModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
        selectedCourse={selectedCourse} 
      />

      {/* Sticky WhatsApp Button */}
      <a 
        href="https://wa.me/919699939538" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all animate-bounce md:animate-none"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

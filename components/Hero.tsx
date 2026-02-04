import React, { useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, FileText, Zap, X, Code2, Database, Cpu } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const resumeUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  const profileImageUrl = "https://github.com/nasserbruhan/PORTIFOLIO1/blob/main/e93b9936-6da2-47cd-8ee6-2cd0d5536d93%20(1).jpg?raw=true";
  
  const [news, setNews] = useState<string | null>(null);
  const [isFetchingNews, setIsFetchingNews] = useState(false);

  const handleFetchNews = async () => {
    setIsFetchingNews(true);
    setNews(null);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random() * 100) + 1}`);
      const data = await response.json();
      setNews(data.title);
    } catch (error) {
      setNews("Failed to fetch latest updates. Please try again.");
    } finally {
      setIsFetchingNews(false);
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-slate-900 text-brand-700 dark:text-brand-400 text-[10px] font-black tracking-widest mb-8 animate-fade-in border border-slate-200 dark:border-slate-800 shadow-sm uppercase">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Remote Ready • Open to Global Teams
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[0.9] dark:text-white">
              Ntege Nasser <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-brand-600 to-indigo-500">Bruhan</span>
            </h1>
            
            <p className="text-lg sm:text-xl font-mono text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 flex items-center justify-center lg:justify-start gap-4">
              <span className="h-px w-8 bg-brand-500/30 hidden sm:block"></span>
              Full-Stack Software Developer
              <span className="h-px w-8 bg-brand-500/30 hidden lg:block"></span>
            </p>

            <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Architecting high-performance <span className="text-slate-900 dark:text-white font-bold">Backend Systems</span> and <span className="text-slate-900 dark:text-white font-bold">RESTful APIs</span> with a focus on clean, production-ready code.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-black rounded-2xl flex items-center justify-center shadow-xl shadow-brand-500/20 transition-all duration-300 hover:-translate-y-1 active:scale-95 group uppercase tracking-widest text-xs"
              >
                View Projects 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              
              <a 
                href={resumeUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-black rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-sm uppercase tracking-widest text-xs gap-2"
              >
                <Download size={18} className="text-brand-500" />
                Resume PDF
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6">
              {[
                { icon: <Github size={24} />, href: CONTACT_INFO.github, label: 'GitHub' },
                { icon: <Linkedin size={24} />, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
                { icon: <FileText size={24} />, href: resumeUrl, label: 'Resume' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener" 
                  aria-label={social.label}
                  className="text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-all hover:scale-125 transform-gpu"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Visual Profile Column */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-square">
              {/* Background Shapes */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-indigo-600 rounded-[3rem] rotate-6 opacity-10 blur-2xl"></div>
              <div className="absolute -inset-4 border-2 border-brand-500/10 rounded-[3.5rem] -rotate-3"></div>
              
              {/* Main Image Container */}
              <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl group">
                <img 
                  src={profileImageUrl} 
                  alt="Ntege Nasser Bruhan" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <div className="text-white">
                      <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70">Tech Stack Focus</p>
                      <p className="text-sm font-bold">JavaScript • C# • Python</p>
                   </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-6 -right-6 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 animate-bounce [animation-duration:3s] z-20">
                <Code2 className="text-brand-500" size={24} />
              </div>
              <div className="absolute top-1/2 -left-10 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 animate-bounce [animation-duration:4s] z-20 hidden sm:block">
                <Database className="text-indigo-500" size={24} />
              </div>
              <div className="absolute -bottom-6 right-10 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 animate-bounce [animation-duration:5s] z-20">
                <Cpu className="text-cyan-500" size={24} />
              </div>
            </div>
          </div>
          
        </div>

        {/* News Flash Ticker */}
        {news && (
          <div className="mt-20 max-w-3xl mx-auto animate-slide-up">
            <div className="relative group p-6 bg-brand-50/50 dark:bg-brand-900/10 border border-brand-200/50 dark:border-brand-800/50 rounded-3xl overflow-hidden backdrop-blur-sm flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-500 text-white rounded-xl shrink-0">
                  <Zap size={18} fill="currentColor" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-brand-500 uppercase tracking-[0.2em] mb-1">Latest Update</div>
                  <p className="text-slate-700 dark:text-slate-300 font-bold italic leading-snug">"{news}"</p>
                </div>
              </div>
              <button onClick={() => setNews(null)} className="text-slate-400 hover:text-brand-500 transition-colors p-2"><X size={20} /></button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
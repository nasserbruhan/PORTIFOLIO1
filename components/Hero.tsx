import React, { useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, ExternalLink, FileText, Newspaper, Zap, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const resumeUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  const [news, setNews] = useState<string | null>(null);
  const [isFetchingNews, setIsFetchingNews] = useState(false);

  const handleFetchNews = async () => {
    setIsFetchingNews(true);
    setNews(null);
    try {
      // Fetching from a placeholder API
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
        <div className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-slate-900 text-brand-700 dark:text-brand-400 text-xs font-bold mb-8 animate-fade-in border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            AVAILABLE FOR INTERNATIONAL REMOTE OPPORTUNITIES
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6 leading-[0.9]">
            Ntege Nasser <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-brand-600 to-indigo-500">Bruhan</span>
          </h1>
          
          <p className="text-xl sm:text-2xl font-mono text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-slate-300 dark:bg-slate-700 hidden sm:block"></span>
            Full-Stack Software Developer
            <span className="h-px w-8 bg-slate-300 dark:bg-slate-700 hidden sm:block"></span>
          </p>

          <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Specializing in high-performance <span className="text-slate-900 dark:text-white font-semibold">Backend Systems</span> and <span className="text-slate-900 dark:text-white font-semibold">RESTful APIs</span>. I build robust, production-ready applications with a focus on scalability and clean architecture.
          </p>

          <div className="flex flex-col items-center justify-center space-y-8 mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white font-extrabold rounded-2xl flex items-center justify-center shadow-xl shadow-brand-500/20 hover:shadow-2xl hover:shadow-brand-500/40 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-1.5 hover:scale-[1.05] active:scale-95 group"
              >
                Explore Projects 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
              
              <button 
                onClick={handleFetchNews}
                disabled={isFetchingNews}
                className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-70 text-white font-extrabold rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-1.5 hover:scale-[1.05] active:scale-95 group"
              >
                {isFetchingNews ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Fetching...
                  </div>
                ) : (
                  <>
                    Latest News
                    <Newspaper className="ml-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
                  </>
                )}
              </button>

              <a 
                href={resumeUrl} 
                target="_blank"
                rel="noopener noreferrer"
                download="Ntege_Nasser_Bruhan_Resume.pdf"
                className="group relative overflow-hidden w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-extrabold rounded-2xl flex items-center justify-center transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.05] active:scale-95 shadow-lg hover:shadow-brand-500/10 hover:border-brand-500/40"
                aria-label="Download CV"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out delay-75"></span>
                
                <Download 
                  className="mr-3 text-brand-500 group-hover:animate-bounce transition-colors" 
                  size={20} 
                /> 
                <span className="relative z-10">Download CV</span>
              </a>
            </div>

            {/* News Display Area */}
            {news && (
              <div className="max-w-2xl mx-auto w-full animate-slide-up">
                <div className="relative group p-6 bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800 rounded-3xl overflow-hidden backdrop-blur-sm">
                  <button 
                    onClick={() => setNews(null)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-indigo-500 transition-colors"
                  >
                    <X size={16} />
                  </button>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-indigo-500 text-white rounded-xl shrink-0">
                      <Zap size={18} fill="currentColor" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-1">Breaking Headline</div>
                      <p className="text-slate-700 dark:text-slate-300 font-bold italic leading-snug">
                        "{news.charAt(0).toUpperCase() + news.slice(1)}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <a 
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-500 text-sm hover:text-brand-500 dark:hover:text-brand-400 transition-all flex items-center gap-2 group tracking-wide py-2"
            >
              <FileText size={16} className="opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <span className="underline decoration-slate-300 dark:decoration-slate-800 group-hover:decoration-brand-500 underline-offset-8 transition-all">
                View plain text resume
              </span>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-8">
            <a href={CONTACT_INFO.github} target="_blank" rel="noopener" className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-all hover:scale-125 transform-gpu">
              <Github size={28} strokeWidth={1.5} />
            </a>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener" className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-all hover:scale-125 transform-gpu">
              <Linkedin size={28} strokeWidth={1.5} />
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-all hover:scale-125 transform-gpu">
              <ExternalLink size={28} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
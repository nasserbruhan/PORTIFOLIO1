import React from 'react';
import { Github, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: 'github',
      icon: <Github size={18} />,
      href: CONTACT_INFO.github,
      label: 'GitHub',
      color: 'hover:text-slate-900 dark:hover:text-white hover:border-slate-900/40 dark:hover:border-slate-400/40 hover:bg-slate-100 dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-black/40',
      iconClasses: 'group-hover:scale-110 group-hover:rotate-6'
    },
    {
      id: 'linkedin',
      icon: <Linkedin size={18} />,
      href: CONTACT_INFO.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-brand-500 hover:border-brand-500/50 hover:bg-brand-50 dark:hover:bg-brand-500/10 hover:shadow-brand-500/25',
      iconClasses: 'group-hover:scale-110 group-hover:-rotate-6'
    },
    {
      id: 'email',
      icon: <Mail size={18} />,
      href: `mailto:${CONTACT_INFO.email}`,
      label: 'Email',
      color: 'hover:text-indigo-500 hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:shadow-indigo-500/20',
      iconClasses: 'group-hover:scale-110 group-hover:-translate-y-1'
    }
  ];

  return (
    <footer className="py-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors relative overflow-hidden">
      {/* Ambient decorative glow */}
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-brand-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black tracking-tighter mb-2 group cursor-default">
              Nasser<span className="text-brand-500 group-hover:animate-pulse">.</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium max-w-xs leading-relaxed">
              Full-Stack Software Developer specializing in <span className="text-slate-900 dark:text-slate-200">Backend Architecture</span> and <span className="text-slate-900 dark:text-slate-200">RESTful APIs</span>.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em] mb-1">Connect with me</span>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`group relative overflow-hidden p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) hover:-translate-y-2 active:scale-95 ${link.color}`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-brand-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                  
                  <span className={`relative z-10 block transition-all duration-300 ${link.iconClasses}`}>
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em]">
              &copy; {currentYear} Ntege Nasser Bruhan
            </p>
            <nav className="flex items-center gap-6">
              <a href="#about" className="text-[11px] font-bold text-slate-400 hover:text-brand-500 transition-colors uppercase tracking-widest">About</a>
              <a href="#projects" className="text-[11px] font-bold text-slate-400 hover:text-brand-500 transition-colors uppercase tracking-widest">Works</a>
              <a href="#contact" className="text-[11px] font-bold text-slate-400 hover:text-brand-500 transition-colors uppercase tracking-widest">Contact</a>
              
              {/* Added Prominent GitHub Link */}
              <a 
                href={CONTACT_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-[11px] font-black text-slate-400 hover:text-brand-500 transition-all hover:scale-105 uppercase tracking-[0.15em] group px-3 py-1 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900"
              >
                <Github size={12} className="group-hover:rotate-12 transition-transform text-slate-500 group-hover:text-brand-500" />
                GitHub
                <ExternalLink size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform opacity-50 group-hover:opacity-100" />
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-1.5 py-2 px-4 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm transition-transform hover:scale-105">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Designed with</span>
            <Heart size={10} className="mx-0.5 text-red-500 fill-red-500 animate-pulse" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">in Kampala</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
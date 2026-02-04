import React, { useState, useEffect, useMemo, useRef } from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Code, X, Layers, Filter, Cpu, Tag, Search, Sparkles, Terminal, Box, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

const ProjectCardSkeleton = () => (
  <div className="bg-white dark:bg-slate-950 rounded-[2.5rem] border border-slate-200 dark:border-slate-800/50 overflow-hidden shadow-sm animate-pulse">
    <div className="aspect-[16/10] bg-slate-200 dark:bg-slate-900"></div>
    <div className="p-8 space-y-6">
      <div className="space-y-2">
        <div className="h-3 w-20 bg-slate-100 dark:bg-slate-900 rounded"></div>
        <div className="flex flex-wrap gap-2">
          <div className="h-7 w-16 bg-slate-100 dark:bg-slate-900 rounded-xl"></div>
          <div className="h-7 w-20 bg-slate-100 dark:bg-slate-900 rounded-xl"></div>
          <div className="h-7 w-14 bg-slate-100 dark:bg-slate-900 rounded-xl"></div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-8 w-3/4 bg-slate-200 dark:border-slate-800 rounded-lg"></div>
        <div className="h-4 w-full bg-slate-100 dark:bg-slate-900 rounded"></div>
      </div>
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/50 flex justify-between items-center">
        <div className="h-4 w-24 bg-slate-100 dark:bg-slate-900 rounded"></div>
        <div className="h-10 w-10 bg-slate-100 dark:bg-slate-900 rounded-xl"></div>
      </div>
    </div>
  </div>
);

interface ScrollRevealCardProps {
  project: Project;
  idx: number;
  onSelect: (project: Project) => void;
}

const ScrollRevealCard: React.FC<ScrollRevealCardProps> = ({ project, idx, onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before the card fully enters
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      onClick={() => onSelect(project)}
      className={`
        group cursor-pointer bg-white dark:bg-slate-950 rounded-[2.5rem] border border-slate-200 dark:border-slate-800/50 overflow-hidden shadow-sm 
        hover:shadow-[0_20px_50px_-12px_rgba(14,165,233,0.35),0_10px_20px_-10px_rgba(0,0,0,0.1)] 
        dark:hover:shadow-[0_20px_50px_-12px_rgba(14,165,233,0.2),0_10px_20px_-10px_rgba(0,0,0,0.5)] 
        transition-all duration-700 hover:-translate-y-3 hover:scale-[1.03] 
        ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}
      `}
      style={{ 
        animationDelay: `${idx * 60}ms`, 
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity'
      }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-1000 ease-in-out"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-70">Architecture Overview</p>
            <h4 className="text-2xl font-black">View Details</h4>
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <div className="mb-6">
          <div className="flex items-center gap-1.5 mb-3 text-slate-400 dark:text-slate-500">
            <Terminal size={12} className="text-brand-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Technical Stack</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {project.tags.map((tag, tIdx) => (
              <span 
                key={tIdx} 
                className="inline-flex items-center px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-200 text-[10px] font-black uppercase tracking-tight border border-slate-200 dark:border-slate-800 hover:bg-brand-500 hover:text-white hover:border-brand-500 hover:scale-[1.05] hover:shadow-lg hover:shadow-brand-500/20 transition-all duration-500 backdrop-blur-sm cursor-default group/tag"
              >
                <Box size={10} className="mr-1.5 opacity-40 group-hover/tag:text-white transition-colors" />
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <h3 className="text-2xl font-black mb-4 group-hover:text-brand-500 transition-colors duration-300 leading-tight">
          {project.title}
        </h3>
        
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed line-clamp-2 font-medium">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between group/btn pt-5 border-t border-slate-100 dark:border-slate-800/50">
          <div className="flex items-center text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest group-hover/btn:text-brand-500 transition-colors">
            <Cpu size={14} className="mr-2 opacity-50" /> Fully Functional
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 group-hover/btn:bg-brand-500 group-hover/btn:text-white transition-all transform group-hover/btn:rotate-[360deg] duration-700">
            <ExternalLink size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isModalImageLoading, setIsModalImageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const allTags = useMemo(() => {
    const tags = PROJECTS.flatMap(p => p.tags);
    const uniqueTags = Array.from(new Set(tags)).sort();
    return ['All', ...uniqueTags];
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      const matchesFilter = activeFilter === 'All' || p.tags.includes(activeFilter);
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PROJECTS.length };
    PROJECTS.forEach(p => {
      p.tags.forEach(tag => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return counts;
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setIsModalImageLoading(true);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 bg-brand-500/10 text-brand-600 dark:text-brand-400 rounded-full text-[10px] font-black tracking-widest uppercase border border-brand-500/20 animate-fade-in">
              <Layers size={12} className="mr-1.5" /> Featured Work
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight animate-slide-up">
              Curated <span className="text-brand-500">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed animate-slide-up [animation-delay:100ms]">
              Showcasing full-stack proficiency through high-impact technical architecture and scalable implementations.
            </p>
          </div>
          <div className="flex items-center gap-4 animate-slide-up [animation-delay:200ms]">
            <a 
              href="https://github.com/nasserbruhan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-600 dark:text-slate-300 font-bold hover:text-brand-500 transition-all hover:shadow-lg active:scale-95 group"
            >
              Browse Source <Github className="ml-2 group-hover:rotate-12 transition-transform" size={18} />
            </a>
          </div>
        </div>

        <div className="mb-12 space-y-8 animate-slide-up [animation-delay:300ms]">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 mb-4">
                <Search size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Live Search</span>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-500/5 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity rounded-2xl"></div>
                <input 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter by title or keywords..."
                  className="w-full pl-12 pr-12 py-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all shadow-sm placeholder:text-slate-400"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-500 transition-colors"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 mb-4">
                <Filter size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Category Filter</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag, idx) => (
                  <button
                    key={tag}
                    onClick={() => setActiveFilter(tag)}
                    style={{ animationDelay: `${idx * 50}ms` }}
                    className={`
                      group relative px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-500 flex items-center gap-2 border animate-tag-mount fill-mode-both
                      ${activeFilter === tag 
                        ? 'bg-brand-500 border-brand-500 text-white shadow-lg shadow-brand-500/25 scale-105 z-10' 
                        : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-brand-500/50 hover:text-brand-500 hover:scale-[1.05] hover:-translate-y-1'
                      }
                    `}
                  >
                    {tag}
                    <span className={`
                      inline-flex items-center justify-center min-w-[20px] h-5 px-1 rounded-lg text-[9px] font-black transition-colors duration-300
                      ${activeFilter === tag 
                        ? 'bg-white/20 text-white' 
                        : 'bg-slate-100 dark:bg-slate-900 text-slate-400 group-hover:bg-brand-500/10 group-hover:text-brand-500'
                      }
                    `}>
                      {tagCounts[tag]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[500px] relative">
          {loading ? (
            [1, 2, 3].map((n) => <ProjectCardSkeleton key={n} />)
          ) : filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <ScrollRevealCard 
                key={`${project.title}-${activeFilter}`} 
                project={project} 
                idx={idx} 
                onSelect={setSelectedProject} 
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center animate-fade-in">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mb-6 text-slate-300">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8">
                We couldn't find any projects matching your search "{searchTerm}"{activeFilter !== 'All' ? ` and tag "${activeFilter}"` : ''}. 
                Try clearing your search or filters.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button 
                  onClick={() => setSearchTerm('')}
                  className="px-8 py-3 bg-brand-500 text-white font-bold rounded-2xl hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/20"
                >
                  Clear Search
                </button>
                <button 
                  onClick={() => setActiveFilter('All')}
                  className="px-8 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-bold rounded-2xl hover:text-brand-500 transition-all shadow-sm"
                >
                  Show All Tags
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-xl animate-fade-in"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-slate-950 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-zoom-in">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 z-30 p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:rotate-90 transition-all duration-300 shadow-lg"
            >
              <X size={26} />
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Media Section */}
              <div className="w-full lg:w-[45%] relative bg-slate-100 dark:bg-slate-900 aspect-video lg:aspect-auto flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
                {isModalImageLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 z-10">
                    <div className="relative w-14 h-14">
                      <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-800"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-brand-500 border-t-transparent animate-spin"></div>
                    </div>
                  </div>
                )}
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  onLoad={() => setIsModalImageLoading(false)}
                  className={`w-full h-full object-cover transition-all duration-1000 ease-out ${isModalImageLoading ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-950/40 backdrop-blur-md rounded-2xl border border-white/10 hidden lg:block">
                    <div className="flex items-center gap-3 text-white">
                        <Box size={20} className="text-brand-400" />
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-400">Project Asset</p>
                            <p className="text-xs font-bold opacity-80">Primary Interface Visual</p>
                        </div>
                    </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-[55%] p-8 sm:p-12 overflow-y-auto bg-white dark:bg-slate-950 custom-scrollbar">
                <div className={`space-y-12 transition-all duration-700 delay-100 ${isModalImageLoading ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
                  
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-center text-[10px] font-black text-brand-500 uppercase tracking-[0.4em]">
                      <Sparkles size={14} className="mr-2" /> Technical Case Study
                    </div>
                    <h3 className="text-4xl sm:text-5xl font-black tracking-tighter leading-none">{selectedProject.title}</h3>
                  </div>

                  {/* Overview */}
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 pb-3">Project Narrative</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Enhanced Detail Section: Key Features */}
                  {selectedProject.keyFeatures && (
                    <div className="space-y-6">
                      <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 pb-3">Technical Highlights & Accomplishments</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedProject.keyFeatures.map((feature, fIdx) => (
                          <div 
                            key={fIdx} 
                            className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 animate-slide-up"
                            style={{ animationDelay: `${400 + (fIdx * 100)}ms` }}
                          >
                            <CheckCircle2 size={18} className="text-brand-500 shrink-0 mt-0.5" />
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 pb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {selectedProject.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-5 py-3 bg-slate-50 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 text-xs font-black uppercase rounded-2xl border border-slate-200 dark:border-slate-800 opacity-0 animate-tag-mount fill-mode-both hover:bg-brand-500 hover:text-white hover:border-brand-500 hover:scale-[1.05] transition-all duration-500 cursor-default"
                          style={{ animationDelay: `${300 + (tIdx * 50)}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-10 flex flex-col sm:flex-row gap-5">
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-8 py-5 bg-brand-600 hover:bg-brand-700 text-white text-center font-black rounded-2xl shadow-xl shadow-brand-500/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 group"
                    >
                      <Github size={20} className="group-hover:rotate-12 transition-transform" /> Access Repository
                    </a>
                    {selectedProject.demo && (
                      <a 
                        href={selectedProject.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 px-8 py-5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white text-center font-black rounded-2xl transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
                      >
                        <ExternalLink size={20} /> View Live Solution
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
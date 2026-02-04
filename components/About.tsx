import React from 'react';
import { User, GraduationCap, Briefcase, MapPin, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  // User provided GitHub link transformed for raw image access
  const profileImageUrl = "https://github.com/nasserbruhan/PORTIFOLIO/blob/main/e93b9936-6da2-47cd-8ee6-2cd0d5536d93%20(1).jpg?raw=true";

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            {/* Decorative Background Elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500/20 to-indigo-500/20 rounded-[2.5rem] blur-2xl group-hover:opacity-40 transition duration-700"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-500/10 rounded-full blur-xl animate-pulse"></div>
            
            <div className="relative bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl">
              <div className="aspect-[4/5] sm:aspect-square bg-slate-200 dark:bg-slate-800 rounded-[2rem] overflow-hidden relative shadow-inner">
                {/* Profile Image */}
                <img 
                  src={profileImageUrl} 
                  alt="Ntege Nasser Bruhan" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 group-hover:animate-profile-pulse"
                  onError={(e) => {
                    // Fallback to a high-quality representative placeholder if file is missing or blocked
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                
                {/* Floating Status Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 dark:border-white/5 flex items-center justify-between shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">Remote Ready</span>
                    </div>
                    <Globe size={14} className="text-brand-500" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 grid grid-cols-1 gap-4 mt-2">
                <div className="flex items-center text-slate-600 dark:text-slate-400 font-medium p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mr-4 border border-brand-100 dark:border-brand-500/20">
                    <GraduationCap className="text-brand-500" size={18} />
                  </div>
                  <span className="text-sm">Computer Science Graduate</span>
                </div>
                <div className="flex items-center text-slate-600 dark:text-slate-400 font-medium p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mr-4 border border-indigo-100 dark:border-indigo-500/20">
                    <MapPin className="text-indigo-500" size={18} />
                  </div>
                  <span className="text-sm">{CONTACT_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-1.5 bg-brand-500/10 text-brand-600 dark:text-brand-400 rounded-full text-xs font-bold tracking-widest uppercase border border-brand-500/20">
                <User size={14} className="mr-2" /> Professional Bio
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Bridging the Gap Between <span className="text-brand-500">Complex Logic</span> and Clean UI.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I am a Full-Stack Software Developer with a deep-rooted passion for backend services and RESTful API architecture. My approach is simple: write code that is as maintainable as it is performant.
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                Whether it's optimizing SQL queries or architecting scalable real-time systems, I thrive in environments that challenge my technical reasoning. I'm eager to bring this drive to an international team where I can contribute and grow under senior mentorship.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="p-6 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm group hover:border-brand-500/30 transition-all hover:shadow-md">
                <div className="text-4xl font-black text-brand-500 mb-1 group-hover:scale-110 transition-transform origin-left">2+</div>
                <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Years coding</div>
              </div>
              <div className="p-6 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm group hover:border-indigo-500/30 transition-all hover:shadow-md">
                <div className="text-4xl font-black text-indigo-500 mb-1 group-hover:scale-110 transition-transform origin-left">10+</div>
                <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Project builds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
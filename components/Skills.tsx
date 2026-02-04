
import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Server, Database, Wrench } from 'lucide-react';

const SkillIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case 'code': return <Code2 className="text-brand-500" size={24} />;
    case 'server': return <Server className="text-indigo-500" size={24} />;
    case 'database': return <Database className="text-cyan-500" size={24} />;
    case 'tool': return <Wrench className="text-purple-500" size={24} />;
    default: return null;
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical <span className="text-brand-500">Arsenal</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive set of tools and languages I use to build robust, scalable software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((category, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition-colors shadow-sm"
            >
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl w-fit mb-6">
                <SkillIcon icon={category.icon} />
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-slate-600 dark:text-slate-400 text-sm font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cloud Badge Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-brand-600/5 to-indigo-600/5 rounded-3xl border border-brand-500/10 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="p-3 bg-white dark:bg-slate-900 rounded-xl mr-4 shadow-sm">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11.19 18.24L10.32 17.37L10.29 17.34L6.68 13.73C6.29 13.34 6.29 12.71 6.68 12.32C7.07 11.93 7.7 11.93 8.09 12.32L11.19 15.42L15.91 10.7C16.3 10.31 16.93 10.31 17.32 10.7C17.71 11.09 17.71 11.72 17.32 12.11L12.06 17.37L12.03 17.4L11.19 18.24Z" fill="#0EA5E9"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg">AWS Fundamentals Certified</h4>
              <p className="text-sm text-slate-500">Foundational knowledge of cloud architecture and services.</p>
            </div>
          </div>
          <div className="px-6 py-2 bg-white dark:bg-slate-900 rounded-xl text-xs font-bold text-slate-500 uppercase tracking-widest border border-slate-200 dark:border-slate-800">
            Verified Knowledge
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

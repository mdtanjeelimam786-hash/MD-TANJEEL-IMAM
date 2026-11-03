import React, { useState } from 'react';
import {
  Code,
  Palette,
  Braces,
  Atom,
  Coffee,
  Binary,
  Cpu,
  Layers,
  GitBranch,
  CheckCircle2,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const skillIconMap = {
  Code,
  Palette,
  Braces,
  Atom,
  Coffee,
  Binary,
  Cpu,
  Layers,
  GitBranch,
};

const categories = ['All Skills', 'Frontend', 'Programming', 'Tools'];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All Skills');

  const filteredSkills =
    selectedCategory === 'All Skills'
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#f8faff] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#0866F5] font-bold text-xs uppercase tracking-widest mb-3">
            <span>My Toolkit</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#071D49] tracking-tight leading-tight mb-4">
            Technical Skills &amp; <span className="text-[#0866F5]">Expertise</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Technologies, languages, and modern developer tools I practice and continuously improve.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#0866F5] text-white shadow-[0_6px_20px_rgba(8,102,245,0.3)] scale-105'
                      : 'bg-white text-slate-600 hover:text-[#0866F5] hover:bg-blue-50/60 border border-slate-200/80 shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = skillIconMap[skill.icon] || Code;
            return (
              <div
                key={skill.name}
                className="bg-white border border-slate-100 hover:border-blue-200 rounded-2xl p-6 shadow-[0_8px_25px_rgba(7,29,73,0.04)] hover:shadow-[0_16px_35px_rgba(8,102,245,0.12)] transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0866F5] group-hover:bg-[#0866F5] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon size={24} className="stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Name & Description */}
                  <h3 className="font-display font-bold text-lg text-[#071D49] group-hover:text-[#0866F5] transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 mb-5 line-clamp-2">
                    {skill.desc}
                  </p>
                </div>

                {/* Progress Bar & Percentage */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold mb-2">
                    <span className="text-slate-400 flex items-center gap-1 font-medium text-[11px]">
                      <CheckCircle2 size={13} className="text-[#0866F5]" /> Proficiency
                    </span>
                    <span className="text-[#0866F5]">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-[2px]">
                    <div
                      className="h-full bg-gradient-to-r from-[#0866F5] to-[#258bf7] rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(8,102,245,0.4)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

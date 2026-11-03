import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Laptop, MessageSquare, CheckSquare, Sparkles } from 'lucide-react';
import { projectsData, personalData } from '../data/portfolioData';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const getVisualContent = (id) => {
    if (id === 'portfolio') {
      return (
        <div className="w-full h-full bg-gradient-to-br from-blue-500/10 via-sky-400/20 to-blue-600/30 flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="w-full max-w-[280px] bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0866F5] to-blue-700 text-white flex items-center justify-center mb-2 shadow-md">
              <Laptop size={24} />
            </div>
            <span className="font-display font-bold text-sm text-[#071D49]">Personal Portfolio</span>
            <span className="text-[10px] text-[#0866F5] font-semibold mt-0.5">Electric Blue &amp; Glassmorphism</span>
            <div className="w-full flex gap-1.5 justify-center mt-3">
              <span className="h-1.5 w-12 bg-blue-200 rounded-full" />
              <span className="h-1.5 w-6 bg-blue-500 rounded-full" />
            </div>
          </div>
        </div>
      );
    }
    if (id === 'global-chat') {
      return (
        <div className="w-full h-full bg-gradient-to-br from-indigo-500/10 via-blue-400/20 to-sky-600/30 flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="w-full max-w-[280px] bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white flex flex-col gap-2">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-[#071D49]">M.T.I Global Chat</span>
            </div>
            <div className="bg-blue-50 text-[#0866F5] text-[11px] p-2 rounded-xl self-start max-w-[85%] font-medium">
              Hello world! Connected to server.
            </div>
            <div className="bg-[#0866F5] text-white text-[11px] p-2 rounded-xl self-end max-w-[85%] font-medium">
              Real-time messaging active ⚡
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="w-full h-full bg-gradient-to-br from-teal-500/10 via-blue-400/20 to-indigo-600/30 flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="w-full max-w-[280px] bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white flex flex-col gap-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-[#071D49] flex items-center gap-1.5">
              <CheckSquare size={14} className="text-[#0866F5]" /> Tasks Today
            </span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              3/3 Done
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
            <span className="w-4 h-4 rounded-md bg-[#0866F5] text-white flex items-center justify-center text-[10px]">✓</span>
            <span className="line-through text-slate-400">Build portfolio layout</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
            <span className="w-4 h-4 rounded-md bg-[#0866F5] text-white flex items-center justify-center text-[10px]">✓</span>
            <span className="line-through text-slate-400">Implement glassmorphism</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#0866F5] font-bold text-xs uppercase tracking-widest mb-3">
            <span>What I've Been Building</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#071D49] tracking-tight leading-tight mb-4">
            Featured <span className="text-[#0866F5]">Projects</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real-world web applications and projects reflecting practical skills, clean UI design, and problem-solving.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(7,29,73,0.06)] hover:shadow-[0_20px_45px_rgba(8,102,245,0.15)] transition-all duration-300 hover:-translate-y-2 flex flex-col group"
            >
              {/* Mockup Preview Area */}
              <div className="h-56 relative overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center justify-center">
                {/* Browser Traffic Lights */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] font-bold tracking-wider text-[#0866F5] bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm border border-blue-100">
                    {project.type}
                  </span>
                </div>

                {getVisualContent(project.id)}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#071D49] group-hover:text-[#0866F5] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-blue-50/70 text-[#0866F5] text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: Live Demo & GitHub */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0866F5] hover:bg-[#0052cc] text-white py-2.5 px-4 rounded-full text-xs font-semibold shadow-sm hover:shadow-[0_6px_20px_rgba(8,102,245,0.3)] transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} className="stroke-[2.5]" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="inline-flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-[#071D49] border border-slate-200 py-2.5 px-4 rounded-full text-xs font-semibold transition-colors"
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Button: Explore All Projects */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href={personalData.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-blue-50 text-[#071D49] hover:text-[#0866F5] border-2 border-slate-200 hover:border-[#0866F5] px-8 py-3.5 rounded-full font-semibold text-sm shadow-sm transition-all duration-300 hover:scale-105"
          >
            <span>Explore More on GitHub</span>
            <ArrowUpRight size={17} className="stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
}

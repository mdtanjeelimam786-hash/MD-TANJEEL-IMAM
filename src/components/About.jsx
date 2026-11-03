import React from 'react';
import { ArrowRight, Globe, Terminal, Cpu, Sparkles, Code2 } from 'lucide-react';
import { keyStrengths } from '../data/portfolioData';

const strengthIcons = {
  Globe: Globe,
  Terminal: Terminal,
  Cpu: Cpu,
  Sparkles: Sparkles,
};

export default function About({ onNavClick }) {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/25 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* 3-Column Layout matching the reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left: Modern Developer Workspace Image with glowing neon code badge */}
          <div className="lg:col-span-4 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(8,102,245,0.12)] border border-blue-100/80 bg-slate-100 aspect-[4/3] lg:aspect-auto lg:h-[430px]">
              <img
                src="/workspace.jpg"
                alt="Modern Developer Workspace with Laptop and Code"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              {/* Subtle glass gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071D49]/60 via-transparent to-transparent opacity-60" />

              {/* Glowing Neon Blue Code Badge </>, exactly like the reference image */}
              <div className="absolute top-5 right-5 z-10 bg-[#0866F5]/90 backdrop-blur-md text-white px-3.5 py-2 rounded-2xl shadow-[0_0_25px_rgba(8,102,245,0.8)] border border-blue-300/40 flex items-center gap-1.5 animate-pulse-subtle">
                <Code2 size={22} className="stroke-[2.5]" />
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-5 left-5 right-5 z-10 bg-white/85 backdrop-blur-md rounded-2xl p-3 border border-white/80 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0866F5] flex items-center justify-center shrink-0">
                  <Terminal size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#071D49]">Ideas Into Reality</span>
                  <span className="text-[10px] text-slate-500 font-medium">One line of code at a time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Content & Mission */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Blue dash + About Me label */}
            <div className="flex items-center gap-2 text-[#0866F5] font-bold text-xs uppercase tracking-widest mb-3">
              <span className="w-5 h-[3px] bg-[#0866F5] rounded-full" />
              <span>About Me</span>
            </div>

            {/* Heading matching reference image */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#071D49] tracking-tight leading-tight mb-4">
              Turning Ideas Into <span className="text-[#0866F5]">Innovative Solutions</span>
            </h2>

            {/* Description Paragraphs */}
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4">
              I'm an enthusiastic Information Technology (IT) student with a strong passion for technology, programming, and web development. I enjoy learning new skills, exploring modern technologies, and building projects that make an impact.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
              My goal is to become a skilled IT professional and contribute to the digital world through creativity, dedication, and continuous learning.
            </p>

            {/* Blue Learn More Button */}
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                onNavClick('experience');
              }}
              className="inline-flex items-center gap-2 bg-[#0866F5] hover:bg-[#0052cc] text-white px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-[0_6px_20px_rgba(8,102,245,0.3)] hover:shadow-[0_10px_25px_rgba(8,102,245,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Learn More</span>
              <ArrowRight size={15} className="stroke-[2.5]" />
            </a>
          </div>

          {/* Right: 4 Key Strengths Cards matching reference image */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            {keyStrengths.map((strength, index) => {
              const Icon = strengthIcons[strength.icon] || Globe;
              return (
                <div
                  key={index}
                  className="bg-white hover:bg-blue-50/40 border border-slate-100 hover:border-blue-200/80 rounded-2xl p-3.5 sm:p-4 shadow-[0_4px_18px_rgba(7,29,73,0.04)] hover:shadow-[0_8px_25px_rgba(8,102,245,0.08)] flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  {/* Circular soft blue badge icon */}
                  <div className="w-12 h-12 rounded-2xl bg-blue-50/90 text-[#0866F5] group-hover:bg-[#0866F5] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                    <Icon size={22} className="stroke-[2.2]" />
                  </div>

                  {/* Text details */}
                  <div className="flex flex-col">
                    <h3 className="font-display font-bold text-sm text-[#071D49] group-hover:text-[#0866F5] transition-colors leading-snug">
                      {strength.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-snug mt-0.5">
                      ({strength.techs})
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

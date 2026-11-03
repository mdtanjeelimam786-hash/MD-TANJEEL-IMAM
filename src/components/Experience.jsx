import React from 'react';
import { GraduationCap, Code2, Briefcase, Trophy, Calendar, CheckCircle } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

const experienceIcons = {
  GraduationCap,
  Code2,
  Briefcase,
  Trophy,
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#f8faff] relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#0866F5] font-bold text-xs uppercase tracking-widest mb-3">
            <span>Learning • Growing • Achieving</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#071D49] tracking-tight leading-tight mb-4">
            My Journey &amp; <span className="text-[#0866F5]">Experience</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every step is a new opportunity to learn, grow, and achieve something great.
          </p>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Center Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-300 via-blue-200 to-transparent" />
          <div className="md:hidden absolute left-6 top-4 bottom-8 w-0.5 bg-gradient-to-b from-blue-300 via-blue-200 to-transparent" />

          <div className="flex flex-col gap-10 md:gap-14">
            {experienceTimeline.map((item, index) => {
              const Icon = experienceIcons[item.icon] || GraduationCap;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Icon Badge */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-2xl bg-white border-2 border-[#0866F5] shadow-[0_8px_20px_rgba(8,102,245,0.2)] text-[#0866F5] flex items-center justify-center">
                    <Icon size={20} className="stroke-[2.2]" />
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content Column */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white border border-slate-100 hover:border-blue-200 rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(7,29,73,0.05)] hover:shadow-[0_18px_40px_rgba(8,102,245,0.12)] transition-all duration-300 hover:-translate-y-1">
                      
                      {/* Top Meta: Step + Category Badge + Period */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-bold text-[#0866F5] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                          {item.step}. {item.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                          <Calendar size={13} className="text-[#0866F5]" /> {item.period}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="font-display font-bold text-lg sm:text-xl text-[#071D49] mb-1">
                        {item.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#0866F5] mb-3">
                        {item.tagline} • {item.subtitle}
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights / Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                        {item.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md"
                          >
                            <CheckCircle size={11} className="text-[#0866F5]" />
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>

                    </div>
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

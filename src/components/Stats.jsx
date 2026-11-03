import React from 'react';
import { GraduationCap, Laptop, Code2, Trophy } from 'lucide-react';

const statIcons = {
  GraduationCap: GraduationCap,
  Laptop: Laptop,
  Code2: Code2,
  Trophy: Trophy,
};

export default function Stats() {
  const statsList = [
    {
      icon: GraduationCap,
      value: '1+',
      label: 'Years of Learning',
    },
    {
      icon: Laptop,
      value: '10+',
      label: 'Projects Completed',
    },
    {
      icon: Code2,
      value: '100%',
      label: 'Passion for Coding',
    },
    {
      icon: Trophy,
      value: 'Big Dreams',
      label: 'For a Better Future',
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 lg:-mt-12 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="bg-white/95 backdrop-blur-2xl border border-blue-100/70 shadow-[0_20px_55px_rgba(8,102,245,0.09)] rounded-3xl p-6 sm:p-8 lg:p-9 transition-all hover:shadow-[0_25px_65px_rgba(8,102,245,0.14)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-slate-100">
          {statsList.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-start lg:justify-center gap-4 px-2 lg:px-6 py-2 group"
              >
                {/* Blue Icon matching reference image */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50/80 text-[#0866F5] flex items-center justify-center shrink-0 group-hover:bg-[#0866F5] group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                  <Icon size={26} className="stroke-[2.2]" />
                </div>

                {/* Values & Label */}
                <div className="flex flex-col">
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#071D49] tracking-tight leading-tight group-hover:text-[#0866F5] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5 leading-tight">
                    {stat.label}
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

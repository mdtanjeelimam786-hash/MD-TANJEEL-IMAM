import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Youtube, GraduationCap } from 'lucide-react';
import { personalData } from '../data/portfolioData';

// Custom SVG Icons for Discord and X (Twitter)
const XIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export default function Hero({ onNavClick }) {
  return (
    <section id="home" className="relative pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#f8faff] via-white to-white">
      
      {/* 1. Large Sweeping Electric Blue Wave Ribbons matching reference image */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full pointer-events-none overflow-hidden select-none z-0">
        <svg
          viewBox="0 0 900 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full object-cover"
        >
          <defs>
            {/* Primary vibrant electric blue gradient */}
            <linearGradient id="heroBlueRibbon" x1="200" y1="0" x2="850" y2="700" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2A8BFF" />
              <stop offset="30%" stopColor="#0866F5" />
              <stop offset="75%" stopColor="#004cd4" />
              <stop offset="100%" stopColor="#003599" />
            </linearGradient>

            {/* Soft cyan translucent under-layer */}
            <linearGradient id="heroCyanUnder" x1="100" y1="50" x2="700" y2="800" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#70B5FF" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.05" />
            </linearGradient>

            {/* Highlights along top wave edge */}
            <linearGradient id="heroEdgeGlow" x1="400" y1="0" x2="700" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            <filter id="ribbonShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="-10" dy="20" stdDeviation="25" floodColor="#0866F5" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* Underlayer Soft Cyan Flow */}
          <path
            d="M 120 40 C 260 180 340 320 280 500 C 230 650 360 760 520 800 L 900 800 L 900 0 C 700 0 450 10 120 40 Z"
            fill="url(#heroCyanUnder)"
          />

          {/* Main Electric Blue Wave Ribbon from Reference Image */}
          <path
            d="M 280 0 C 370 160 480 300 410 460 C 340 620 400 730 520 800 L 900 800 L 900 0 Z"
            fill="url(#heroBlueRibbon)"
            filter="url(#ribbonShadow)"
          />

          {/* Secondary sweeping swoosh framing the right shoulder */}
          <path
            d="M 450 0 C 560 140 680 250 640 400 C 600 550 670 700 800 800 L 900 800 L 900 0 Z"
            fill="#054bc4"
            opacity="0.35"
          />

          {/* Glowing edge contour line */}
          <path
            d="M 280 0 C 370 160 480 300 410 460 C 340 620 400 730 520 800"
            stroke="url(#heroEdgeGlow)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Ambient background blur circles */}
      <div className="absolute top-1/4 left-5 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[580px]">
          
          {/* Left Column: Personal Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[#0866F5] font-semibold text-xs md:text-[13px] shadow-[0_2px_10px_rgba(8,102,245,0.06)] mb-6">
              <span className="text-sm">🚀</span>
              <span>{personalData.badge}</span>
            </div>

            {/* Main Heading matching reference image */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[45px] xl:text-[52px] tracking-tight leading-[1.15] text-[#071D49] mb-5">
              <span className="block sm:whitespace-nowrap">Hi, I'm MD Tanjeel Imam</span>
              <span className="block text-[#0866F5] mt-1.5 font-bold">
                {personalData.heroRole}
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mb-8 font-normal">
              {personalData.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick('projects');
                }}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0866F5] hover:bg-[#0052cc] text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-[0_10px_25px_rgba(8,102,245,0.35)] hover:shadow-[0_14px_30px_rgba(8,102,245,0.45)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Explore My Projects</span>
                <ArrowRight size={17} className="stroke-[2.5]" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick('contact');
                }}
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-blue-50 text-[#071D49] border-2 border-[#0866F5] px-7 py-3 rounded-full font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Mail size={16} className="text-[#0866F5] stroke-[2.2]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3.5 pt-2">
              <a
                href={personalData.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-[#0866F5] hover:text-white hover:border-[#0866F5] text-slate-700 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-[0_6px_18px_rgba(8,102,245,0.3)] hover:-translate-y-1"
              >
                <Github size={18} />
              </a>

              <a
                href={personalData.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-[#0866F5] hover:text-white hover:border-[#0866F5] text-slate-700 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-[0_6px_18px_rgba(8,102,245,0.3)] hover:-translate-y-1"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={personalData.links.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube Channel"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-[#0866F5] hover:text-white hover:border-[#0866F5] text-slate-700 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-[0_6px_18px_rgba(8,102,245,0.3)] hover:-translate-y-1"
              >
                <Youtube size={19} />
              </a>

              <a
                href={personalData.links.x}
                target="_blank"
                rel="noreferrer"
                aria-label="X Profile"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-[#0866F5] hover:text-white hover:border-[#0866F5] text-slate-700 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-[0_6px_18px_rgba(8,102,245,0.3)] hover:-translate-y-1"
              >
                <XIcon size={16} />
              </a>

              <a
                href={personalData.links.discord}
                target="_blank"
                rel="noreferrer"
                aria-label="Discord Community"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-[#0866F5] hover:text-white hover:border-[#0866F5] text-slate-700 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-[0_6px_18px_rgba(8,102,245,0.3)] hover:-translate-y-1"
              >
                <DiscordIcon size={17} />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Floating Card */}
          <div className="lg:col-span-5 relative flex items-end justify-center h-[460px] sm:h-[530px] lg:h-[580px] w-full mt-4 lg:mt-0 select-none">
            
            {/* Portrait Image (arms crossed, crisp cut-out matching reference image) */}
            <div className="relative z-10 w-full h-full flex items-end justify-center">
              <img
                src="/portrait.png"
                alt="MD Tanjeel Imam - IT Student & Aspiring Developer"
                className="max-h-[102%] w-auto max-w-[95%] sm:max-w-[85%] lg:max-w-none object-contain object-bottom drop-shadow-[0_20px_35px_rgba(7,29,73,0.18)] pointer-events-none"
                loading="eager"
              />
            </div>

            {/* Floating Glassmorphism Information Card matching reference image */}
            <div className="absolute right-0 sm:-right-2 top-[24%] z-20 bg-white/85 backdrop-blur-xl border border-white/95 shadow-[0_16px_35px_rgba(7,29,73,0.12)] rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 max-w-[240px] sm:max-w-[265px] animate-float transition-transform hover:scale-105 duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-[#0866F5] flex items-center justify-center shrink-0 shadow-inner">
                <GraduationCap size={24} className="stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-display font-bold text-xs sm:text-[13px] text-[#071D49] leading-tight">
                  Computer Science &amp; Engineering
                </h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-1 leading-tight">
                  Learning • Building • Growing
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

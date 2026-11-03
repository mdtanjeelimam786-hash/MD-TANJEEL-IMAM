import React, { useState, useEffect } from 'react';
import { Download, Menu, X, FileText } from 'lucide-react';
import { personalData, navItems } from '../data/portfolioData';

export default function Navbar({ activeSection, onNavClick, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <header className="fixed top-3 md:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-7xl z-50 transition-all duration-300">
      <div
        className={`w-full rounded-2xl md:rounded-full px-4 md:px-7 py-3 md:py-3.5 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border border-blue-100/80 shadow-[0_12px_35px_rgba(8,102,245,0.08)]'
            : 'bg-white/80 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgba(8,102,245,0.05)]'
        }`}
      >
        {/* Left: Brand Identity */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="flex items-center gap-3 group"
        >
          {/* Logo Mark matching reference image */}
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-[#0866F5] to-[#0549b8] flex items-center justify-center text-white font-extrabold text-base md:text-lg tracking-wider shadow-[0_4px_14px_rgba(8,102,245,0.35)] group-hover:scale-105 transition-transform duration-200">
            <span className="font-display tracking-tight">TI</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm md:text-[15px] text-[#071D49] tracking-tight group-hover:text-[#0866F5] transition-colors leading-tight">
              {personalData.displayName}
            </span>
            <span className="text-[10px] md:text-[11px] text-slate-500 font-medium tracking-normal leading-tight">
              {personalData.role}
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`relative py-1 text-[13px] font-medium transition-colors duration-200 flex flex-col items-center group ${
                  isActive
                    ? 'text-[#0866F5] font-semibold'
                    : 'text-slate-600 hover:text-[#0866F5]'
                }`}
              >
                <span>{item.label}</span>
                {/* Active Underline matching reference */}
                <span
                  className={`h-[2.5px] rounded-full bg-[#0866F5] transition-all duration-300 mt-1 ${
                    isActive ? 'w-6 opacity-100' : 'w-0 opacity-0 group-hover:w-3 group-hover:opacity-40'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Resume Preview Icon Button (Extra utility) */}
          <button
            onClick={onOpenResume}
            title="Preview Resume"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full border border-blue-100 bg-blue-50/60 text-[#0866F5] hover:bg-blue-100/70 transition-colors"
          >
            <FileText size={15} />
          </button>

          {/* Download CV Button matching reference */}
          <a
            href={personalData.cvFile}
            download="MD-Tanjeel-Imam-CV.pdf"
            className="inline-flex items-center gap-2 bg-[#071D49] hover:bg-[#0866F5] text-white px-4 md:px-5 py-2.5 rounded-full text-xs md:text-[13px] font-semibold shadow-sm hover:shadow-[0_8px_20px_rgba(8,102,245,0.25)] transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Download CV</span>
            <Download size={14} className="stroke-[2.5]" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 text-slate-700 hover:text-[#0866F5] hover:bg-blue-50/50 rounded-xl transition-colors"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-2xl border border-blue-100 rounded-2xl p-4 shadow-[0_20px_50px_rgba(8,102,245,0.12)] flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-3 duration-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-blue-50/80 text-[#0866F5] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-[#0866F5]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#0866F5]" />}
              </button>
            );
          })}
          <div className="pt-2 mt-1 border-t border-slate-100 flex items-center justify-between gap-2 px-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-xs text-[#0866F5] font-semibold flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-blue-50"
            >
              <FileText size={14} /> Preview Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

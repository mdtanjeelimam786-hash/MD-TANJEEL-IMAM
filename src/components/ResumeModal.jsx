import React from 'react';
import { X, Download, Printer, Mail, ExternalLink, GraduationCap, Code2, Briefcase, Award } from 'lucide-react';
import { personalData, skillsData, projectsData, experienceTimeline } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#071D49]/60 backdrop-blur-md animate-fade-in">
      {/* Modal Container */}
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] shadow-2xl flex flex-col border border-blue-100 overflow-hidden">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0866F5] text-white flex items-center justify-center font-bold text-xs">
              CV
            </div>
            <span className="font-display font-bold text-sm text-[#071D49]">
              Curriculum Vitae — {personalData.displayName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <Printer size={13} />
              <span>Print</span>
            </button>

            <a
              href={personalData.cvFile}
              download="MD-Tanjeel-Imam-CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0866F5] hover:bg-[#0052cc] text-white text-xs font-semibold shadow-sm transition-all"
            >
              <Download size={13} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors ml-2"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-left">
          
          {/* Header Banner inside CV */}
          <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071D49] tracking-tight">
                {personalData.name}
              </h1>
              <p className="text-[#0866F5] font-semibold text-sm mt-0.5">
                {personalData.role}
              </p>
              <p className="text-xs text-slate-500 mt-2 max-w-lg">
                Dedicated Information Technology student passionate about web development, software engineering, and continuous learning.
              </p>
            </div>

            <div className="text-xs text-slate-600 flex flex-col gap-1 sm:text-right">
              <span><b>Email:</b> {personalData.email}</span>
              <span><b>GitHub:</b> github.com/mdtanjeelimam786-hash</span>
              <span><b>LinkedIn:</b> linkedin.com/in/mdtanjeelimam-ts99</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="flex items-center gap-2 text-sm font-bold text-[#0866F5] uppercase tracking-wider mb-3">
              <GraduationCap size={16} /> Education
            </h2>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-sm text-[#071D49]">
                  Diploma in Computer Science Engineering (Information Technology)
                </h3>
                <span className="text-xs font-semibold text-[#0866F5] bg-blue-50 px-2 py-0.5 rounded">
                  Present
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Core coursework: Data Structures, Computer Networks, Database Management Systems (DBMS), Operating Systems, and Object-Oriented Programming.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="flex items-center gap-2 text-sm font-bold text-[#0866F5] uppercase tracking-wider mb-3">
              <Code2 size={16} /> Technical Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skillsData.map((s) => (
                <div key={s.name} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs flex justify-between items-center">
                  <span className="font-semibold text-[#071D49]">{s.name}</span>
                  <span className="text-[#0866F5] font-bold text-[11px]">{s.level}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="flex items-center gap-2 text-sm font-bold text-[#0866F5] uppercase tracking-wider mb-3">
              <Briefcase size={16} /> Projects &amp; Software Work
            </h2>
            <div className="space-y-3">
              {projectsData.map((p) => (
                <div key={p.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-sm text-[#071D49]">{p.title}</h3>
                    <span className="text-[10px] font-bold text-[#0866F5] bg-blue-50 px-2 py-0.5 rounded">
                      {p.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-medium bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

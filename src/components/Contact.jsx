import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, Youtube, MapPin, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

// Custom X Icon
const XIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Build mailto URI as a direct functional fallback
    const bodyText = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(bodyText)}`;

    window.open(mailtoUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f8faff] relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#0866F5] font-bold text-xs uppercase tracking-widest mb-3">
            <span>Get In Touch</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#071D49] tracking-tight leading-tight mb-4">
            Have a Project in Mind? <span className="text-[#0866F5]">Let's Talk</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            I am always open to discussing new opportunities, developer internships, collaborative projects, or tech innovations.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-[0_12px_35px_rgba(7,29,73,0.05)]">
              <h3 className="font-display font-bold text-xl text-[#071D49] mb-3">
                Let's Build Something Meaningful
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Whether you have an inquiry, an internship opportunity, or just want to connect, feel free to drop a message.
              </p>

              {/* Email Card with Copy Button */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-blue-50/60 border border-blue-100 mb-4 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0866F5] flex items-center justify-center shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</span>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-xs sm:text-sm font-bold text-[#071D49] hover:text-[#0866F5] transition-colors"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg text-slate-400 hover:text-[#0866F5] hover:bg-white transition-all"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>

              {/* YouTube Link Card */}
              <a
                href={personalData.links.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-100 transition-all mb-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-[#0866F5] group-hover:bg-[#0866F5] group-hover:text-white flex items-center justify-center shadow-sm transition-colors">
                  <Youtube size={19} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">YouTube</span>
                  <span className="text-xs sm:text-sm font-bold text-[#071D49] group-hover:text-[#0866F5] transition-colors">
                    @syed_786_imam
                  </span>
                </div>
              </a>

              {/* X (Twitter) Link Card */}
              <a
                href={personalData.links.x}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-100 hover:border-blue-100 transition-all mb-6 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-[#0866F5] group-hover:bg-[#0866F5] group-hover:text-white flex items-center justify-center shadow-sm transition-colors">
                  <XIcon size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Twitter / X</span>
                  <span className="text-xs sm:text-sm font-bold text-[#071D49] group-hover:text-[#0866F5] transition-colors">
                    @imam_786_bhai
                  </span>
                </div>
              </a>

              {/* Availability Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for IT Internships &amp; Junior Roles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-9 shadow-[0_12px_35px_rgba(7,29,73,0.06)]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#071D49] mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="MD TANJEEL IMAM"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#f8faff] border border-slate-200/90 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#071D49] placeholder-slate-400 outline-none focus:border-[#0866F5] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#071D49] mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="mdtanjeelimam786@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#f8faff] border border-slate-200/90 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#071D49] placeholder-slate-400 outline-none focus:border-[#0866F5] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-[#071D49] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#f8faff] border border-slate-200/90 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#071D49] placeholder-slate-400 outline-none focus:border-[#0866F5] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-[#071D49] mb-1.5">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Hi MD Tanjeel, I would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#f8faff] border border-slate-200/90 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#071D49] placeholder-slate-400 outline-none focus:border-[#0866F5] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2.5 bg-[#0866F5] hover:bg-[#0052cc] text-white py-3.5 px-8 rounded-full font-semibold text-xs sm:text-sm shadow-[0_8px_25px_rgba(8,102,245,0.35)] hover:shadow-[0_12px_30px_rgba(8,102,245,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-98"
                >
                  <span>Send Message</span>
                  <Send size={15} className="stroke-[2.5]" />
                </button>

                {submitted && (
                  <div className="mt-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-800 text-xs font-medium animate-fade-in">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Your email client has been prepared! If it didn't open automatically, please email <b>{personalData.email}</b> directly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

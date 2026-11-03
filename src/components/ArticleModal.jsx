import React from 'react';
import { X, Clock, Calendar, BookOpen, Share2 } from 'lucide-react';

export default function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#071D49]/60 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] shadow-2xl flex flex-col border border-blue-100 overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#0866F5] bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
              {article.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-left">
          <div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#071D49] tracking-tight leading-tight mb-3">
              {article.title}
            </h2>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 pb-4 border-b border-slate-100">
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-[#0866F5]" /> {article.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} className="text-[#0866F5]" /> {article.date || 'Nov 2026'}
              </span>
            </div>
          </div>

          {/* Article Full Content */}
          <div className="prose prose-blue max-w-none text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
            {article.content}
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Author: <b>MD TANJEEL IMAM</b></span>
            <span>Category: <b>{article.category}</b></span>
          </div>
        </div>

      </div>
    </div>
  );
}

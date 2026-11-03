import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, Calendar, Mail, Check, Sparkles } from 'lucide-react';
import { blogArticles } from '../data/portfolioData';

const categories = ['All Posts', 'Technology', 'Programming', 'Web Development', 'AI & Innovation'];

export default function Blog({ onSelectArticle }) {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredArticle = blogArticles.find((a) => a.featured);
  const otherArticles = blogArticles.filter((a) => !a.featured);

  const filteredArticles =
    selectedCategory === 'All Posts'
      ? otherArticles
      : otherArticles.filter((a) => a.category === selectedCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 3000);
  };

  return (
    <section id="blog" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#0866F5] font-bold text-xs uppercase tracking-widest mb-3">
            <span>Explore My Blog</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#071D49] tracking-tight leading-tight mb-4">
            My Tech Blog – <span className="text-[#0866F5]">Learn, Explore &amp; Innovate</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Insights, tutorials, and ideas about technology, programming, and web development. Sharing knowledge and learning something new every day.
          </p>

          {/* Categories & Filters */}
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
                      : 'bg-slate-50 text-slate-600 hover:text-[#0866F5] hover:bg-blue-50/70 border border-slate-200/80 shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. Featured Article Layout */}
        {featuredArticle && (selectedCategory === 'All Posts' || selectedCategory === featuredArticle.category) && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50/40 border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-[0_12px_35px_rgba(8,102,245,0.08)] hover:shadow-[0_20px_45px_rgba(8,102,245,0.14)] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0866F5] text-white text-[11px] font-bold uppercase tracking-wider mb-4 shadow-sm">
                  <Sparkles size={13} />
                  <span>Featured Article</span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#071D49] hover:text-[#0866F5] transition-colors leading-snug mb-3">
                  {featuredArticle.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 mb-6">
                  <span className="text-[#0866F5] bg-blue-100/60 px-3 py-1 rounded-full">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#0866F5]" /> {featuredArticle.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#0866F5]" /> {featuredArticle.date}
                  </span>
                </div>

                <button
                  onClick={() => onSelectArticle(featuredArticle)}
                  className="inline-flex items-center gap-2 bg-[#0866F5] hover:bg-[#0052cc] text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-[0_6px_20px_rgba(8,102,245,0.3)] transition-all duration-300 hover:scale-105"
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={15} className="stroke-[2.5]" />
                </button>
              </div>

              {/* Featured Card Decorative Visual */}
              <div className="lg:col-span-5 h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-[#0866F5] to-blue-800 p-8 flex flex-col justify-between text-white relative overflow-hidden shadow-lg">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase font-bold tracking-widest text-blue-200">
                    technerdo • Insights
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <BookOpen size={20} />
                  </div>
                </div>
                <div>
                  <span className="text-3xl font-extrabold font-display leading-tight opacity-90 block mb-2">
                    Modern Web
                  </span>
                  <span className="text-xs text-blue-100 leading-relaxed block">
                    Fast • Accessible • Component-Driven
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. Blog Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredArticles.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-slate-100 hover:border-blue-200 rounded-2xl p-6 shadow-[0_6px_25px_rgba(7,29,73,0.04)] hover:shadow-[0_16px_35px_rgba(8,102,245,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Category & Read Time */}
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-3">
                  <span className="text-[#0866F5] bg-blue-50 px-2.5 py-0.5 rounded-md font-bold text-[11px]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-display font-bold text-base text-[#071D49] group-hover:text-[#0866F5] transition-colors mb-2 leading-snug">
                  {post.title}
                </h4>

                {/* Excerpt */}
                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Read More Link */}
              <button
                onClick={() => onSelectArticle(post)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0866F5] hover:text-[#0052cc] group-hover:gap-2.5 transition-all pt-3 border-t border-slate-100 self-start"
              >
                <span>Read More</span>
                <ArrowRight size={14} className="stroke-[2.5]" />
              </button>
            </div>
          ))}
        </div>

        {/* 4. Newsletter Call to Action matching prompt */}
        <div className="bg-gradient-to-br from-[#071D49] via-[#092966] to-[#0866F5] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4">
              <Mail size={22} />
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight mb-3">
              Stay Updated!
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-lg mb-8">
              Get the latest technology articles, programming tips, and development tutorials directly in your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-sm text-white placeholder-blue-200 outline-none focus:bg-white/20 focus:border-white transition-all backdrop-blur-md"
              />
              <button
                type="submit"
                className="bg-white hover:bg-blue-50 text-[#071D49] font-bold text-xs sm:text-sm px-7 py-3 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe Now'}
              </button>
            </form>
            {subscribed && (
              <p className="text-emerald-300 text-xs font-semibold mt-3 flex items-center gap-1.5 animate-fade-in">
                <Check size={14} /> Thank you for subscribing! Updates will be sent to your inbox.
              </p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ArticleModal from './components/ArticleModal';
import './style.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Scroll spy to update active navigation item
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'blog', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#071D49] selection:bg-[#0866F5] selection:text-white flex flex-col font-sans">
      
      {/* 1. Fixed Transparent Glassmorphism Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onNavClick={handleNavClick} />

        {/* 3. Statistics Section (Floating wide glassmorphism card) */}
        <Stats />

        {/* 4. About Section */}
        <About onNavClick={handleNavClick} />

        {/* 5. Skills Section */}
        <Skills />

        {/* 6. Projects Section */}
        <Projects />

        {/* 7. Experience & Journey Timeline */}
        <Experience />

        {/* 8. Blog Section */}
        <Blog onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer onNavClick={handleNavClick} />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

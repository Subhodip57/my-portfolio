import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Journey from './components/Journey';
import GithubCTA from './components/GithubCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

import { ArrowUp } from 'lucide-react';
import { animate } from 'animejs';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  // Back to top listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    // anime.js scroll to top
    animate(document.scrollingElement || document.documentElement, {
      scrollTop: [window.scrollY, 0],
      duration: 400,
      easing: 'easeOutExpo'
    });
  };

  // Global scroll reveal
  useEffect(() => {
    if (isLoading) return; // Don't run animations while loading screen is active

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing to prevent re-triggering glitches
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <>
      <CustomCursor />
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      
      {/* We render the main site but fade it in once loading is complete. 
          Rendering it immediately in the background ensures browser preloads images/fonts! */}
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.8s ease-in' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Journey />
          <GithubCTA />
          <Contact />
        </main>
        <Footer />
        
        {/* Back to Top Button */}
        <button 
          className={`back-to-top ${showTopBtn ? 'visible' : ''}`} 
          onClick={scrollToTop}
          aria-label="Back to Top"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </>
  );
};

export default App;
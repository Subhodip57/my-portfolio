import React, { useEffect, useRef } from 'react';
import { animate, stagger, utils } from 'animejs';
import Typed from 'typed.js';
import profileImg from '../assets/profile.png';
import MagneticButton from './MagneticButton';
import './Hero.css';

const Hero: React.FC = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Initial load animation for the centered content
    animate('.hero-anim', {
      translateY: [40, 0],
      opacity: [0, 1],
      delay: stagger(150, {start: 300}),
      easing: 'easeOutExpo',
      duration: 1200
    });

    const typed = new Typed(typedRef.current, {
      strings: ['IoT', 'Web Experiences', 'Mobile Apps', 'Full-Stack'],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    // Continuous background shape animation
    animate('.shape', {
      translateX: () => utils.random(-50, 50) + 'vw',
      translateY: () => utils.random(-50, 50) + 'vh',
      scale: () => utils.random(0.5, 2),
      rotate: () => utils.random(0, 360),
      duration: () => utils.random(8000, 15000),
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true
    });

    // Crown scribble morphing animation
    animate('.crown-path', {
      d: [
        { value: 'M8,83 L22,28 L38,62 L48,13 L62,58 L78,32 L92,78 Z' },
        { value: 'M12,78 L18,33 L42,58 L52,8 L58,62 L82,28 L88,82 Z' },
        { value: 'M10,80 L20,30 L40,60 L50,10 L60,60 L80,30 L90,80 Z' }
      ],
      easing: 'steps(3)', // Creates that low-framerate choppy scribble effect
      duration: 300,
      loop: true,
      direction: 'alternate'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handlePortraitHover = () => {
    animate('.scribble-crown', {
      translateY: -30,
      rotate: '1turn',
      scale: 1.3,
      filter: 'drop-shadow(0 0 20px var(--accent))',
      duration: 800,
      easing: 'easeOutElastic(1, .5)'
    });
  };

  const handlePortraitLeave = () => {
    animate('.scribble-crown', {
      translateY: 0,
      rotate: '-10deg',
      scale: 1,
      filter: 'drop-shadow(0 0 10px var(--accent))',
      duration: 600,
      easing: 'easeOutQuad'
    });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-shapes">
        {/* These shapes will be animated by anime.js */}
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="hero-bg-grid"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title hero-anim">
            Developer. Engineer.<br />
            Focusing on <span className="outline-text" ref={typedRef}></span>
          </h1>
          
          <div className="hero-cta hero-anim">
            <MagneticButton href="#projects" className="btn-pill">
              See my work
            </MagneticButton>
          </div>
        </div>

        <div className="hero-image-container hero-anim" onMouseEnter={handlePortraitHover} onMouseLeave={handlePortraitLeave}>
          <div className="crown-wrapper">
            <svg className="scribble-crown" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path className="crown-path" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" 
                    d="M10,80 L20,30 L40,60 L50,10 L60,60 L80,30 L90,80 Z" />
            </svg>
          </div>
          <img 
            src={profileImg} 
            alt="Subhodip Laha" 
            className="hero-image" 
          />
          <div className="cyber-glow-ring"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
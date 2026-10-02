import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

import { animate } from 'animejs';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;

      animate('.scroll-progress-bar', {
        width: `${scrolled}%`,
        duration: 200,
        easing: 'easeOutQuart'
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="scroll-progress-bar"></div>
      <div className="container nav-container">
        <a href="#home" className="logo">SL<span className="dot">.</span></a>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'active glass-panel' : ''}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>
                {link}
              </a>
            </li>
          ))}
          <li>
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </li>
          <li>
            <a href="https://github.com/Subhodip57" target="_blank" rel="noopener noreferrer" className="github-icon">
              <FaGithub size={20} />
            </a>
          </li>
        </ul>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
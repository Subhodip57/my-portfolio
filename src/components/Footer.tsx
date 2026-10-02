import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Subhodip Laha</h3>
            <p>Full-Stack Developer | Mobile App Engineer | IoT Enthusiast</p>
          </div>
          <div className="footer-social">
            <a href="https://github.com/Subhodip57" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={20} /></a>
            <a href="https://www.facebook.com/share/1KirDx7KeL/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size={20} /></a>
            <a href="https://www.instagram.com/laha.subhodip?stkn=MTNyYnNpMGRramltcg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={20} /></a>
            <a href="mailto:laha.subhodip07@gmail.com" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Subhodip Laha. Built with React + TypeScript.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
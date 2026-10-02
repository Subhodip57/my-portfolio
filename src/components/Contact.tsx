import React, { useRef, useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import MagneticButton from './MagneticButton';
import './Contact.css';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSending(true);

    // Replace this with your actual Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz4XWvzappGQWST3y2ddzySuo3HwCQHwj169yLeAm66hASm53Mn6ic3Sdcc-ZLrBkJ-Jg/exec';
    
    try {
      const formData = new FormData(formRef.current);
      
      await fetch(scriptURL, {
        method: 'POST',
        body: formData,
        // mode: 'no-cors' is often required for Google Apps Script to avoid CORS errors
        mode: 'no-cors' 
      });

      // Because of 'no-cors', response.ok is always false/opaque, so we assume success if it doesn't throw
      setIsSending(false);
      setIsSent(true);
      formRef.current.reset();
      
      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      console.error('Error!', error);
      setIsSending(false);
      alert('Something went wrong. Please try emailing me directly!');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title scroll-reveal">Let's Build Something</h2>
        
        <div className="contact-grid">
          <div className="contact-info scroll-reveal">
            <p className="contact-desc">
              Have an idea, project, collaboration, or opportunity? Feel free to get in touch.
            </p>
            
            <div className="contact-links">
              <a href="mailto:laha.subhodip07@gmail.com" className="contact-link glass-panel">
                <Mail size={24} />
                <span>laha.subhodip07@gmail.com</span>
              </a>
              <a href="https://github.com/Subhodip57" target="_blank" rel="noopener noreferrer" className="contact-link glass-panel">
                <FaGithub size={24} />
                <span>@Subhodip57</span>
              </a>
              <a href="https://www.facebook.com/share/1KirDx7KeL/" target="_blank" rel="noopener noreferrer" className="contact-link glass-panel">
                <FaFacebook size={24} />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/laha.subhodip?stkn=MTNyYnNpMGRramltcg==" target="_blank" rel="noopener noreferrer" className="contact-link glass-panel">
                <FaInstagram size={24} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
          
          <form ref={formRef} className="contact-form glass-panel scroll-reveal" style={{ transitionDelay: '0.2s' }} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required placeholder="Hello, I'd like to talk about..."></textarea>
            </div>
            
            <MagneticButton type="submit" className="btn btn-primary submit-btn" disabled={isSending}>
              {isSending ? 'Sending...' : isSent ? 'Sent Successfully!' : 'Send Message'} 
              {isSent ? <Check size={18} /> : <Send size={18} />}
            </MagneticButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
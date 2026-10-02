import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title scroll-reveal">About Me</h2>
        <div className="about-grid">
          <div className="about-text scroll-reveal">
            <p>
              I'm a 5th-semester B.Sc. student passionate about software development, web technologies, mobile applications, databases, and IoT. I enjoy turning ideas into functional projects and continuously improving my technical skills.
            </p>
            <p>
              My journey involves a deep dive into programming fundamentals, building practical projects, and utilizing modern tools like Git and GitHub. I thrive on continuously learning new technologies to bridge the gap between theoretical computer science and real-world engineering.
            </p>
          </div>
          <div className="about-card glass-panel scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="info-row">
              <span className="label">Name</span>
              <span className="value">Subhodip Laha</span>
            </div>
            <div className="info-row">
              <span className="label">Education</span>
              <span className="value">B.Sc. — 5th Semester</span>
            </div>
            <div className="info-row">
              <span className="label">Focus</span>
              <span className="value">Software Development</span>
            </div>
            <div className="info-row">
              <span className="label">Interests</span>
              <span className="value">Web • Mobile • IoT</span>
            </div>
            <div className="info-row">
              <span className="label">Location</span>
              <span className="value">West Bengal, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
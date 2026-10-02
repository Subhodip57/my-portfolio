import React from 'react';
import './Timeline.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title scroll-reveal">Education</h2>
        
        <div className="timeline-container">
          {/* B.Sc. Third Year */}
          <div className="timeline-item scroll-reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <h3>B.Sc. — Third Year</h3>
              <span className="timeline-date">Memari College (University of Burdwan) — Currently in 5th Semester</span>
              <p className="project-desc" style={{marginBottom: '1rem'}}>
                Continuing B.Sc. with advanced coursework.
              </p>
              <ul className="learning-list">
                <li><strong>Semester 5:</strong> Currently pursuing</li>
              </ul>
            </div>
          </div>

          {/* B.Sc. Second Year */}
          <div className="timeline-item scroll-reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <h3>B.Sc. — Second Year</h3>
              <span className="timeline-date">Memari College (University of Burdwan)</span>
              <p className="project-desc" style={{marginBottom: '1rem'}}>
                Deepened knowledge in core computer science concepts, object-oriented programming, and systems.
              </p>
              <ul className="learning-list">
                <li><strong>Semester 3:</strong> Data Structures & Algorithms (DSA), Discrete Mathematics</li>
                <li><strong>Semester 4:</strong> Java, Database Management Systems (DBMS), Operating Systems (OS)</li>
              </ul>
            </div>
          </div>

          {/* B.Sc. First Year */}
          <div className="timeline-item scroll-reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <h3>B.Sc. — First Year</h3>
              <span className="timeline-date">Memari College (University of Burdwan)</span>
              <p className="project-desc" style={{marginBottom: '1rem'}}>
                Built the foundational concepts of programming and digital logic.
              </p>
              <ul className="learning-list">
                <li><strong>Semester 1:</strong> Python, Digital Electronics</li>
                <li><strong>Semester 2:</strong> C Programming, Unix</li>
              </ul>
            </div>
          </div>

          {/* High School */}
          <div className="timeline-item scroll-reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <h3>Higher Secondary — Science</h3>
              <span className="timeline-date">Ajhapur High School — Classes V to XII</span>
              <p className="project-desc">
                Chose the Science stream, developing the mathematical and scientific foundation that later led toward computer science and software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
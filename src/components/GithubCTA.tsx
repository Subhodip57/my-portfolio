import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './GithubCTA.css';

const GithubCTA: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="github-cta-box glass-panel scroll-reveal">
          <FaGithub size={48} className="cta-icon" />
          <h2 className="cta-title">Building in Public</h2>
          <p className="cta-text">
            I use GitHub to experiment, build projects, learn new technologies, and document my development journey.
          </p>
          <div className="cta-handle">@Subhodip57</div>
          <a href="https://github.com/Subhodip57" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Visit GitHub <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubCTA;
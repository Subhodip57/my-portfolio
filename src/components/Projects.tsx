import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { animate } from 'animejs';
import { projects } from '../data/data';
import MagneticButton from './MagneticButton';
import './Projects.css';

const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const movePreview = (e: MouseEvent) => {
      if (previewRef.current) {
        // Move the preview to follow the mouse
        animate(previewRef.current, {
          translateX: e.clientX + 20,
          translateY: e.clientY + 20,
          duration: 100,
          easing: 'linear'
        });
      }
    };
    
    window.addEventListener('mousemove', movePreview);
    return () => window.removeEventListener('mousemove', movePreview);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (previewRef.current) {
      previewRef.current.style.display = 'block';
      // We don't have images yet, so we use CSS gradients mapped to the project ID
      previewRef.current.className = `preview-follower project-${id}`;
      animate(previewRef.current, {
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 300,
        easing: 'easeOutExpo'
      });
    }
  };

  const handleMouseLeave = () => {
    if (previewRef.current) {
      animate(previewRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 200,
        easing: 'easeOutExpo',
        complete: () => {
          if (previewRef.current) previewRef.current.style.display = 'none';
        }
      });
    }
  };

  return (
    <section id="projects" className="section">
      <div className="preview-follower" ref={previewRef} style={{ display: 'none' }}>
        <div className="preview-placeholder">
          <ImageIcon size={32} />
          <span>Preview Available Soon</span>
        </div>
      </div>
      
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} style={{ height: '100%' }}>
              <div 
                className={`project-card glass-panel ${expandedId === project.id ? 'expanded' : ''}`}
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: 'pointer', height: '100%' }}
              >
              <div className="project-content">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <div className="project-links" onClick={(e) => e.stopPropagation()}>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="project-title">{project.name}</h3>
                
                {expandedId === project.id && (
                  <p className="project-desc" style={{ marginTop: '1rem', animation: 'fadeIn 0.3s ease' }}>
                    {project.description}
                  </p>
                )}
                
                <div className="project-tech" style={{ marginTop: expandedId === project.id ? '1rem' : 'auto' }}>
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
        
        <div className="projects-footer">
          <MagneticButton href="https://github.com/Subhodip57" className="btn btn-primary">
            View All Projects <ArrowRight size={18} />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
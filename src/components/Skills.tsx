import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
import { skills } from '../data/data';
import './Skills.css';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Flatten all skills into a single array
    const allSkills = Object.values(skills).flat();

    // The TagCloud library mutates the DOM directly.
    // Ensure we clean it up so React strict mode doesn't duplicate it.
    containerRef.current.innerHTML = '';

    const radius = window.innerWidth < 768 ? 150 : 300;

    const tagCloud = TagCloud('.tagcloud-container' as any, allSkills, {
      radius: radius,
      maxSpeed: 'fast',
      initSpeed: 'normal',
      direction: 135,
      keep: true
    } as any);

    return () => {
      tagCloud.destroy();
    };
  }, []);

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title scroll-reveal">Technical Skills</h2>
        <div className="skills-3d-wrapper scroll-reveal">
          <div ref={containerRef} className="tagcloud-container"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
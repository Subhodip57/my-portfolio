import React from 'react';
import { journeyItems } from '../data/data';
import './Timeline.css';

const Journey: React.FC = () => {
  return (
    <section className="section bg-alt">
      <div className="container">
        <h2 className="section-title scroll-reveal">Development Journey</h2>
        
        <div className="journey-path">
          {journeyItems.map((item, index) => (
            <div key={index} className="journey-node scroll-reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
              <div className="node-marker glass-panel">{index + 1}</div>
              <div className="node-text">{item}</div>
              {index !== journeyItems.length - 1 && <div className="node-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
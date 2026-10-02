import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

import { animate, utils } from 'animejs';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' || 
          target.closest('a') || 
          target.closest('button') ||
          target.classList.contains('btn') ||
          target.classList.contains('tagcloud--item')) {
        cursorRef.current?.classList.add('hovered');
      } else {
        cursorRef.current?.classList.remove('hovered');
      }
    };

    const onClick = (e: MouseEvent) => {
      // Create a burst container
      const burstContainer = document.createElement('div');
      burstContainer.style.position = 'fixed';
      burstContainer.style.left = `${e.clientX}px`;
      burstContainer.style.top = `${e.clientY}px`;
      burstContainer.style.zIndex = '9999';
      burstContainer.style.pointerEvents = 'none';
      document.body.appendChild(burstContainer);

      const particles = [];
      const colors = ['var(--accent)', 'var(--highlight)', 'var(--accent-secondary)', '#ffffff'];
      
      for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'burst-particle';
        p.style.background = colors[utils.random(0, colors.length - 1)];
        burstContainer.appendChild(p);
        particles.push(p);
      }

      animate(particles, {
        translateX: () => utils.random(-70, 70),
        translateY: () => utils.random(-70, 70),
        scale: [1, 0],
        opacity: [1, 0],
        duration: () => utils.random(400, 800),
        easing: 'easeOutExpo',
        complete: () => {
          burstContainer.remove();
        }
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div className="cursor-container">
      <div className="cursor-main" ref={cursorRef}></div>
    </div>
  );
};

export default CustomCursor;

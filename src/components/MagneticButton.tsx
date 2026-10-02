import React, { useRef, useEffect } from 'react';
import { animate } from 'animejs';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick, href, type = 'button', disabled = false }) => {
  const buttonRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || disabled) return;

    const move = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const h = rect.width / 2;
      const v = rect.height / 2;
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - v;

      animate(button, {
        translateX: x * 0.3,
        translateY: y * 0.3,
        duration: 400,
        easing: 'easeOutElastic(1, .5)'
      });
    };

    const reset = () => {
      animate(button, {
        translateX: 0,
        translateY: 0,
        duration: 600,
        easing: 'easeOutElastic(1, .5)'
      });
    };

    button.addEventListener('mousemove', move);
    button.addEventListener('mouseleave', reset);

    return () => {
      button.removeEventListener('mousemove', move);
      button.removeEventListener('mouseleave', reset);
    };
  }, [disabled]);

  if (href) {
    return (
      <a href={href} className={className} ref={buttonRef as any}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} ref={buttonRef as any} disabled={disabled}>
      {children}
    </button>
  );
};

export default MagneticButton;

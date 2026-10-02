import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const greetings = [
  { text: "Hello", language: "English" },
  { text: "नमस्ते", language: "Hindi" },
  { text: "হ্যালো", language: "Bengali" },
  { text: "こんにちは", language: "Japanese" },
  { text: "안녕하세요", language: "Korean" },
  { text: "你好", language: "Chinese" },
  { text: "Hola", language: "Spanish" },
  { text: "Bonjour", language: "French" },
  { text: "Hallo", language: "German" },
  { text: "Ciao", language: "Italian" },
  { text: "Olá", language: "Portuguese" },
  { text: "مرحبا", language: "Arabic" },
  { text: "Привет", language: "Russian" },
  { text: "নমস্কার", language: "Bengali Final" }
];

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'greetings' | 'name' | 'exiting'>('greetings');

  // Smoothly increment the progress bar over ~2.2 seconds
  useEffect(() => {
    if (phase !== 'greetings') return;
    const duration = 2200;
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);
    
    const timer = setInterval(() => {
      setProgress(p => {
        if (p + step >= 100) return 100;
        return p + step;
      });
    }, intervalTime);
    
    return () => clearInterval(timer);
  }, [phase]);

  // Cycle through the greetings
  useEffect(() => {
    if (phase !== 'greetings') return;
    
    // ~160ms per word creates a fast, cyber-glitch rhythm (total ~2.2s for 14 words)
    const interval = setInterval(() => {
      setIndex(prev => {
        if (prev >= greetings.length - 1) {
          clearInterval(interval);
          // Transition to the final name reveal
          setTimeout(() => setPhase('name'), 600); 
          return prev;
        }
        return prev + 1;
      });
    }, 160);

    return () => clearInterval(interval);
  }, [phase]);

  // Handle the exit transition
  useEffect(() => {
    if (phase === 'name') {
      setTimeout(() => setPhase('exiting'), 1000);
    } else if (phase === 'exiting') {
      setTimeout(() => onComplete(), 800); // Matches the CSS exit duration
    }
  }, [phase, onComplete]);

  // Generate ASCII progress bar
  const renderProgressBar = (percent: number) => {
    const totalBlocks = 20;
    const filledBlocks = Math.floor((percent / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    return '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks);
  };

  const isFinalGreeting = index === greetings.length - 1;

  return (
    <div className={`loading-screen ${phase === 'exiting' ? 'exit' : ''}`}>
      {/* Subtle background layers */}
      <div className="loading-grid"></div>
      <div className="loading-noise"></div>
      
      <div className="loading-content">
        {phase === 'greetings' ? (
          <div className="greeting-container">
            <h1 
              key={index} 
              className={`greeting-text ${isFinalGreeting ? 'final-greeting' : 'cycling-greeting'}`}
              lang={
                greetings[index].language === 'Arabic' ? 'ar' :
                greetings[index].language === 'Japanese' ? 'ja' :
                greetings[index].language === 'Korean' ? 'ko' :
                greetings[index].language === 'Chinese' ? 'zh' : 'en'
              }
            >
              {greetings[index].text}
            </h1>
            <div className="greeting-counter">
              {(index + 1).toString().padStart(2, '0')} / {greetings.length}
            </div>
          </div>
        ) : (
          <div className="name-reveal">
            SUBHODIP LAHA
          </div>
        )}
      </div>

      <div className="loading-footer">
        <div className="loading-status">INITIALIZING EXPERIENCE</div>
        <div className="loading-progress">
          <span className="progress-bar">{renderProgressBar(progress)}</span>
          <span className="progress-text">{Math.floor(progress)}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
import { useEffect, useState } from 'react';
import './SplashScreen.css';

function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showStars, setShowStars] = useState(false);
  const [showOrb, setShowOrb] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const orbTimer = setTimeout(() => setShowOrb(true), 300);
    const particlesTimer = setTimeout(() => setShowParticles(true), 600);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 1000);
    const starsTimer = setTimeout(() => setShowStars(true), 1400);
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 4000);

    return () => {
      clearTimeout(orbTimer);
      clearTimeout(particlesTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(starsTimer);
      clearTimeout(fadeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`splash-container ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="splash-overlay" />

      {/* Animated stars */}
      <div className="stars-container">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`star ${showStars ? 'opacity-100' : 'opacity-0'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${1 + Math.random() * 2}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`particle ${showParticles ? 'opacity-100' : 'opacity-0'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Central content container */}
      <div className="splash-content">
        {/* Multiple glowing orbs */}
        <div
          className={`orb-large ${showOrb ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ animation: 'pulse-orb 4s infinite' }}
        />
        <div
          className={`orb-small ${showOrb ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ animation: 'pulse-orb 3s infinite 0.5s' }}
        />

        {/* Main content */}
        <div className="text-center">
          <h1 
            className={`splash-title ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            style={{ animation: 'float 3s ease-in-out infinite' }}
          >
            DreamCastle
          </h1>

          <div className={`splash-subtitle-container ${showSubtitle ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <p className="splash-subtitle">Where Dreams Take Flight</p>
            <p className="splash-subtitle-secondary">Your Journey Begins Here</p>
          </div>

          <div className="loading-container">
            <div className="loading-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen; 
import React, { useState, useEffect } from 'react';
import './themeToggle.scss';

const ThemeToggle = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate stars dynamically
    const newStars = Array.from({ length: 20 }, (_, i) => (
      <span key={`star-${i}`} className="star"></span>
    ));
    setStars(newStars);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
    >
      {/* Clouds */}
      <span className="cloud cloud-1"></span>
      <span className="cloud cloud-2"></span>
      
      {/* Stars container */}
      <div className="stars">
        {stars}
      </div>
    </button>
  );
};

export default ThemeToggle;
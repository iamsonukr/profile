import React, { useState, useEffect } from 'react';
import './themeToggle.scss';

const ThemeToggle = () => {
  const [stars, setStars] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Generate stars dynamically with random positions
    const newStars = Array.from({ length: 20 }, (_, i) => (
      <span
        key={`star-${i}`}
        className="star"
      />
    ));
    setStars(newStars);

    // Detect system theme and apply it
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applySystemTheme = (e) => {
      const html = document.documentElement;
      if (e.matches) {
        html.setAttribute('data-theme', 'dark');
      } else {
        html.removeAttribute('data-theme');
      }
    };

    // Initial theme setting based on system preference
    applySystemTheme(mediaQuery);

    // Listen for system theme changes
    mediaQuery.addEventListener('change', applySystemTheme);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener('change', applySystemTheme);
  }, []);

  const toggleTheme = () => {
    // Prevent multiple rapid clicks during animation
    if (isAnimating) return;

    setIsAnimating(true);
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');

    if (currentTheme === 'dark') {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', 'dark');
    }

    // Reset animation lock after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with the CSS transition duration
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      {/* Clouds */}
      {/* <span className="cloud cloud-1"></span> */}
      <span className="cloud cloud-2"></span>

      {/* Stars container */}
      <div className="stars">
        {stars}
        </div>
      

    </button>
  );
};

export default ThemeToggle;
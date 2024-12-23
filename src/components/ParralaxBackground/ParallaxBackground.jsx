import React, { useState, useEffect } from 'react';
import './ParallaxBackground.scss';

const ParallaxBackground = ({
  dayNightCycle = true,
  dayDuration = 5,
  foregroundSpeed = 90,
  hillsSpeed = 120,
  rocks1Speed = 160,
  rocks2Speed = 280,
  brightness = 1,
  className = ''
}) => {
  const [isDaytime, setIsDaytime] = useState(true);

  // Handle system's day/night cycle change
  const handleDayNightCycle = (e) => {
    // Check for dark mode using the correct media query
    const darkModeOn = document.documentElement.getAttribute('data-theme') === 'dark';
    setIsDaytime(!darkModeOn);
  };

  useEffect(() => {
    if (!dayNightCycle) return;

    // Initial check for theme
    handleDayNightCycle();

    // Set up a MutationObserver to watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          handleDayNightCycle();
        }
      });
    });

    // Start observing document theme changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, [dayNightCycle]);

  return (
    <div className={`parallax-container ${className}`}>
      
      <div 
        className={`parallax-content ${isDaytime ? 'day' : 'night'}`}
        style={{
          '--foreground-speed': `${foregroundSpeed}s`,
          '--hills-speed': `${hillsSpeed}s`,
          '--rocks1-speed': `${rocks1Speed}s`,
          '--rocks2-speed': `${rocks2Speed}s`,
          '--brightness': brightness
        }}
      >
        <h1 className='available' style={{textAlign:'center',top:130,position:'relative'}}> 
        Available for Freelancing Opportunities</h1>
        <div className="background-layer" />
        
        <div className="parallax-layer rocks2">
          <div className="layer-content" />
        </div>
        
        <div className="parallax-layer rocks1">
          <div className="layer-content" />
        </div>
       
        <div className="parallax-layer hills">
          <div className="layer-content" />
        </div>
        
        <div className="parallax-layer foreground">
          <div className="layer-content" />
        </div>
      </div>
    </div>
  );
};

export default ParallaxBackground;
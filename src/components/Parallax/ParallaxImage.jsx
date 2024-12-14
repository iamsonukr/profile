import React, { useRef, useState } from 'react';
import './parallax-image.scss'; // Make sure to import the SCSS

const ParallaxImage = ({ src, alt }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate rotation based on mouse position
    const rotateX = (e.clientY - centerY) / 20;
    const rotateY = -(e.clientX - centerX) / 20;

    setRotation({
      x: rotateX,
      y: rotateY
    });
  };

  const handleMouseLeave = () => {
    // Reset to original position
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef}
      className="profile-image"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--rotate-x': `${rotation.x}deg`,
        '--rotate-y': `${rotation.y}deg`
      }}
    >
      <img src={src} alt={alt}  draggable='true' />
    </div>
  );
};

export default ParallaxImage;
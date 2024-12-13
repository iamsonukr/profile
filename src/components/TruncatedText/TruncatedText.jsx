import React, { useState } from 'react';
import './truncatedTexts.scss'; // Import the SCSS file

const TruncatedText = ({ text, workIndex, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={`work-${index}-${workIndex}`}
      className={`skills-tooltip ${isHovered ? 'expanded' : 'truncated'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="tooltip-content">
        {text}
      </div>
    </div>
  );
};

export default TruncatedText;
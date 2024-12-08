import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Slider.scss';

const Slider = () => {
  const [active, setActive] = useState(0);
  const images = [
    'https://pixelmoments.vercel.app/wedding-work.png',
    'https://pixelmoments.vercel.app/wedding-work.png',
    'https://pixelmoments.vercel.app/wedding-work.png',
    'https://pixelmoments.vercel.app/wedding-work.png',
    'https://pixelmoments.vercel.app/wedding-work.png'
  ];

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(refreshInterval);
  }, [active]);

  const handleNext = () => {
    setActive((prevActive) => (prevActive + 1) % images.length);
  };

  const handlePrev = () => {
    setActive((prevActive) => (prevActive - 1 + images.length) % images.length);
  };

  const handleDotClick = (index) => {
    setActive(index);
  };

  return (
    <div className="slider">
      <div className="list">
        <AnimatePresence>
          {images.map((image, index) => (
            index === active && (
              <motion.div
                key={index}
                className="item"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <img src={image} alt={`Slide ${index}`} style={{size:'100'}} />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
      <div className="buttons">
        <motion.button
          id="prev"
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          &lt;
        </motion.button>
        <motion.button
          id="next"
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          &gt;
        </motion.button>
      </div>
      <ul className="dots">
        {images.map((_, index) => (
          <motion.li
            key={index}
            className={active === index ? 'active' : ''}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Slider;
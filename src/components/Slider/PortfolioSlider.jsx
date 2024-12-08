import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./PortfolioSlider.scss";

const portfolioItems = [
  // { id: 1, title: "E-commerce Platform", image: "./assets/about01.png" },
  // { id: 1, title: "E-commerce Platform", image: "./assets/about01.png" },
  { id: 1, title: "E-commerce Platform", image: "./kil.jpg" },
  { id: 2, title: "E-commerce Platform", image: "./kil.jpg" },
  { id: 3, title: "E-commerce Platform", image: "http://localhost:5173/assets/heroArt.png" }
  // { id: 2, title: "Social Media App", image: "https://pixelmoments.vercel.app/wedding-work.png" },
  // { id: 3, title: "Portfolio Website", image: "https://pixelmoments.vercel.app/wedding-work.png" },
];

const PortfolioSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  // Auto-slide functionality using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <AnimatePresence>
        <motion.div
          key={portfolioItems[currentIndex].id}
          className="slider__item"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img src={portfolioItems[currentIndex].image} alt={portfolioItems[currentIndex].title} />
        </motion.div>
      </AnimatePresence>

      <button className="slider__button slider__button--prev" onClick={prevSlide}>
        &#8592;
      </button>
      <button className="slider__button slider__button--next" onClick={nextSlide}>
        &#8594;
      </button>

      <ul className="dots">
        {portfolioItems.map((_, index) => (
          <motion.li
            key={index}
            className={currentIndex === index ? "active" : ""}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </ul>
    </div>
  );
};

export default PortfolioSlider;

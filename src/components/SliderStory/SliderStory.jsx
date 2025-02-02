import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SliderStory.scss";

const portfolioItems = [
  {
    id: 3,
    title: "Web Development Training - St Andrews Delhi",
    image: "./assets/sliderImages/SAITM-B2-OCT-SonuTeaching.png"
  },{
    id: 1,
    title: "Web Development Training - St Andrews Delhi OCT 2024",
    image: "./assets/sliderImages/SAITM-B1-OCT.jpg"
  },
  {
    id: 2,
    title: "Web Development Training - St Andrews Delhi OCT 2024",
    image: "./assets/sliderImages/SAITM-B2-OCT.jpg"
  },
 
  {
    id: 4,
    title: "Web Development Training - St Andrews Gurugram Dec 2024",
    image: "./assets/sliderImages/SAITM-GG-BTI-NOV.png"
  },
  {
    id: 5,
    title: "Web Development Training - St Andrews Gurugram Dec 2024",
    image: "./assets/sliderImages/SAITM-GG-BTI-NOV2.png"
  },
  {
    id: 100,
    title: "",
    image: "./assets/sliderImages/SchoolPicNotice.png"
  },
  {
    id: 101,
    title: "Jharkhand Day Celebraion at Governor House - NOV 2023",
    image: "./assets/sliderImages/GovernerHouse.jpeg"
  },
  {
    id: 102,
    title: "NCC Camp C-Certificate - NOV 2022",
    image: "./assets/sliderImages/SONU-COLLEGE-NCC.png"
  },
  
];

const swipeConfidenceThreshold = 60000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const SliderStory = () => {
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const paginate = useCallback((newDirection) => {
    setImageLoaded(false);
    setPage(([current]) => {
      const nextIndex = (current + newDirection + portfolioItems.length) % portfolioItems.length;
      return [nextIndex, newDirection];
    });
  }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => paginate(1), 60000);
  //   return () => clearInterval(timer);
  // }, [paginate]);

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const handleDotClick = (index) => {
    const direction = index > currentIndex ? 1 : -1;
    setImageLoaded(false);
    setPage([index, direction]);
  };

  return (
    <div className="slider">
      <div className="slider__container">
        <AnimatePresence initial={false} custom={direction} >
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 100 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="slider__item"
          >
            {!imageLoaded && (
              <motion.div
                className="slider__loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Loading...
              </motion.div>
            )}
            <motion.img
              src={portfolioItems[currentIndex].image}
              alt={portfolioItems[currentIndex].title}
              onLoad={() => setImageLoaded(true)}
              className={`slider__image ${imageLoaded ? 'loaded' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.p className="slider__title">{portfolioItems[currentIndex].title}</motion.p>
          </motion.div>
        </AnimatePresence>

        <motion.button
          className="slider__button slider__button--prev"
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </motion.button>
        <motion.button
          className="slider__button slider__button--next"
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          →
        </motion.button>

        <div className="slider__dots">
          {portfolioItems.map((_, index) => (
            <motion.button
              key={index}
              className={`slider__dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderStory;
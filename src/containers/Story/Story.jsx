import React from "react";
import { motion } from "framer-motion";
import SliderStory from '../../components/SliderStory/SliderStory'
import "./Story.scss";
import { AppWrap,MotionWrap } from "../../wrapper";

function Story() {
  // Animation variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const storyVariants = {
    hidden: { x: "-100vw" },
    visible: { 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  };

  const sliderVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1, ease: "easeIn", delay: 0.4 }
    }
  };

  return (
    <motion.div id="story">
      <h1 className="head-text">My <span>Journey</span></h1>

    <motion.div
      className="story-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      >
      <motion.div
        className="story"
        variants={storyVariants}
        initial="hidden"
        animate="visible"
        >
        <p className="story__description">
        I began my tech journey during college, creating logos using Adobe Photoshop and Illustrator. This experience honed my design skills, connected me with global clients, and provided insights into diverse business needs.
          <br/>
         
          After that I aquired the knowledge of web development and during my college years, I successfully completed three internships as a web developer, each offering valuable and unique learning opportunities. After graduation, I transitioned to a full-time role as a web developer at a startup in Chandigarh. There, I contributed to multiple impactful projects and conducted industrial training sessions in various colleges, sharing my knowledge and expertise with aspiring developers.
          
          <br/>
          
          Currently, alongside working on diverse projects, I am expanding my skill set by deepening my knowledge of DevOps technologies. This ongoing learning journey helps me stay updated with industry trends and ensures I can deliver efficient and scalable solutions.
        </p>
      </motion.div>

      <motion.div
        className="slider"
        variants={sliderVariants}
        initial="hidden"
        animate="visible"
        >
        <SliderStory/>
      </motion.div>
        </motion.div>
    </motion.div>
  );
}

export default AppWrap(
  MotionWrap(Story, 'app__story'),
  'story',
  'app__whitebg',
);
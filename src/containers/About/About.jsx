import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
// import { urlFor, client } from '../../client';


const About = () => {
  const [abouts, setAbouts] = useState([
    {
      title: "Frontend Development",
      description: "I create responsive websites that deliver a seamless user experience.",
      imgUrl: "./assets/skills/frontend.png"
    },
    {
      title: "Backend Development",
      description: "I develop dynamic web applications using Node.js and Express.js.",
      imgUrl: "./assets/skills/backend.jpg"
    },
    {
      title: "UI/UX Designing",
      description: "I design engaging user interfaces with Figma, Adobe Photoshop, and Illustrator.",
      imgUrl: "./assets/skills/design.png"
    },
    {
      title: "Content Management System",
      description: "I build CMS websites with WordPress and Shopify.",
      imgUrl: "./assets/skills/cms.png"
    }
  ]);
  
  
  
  
  
  
  
  

//   useEffect(() => {
//     const query = '*[_type == "abouts"]';

//     client.fetch(query).then((data) => {
//       setAbouts(data);
//     });
//   }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img  src={about.imgUrl} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);

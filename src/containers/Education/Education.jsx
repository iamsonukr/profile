import React from 'react';
import { motion } from 'framer-motion';
import './Education.scss';
import { AppWrap, MotionWrap } from '../../wrapper';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech CSE | 75%",
      institution: "Shivalik College Of Engineering",
      year: "2020 - 2024",
      details: "Bachelor of Technology in Computer Science and Engineering",
      achievements: [ "Research Assistant", "Digital Team Head", "Placecom Core Member","NCC C-Certificate" ]
    },
    {
      degree: "XII Science (CBSE) | 81%",
      institution: "Kendriya Vidyalaya Namkum",
      year: "2019 - 2020",
      details: "Higher Secondary Education with focus on Science and Mathematics",
      achievements: ["Youth Parliament Runner up","Lang-wiz Winner"]
    },
    {
      degree: "X (CBSE) | 87%",
      institution: "DAV Nageshware Public School",
      year: "2017 - 2018",
      details: "Secondary Education with strong academic foundation",
      achievements: ["Best Student Award", "Science Olympiad Winner"]
    }
  ];

  return (
    <motion.div 
      className="Education" 
      id="Education"
    >
      <motion.div 
        className="education__container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="head-text"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="head-text">Academic <span>Journey</span> </h2>
          <div className="education__header-line"></div>
        </motion.div>

        <div className="education__timeline-wrapper">
          <div className="education__timeline-line"></div>
          
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              className={`education__card ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ 
                // x: index % 2 === 0 ? -100 : 100, 
                opacity: 0 
              }}
              whileInView={{ 
                x: 0, 
                opacity: 1 
              }}
              transition={{ 
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
            >
              <motion.div 
                className="education__card-dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.5 }}
              />
              
              <motion.div className="education__card-content">
                <motion.div 
                  className="education__card-year"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.year}
                </motion.div>
                
                <motion.h3 
                  className="education__card-degree"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {item.degree}
                </motion.h3>
                
                <motion.div 
                  className="education__card-institution"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  <span className="institution-name">{item.institution}</span>
                </motion.div>
                
                <motion.p 
                  className="education__card-details"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  {item.details}
                </motion.p>
                
                <motion.div 
                  className="education__card-achievements"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.6 }}
                >
                  {item.achievements.map((achievement, idx) => (
                    <motion.span 
                      key={idx}
                      className="achievement-tag"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {achievement}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AppWrap(
  MotionWrap(Education, 'app__skills'),
  'Education',
  'app__primarybg'
);
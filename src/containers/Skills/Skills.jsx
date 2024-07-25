import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'react-tooltip/dist/react-tooltip.css'
// import ReactTooltip from 'react-tooltip';
// import { Tooltip } from 'react-tooltip'
// import j from '../../assets/react.png'


import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import './Skills.scss';
import { Tooltip } from 'react-tooltip';

const Skills = () => {
  const [experiences, setExperiences] = useState([
    {
      year: "JAN-2024 - PRESENT",
      works: [
        {
          name: "MERN Stack Developer",
          company: "Kreativan Technologies",
          desc: "Developed Full stack applications using ReactJS and Nodejs"
        }
      ]
    },
    {
      year: "NOV-2023 - JAN-2024",
      works: [
        {
          name: "Web Developer ( Internship )",
          company: "Savapak Digital Solutions",
          desc: "Worked with UX/UI designers on interfaces. Implemented RESTful APIs with MongoDB ."
        }
      ]
    },
    {
      year: "AUG-2022 - OCT-2022",
      works: [
        {
          name: "Full Stack Developer Intern ",
          company: "Baskethunt Private Limited",
          desc: "Developed and maintained web applications using ReactJs framework. Implemented responsive design for a seamless user experience across devices."
        }
      ]
    },
    {
      year: "JUN-2022 - JUL-2022",
      works: [
        {
          name: "Web Developer Intern",
          company: "Institute for Sustainable Development and Governance",
          desc: `Developed the organization’s official website featuring an interactive, user-friendly interface .`
        }
      ]
    }
  ]);

  const [skills, setSkills] = useState([
    {
      name: "HTML",
      bgColor: "#edf2f8",
      icon: "./assets/skills/html.png"
   
    },
    {
      name: "CSS",
      bgColor: "#edf2f8",
      icon: "./assets/skills/css.png"
   
    },
    {
      name: "JavaScript",
      bgColor: "#edf2f8",
      icon: "./assets/skills/javascript.png"
    },
    {
      name: "React",
      bgColor: "#edf2f8",
      icon: "./assets/skills/react.png"
   
    },
    {
      name: "NodeJS",
      bgColor: "#edf2f8",
      icon: "./assets/skills/node.png"
    },
    {
      name: "TypeScript",
      bgColor: "#edf2f8",
      icon: "./assets/skills/typescript.png"
    },
    {
      name: "MONGO DB",
      bgColor: "#edf2f8",
      icon: "./assets/skills/mongodb-1.png"
    },
    {
      name: "Git",
      bgColor: "#edf2f8",
      icon: "./assets/skills/git.png"
    },
    {
      name: "CPP",
      bgColor: "#edf2f8",
      icon: "./assets/skills/cpp.png"
    },
    {
      name: "Python",
      bgColor: "#edf2f8",
      icon: "./assets/skills/python.png"
    },
    {
      name: "Figma",
      bgColor: "#edf2f8",
      icon: "./assets/skills/figma.png"
    },
    {
      name: "WordPress",
      bgColor: "#edf2f8",
      icon: "./assets/skills/wordpress-1.png"
    },
    {
      name: "Shopify",
      bgColor: "#edf2f8",
      icon: "./assets/skills/shopify-1.png"
    },
    {
      name: "Photoshop",
      bgColor: "#edf2f8",
      icon: "./assets/skills/photoshop-1.png"
    },
    {
      name: "Adobe Illustrator",
      bgColor: "#edf2f8",
      icon: "./assets/skills/ai-1.png"
    }
    // {
    //   name: "Python",
    //   bgColor: "#112e53",
    //   icon: "../../assets/python.png"
    // },
    // {
    //   name: "JAVA",
    //   bgColor: "#112e53",
    //   icon: "../../assets/python.png"
    // },
    // {
    //   name: "C",
    //   bgColor: "#112e53",
    //   icon: "../../assets/python.png"
    // },
    // {
    //   name: "C++",
    //   bgColor: "#edf2f8",
    //   icon: "../../assets/about01.png"
    // }
  ]);

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';
  //   const skillsQuery = '*[_type == "skills"]';

  //   client.fetch(query).then((data) => {
  //     setExperiences(data);
  //   });

  //   client.fetch(skillsQuery).then((data) => {
  //     setSkills(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div><img src='./about01.png' alt="" width={100} /></div>


      {/* SKILS */}

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
                {/* <img src={skill.icon} alt={skill.name} /> */}
                {/* <img alt={skill.name} /> */}
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>



        {/* Experience  */}

        <div className="app__skills-exp">
          {experiences.map((experience,index) => (
            <motion.div className="app__skills-exp-item" key={experience.year} >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                
                {experience.works.map((work,workIndex) => (
                  <>
                    <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-exp-work" 
                      data-tip
                      data-for={work.name}
                      key={work.name}
                      data-tooltip-id={`work-${index}-${workIndex}`}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    <div id={`work-${index}-${workIndex}`} className="skills-tooltip">
                      {work.desc}
                    </div>
                    </motion.div>


                    <Tooltip
                      id={work.desc}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                      place={work.desc}
                    />
                    {/* </Tooltip> */}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);

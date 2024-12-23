import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { myProjects } from '../../../public/work/Work';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';
import { useNavigate } from 'react-router-dom';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('MERN');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handle window resizing for responsive design
    const handleResize = () => setDeviceWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Initialize works and filtered works
    setWorks(myProjects);
    setFilterWork(myProjects.filter((work) => work.tags.includes('Set A')));

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToWork = () => {
    document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
  };

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    scrollToWork();
    setAnimateCard([{ y: 100, opacity: 0 }]);
    // 'MERN' = 'Set A';

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'All') {
        setFilterWork(works);
      }
      else if (item === 'MERN') {
        setFilterWork(works.filter((work) => work.tags.includes('Set A')));
      }
      else if (item === 'Frontend') {
        setFilterWork(works.filter((work) => work.tags.includes('Set B')));
      }
      else if (item === 'CMS') {
        setFilterWork(works.filter((work) => work.tags.includes('Set C')));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {['MERN', 'Frontend', 'CMS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''
              }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                whileInView={deviceWidth <= 728 && { opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                {(work.tags.includes('MERN') || work.tags.includes('Frontend')) && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}

              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              {(work.tags.includes('Set A') || work.tags.includes('Set B') || work.tags.includes('Set C')) && (
                <div className="app__work-tag app__flex">
                  <p className="p-text-tag p-text">
                    {work.tags.slice(1).map((item, idx) => (
                      <span key={idx} className="tag">
                        {item + ' '}
                      </span>
                    ))}
                  </p>
                </div>
              )}

            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg');

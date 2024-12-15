import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { myProjects } from '../../../public/work/Work';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import './Work.scss';
import { useNavigate } from 'react-router-dom';
// import ''

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [deviceWidth,setDeviceWidth]=useState(window.innerWidth)


  


  useEffect(() => {
    // firt -> Set , Second -> Tech Used , third-> Service offered, Fourth -> Country
    ;

    console.log("The deviceWIdht is ",deviceWidth)
    console.log(myProjects)
    setWorks(myProjects);
    setFilterWork(myProjects); // Assuming initially, filterWork is the same as works
  }, []);

  const scrollToWork = () => {
    document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
  }

  const handleWorkFilter = (item) => {
    
    setActiveFilter(item);
    scrollToWork()
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['Set A', 'Set B', 'Set C', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
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
          <div className="app__work-item app__flex"  key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                whileInView={deviceWidth<=728 && { opacity: [0, 1] } }
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                { work.tags.includes('Set C') && (
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>)
               
}
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p> 
              {/* {
                work.tags.includes('Set A')?`This website is under construction`:""
              }  */}

              {/* Unlock this when there is enough of React Projects */}
              {/* {work.tags[0]=='Set C' || work.tags[0]=='Set A' || work.tags[0]=='Set B'? */}
              {work.tags[0]=='Set C' ?

                <div className="app__work-tag app__flex">
                <p className="p-text-tag p-text">{work.tags.slice(1).map(item=><span className='tag'>{item+" "}</span>)}</p>
              </div>
              :""
              }
            </div>
          </div>
        ))} 
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);

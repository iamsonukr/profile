import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import './Work.scss';
// import ''

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });


  useEffect(() => {
    const sampleData = [
      {
        id: 1,
        imgUrl: './assets/websites/binman.png',
        name: 'binmantrah.com',
        projectLink: 'https://binmantrash.com',
        codeLink: 'https://binmantrash.com',
        title: 'Binman Trash Cleaning Service',
        tags: ['Set A', 'WordPress','Client'],
        description: 'Binman trash cleaning service is a Texas based compnay that offers comprehensive trash chute installation and repair services to meet waste management needs.',
      },
      {
        id: 2,
        imgUrl: './assets/websites/jaganath.png',
        name: 'jagannathprasad',
        projectLink: 'https://jagannathprasad.in/',
        codeLink: 'https://jagannathprasad.in/',
        title: 'Jagannath Prashad',
        tags: ['Set A', 'Client','WordPress'],
        description: 'Jagannath Prashad is counsilting website which provides visa and other services for overseas education',
      },
      {
        id: 3,
        imgUrl: './assets/websites/predictsmile.png',
        name: 'predictsmile',
        projectLink: 'https://predictsmile.com/',
        codeLink: 'https://github.com/example/project-six',
        title: 'Predict Smile',
        tags: ['Set A', 'predictsmile'],
        description: 'Predict Smile website is of Dr. Mora who provides training in dental field. This website allows booking appointment, buying course, making payment etc.',
      },
      {
        id: 4,
        imgUrl: '../../../public/assets/websites/ashwinkar.png',
        name: 'ashwinkar',
        projectLink: 'https://aswinikar.com/',
        codeLink: 'https://aswinikar.com/',
        title: 'Dr. Aswini Kumar Kar',
        tags: ['Set A', 'ashwinkar'],
        description: 'This website is for Dr. Aswini Kumar Kar clinic which provides dental care, a prosthodontics expert with extensive research, over 20 published papers, and a book chapter authored.',
      },
      {
        id: 5,
        imgUrl: './assets/websites/artibities.png',
        name: 'Artebrities',
        projectLink: 'https://artebrities.com/',
        codeLink: 'artebrities',
        title: 'Artebrities',
        tags: ['Tag9', 'artebrities'],
        description: 'Artebrities has artisans dedicated to crafting anything and everything from resin and also provide unique home decor products, gifting items, and personalized creations',
      },
      {
        id: 6,
        imgUrl: './assets/websites/gtrans.png',
        name: 'gtransservice',
        projectLink: 'https://gtransservice.kz/en/',
        codeLink: 'https://github.com/example/project-three',
        title: 'G-Trans Service',
        tags: ['Set B', 'gtransservice'],
        description: 'G-Trans Service implement the project on construction and operation of the Transport and Logistics and Industrial Hub in Almaty region (the "Hub")',
        
      },
      {
        id: 7,
        imgUrl: './assets/websites/uniquebags.png',
        name: 'uniquebags',
        projectLink: 'https://uniquebags.in/',
        codeLink: 'https://github.com/example/project-seven',
        title: 'Unique Bags',
        tags: ['Set B', 'uniquebags'],
        description: 'Unique Bags specialist in customized manufacturing of eco friendly nonwoven bags.',
      },
      {
        id: 8,
        imgUrl: './assets/websites/ssbexport.png',
        name: 'ssbexport',
        projectLink: 'https://www.ssbexport.com/',
        codeLink: 'https://github.com/example/project-ten',
        title: 'SSB Exports',
        tags: ['Set A', 'Tag20'],
        description: 'SSB exports are Indian Food Grains Exporter which are running there bussiness in more than 25 countries',
      },
      {
        id: 9,
        imgUrl: './assets/websites/isdg.png',
        name: 'isdg',
        projectLink: 'https://isdg.in/index.php/',
        codeLink:  'https://isdg.in/index.php/',
        title: 'ISDG',
        tags: ['Set A', 'isdg'],
        description: 'This is the official website of Institute for Sustainable Development and Governance which is a is a research and advocacy organisation .'
      },
      {
        id: 10,
        imgUrl: './assets/websites/edelivate.png',
        name: 'edelevate',
        projectLink: 'https://edelevate.com/',
        codeLink: 'https://edelevate.com/',
        title: 'EdElivate',
        tags: ['Set B', 'edelevate'],
        description: 'EdElevate experts help students secure admissions and scholarships at Ivy League and top universities across the world.',
      },
      {
        id: 11,
        imgUrl: '/assets/websites/besttransplanter.png',
        name: 'besttransplanter',
        projectLink: 'https://besttransplanter.com/',
        codeLink: 'https://besttransplanter.com/',
        title: 'Best Transplanter',
        tags: ['Set A', 'besttransplanter'],
        description: 'Best Transplanter specialize in the production and distribution of agricultural machinery: transplanters, cultivation and harvesting machines, mulchers and flowerbeds.',
      
      },
      {
        id: 12,
        imgUrl: './assets/websites/drrupendar.png',
        name: 'Dr Rupinder Kaur',
        projectLink: 'https://drrupinderkaur.com/ ',
        codeLink: 'https://github.com/example/project-ten',
        title: 'Dr Rupinder Kaur',
        tags: ['Set A', 'Tag20'],
        description: 'Dr Rupinder Kaur is a personal development coach who help the individual to learn communication, leadership, teamwork, emotional intelligence and other skills.',
      },
      {
        id: 13,
        imgUrl: './assets/websites/kaps.png',
        name: 'kaps',
        projectLink: 'https://kaps.co.in/',
        codeLink: 'https://github.com/example/project-ten',
        title: 'KAPS',
        tags: ['Set B', 'Tag20'],
        description: 'KAPS is a leading provider of soft skills training and development, mentoring, finance consultancy, coaching, and placement services tailored for the finance and HR sectors. ',
      },
      {
        id: 14,
        imgUrl:'./assets/websites/advitics.png',
        name: 'advtics',
        projectLink: 'https://www.advtics.com/',
        codeLink: 'https://www.advtics.com/',
        title: 'Advtics',
        tags: ['Set B', 'advtics'],
        description: 'ADVANCED ANALYTICS is Saudi Owned Consulting Company based and registered in Saudi Arabia.',
       
      },
      {
        id: 15,
        imgUrl: './assets/websites/alburaq.png',
        name: 'Alburaq',
        projectLink: 'https://alburaqindustries.com/',
        codeLink: 'https://github.com/example/project-ten',
        title: 'Alburaq',
        tags: ['Set B', 'Tag20','leather'],
        description: 'Al Buraq is the top Middle East Finished Leather, Synthetic Leather, supplier, is specialized in the creation, manufacture, and exporter. ',
      },
      {
        id: 16,
        imgUrl: './assets/websites/ayaztanners.png',
        name: 'ayaztanners',
        projectLink: 'https://www.ayaztanners.com/',
        codeLink: 'https://www.ayaztanners.com/',
        title: 'Ayaz Tanners',
        tags: ['Set B', 'ayaztanners','leather'],
        description: 'Ayaz Tanners offer a high-quality range of finished leathers,  ',
      },
      {
        id: 17,
        imgUrl: './assets/websites/skyrise.png',
        name: 'skyrisechutes',
        projectLink: 'https://skyrisechutes.com',
        codeLink: 'https://github.com/example/project-ten',
        title: 'Skyrise Chutes',
        tags: ['Set A', 'skyrisechutes'],
        description: 'Skyrise Chutes is a Austin based company which provide the solution for building’s chute system.',
      },
      {
        id: 18,
        imgUrl: './assets/websites/nardagency.png',
        name: 'nardagency',
        projectLink: 'https://nardagency.com/',
        codeLink: 'https://github.com/example/project-ten',
        title: 'Nard Agency',
        tags: ['Set A', 'nardagency'],
        description: 'NARD stands as a proficient web development and design company, delivering creative and innovative design services',
      },
      {
        id: 19,
        imgUrl: './assets/websites/inaraglobal.png',
        name: 'inaraglobal',
        projectLink: 'https://inaraglobal.com/',
        codeLink: 'https://github.com/example/project-ten',
        title: 'Inara Global',
        tags: ['Set B', 'inaraglobal'],
        description: 'Inara Global are a manufacturer-consolidator-importer-exporter for complete range of equestrian items such as saddle,bridle , halter, etc.'
      },
      {
        id: 20,
        imgUrl: './assets/websites/exsure.png',
        name: 'exsure',
        projectLink: ' https://exsure.in/ ',
        codeLink: ' https://exsure.in/',
        title: 'ExSure',
        tags: ['Set B', 'exsure'],
        description: `ExSURE are developing India's first of its kind innovation involving exosome-based anti-cancer drug delivery platform targeting relapse-causing cancer stem cells.'`,
      },
      // {
        //   id: 21,
        //   imgUrl: '../../../public/assets/websites/bestwebteam.png',
        //   name: 'bestwebteam',
        //   projectLink: 'https://bestwebteam.com/',
        //   codeLink: 'https://bestwebteam.com/',
        //   title: 'Best Web Team',
        //   tags: ['Set A', 'bestwebteam'],
        //   description: 'This is a description for project ten.',
        // },
        
        // shopify
        {
          id: 22,
          imgUrl: './assets/websites/JAAN London.png',
          name: 'jaanlondon',
          projectLink: 'https://jaanlondon.com/',
          codeLink: 'https://jaanlondon.com/',
          title: 'Jaan London',
          tags: ['Set B', 'jaanlondon'],
          description: 'Jaan London is an e-commerce store based on United Kingdom, which sells ready-made cloths pecialises in eastern fashion with a touch of the west!.',
        },
        // {
        //   id: 23,
        //   imgUrl: './assets/websites/fankarihouse.png',
        //   name: 'bestwebteam',
        //   projectLink: 'https://fankarihouse.com/',
        //   codeLink: 'https://fankarihouse.com/',
        //   title: 'Best Web Team',
        //   tags: ['Set B', 'bestwebteam'],
        //   description: 'This is a description for project ten.',
        // },
        {
          id: 24,
          imgUrl: './assets/websites/thehomeplunge.png',
          name: 'thehomeplunge',
          projectLink: 'https://www.thehomeplunge.com/',
          codeLink: 'https://www.thehomeplunge.com/',
          title: 'The Homeplunge',
          tags: ['Set B', 'thehomeplunge'],
          description: 'Homeplunge deals with the unique device HomePlunge which is attachment with bathtub used to provide ice cold water for bathing.',
        },
        {
          id: 25,
          imgUrl: './assets/websites/coverhome-shop.png',
          name: 'coverhome',
          projectLink: 'https://www.coverhome.ma/',
          codeLink: 'https://www.coverhome.ma/',
          title: 'Coverhome',
          tags: ['Set B', 'coverhome'],
          description: 'This website of coverhome deals with furniture, interior designing products etc. ',
        },
        {
          id: 27,
          imgUrl: './assets/websites/hiken.png',
          name: 'hikian',
          projectLink: 'https://hikian.com/',
          codeLink: 'https://hikian.com//',
          title: 'Best Transplanter',
          tags: ['Set A', 'hikian'],
          description: 'Hiken is a Finland based company which sells natural organic product. ',
        },
        
        // react
      {
        id: 28,
        imgUrl: './assets/websites/tomato.png',
        name: 'tomato',
        projectLink: 'https://food-ordering-five-murex.vercel.app/',
        codeLink: 'https://github.com/iamsonukr/Food_Ordering_Website_Frontend_Raw',
        title: 'Tomato - Order Your food Online',
        tags: ['Set C', 'tomato'],
        description: 'This website is build on react and allow users to order food online and pay online.',
      },
      {
        id: 29,
        imgUrl: './assets/websites/redstore.png',
        name: 'redstore',
        projectLink: 'https://red-store-web-ruddy.vercel.app/',
        codeLink: 'https://github.com/iamsonukr/redStoreWeb',
        title: 'Red Store',
        tags: ['Set C', 'redstore'],
        description: 'This is an e-commerce store with unique interface and layout.',
      },
      {
        id: 30,
        imgUrl: './assets/websites/mybooksummary.png',
        name: 'mybooksummary',
        projectLink: 'https://my-book-summary.vercel.app/',
        codeLink: 'https://github.com/iamsonukr/myBookSummary',
        title: 'My Book Summary',
        tags: ['Set C', 'mybooksummary'],
        description: 'This is a website for posting and reading famous books summary.',
      },
      {
        id: 31,
        imgUrl: './assets/websites/jacksparrow.png',
        name: 'spaceportfolio',
        projectLink: 'https://space-portfolio-pink.vercel.app/',
        codeLink: 'https://github.com/iamsonukr/Space-Portfolio-React-Raw',
        title: 'Tomato - Order Your food Online',
        tags: ['Set C', 'spaceportfolio'],
        description: 'This is a portfolio website which is build on react and used framer-motion for animation.',
      },
      // {
      //   id: 32,
      //   imgUrl: './assets/websites/tomato.png',
      //   name: 'lovelybands',
      //   projectLink: 'https://red-store-web-ruddy.vercel.app/',
      //   codeLink: 'https://github.com/iamsonukr/redStoreWeb',
      //   title: 'Tomato - Order Your food Online',
      //   tags: ['Set C', 'tomato'],
      //   description: 'This is a description for project ten.',
      // },

      // {
      //   id: 33,
      //   imgUrl: './assets/websites/tomato.png',
      //   name: 'wisper',
      //   // projectLink: 'https://red-store-web-ruddy.vercel.app/',
      //   projectLink: 'https://github.com/iamsonukr/redStoreWeb',
      //   codeLink: 'https://github.com/iamsonukr/redStoreWeb',
      //   title: 'Tomato - Order Your food Online',
      //   tags: ['Set C', 'tomato'],
      //   description: 'This is a description for project ten.',
      // },

    ];
    setWorks(sampleData);
    setFilterWork(sampleData); // Assuming initially, filterWork is the same as works
  }, []);

  // useEffect(() => {
  //   const query = '*[_type == "works"]';

  //   client.fetch(query).then((data) => {
  //     setWorks(data);
  //     setFilterWork(data);
  //   });
  // }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
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
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>  

              {/* <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div> */}
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

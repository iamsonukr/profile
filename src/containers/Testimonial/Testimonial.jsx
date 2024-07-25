import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';
import '../../../public/assets/companies/logo-isdg.png'

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const sampleTestimonials = [
    // isdg
    {
      imgUrl: './assets/testimonial/John_ISDG.jpeg',
      name: 'John Samuel',
      feedback: '“Sonu was very diligent and responded constructively to our feedback. What was particularly impressive was his unwavering commitment to completing assigned tasks in a timebound manner. The key deliverable from his end was a complete redesign of our website. We value his contributions to ISDG and wish him the very best in all his future endeavours.”',
      company: 'President and Managing Trustee, Institute for Sustainable Development and Governance.',
    },
    // savapak
    {
      imgUrl: './assets/testimonial/basket.webp',
      name: 'Vishal Kumar Gupta',
      feedback: '"Sonu Kumar was an exceptional IT and Web Development Intern at BasketHunt Pvt. Ltd. Over his 2-month tenure, he consistently delivered work punctually while maintaining company data privacy. His excellent communication skills, event management capabilities, adaptability, and research skills produced spectacular results. Sonu was a standout team member and has my highest recommendation for any future endeavors."',
      company: ' Business Admin, BasketHunt Pvt. Ltd.',
    },
    // baskethunt
    {
      imgUrl: './assets/testimonial/somya_svapak.jpeg',
      name: 'Soumya Prakash Mishra',
      feedback:
        "Sonu's commitment to excellence, proficiency in Web development, and innovative problem-solving skills significantly elevated our projects. Sonu quickly adapted to new challenges, collaborated seamlessly with the team, and maintained a positive attitude that motivated everyone around them. His technical expertise, strong work ethic, and passion for development made a lasting impact on our organization. SVAPAK is grateful to have had Sonu as part of our team and we're confident his skills and determination will lead to continued success in their career.",
      company: 'Director, Gamik Technologies Pvt. Ltd',
    },
  ];

  const sampleBrands = [
    {
      _id: '1',
      imgUrl: '../../../public/assets/companies/logo-isdg.png',
      name: 'ISDG',
    },
    {
      _id: '2',
      imgUrl: '../../../public/assets/companies/logo-baskethunt.png',
      name: 'Baskethunt Pvt Lmtd',
    },
    {
      _id: '3',
      imgUrl: '../../../public/assets/companies/logo-svapak.png',
      name: 'Svapak Digital Solution',
    },
    {
      _id: '4',
      imgUrl: '../../../public/assets/companies/logo-outgrowth.png',
      name: 'Outgrowth',
    },
    // {
    //   _id: '5',
    //   imgUrl: './assets/testimonial/somya_svapak.jpeg',
    //   name: 'Brand Three',
    // },
    // {
    //   _id: '3',
    //   imgUrl: './assets/testimonial/somya_svapak.jpeg',
    //   name: 'Brand Three',
    // },
    // {
    //   _id: '3',
    //   imgUrl: './assets/testimonial/somya_svapak.jpeg',
    //   name: 'Brand Three',
    // },
  ];

  useEffect(() => {
    setTestimonials(sampleTestimonials);
    setBrands(sampleBrands);
  }, []);

  return (
    <>
      {testimonials.length > 0 && (
        <>
        <h2 className="head-text head-text2">Words of <span>Appreciation</span> </h2>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgUrl} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img style={{backgroundColor:'#1c069c17',borderRadius:'10px'}} src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
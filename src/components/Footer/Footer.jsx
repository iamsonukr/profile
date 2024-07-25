import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';


// import { images } from '../../constants';
import './footer.scss';

const Footer = () => {


  return (
    <div className="foot">


      <nav className="footer-main">
        <div className="footer-navbar-logo">
          {/* <img src={'./assets/about01.png'} alt="logo" /> */}
          <h3>Sonu Kumar</h3>
          <p>Available for freelancing<br/> opportunities</p>
          <a href="#contact">
            <button className="footer-button">Let’s Connect</button>
          </a>
        </div>
        <ul className="footer-navbar-links">
          <h3 >Links</h3>
          {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>

              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* social media links */}
        <ul className="footer-navbar-links" >
          <h3 >Profiles</h3>
          <li className="app__flex p-text" >
            <a href={`tel://+918210490833`} >Github</a>
          </li>
          <li className="app__flex p-text" >
            <a href={`mailto:thesonukumar357@gmail.com`}>LinkedIn</a>
          </li>
          <li className="app__flex p-text" >
            <a href={`mailto:thesonukumar357@gmail.com`}>Instagram</a>
          </li>
          <li className="app__flex p-text" >
            <a href={`mailto:thesonukumar357@gmail.com`}>Twitter</a>
          </li>

        </ul>

        <ul className="footer-navbar-links">
          <h3>Contact Me</h3>

          <li className="app__flex p-text" >
            <a href={`tel://+918210490833`}>+91 8210490833</a>
          </li>
          <li className="app__flex p-text" >
            <a href={`mailto:thesonukumar357@gmail.com`}>thesonukumar357@gmail.com</a>
          </li>

        </ul>


        {/* <ul className="footer-navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul> */}
      </nav>
      <div>
        <p className='footer-copyright'>© 2024 Sonu Kumar</p>
      </div>
    </div>
  );
};

export default Footer

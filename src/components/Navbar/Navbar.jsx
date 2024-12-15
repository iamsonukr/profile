import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  const menuItems = ['home', 'about', 'work', 'skills', 'story', 'contact'];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h3>Sonu Kumar</h3>
      </div>

      {/* Desktop Navigation */}
      <ul className="app__navbar-links">
        {menuItems.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <ThemeToggle />

      {/* Mobile Navigation */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        <AnimatePresence>
          {toggle && (
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <button 
                className="close-button"
                onClick={() => setToggle(false)}
                aria-label="Close menu"
              >
                <HiX />
              </button>

              <ul>
                {menuItems.map((item) => (
                  <li key={`mobile-${item}`}>
                    <a 
                      href={`#${item}`}
                      onClick={() => setToggle(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
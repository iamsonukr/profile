import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';
import './footer.scss';

const Footer = () => {
  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/yourusername', icon: <FaGithub /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: <FaLinkedin /> },
    { name: 'Instagram', href: 'https://instagram.com/yourusername', icon: <FaInstagram /> },
    { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: <FaTwitter /> }
  ];

  const contactInfo = {
    phone: '+91 8210490833',
    email: 'thesonukumar357@gmail.com'
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="foot" role="contentinfo">
      <div className="footer-main">
        {/* Brand Section */}
        <div className="footer-navbar-logo">
          <h3>Sonu Kumar</h3>
          <p>
            Available for freelancing
            <br />
            opportunities
          </p>
          <a 
            href="#contact"
            className="footer-button"
            role="button"
            aria-label="Connect with Sonu Kumar"
          >
            Let's Connect
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="footer-navbar-links" aria-label="Footer navigation">
          <h3>Links</h3>
          <ul>
            {navigationLinks.map(({ name, href }) => (
              <li key={name}>
                <a 
                  href={href}
                  aria-label={`Go to ${name} section`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="footer-navbar-links">
          <h3>Profiles</h3>
          <ul>
            {socialLinks.map(({ name, href, icon }) => (
              <li key={name}>
                <a 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${name} profile`}
                  className="social-link"
                >
                  {icon}
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-navbar-links">
          <h3>Contact Me</h3>
          <ul>
            <li>
              <a 
                href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                aria-label="Call phone number"
                className="contact-link"
              >
                <HiPhone aria-hidden="true" />
                <span>{contactInfo.phone}</span>
              </a>
            </li>
            <li>
              <a 
                href={`mailto:${contactInfo.email}`}
                aria-label="Send email"
                className="contact-link"
              >
                <HiMail aria-hidden="true" />
                <span>{contactInfo.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>© {currentYear} Sonu Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';
import './footer.scss';

const Footer = () => {
  const navigationLinks = [
    { name: 'Graphic Projects', href: 'https://drive.google.com/drive/folders/1pHjfh__ONSlFIUFGVX13im02p-7ANWEQ?usp=sharing' },
    { name: 'More Projects', href: 'https://github.com/iamsonukr/64/blob/main/more.txt' },
    { name: 'Students Projects', href: 'https://github.com/search?q=saved%3ASAITM+&type=repositories&saved_searches=%5B%7B%22name%22%3A%22SAITM%22%2C%22query%22%3A%22owner%3Aiamsonukr+saitm%22%7D%5D&expanded_query=owner%3Aiamsonukr+saitm+' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/iamsonukr', icon: <FaGithub /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/thesonukr', icon: <FaLinkedin /> },
    { name: 'Instagram', href: 'https://instagram.com/thesonukr', icon: <FaInstagram /> },
    { name: 'Twitter', href: 'https://twitter.com/the_sonukr_', icon: <FaTwitter /> }
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
            Available for Full-time & 
            <br />
            freelancing opportunities
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
                  aria-label={`Go to ${name}`}
                  // target={name === "Graphic" ? "_blank" : "_self  "}
                  target="_blank"
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
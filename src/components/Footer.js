// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
import './Footer.css';
import logo from '../assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <AnimatedSection direction="up">
        <div className="footer-content">
          <div className="footer-top">
            <motion.div
              className="footer-logo"
              whileHover={{ scale: 1.02 }}
            >
              <img src={logo} alt="Soft Coder Logo" />
              <h3>Pawan Goswami</h3>
              <p>Building exceptional digital experiences</p>
            </motion.div>

            <div className="footer-links">
              <div className="footer-links-column">
                <h4>Navigation</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h4>Services</h4>
                <ul>
                  <li><a href="#frontend">Frontend Development</a></li>
                  <li><a href="#ui-ux">Cloud Computing</a></li>
                  <li><a href="#consulting">Tech Consulting</a></li>
                  <li><a href="#code-review">Code Reviews</a></li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h4>Get In Touch</h4>
                <ul>
                  <li><a href="mailto:pawanpuri300@gmail.com">pawanpuri300@gmail.com</a></li>
                  <li><a href="tel:+919691630789">+91 9691630789</a></li>
                  <li>Indore, MP</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              <p>&copy; {currentYear} Pawan Goswami. All rights reserved.</p>
            </div>

            <div className="social-links">
              {[
                { href: 'https://github.com/PawanPuri', icon: FaGithub },
                { href: 'https://linkedin.com/in/pawan-goswami-23a38222a', icon: FaLinkedin },
                { href: '#', icon: FaTwitter },
              ].map(({ href, icon: Icon }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, color: '#64ffda', scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
};

export default Footer;

// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';
import logo from '../assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="Alex Chen's Logo" />
            <h3>Pawan Goswami</h3>
            <p>Building exceptional digital experiences</p>
          </div>
          
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
                <li><a href="#ui-ux">UI/UX Design</a></li>
                <li><a href="#consulting">Tech Consulting</a></li>
                <li><a href="#code-review">Code Reviews</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Get In Touch</h4>
              <ul>
                <li><a href="mailto:alex@alexchen.dev">pawanpuri300@gmail.com</a></li>
                <li><a href="tel:+919691630789">+91 9691630789</a></li>
                <li>Indore, MP</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Pawan Goswami. All rights reserved.</p>
            {/* <p>Made with <FaHeart className="heart-icon" /> and React</p> */}
          </div>
          
          <div className="social-links">
            <a href="https://github.com/PawanPuri" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/pawan-goswami-23a38222a" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
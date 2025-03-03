import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const closeMenu = () => setIsOpen(false);
  
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Alex Chen's Logo" />
          <span>Soft Coder</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <motion.li 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={location.pathname === '/' ? 'active' : ''}
          >
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            <Link to="/projects">Projects</Link>
          </motion.li>
          <motion.li 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={location.pathname === '/about' ? 'active' : ''}
          >
            <Link to="/about">About</Link>
          </motion.li>
          <motion.li 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            <Link to="/contact">Contact</Link>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
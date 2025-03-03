import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section 
      className="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="home-content">
        <motion.div className="home-text" variants={itemVariants}>
          <h1>Hi, I'm Pawan Goswami</h1>
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              2000,
              'React Specialist',
              2000,
              'UI/UX Enthusiast',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="animated-text"
          />
          <p>
            Building exceptional digital experiences with clean, efficient code.
            Specializing in React and modern JavaScript frameworks to create
            intuitive and responsive web applications.
          </p>
          <div className="home-buttons">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects" className="btn primary-btn">
                View My Work
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn secondary-btn">
                Contact Me
              </Link>
            </motion.div>
          </div>
          <div className="social-links">
            <motion.a
              href="https://github.com/PawanPuri"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#64ffda' }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/pawan-goswami-23a38222a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#64ffda' }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#64ffda' }}
            >
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          className="home-image"
          variants={itemVariants}
        >
          <motion.div 
            className="image-container"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={profileImage} alt="Alex Chen" />
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span></span>
        <p>Scroll down</p>
      </motion.div>
    </motion.section>
  );
};

export default Home;
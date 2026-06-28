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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const name = "Hi, I'm Pawan Goswami";

  return (
    <motion.section
      className="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="home-content">
        <motion.div className="home-text" variants={itemVariants}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.03 }}
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
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
          <motion.p variants={itemVariants}>
            Building exceptional digital experiences with clean, efficient code.
            Specializing in React and modern JavaScript frameworks to create
            intuitive and responsive web applications.
          </motion.p>
          <motion.div className="home-buttons" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(100, 255, 218, 0.3)' }}
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
          </motion.div>
          <motion.div className="social-links" variants={itemVariants}>
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -5, color: '#64ffda', scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="home-image" variants={itemVariants}>
          <motion.div
            className="image-container"
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.5 },
              scale: { duration: 0.6, delay: 0.5 },
              rotate: { duration: 0.6, delay: 0.5 },
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
            }}
            whileHover={{ scale: 1.03, rotate: 2 }}
          >
            <img src={profileImage} alt="Pawan Goswami" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <span></span>
        <p>Scroll down</p>
      </motion.div>
    </motion.section>
  );
};

export default Home;

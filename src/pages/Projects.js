import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
// Project images would normally be imported here
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';
import project4Image from '../assets/project4.jpg';
const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "HealthTrack Pro",
      description: "A comprehensive health tracking application built for a major healthcare provider. This React-based dashboard allows users to monitor vital health metrics, schedule appointments, and communicate with healthcare professionals.",
      image: project1Image,
      technologies: ["React", "TypeScript", "Redux", "Node.js", "MongoDB"],
      category: "enterprise",
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Finance Dashboard",
      description: "An interactive financial dashboard that visualizes complex data for investment decisions. Features include real-time stock market updates, portfolio analysis, and investment recommendations using machine learning algorithms.",
      image: project2Image,
      technologies: ["React", "D3.js", "Express", "JWT", "Chart.js"],
      category: "data",
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "E Commerce Website",
      description: "A next-generation e-commerce website that connects users with a wide range of products. With advanced search, personalized recommendations, and a secure checkout system, it ensures a smooth and enjoyable shopping journey.",
      image: project3Image,
      technologies: ["React", "WebSockets", "Node.js", "IoT Protocols", "Redux"],
      category: "E Comm",
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 4,
      title: "E-Learning Platform",
      description: "A comprehensive learning management system for educational institutions. Features include course creation, interactive lessons, progress tracking, and integrated assessment tools.",
      image: project4Image,
      technologies: ["React", "Firebase", "GraphQL", "Express", "MongoDB"],
      category: "education",
      github: "#",
      live: "#",
      featured: true
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
      className="projects"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="section-header" variants={itemVariants}>
        <h2>My Projects</h2>
        <p>Here are some of my most significant projects that showcase my expertise and problem-solving abilities.</p>
      </motion.div>

      <motion.div className="filter-buttons" variants={itemVariants}>
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'enterprise' ? 'active' : ''} 
          onClick={() => setFilter('enterprise')}
        >
          Enterprise
        </button>
        <button 
          className={filter === 'data' ? 'active' : ''} 
          onClick={() => setFilter('data')}
        >
          Data Visualization
        </button>
        <button 
          className={filter === 'iot' ? 'active' : ''} 
          onClick={() => setFilter('E Comm')}
        >
          E Comm
        </button>
        <button 
          className={filter === 'education' ? 'active' : ''} 
          onClick={() => setFilter('education')}
        >
          Education
        </button>
      </motion.div>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
      >
        {filteredProjects.map(project => (
          <motion.div 
            key={project.id}
            className={`project-card ${project.featured ? 'featured' : ''}`}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
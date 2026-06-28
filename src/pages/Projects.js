import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import './Projects.css';
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "TOTALL Diabetes Hospital",
      description: "Corporate healthcare website for TOTALL (Treat tO Target And Live Longer), a Center of Excellence in diabetes, thyroid, and hormonal care in Indore, Central India. Showcases 30+ years of expertise, specialty services, online appointments, e-consultation, and patient education—designed for clarity, trust, and accessibility in medical content.",
      image: project1Image,
      technologies: ["React", "Responsive UI", "SEO", "Healthcare", "Appointment Booking"],
      category: "healthcare",
      github: "#",
      live: "https://totall.in/",
      featured: true
    },
    {
      id: 2,
      title: "OS Games Platform",
      description: "Web platform for OS Games, an online gaming application serving users across India. Features game listings, app download flows, wallet and account management, and real-time updates—built mobile-first for performance, engagement, and smooth web-to-app onboarding.",
      image: project2Image,
      technologies: ["React", "JavaScript", "Responsive Design", "REST API", "Mobile-First UI"],
      category: "gaming",
      github: "#",
      live: "https://osgames.co/",
      featured: true
    },
    {
      id: 3,
      title: "Black Tiger Cement",
      description: "Corporate website for Black Tiger Cement by Goldstone Cements Limited—North East India's trusted cement brand. Highlights manufacturing excellence, product range (PPC, OPC43, OPC53), sustainability, certifications, and shareholder resources with a professional, industry-grade presentation.",
      image: project3Image,
      technologies: ["React", "Corporate Web", "Responsive UI", "CMS", "SEO"],
      category: "corporate",
      github: "#",
      live: "https://blacktigercement.com/",
      featured: true
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'gaming', label: 'Gaming' },
    { key: 'corporate', label: 'Corporate' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.25 },
    },
  };

  return (
    <section className="projects">
      <AnimatedSection className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <p>Here are some of my most significant projects that showcase my expertise and problem-solving abilities.</p>
      </AnimatedSection>

      <AnimatedSection className="filter-buttons" delay={0.1}>
        {filters.map(({ key, label }) => (
          <motion.button
            key={key}
            className={filter === key ? 'active' : ''}
            onClick={() => setFilter(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            layout
          >
            {filter === key && (
              <motion.span
                className="filter-active-bg"
                layoutId="filter-active"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="filter-label">{label}</span>
          </motion.button>
        ))}
      </AnimatedSection>

      <motion.div
        className="projects-grid"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -12,
                boxShadow: '0 20px 40px -15px rgba(100, 255, 218, 0.15)',
                transition: { duration: 0.3 },
              }}
            >
              <div className="project-image">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="project-links">
                  {project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.3, color: '#64ffda' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                  )}
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, color: '#64ffda' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.08, backgroundColor: 'rgba(100, 255, 218, 0.2)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;

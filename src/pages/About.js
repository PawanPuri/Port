import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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

  const skillsData = [
    {
      category: "Frontend Development",
      icon: <FaReact />,
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Redux", level: 85 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      category: "Backend Development",
      icon: <FaNodeJs />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "REST API Design", level: 90 },
      ],
    },
    {
      category: "Database",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 75 },
        { name: "Firebase", level: 80 },
      ],
    },
    {
      category: "Other Skills",
      icon: <FaCode />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Testing (Cypress)", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "Performance Optimization", level: 85 },
        { name: "Cloud Technologies (AWS)", level: 75 },
      ],
    },
  ];

  return (
    <motion.section 
      className="about"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
    >
      <motion.div className="section-header" variants={itemVariants}>
        <h2>About Me</h2>
      </motion.div>

      <motion.div className="about-content" variants={containerVariants}>
        <motion.div className="about-text" variants={itemVariants}>
          <h3>Who I Am</h3>
          <p>
            I'm Pawan Goswami, a Experienced Mern Stack Developer with over 2 years of experience building modern web applications. My journey in software development began with a passion for creating intuitive user interfaces, and has evolved into expertise in full-stack development with a focus on React and modern JavaScript frameworks.
          </p>
          <p>
            Throughout my career, I've had the opportunity to work with startups, enterprise companies, and everything in between. This diverse experience has given me a unique perspective on software development and the ability to adapt to different environments and requirements.
          </p>
          <p>
            My approach to development centers on writing clean, maintainable code that solves real-world problems. I believe in continuous learning and stay up-to-date with emerging technologies and best practices.
          </p>
          
          <h3>Professional Journey</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Frontend Developer</h4>
                <h5>Feamsco Pvt. Lmd. (2023 - Present)</h5>
                <p>Frontend developer for enterprise-level applications, focusing on React and TypeScript. Implemented state management solutions, optimized performance, and mentored junior developers.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Frontend Developer Intern</h4>
                <h5>Webneuron.io (2022 - 2023)</h5>
                <p>Developed responsive web applications using React and Redux. Collaborated with designers and backend developers to implement features and improve user experience.</p>
              </div>
            </div>
            {/* <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Web Developer</h4>
                <h5>Creative Web Studio (2017 - 2018)</h5>
                <p>Built and maintained websites for clients across various industries. Utilized HTML, CSS, JavaScript, and PHP to create interactive and responsive web experiences.</p>
              </div>
            </div> */}
          </div>
        </motion.div>

        <motion.div className="skills-container" variants={itemVariants}>
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skillsData.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <div className="skill-header">
                  <div className="skill-icon">{skillGroup.icon}</div>
                  <h4>{skillGroup.category}</h4>
                </div>
                <div className="skill-list">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 + (skillIndex * 0.1) }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;


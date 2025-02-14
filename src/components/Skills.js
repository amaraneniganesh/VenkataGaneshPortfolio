import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const skillsData = {
  frontend: [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'React', level: 85 },
    { name: 'JavaScript', level: 80 },
  ],
  backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'MySQL', level: 78 },
  ],
  tools: [
    { name: 'Git', level: 85 },
    { name: 'Automation Anywhere', level: 80 },
    { name: 'Make', level: 80 },
  ],
};

const SkillCard = ({ category, skills }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="skill-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h3>{category}</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My <span>Skills</span></h2>
      <div className="skills-container">
        <SkillCard category="Frontend" skills={skillsData.frontend} />
        <SkillCard category="Backend" skills={skillsData.backend} />
        <SkillCard category="Tools" skills={skillsData.tools} />
      </div>
    </section>
  );
};

export default Skills;
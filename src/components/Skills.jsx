import React from 'react';
import { skillsData } from '../data/portfolioData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const SkillCard = ({ skill, delay }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const Icon = skill.icon;

  return (
    <div 
      ref={ref} 
      className={`skill-card glass-panel fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="skill-icon">
        <Icon size={32} color="var(--primary)" />
      </div>
      <h3 className="skill-title">{skill.title}</h3>
      <p className="skill-desc">{skill.tools}</p>
    </div>
  );
};

const Skills = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <section id="skills" className="section container">
      <h2 
        ref={headerRef} 
        className={`section-title text-gradient fade-up ${headerVisible ? 'visible' : ''}`}
      >
        Technical Arsenal
      </h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} skill={skill} delay={index * 100} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

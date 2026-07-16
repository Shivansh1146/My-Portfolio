import React from 'react';
import { educationData } from '../data/portfolioData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const EducationCard = ({ item, delay }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`project-card glass-panel fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="project-title" style={{ color: item.id === 'galgotias' ? 'var(--accent)' : 'var(--primary)' }}>
        {item.title}
      </h3>
      <p className="edu-subtitle">{item.subtitle}</p>
      <p className="project-desc">{item.duration}</p>
      
      {item.items && (
        <ul className="edu-list">
          {item.items.map((listItem, i) => (
            <li key={i}>{listItem}</li>
          ))}
        </ul>
      )}
      
      <div className="project-tags">
        {item.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

const Education = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <section id="education" className="section container">
      <h2 
        ref={headerRef} 
        className={`section-title text-gradient fade-up ${headerVisible ? 'visible' : ''}`}
      >
        Education & Certifications
      </h2>
      <div className="projects-grid">
        {educationData.map((item, idx) => (
          <EducationCard key={item.id} item={item} delay={idx * 100} />
        ))}
      </div>
    </section>
  );
};

export default Education;

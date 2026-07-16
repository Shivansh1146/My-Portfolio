import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();
  const [filter, setFilter] = useState('All');

  const allTags = useMemo(() => {
    const tags = new Set(['All']);
    projectsData.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projectsData;
    return projectsData.filter(p => p.tags.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="section container">
      <h2 
        ref={headerRef} 
        className={`section-title text-gradient fade-up ${headerVisible ? 'visible' : ''}`}
      >
        Featured Projects
      </h2>
      
      <div className="filter-container">
        {allTags.map(tag => (
          <button 
            key={tag}
            className={`filter-btn ${filter === tag ? 'active' : ''}`}
            onClick={() => setFilter(tag)}
            aria-pressed={filter === tag}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} delay={idx * 100} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

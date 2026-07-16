import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ProjectCard = ({ project, delay }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <article 
      ref={ref}
      className={`project-card glass-panel fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-problem"><strong>Problem:</strong> {project.problem}</p>
        <p className="project-desc">{project.desc}</p>
        
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="project-links">
        {project.github && project.github !== "#" && (
          <a href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label={`View ${project.title} source on GitHub`}>
            <GithubIcon size={18} /> Code
          </a>
        )}
        {project.demo && project.demo !== "#" && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="project-link" aria-label={`View ${project.title} live demo`}>
            <ExternalLink size={18} /> Live Demo
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;

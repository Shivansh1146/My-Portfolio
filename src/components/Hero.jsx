import React, { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';
import { GithubIcon } from './Icons';
import { socialLinks } from '../data/portfolioData';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Backend Engineer", "AI Developer", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="hero" id="about">
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      
      <div className="hero-content">
        <img 
          src="https://github.com/Shivansh1146.png" 
          alt="Shivansh Jaiswal Profile" 
          className="hero-avatar"
          loading="eager"
        />
        
        <div className="role-switcher">
          <p className="hero-subtitle">
            <span className="typing-text">{roles[roleIndex]}</span>
            <span className="cursor"></span>
          </p>
        </div>
        
        <h1 className="hero-title">
          Hi, I'm <span className="text-gradient">Shivansh Jaiswal</span>
        </h1>
        <p className="hero-desc">
          I engineer robust backend architectures and integrate Artificial Intelligence to build intelligent, real-world solutions that scale.
        </p>
        <p className="hero-status">
          <span className="status-dot"></span> Currently expanding my expertise in Scalable Systems and AI Integration.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work ➔
          </a>
          <a href={socialLinks.resume} download="Shivansh_Jaiswal_Resume.pdf" className="btn btn-glass glass-panel">
            <FileText size={20} /> Resume
          </a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="btn btn-glass glass-panel">
            <GithubIcon size={20} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

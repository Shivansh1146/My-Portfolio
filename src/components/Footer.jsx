import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { socialLinks } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <h2 className="footer-title">Let's Connect</h2>
      <p className="footer-subtitle">Open for roles in Backend Engineering & AI.</p>
      
      <div className="social-links">
        <a href={socialLinks.github} target="_blank" rel="noreferrer" className="social-btn glass-panel" aria-label="GitHub Profile">
          <GithubIcon size={24} />
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="social-btn glass-panel" aria-label="LinkedIn Profile">
          <LinkedinIcon size={24} />
        </a>
        <a href={socialLinks.email} className="social-btn glass-panel" aria-label="Send an Email">
          <Mail size={24} />
        </a>
      </div>
      
      <p className="footer-copyright">
        © {new Date().getFullYear()} Shivansh Jaiswal. Engineered with React & Vite.
      </p>
    </footer>
  );
};

export default Footer;

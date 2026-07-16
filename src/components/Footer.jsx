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

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <img 
          src="https://github-readme-stats.vercel.app/api?username=Shivansh1146&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=7aa2f7&text_color=c0caf5&icon_color=bb9af7" 
          alt="Shivansh's GitHub Stats" 
          style={{ borderRadius: '10px', boxShadow: '0 4px 30px rgba(0,0,0,0.3)', width: '100%', maxWidth: '400px' }}
        />
      </div>
      
      <p className="footer-copyright">
        © {new Date().getFullYear()} Shivansh Jaiswal. Engineered with React & Vite.
      </p>
    </footer>
  );
};

export default Footer;

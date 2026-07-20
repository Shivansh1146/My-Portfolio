import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ is3D = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick = (e, section) => {
    if (is3D) {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('nav-scroll', { detail: section }));
    }
    closeMenu();
  };

  return (
    <nav className={`navbar glass-panel ${isScrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
      <a href={is3D ? undefined : "#"} style={is3D ? {cursor: 'pointer'} : {}} className="navbar-brand" onClick={(e) => {
        if (is3D) {
          e.preventDefault();
          window.dispatchEvent(new CustomEvent('nav-scroll', { detail: 'top' }));
        }
        closeMenu();
      }}>
        <h1 className="text-gradient">SJ.</h1>
      </a>
      
      <div className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu" role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        {is3D ? (
          <>
            <a style={{ cursor: 'pointer' }} onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a style={{ cursor: 'pointer' }} onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
            <a style={{ cursor: 'pointer' }} onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
            <a style={{ cursor: 'pointer' }} onClick={(e) => handleNavClick(e, 'education')}>Education</a>
            <a style={{ cursor: 'pointer' }} onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </>
        ) : (
          <>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
            <a href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
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

  return (
    <nav className={`navbar glass-panel ${isScrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
      <a href="#" className="navbar-brand" onClick={closeMenu}>
        <h1 className="text-gradient">SJ.</h1>
      </a>
      
      <div className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu" role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import { useDeviceCapabilities } from './hooks/useDeviceCapabilities';
import './index.css';
import './App.css';

// Lazy load the 3D scene to prevent blocking initial render and reduce bundle size
const Scene = React.lazy(() => import('./components/Three/Scene'));

function FallbackPortfolio({ mousePosition }) {
  return (
    <>
      <div 
        className="cursor-glow" 
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px` 
        }} 
        aria-hidden="true"
      />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  );
}

function ImmersivePortfolio() {
  return (
    <>
      {/* 
        Persistent Minimal Nav
        We reuse Navbar, but we'll ensure it stays fixed at the top with a high z-index.
        In future phases, this can be stripped down even further for the 3D mode. 
      */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100 }}>
        <Navbar />
      </div>
      
      {/* 3D Scene Layer with Suspense boundary */}
      <React.Suspense fallback={null}>
        <Scene />
      </React.Suspense>
    </>
  );
}

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isMobile, reducedMotion, initialized } = useDeviceCapabilities();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Avoid flashing incorrect layout on mount
  if (!initialized) return null;

  // Render Fallback if on mobile/touch, or if user prefers reduced motion
  if (isMobile || reducedMotion) {
    return <FallbackPortfolio mousePosition={mousePosition} />;
  }

  // Render Premium 3D Experience on capable desktop environments
  return <ImmersivePortfolio />;
}

export default App;

import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll, PerformanceMonitor } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import NeuralCore from './NeuralCore';
import Constellation from './Constellation';
import ProjectGallery from './ProjectGallery';
import IntroOverlay from './IntroOverlay';

// A simple loading fallback for the Suspense boundary
const Loader = () => (
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'var(--primary)' }}>
    Initializing Core...
  </div>
);

function ScrollHandler() {
  const scroll = useScroll();

  useEffect(() => {
    const handleNav = (e) => {
      const section = e.detail;
      
      if (!scroll.el) return;

      if (section === 'top') {
        scroll.el.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      // Try to find the exact HTML element in the overlay
      const el = document.getElementById(section);
      if (el) {
        // Since elements in <Scroll html> are moved by a CSS transform (-scrollTop),
        // their true absolute Y position is their current bounding rect top + the current scrollTop.
        // This avoids issues with position: relative offsetParents breaking offsetTop.
        const targetY = el.getBoundingClientRect().top + scroll.el.scrollTop;
        
        scroll.el.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
      } else {
        // Fallback for any missing IDs
        let targetPage = 0;
        if (section === 'about') targetPage = 1;
        if (section === 'skills') targetPage = 2;
        if (section === 'projects') targetPage = 3;
        if (section === 'education' || section === 'contact') targetPage = 4;
        
        scroll.el.scrollTo({
          top: targetPage * scroll.el.clientHeight,
          behavior: 'smooth'
        });
      }
    };
    
    window.addEventListener('nav-scroll', handleNav);
    return () => window.removeEventListener('nav-scroll', handleNav);
  }, [scroll]);

  return null;
}

export default function Scene() {
  const [dpr, setDpr] = useState([1, 2]);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 1 }}>
      <Suspense fallback={<Loader />}>
        <Canvas 
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={dpr} // Dynamically adjusted by PerformanceMonitor
          gl={{ antialias: false, powerPreference: "high-performance" }} // Optimized WebGL context
        >
          <PerformanceMonitor onIncline={() => setDpr([1, 2])} onDecline={() => setDpr([1, 1.5])} />
          {/* Elegant lighting setup */}
          <ambientLight intensity={0.2} />
          {/* Soft Key Light */}
          <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
          {/* Rim Light for depth & highlighting edges */}
          <directionalLight position={[-5, 5, -5]} intensity={3} color="#a1a1a6" />
          {/* Subtle Fill Light from bottom */}
          <pointLight position={[0, -5, 5]} intensity={1} color="#ffffff" />
          
          <ScrollControls pages={5} damping={0.25}>
            <ScrollHandler />
            {/* The 3D Objects */}
            <NeuralCore />
            <Constellation />
            <ProjectGallery />
            
            {/* The HTML DOM elements that scroll synchronously */}
            <Scroll html style={{ width: '100%' }}>
              <IntroOverlay />
            </Scroll>
          </ScrollControls>

          {/* Post Processing for the Neon Bloom effect */}
          <EffectComposer disableNormalPass>
            <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} />
          </EffectComposer>
        </Canvas>
      </Suspense>
    </div>
  );
}

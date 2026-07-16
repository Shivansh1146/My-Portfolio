import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
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

export default function Scene() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 1 }}>
      <Suspense fallback={<Loader />}>
        <Canvas 
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 2]} // Cap pixel ratio at 2 for performance on high-DPI displays
          gl={{ antialias: false }} // Postprocessing handles AA, or we leave it off for perf
        >
          {/* Elegant lighting setup */}
          <ambientLight intensity={0.2} />
          {/* Soft Key Light */}
          <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
          {/* Rim Light for depth & highlighting edges */}
          <directionalLight position={[-5, 5, -5]} intensity={3} color="#bb9af7" />
          {/* Subtle Fill Light from bottom */}
          <pointLight position={[0, -5, 5]} intensity={1} color="#7aa2f7" />
          
          <ScrollControls pages={5} damping={0.25}>
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

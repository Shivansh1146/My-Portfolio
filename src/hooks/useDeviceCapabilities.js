import { useState, useEffect } from 'react';

export function useDeviceCapabilities() {
  const [capabilities, setCapabilities] = useState({
    isMobile: false,
    reducedMotion: false,
    initialized: false
  });

  useEffect(() => {
    // Media queries
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => {
      setCapabilities({
        isMobile: mobileQuery.matches || ('ontouchstart' in window) || navigator.maxTouchPoints > 0,
        reducedMotion: motionQuery.matches,
        initialized: true
      });
    };

    update();
    
    // Listeners
    mobileQuery.addEventListener('change', update);
    motionQuery.addEventListener('change', update);
    
    return () => {
      mobileQuery.removeEventListener('change', update);
      motionQuery.removeEventListener('change', update);
    };
  }, []);

  return capabilities;
}

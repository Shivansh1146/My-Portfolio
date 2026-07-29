import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';

export default function NeuralCore() {
  const groupRef = useRef();
  const scroll = useScroll();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Constant slow rotation
    groupRef.current.rotation.x += delta * 0.1;
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.rotation.z += delta * 0.05;

    // Scroll-based transformations
    const offset = scroll.offset; // 0 to 1
    
    // Smoothly transition scale and position based on scroll offset
    // 0.0 to 0.2 = Intro to Hero (scales up, moves right)
    // 0.2 to 0.4 = Hero to Skills (scales down to 0, moves left)
    
    let targetScale = 1;
    let targetX = 0;
    let targetY = 0;
    
    if (offset < 0.2) {
      // Intro -> Hero (scales up, moves right)
      const localOffset = offset * 5;
      targetScale = 1 + localOffset * 0.8;
      targetX = localOffset * 2.5;
      targetY = -localOffset * 1.5;
    } else if (offset < 0.45) {
      // Hero -> Skills (shrinks out)
      const localOffset = (offset - 0.2) * 4;
      targetScale = Math.max(0, 1.8 - localOffset * 2.5);
      targetX = 2.5 - localOffset * 4;
      targetY = -1.5 - localOffset * 2;
    } else if (offset >= 0.72) {
      // Re-assemble / Return during Contact & Footer section (Phase 4 thematic closure)
      const localOffset = Math.min(1, (offset - 0.72) / 0.25);
      targetScale = localOffset * 1.35;
      targetX = 0;
      targetY = -0.3;
    } else {
      targetScale = 0;
    }
    
    groupRef.current.scale.setScalar(targetScale);
    groupRef.current.position.x = targetX;
    groupRef.current.position.y = targetY;
    
    // Gentle floating effect
    groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 1.2) * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]} scale={2.2}>
      {/* Base Solid Mesh with Matte Material */}
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#000000" 
          roughness={0.9}
          metalness={0.5}
          transparent
          opacity={0.85}
          depthWrite={true}
        />
      </mesh>
      
      {/* Glowing Wireframe Edges */}
      <mesh>
        <icosahedronGeometry args={[1.002, 1]} />
        <meshStandardMaterial 
          color="#000000"
          emissive="#ffffff"
          emissiveIntensity={1.5}
          wireframe={true}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

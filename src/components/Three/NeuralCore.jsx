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
    // 0.0 to 0.166 = Intro to Hero (scales up, moves right)
    // 0.166 to 0.333 = Hero to Skills (scales down to 0, moves left)
    
    let targetScale = 1;
    let targetX = 0;
    let targetY = 0;
    
    if (offset < 0.166) {
      // Intro -> Hero
      const localOffset = offset * 6; // 0 to 1 over first 1/6th
      targetScale = 1 + localOffset * 0.8;
      targetX = localOffset * 2.5;
      targetY = -localOffset * 1.5;
    } else {
      // Hero -> Skills
      const localOffset = (offset - 0.166) * 6; // 0 to 1 over next 1/6th
      targetScale = Math.max(0, 1.8 - localOffset * 2.5); // Shrinks rapidly
      targetX = 2.5 - localOffset * 4; // Moves left and away
      targetY = -1.5 - localOffset * 2;
    }
    
    groupRef.current.scale.setScalar(targetScale);
    groupRef.current.position.x = targetX;
    groupRef.current.position.y = targetY;
    
    // Floating effect
    groupRef.current.position.y += Math.sin(state.clock.elapsedTime) * 0.05;
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

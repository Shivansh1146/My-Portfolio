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
    
    let targetScale = 1;
    let targetX = 0;
    let targetY = 0;
    let targetZ = -2; // Default Z position
    
    if (offset < 0.2) {
      // Intro -> Hero (scales up, moves right)
      const localOffset = offset * 5;
      targetScale = 1 + localOffset * 0.8;
      targetX = localOffset * 2.5;
      targetY = -localOffset * 1.5;
      targetZ = -2;
    } else if (offset < 0.45) {
      // Hero -> Skills (shrinks out)
      const localOffset = (offset - 0.2) * 4;
      targetScale = Math.max(0, 1.8 - localOffset * 2.5);
      targetX = 2.5 - localOffset * 4;
      targetY = -1.5 - localOffset * 2;
      targetZ = -2;
    } else if (offset >= 0.70) {
      // Re-assemble deeply in background behind Contact section (Phase 4 thematic closure)
      const localOffset = Math.min(1, (offset - 0.70) / 0.25);
      targetScale = localOffset * 0.55; // Compact, subtle scale
      targetX = 0;
      targetY = -1.4; // Positioned lower beneath contact buttons
      targetZ = -12;  // Pushed deep into background (-12 Z) for zero text collision
    } else {
      targetScale = 0;
      targetZ = -2;
    }
    
    groupRef.current.scale.setScalar(targetScale);
    groupRef.current.position.x = targetX;
    groupRef.current.position.y = targetY + Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
    groupRef.current.position.z = targetZ;
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
          opacity={0.6}
          depthWrite={false}
        />
      </mesh>
      
      {/* Glowing Wireframe Edges */}
      <mesh>
        <icosahedronGeometry args={[1.002, 1]} />
        <meshStandardMaterial 
          color="#000000"
          emissive="#ffffff"
          emissiveIntensity={1.0}
          wireframe={true}
          transparent
          opacity={0.45}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}


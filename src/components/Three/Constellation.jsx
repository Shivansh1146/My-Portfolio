import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export default function Constellation() {
  const groupRef = useRef();
  const meshRef = useRef();
  const scroll = useScroll();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // 22 nodes biased towards the outer edges and background to avoid cluttering center text
  const nodes = useMemo(() => {
    return Array.from({ length: 22 }).map(() => ({
      position: new THREE.Vector3(
        // Bias X to outer left/right sides (outside [-3.5, 3.5])
        (Math.random() > 0.5 ? 1 : -1) * (3.5 + Math.random() * 4.5),
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 4 - 2
      ),
      speed: Math.random() * 0.4 + 0.1,
      scale: 0.07 + Math.random() * 0.03 // Normalized, uniform, subtle scale
    }));
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current) return;
    
    const offset = scroll.offset;
    
    // Fade in during Skills section (0.2 to 0.5), fade out before Projects
    let visibility = 0;
    if (offset > 0.2 && offset < 0.58) {
      if (offset < 0.32) visibility = (offset - 0.2) / 0.12; 
      else if (offset > 0.48) visibility = 1 - (offset - 0.48) / 0.1;
      else visibility = 1;
    }
    visibility = Math.max(0, Math.min(1, visibility));
    
    groupRef.current.rotation.y += delta * 0.04;
    
    nodes.forEach((node, i) => {
      const time = state.clock.elapsedTime * node.speed;
      
      dummy.position.copy(node.position);
      dummy.position.y += Math.sin(time + i) * 0.3;
      
      dummy.scale.setScalar(node.scale * visibility);
      dummy.updateMatrix();
      
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      <instancedMesh ref={meshRef} args={[null, null, 22]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#000000"
          emissive="#ffffff"
          emissiveIntensity={1.2}
          wireframe={true}
          transparent
          opacity={0.55}
          depthWrite={false}
        />
      </instancedMesh>
    </group>
  );
}


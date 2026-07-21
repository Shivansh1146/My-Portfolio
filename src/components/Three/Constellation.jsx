import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export default function Constellation() {
  const groupRef = useRef();
  const meshRef = useRef();
  const scroll = useScroll();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Generate random positions for 40 nodes representing individual skills
  const nodes = useMemo(() => {
    return Array.from({ length: 40 }).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      ),
      speed: Math.random() * 0.5 + 0.1,
      scale: Math.random() * 0.15 + 0.05
    }));
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current) return;
    
    // Offset ranges from 0 to 1 across 5 pages.
    // Page 3 (Skills) is around offset 0.4 to 0.6.
    const offset = scroll.offset;
    
    // pages=5: Skills section = offset 0.4 to 0.6
    // Visibility: fade in 0.37-0.43, solid, fade out 0.55-0.6
    let visibility = 0;
    if (offset > 0.37 && offset < 0.6) {
      if (offset < 0.43) visibility = (offset - 0.37) / 0.06;
      else if (offset > 0.55) visibility = 1 - (offset - 0.55) / 0.05;
      else visibility = 1;
    }
    visibility = Math.max(0, Math.min(1, visibility));
    
    groupRef.current.rotation.y += delta * 0.05;
    
    nodes.forEach((node, i) => {
      // Gentle floating animation per node
      const time = state.clock.elapsedTime * node.speed;
      
      dummy.position.copy(node.position);
      dummy.position.y += Math.sin(time + i) * 0.5;
      
      // Scale them down when not visible, scale up when scrolling to Skills
      dummy.scale.setScalar(node.scale * visibility);
      dummy.updateMatrix();
      
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={groupRef} position={[0, 0, -4]}>
      {/* InstancedMesh is vastly more performant for many identical objects */}
      <instancedMesh ref={meshRef} args={[null, null, 40]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#000000"
          emissive="#ffffff"
          emissiveIntensity={1.5}
          wireframe={true}
          transparent
          opacity={0.8}
        />
      </instancedMesh>
    </group>
  );
}

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

/**
 * ProjectGallery renders abstract 3D floating planes behind the
 * HTML project cards. The actual project card content lives in
 * IntroOverlay as regular DOM — this component only provides the
 * atmospheric 3D backdrop for that section.
 */
export default function ProjectGallery() {
  const groupRef = useRef();
  const meshRef = useRef();
  const scroll = useScroll();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate floating glass planes as decorative backdrop
  const planes = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 10
      ),
      rotation: new THREE.Euler(
        Math.random() * Math.PI * 0.3,
        Math.random() * Math.PI * 0.5,
        Math.random() * Math.PI * 0.2
      ),
      speed: Math.random() * 0.3 + 0.1,
      scale: Math.random() * 0.8 + 0.3
    }));
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current) return;

    const offset = scroll.offset;

    // Gallery visible from offset 0.42 to 0.82
    let visibility = 0;
    if (offset > 0.42 && offset < 0.82) {
      if (offset < 0.5) visibility = (offset - 0.42) / 0.08;
      else if (offset > 0.75) visibility = 1 - (offset - 0.75) / 0.07;
      else visibility = 1;
    }
    visibility = Math.max(0, Math.min(1, visibility));

    groupRef.current.rotation.y += delta * 0.03;

    planes.forEach((plane, i) => {
      const time = state.clock.elapsedTime * plane.speed;

      dummy.position.copy(plane.position);
      dummy.position.y += Math.sin(time + i) * 0.3;
      dummy.position.x += Math.cos(time * 0.7 + i) * 0.2;
      dummy.rotation.copy(plane.rotation);
      dummy.rotation.y += time * 0.1;
      dummy.scale.setScalar(plane.scale * visibility);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      <instancedMesh ref={meshRef} args={[null, null, 12]}>
        <planeGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#111111"
          emissive="#ffffff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </instancedMesh>
    </group>
  );
}

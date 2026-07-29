import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

/**
 * ProjectGallery renders abstract 3D floating planes far behind the
 * HTML project cards. Positioned deeply in negative Z space to guarantee
 * zero visual collision or overlap with foreground HTML text.
 */
export default function ProjectGallery() {
  const groupRef = useRef();
  const meshRef = useRef();
  const scroll = useScroll();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // 8 decorative planes placed strictly in deep background
  const planes = useMemo(() => {
    return Array.from({ length: 8 }).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 8,
        -Math.random() * 6 - 2 // Strictly negative Z (-2 to -8) relative to group [-12]
      ),
      rotation: new THREE.Euler(
        Math.random() * Math.PI * 0.25,
        Math.random() * Math.PI * 0.4,
        Math.random() * Math.PI * 0.2
      ),
      speed: Math.random() * 0.25 + 0.08,
      scale: Math.random() * 0.5 + 0.3
    }));
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current) return;

    const offset = scroll.offset;

    // Gallery visible from offset 0.5 to 0.85
    let visibility = 0;
    if (offset > 0.48 && offset < 0.85) {
      if (offset < 0.58) visibility = (offset - 0.48) / 0.1;
      else if (offset > 0.78) visibility = 1 - (offset - 0.78) / 0.07;
      else visibility = 1;
    }
    visibility = Math.max(0, Math.min(1, visibility));

    groupRef.current.rotation.y += delta * 0.02;

    planes.forEach((plane, i) => {
      const time = state.clock.elapsedTime * plane.speed;

      dummy.position.copy(plane.position);
      dummy.position.y += Math.sin(time + i) * 0.25;
      dummy.position.x += Math.cos(time * 0.5 + i) * 0.15;
      dummy.rotation.copy(plane.rotation);
      dummy.rotation.y += time * 0.08;
      dummy.scale.setScalar(plane.scale * visibility);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    // Position group deeply at Z = -12 (world Z range: -14 to -20)
    <group ref={groupRef} position={[0, 0, -12]}>
      <instancedMesh ref={meshRef} args={[null, null, 8]}>
        <planeGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#111111"
          emissive="#ffffff"
          emissiveIntensity={0.3}
          transparent
          opacity={0.12}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </instancedMesh>
    </group>
  );
}


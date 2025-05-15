import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

useGLTF.preload('/models/phone.glb');

export default function RotatingPhone() {
  const group = useRef();
  const { scene } = useGLTF('/models/phone.glb');

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Subtle back-and-forth rotation on Y axis ±15°
    const rotationY = 0.26 * Math.sin(t * 0.8);
    // Slight tilt on X axis ±5°
    const rotationX = 0.087 * Math.sin(t * 0.6 + Math.PI / 2);
    // Floating up/down
    const positionY = 0.1 * Math.sin(t * 2) - 3;

    group.current.rotation.y = rotationY;
    group.current.rotation.x = rotationX;
    group.current.position.y = positionY;
  });

  return (
    <primitive
      ref={group}
      object={scene}
      scale={[36, 36, 36]}
      castShadow
      receiveShadow
    />
  );
}

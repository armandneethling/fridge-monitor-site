import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function RotatingPhone() {
  const group = useRef();
  const { scene } = useGLTF('/models/phone.glb');

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.5;
    group.current.position.y = 0.1 * Math.sin(t * 2);
  });

  return <primitive ref={group} object={scene} />;
}

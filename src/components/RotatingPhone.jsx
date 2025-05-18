import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

useGLTF.preload('/models/phonev2.glb');

export default function RotatingPhone() {
  const group = useRef();
  const { scene } = useGLTF('/models/rotatingPhone.glb');

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    
    group.current.rotation.y = 0.26 * Math.sin(t * 0.8);
    group.current.rotation.x = 0.087 * Math.sin(t * 0.6 + Math.PI / 2);
    group.current.position.y = 0.1 * Math.sin(t * 2) - 3;
  });

  return (
    <primitive
      ref={group}
      object={scene}
      scale={[1.35, 1.35, 1.35]}
      castShadow
      receiveShadow
    />
  );
}
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useDynamicScreenTexture } from './DynamicScreenTexture';

export default function RotatingPhone() {
  const group = useRef();
  const { scene } = useGLTF('/models/phone.glb');
  const dynamicTexture = useDynamicScreenTexture();

  useEffect(() => {
    const screenMesh = scene.getObjectByName('Screen'); // Replace 'Screen' with your mesh name
    if (screenMesh && dynamicTexture) {
      screenMesh.material = new THREE.MeshBasicMaterial({
        map: dynamicTexture,
        toneMapped: false,
      });
      screenMesh.material.needsUpdate = true;
    } else {
      console.warn('Screen mesh not found or texture not ready');
    }
  }, [scene, dynamicTexture]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    group.current.rotation.y = 0.26 * Math.sin(t * 0.8);
    group.current.rotation.x = 0.087 * Math.sin(t * 0.6 + Math.PI / 2);
    group.current.position.y = 0.1 * Math.sin(t * 2) - 3;
  });

  return <primitive ref={group} object={scene} scale={[36, 36, 36]} />;
}

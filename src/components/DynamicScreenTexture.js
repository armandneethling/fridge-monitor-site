import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function useDynamicScreenTexture() {
  const canvasRef = useRef(document.createElement('canvas'));
  const textureRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Draw background
    ctx.fillStyle = '#222';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw dynamic text
    ctx.fillStyle = '#0f0';
    ctx.font = 'bold 48px monospace';
    ctx.fillText('Temperature:', 20, 80);
    ctx.fillText('4.5 °C', 20, 160);

    if (!textureRef.current) {
      textureRef.current = new THREE.CanvasTexture(canvas);
    } else {
      textureRef.current.needsUpdate = true;
    }
  }, []);

  return textureRef.current;
}

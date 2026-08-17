'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 28;

    const navyColor = new THREE.Color(0x162050);
    const blueColor = new THREE.Color(0x2aaee0);

    const nodeGeom = new THREE.SphereGeometry(0.18, 8, 8);
    const nodes: THREE.Mesh[] = [];

    for (let i = 0; i < 60; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      const r     = 6 + Math.random() * 8;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi) - 2;

      const t     = Math.random();
      const color = new THREE.Color().lerpColors(navyColor, blueColor, t);
      const mat   = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6 + Math.random() * 0.4 });
      const mesh  = new THREE.Mesh(nodeGeom, mat);
      mesh.position.set(x, y, z);
      (mesh.userData as Record<string, number>).pulseSpeed  = 0.5 + Math.random() * 1.5;
      (mesh.userData as Record<string, number>).pulseOffset = Math.random() * Math.PI * 2;
      scene.add(mesh);
      nodes.push(mesh);
    }

    const edgeGroup = new THREE.Group();
    scene.add(edgeGroup);

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = nodes[i].position.distanceTo(nodes[j].position);
        if (d < 5.5) {
          const opacity = (1 - d / 5.5) * 0.3;
          const t       = Math.random();
          const color   = new THREE.Color().lerpColors(navyColor, blueColor, t);
          const mat     = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
          const geom    = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position.clone(),
            nodes[j].position.clone(),
          ]);
          edgeGroup.add(new THREE.Line(geom, mat));
        }
      }
    }

    const pCount  = 120;
    const pPos    = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3]     = (Math.random() - 0.5) * 40;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 4;
    }
    const pGeom = new THREE.BufferGeometry();
    pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    scene.add(new THREE.Points(pGeom, new THREE.PointsMaterial({ color: 0x2aaee0, size: 0.06, transparent: true, opacity: 0.35 })));

    let mouseX = 0, mouseY = 0;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener('mousemove', onMouse);

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    let t = 0;
    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      t += 0.008;
      scene.rotation.y += (mouseX * 0.3 - scene.rotation.y) * 0.04;
      scene.rotation.x += (mouseY * 0.15 - scene.rotation.x) * 0.04;
      nodes.forEach(n => {
        const d = n.userData as Record<string, number>;
        const s = 0.8 + 0.4 * Math.sin(t * d.pulseSpeed + d.pulseOffset);
        n.scale.setScalar(s);
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-screen pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const AIVisualization3D = ({ data = [] }) => {
  const mountRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Configuration de la scène Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Contrôles de la caméra
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    // Création de la sphère centrale
    const sphereGeometry = new THREE.SphereGeometry(3, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x6c5ce7,
      transparent: true,
      opacity: 0.8,
      wireframe: false,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Création de l'aura
    const auraGeometry = new THREE.SphereGeometry(3.2, 32, 32);
    const auraMaterial = new THREE.MeshPhongMaterial({
      color: 0x00cec9,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide,
    });
    const aura = new THREE.Mesh(auraGeometry, auraMaterial);
    scene.add(aura);

    // Création des particules
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position aléatoire en sphère
      const radius = 5 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);

      // Couleur dégradée
      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.2 + 0.5, 0.7, 0.5);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Ajout des lumières
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x6c5ce7, 1);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00cec9, 1);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Position de la caméra
    camera.position.z = 15;

    // Animation
    let frame = 0;
    const animate = () => {
      frame += 0.01;
      requestAnimationFrame(animate);

      // Animation de la sphère
      sphere.rotation.y += 0.005;
      aura.rotation.y -= 0.003;

      // Animation des particules
      particles.rotation.y += 0.001;
      const positions = particlesGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(frame + positions[i]) * 0.01;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Mise à jour des contrôles et du rendu
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Gestion du redimensionnement
    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return (
    <div className="ai-visualization">
      <div 
        ref={mountRef} 
        className="visualization-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '100%',
          height: '400px',
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden'
        }}
      >
        {isHovered && (
          <div className="visualization-overlay">
            <div className="overlay-content">
              <h3>Analyse IA en Temps Réel</h3>
              <p>Visualisation des patterns et prédictions</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIVisualization3D; 
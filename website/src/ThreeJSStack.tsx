import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeJSStackProps {
  title: string; 
  techStack: { name: string; iconUrl: string }[];
}

const ThreeJSStack: React.FC<ThreeJSStackProps> = ({ title, techStack }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    let animationId: number;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    const resizeRendererToDisplaySize = () => {
      const canvas = renderer.domElement;
      const width = containerRef.current?.clientWidth || 0;
      const height = containerRef.current?.clientHeight || 0;
      const pixelRatio = window.devicePixelRatio;

      const canvasPixelWidth = width * pixelRatio;
      const canvasPixelHeight = height * pixelRatio;

      const needResize = canvas.width !== canvasPixelWidth || canvas.height !== canvasPixelHeight;
      if (needResize) {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    const icons: THREE.Mesh[] = [];
    const iconSpacingFac = 1.8;

    const loadIcons = () => {
      techStack.forEach((tech, index) => {
        const loader = new THREE.TextureLoader();
        loader.load(tech.iconUrl, (texture) => {
          const aspect = texture.image.width / texture.image.height;
          const iconWidth = 20;
          const iconHeight = iconWidth / aspect;

          const geometry = new THREE.PlaneGeometry(iconWidth, iconHeight);
          const material = new THREE.MeshStandardMaterial({
            map: texture,
            transparent: true,
            side: THREE.DoubleSide,
            roughness: 0.4,
            metalness: 0.6,
          });

          const icon = new THREE.Mesh(geometry, material);
          icon.position.x = (index - (techStack.length - 1) / 2) * iconWidth * iconSpacingFac;
          scene.add(icon);
          icons.push(icon);
          iconsRef.current.push(icon);
        });
      });
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      iconsRef.current.forEach((icon) => {
        icon.rotation.y += 0.008;
        icon.scale.y = 1 + Math.sin(Date.now() * 0.001) * 0.1;
      });
      renderer.render(scene, camera);
    };

    const setupScene = () => {
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      camera.position.set(0, 0, 50);
    };

    const cleanup = () => {
      cancelAnimationFrame(animationId);
      renderer.domElement.remove();
    };

    renderer.setClearColor(0x000000, 0);
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    window.addEventListener('resize', resizeRendererToDisplaySize);

    loadIcons();
    setupScene();
    resizeRendererToDisplaySize();
    animate();

    return () => {
      cleanup();
      window.removeEventListener('resize', resizeRendererToDisplaySize);
    };
  }, [techStack]);

  return (
    <div>
      
      <div ref={containerRef} className="w-full h-72" />
      <h1 className="flex flex-col justify-center items-center  font-bold">{title}</h1>
    </div>
  );
};

export default ThreeJSStack;

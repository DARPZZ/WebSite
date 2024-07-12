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
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;

    const initializeScene = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor(0x000000, 0);

      const ambientLight = new THREE.AmbientLight(0xffffff, 5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      camera.position.set(0, 0, 40);

      if (containerRef.current && renderer) {
        containerRef.current.appendChild(renderer.domElement);
      }

      // Event listener for context loss
      renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false);
      renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored, false);
    };

    const handleContextLost = (event: Event) => {
      event.preventDefault();
      cancelAnimationFrame(animationId);
      cleanup();
    };

    const handleContextRestored = () => {
      initializeScene();
      loadIcons();
      resizeRendererToDisplaySize();
      animate();
    };

    const resizeRendererToDisplaySize = () => {
      const canvas = renderer?.domElement;
      const width = containerRef.current?.clientWidth || 0;
      const height = containerRef.current?.clientHeight || 0;
      const pixelRatio = window.devicePixelRatio;

      if (canvas) {
        const canvasPixelWidth = width * pixelRatio;
        const canvasPixelHeight = height * pixelRatio;

        const needResize = canvas.width !== canvasPixelWidth || canvas.height !== canvasPixelHeight;
        if (needResize) {
          renderer.setSize(width, height, false);
          if (camera) {
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
          }
        }
      }
    };

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
            roughness: 1.5,
            metalness: 0.9,
          });

          const icon = new THREE.Mesh(geometry, material);
          icon.position.x = (index - (techStack.length - 1) / 2) * iconWidth * 1.8;
          scene?.add(icon);
          iconsRef.current.push(icon);

          const spotLight = new THREE.SpotLight(0xffffff, 5);
          spotLight.position.set(icon.position.x, 50, 50);
          spotLight.angle = Math.PI / 4;
          spotLight.penumbra = 0.1;
          spotLight.decay = 2;
          spotLight.distance = 200;
          spotLight.target = icon;
          scene?.add(spotLight);

          const pointLight = new THREE.PointLight(0xffffff, 2, 100);
          pointLight.position.set(icon.position.x, 0, 20);
          scene?.add(pointLight);
        });
      });
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      iconsRef.current.forEach((icon, index) => {
        icon.rotation.y += 0.008;
        icon.position.y = Math.sin(time + index) * 2;
      });
      renderer?.render(scene as THREE.Scene, camera as THREE.Camera);
    };

    const cleanup = () => {
      cancelAnimationFrame(animationId);
      if (renderer && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    
      renderer?.domElement.removeEventListener('webglcontextlost', handleContextLost);
      renderer?.domElement.removeEventListener('webglcontextrestored', handleContextRestored);
    };

    initializeScene();
    loadIcons();
    resizeRendererToDisplaySize();
    animate();

    window.addEventListener('resize', resizeRendererToDisplaySize);

    return () => {
      cleanup();
      window.removeEventListener('resize', resizeRendererToDisplaySize);

      scene = null;
      camera = null;
      renderer = null;
    };
  }, [techStack]);

  return (
    <div>
      <div ref={containerRef} className="w-full h-72" />
      <h1 className="flex flex-col justify-center items-center font-bold">{title}</h1>
    </div>
  );
};

export default ThreeJSStack;

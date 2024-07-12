import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeJSStackProps {
  title: string;
  techStack: { name: string; iconUrl: string }[];
}

const ThreeJSStack: React.FC<ThreeJSStackProps> = ({ title, techStack }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const iconsRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    let animationId: number | null = null;

    const initializeScene = () => {
      rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
      rendererRef.current.setClearColor(0x000000, 0);
      sceneRef.current = new THREE.Scene();
      cameraRef.current = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);

      const ambientLight = new THREE.AmbientLight(0xffffff, 5);
      sceneRef.current.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
      directionalLight.position.set(5, 5, 5);
      sceneRef.current.add(directionalLight);

      cameraRef.current.position.set(0, 0, 40);

      if (rendererRef.current && containerRef.current) {
        containerRef.current.appendChild(rendererRef.current.domElement);
      }
    };

    const loadIcons = () => {
      const radius = 500;
      const angleIncrement = (2 * Math.PI) / techStack.length;
      const containerWidth = containerRef.current.clientWidth;
      techStack.forEach((tech, index) => {
        const loader = new THREE.TextureLoader();
        loader.load(tech.iconUrl, (texture) => {
          const aspect = texture.image.width / texture.image.height;
          const iconWidth = containerWidth * 0.0065;
          const iconHeight = iconWidth / aspect;

          const geometry = new THREE.PlaneGeometry(iconWidth, iconHeight);
          const material = new THREE.MeshStandardMaterial({
            map: texture,
            transparent: true,
            side: THREE.DoubleSide,
            roughness: 1.5,
            metalness: 0.9,
          });

          const angle = index * angleIncrement;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;

          const icon = new THREE.Mesh(geometry, material);
          icon.position.set(x, 0, z);
          sceneRef.current?.add(icon);
          iconsRef.current.push(icon);
        });
      });
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      const cameraPosition = cameraRef.current?.position;

      iconsRef.current.forEach((icon, index) => {
        const radius = 30;
        const speed = 0.4;
        const angle = time * speed + (index / techStack.length) * (2 * Math.PI);

        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        icon.position.set(x, 0, z);

        const distance = cameraPosition
          ? cameraPosition.distanceTo(icon.position)
          : 0;

        const maxDistance = 30;
        if (distance < maxDistance) {
          const easingFactor = 0.1;
          icon.rotation.y += (0 - icon.rotation.y) * easingFactor;
        } else {
          icon.rotation.y += 0.02;
        }
      });

      rendererRef.current?.render(
        sceneRef.current as THREE.Scene,
        cameraRef.current as THREE.Camera
      );
    };

    const resizeRendererToDisplaySize = () => {
      const renderer = rendererRef.current;
      const container = containerRef.current;
      if (renderer && container) {
        const width = container.clientWidth;
        const height = container.clientHeight;
        const pixelRatio = window.devicePixelRatio;

        const canvasPixelWidth = width * pixelRatio;
        const canvasPixelHeight = height * pixelRatio;

        const needResize =
          renderer.domElement.width !== canvasPixelWidth ||
          renderer.domElement.height !== canvasPixelHeight;
        if (needResize) {
          renderer.setSize(width, height, false);
          cameraRef.current.aspect = width / height;
          cameraRef.current.updateProjectionMatrix();
        }
      }
    };

    const cleanup = () => {
      cancelAnimationFrame(animationId as number);
      if (rendererRef.current && rendererRef.current.domElement.parentNode) {
        rendererRef.current.domElement.parentNode.removeChild(
          rendererRef.current.domElement
        );
      }
      rendererRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
    };

    initializeScene();
    loadIcons();
    resizeRendererToDisplaySize();
    animate();

    window.addEventListener("resize", resizeRendererToDisplaySize);

    return () => {
      cleanup();
      window.removeEventListener("resize", resizeRendererToDisplaySize);
      window.addEventListener("resize", resizeRendererToDisplaySize);
    };
  }, [techStack]);

  return (
    <div>
      <div ref={containerRef} style={{ width: "100%", height: "40vh" }} />
    </div>
  );
};

export default ThreeJSStack;

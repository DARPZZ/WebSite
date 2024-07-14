import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ThreeJSStackProps {
  title: string;
  techStack: { name: string; iconUrl: string }[];
  onTechClosest?: (techName: string) => void;
}

const ThreeJSStack: React.FC<ThreeJSStackProps> = ({
  title,
  techStack,
  onTechClosest,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const iconsRef = useRef<THREE.Mesh[]>([]);
  const [texturesLoaded, setTexturesLoaded] = useState(false);
  const [closestTech, setClosestTech] = useState<string>("");

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

      cameraRef.current.position.set(0, 0, 60);

      if (rendererRef.current && containerRef.current) {
        containerRef.current.appendChild(rendererRef.current.domElement);
      }
    };

    const loadIcons = () => {
      const containerWidth = containerRef.current!.clientWidth;
      const radius = containerWidth / 1;
      const angleIncrement = (2 * Math.PI) / techStack.length;

      let loadedCount = 0;

      techStack.forEach((tech, index) => {
        const loader = new THREE.TextureLoader();
        loader.load(tech.iconUrl, (texture) => {
          const aspect = texture.image.width / texture.image.height;
          const iconWidth = containerWidth < 600 ? 2 : 6;
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

          loadedCount++;
          if (loadedCount === techStack.length) {
            setTexturesLoaded(true);
          }
        });
      });
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      const cameraPosition = cameraRef.current?.position;

      if (techStack && techStack.length > 0) {
        let closestDistance = Number.MAX_VALUE;
        let closestTechName = "";

        iconsRef.current.forEach((icon) => {
          const distance = cameraPosition?.distanceTo(icon.position) || 0;
          const index = iconsRef.current.indexOf(icon);
          if (index >= 0 && index < techStack.length) {
            const techName = techStack[index].name;
            if (distance < closestDistance) {
              closestDistance = distance;
              closestTechName = techName;
            }
          }
        });

        setClosestTech(closestTechName);
      }

      iconsRef.current.forEach((icon, index) => {
        const containerWidth = containerRef.current!.clientWidth;
        const radius = containerWidth / 32;
        const speed = 0.33;
        const angle = time * speed + (index / techStack.length) * (2 * Math.PI);

        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        icon.position.set(x, 0, z);

        const distance = cameraPosition? cameraPosition.distanceTo(icon.position) : 0;
            
        const maxDistance = 40;
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

    if (texturesLoaded) {
      animate();
    }

    window.addEventListener("resize", resizeRendererToDisplaySize);

    return () => {
      cleanup();
      window.removeEventListener("resize", resizeRendererToDisplaySize);
    };
  }, [techStack, texturesLoaded]);

  return (
    <div>
      {closestTech && (
        <h1 className="font-extrabold text-4xl flex flex-col justify-center items-center text-center sm:text-2xl md:text-3xl lg:text-5xl">
          {closestTech}
        </h1>
      )}
      <div ref={containerRef} style={{ width: "100%", height: "600px" }} />
    </div>
  );
};

export default ThreeJSStack;

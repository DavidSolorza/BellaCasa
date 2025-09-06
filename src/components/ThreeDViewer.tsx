// components/ThreeDViewer.tsx
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface ThreeDViewerProps {
  modelPath?: string;
}

export default function ThreeDViewer({ modelPath }: ThreeDViewerProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // 🔹 Escena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // 🔹 Cámara
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);

    // 🔹 Renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // 🔹 Iluminación (💡 este es el lugar donde creas las luces)
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(5, 10, 7.5);
    scene.add(dirLight);

    // 🔹 Controles
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // 🔹 Cargar modelo
    const loader = new GLTFLoader();
    let model: THREE.Object3D | null = null;

    setLoading(true);
    loader.load(
      modelPath,
      (gltf) => {
        model = gltf.scene;
        scene.add(model);

        // Centrado
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3()).length();
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        camera.position.set(0, size / 2, size * 1.8);
        controls.update();

        setLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error cargando modelo:", error);
        setLoading(false);
      }
    );

    // 🔹 Animación
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (model) model.rotation.y += 0.003;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 🔹 Resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [modelPath]);

  return (
    <div
      ref={mountRef}
      className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center"
    >
      {loading && <p className="text-sm text-gray-500">⏳ Cargando modelo...</p>}
    </div>
  );
}

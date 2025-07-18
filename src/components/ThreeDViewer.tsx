import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, ContactShadows } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { motion } from "framer-motion";
import { Suspense } from "react";

type GLTFResult = GLTF & {
  nodes: any;
  materials: any;
};

function RollerModel() {
  const { scene } = useGLTF('/models/rodillo2.glb') as GLTFResult;

  return (
    <primitive
      object={scene}
      scale={0.6}
      position={[0, -1.6, 0]}
      rotation={[Math.PI / 1, 0, Math.PI]}
      castShadow
    />
  );
}

export function ThreeDViewer() {
  return (
    <motion.div
      className="h-screen w-full"
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[2, 5, 2]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={null}>
          <RollerModel />
        </Suspense>
        {/* Sombra debajo del modelo */}
        <ContactShadows
          position={[0, -1.7, 0]}
          opacity={0.4}
          scale={10}
          blur={1.5}
          far={4}
        />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </motion.div>
  );
}

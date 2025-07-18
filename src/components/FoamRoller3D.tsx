import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'

function FoamRollerMesh() {
  return (
    <group>
      {/* Main roller cylinder */}
      <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 4, 32]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          roughness={0.3} 
          metalness={0.1}
        />
      </mesh>
      
      {/* Textured surface pattern */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh 
          key={i} 
          rotation={[0, 0, Math.PI / 2]} 
          position={[0, 0, 0]}
        >
          <cylinderGeometry args={[0.81, 0.81, 4, 32]} />
          <meshStandardMaterial 
            color="#1a1a1a" 
            roughness={0.8}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
      
      {/* End caps */}
      <mesh position={[-2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.82, 0.82, 0.1, 32]} />
        <meshStandardMaterial color="#333" roughness={0.4} />
      </mesh>
      <mesh position={[2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.82, 0.82, 0.1, 32]} />
        <meshStandardMaterial color="#333" roughness={0.4} />
      </mesh>
    </group>
  )
}

export default function FoamRoller3D() {
  return (
    <div className="w-full border-4 border-[#23326a] rounded-3xl shadow-xl p-4 h-[300px] md:h-[500px]">
      <Canvas camera={{ position: [5, 2, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <Environment preset="studio" />
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />
          
          <FoamRollerMesh />
          
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            maxDistance={10}
            minDistance={3}
            autoRotate
            autoRotateSpeed={0.7}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
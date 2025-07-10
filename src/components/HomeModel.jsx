import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

function Model() {
  const gltf = useGLTF('/images/dragon/scene.gltf'); // Ensure this path is public
  const { animations } = gltf;
  const { actions, mixer } = useAnimations(animations, gltf.scene);

  useEffect(() => {
    if (actions && actions[animations[0]?.name]) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  return <primitive object={gltf.scene} scale={3} />;
}

export default function HomeModel() {
  return (
    <div className="w-full h-screen bg-white">
      <Canvas camera={{ position: [5, 5, 5], fov: 35 }}>
        <ambientLight intensity={0.8} />
        <directionalLight intensity={1.5} position={[0,0,0]}  />
        <OrbitControls />
        <Model />
      </Canvas>
    </div>
  );
}

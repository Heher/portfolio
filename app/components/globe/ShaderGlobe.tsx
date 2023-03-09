import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { fragmentShader, vertexShader } from './shaders';

function Globe() {
  const ref = useRef();
  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0
      }
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    ref.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );
}

export function ShaderGlobe() {
  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 8 }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 5]} color="white" />
      <Globe />
      <OrbitControls />
    </Canvas>
  );
}

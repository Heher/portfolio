import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Color, MathUtils } from 'three';

import vertex from '~/components/globe/shaders/globe/vertex.glsl';
import fragment from '~/components/globe/shaders/globe/fragment.glsl';
import blobVertex from '~/components/globe/shaders/blob/vertex.glsl';
import blobFragment from '~/components/globe/shaders/blob/fragment.glsl';
import { OrbitControls, shaderMaterial } from '@react-three/drei';
import { white } from '~/components/globe/colors';
import { createGlobe } from '~/components/globe/createGlobe';

const PointMaterial = shaderMaterial({}, vertex, fragment);

extend({ PointMaterial });

const MovingPlane = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0
      },
      u_colorA: { value: new Color('#FFE486') },
      u_colorB: { value: new Color('#FEB3D9') }
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();

    // mesh.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
      <planeGeometry args={[1, 1, 16, 16]} />
      <pointMaterial uniforms={uniforms} wireframe={false} />
    </mesh>
  );
};

const globeGeometry = createGlobe();

const Blob = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const hover = useRef(false);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.0
      },
      u_time: {
        value: 0.0
      }
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.85 : 0.0,
      0.02
    );

    // console.log('intensity', mesh.current?.material.uniforms.u_intensity.value);

    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={mesh}
      rotation={[0, 0, 0.5, 'ZXY']}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      {/* <icosahedronGeometry args={[2, 20]} /> */}
      <bufferGeometry {...globeGeometry} />
      <shaderMaterial fragmentShader={blobFragment} vertexShader={blobVertex} uniforms={uniforms} wireframe={false} />
    </mesh>
  );
};

export default function ShaderPage() {
  return (
    <main className="min-h-dvh w-screen bg-index-background px-5 py-10 font-figtree text-lg">
      <div className="size-full min-h-dvh">
        <div className="mx-auto h-dvh max-w-[var(--max-width)]">
          <Canvas camera={{ position: [0, 0, 18], fov: 8 }} shadows>
            <directionalLight
              position={[0, 1, 1]}
              intensity={3}
              color={white}
              castShadow
              shadow-mapSize={[3072, 3072]}
            />
            <Blob />
            {/* <axesHelper /> */}
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </main>
  );
}

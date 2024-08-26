import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Instances, Instance, Plane, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import earth from '~/data/map/point-earth.jpg';

const Globe = () => {
  const ref = useRef();
  const count = 10000;
  const texture = useTexture(earth); // Replace with the path to your UV map

  // Use useMemo to create the elements array once
  const elements = useMemo(() => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // Approx. 137.5 degrees
    const newElements = [];

    for (let i = 0; i < count; i++) {
      const radius = Math.sqrt(i / count);
      const theta = i * goldenAngle;

      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta);
      const z = Math.random() * 2 - 1; // Random z position for some depth

      const dummy = new THREE.Object3D();
      dummy.position.set(x * 5, y * 5, z * 5); // Scale positions to fit the globe
      dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      dummy.scale.set(Math.random(), Math.random(), Math.random());
      dummy.updateMatrix();

      newElements.push(dummy.matrix.clone());
    }

    return newElements;
  }, [count]);

  useEffect(() => {
    const centers = new Float32Array(count * 3); // 3 coordinates per instance
    const uvs = new Float32Array(count * 2); // 2 coordinates per instance

    for (let i = 0; i < count; i++) {
      centers[i * 3] = Math.random() * 10 - 5; // x
      centers[i * 3 + 1] = Math.random() * 10 - 5; // y
      centers[i * 3 + 2] = Math.random() * 10 - 5; // z

      uvs[i * 2] = Math.random(); // u
      uvs[i * 2 + 1] = Math.random(); // v
    }

    ref.current.geometry.setAttribute('center', new THREE.InstancedBufferAttribute(centers, 3));
    ref.current.geometry.setAttribute('baseUv', new THREE.InstancedBufferAttribute(uvs, 2));

    elements.forEach((matrix, i) => {
      ref.current.setMatrixAt(i, matrix);
    });

    ref.current.instanceMatrix.needsUpdate = true;
  }, [elements, count]);

  // useFrame(() => {
  //   ref.current.rotation.y += 0.01; // Spin the globe
  // });

  return (
    <Instances ref={ref} limit={count}>
      <planeGeometry args={[0.2, 0.2, 8]} />
      {/* <meshStandardMaterial map={texture} /> */}
      <meshStandardMaterial />
      {Array.from({ length: count }).map((_, i) => (
        <Instance key={i} />
      ))}
    </Instances>
  );
};

const TestGlobe = () => (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Globe />
  </Canvas>
);

export default TestGlobe;

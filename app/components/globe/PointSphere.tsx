import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import vertexShader from '~/components/shader-sandbox/shaders/vertex.glsl';
import fragmentShader from '~/components/shader-sandbox/shaders/fragment.glsl';

// extend({ SphereBufferGeometry });
// import earthImg from '~/data/map/point-earth.jpg';
import earth from '~/data/map/point-earth.jpg';
import { useTexture } from '@react-three/drei';

let dummyObject = new THREE.Object3D();
let vector = new THREE.Vector3();
let sphere = new THREE.Spherical();
let radius = 1;

const pointAmount = 20000;
const geometries = [];

let r = 0;
let dlong = Math.PI * (3 - Math.sqrt(5));
let dz = 2 / pointAmount;
let long = 0;
let z = 1 - dz / 2;

for (let i = 0; i < pointAmount; i++) {
  const circleGeometry = new THREE.CircleGeometry(0.01, 64);

  r = Math.sqrt(1 - z * z);
  vector.set(Math.cos(long) * r, z, -Math.sin(long) * r).multiplyScalar(radius);

  z = z - dz;
  long = long + dlong;
  sphere.setFromVector3(vector);

  dummyObject.lookAt(vector);
  dummyObject.updateMatrix();

  circleGeometry.applyMatrix4(dummyObject.matrix);
  circleGeometry.translate(vector.x, vector.y, vector.z);

  let centers = [
    vector.x,
    vector.y,
    vector.z,
    vector.x,
    vector.y,
    vector.z,
    vector.x,
    vector.y,
    vector.z,
    vector.x,
    vector.y,
    vector.z
  ];
  let uv = new THREE.Vector2((sphere.theta + Math.PI) / (Math.PI * 2), 1 - sphere.phi / Math.PI);
  let uvs = [uv.x, uv.y, uv.x, uv.y, uv.x, uv.y, uv.x, uv.y];
  circleGeometry.setAttribute('center', new THREE.Float32BufferAttribute(centers, 3));
  circleGeometry.setAttribute('baseUv', new THREE.Float32BufferAttribute(uvs, 2));

  geometries.push(circleGeometry);
}

const testGeometry = mergeGeometries(geometries);

export default function PointSphere() {
  const mesh = useRef<THREE.Mesh>(null);

  const eTexture = useTexture(earth);

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0
      },
      uTexture: {
        value: eTexture
      }
    }),
    []
  );

  useFrame((state) => {
    if (mesh.current) {
      const { clock } = state;
      mesh.current.material.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={mesh}>
      <bufferGeometry attach="geometry" {...testGeometry} />
      {/* <icosahedronGeometry args={[1, 100]} /> */}
      <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} />
      {/* <pointsMaterial color={0xf38ba0} size={0.1} /> */}
    </mesh>
  );
}

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export function createGlobe() {
  const dummyObject = new THREE.Object3D();
  const vector = new THREE.Vector3();
  const sphere = new THREE.Spherical();

  const radius = 1;

  // const mesh = new THREE.InstancedMesh(circleGeometry, )

  const pointAmount = 100000;
  // const pointAmount = 100;
  const geometries = [];

  let radialDistance = 0;
  const changeInLongitude = Math.PI * (3 - Math.sqrt(5));
  const changeInHeight = 2 / pointAmount;

  let longitude = 0;
  let height = 1 - changeInHeight / 2;

  for (let i = 0; i < pointAmount; i++) {
    const circleGeometry = new THREE.PlaneGeometry(0.2, 0.2);
    radialDistance = Math.sqrt(1 - height * height);

    vector
      .set(Math.cos(longitude) * radialDistance, height, -Math.sin(longitude) * radialDistance)
      .multiplyScalar(radius);

    height = height - changeInHeight;
    longitude = longitude + changeInLongitude;

    sphere.setFromVector3(vector);

    dummyObject.lookAt(vector);
    dummyObject.updateMatrix();

    circleGeometry.applyMatrix4(dummyObject.matrix);
    circleGeometry.translate(vector.x, vector.y, vector.z);

    const centers = [
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
    const uv = new THREE.Vector2((sphere.theta + Math.PI) / (Math.PI * 2), 1 - sphere.phi / Math.PI);
    const uvs = [uv.x, uv.y, uv.x, uv.y, uv.x, uv.y, uv.x, uv.y];
    circleGeometry.setAttribute('center', new THREE.Float32BufferAttribute(centers, 3));
    circleGeometry.setAttribute('baseUv', new THREE.Float32BufferAttribute(uvs, 2));

    geometries.push(circleGeometry);
  }

  const globeGeometry = mergeGeometries(geometries);

  return globeGeometry;
}

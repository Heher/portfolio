import * as THREE from 'three';

export function createGlobe() {
  const vector = new THREE.Vector3();
  const sphere = new THREE.Spherical();

  const radius = 1;

  // const mesh = new THREE.InstancedMesh(circleGeometry, )

  const pointAmount = 100000;
  // const pointAmount = 100;
  const positions = new Float32Array(pointAmount * 3);
  const baseUvs = new Float32Array(pointAmount * 2);

  let radialDistance = 0;
  const changeInLongitude = Math.PI * (3 - Math.sqrt(5));
  const changeInHeight = 2 / pointAmount;

  let longitude = 0;
  let height = 1 - changeInHeight / 2;

  for (let i = 0; i < pointAmount; i++) {
    radialDistance = Math.sqrt(1 - height * height);

    vector
      .set(Math.cos(longitude) * radialDistance, height, -Math.sin(longitude) * radialDistance)
      .multiplyScalar(radius);

    height = height - changeInHeight;
    longitude = longitude + changeInLongitude;

    sphere.setFromVector3(vector);

    const i3 = i * 3;
    positions[i3] = vector.x;
    positions[i3 + 1] = vector.y;
    positions[i3 + 2] = vector.z;

    const uv = new THREE.Vector2((sphere.theta + Math.PI) / (Math.PI * 2), 1 - sphere.phi / Math.PI);
    const i2 = i * 2;
    baseUvs[i2] = uv.x;
    baseUvs[i2 + 1] = uv.y;
  }

  const globeGeometry = new THREE.BufferGeometry();
  globeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  globeGeometry.setAttribute('baseUv', new THREE.BufferAttribute(baseUvs, 2));

  return globeGeometry;
}

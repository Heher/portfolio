varying vec3 vectorNormal;

void main() {
  vectorNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
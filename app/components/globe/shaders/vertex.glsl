void main() {
  // projectionMatrix, modelViewMatrix, position -> Passed in from Three.js

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, position.z, 1.0);
}
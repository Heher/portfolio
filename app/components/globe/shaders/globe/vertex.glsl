uniform float u_time;
varying vec2 vUv;

uniform sampler2D uTexture;
uniform float maxSize;
uniform float minSize;
uniform vec3 uCoordinate; // Add this line

in vec3 center;
in vec2 baseUv;

varying float vFinalStep;
varying float vMapColorGreen;
varying float vDistance; // Add this line

varying float vZ;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  modelPosition.y += sin(modelPosition.x * 5.0 + u_time * 3.0) * 0.1;
  modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;

  vZ = modelPosition.y;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}
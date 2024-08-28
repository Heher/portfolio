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

void main() {

  float mapColorGreen = texture(uTexture, baseUv).g;
  vMapColorGreen = mapColorGreen;
  float pointSize = mapColorGreen < 0.5 ? maxSize : minSize;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin(modelPosition.x * 4.0 + u_time * 2.0) * 0.2;

  // Uncomment the code and hit the refresh button below for a more complex effect 🪄
  // modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

}
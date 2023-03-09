export const vertexShader = `/* glsl */
  uniform float u_time;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // modelPosition.y += sin(modelPosition.x * 5.0 + u_time * 3.0) * 0.1;
    // modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;

    // modelPosition.y += sin(modelPosition.x * 4.0 + u_time * 2.0) * 0.2;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
  }
`;

export const fragmentShader = `/* glsl */
uniform float u_time;
varying vec2 vUv;

vec3 colorA = vec3(0.000, 1.000, 0.000);
vec3 colorB = vec3(1.000, 0.000, 0.000);

void main() {
  // vec3 color = mix(colorA, colorB, vUv.y);
  // vec3 color = mod((vUv.y * 10.0), 2.0) == 0 ? colorA : colorB;
  
  // Don't paint the pixels between the stripes
  if (cos(2.0 * vUv.y + 3.0 * u_time) < 0.0) {
      discard;
  }

  vec3 color = colorA;

  gl_FragColor = vec4(color, 1.0);
}
`;

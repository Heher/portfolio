varying vec2 vUv;

vec3 colorA = vec3(0.000, 1.000, 0.000);
vec3 colorB = vec3(1.000, 0.000, 0.000);

void main() {
  // vec3 color = mix(colorA, colorB, vUv.y);
  // vec3 color = mod((vUv.y * 10.0), 2.0) == 0 ? colorA : colorB;
  vec3 color = mod(vUv.y * 10.0, 2.0) == 0.0 ? colorA : colorB;

  gl_FragColor = vec4(color, 1.0);
}
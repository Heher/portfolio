#define NORMAL

uniform float opacity;
uniform vec3 color;

uniform sampler2D uTexture;
uniform float maxSize;
uniform float minSize;
uniform vec3 uCoordinate; // Add this line

// in vec3 center;
// in vec2 baseUv;

varying float vFinalStep;
varying float vMapColorGreen;
varying float vDistance; // Add this line

uniform vec3 u_colorA;
uniform vec3 u_colorB;
varying float vZ;

vec3 colorA = vec3(0.912, 0.191, 0.652);
vec3 colorB = vec3(1.000, 0.777, 0.052);

void main() {
  vec3 color = mix(u_colorA, u_colorB, vZ * 2.0 + 0.5);
  gl_FragColor = vec4(color, 1.0);
}
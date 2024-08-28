#define NORMAL

uniform float opacity;
uniform vec3 color;

uniform sampler2D uTexture;
uniform float maxSize;
uniform float minSize;
uniform vec3 uCoordinate; // Add this line

in vec3 center;
in vec2 baseUv;

varying float vFinalStep;
varying float vMapColorGreen;
varying float vDistance; // Add this line

vec3 colorA = vec3(0.912, 0.191, 0.652);
vec3 colorB = vec3(1.000, 0.777, 0.052);

void main() {
  // vec2 normalizedPixel = gl_FragCoord.xy / 600.0;
  float mapColorGreen = texture(uTexture, baseUv).g;
  vMapColorGreen = mapColorGreen;
  float pointSize = mapColorGreen < 0.5 ? maxSize : minSize;

  transformed = (position - center) * pointSize + center;

  vec2 normalizedPixel = gl_FragCoord.xy / 600.0;
  vec3 mixedColor = mix(color, colorA, normalizedPixel.x);

  gl_FragColor = vec4(mixedColor, 1.0);

}
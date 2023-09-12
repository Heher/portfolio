uniform sampler2D uTexture;
uniform float uTime;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying float vDisplacement;
varying float vMap;

void main() {
  // vec4 color = texture2D(uTexture, vUv);

  gl_FragColor = vec4(vec3(0.91), 1.0);
}
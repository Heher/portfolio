// uniform sampler2D globeTexture;
// varying vec2 vertexUV;
varying vec3 vectorNormal;

void main() {
  float intensity = pow(0.95 - dot(vectorNormal, vec3(0, 0, 1.0)), 2.0);
  // vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);

  gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
}
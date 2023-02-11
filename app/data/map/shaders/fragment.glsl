uniform sampler2D globeTexture;
varying vec2 vertexUV;
varying vec3 vectorNormal;

void main() {
  float intensity = 1.5 - dot(vectorNormal, vec3(0, 0, 1));
  vec3 atmosphere = vec3(0.3, 0.4, 0.5) * pow(intensity, 1.5);

  gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV).xyz, 1.0);
}
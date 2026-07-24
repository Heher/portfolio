uniform sampler2D uTexture;
uniform float uSize;
uniform float uSizeAttenuation;

varying float vTextureGreen;
varying vec3 vWorldNormal;
varying vec3 vWorldPosition;
varying vec2 vSphereUv;

void main() {
  // Position
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * worldPosition;
  gl_Position = projectionMatrix * viewPosition;

  // Convert spherical coordinates to UV
  float phi = acos(position.y);  // 0 to π
  float theta = atan(position.z, position.x);  // -π to π
  
  vec2 uv = vec2(
    1.0 - (theta + 3.14159) / 6.28318,  // Convert -π..π to 0..1
    1.0 - (phi / 3.14159)  // Convert 0..π to 1..0 (flipped)
  );

  // Sample texture and extract green channel
  vec4 textureColor = texture2D(uTexture, uv);
  float textureGreen = textureColor.g;

  // Change the point size based on the texture's green channel
  float baseSize = 7.0 * (1.0 - textureGreen) + 1.0; // Inverted: high green = small points
  float attenuatedSize = baseSize * (projectionMatrix[1][1] / max(-viewPosition.z, 0.0001));
  float finalSize = mix(baseSize, attenuatedSize, uSizeAttenuation);
  gl_PointSize = finalSize * uSize;

  // Points geometry has only positions, so derive sphere normal from position.
  vec3 localNormal = normalize(position);
  vec3 worldNormal = normalize(mat3(modelMatrix) * localNormal);

  // Build UVs from world-space sphere orientation so brightness shifts while globe rotates.
  float worldPhi = acos(clamp(worldNormal.y, -1.0, 1.0));
  float worldTheta = atan(worldNormal.z, worldNormal.x);
  vec2 sphereUv = vec2(
    1.0 - (worldTheta + 3.14159) / 6.28318,
    1.0 - (worldPhi / 3.14159)
  );

  // Varyings
  vTextureGreen = textureGreen;
  vWorldNormal = worldNormal;
  vWorldPosition = worldPosition.xyz;
  vSphereUv = sphereUv;
}
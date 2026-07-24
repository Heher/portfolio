uniform vec3 uPointColor;
uniform vec3 uSunLocation;
varying vec2 vSphereUv;
varying vec3 vWorldNormal;

void main() {
  // Force each point sprite to render as a circle.
  vec2 spriteUv = gl_PointCoord - vec2(0.5);
  float spriteRadius = length(spriteUv);
  if (spriteRadius > 0.5) {
    discard;
  }

  // Sun
  float sunOrientation = dot(uSunLocation, vWorldNormal);

  float dayMix = smoothstep(-0.25, 0.5, sunOrientation);

  // Slight edge feathering reduces jagged circle borders.
  float circleAlpha = 1.0 - smoothstep(0.46, 0.5, spriteRadius);

  vec3 darkSideColor = uPointColor * 0.15;
  vec3 brightSideColor = min(uPointColor * 2.2 + vec3(0.35, 0.0, 0.0), vec3(1.0));
  vec3 finalColor = mix(darkSideColor, brightSideColor, dayMix);

  gl_FragColor = vec4(finalColor, circleAlpha);
}
uniform float u_time;
uniform vec3 u_offColor;
uniform vec3 u_color;

void main() {
  float result;
  result = abs(sin(u_time));

  gl_FragColor = vec4(mix(u_offColor, u_color, result), 1.0);
}
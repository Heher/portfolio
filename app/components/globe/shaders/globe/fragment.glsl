#define NORMAL

uniform float opacity;
vec3 colorA = vec3(0.912, 0.191, 0.652);
vec3 colorB = vec3(1.000, 0.777, 0.052);

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

  vec4 diffuseColor = vec4(0.0, 0.0, 0.0, opacity);

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

  // gl_FragColor = vec4(packNormalToRGB(normal), diffuseColor.a);

	#ifdef OPAQUE

  gl_FragColor.a = 1.0;

	#endif

  vec2 normalizedPixel = gl_FragCoord.xy / 600.0;
  vec3 color = mix(colorA, colorB, normalizedPixel.x);

  gl_FragColor = vec4(color, 1.0);

}
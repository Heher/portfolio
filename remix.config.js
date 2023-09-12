const { withEsbuildOverride } = require('remix-esbuild-override');
const { glsl } = require('esbuild-plugin-glsl');

withEsbuildOverride((option, { isServer, isDev }) => {
  // update the option
  option.plugins = [
    glsl({
      minify: true
    }),
    ...option.plugins
  ];

  return option;
});

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  publicPath: '/build/', // default value, can be removed
  serverBuildPath: '.netlify/functions-internal/server.js',
  serverMainFields: ['main', 'module'], // default value, can be removed
  serverMinify: false, // default value, can be removed
  serverModuleFormat: 'cjs', // default value, can be removed
  serverPlatform: 'node', // default value, can be removed
  serverDependenciesToBundle: [
    'framer-motion-3d',
    'react-merge-refs',
    'd3',
    /^d3-*/,
    'three/examples/jsm/utils/BufferGeometryUtils.js'
  ],
  tailwind: true,
  future: {
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_meta: true,
    v2_headers: true,
    v2_dev: true,
    v2_routeConvention: true
  }
};

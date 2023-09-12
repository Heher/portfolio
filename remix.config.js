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
  ignoredRouteFiles: ['**/.*'],
  server: process.env.NETLIFY || process.env.NETLIFY_LOCAL ? './server.ts' : undefined,
  serverBuildPath: '.netlify/functions-internal/server.js',
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  serverModuleFormat: 'cjs',
  serverDependenciesToBundle: [
    'framer-motion-3d',
    'react-merge-refs',
    'd3',
    /^d3-*/,
    'three/examples/jsm/utils/BufferGeometryUtils.js'
  ],
  tailwind: true,
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true
  }
};

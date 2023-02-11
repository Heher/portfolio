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
  serverBuildTarget: 'netlify',
  server: process.env.NETLIFY || process.env.NETLIFY_LOCAL ? './server.js' : undefined,
  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: ['framer-motion-3d']
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};

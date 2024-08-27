import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig, type ViteDevServer } from 'vite';
import morgan from 'morgan';
import tsconfigPaths from 'vite-tsconfig-paths';
// import topLevelAwait from 'vite-plugin-top-level-await';
// import { installGlobals } from '@remix-run/node';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import glsl from 'vite-plugin-glsl';
import { iconsSpritesheet } from 'vite-plugin-icons-spritesheet';
// import { remixDevTools } from 'remix-development-tools/vite';

// installGlobals();

// export default defineConfig(({ isSsrBuild }) => {
//   // console.log('isSsrBuild', isSsrBuild);
//   return {
//     build: {
//       sourcemap: true // Source map generation must be turned on
//     },
//     // plugins: [remixDevTools(), remix(), tsconfigPaths()]
//     plugins: [
//       topLevelAwait({
//         // The export name of top-level await promise for each chunk module
//         promiseExportName: '__tla',
//         // The function to generate import names of top-level await promise in each chunk module
//         promiseImportName: (i) => `__tla_${i}`
//       }),
//       iconsSpritesheet({
//         // Defaults to false, should it generate TS types for you
//         withTypes: true,
//         // The path to the icon directory
//         inputDir: './app/components/icons',
//         // Output path for the generated spritesheet and types
//         outputDir: './app/assets',
//         // Output path for the generated type file, defaults to types.ts in outputDir
//         typesOutputFile: './app/icons.ts',
//         // The name of the generated spritesheet, defaults to sprite.svg
//         fileName: 'sprite.svg',
//         // The cwd, defaults to process.cwd()
//         cwd: process.cwd(),
//         // Callback function that is called when the script is generating the icon name
//         // This is useful if you want to modify the icon name before it is written to the file
//         iconNameTransformer: (iconName) => iconName
//       }),
//       remix({
//         serverModuleFormat: 'esm',
//         ignoredRouteFiles: ['**/.*']
//         // serverBundles: ({ branch }) => {
//         //   const isAdminRoute = branch.some((route) => route.id.split('/').includes('admin'));

//         //   // console.log('isAdminRoute', isAdminRoute, branch);

//         //   return isAdminRoute ? 'admin' : 'regular';
//         // }
//       }),
//       tsconfigPaths(),
//       sentryVitePlugin({
//         authToken: process.env.SENTRY_AUTH_TOKEN,
//         org: 'heher',
//         project: 'globe-draft'
//       })
//     ]
//     // optimizeDeps: { esbuildOptions: { target: 'esnext' } },
//     // build: { target: 'esnext' }
//     // build: {
//     //   modulePreload: false
//     // }
//   };
// });

export default defineConfig({
  build: {
    manifest: true,
    minify: 'esbuild'
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       const HugeLibraries = ['three']; // modify as required based on libraries in use
    //       if (HugeLibraries.some((libName) => id.includes(`node_modules/${libName}`))) {
    //         return id.toString().split('node_modules/')[1].split('/')[0].toString();
    //       }
    //     }
    //   }
    // }
  },
  plugins: [
    morganPlugin(),
    // remixDevTools(),
    // iconsSpritesheet({
    //   // Defaults to false, should it generate TS types for you
    //   withTypes: true,
    //   // The path to the icon directory
    //   inputDir: './app/components/icons',
    //   // Output path for the generated spritesheet and types
    //   outputDir: './public/images',
    //   // Output path for the generated type file, defaults to types.ts in outputDir
    //   typesOutputFile: './app/icons.ts',
    //   // The name of the generated spritesheet, defaults to sprite.svg
    //   fileName: 'sprite.svg',
    //   // The cwd, defaults to process.cwd()
    //   cwd: process.cwd(),
    //   // Callback function that is called when the script is generating the icon name
    //   // This is useful if you want to modify the icon name before it is written to the file
    //   iconNameTransformer: (iconName) => iconName
    // }),
    tsconfigPaths(),
    glsl(),
    remix({
      ignoredRouteFiles: ['**/.*'],
      serverModuleFormat: 'esm'
      // serverBundles: ({ branch }) => {
      //   const isAuthenticatedRoute = branch.some((route) => route.id.split('/').includes('admin'));

      //   return isAuthenticatedRoute ? 'authenticated' : 'unauthenticated';
      // }
    }),
    sentryVitePlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: 'heher',
      project: 'john-heher'
    })
  ]
});

function morganPlugin() {
  return {
    name: 'morgan-plugin',
    configureServer(server: ViteDevServer) {
      return () => {
        server.middlewares.use(morgan('tiny'));
      };
    }
  };
}

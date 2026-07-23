import { createRequestHandler } from '@react-router/express';
import express from 'express';
import { RouterContextProvider } from 'react-router';

import { valueFromExpressContext } from '~/context';

export const app = express();

// Pre-load the server build on startup
let serverBuild: any = null;
let buildLoadError: any = null;
let buildLoadStarted = false;

async function loadServerBuild() {
  if (buildLoadStarted)
    return;
  buildLoadStarted = true;

  try {
    console.log('Pre-loading React Router server build...');
    console.time('build-import');

    // Try to import the build
    const importPromise = import('virtual:react-router/server-build');

    // Set an aggressive timeout
    const timeoutPromise = new Promise((_, reject) => {
      const timer = setTimeout(() => {
        console.error('✗ Build import timeout at 3 seconds');
        reject(new Error('Server build import timeout (3s)'));
      }, 3000);

      // Also set a process-level timeout
      const processTimeout = setTimeout(() => {
        console.error('✗ CRITICAL: Process-level timeout - exiting');
        process.exit(1);
      }, 5000);

      // Clear both when promise settles
      importPromise.then(() => {
        clearTimeout(timer);
        clearTimeout(processTimeout);
      }).catch(() => {
        clearTimeout(timer);
        clearTimeout(processTimeout);
      });
    });

    serverBuild = await Promise.race([importPromise, timeoutPromise]);

    console.timeEnd('build-import');
    console.log('✓ Server build loaded successfully');
    return serverBuild;
  }
  catch (error) {
    console.error('✗ Failed to load server build:', error);
    buildLoadError = error;
    return null;
  }
}

// Load build immediately on startup but don't block
console.log('Starting server build preload...');
const buildLoadPromise = loadServerBuild();

// Request timeout middleware - 30 second timeout for all requests
app.use((req, res, next) => {
  const timeout = setTimeout(() => {
    console.error(`✗ Request timeout for ${req.method} ${req.url}`);
    if (!res.headersSent) {
      res.status(504).send('Request Timeout');
    }
  }, 30000);

  res.on('finish', () => clearTimeout(timeout));
  res.on('close', () => clearTimeout(timeout));

  next();
});

const requestHandler = createRequestHandler({
  build: () => {
    if (buildLoadError) {
      throw buildLoadError;
    }
    if (!serverBuild) {
      throw new Error('Server build not loaded');
    }
    return serverBuild;
  },
  getLoadContext() {
    const context = new RouterContextProvider();
    context.set(valueFromExpressContext, 'Hello from Express');
    return context;
  },
});

app.use(async (req, res, next) => {
  // Wait for build to load, but only on first request
  if (!serverBuild && !buildLoadError) {
    try {
      console.log('Waiting for server build to load on first request...');
      await buildLoadPromise;
    }
    catch {
      // buildLoadPromise already handled this
    }
  }

  try {
    console.log(`→ ${req.method} ${req.url}`);
    await requestHandler(req, res, next);
    console.log(`✓ ${req.method} ${req.url} completed`);
  }
  catch (error) {
    console.error(`✗ Error handling ${req.method} ${req.url}:`, error);
    next(error);
  }
});

// Error handling middleware
app.use((error: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Unhandled error:', error);
  if (!res.headersSent) {
    res.status(500).send('Internal Server Error');
  }
});

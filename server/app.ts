import { createRequestHandler } from '@react-router/express';
import express from 'express';
import { RouterContextProvider } from 'react-router';

import { valueFromExpressContext } from '~/context';

export const app = express();

// Pre-load the server build on startup
let serverBuild: any = null;

async function loadServerBuild() {
  if (serverBuild)
    return serverBuild;

  try {
    console.log('Pre-loading React Router server build...');
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Server build import timeout (10s)')), 10000),
    );

    serverBuild = await Promise.race([
      import('virtual:react-router/server-build'),
      timeoutPromise,
    ]);

    console.log('✓ Server build loaded successfully');
    return serverBuild;
  }
  catch (error) {
    console.error('✗ Failed to load server build:', error);
    throw error;
  }
}

// Load build immediately on startup
loadServerBuild().catch((err) => {
  console.error('Fatal: Could not load server build on startup:', err);
  process.exit(1);
});

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
    console.log('Using pre-loaded server build...');
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

import { createRequestHandler } from '@react-router/express';
import express from 'express';
import { RouterContextProvider } from 'react-router';

import { valueFromExpressContext } from '~/context';

export const app = express();

// Request timeout middleware - 30 second timeout for all requests
app.use((req, res, next) => {
  const timeout = setTimeout(() => {
    console.error(`Request timeout for ${req.method} ${req.url}`);
    if (!res.headersSent) {
      res.status(504).send('Request Timeout - Server took too long to respond');
    }
  }, 30000);

  res.on('finish', () => clearTimeout(timeout));
  res.on('close', () => clearTimeout(timeout));

  next();
});

const requestHandler = createRequestHandler({
  build: () => {
    console.log('Loading React Router server build...');
    return import('virtual:react-router/server-build');
  },
  getLoadContext() {
    const context = new RouterContextProvider();
    context.set(valueFromExpressContext, 'Hello from Express');
    return context;
  },
});

app.use(async (req, res, next) => {
  try {
    console.log(`Handling request: ${req.method} ${req.url}`);
    await requestHandler(req, res, next);
  }
  catch (error) {
    console.error('Error in request handler:', error);
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

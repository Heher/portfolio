import { createRequestHandler } from '@react-router/express';
import express from 'express';
import { RouterContextProvider } from 'react-router';

import { valueFromExpressContext } from '~/context';

export const app = express();

app.use(
  createRequestHandler({
    build: () => import('virtual:react-router/server-build'),
    getLoadContext() {
      const context = new RouterContextProvider();
      context.set(valueFromExpressContext, 'Hello from Express');
      return context;
    },
  }),
);

// Error handling middleware
app.use((error: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Unhandled error:', error);
  if (!res.headersSent) {
    res.status(500).send('Internal Server Error');
  }
});

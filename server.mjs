import { createRequestHandler } from '@react-router/express';
import express from 'express';

const app = express();

app.use(
  createRequestHandler({
    build: () => import('./build/server/index.js'),
  }),
);

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
  console.log(`✅ Server listening on http://${host}:${port}`);
});

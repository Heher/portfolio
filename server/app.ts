import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const app = express();

// Serve static assets with long cache
app.use(
  '/assets',
  express.static(path.join(__dirname, '../build/client/assets'), {
    immutable: true,
    maxAge: '1y',
  }),
);

// Serve other static files
app.use(express.static(path.join(__dirname, '../build/client'), { maxAge: '1h' }));

// SPA catchall: serve index.html for all routes
// React Router will handle routing on the client
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/client/index.html'));
});

import express from 'express';
import path from 'node:path';

export const app = express();

const clientPath = path.join(process.cwd(), 'build/client');
const assetsPath = path.join(clientPath, 'assets');
const indexPath = path.join(clientPath, 'index.html');

console.log('Client path:', clientPath);
console.log('Index path:', indexPath);

// Serve static assets with long cache
app.use(
  '/assets',
  express.static(assetsPath, {
    immutable: true,
    maxAge: '1y',
  }),
);

// Serve other static files
app.use(express.static(clientPath, { maxAge: '1h' }));

// SPA catchall: serve index.html for all routes
// React Router will handle routing on the client
app.use((req, res) => {
  res.sendFile(indexPath);
});

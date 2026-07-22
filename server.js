import { createRequestHandler } from '@react-router/node';
import { createServer } from 'node:http';

const build = await import('./build/server/index.js');

const requestHandler = createRequestHandler(build, 'production');

const server = createServer(requestHandler);

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

server.listen(port, host, () => {
  console.log(`Server listening at http://${host}:${port}`);
});


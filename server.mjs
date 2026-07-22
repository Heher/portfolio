import { createRequestHandler, installGlobals } from '@react-router/node';
import { createServer } from 'node:http';

import * as build from './build/server/index.js';

installGlobals();

const requestHandler = createRequestHandler(build, 'production');

const server = createServer(requestHandler);

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

server.listen(port, host, () => {
  console.log(`✅ Server listening on http://${host}:${port}`);
});

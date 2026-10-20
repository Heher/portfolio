/* eslint-disable node/no-process-env */
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import { createServer } from 'node:http';
import { WebSocket, WebSocketServer } from 'ws';

const BUILD_PATH = './build/server/index.js';
const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PORT = Number.parseInt(process.env.PORT || '3000');

const app = express();

app.use(compression());
app.disable('x-powered-by');

if (DEVELOPMENT) {
  console.log('Starting development server');
  const viteDevServer = await import('vite').then(vite =>
    vite.createServer({
      server: { middlewareMode: true },
    }),
  );
  app.use(viteDevServer.middlewares);
  app.use(async (req, res, next) => {
    try {
      const source = await viteDevServer.ssrLoadModule('./server/app.ts');
      return await source.app(req, res, next);
    }
    catch (error) {
      if (typeof error === 'object' && error instanceof Error) {
        viteDevServer.ssrFixStacktrace(error);
      }
      next(error);
    }
  });
}
else {
  console.log('Starting production server');
  app.use(
    '/assets',
    express.static('build/client/assets', { immutable: true, maxAge: '1y' }),
  );
  app.use(morgan('tiny'));
  app.use(express.static('build/client', { maxAge: '1h' }));
  app.use(await import(BUILD_PATH).then(mod => mod.app));
}

const websocketServer = new WebSocketServer({ noServer: true });

websocketServer.on('connection', (clientSocket) => {
  const token = process.env.WEBSOCKET_TOKEN;

  if (!token) {
    clientSocket.close(1011, 'WebSocket token is not configured');
    return;
  }

  const upstreamUrl = new URL('wss://ws.heher.casa/ws');
  upstreamUrl.searchParams.set('token', token);
  const upstreamSocket = new WebSocket(upstreamUrl);

  clientSocket.on('message', (message) => {
    if (upstreamSocket.readyState === WebSocket.OPEN) {
      upstreamSocket.send(message);
    }
  });

  upstreamSocket.on('message', (message) => {
    if (clientSocket.readyState === WebSocket.OPEN) {
      clientSocket.send(message);
    }
  });

  upstreamSocket.on('error', (error) => {
    console.error('Upstream WebSocket error:', error);
    clientSocket.close(1011, 'Upstream WebSocket error');
  });

  const closeBoth = () => {
    if (clientSocket.readyState === WebSocket.OPEN) {
      clientSocket.close();
    }
    if (upstreamSocket.readyState === WebSocket.OPEN) {
      upstreamSocket.close();
    }
  };

  clientSocket.on('close', closeBoth);
  upstreamSocket.on('close', closeBoth);
});

const server = createServer(app);

server.on('upgrade', (request, socket, head) => {
  const requestUrl = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);

  if (requestUrl.pathname !== '/ws') {
    socket.destroy();
    return;
  }

  websocketServer.handleUpgrade(request, socket, head, (clientSocket) => {
    websocketServer.emit('connection', clientSocket, request);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

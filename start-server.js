import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import serverModule from './dist/server/server.js';

const app = new Hono();

// 1. Serve static files (CSS, JS, images) from the client build
app.use('/*', serveStatic({ root: './dist/client' }));

// 2. Route all other requests to the TanStack Start SSR fetch handler
app.all('*', async (c) => {
  // In Node.js, c.executionCtx throws an error since there is no execution context
  let ctx;
  try {
    ctx = c.executionCtx;
  } catch (e) {
    ctx = undefined;
  }
  return await serverModule.fetch(c.req.raw, c.env, ctx);
});

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

console.log(`Starting Render optimized Node server on port ${port}...`);

serve({
  fetch: app.fetch,
  port: port
}, (info) => {
  console.log(`Server is running at http://localhost:${info.port}`);
});

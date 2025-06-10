import { serve } from '@hono/node-server';
import { Hono } from 'hono';
// importar routers desde los módulos
import ping from '../dist/ping/ping.js';
import greet from '../dist/greet/greet.js';
// usar "server" en lugar de "app" por consistencia
const server = new Hono();
server.get('/', (c) => {
    return c.text('Hello Hono!');
});
// montar los routers
server.route('/', ping);
server.route('/', greet);
const port = 3000;
console.log(`Server is running on port ${port}`);
serve({
    fetch: server.fetch,
    port
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});

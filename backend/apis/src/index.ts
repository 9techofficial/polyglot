import fastify from 'fastify';
import cors from '@fastify/cors';

import goService from './services/go.service';
import pythonService from './services/python.service';
import phpService from './services/php.service';
import nodejsService from './services/nodejs.service';
import honoService from './services/hono.service';

// implement fastify
const PORT = process.env.PORT || 4000;
const app = fastify({ logger: false, trustProxy: true });

// implement fastify register plugins
app.register(cors, {
  origin: (origin, cb) => {
    const allowedOrigins = ['http://localhost:3000'];
    if (!origin || allowedOrigins.includes(origin)) {
      cb(null, true);
      return;
    }
    cb(new Error('Not allowed by CORS'), false);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
});

// Register routes with '/api' prefix
app.get('/', async (request, reply) => { reply.send('Welcome to apis'); });
app.get('/health', async (request, reply) => { reply.send('Healthy'); });
app.get('/api/go', async (request, reply) => {
  try {
    const response = await goService.getApi();
    reply.send(response);
  } catch (error) {
    console.error('Error calling Go API:', error);
    reply.status(500).send('Internal Server Error');
  }
});

app.get('/api/python', async (request, reply) => {
  try {
    const response = await pythonService.getApi();
    reply.send(response);
  } catch (error) {
    console.error('Error calling Python API:', error);
    reply.status(500).send('Internal Server Error');
  }
});

app.get('/api/php', async (request, reply) => {
  try {
    const response = await phpService.getApi();
    reply.send(response);
  } catch (error) {
    console.error('Error calling Php API:', error);
    reply.status(500).send('Internal Server Error');
  }
});

app.get('/api/nodejs', async (request, reply) => {
  try {
    const response = await nodejsService.getApi();
    reply.send(response);
  } catch (error) {
    console.error('Error calling Nodejs API:', error);
    reply.status(500).send('Internal Server Error');
  }
});

app.get('/api/hono', async (request, reply) => {
  try {
    const response = await honoService.getApi();
    reply.send(response);
  } catch (error) {
    console.error('Error calling Hono API:', error);
    reply.status(500).send('Internal Server Error');
  }
});

// Start the server
(async () => {
  try {
    app.listen({ port: Number(PORT) || 4000 }, (err, address) => {
      if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
      }
      console.log(`Server running at ${address}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
})();
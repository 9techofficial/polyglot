import fastify from 'fastify'

// implement fastify
const PORT = process.env.PORT || 4000;
const app = fastify({ logger: false, trustProxy: true });

// implement fastify register plugins

// Register routes with '/api' prefix
app.get('/', async (request, reply) => { reply.send('Welcome to apis'); });

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
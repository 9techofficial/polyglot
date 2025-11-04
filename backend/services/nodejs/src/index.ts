import fastify from 'fastify'

// implement fastify
const PORT = process.env.PORT || 4001;
const app = fastify({ logger: false, trustProxy: true });

// implement fastify register plugins

// Register routes with '/api' prefix
app.get('/api', async (request, reply) => { reply.send({ message: 'Welcome to nodejs service' }); });

// Start the server
(async () => {
  try {
    app.listen({ port: Number(PORT) || 4001 }, (err, address) => {
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
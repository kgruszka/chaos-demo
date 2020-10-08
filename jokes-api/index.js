'use strict';

const fastify = require('fastify');
const cors = require('fastify-cors');
const jokes = require('./jokes.json');

let counter = 0;

async function startServer() {
    const app = fastify();
    app.register(cors, { origin: '*' });

    app.get('/joke', jokeHandler);
    const address = await app.listen(3000, '::');
    console.log(`Server is listening on ${address}`);
};

async function jokeHandler(request, reply) {
    counter < jokes.length - 1 ? counter++ : counter = 0;
    reply.send({ joke: jokes[counter] });
}

startServer();
'use strict';

const fastify = require('fastify');
const cors = require('fastify-cors');
const got = require('got');

async function startServer() {
    const app = fastify();
    app.register(cors, { origin: '*' });

    app.get('/joke', jokeHandler);
    const address = await app.listen(3000, '::');
    console.log(`Server is listening on ${address}`);
};

async function jokeHandler(request, reply) {
    try {
        const joke = await fetchJoke();
        console.log('Joke fetched. Returning joke to the client :)')
        reply.send({ joke });
    } catch {
        console.log('Could not fetch joke. Returning 503 :(')
        return reply.status(503).send();
    }
}

async function fetchJoke() {
    const { joke } = await got('http://jokes-api:3000/joke', { timeout: 200 }).json();
    return joke;
}

startServer();
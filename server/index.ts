import path from 'path';
import Fastify, { FastifyInstance } from 'fastify';
import fastifyStatic from '@fastify/static';
import fastifyCompress from '@fastify/compress';

import 'dotenv/config';

const PORT = Number(process.env.SERVER_PORT || 4000);

(async () => {
    const fastify = Fastify({ ignoreTrailingSlash: true });
    const assetsDir = path.resolve('dist');

    try {
        const routes = async (fastify: FastifyInstance) => {
            fastify.register(fastifyStatic, { root: assetsDir });

            fastify.get('/api', async () => {
                return { answer: 42 };
            });

            fastify.get('/', async (_, reply) => {
                return reply.sendFile('index.html', assetsDir);
            });
        };

        fastify.register(fastifyCompress);

        fastify.register(routes, { prefix: '/' });

        fastify.get('*', async (request, reply) => {
            return reply.redirect(`${request.url}`.replace(/\/\//g, '/'));
        });

        await fastify.listen({ port: PORT });

        console.log(`Server listening on port ${PORT} ...`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
})();

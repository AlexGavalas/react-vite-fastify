import path from 'path';
import Fastify, { FastifyPluginCallback } from 'fastify';
import fastifyStatic from '@fastify/static';
import fastifyCompress from '@fastify/compress';

import 'dotenv/config';

const PORT = Number(process.env.SERVER_PORT || 4000);

(async () => {
    const fastify = Fastify({ ignoreTrailingSlash: true });
    const assetsDir = path.resolve('dist');

    // Fastify plugins need to be async or call the `done` fn at the end.
    const routes: FastifyPluginCallback = async (fastify) => {
        fastify.get('/api', () => {
            return { answer: 42 };
        });
    };

    try {
        fastify.register(fastifyCompress);

        fastify.register(fastifyStatic, { root: assetsDir });

        fastify.register(routes, { prefix: '/' });

        await fastify.listen({ port: PORT });

        console.log(`Server listening on port ${PORT} ...`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
})();

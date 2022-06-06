import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    collectCoverage: false,
    coverageReporters: ['text'],
    collectCoverageFrom: ['**/*.tsx'],

    maxWorkers: '25%',

    testEnvironment: 'jsdom',

    preset: 'ts-jest',

    setupFilesAfterEnv: ['<rootDir>/src/setup-tests.ts'],

    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
};

export default config;

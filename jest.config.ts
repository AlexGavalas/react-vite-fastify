import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    collectCoverage: false,
    coverageReporters: ['text'],
    collectCoverageFrom: ['**/*.tsx'],

    maxWorkers: '25%',

    testEnvironment: 'jsdom',

    preset: 'ts-jest/presets/default-esm',

    setupFilesAfterEnv: ['<rootDir>/src/setup-tests.ts'],
};

export default config;

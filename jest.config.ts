import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    collectCoverage: false,
    coverageReporters: ['text'],
    collectCoverageFrom: ['**/*.tsx'],

    maxWorkers: '25%',

    testEnvironment: 'jsdom',

    preset: 'ts-jest/presets/default-esm',

    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

    transform: {
        '\\.css\\.ts$': '@vanilla-extract/jest-transform',
    },
};

export default config;

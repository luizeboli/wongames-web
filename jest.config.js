// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/utils/apollo.ts',
    '!src/types/**/*.ts',
    '!src/graphql/**/*.ts',
    '!src/**/mock.ts',
    '!src/utils/apolloCache.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest/'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^styled-components': '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

module.exports = {
  verbose: true,
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/dist/', '<rootDir>/packages/(?:.+?)/.cache/'],
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/dist/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transformIgnorePatterns: ['node_modules/'],
  resolver: '<rootDir>/.jest/resolver.js',
  transform: {
    '^.+\\.tsx?$': '<rootDir>/.jest/transform.js',
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setupFilesAfterEnv.js'],
};

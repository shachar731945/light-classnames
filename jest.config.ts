export default {
  collectCoverage: true,
  collectCoverageFrom: ['src/**'],
  coverageDirectory: 'tests/coverage/',
  preset: 'ts-jest',
  testEnvironment: 'jsdom'
};
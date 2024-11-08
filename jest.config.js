const {defaults} = require('jest-config');

module.exports = {
  bail: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  roots: ['src'],
  testMatch: ['<rootDir>/src/test/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
};
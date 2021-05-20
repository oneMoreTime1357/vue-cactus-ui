module.exports = {
  // verbose: true,
  // bail: 1,
  testURL: 'http://localhost/',
  moduleFileExtensions: ['vue', 'js', 'ts', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^doc/(.*)$': '<rootDir>/doc/$1',
    '^packages/(.*)$': '<rootDir>/packages/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^static/(.*)$': '<rootDir>/static/$1',
  },
  transform: {
    '.*\\.vue$': 'vue-jest',
    '^.+\\.[jt]sx?$': [
      'babel-jest',
      {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: true,
              },
            },
          ],
          '@babel/preset-typescript',
        ],
        plugins: [
          '@vue/babel-plugin-jsx',
          '@babel/plugin-proposal-class-properties',
        ],
      },
    ],
    // "^.+\\.tsx?$": "ts-jest"
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  collectCoverageFrom: ['**/packages/**/*.{js,vue,ts}'],
  coverageReporters: ['html', 'lcov', 'text-summary'],
  coverageDirectory: '<rootDir>/test/coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/*.spec.js'],
  transformIgnorePatterns: ['/node_modules/'],
  setupFiles: ['./setupTest.js'],
}

const IgnorePatterns = ['<rootDir>/node_modules/', '<rootDir>/templates/', '<rootDir>/.next']

module.exports = {
  verbose: false,
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', //'jsdom',
  collectCoverage: true,
  transformIgnorePatterns: IgnorePatterns,
  testPathIgnorePatterns: IgnorePatterns,
  collectCoverageFrom: [
    '<rootDir>/pages/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/pages/index.*',
    '!<rootDir>/src/**/index.*',
    '!<rootDir>/templates/**/*',
    '!<rootDir>/src/main.*',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  transform: {
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.svg$': '<rootDir>/__mocks__/svgTransform.cjs',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.cjs',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/_tests_/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
  modulePathIgnorePatterns: ['builds', 'node_modules'],
}

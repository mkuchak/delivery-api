export default {
  verbose: true,
  forceExit: true,
  clearMocks: true,
  globalSetup: './tests/globalSetup.ts',
  globalTeardown: './tests/globalTeardown.ts',
  transform: {
    '^.+\\.(t|j)sx?$': 'esbuild-jest',
  },
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  watchPathIgnorePatterns: ['./node_modules', './dist', './coverage'],
}

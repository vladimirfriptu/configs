const path = require('path');

module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  setupFiles: [path.resolve(__dirname, './test/setupTests.js')],
  globalSetup: path.resolve(__dirname, './test/globalSetup.js'),
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}', // TODO прийти к однообразию
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
      babelConfig: path.resolve(__dirname, './babelrc.test.js'),
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.css$': path.resolve(__dirname, './test/cssTransform.js'),
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': path.resolve(__dirname, './test/fileTransform.js'),
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    "'^.+\\\\.module\\\\.(css|less|scss)$'",
  ],
  modulePaths: ['<rootDir>/src'],
  moduleNameMapper: {
    '^.+\\.module\\.css$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
};

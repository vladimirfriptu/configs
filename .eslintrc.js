'use strict';

const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: './tsconfig.json',
  },

  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'jest-enzyme',
    'plugin:jest/recommended',
    'plugin:jest/style',
    // eslint-config-prettier всегда в конце массива
    'eslint-config-prettier',
  ],

  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.d.ts', '.tsx', '.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src', './'],
      },
    },
  },

  rules: {
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['acc', 'accumulator'],
      },
    ],
    /**
     * react
     */
    'react/sort-comp': [
      'warn',
      {
        order: [
          'static-variables',
          'static-methods',
          '/^ref.*$/',
          'state',
          'instance-variables',
          'constructor',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set|remove)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'contextTypes',
            'childContextTypes',
            'componentDidMount',
            'shouldComponentUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    /**
     * @typescript-eslint
     */

    '@typescript-eslint/no-use-before-define': 'off',

    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],

    // неактуально, т.к у нас нет требований назначать горячие клавиши для каждого кликабельного элемента
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/media-has-caption': 'off',

    'jsx-a11y/no-autofocus': 'off',

    'jsx-a11y/anchor-has-content': 'error',

    'react/jsx-filename-extension': ['off', { extensions: ['.jsx', '.tsx'] }],
    // Не блокировать описание стейта через переменную класса
    'react/state-in-constructor': 'off',

    // Разрешить задавать defaultProps/propTypes как внутри класса, так и снаружи
    'react/static-property-placement': 'off',

    /**
     * Disable warnings when there is no extension of the imported file
     */
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    /**
     * Разрешать установку и использование пакетов с тестами из devDependencies
     */
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    // Максимальное количество строк в файле
    'max-lines': ['warn', { max: 250, skipBlankLines: true, skipComments: true }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: ['**/slice.ts', '**/reducer.ts', '**/slice.js', '**/reducer.js'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
  ],
};

module.exports.getConfigWithGlobals = function (globals) {
  return { ...config, globals };
};

module.exports = config;

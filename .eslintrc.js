module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    "plugin:flowtype/recommended"
  ],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': 0,
    'arrow-body-style': 0,
    'react-hooks/exhaustive-deps': 0
  },
  overrides: [
    {
      files: ['src/**/*.stories.js'],
      rules: {
        'import/no-extraneous-dependencies': 0
      },
    },
  ],
  plugins: [
    'flowtype'
  ],
  env: {
    browser: true
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
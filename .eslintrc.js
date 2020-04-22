module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': 0,
  },
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

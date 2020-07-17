module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    parserOptions: {
      warnOnUnsupportedTypeScriptVersion: false,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
      'prettier'
    ],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      'prettier/prettier': 'warn',
    }
  };

module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  globals: {
    expect: true,
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:vue-types/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue'],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}

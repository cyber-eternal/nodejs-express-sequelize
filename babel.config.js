module.exports = {
  presets: ['@babel/env'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-proposal-class-properties',
  ]
};
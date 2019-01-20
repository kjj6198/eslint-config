module.exports = {
  env: { es6: true },
  plugins: ['import'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          // ignore test file, webpack config and scripts.
          '**/__tests__/**', // jest pattern
          '**/*.test.js', // tests where the extension denotes that it is a test
          '**/*.spec.js', // tests where the extension denotes that it is a test
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
          '**/webpack.*.js',
          '**/*.dev.js' // dev scripts
        ],
        optionalDependencies: false
      }
    ]
  }
};

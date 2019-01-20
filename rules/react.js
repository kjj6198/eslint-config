module.exports = {
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    'react/forbid-prop-types': [
      // don't overuse vague prop types
      'error',
      { forbid: ['any', 'array', 'object'] }
    ],

    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-key': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: false
      }
    ],

    // always decleare React
    'react/jsx-uses-react': ['error'],
    'react/no-danger': 'warn',
    // don't setState in update, mount to prevent infinite loop.
    'react/no-did-mount-set-state': ['error'],
    'react/no-did-update-set-state': ['error'],

    'react/no-set-state': 'off',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'error',

    'react/prop-types': [
      'error',
      { ignore: ['children'], customValidators: [], skipUndeclared: false }
    ],

    'react/require-extension': ['off', { extensions: ['.jsx', '.js'] }],
    'react/require-render-return': 'error',

    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never'
      }
    ],

    // Prevent missing parentheses around multilines JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: true,
        assignment: true,
        return: true
      }
    ],
    'react/wrap-multilines': 'off', // deprecated version
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    'react/jsx-no-comment-textnodes': 'error',
    'react/no-danger-with-children': 'error',
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never'
      }
    ],

    // I know what I'm doing, so don't annoy me.
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off'
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json']
      }
    },
    react: {
      pragma: 'React',
      version: '16.0'
    }
  }
};

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:prettier/recommended',
        'plugin:react/jsx-runtime',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-unused-vars': 0,
        'import/prefer-default-export': 0,
        'import/no-named-as-default': 0,
        'no-param-reassign': 1,
        'default-param-last': 0,
        'react/no-array-index-key': 1,
        'react/prop-types': 1,
        'no-return-assign': 0,
        'no-plusplus': 1,
        'no-console': 0,
    },
}

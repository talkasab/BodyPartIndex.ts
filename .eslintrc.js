module.exports = {
    'extends': [
        'plugin:@typescript-eslint/recommended',
        '@jasson2788/eslint-config-typescript'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'jsdoc'
    ],
    'rules': {
        'camelcase': 0
    }
};
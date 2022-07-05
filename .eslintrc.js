module.exports = {
    'extends': [
        'plugin:@typescript-eslint/recommended',
        '@tim.mouskhelichvili/eslint-config-typescript'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'jsdoc'
    ]
};
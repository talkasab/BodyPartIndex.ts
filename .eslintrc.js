module.exports = {
    'extends': [
        'plugin:@typescript-eslint/recommended',
        '@tim.mouskhelichvili/eslint-config-typescript'
    ],
    'overrides': [
        {
            'files': [ '*.test.ts' ],
            'rules': {
                'max-lines-per-function': 0
            }
        } 
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
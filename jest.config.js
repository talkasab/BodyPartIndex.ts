module.exports = {
    'collectCoverageFrom': [
        'src/**/*.{ts,tsx}',
        '!src/declarations/**'
    ],
    'moduleDirectories': [
        '<rootDir>',
        './node_modules',
        './src'
    ],
    'moduleNameMapper': {
        '^lodash-es$': 'lodash',
        'src/(.*)': '<rootDir>/src/$1'
    },
    'reporters': [ 
        'default', 
        [ 
            'jest-junit', {
                'outputDirectory': 'junit'
            } 
        ]
    ],
    'setupFiles': [
        '<rootDir>/src/configs/testGlobals.ts'
    ],
    'testEnvironment': 'jsdom',
    'testMatch': [ '**/src/**/*test.(ts|tsx)' ],
    'transform': {
        '^.+\\.(ts|js)x?$': 'ts-jest'
    }
};
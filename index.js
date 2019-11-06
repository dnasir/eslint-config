module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    env: {
        browser: true,
        es6: true,
        jest: true
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint'
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts']
            }
        }
    },
    rules: {
        'prettier/prettier': [
            2,
            {
                singleQuote: true,
                trailingComma: 'none',
                printWidth: 100,
                tabWidth: 4,
                bracketSpacing: true,
                semi: true,
                htmlWhitespaceSensitivity: 'strict'
            }
        ],
        '@typescript-eslint/interface-name-prefix': [
            2,
            {
                prefixWithI: 'always',
                allowUnderscorePrefix: false
            }
        ],
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-inferrable-types': 0,
        'import/no-unresolved': 0,
        'no-extra-boolean-cast': 0,
        'import/no-named-as-default': 0,
        'import/no-duplicates': 0,
        'import/named': 0
    }
};

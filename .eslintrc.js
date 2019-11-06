const path = require('path');

module.exports = {
    extends: [path.resolve('./index.js')],
    env: {
        node: true
    },
    rules: {
        '@typescript-eslint/no-var-requires': 0
    }
};

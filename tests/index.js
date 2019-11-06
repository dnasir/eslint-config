const path = require('path');
const requireIndex = require('requireindex');
const config = require('../index');
const configTester = require('eslint-config-rule-tester');
const rules = requireIndex(path.resolve(__dirname, './rules'));

// disable the following rules for our tests
config.rules = {
    ...config.rules,
    'no-var': 0,
    'no-undef': 0,
    'no-redeclare': 0,
    'prefer-const': 0,
    '@typescript-eslint/no-unused-vars': 0
};

// we want to iterate over the rules and bring in their matching tests
Object.keys(rules).forEach(rule => {
    const test = require(path.resolve(__dirname, './rules/', rule));
    configTester(rule, config, test);
});

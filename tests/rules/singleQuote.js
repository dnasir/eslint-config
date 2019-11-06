module.exports = {
    valid: [
        `const foo = 'bar';
`,
        `var backtick = \`back
tick\`;
`
    ],
    invalid: [
        {
            code: `const foo = "bar";
`,
            errors: ['Replace `"bar"` with `\'bar\'`']
        }
    ]
};

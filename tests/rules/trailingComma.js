module.exports = {
    valid: [
        `var foo = {
    bar: 'baz',
    qux: 'quux'
};
`,
        `var arr = [1, 2];
`,
        `foo({
    bar: 'baz',
    qux: 'quux'
});
`
    ],
    invalid: [
        {
            code: `var foo = {
    bar: 'baz',
    qux: 'quux',
};
`,
            errors: ['Delete `,`']
        },
        {
            code: `var arr = [1, 2,];
`,
            errors: ['Delete `,`']
        },
        {
            code: `foo({
    bar: 'baz',
    qux: 'quux',
});
`,
            errors: ['Delete `,`']
        }
    ]
};

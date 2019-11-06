module.exports = {
    valid: [
        `bridge.callHandler('getAppVersion', 'test23', function(responseData) {
    window.ah.mobileAppVersion = responseData;
});
`,
        `switch (a) {
    case 'a':
        break;
    case 'b':
        break;
}
`,
        `var a, b, c;
let a, b, c;
const a = 1,
    b = 2,
    c = 3;
`
    ],
    invalid: [
        {
            code: `bridge.callHandler('getAppVersion', 'test23', function(responseData) {
	window.ah.mobileAppVersion = responseData;
});
`,
            errors: ['Replace `↹` with `····`']
        },
        {
            code: `bridge.callHandler('getAppVersion', 'test23', function(responseData) {
  window.ah.mobileAppVersion = responseData;
});
`,
            errors: ['Insert `··`']
        },
        {
            code: `switch (a) {
  case 'a':
      break;
  case 'b':
      break;
}
`,
            errors: ['Insert `··`', 'Insert `··`', 'Insert `··`', 'Insert `··`']
        }
    ]
};

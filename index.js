module.exports = {
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "plugins": ["react", "prettier", "@typescript-eslint", "react-hooks"],
  "extends": [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  "rules": {
    "prettier/prettier": [
      0,
      {
        "singleQuote": true,
        "trailingComma": "es5",
        "printWidth": 100,
        "tabWidth": 4,
        "bracketSpacing": true
      }
    ],
    "@typescript-eslint/interface-name-prefix": [2, {
      "prefixWithI": "always",
      "allowUnderscorePrefix": false
    }],
    "import/no-unresolved": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "no-extra-boolean-cast": 0,
    "import/no-named-as-default": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "import/no-duplicates": 0,
    "import/named": 0
  }
};
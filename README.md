# geta-eslint-config

Generic eslint config Geta uses in their frontend projects.

## Usage

### Install

#### NPM

```cmd
npm install geta-eslint-config
```

#### Yarn

```cmd
yarn add geta-eslint-config
```

### Update your .eslintrc file

1. If you don't already have one, create a .eslintrc file.
2. Add the following to the config:
```json
{
  "extends": ["geta-eslint-config"]
}
```

Note that this config does not include parsers or non-generic things, so you might 
need to define a parser in your own config.
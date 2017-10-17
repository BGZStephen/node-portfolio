module.exports = {
  "env": {
    "node": true,
    "browser": false,
    "es6": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "rules": {
    "linebreak-style": [
        "error",
        "unix"
    ],
    "quotes": [
        "error",
        "single"
    ],
    "semi": [
        "error",
        "always"
    ],
    "no-unused-vars": [
      "error",
      { "varsIgnorePattern": "global" }
    ]
  },
  "globals": {
    "ENV": true,
  }
};

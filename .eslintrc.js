module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "import", "jsx-a11y", "simple-import-sort"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "indent": "off",
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "linebreak-style": ["error", "unix"],
    "simple-import-sort/imports": "error"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};

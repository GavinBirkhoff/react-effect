module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    // disable the rule for all files
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",

    "no-unused-vars": "warn",
    "prettier/prettier": "error",
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
      },
    },
  ],
}

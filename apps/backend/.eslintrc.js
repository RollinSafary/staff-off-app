module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "google",
    "plugin:prettier/recommended",
    "prettier", // ✅ ensures Prettier rules override conflicting ESLint rules
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.base.json"],
    sourceType: "module",
  },
  ignorePatterns: ["/lib/**/*", "/generated/**/*", ".eslintrc.js"],
  plugins: ["@typescript-eslint", "import", "prettier"], // ✅ add prettier here
  rules: {
    quotes: ["error", "double"],
    indent: ["error", 2],
    "import/no-unresolved": 0,
    "prettier/prettier": "error", // ✅ enforce Prettier formatting as ESLint errors
  },
};

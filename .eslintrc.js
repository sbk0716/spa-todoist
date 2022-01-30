module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    /**
     * [default extends]
     * extends moved from eslintConfig in package.json.
     */
    "react-app",
    "react-app/jest",
    /**
     * [default extends]
     * extends added when executing `eslint --init` command.
     */
    "plugin:react/recommended",
    "airbnb",
    /**
     * [custom extends]
     * Set eslint-config-prettier.
     * add "prettier" to the "extends" array in your .eslintrc.* file.
     * Make sure to put it last, so it gets the chance to override other configs.
     */
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
};

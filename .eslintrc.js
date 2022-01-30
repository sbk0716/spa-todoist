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
     * [eslint-plugin-import]
     */
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    /**
     * [typescript-eslint]
     */
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    /**
     * [eslint-config-prettier]
     */
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    /**
     * [typescript-eslint]
     */
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    /**
     * [eslint-plugin-import]
     */
    "import",
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "prefer-const": "error",
    /**
     * [react/*]
     */
    "react/jsx-no-useless-fragment": "off",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    /**
     * [no-use-before-define]
     */
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    /**
     * [eslint-plugin-import]
     */
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    /**
     * [import/*]
     */
    "import/prefer-default-export": "off",
  },
  settings: {
    /**
     * [eslint-plugin-import]
     */
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};

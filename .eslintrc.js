module.exports = {
  root: true,
  overrides: [
    {
      files: ["./*.js", "./.*.js"],
      env: { node: true },
      parserOptions: { sourceType: "module", ecmaVersion: 2020 },
      extends: ["eslint:recommended"],
    },

    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
      env: { es6: true, browser: true },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
        extraFileExtensions: [".svelte"],
      },
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      plugins: ["svelte3", "@typescript-eslint"],
      settings: { "svelte3/typescript": require("typescript") },
    },

    {
      files: ["src/**/*.ts", "types/**/*.ts"],
      env: { es6: true, browser: true },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
        extraFileExtensions: [".svelte"],
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      plugins: ["svelte3", "@typescript-eslint"],
      settings: { "svelte3/typescript": require("typescript") },
    },
  ],
};

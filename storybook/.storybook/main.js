const sveltePreprocess = require("svelte-preprocess");
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    console.log(
      "path:",
      path.resolve(__dirname, "..", "node_modules", "svelte")
    );
    console.log("__dirname:", __dirname);
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        svelte: path.resolve(__dirname, "..", "node_modules", "svelte"),
      },
      mainFields: ["svelte", "browser", "module", "main"],
    };
    return config;
  },
  svelteOptions: {
    preprocess: sveltePreprocess(),
  },
};

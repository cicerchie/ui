const sveltePreprocess = require("svelte-preprocess");
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.svelte"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
  ],

  // From https://github.com/storybookjs/storybook/blob/master/examples/svelte-kitchen-sink/.storybook/main.js
  svelteOptions: {
    preprocess: sveltePreprocess(),
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: [/\.stories\.js$/, /index\.js$/],
      use: [require.resolve("@storybook/source-loader")],
      include: [path.resolve(__dirname, "../src")],
      enforce: "pre",
    });
    return config;
  },
  core: {
    builder: "webpack4",
  },
};

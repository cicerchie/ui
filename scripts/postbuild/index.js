const path = require("path");
const { emitDts } = require("svelte2tsx");

emitDts({
  svelteShimsPath: require.resolve("svelte2tsx/svelte-shims.d.ts"),
  declarationDir: "dist/types",
  libRoot: path.resolve("src"),
});

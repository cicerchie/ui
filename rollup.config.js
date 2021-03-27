import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import sveltePreprocess from "svelte-preprocess";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

const sourcemap = true;

export default {
  input: "src/index.ts",
  output: [
    { file: pkg.module, format: "es", sourcemap },
    {
      file: pkg.main,
      format: "umd",
      name: pkg.name,
      sourcemap,
    },
  ],
  plugins: [
    svelte({ preprocess: sveltePreprocess() }),
    resolve(),
    typescript(),
    babel({
      babelHelpers: "bundled",
      extensions: [".svelte"],
      plugins: [["optimize-objstr", { strict: true }]],
    }),
    terser(),
  ],
};

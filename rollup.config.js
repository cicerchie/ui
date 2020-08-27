import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default {
  input: 'src',
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name: pkg.name }
  ],
  plugins: [
    svelte(),
    resolve(),
    terser()
  ]
}

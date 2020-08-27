module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
    'standard'
  ],
  plugins: ['svelte3'],
  overrides: [
    {
      files: '*.svelte',
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 0,
        'import/no-duplicates': 0,
        'import/no-mutable-exports': 0
      }
    }
  ]
}

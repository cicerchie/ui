module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/github",
    ["@semantic-release/npm", { pkgRoot: "./package" }],
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/git",
  ],
};

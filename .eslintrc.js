module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  parser: "hermes-eslint",
  plugins: ["react-hooks"],
  extends: [
    "google",
    "plugin:ft-flow/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ]
};

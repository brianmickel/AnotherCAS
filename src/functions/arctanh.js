/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_arctanh = () => run_test([
  "arctanh(0.0)",
  "0.0",

  "arctanh(0)",
  "0",

  "arctanh(tanh(x))",
  "x",
]);

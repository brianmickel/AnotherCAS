/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_sinh = () => run_test([
  "sinh(x)",
  "sinh(x)",

  "sinh(0)",
  "0",

  "sinh(arcsinh(x))",
  "x",
]);

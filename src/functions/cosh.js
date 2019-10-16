/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_cosh = () => run_test([
  "cosh(x)",
  "cosh(x)",

  "cosh(0)",
  "1",

  "cosh(arccosh(x))",
  "x",
]);

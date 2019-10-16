/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_arccosh = () => run_test([

  "arccosh(1.0)",
  "0.0",

  "arccosh(1)",
  "0",

  "arccosh(cosh(x))",
  "x",
]);



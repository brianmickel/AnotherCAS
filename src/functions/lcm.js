/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_lcm = () => run_test([

  "lcm(4,6)",
  "12",

  "lcm(4*x,6*x*y)",
  "12*x*y",

  // multiple arguments

  "lcm(2,3,4)",
  "12",
]);

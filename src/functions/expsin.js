/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_expsin = () => run_test([

  "expsin(x)",
  "1/2*i*exp(-i*x)-1/2*i*exp(i*x)",
]);

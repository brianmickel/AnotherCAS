// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_arcsinh = () => run_test([

  "arcsinh(0.0)",
  "0.0",

  "arcsinh(0)",
  "0",

  "arcsinh(sinh(x))",
  "x",
]);

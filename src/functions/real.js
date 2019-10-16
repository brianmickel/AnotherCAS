// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_real = () => run_test([

  "real(a+i*b)",
  "a",

  "real(1+exp(i*pi/3))",
  "3/2",

  "real(i)",
  "0",

  "real((-1)^(1/3))",
  "1/2",
]);

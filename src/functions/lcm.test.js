// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const {run_test} = require('../test_helpers/run_test');
export const test_lcm = () =>
  run_test([
    'lcm(4,6)',
    '12',

    'lcm(4*x,6*x*y)',
    '12*x*y',

    // multiple arguments

    'lcm(2,3,4)',
    '12',
  ]);

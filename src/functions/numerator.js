// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const {run_test} = require('../test_helpers/run_test');
export const test_numerator = () =>
  run_test([
    'numerator(2/3)',
    '2',

    'numerator(x)',
    'x',

    'numerator(1/x)',
    '1',

    'numerator(a+b)',
    'a+b',

    'numerator(1/a+1/b)',
    'a+b',
  ]);

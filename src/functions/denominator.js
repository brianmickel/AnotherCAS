// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const {run_test} = require('../test_helpers/run_test');
export const test_denominator = () =>
  run_test([
    'denominator(2/3)',
    '3',

    'denominator(x)',
    '1',

    'denominator(1/x)',
    'x',

    'denominator(a+b)',
    '1',

    'denominator(1/a+1/b)',
    'a*b',

    // denominator function expands

    'denominator(1/(x-1)/(x-2))',
    'x^2-3*x+2',
  ]);

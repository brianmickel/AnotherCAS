// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import {run_test} from '../test_helpers/run_test';
export const test_quotient = () =>
  run_test([
    'quotient(x^2+1,x+1)-x+1',
    '0',

    'quotient(a*x^2+b*x+c,d*x+e)-(-a*e/(d^2)+a*x/d+b/d)',
    '0',
  ]);

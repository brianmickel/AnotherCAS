// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import {run_test} from '../test_helpers/run_test';
export const test_imag = () =>
  run_test([
    'imag(a+i*b)',
    'b',

    'imag(1+exp(i*pi/3))',
    '1/2*3^(1/2)',

    'imag(i)',
    '1',

    'imag((-1)^(1/3))',
    '1/2*3^(1/2)',

    'imag(-i)',
    '-1',
  ]);

// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import {run_test} from '../test_helpers/run_test';
export const test_log = () =>
  run_test([
    'log(1)',
    '0',

    'log(exp(1))',
    '1',

    'log(exp(x))',
    'x',

    'exp(log(x))',
    'x',

    'log(x^2)',
    '2*log(x)',

    'log(1/x)',
    '-log(x)',

    'log(a^b)',
    'b*log(a)',

    'log(2)',
    'log(2)',

    'log(2.0)',
    '0.693147...',

    'float(log(2))',
    '0.693147...',

    'log(a*b)',
    'log(a)+log(b)',

    'log(1/3)+log(3)',
    '0',

    'log(-1)',
    'i*pi',

    'log(-1.0)',
    '3.141593...*i',
  ]);

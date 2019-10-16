// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import {run_test} from '../test_helpers/run_test';
export const test_mod = () =>
  run_test([
    'mod(2.0,3.0)',
    '2',

    'mod(-2.0,3.0)',
    '-2',

    'mod(2.0,-3.0)',
    '2',

    'mod(-2.0,-3.0)',
    '-2',

    'mod(2,3)',
    '2',

    'mod(-2,3)',
    '-2',

    'mod(2,-3)',
    '2',

    'mod(-2,-3)',
    '-2',

    'mod(a,b)',
    'mod(a,b)',

    'mod(2.0,0.0)',
    'Stop: mod function: divide by zero',

    'mod(2,0)',
    'Stop: mod function: divide by zero',

    'mod(1.2,2)',
    'Stop: mod function: cannot convert float value to integer',

    'mod(1/2,3)',
    'Stop: mod function: integer arguments expected',

    'mod(15,8.0)',
    '7',
  ]);

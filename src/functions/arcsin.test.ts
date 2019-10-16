// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import {run_test} from '../test_helpers/run_test';
export const test_arcsin = () =>
  run_test([
    'arcsin(-1)',
    '-1/2*pi',

    'arcsin(-1/2)',
    '-1/6*pi',

    'arcsin(0)',
    '0',

    'arcsin(1/2)',
    '1/6*pi',

    'arcsin(1)',
    '1/2*pi',

    'arcsin(sin(-1/2*pi))',
    '-1/2*pi',

    'arcsin(sin(-1/6*pi))',
    '-1/6*pi',

    'arcsin(sin(0))',
    '0',

    'arcsin(sin(1/6*pi))',
    '1/6*pi',

    'arcsin(sin(1/2*pi))',
    '1/2*pi',

    'arcsin(sin(x))',
    'x',

    'arcsin(1/sqrt(2))',
    '1/4*pi',

    'arcsin(-1/sqrt(2))',
    '-1/4*pi',

    'arcsin(sin(1/4*pi))',
    '1/4*pi',

    'arcsin(sin(-1/4*pi))',
    '-1/4*pi',
  ]);

// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_floor = () =>
  run_test([
    'floor(a)',
    'floor(a)',

    'floor(a+b)',
    'floor(a+b)',

    'floor(5/2)',
    '2',

    'floor(4/2)',
    '2',

    'floor(3/2)',
    '1',

    'floor(2/2)',
    '1',

    'floor(1/2)',
    '0',

    'floor(0/2)',
    '0',

    'floor(-1/2)',
    '-1',

    'floor(-2/2)',
    '-1',

    'floor(-3/2)',
    '-2',

    'floor(-4/2)',
    '-2',

    'floor(-5/2)',
    '-3',

    'floor(5/2.0)',
    '2.0',

    'floor(4/2.0)',
    '2.0',

    'floor(3/2.0)',
    '1.0',

    'floor(2/2.0)',
    '1.0',

    'floor(1/2.0)',
    '0.0',

    'floor(0.0)',
    '0.0',

    'floor(-1/2.0)',
    '-1.0',

    'floor(-2/2.0)',
    '-1.0',

    'floor(-3/2.0)',
    '-2.0',

    'floor(-4/2.0)',
    '-2.0',

    'floor(-5/2.0)',
    '-3.0',
  ]);

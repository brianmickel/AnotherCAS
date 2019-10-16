// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_ceiling = () =>
  run_test([
    'ceiling(a)',
    'ceiling(a)',

    'ceiling(a+b)',
    'ceiling(a+b)',

    'ceiling(5/2)',
    '3',

    'ceiling(4/2)',
    '2',

    'ceiling(3/2)',
    '2',

    'ceiling(2/2)',
    '1',

    'ceiling(1/2)',
    '1',

    'ceiling(0/2)',
    '0',

    'ceiling(-1/2)',
    '0',

    'ceiling(-2/2)',
    '-1',

    'ceiling(-3/2)',
    '-1',

    'ceiling(-4/2)',
    '-2',

    'ceiling(-5/2)',
    '-2',

    'ceiling(5/2.0)',
    '3.0',

    'ceiling(4/2.0)',
    '2.0',

    'ceiling(3/2.0)',
    '2.0',

    'ceiling(2/2.0)',
    '1.0',

    'ceiling(1/2.0)',
    '1.0',

    'ceiling(0.0)',
    '0.0',

    'ceiling(-1/2.0)',
    '0.0',

    'ceiling(-2/2.0)',
    '-1.0',

    'ceiling(-3/2.0)',
    '-1.0',

    'ceiling(-4/2.0)',
    '-2.0',

    'ceiling(-5/2.0)',
    '-2.0',
  ]);

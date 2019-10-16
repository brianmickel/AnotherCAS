// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_erf = () =>
  run_test([
    'erf(a)',
    'erf(a)',

    'erf(0.0) + 1',
    '1.0',

    'float(erf(0))',
    '0.0',

    'erf(0.0)',
    '0.0',

    'erf(-0.0)',
    '0.0',

    'erf(0)',
    '0',

    'erf(-0)',
    '0',

    'float(erf(0)) + 1',
    '1.0',

    'float(erf(1))',
    '0.842701...',
  ]);

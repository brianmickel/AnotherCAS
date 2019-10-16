// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_erfc = () =>
  run_test([
    'erfc(a)',
    'erfc(a)',

    'erfc(0.0)',
    '1.0',

    'float(erfc(0))',
    '1.0',

    'erfc(0.0)',
    '1.0',

    'erfc(-0.0)',
    '1.0',

    'erfc(0)',
    '1',

    'erfc(-0)',
    '1',

    'float(erfc(1))',
    '0.157299...',
  ]);

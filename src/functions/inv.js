// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_inv = () =>
  run_test([
    'inv(a)',
    'inv(a)',

    'inv(inv(a))',
    'a',

    'inv(inv(inv(a)))',
    'inv(a)',

    'inv(inv(inv(inv(a))))',
    'a',

    'inv(a·b·c)',
    'inner(inv(c),inner(inv(b),inv(a)))',

    'inv(I)',
    'I',
  ]);

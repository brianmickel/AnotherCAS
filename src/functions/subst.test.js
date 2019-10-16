// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const {run_test} = require('../test_helpers/run_test');
export const test_subst = () =>
  run_test(['subst((-1)^(1/2),i,-3 + 10*3^(1/2)*i/9)', '-3+10/9*i*3^(1/2)']);

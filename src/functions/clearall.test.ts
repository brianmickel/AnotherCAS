// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import {run_test} from '../test_helpers/run_test';
export const test_clearall = () =>
  run_test(['a = 1', '', 'a', '1', 'clearall', '', 'a', 'a']);
// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import {run_test} from '../test_helpers/run_test';
export const test_cofactor = () =>
  run_test([
    'cofactor([[1,2],[3,4]],1,1)',
    '4',

    'cofactor([[1,2],[3,4]],1,2)',
    '-3',

    'cofactor([[1,2],[3,4]],2,1)',
    '-2',

    'cofactor([[1,2],[3,4]],2,2)',
    '1',

    'cofactor([[1,2,3],[4,5,6],[7,8,9]],1,2)',
    '6',
  ]);

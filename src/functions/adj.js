// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_adj = () =>
  run_test([
    'adj([[a,b],[c,d]])',
    '[[d,-b],[-c,a]]',

    'adj([[1,2],[3,4]])',
    '[[4,-2],[-3,1]]',

    'adj([[2,3,-2,5],[6,-2,1,4],[5,10,3,-2],[-1,2,2,3]])',
    '[[-4,-177,-73,194],[-117,117,-99,-27],[310,-129,-44,-374],[-130,-51,71,-211]]',
  ]);

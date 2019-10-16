// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_for = () => run_test([

  "x=0\ny=2\nfor(do(x=sqrt(2+x),y=2*y/x), k,1,9)\nfloat(y)",
  "3.141588...",

  "for(do(x=sqrt(2+x),y=2*y/x),k,1,iterations)",
  "for(do(x=sqrt(2+x),y=2*y/x),k,1,iterations)",

]);

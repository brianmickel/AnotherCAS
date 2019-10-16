// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_strings = () => run_test([

  "\"hey\" + \"you\"",
  "\"hey\"+\"you\"",

  "\"hey\" + \"hey\"",
  "2*\"hey\"",

  "\"hey\" / \"hey\"",
  "1",

  "\"hey\" - \"hey\"",
  "0",

  "\"hey\" * \"hey\"",
  "\"hey\"^2",

  "\"aaaaaaaaaa\nbbbbbbbbbb\"",
  "\"aaaaaaaaaa\nbbbbbbbbbb\"",

]);

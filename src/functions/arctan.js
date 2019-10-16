// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_arctan = () => run_test([

  "arctan(x)",
  "arctan(x)",

  "arctan(-x)",
  "-arctan(x)",

  "arctan(0)",
  "0",

  "arctan(tan(x))",
  "x",

  "arctan(1/sqrt(3))-pi/6",  // 30 degrees
  "0",

  "arctan(1)-pi/4",    // 45 degrees
  "0",

  "arctan(sqrt(3))-pi/3",    // 60 degrees
  "0",

  "arctan(a-b)",
  "arctan(a-b)",

  "arctan(b-a)",
  "-arctan(a-b)",

  "arctan(tan(x))",
  "x",
]);

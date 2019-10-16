/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_exp = () => run_test([

  "exp(-3/4*i*pi)",
  //"exp(-3/4*i*pi)",
  "-1/2*2^(1/2)-1/2*i*2^(1/2)",

  "simplify(exp(-3/4*i*pi))",
  //"exp(-3/4*i*pi)",
  //"-1/2*2^(1/2)-1/2*i*2^(1/2)",
  "-(1+i)/(2^(1/2))",

]);

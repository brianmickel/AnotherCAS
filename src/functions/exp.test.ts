import { runIndividualTests } from '../test_helpers/run_test';

export function test_exp() {
  runIndividualTests([
    ['exp(-3/4*i*pi)', '-1/2*2^(1/2)-1/2*i*2^(1/2)'], //"exp(-3/4*i*pi)",
    [
      'simplify(exp(-3/4*i*pi))',
      //"exp(-3/4*i*pi)",
      //"-1/2*2^(1/2)-1/2*i*2^(1/2)",
      '-(1+i)/(2^(1/2))',
    ],
  ]);
}

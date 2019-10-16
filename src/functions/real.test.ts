import { runIndividualTests } from '../test_helpers/run_test';

export function test_real() {
  runIndividualTests([
    ['real(a+i*b)', 'a'],
    ['real(1+exp(i*pi/3))', '3/2'],
    ['real(i)', '0'],
    ['real((-1)^(1/3))', '1/2'],
  ]);
}

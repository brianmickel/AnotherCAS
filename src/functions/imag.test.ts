import { runIndividualTests } from '../test_helpers/run_test';

export function test_imag() {
  runIndividualTests([
    ['imag(a+i*b)', 'b'],
    ['imag(1+exp(i*pi/3))', '1/2*3^(1/2)'],
    ['imag(i)', '1'],
    ['imag((-1)^(1/3))', '1/2*3^(1/2)'],
    ['imag(-i)', '-1'],
  ]);
}

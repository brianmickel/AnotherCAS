import { runIndividualTests } from '../test_helpers/run_test';

export function test_arcsinh() {
  runIndividualTests([
    ['arcsinh(0.0)', '0.0'],
    ['arcsinh(0)', '0'],
    ['arcsinh(sinh(x))', 'x'],
  ]);
}

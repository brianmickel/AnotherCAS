import { runIndividualTests } from '../../test_helpers/run_test';

export function test_sinh() {
  runIndividualTests([
    ['sinh(x)', 'sinh(x)'],
    ['sinh(0)', '0'],
    ['sinh(arcsinh(x))', 'x'],
  ]);
}

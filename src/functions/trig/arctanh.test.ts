import { runIndividualTests } from '../../test_helpers/run_test';

export function test_arctanh() {
  runIndividualTests([
    ['arctanh(0.0)', '0.0'],
    ['arctanh(0)', '0'],
    ['arctanh(tanh(x))', 'x'],
  ]);
}

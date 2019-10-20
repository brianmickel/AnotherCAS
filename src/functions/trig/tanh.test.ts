import { runIndividualTests } from '../../test_helpers/run_test';

export function test_tanh() {
  runIndividualTests([
    ['tanh(x)', 'tanh(x)'],
    ['tanh(0)', '0'],
    ['tanh(arctanh(x))', 'x'],
  ]);
}

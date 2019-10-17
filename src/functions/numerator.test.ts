import { runIndividualTests } from '../test_helpers/run_test';

export function test_numerator() {
  runIndividualTests([
    ['numerator(2/3)', '2'],
    ['numerator(x)', 'x'],
    ['numerator(1/x)', '1'],
    ['numerator(a+b)', 'a+b'],
    ['numerator(1/a+1/b)', 'a+b'],
  ]);
}

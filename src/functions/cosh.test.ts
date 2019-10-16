import { runIndividualTests } from '../test_helpers/run_test';

export function test_cosh() {
  runIndividualTests([
    ['cosh(x)', 'cosh(x)'],
    ['cosh(0)', '1'],
    ['cosh(arccosh(x))', 'x'],
  ]);
}

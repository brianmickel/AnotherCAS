import { runIndividualTests } from '../test_helpers/run_test';
export function test_arccosh() {
  runIndividualTests([
    ['arccosh(1.0)', '0.0'],
    ['arccosh(1)', '0'],
    ['arccosh(cosh(x))', 'x'],
  ]);
}

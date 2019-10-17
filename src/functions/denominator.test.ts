import { runIndividualTests } from '../test_helpers/run_test';

export function test_denominator() {
  runIndividualTests([
    ['denominator(2/3)', '3'],
    ['denominator(x)', '1'],
    ['denominator(1/x)', 'x'],
    ['denominator(a+b)', '1'],
    ['denominator(1/a+1/b)', 'a*b'],
    // denominator function expands
    ['denominator(1/(x-1)/(x-2))', 'x^2-3*x+2'],
  ]);
}

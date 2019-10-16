import { runIndividualTests } from '../test_helpers/run_test';

export function test_bessely() {
  runIndividualTests([['bessely(x,n)', 'bessely(x,n)']]);
}

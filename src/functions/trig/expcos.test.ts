import { runIndividualTests } from '../../test_helpers/run_test';

export function test_expcos() {
  runIndividualTests([['expcos(x)', '1/2*exp(-i*x)+1/2*exp(i*x)']]);
}

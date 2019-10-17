import { runIndividualTests } from '../test_helpers/run_test';

export function test_expsin() {
  runIndividualTests([['expsin(x)', '1/2*i*exp(-i*x)-1/2*i*exp(i*x)']]);
}

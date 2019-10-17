import { runIndividualTests } from '../test_helpers/run_test';

export function test_dirac() {
  runIndividualTests([['dirac(-x)', 'dirac(x)']]);
}

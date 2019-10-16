import { runIndividualTests } from '../test_helpers/run_test';

export function test_sgn() {
  runIndividualTests([['sgn(-3)', '-1'], ['sgn(0)', '0'], ['sgn(3)', '1']]);
}

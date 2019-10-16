import { runIndividualTests } from '../test_helpers/run_test';

export function test_lcm() {
  runIndividualTests([
    ['lcm(4,6)', '12'],
    ['lcm(4*x,6*x*y)', '12*x*y'],
    // multiple arguments
    ['lcm(2,3,4)', '12'],
  ]);
}

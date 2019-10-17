import { runIndividualTests } from '../test_helpers/run_test';

export function test_choose() {
  runIndividualTests([
    ['choose(52,5)', '2598960'],
    ['choose(n,k)', 'n!/(k!*(-k+n)!)'],
    ['choose(0,k)', '1/(k!*(-k)!)'],
    ['choose(n,0)', '1'],
    ['choose(-1,k)', '0'],
    ['choose(n,-1)', '0'],
  ]);
}

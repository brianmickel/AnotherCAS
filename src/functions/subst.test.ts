import { runIndividualTests } from '../test_helpers/run_test';

export function test_subst() {
  runIndividualTests([
    ['subst((-1)^(1/2),i,-3 + 10*3^(1/2)*i/9)', '-3+10/9*i*3^(1/2)'],
  ]);
}

import { runIndividualTests } from '../test_helpers/run_test';

export function test_signs_in_rationals() {
  runIndividualTests([
    // I found out about basic mistakes in
    // these very very late, better to
    // have those tests early on.
    ['1/1', '1'],
    ['-1/1', '-1'],
    ['1/(-1)', '-1'],
    ['(-1)/(-1)', '1'],
  ]);
}

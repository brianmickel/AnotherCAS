import { runSequentialTests } from '../test_helpers/run_test';

export function test_clearall() {
  runSequentialTests([['a = 1', ''], ['a', '1'], ['clearall', ''], ['a', 'a']]);
}

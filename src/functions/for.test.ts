import { runSequentialTests } from '../test_helpers/run_test';

export function test_for() {
  runSequentialTests([
    ['x=0\ny=2\nfor(do(x=sqrt(2+x),y=2*y/x), k,1,9)\nfloat(y)', '3.141588...'],
    [
      'for(do(x=sqrt(2+x),y=2*y/x),k,1,iterations)',
      'for(do(x=sqrt(2+x),y=2*y/x),k,1,iterations)',
    ],
  ]);
}

import { runIndividualTests } from '../test_helpers/run_test';

export function test_cofactor() {
  runIndividualTests([
    ['cofactor([[1,2],[3,4]],1,1)', '4'],
    ['cofactor([[1,2],[3,4]],1,2)', '-3'],
    ['cofactor([[1,2],[3,4]],2,1)', '-2'],
    ['cofactor([[1,2],[3,4]],2,2)', '1'],
    ['cofactor([[1,2,3],[4,5,6],[7,8,9]],1,2)', '6'],
  ]);
}

import { runIndividualTests } from '../test_helpers/run_test';

export function test_erfc() {
  runIndividualTests([
    ['erfc(a)', 'erfc(a)'],
    ['erfc(0.0)', '1.0'],
    ['float(erfc(0))', '1.0'],
    ['erfc(0.0)', '1.0'],
    ['erfc(-0.0)', '1.0'],
    ['erfc(0)', '1'],
    ['erfc(-0)', '1'],
    ['float(erfc(1))', '0.157299...'],
  ]);
}

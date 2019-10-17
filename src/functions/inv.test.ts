import { runIndividualTests } from '../test_helpers/run_test';

export function test_inv() {
  runIndividualTests([
    ['inv(a)', 'inv(a)'],
    ['inv(inv(a))', 'a'],
    ['inv(inv(inv(a)))', 'inv(a)'],
    ['inv(inv(inv(inv(a))))', 'a'],
    ['inv(a·b·c)', 'inner(inv(c),inner(inv(b),inv(a)))'],
    ['inv(I)', 'I'],
  ]);
}

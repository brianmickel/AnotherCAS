import { runIndividualTests } from '../test_helpers/run_test';

export function test_strings() {
  runIndividualTests([
    ['"hey" + "you"', '"hey"+"you"'],
    ['"hey" + "hey"', '2*"hey"'],
    ['"hey" / "hey"', '1'],
    ['"hey" - "hey"', '0'],
    ['"hey" * "hey"', '"hey"^2'],
    ['"aaaaaaaaaa\nbbbbbbbbbb"', '"aaaaaaaaaa\nbbbbbbbbbb"'],
  ]);
}

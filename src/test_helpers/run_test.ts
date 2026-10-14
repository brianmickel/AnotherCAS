/// <reference types="vitest/globals" />
import * as algebrite from '../index';

let _groupCounter = 0;

// Sequential and run_test groups run every case in one test, and the largest groups take
// ~3s on a throttled CI runner, too close to Vitest's 5s default.
const SEQUENTIAL_GROUP_TIMEOUT_MS = 30_000;

export function runIndividualTests(testcases: [string, string][]): void {
  const groupId = ++_groupCounter;
  describe(`test group ${groupId}: ${testcases[0][0]}`, () => {
    testcases.forEach(([input, expected]) => {
      algebrite.run('clearall');
      it(`${input} should return "${expected}"`, () => {
        let result: string | undefined;
        try {
          result = algebrite.run(input);
        } catch (error) {
          console.log(error);
          algebrite.init();
        }
        expect(result).toBe(expected);
      });
      algebrite.run('clearall');
    });
  });
}

export function runSequentialTests(testcases: [string, string][]): void {
  const groupId = ++_groupCounter;
  describe(`sequential group ${groupId}: ${testcases[0][0]}`, () => {
    it(`runSequentialTests testing ${testcases[0]}`, () => {
      algebrite.init();
      testcases.forEach(([input, expected]) => {
        let result: string | undefined;
        try {
          result = algebrite.run(input);
        } catch (error) {
          console.log(error);
          algebrite.init();
        }
        expect(result).toBe(expected);
      });
      algebrite.run('clearall');
    }, SEQUENTIAL_GROUP_TIMEOUT_MS);
  });
}

function unzippifyArray(s: string[]): [string, string][] {
  if (s.length % 2 !== 0) {
    throw new Error('Unmatched input, expected pairs');
  }
  const pairs: [string, string][] = [];
  for (let i = 0; i < s.length; i += 2) {
    pairs.push([s[i], s[i + 1]]);
  }
  return pairs;
}

export function run_test(s: string[]): void {
  const tests = unzippifyArray(s);
  const groupId = ++_groupCounter;
  describe(`run_test group ${groupId}: ${s[0]}`, () => {
    it(`run_test testing ${s[0]}`, () => {
      algebrite.run('clearall');
      algebrite.run('e=quote(e)');
      tests.forEach(([input, expected]) => {
        let result: string | undefined;
        try {
          result = algebrite.run(input);
        } catch (error) {
          console.log(error);
          algebrite.init();
        }
        expect(result).toBe(expected);
      });
      algebrite.run('clearall');
    }, SEQUENTIAL_GROUP_TIMEOUT_MS);
  });
}

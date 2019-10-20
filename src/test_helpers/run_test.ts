const algebrite = require('../index');

export function runIndividualTests(testcases: [string, string][]): void {
  testcases.forEach(([input, expected]) => {
    algebrite.run('clearall');
    it(`${input} should return "${expected}"`, () => {
      let result: any;
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
}

export function runSequentialTests(testcases: [string, string][]): void {
  it(`runSequentialTests testing ${testcases[0]}`, () => {
    algebrite.init();
    testcases.forEach(([input, expected]) => {
      let result: any;
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
  it(`run_test testing ${s[0]}`, () => {
    algebrite.run('clearall');
    algebrite.run('e=quote(e)');
    tests.forEach(([input, expected]) => {
      let result: any;
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
}

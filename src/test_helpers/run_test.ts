const algebrite = require('../index');

/*
function unzippifyArray(s: string[]): [string, string][] {
  if (s.length % 2 !== 0){
    throw new Error('Unmatched input, expected pairs');
  }
  const pairs: [string, string][] = [];
  for (let i = 0; i < s.length; i += 2){
    pairs.push([s[i], s[i+1]])
  }
  return pairs;
}
*/
export function runIndividualTests(testcases: [string, string][]): void {
  testcases.forEach(([input, expected]) => {
    algebrite.run('clearall');
    algebrite.run('e=quote(e)');
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
  });
}

export function run_test(s: string[]): void {
  it(`run_test testing ${s[0]}`, () => {
    const length = s.length;
    algebrite.run('clearall');
    algebrite.run('e=quote(e)');
    for (let i = 0; i < length; i += 2) {
      const input = s[i];
      const expected = s[i + 1];

      let result: any;
      try {
        result = algebrite.run(input);
      } catch (error) {
        console.log(error);
        algebrite.init();
      }
      expect(result).toBe(expected);
    }
  });
}

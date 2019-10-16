// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS202: Simplify dynamic range loops
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_mpow = function() {
  logout('testing mpow\n');

  // small numbers

  for (let i = -10, asc = -10 <= 10; asc ? i < 10 : i > 10; asc ? i++ : i--) {
    const a = mint(i);
    let x = 1;
    for (let j = 0; j < 10; j++) {
      const b = mpow(a, j);
      const c = mint(x);
      if (mcmp(b, c) !== 0) {
        throw new Error('failed test_mpow');
      }
      x *= i;
    }
  }

  return logout('ok\n');
};

//endif

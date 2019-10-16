// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_mprime = function() {
  let i = 0;
  let k = 0;
  const m = 0;
  let t = 0;
  logout('test mprime\n');
  k = 0;
  for (i = 0; i < 10000; i++) {
    const n = mint(i);
    t = mprime(n);
    if (i === primetab[k]) {
      if (t === 0) {
        throw new Error('failed for prime number ' + i);
      }
      k++;
    } else if (t === 1) {
      throw new Error('failed for composite number ' + i);
    }
  }
  return logout('ok\n');
};

//endif

// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_mgcd = function() {
  logout('testing mgcd\n');
  for (let i = 1; i < 100; i++) {
    const a = mint(i);
    for (let j = 1; j < 100; j++) {
      const b = mint(j);
      const c = mgcd(a, b);
      const d = egcd(a, b);
      if (mcmp(c, d) !== 0) {
        throw new Error('test_mgcd failed');
      }
    }
  }
  return logout('ok\n');
};

// Euclid's algorithm

var egcd = function(a, b) {
  let sign_ = 0;
  if (MZERO(b)) {
    stop('divide by zero');
  }
  //b = mcopy(b)
  if (MZERO(a)) {
    return b;
  }
  sign_ = MSIGN(b);
  //a = mcopy(a)
  while (!MZERO(b)) {
    const c = mmod(a, b);
    //mfree(a)
    a = b;
    b = c;
  }
  a = setSignTo(a, sign_);
  return a;
};

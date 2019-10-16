// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS202: Simplify dynamic range loops
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_mmul = function() {
  let asc;
  let i = 0;
  let j = 0;
  const m = 0;
  logout('test mmul\n');
  for (
    i = -100, asc = -100 <= 100;
    asc ? i <= 100 : i >= 100;
    asc ? i++ : i--
  ) {
    var asc1;
    for (
      j = -100, asc1 = -100 <= 100;
      asc1 ? j <= 100 : j >= 100;
      asc1 ? j++ : j--
    ) {
      test_mmulf(i, j, i * j);
    }
  }
  return logout('ok\n');
};

var test_mmulf = function(na, nb, nc) {
  const a = mint(na);
  const b = mint(nb);
  const c = mint(nc);

  const d = mmul(a, b);

  if (mcmp(c, d) === 0) {
    return;
  } else {
    throw new Error('test_mmulf error');
  }
};

const test_mdiv = function() {
  let asc;
  let i = 0;
  let j = 0;
  const m = 0;
  logout('test mdiv\n');
  for (
    i = -100, asc = -100 <= 100;
    asc ? i <= 100 : i >= 100;
    asc ? i++ : i--
  ) {
    var asc1;
    for (
      j = -100, asc1 = -100 <= 100;
      asc1 ? j <= 100 : j >= 100;
      asc1 ? j++ : j--
    ) {
      if (j) {
        var expectedResult;
        if (i / j > 0) {
          expectedResult = Math.floor(i / j);
        } else {
          expectedResult = Math.ceil(i / j);
        }
        test_mdivf(i, j, expectedResult);
      }
    }
  }
  return logout('ok\n');
};

var test_mdivf = function(na, nb, nc) {
  const a = mint(na);
  const b = mint(nb);
  const c = mint(nc);

  const d = mdiv(a, b);

  if (mcmp(c, d) === 0) {
    return;
  } else {
    console.log('debugger');
    throw new Error('test_mdivf error');
  }
};

const test_mmod = function() {
  let asc;
  let i = 0;
  let j = 0;
  const m = 0;
  logout('test mmod\n');
  for (
    i = -100, asc = -100 <= 100;
    asc ? i <= 100 : i >= 100;
    asc ? i++ : i--
  ) {
    var asc1;
    for (
      j = -100, asc1 = -100 <= 100;
      asc1 ? j <= 100 : j >= 100;
      asc1 ? j++ : j--
    ) {
      if (j) {
        test_mmodf(i, j, i % j);
      }
    }
  }
  return logout('ok\n');
};

var test_mmodf = function(na, nb, nc) {
  const a = mint(na);
  const b = mint(nb);
  const c = mint(nc);

  const d = mmod(a, b);

  if (mcmp(c, d) === 0) {
    return;
  } else {
    throw new Error('test_mmodf error');
  }
};

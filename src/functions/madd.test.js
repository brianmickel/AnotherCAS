// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS202: Simplify dynamic range loops
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
export const test_madd = function() {
  let asc;
  let i = 0;
  if (DEBUG) {
    console.log('test madd');
  }
  const m = mtotal;
  for (i = -100, asc = -100 <= 100; asc ? i < 100 : i > 100; asc ? i++ : i--) {
    for (
      let j = -100, asc1 = -100 <= 100;
      asc1 ? j < 100 : j > 100;
      asc1 ? j++ : j--
    ) {
      test_maddf(i, j, i + j);
    }
  }
  //if (m != mtotal)
  //  logout("memory leak\n")
  //  errout()
  return logout('ok\n');
};

let test_maddf = function(na, nb, nc) {
  const a = mint(na);
  const b = mint(nb);
  const c = mint(nc);

  const d = madd(a, b);

  if (mcmp(c, d) === 0) {
    return;
  } else {
    throw new Error('test_maddf');
  }

  //sprintf(logbuf, "%d %d %d %d\n", na, nb, nc, *d * MSIGN(d))
  logout(logbuf);
  return errout();
};

export const test_msub = function() {
  let asc;
  let i = 0;
  logout('test msub\n');
  const m = mtotal;
  for (
    i = -100, asc = -100 <= 100;
    asc ? i <= 100 : i >= 100;
    asc ? i++ : i--
  ) {
    for (
      let j = -100, asc1 = -100 <= 100;
      asc1 ? j <= 100 : j >= 100;
      asc1 ? j++ : j--
    ) {
      test_msubf(i, j, i - j);
    }
  }
  if (m !== mtotal) {
    logout('memory leak\n');
    errout();
  }
  return logout('ok\n');
};

let test_msubf = function(na, nb, nc) {
  //unsigned int *a, *b, *c, *d

  const a = mint(na);
  const b = mint(nb);
  const c = mint(nc);

  const d = msub(a, b);

  if (mcmp(c, d) === 0) {
    //mfree(a)
    //mfree(b)
    //mfree(c)
    //mfree(d)
    return;
  }

  //sprintf(logbuf, "%d %d %d %d\n", na, nb, nc, *d * MSIGN(d))
  logout(logbuf);
  return errout();
};

//endif

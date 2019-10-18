// eslint-disable-next-line require-jsdoc
export function test_madd() {
  let asc;
  let i = 0;

  for (i = -100, asc = -100 <= 100; asc ? i < 100 : i > 100; asc ? i++ : i--) {
    for (
      let j = -100, asc1 = -100 <= 100;
      asc1 ? j < 100 : j > 100;
      asc1 ? j++ : j--
    ) {
      test_maddf(i, j, i + j);
    }
  }
  // if (m != mtotal)
  //  logout("memory leak\n")
  //  errout()
  return logout('ok\n');
}

// eslint-disable-next-line require-jsdoc
function test_maddf(na, nb, nc) {
  const a = mint(na);
  const b = mint(nb);
  const c = mint(nc);

  const d = madd(a, b);

  if (mcmp(c, d) === 0) {
    return;
  } else {
    throw new Error('test_maddf');
  }

  // sprintf(logbuf, "%d %d %d %d\n", na, nb, nc, *d * MSIGN(d))
  logout(logbuf);
  return errout();
}

// eslint-disable-next-line require-jsdoc
export function test_msub() {
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
}

// eslint-disable-next-line require-jsdoc
function test_msubf(na, nb, nc) {
  // unsigned int *a, *b, *c, *d

  const a = mint(na);
  const b = mint(nb);
  const c = mint(nc);

  const d = msub(a, b);

  if (mcmp(c, d) === 0) {
    // mfree(a)
    // mfree(b)
    // mfree(c)
    // mfree(d)
    return;
  }

  // sprintf(logbuf, "%d %d %d %d\n", na, nb, nc, *d * MSIGN(d))
  logout(logbuf);
  return errout();
}

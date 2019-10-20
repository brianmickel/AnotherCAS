// eslint-disable-next-line require-jsdoc
export function test_mdiv() {
  let asc;
  let i = 0;
  let j = 0;

  logout('test mdiv\n');
  for (
    i = -100, asc = -100 <= 100;
    asc ? i <= 100 : i >= 100;
    asc ? i++ : i--
  ) {
    let asc1;
    for (
      j = -100, asc1 = -100 <= 100;
      asc1 ? j <= 100 : j >= 100;
      asc1 ? j++ : j--
    ) {
      if (j) {
        let expectedResult;
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
}

// eslint-disable-next-line require-jsdoc
function test_mdivf(na, nb, nc) {
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
}

// eslint-disable-next-line require-jsdoc
export function test_mmul() {
  let asc;
  let i = 0;
  let j = 0;

  logout('test mmul\n');
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
      test_mmulf(i, j, i * j);
    }
  }
  return logout('ok\n');
}

// eslint-disable-next-line require-jsdoc
function test_mmulf(na, nb, nc) {
  const a = mint(na);
  const b = mint(nb);
  const c = mint(nc);

  const d = mmul(a, b);

  if (mcmp(c, d) === 0) {
    return;
  } else {
    throw new Error('test_mmulf error');
  }
}

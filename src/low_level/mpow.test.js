// eslint-disable-next-line require-jsdoc
export function test_mpow() {
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
}

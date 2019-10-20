// eslint-disable-next-line require-jsdoc
export function test_mprime() {
  let i = 0;
  let k = 0;
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
}

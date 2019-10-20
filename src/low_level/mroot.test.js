// eslint-disable-next-line require-jsdoc
export function test_mroot() {
  let a;
  let b;
  let c;
  let i = 0;
  let j = 0;

  logout('testing mroot\n');

  // small numbers

  for (i = 0; i < 10; i++) {
    a = mint(i);
    for (j = 1; j < 10; j++) {
      // logout(i + " " + j)
      b = mpow(a, j);
      c = mroot(b, j);
      if (c === 0 || mcmp(a, c) !== 0) {
        console.log('debugger');
        throw new Error('failed test_mroot');
      }
    }
  }

  logout(' ...mroot small numbers ok\n');

  a = mint(12345);

  for (i = 1; i < 10; i++) {
    // logout(i)
    b = mpow(a, i);
    c = mroot(b, i);
    if (c === 0 || mcmp(a, c) !== 0) {
      throw new Error('failed');
    }
  }

  logout(' ...mroot big numbers ok\n');
  return logout('ok');
}

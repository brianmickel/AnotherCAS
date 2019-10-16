export const test_quickfactor = function() {
  let i = 0;
  logout('testing quickfactor\n');
  for (i = 2; i < 10001; i++) {
    if (i % 1000 === 0) {
      console.log(i);
    }
    let base = i;
    push_integer(base);
    push_integer(1);
    quickfactor();
    const h = tos;
    let j = 0;
    while (base > 1) {
      let expo = 0;
      while (base % primetab[j] === 0) {
        base /= primetab[j];
        expo++;
      }
      if (expo) {
        push_integer(primetab[j]);
        push_integer(expo);
        quickpower();
      }
      j++;
    }
    multiply_all(tos - h);
    const p2 = pop();
    const p1 = pop();
    if (!equal(p1, p2)) {
      logout('failed\n');
      print_lisp(p1);
      print_lisp(p2);
      errout();
    }
  }
  console.log('quickfactor is ok');
  return logout('ok\n');
};

//endif

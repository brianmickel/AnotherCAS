const { test_inner } = require('./functions/inner.test');
const { test_inv } = require('./functions/inv.test');
const { test_madd } = require('./functions/madd.test');
const { test_mgcd } = require('./functions/mgcd.test');
const { test_mixedprint } = require('./functions/mixedprint.test');
const { test_mmul } = require('./functions/mmul.test');
const { test_mpow } = require('./functions/mpow.test');
const { test_mprime } = require('./functions/mprime.test');
const { test_mroot } = require('./functions/mroot.test');
const { test_test } = require('./functions/test.test');
const { test_transpose } = require('./functions/transpose.test');
const { test_strings } = require('./functions/strings.test');

export const test_low_level = function() {
  algebrite.run('clearall'); // to initialize stack and memory

  if (algebrite.exec('factor', '(x^2-1)').toString() === '(x-1)*(x+1)') {
    console.log('exec text ok');
  } else {
    console.log('exec text failed');
  }

  test_clearall();
  test_inv();
  test_printlatex();
  test_mixedprint();
  test_inner();
  test_transpose();
  test_signs_in_rationals();
  test_madd();
  test_msub();
  test_mmul();
  test_mdiv();
  test_mmod();
  test_mprime();
  test_mgcd();
  test_mpow();
  test_mroot();
  test_dependencies();
  test_assignments();
  test_strings();
  test_test();
  return test_check();
};

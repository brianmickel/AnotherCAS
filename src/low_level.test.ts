import * as algebrite from './index';
import { test_inner } from './functions/inner.test';
import { test_inv } from './functions/inv.test';
import { test_madd } from './functions/madd.test';
import { test_mgcd } from './functions/mgcd.test';
import { test_mixedprint } from './functions/mixedprint.test';
import { test_mmul } from './functions/mmul.test';
import { test_mpow } from './functions/mpow.test';
import { test_mprime } from './functions/mprime.test';
import { test_mroot } from './functions/mroot.test';
import { test_test } from './functions/test.test';
import { test_transpose } from './functions/transpose.test';
import { test_strings } from './functions/strings.test';

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

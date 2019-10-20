import { test_arccos } from './arccos.test';
import { test_arccosh } from './arccosh.test';
import { test_arcsin } from './arcsin.test';
import { test_arcsinh } from './arcsinh.test';
import { test_arctan } from './arctan.test';
import { test_arctanh } from './arctanh.test';
import { test_circexp } from './circexp.test';
import { test_cos } from './cos.test';
import { test_cosh } from './cosh.test';
import { test_expcos } from './expcos.test';
import { test_expsin } from './expsin.test';
import { test_sin } from './sin.test';
import { test_sinh } from './sinh.test';
import { test_tan } from './tan.test';
import { test_tanh } from './tanh.test';

export function testTrig() {
  test_expcos();
  test_expsin();
  test_sin();
  test_cos();
  test_tan();
  test_sinh();
  test_cosh();
  test_tanh();
  test_arcsin();
  test_arcsinh();
  test_arccos();
  test_arccosh();
  test_arctan();
  test_arctanh();
  test_circexp();
}

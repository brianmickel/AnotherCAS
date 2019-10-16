// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import {run_test} from '../test_helpers/run_test';
export const test_circexp = () =>
  run_test([
    'circexp(cos(x))',
    '1/2*exp(-i*x)+1/2*exp(i*x)',

    'circexp(sin(x))',
    '1/2*i*exp(-i*x)-1/2*i*exp(i*x)',

    'circexp(tan(x))',
    'i*exp(-i*x)/(exp(-i*x)+exp(i*x))-i*exp(i*x)/(exp(-i*x)+exp(i*x))',

    'circexp(cosh(x))',
    '1/2*exp(x)+1/2*exp(-x)',

    'circexp(sinh(x))',
    '1/2*exp(x)-1/2*exp(-x)',

    'circexp(tanh(x))',
    '-1/(1+exp(2*x))+exp(2*x)/(1+exp(2*x))',

    'circexp([cos(x),sin(x)])',
    '[1/2*exp(-i*x)+1/2*exp(i*x),1/2*i*exp(-i*x)-1/2*i*exp(i*x)]',

    'circexp(cos(x)*sin(x))-expcos(x)*expsin(x)',
    '0',

    'circexp(i*2^(1/4)*sin(1/8*pi)+2^(1/4)*cos(1/8*pi))',
    '2^(1/4)*exp(1/8*i*pi)',
  ]);
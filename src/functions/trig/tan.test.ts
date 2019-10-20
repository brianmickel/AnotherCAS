import {
  runSequentialTests,
  runIndividualTests,
} from '../../test_helpers/run_test';

export function test_tan() {
  runIndividualTests([
    ['tan(x)', 'tan(x)'],
    ['tan(-x)', '-tan(x)'],
    ['tan(b-a)', '-tan(a-b)'],
  ]);

  runSequentialTests([
    // check against the floating point math library
    ['f(a,x)=1+tan(float(a/360*2*pi))-float(x)+tan(a/360*2*pi)-x', ''],
    ['f(0,0)', '1.0'], // 0
    ['f(180,0)', '1.0'], // 180
    ['f(360,0)', '1.0'], // 360
    ['f(-180,0)', '1.0'], // -180
    ['f(-360,0)', '1.0'], // -360
    ['f(45,1)', '1.0'], // 45
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(135,-1)', '1.000000...'], // 135
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(225,1)', '1.000000...'], // 225
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(315,-1)', '1.000000...'], // 315
    ['f(-45,-1)', '1.0'], // -45
    ['f(-135,1)', '1.0'], // -135
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(-225,-1)', '1.000000...'], // -225
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(-315,1)', '1.000000...'], // -315
    ['f(30,sqrt(3)/3)', '1.0'], // 30
    ['f(150,-sqrt(3)/3)', '1.0'], // 150
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(210,sqrt(3)/3)', '1.000000...'], // 210
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(330,-sqrt(3)/3)', '1.000000...'], // 330
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(-30,-sqrt(3)/3)', '1.000000...'], // -30
    ['f(-150,sqrt(3)/3)', '1.0'], // -150
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(-210,-sqrt(3)/3)', '1.000000...'], // -210
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(-330,sqrt(3)/3)', '1.000000...'], // -330
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(60,sqrt(3))', '1.000000...'], // 60
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(120,-sqrt(3))', '1.000000...'], // 120
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(240,sqrt(3))', '1.000000...'], // 240
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(300,-sqrt(3))', '1.000000...'], // 300
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(-60,-sqrt(3))', '1.000000...'], // -60
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(-120,sqrt(3))', '1.000000...'], // -120
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(-240,-sqrt(3))', '1.000000...'], // -240
    // this should really be 1.0 , however
    // we have errors doing the calculations so
    // we don't get to that exact 1.0 float
    ['f(-300,sqrt(3))', '1.000000...'], // -300
    ['f=quote(f)', ''],
  ]);

  runIndividualTests([
    ['tan(arctan(x))', 'x'],
    // check the default case
    ['tan(1/12*pi)', 'tan(1/12*pi)'],
  ]);
}

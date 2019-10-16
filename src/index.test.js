const algebrite = require('./index');
const {run_test} = require('./test_helpers/run_test');

// sourcefile:  tests/abs.coffee 
const test_abs = () => run_test([

  "abs(a+i*b)",
  "(a^2+b^2)^(1/2)",

  "abs(a+b+i*c)",
  "(2*a*b+a^2+b^2+c^2)^(1/2)",

  "abs(exp(a+i*b))",
  "exp(a)",

  "abs(((-1)^(1/3)+1)^(1/2))",
  "3^(1/4)",

  "abs((-2*(-1)^(1/6)/(3^(1/2)))^(1/4))",
  "(2/(3^(1/2)))^(1/4)",

  "abs((-2*(-1)^(1/6)/(3^(1/2))+1)^(1/4))",
  "1/3^(1/8)",

  "abs((2*(-1)^(5/6)/(3^(1/2)))^(1/4))",
  "(2/(3^(1/2)))^(1/4)",

  "abs(1+1.0*(-1)^(1/2))",
  "1.414214...",

  "abs(1-1.0*(-1)^(1/2))",
  "1.414214...",

  "abs(1+2.0*(-1)^(1/2))",
  "2.236068...",

  "abs(1-2.0*(-1)^(1/2))",
  "2.236068...",

  "abs(1)",
  "1",

  "abs(x)",
  "abs(x)",

  // true only if x is real,
  // counterexample: i, which makes 1 and -1
  "abs(x)^2",
  "x^2",

  "abs(-x)",
  "abs(x)",

  "abs(abs(-x))",
  "abs(x)",

  "abs(abs(abs(-x)))",
  "abs(x)",

  "abs(a+b)",
  "abs(a+b)",

  "abs(a*b)",
  "abs(a)*abs(b)",

  "abs(-1)",
  "1",

  "abs(1+exp(i*pi/3))",
  "3^(1/2)",

  "abs((a+i*b)/(c+i*d))",
  "(a^2+b^2)^(1/2)/((c^2+d^2)^(1/2))",

  "abs(((-1)^(1/2) / (3^(1/2)))^(1/2))",
  "1/3^(1/4)",

  "abs(exp(i theta))",
  "1",

  "abs(exp(-i theta))",
  "1",

  "abs((-1)^theta)",
  "1",

  "abs((-1)^(-theta))",
  "1",

  "abs(3*(-1)^theta)",
  "3",

  "abs(3*(-1)^(-theta))",
  "3",

  "abs(-3*(-1)^theta)",
  "3",

  "abs(-3*(-1)^(-theta))",
  "3",

  "abs(-5 i pi / a)",
  "5*pi/abs(a)",

  "abs(1 / a)",
  "1/(abs(a))",

  // ---------- old abs tests

  "abs(2)",
  "2",

  "abs(2.0)",
  "2.0",

  "abs(-2)",
  "2",

  "abs(-2.0)",
  "2.0",

  "abs(a)",
  "abs(a)",

  "abs(-a)",
  "abs(a)",

  "abs(2*a)",
  "2*abs(a)",

  "abs(-2*a)",
  "2*abs(a)",

  "abs(2.0*a)",
  "2.0*abs(a)",

  "abs(-2.0*a)",
  "2.0*abs(a)",

  "abs(a-b)+abs(b-a)",
  "2*abs(a-b)",

  "abs(3 + 4 i)",
  "5",

  "abs([2,3,4])",
  "29^(1/2)",

  "abs(a*b)",
  "abs(a)*abs(b)",

  "abs(a/b)",
  "abs(a)/abs(b)",

  "abs(1/a^b)",
  "1/(abs(a^b))",

  // Check that vector length is simplified

  "P=[u*cos(v),u*sin(v),v]",
  "",

  "abs(cross(d(P,u),d(P,v)))",
  "(1+u^2)^(1/2)",

  "abs((-1)^(-0.666667+0.0291367/pi))",
  "1.0",

  "abs((-1)^(9/3))",
  "1",

  "abs((1)^(9/3))",
  "1",

  "abs((-1.0)^(9/3))",
  "1.0",

]);

// sourcefile:  tests/adj.coffee 
const test_adj = () => run_test([

  "adj([[a,b],[c,d]])",
  "[[d,-b],[-c,a]]",

  "adj([[1,2],[3,4]])",
  "[[4,-2],[-3,1]]",

  "adj([[2,3,-2,5],[6,-2,1,4],[5,10,3,-2],[-1,2,2,3]])",
  "[[-4,-177,-73,194],[-117,117,-99,-27],[310,-129,-44,-374],[-130,-51,71,-211]]",
]);


// sourcefile:  tests/approxratio.coffee 
const test_approxratio = () => run_test([
  "approxratio(0.9054054)",
  "67/74",

  "approxratio(0.0102)",
  "1/98",

  "approxratio(0.518518)",
  "14/27",

  "approxratio(0.3333)",
  "1/3",

  "approxratio(0.5)",
  "1/2",

  "approxratio(3.14159)",
  "355/113",

  "approxratio(a*3.14)",
  "a*22/7",

  "approxratio(a*b)",
  "a*b",

  "approxratio((0.5*4)^(1/3))",
  "2^(1/3)",

  "approxratio(3.14)",
  "22/7",

  // see http://davidbau.com/archives/2010/03/14/the_mystery_of_355113.html
  "approxratio(3.14159)",
  "355/113",

  "approxratio(-3.14159)",
  "-355/113",

  "approxratio(0)",
  "0",

  "approxratio(0.0)",
  "0",

  "approxratio(2)",
  "2",

  "approxratio(2.0)",
  "2",

  // -------------------------------
  // checking some "long primes"
  // also called long period primes, or maximal period primes
  // i.e. those numbers whose reciprocal give
  // long repeating sequences
  // (long prime p gives repetition of p-1 digits).
  // big list here: https://oeis.org/A001913/b001913.txt
  // also see: https://oeis.org/A001913
  // -------------------------------

  // 1st long prime
  "approxratio(0.14)",
  "1/7",

  // 9th long prime, the biggest 2-digits long prime.
  // Often asked to
  // mental calculators to check their abilities.
  "approxratio(0.0103)",
  "1/97",

  // 60th long prime, the biggest 3-digits long prime.
  // Often asked to
  // mental calculators to check their abilities.
  "approxratio(0.001017)",
  "1/983",

  // 467th long prime, the biggest 4-digits long prime.
  "approxratio(0.00010033)",
  "1/9967",

  // 3617th long prime, the biggest 5-digits long prime.
  "approxratio(0.0000100011)",
  "1/99989",

  // 10000th long prime.
  "approxratio(0.00000323701)",
  "1/308927",

]);


// sourcefile:  tests/arccos.coffee 
const test_arccos = () => run_test([

  "arccos(1)",
  "0",

  "arccos(1/2)",
  "1/3*pi",

  "arccos(0)",
  "1/2*pi",

  "arccos(-1/2)",
  "2/3*pi",

  "arccos(-1)",
  "pi",

  "arccos(cos(0))",
  "0",

  "arccos(cos(1/3*pi))",
  "1/3*pi",

  "arccos(cos(1/2*pi))",
  "1/2*pi",

  "arccos(cos(2/3*pi))",
  "2/3*pi",

  "arccos(cos(pi))",
  "pi",

  "arccos(cos(x))",
  "x",

  "arccos(1/sqrt(2))",
  "1/4*pi",

  "arccos(-1/sqrt(2))",
  "3/4*pi",

  "arccos(cos(1/4*pi))",
  "1/4*pi",

  "arccos(cos(3/4*pi))",
  "3/4*pi",
]);

  

// sourcefile:  tests/arccosh.coffee 
const test_arccosh = () => run_test([

  "arccosh(1.0)",
  "0.0",

  "arccosh(1)",
  "0",

  "arccosh(cosh(x))",
  "x",
]);



// sourcefile:  tests/arcsin.coffee 
const test_arcsin = () => run_test([
  "arcsin(-1)",
  "-1/2*pi",

  "arcsin(-1/2)",
  "-1/6*pi",

  "arcsin(0)",
  "0",

  "arcsin(1/2)",
  "1/6*pi",

  "arcsin(1)",
  "1/2*pi",

  "arcsin(sin(-1/2*pi))",
  "-1/2*pi",

  "arcsin(sin(-1/6*pi))",
  "-1/6*pi",

  "arcsin(sin(0))",
  "0",

  "arcsin(sin(1/6*pi))",
  "1/6*pi",

  "arcsin(sin(1/2*pi))",
  "1/2*pi",

  "arcsin(sin(x))",
  "x",

  "arcsin(1/sqrt(2))",
  "1/4*pi",

  "arcsin(-1/sqrt(2))",
  "-1/4*pi",

  "arcsin(sin(1/4*pi))",
  "1/4*pi",

  "arcsin(sin(-1/4*pi))",
  "-1/4*pi",
]);

  

// sourcefile:  tests/arcsinh.coffee 
const test_arcsinh = () => run_test([

  "arcsinh(0.0)",
  "0.0",

  "arcsinh(0)",
  "0",

  "arcsinh(sinh(x))",
  "x",
]);

// sourcefile:  tests/arctan.coffee 
const test_arctan = () => run_test([

  "arctan(x)",
  "arctan(x)",

  "arctan(-x)",
  "-arctan(x)",

  "arctan(0)",
  "0",

  "arctan(tan(x))",
  "x",

  "arctan(1/sqrt(3))-pi/6",  // 30 degrees
  "0",

  "arctan(1)-pi/4",    // 45 degrees
  "0",

  "arctan(sqrt(3))-pi/3",    // 60 degrees
  "0",

  "arctan(a-b)",
  "arctan(a-b)",

  "arctan(b-a)",
  "-arctan(a-b)",

  "arctan(tan(x))",
  "x",
]);

// sourcefile:  tests/arctanh.coffee 
const test_arctanh = () => run_test([
  "arctanh(0.0)",
  "0.0",

  "arctanh(0)",
  "0",

  "arctanh(tanh(x))",
  "x",
]);

// sourcefile:  tests/arg.coffee 
const test_arg = () => run_test([

  // wrong
  //"arg(-1)",
  //"-pi",

  "arg(pi)",
  "0",

  "arg(1+i)",
  "1/4*pi",

  "arg(1-i)",
  "-1/4*pi",

  "arg(-1+i)",
  "3/4*pi",

  "arg(-1-i)",
  "-3/4*pi",

  "arg((-1)^(1/3))",
  "1/3*pi",

  "arg(1+exp(i*pi/3))",
  "1/6*pi",

  "arg((-1)^(1/6)*exp(i*pi/6))",
  "1/3*pi",

  // check when not assuming real variables ----------
  "assumeRealVariables = 0",
  "",

  "arg(a)",
  "arg(a)",

  // TODO this is wrong
  //"arg(a*exp(b+i*pi/5))",
  //"1/5*pi",

  // this is wrong
  //"arg(-1)",
  //"-pi",

  // this is also highly debatable
  // take the example
  // a = -1-i
  // then arg(a) - arg(-a) should give pi
  // but arg(1+i) - arg(-1-i) gives -pi instead
  // "arg(-a)",
  // "-pi+arg(a)",

  "assumeRealVariables = 1",
  "",
  // --------------------------------------------------

  // TODO this is wrong.
  //"arg(a*exp(b+i*pi/5))",
  //"1/5*pi",

  // referencing the test above, if
  // a is positive:
  "arg(abs(a)*exp(b+i*pi/5))",
  "1/5*pi",

  // otherwise, if negative, we get:
  "arg((-8)*exp(b+i*pi/5))",
  "-4/5*pi",

  // if a is positive, zero
  // if a is negative, -pi, so
  // we can't say much
  "arg(a)",
  "arg(a)",

  // this is also wrong, this should
  // be either zero or pi
  //"arg(-a)",
  //"-pi+arg(a)",

  "arg(-(-1)^(1/3))",
  "-2/3*pi",

  "arg(-exp(i*pi/3))",
  "-2/3*pi",

  "arg(-i)",
  "-1/2*pi",

  "arg((a+b*i)/(c+d*i))",
  "arctan(b/a)-arctan(d/c)",

  "arg(((-1)^(1/2) / (3^(1/2)))^(1/2))",
  "1/4*pi",

  "arg((-1)^(1/6))",
  "1/6*pi",


]);

// sourcefile:  tests/assignments.coffee 
const test_assignments = () => run_test([

  // it used to return exp(1)
  "e",
  "e",

  // normally sqrt(-1) is shown as i or j
  // but if user really wants to look inside
  // i/j then we are going to show sqrt(-1)
  "i",
  "(-1)^(1/2)",

  "j",
  "j",

  // degenerate assignments give an error ----

  "0=0",
  "Stop: symbol assignment: error in symbol",

  "1=2",
  "Stop: symbol assignment: error in symbol",

  "3=a",
  "Stop: symbol assignment: error in symbol",

  // ------------------------------------------

  // f is not defined, so everything left as is
  "f(a)",
  "f(a)",

  // this is parsed as a function call, the (f-f) is evaluated and
  // returns zero, which is not a valid function, so here
  // we can say that the user probably meant to use
  // the multiplication
  "(f-f)(a)",
  "Stop: expected function invocation, found multiplication instead. Use '*' symbol explicitly for multiplication.",

  // tensor instead of function
  "([1,2])(a)",
  "Stop: expected function invocation, found tensor product instead. Use 'dot/inner' explicitly.",

  "[1,2](a)",
  "Stop: expected function invocation, found tensor product instead. Use 'dot/inner' explicitly.",

  // string instead of function
  "(\"hey\")(a)",
  "Stop: expected function, found string instead.",

  "\"hey\"(a)",
  "Stop: expected function, found string instead.",

  // this is parsed as a function call, (f(a)) is evaluated and
  // returns something that is not fully evaluated, so we have to
  // leave it all as it was
  "(f(a))(b)",
  "f(a)(b)",

  // this is parsed as a function call, the (f-1) is evaluated and
  // returns something that is not fully evaluated, so again
  // little that we can do
  "(f-1)(a)",
  "(-1+f)(a)",

  // similar to the case above
  "(x-2)(x-1)",
  "(-2+x)(x-1)",

  // similar to the case above, just with a space
  "(x-2) (x-1)",
  "(-2+x)(x-1)",

  // ------------------------------------------

  "1[2] = 3",
  "Stop: indexed assignment: expected a symbol name",

  "undefinedVar[1] = 2",
  "Stop: error in indexed assign: assigning to something that is not a tensor",

  "[[1,2],[3,4]][5] = 6",
  "Stop: indexed assignment: expected a symbol name",

  // ------------------------------------------

  "f(x) = x + 1",
  "",

  "g = f",
  "",

  "lookup(f)",
  "function (x) -> x+1",

  "lookup(g)",
  "function (x) -> x+1",

  "f(x,y) = x + 2",
  "",

  "lookup(f)",
  "function (x y) -> x+2",

  "g(3)",
  "4",

  "f(3,0)",
  "5",

  "f = quote(1+1)",
  "",

  "g = f",
  "",

  "g",
  "2",

  "g = quote(f)",
  "",

  "g",
  "2",

  "lookup(g)",
  "f",

  "g = lookup(f)",
  "",

  "g",
  "2",

  "lookup(g)",
  "1+1",

  // test the abbreviated form :=
  // of assignment with quote
  "f := 1+1",
  "",

  "lookup(f)",
  "1+1",

  // a function returning a function

  "f(x) = x + 1",
  "",

  "g() = f",
  "",

  "g()(2)",
  "3",

  // a function returning a function
  // variant in which g has an (unneeded) parameter

  "f(x) = x + 1",
  "",

  "g(y) = f",
  "",

  "g()(2)",
  "3",


  // a function returning a function
  // variant in which g has an (unneeded) parameter
  // with the same name of the parameter that f uses

  "f(x) = x + 1",
  "",

  "g(x) = f",
  "",

  "g()(2)",
  "3",

  // passing functions as parameters

  "f(x) = x + 1",
  "",

  "g(x) = x * x",
  "",

  "h(l, x) = l(x)",
  "",

  "h(f, 2)",
  "3",

  "h(g, 3)",
  "9",


  // passing function as parameter
  // but doing nothing with it because
  // the function in the body is already
  // defined

  "f(x) = x + 1",
  "",

  "g(x) = x * x",
  "",

  "h(l, x) = f(x)",
  "",

  "h(f, 2)",
  "3",

  "h(g, 3)",
  "4",


  // clean up -----------------

  "f=quote(f)",
  "",

  "g=quote(g)",
  "",

  "h=quote(h)",
  "",

  // ----------------------
  "a = a+1",
  "",

  "a",
  "Stop: recursive evaluation of symbols: a -> a",

  // ----------------------
  "a := b",
  "",

  "b := c",
  "",

  "c := a",
  "",

  "b",
  "Stop: recursive evaluation of symbols: b -> c -> a -> b",

  // ----------------------
  // note how this case actually doesn't generate a recursion
  // as in Algebrite it's not a problem when a variable
  // just contain itself, actually that's the default of
  // unassigned variables.

  "a = b",
  "",

  "b = a",
  "",

  "a",
  "b",

  "b",
  "b",

  // ----------------------
  // note how these assignments actually don't generate
  // a recursion as in Algebrite it's not a problem when
  // a variable just contain itself, actually that's the
  // default for unassigned variables.

  "a=a",
  "",

  "a := a",
  "",

  "a",
  "a",

  // clean up -----------------

  "clearall",
  "",


]);

// sourcefile:  tests/bake.coffee 
const test_bake = () => run_test([

  "bake = 0",
  "",

  "(x+3)^3",
  "27+27*x+9*x^2+x^3",

  "factor",
  "(3+x)^3",

  "bake = 1",
  "",

  "(x+3)^3",
  "x^3+9*x^2+27*x+27",

  "factor",
  "(x+3)^3",

]);

// sourcefile:  tests/besselj.coffee 
const test_besselj = () => run_test([

  "besselj(x,n)",
  "besselj(x,n)",

  "besselj(0,0)",
  "1",

  "besselj(0,1)",
  "0",

  "besselj(0,-1)",
  "0",

  "besselj(x,1/2)-sqrt(2/pi/x)*sin(x)",
  "0",

  "besselj(x,-1/2)-sqrt(2/pi/x)*cos(x)",
  "0",

  "besselj(x,3/2)-sqrt(2/pi/x)*(sin(x)/x-cos(x))",
  "0",

  "besselj(x,-3/2)-sqrt(2/pi/x)*(-cos(x)/x-sin(x))",
  "0",

  "besselj(x,5/2)-sqrt(2/pi/x)*((3/x^2-1)*sin(x)-3/x*cos(x))",
  "0",

  "besselj(x,-5/2)-sqrt(2/pi/x)*((3/x^2-1)*cos(x)+3/x*sin(x))",
  "0",

  // From the note above

  "besselj(x,3/2)-(1/x)*besselj(x,1/2)+besselj(x,-1/2)",
  "0",

  "besselj(x,-3/2)+(1/x)*besselj(x,-1/2)+besselj(x,1/2)",
  "0",

  // this should simplify

  "y=besselj(x,5/2)",
  "",

  "x^2*d(y,x,x)+x*d(y,x)+(x^2-(5/2)^2)*y",
  "0",

  "y=quote(y)",
  "",
]);

  

// sourcefile:  tests/bessely.coffee 
const test_bessely = () => run_test([

  "bessely(x,n)",
  "bessely(x,n)",
]);


// sourcefile:  tests/bignum.coffee 
const test_signs_in_rationals = () => run_test([

  // I found out about basic mistakes in
  // these very very late, better to
  // have those tests early on.

  "1/1",
  "1",

  "-1/1",
  "-1",

  "1/(-1)",
  "-1",

  "(-1)/(-1)",
  "1",

]);

// sourcefile:  tests/binomial.coffee 
const test_binomial = () => run_test([
  "binomial(12,6)",
  "924",

  "binomial(n,k)",
//  "1/(factorial(k))*factorial(n)*1/(factorial(-k+n))",
//  "factorial(n)/(factorial(k)*factorial(-k+n))",
  "n!/(k!*(-k+n)!)",

  "binomial(0,k)",
//  "1/(factorial(k))*1/(factorial(-k))",
//  "1/(factorial(k)*factorial(-k))",
  "1/(k!*(-k)!)",

  "binomial(n,0)",
  "1",

  "binomial(-1,k)",
  "0",

  "binomial(n,-1)",
  "0",
]);

// sourcefile:  tests/ceiling.coffee 
const test_ceiling = () => run_test([
  "ceiling(a)",
  "ceiling(a)",

  "ceiling(a+b)",
  "ceiling(a+b)",

  "ceiling(5/2)",
  "3",

  "ceiling(4/2)",
  "2",

  "ceiling(3/2)",
  "2",

  "ceiling(2/2)",
  "1",

  "ceiling(1/2)",
  "1",

  "ceiling(0/2)",
  "0",

  "ceiling(-1/2)",
  "0",

  "ceiling(-2/2)",
  "-1",

  "ceiling(-3/2)",
  "-1",

  "ceiling(-4/2)",
  "-2",

  "ceiling(-5/2)",
  "-2",

  "ceiling(5/2.0)",
  "3.0",

  "ceiling(4/2.0)",
  "2.0",

  "ceiling(3/2.0)",
  "2.0",

  "ceiling(2/2.0)",
  "1.0",

  "ceiling(1/2.0)",
  "1.0",

  "ceiling(0.0)",
  "0.0",

  "ceiling(-1/2.0)",
  "0.0",

  "ceiling(-2/2.0)",
  "-1.0",

  "ceiling(-3/2.0)",
  "-1.0",

  "ceiling(-4/2.0)",
  "-2.0",

  "ceiling(-5/2.0)",
  "-2.0",
]);

  

// sourcefile:  tests/check.coffee 
const test_check = function() {
  if (algebrite.DEBUG) { console.log("test_check ----------------------------"); }

  return run_test([

    // note how check can turn an assignment
    // into a test, so in this case a is not
    // assigned anything

    "check(a=b)",
    "check(a=b)",

    "a",
    "a",

    "check(a)",
    "check(a)",

    "check(a=a)",
    "1",

    "check(a==a)",
    "1",

    "check(a===a)",
    "check(a=== ? a)\nStop: syntax error",

    "check(a+1=a)",
    "0",

    "check(a+1==a)",
    "0",

    "check(a+1===a)",
    "check(a+1=== ? a)\nStop: syntax error",

    "check(1)",
    "1",

    "check(0)",
    "0",

    "check(and(1,0))",
    "0",

    "check(and(1,1))",
    "1",

    // if passed a value, check if non-zero
    "check(pi)",
    "1",

    "check(2)",
    "1",

    "check(-2)",
    "1",

    "check(sqrt(2))",
    "1",

    "check(sqrt(-1))",
    "1",

    "check(sqrt(pi/4)-sqrt(i))",
    "1",

    "check(1+i)",
    "1",


    "check([0,0])",
    "0",

    "check([1,2])",
    "1",

    "check([1+i,2])",
    "1",

    "check([a,2])",
    "check([a,2])",

    "check(1-i)",
    "1",

  ]);
};

// sourcefile:  tests/choose.coffee 
const test_choose = () => run_test([
  "choose(52,5)",
  "2598960",

  "choose(n,k)",
  "n!/(k!*(-k+n)!)",

  "choose(0,k)",
  "1/(k!*(-k)!)",

  "choose(n,0)",
  "1",

  "choose(-1,k)",
  "0",

  "choose(n,-1)",
  "0",
]);


// sourcefile:  tests/circexp.coffee 
const test_circexp = () => run_test([

  "circexp(cos(x))",
  "1/2*exp(-i*x)+1/2*exp(i*x)",

  "circexp(sin(x))",
  "1/2*i*exp(-i*x)-1/2*i*exp(i*x)",

  "circexp(tan(x))",
  "i*exp(-i*x)/(exp(-i*x)+exp(i*x))-i*exp(i*x)/(exp(-i*x)+exp(i*x))",

  "circexp(cosh(x))",
  "1/2*exp(x)+1/2*exp(-x)",

  "circexp(sinh(x))",
  "1/2*exp(x)-1/2*exp(-x)",

  "circexp(tanh(x))",
  "-1/(1+exp(2*x))+exp(2*x)/(1+exp(2*x))",

  "circexp([cos(x),sin(x)])",
  "[1/2*exp(-i*x)+1/2*exp(i*x),1/2*i*exp(-i*x)-1/2*i*exp(i*x)]",

  "circexp(cos(x)*sin(x))-expcos(x)*expsin(x)",
  "0",

  "circexp(i*2^(1/4)*sin(1/8*pi)+2^(1/4)*cos(1/8*pi))",
  "2^(1/4)*exp(1/8*i*pi)",
]);

// sourcefile:  tests/clearall.coffee 
const test_clearall = () => run_test([

  "a = 1",
  "",
    
  "a",
  "1",
    
  "clearall",
  "",
    
  "a",
  "a",
]);

// sourcefile:  tests/clock.coffee 
const test_clock = () => run_test([

  "clock(exp(i pi/3))",
  "(-1)^(1/3)",

  "clock(exp(-i pi/3))",
  //"-(-1)^(2/3)",
  "1/(-1)^(1/3)",

  "rect(clock(3+4*i))",  // needs sin(arctan(x)) and cos(arctan(x))
  "3+4*i",

  "clock((-108+108*(-1)^(1/2)*3^(1/2))^(1/3))",
  "6*(-1)^(2/9)",

  // TODO
  // the changes to abs/mag of Jan 2017
  // make it so a ends up as absolute value
  //     (-1)^(1/5)*abs(a)
  // Rather, clock should somehow recognize
  // that this is already very close to clock
  // form and just replace the exponential with
  // the power of -1
  // Note that this was working before the Jan 2017
  // changes because abs/mag were blissfully
  // transforming abs(any_variable) -> any_variable
  //"clock(exp(1/5*i*pi)*a)",
  //"(-1)^(1/5)*a",

]);

// sourcefile:  tests/coeff.coffee 
const test_coeff = () => run_test([

  "coeff(40*x^3+30*x^2+20*x+10,3)",
  "40",

  "coeff(40*x^3+30*x^2+20*x+10,2)",
  "30",

  "coeff(40*x^3+30*x^2+20*x+10,1)",
  "20",

  "coeff(40*x^3+30*x^2+20*x+10,0)",
  "10",

  "coeff(a*t^3+b*t^2+c*t+d,t,3)",
  "a",

  "coeff(a*t^3+b*t^2+c*t+d,t,2)",
  "b",

  "coeff(a*t^3+b*t^2+c*t+d,t,1)",
  "c",

  "coeff(a*t^3+b*t^2+c*t+d,t,0)",
  "d",
]);

// sourcefile:  tests/cofactor.coffee 
const test_cofactor = () => run_test([

  "cofactor([[1,2],[3,4]],1,1)",
  "4",

  "cofactor([[1,2],[3,4]],1,2)",
  "-3",

  "cofactor([[1,2],[3,4]],2,1)",
  "-2",

  "cofactor([[1,2],[3,4]],2,2)",
  "1",

  "cofactor([[1,2,3],[4,5,6],[7,8,9]],1,2)",
  "6",
]);

// sourcefile:  tests/condense.coffee 
const test_condense = () => run_test([

  "condense(a/(a+b)+b/(a+b))",
  "1",

  "psi(n) = exp(-r/n) laguerre(2r/n,n-1,1)",
  "",

  "psi(3)",
  "3*exp(-1/3*r)-2*r*exp(-1/3*r)+2/9*r^2*exp(-1/3*r)",

  "condense(last)",
  "exp(-1/3*r)*(3-2*r+2/9*r^2)",

  "psi()=psi",
  "",

  // test case H

  "condense(-3 exp(-1/3 r + i phi) cos(theta) - 6 exp(-1/3 r + i phi) cos(theta) sin(theta)^2 + 12 exp(-1/3 r + i phi) cos(theta)^3)",
  "3*exp(-1/3*r+i*phi)*(-1+4*cos(theta)^2-2*sin(theta)^2)*cos(theta)",

  "condense(7208+2736*5^(1/2))",
  "8*(901+342*5^(1/2))",


]);

// sourcefile:  tests/contract.coffee 
const test_contract = () => run_test([
  "contract(0)",
  "0",

  "contract(0.0)",
  "0",

  // this is same as contract(hilbertmatrix(20))
  // we are testing this because some versions of bigInt library
  // seemed to give problems with some gcds involved in these
  // additions of fractions
  "409741429887649/166966608033225 + 1/39",
  "414022624965424/166966608033225",

  // this is same as contract(hilbertmatrix(21))
  // we are testing this because some versions of bigInt library
  // seemed to give problems with some gcds involved in these
  // additions of fractions
  "414022624965424/166966608033225 + 1/41",
  "17141894231615609/6845630929362225",

  "contract(hilbert(50))",
  "3200355699626285671281379375916142064964/1089380862964257455695840764614254743075",

  "contract([[a,b],[c,d]])",
  "a+d",

  "contract([[1,2],[3,4]],1,2)",
  "5",

  "A=[[a11,a12],[a21,a22]]",
  "",

  "B=[[b11,b12],[b21,b22]]",
  "",

  "contract(outer(A,B),2,3)",
  "[[a11*b11+a12*b21,a11*b12+a12*b22],[a21*b11+a22*b21,a21*b12+a22*b22]]",

  "A=quote(A)",
  "",

  "B=quote(B)",
  "",
]);

// sourcefile:  tests/cos.coffee 
const test_cos = () => run_test([

  "cos(x)",
  "cos(x)",

  "cos(-x)",
  "cos(x)",

  "cos(b-a)",
  "cos(a-b)",

  // check against the floating point math library

  "f(a,x)=1+cos(float(a/360*2*pi))-float(x)+cos(a/360*2*pi)-x",
  "",

  "f(0,1)",      // 0
  "1.0",

  "f(90,0)",      // 90
  "1.0",

  "f(180,-1)",      // 180
  "1.0",

  "f(270,0)",      // 270
  "1.0",

  "f(360,1)",      // 360
  "1.0",

  "f(-90,0)",      // -90
  "1.0",

  "f(-180,-1)",      // -180
  "1.0",

  "f(-270,0)",      // -270
  "1.0",

  "f(-360,1)",      // -360
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(45,sqrt(2)/2)",    // 45
  "1.000000...",

  "f(135,-sqrt(2)/2)",    // 135
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(225,-sqrt(2)/2)",    // 225
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(315,sqrt(2)/2)",    // 315
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-45,sqrt(2)/2)",    // -45
  "1.000000...",

  "f(-135,-sqrt(2)/2)",    // -135
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-225,-sqrt(2)/2)",    // -225
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-315,sqrt(2)/2)",    // -315
  "1.000000...",

  "f(30,sqrt(3)/2)",    // 30
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(150,-sqrt(3)/2)",    // 150
  "1.000000...",

  "f(210,-sqrt(3)/2)",    // 210
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(330,sqrt(3)/2)",    // 330
  "1.000000...",

  "f(-30,sqrt(3)/2)",    // -30
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-150,-sqrt(3)/2)",    // -150
  "1.000000...",

  "f(-210,-sqrt(3)/2)",    // -210
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-330,sqrt(3)/2)",    // -330
  "1.000000...",

  "f(60,1/2)",      // 60
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(120,-1/2)",      // 120
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(240,-1/2)",      // 240
  "1.000000...",

  "f(300,1/2)",      // 300
  "1.0",

  "f(-60,1/2)",      // -60
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-120,-1/2)",      // -120
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-240,-1/2)",      // -240
  "1.000000...",

  "f(-300,1/2)",      // -300
  "1.0",

  "f=quote(f)",
  "",

  "cos(arccos(x))",
  "x",

  // bug fix for version 119

  "cos(1/12*pi)",
  "cos(1/12*pi)",

  "cos(arctan(4/3))",
  "3/5",

  "cos(-arctan(4/3))",
  "3/5",

  // phase

  "cos(x-8/2*pi)",
  "cos(x)",

  "cos(x-7/2*pi)",
  "-sin(x)",

  "cos(x-6/2*pi)",
  "-cos(x)",

  "cos(x-5/2*pi)",
  "sin(x)",

  "cos(x-4/2*pi)",
  "cos(x)",

  "cos(x-3/2*pi)",
  "-sin(x)",

  "cos(x-2/2*pi)",
  "-cos(x)",

  "cos(x-1/2*pi)",
  "sin(x)",

  "cos(x+0/2*pi)",
  "cos(x)",

  "cos(x+1/2*pi)",
  "-sin(x)",

  "cos(x+2/2*pi)",
  "-cos(x)",

  "cos(x+3/2*pi)",
  "sin(x)",

  "cos(x+4/2*pi)",
  "cos(x)",

  "cos(x+5/2*pi)",
  "-sin(x)",

  "cos(x+6/2*pi)",
  "-cos(x)",

  "cos(x+7/2*pi)",
  "sin(x)",

  "cos(x+8/2*pi)",
  "cos(x)",
]);

// sourcefile:  tests/cosh.coffee 
const test_cosh = () => run_test([
  "cosh(x)",
  "cosh(x)",

  "cosh(0)",
  "1",

  "cosh(arccosh(x))",
  "x",
]);

// sourcefile:  tests/defint.coffee 
const test_defint = () => run_test([
  "defint(x^2,y,0,sqrt(1-x^2),x,-1,1)",
  "1/8*pi",

  // from the eigenmath manual

  "z=2",
  "",

  "P=[x,y,z]",
  "",

  "a=abs(cross(d(P,x),d(P,y)))",
  "",

  "defint(a,y,-sqrt(1-x^2),sqrt(1-x^2),x,-1,1)",
  "pi",

  // from the eigenmath manual

  "z=x^2+2y",
  "",

  "P=[x,y,z]",
  "",

  "a=abs(cross(d(P,x),d(P,y)))",
  "",

  "defint(a,x,0,1,y,0,1)",
  "3/2+5/8*log(5)",

  // from the eigenmath manual

  "x=u*cos(v)",
  "",

  "y=u*sin(v)",
  "",

  "z=v",
  "",

  "S=[x,y,z]",
  "",

  "a=abs(cross(d(S,u),d(S,v)))",
  "",

  "defint(a,u,0,1,v,0,3pi)",
  "3/2*pi*log(1+2^(1/2))+3*pi/(2^(1/2))",
]);

  

// sourcefile:  tests/denominator.coffee 
const test_denominator = () => run_test([

  "denominator(2/3)",
  "3",

  "denominator(x)",
  "1",

  "denominator(1/x)",
  "x",

  "denominator(a+b)",
  "1",

  "denominator(1/a+1/b)",
  "a*b",

  // denominator function expands

  "denominator(1/(x-1)/(x-2))",
  "x^2-3*x+2",
]);

// sourcefile:  tests/dependencies.coffee 
const test_dependencies = function() {
  algebrite.do_clearall();

  let testResult = algebrite.findDependenciesInScript('1');
  if ((testResult[0] === "All local dependencies: . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively: ") &&
    (testResult[1] === "1") &&
    (testResult[2] === "")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 1 expected: " + testResult);
    }

  algebrite.do_clearall();

  // check that floats in code are expressed with maximum precision -------------------
  testResult = algebrite.findDependenciesInScript('a = float(1/3)');
  if ((testResult[0] === "All local dependencies:  variable a depends on: ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable a depends on: ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "a = 0.3333333333333333;")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 2 expected: " + testResult);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('a = float(10^50)');
  if ((testResult[0] === "All local dependencies:  variable a depends on: ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable a depends on: ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "a = 1e+50;")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 3 expected: " + testResult);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('f = x+1\n g = f\n h = g\n f = g');
  if ((testResult[0] === "All local dependencies:  variable f depends on: x, g, ;  variable g depends on: f, ;  variable h depends on: g, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable f depends on: x, ;  f --> g -->  ... then f again,  variable g depends on: x, ;  g --> f -->  ... then g again,  variable h depends on: x, ;  h --> g --> f -->  ... then g again, ") &&
    (testResult[1] === "") &&
    (testResult[2] === "// f is part of a cyclic dependency, no code generated.\n// g is part of a cyclic dependency, no code generated.\n// h is part of a cyclic dependency, no code generated.")) {
  } else {
      console.log("fail dependency test 4 expected: " + testResult);
    }

  algebrite.do_clearall();

  if (algebrite.findDependenciesInScript('f = x+1\n g = f + y\n h = g')[0] === "All local dependencies:  variable f depends on: x, ;  variable g depends on: f, y, ;  variable h depends on: g, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable f depends on: x, ;  variable g depends on: x, y, ;  variable h depends on: x, y, ; ") {
    console.log("ok dependency test");
  } else {
    console.log("fail dependency test 5");
  }

  algebrite.do_clearall();

  if (algebrite.findDependenciesInScript('g = h(x,y)')[0] === "All local dependencies:  variable g depends on: h, x, y, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable g depends on: h, x, y, ; ") {
    console.log("ok dependency test");
  } else {
    console.log("fail dependency test 6");
  }

  algebrite.do_clearall();

  if (algebrite.findDependenciesInScript('f(x,y) = k')[0] === "All local dependencies:  variable f depends on: 'x, 'y, k, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable f depends on: 'x, 'y, k, ; ") {
    console.log("ok dependency test");
  } else {
    console.log("fail dependency test 7");
  }

  algebrite.do_clearall();

  if (algebrite.findDependenciesInScript('x = z\n f(x,y) = k')[0] === "All local dependencies:  variable x depends on: z, ;  variable f depends on: 'x, 'y, k, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable x depends on: z, ;  variable f depends on: 'x, 'y, k, ; ") {
    console.log("ok dependency test");
  } else {
    console.log("fail dependency test 8");
  }

  algebrite.do_clearall();

  if (algebrite.findDependenciesInScript('x = z\n g = f(x,y)')[0] === "All local dependencies:  variable x depends on: z, ;  variable g depends on: f, x, y, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable x depends on: z, ;  variable g depends on: f, z, y, ; ") {
    console.log("ok dependency test");
  } else {
    console.log("fail dependency test 9");
  }

  algebrite.do_clearall();

  if (algebrite.findDependenciesInScript('x = 1\n x = y\n x = z')[0] === "All local dependencies:  variable x depends on: y, z, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable x depends on: y, z, ; ") {
    console.log("ok dependency test");
  } else {
    console.log("fail dependency test 10");
  }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('x = y*y');
  if ((testResult[0] === "All local dependencies:  variable x depends on: y, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable x depends on: y, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "x = function (y) { return ( Math.pow(y, 2) ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 11 expected: " + testResult);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('x = e*e');
  if ((testResult[0] === "All local dependencies:  variable x depends on: ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable x depends on: ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "x = Math.exp(2);")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 12 expected: " + testResult);
    }

  testResult = algebrite.findDependenciesInScript('x = e');
  if ((testResult[0] === "All local dependencies:  variable x depends on: ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable x depends on: ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "x = Math.E;")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 13 expected: " + testResult);
    }

  testResult = algebrite.findDependenciesInScript('x = -sqrt(2)/2');
  if ((testResult[0] === "All local dependencies:  variable x depends on: ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable x depends on: ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "x = -1/2*Math.SQRT2;")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 14 expected: " + testResult);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('x = 2^(1/2-a)*2^a/10');
  if ((testResult[0] === "All local dependencies:  variable x depends on: a, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable x depends on: a, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "x = 1/10*Math.SQRT2;")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 15 expected: " + testResult);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('x = rationalize(t*y/(t+y)+2*t^2*y*(2*t+y)^(-2))');
  if ((testResult[0] === "All local dependencies:  variable x depends on: t, y, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable x depends on: t, y, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "x = function (t, y) { return ( t*y*(6*Math.pow(t, 2)+Math.pow(y, 2)+6*t*y)/((t+y)*Math.pow((2*t+y), 2)) ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 16 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('x = abs((a+i*b)/(c+i*d))');
  if ((testResult[0] === "All local dependencies:  variable x depends on: a, b, c, d, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable x depends on: a, b, c, d, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "x = function (a, b, c, d) { return ( Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2))/(Math.sqrt(Math.pow(c, 2)+Math.pow(d, 2))) ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 17 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('x = sin(1/10)^2 + cos(1/10)^2 + y');
  if ((testResult[0] === "All local dependencies:  variable x depends on: y, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable x depends on: y, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "x = function (y) { return ( 1+y ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 18 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('x = y + cos(1) + sin(1)');
  if ((testResult[0] === "All local dependencies:  variable x depends on: y, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable x depends on: y, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "x = function (y) { return ( y+Math.cos(1)+Math.sin(1) ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 19 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('x = a + arccos(b) + arcsin(c)');
  if ((testResult[0] === "All local dependencies:  variable x depends on: a, arccos, b, arcsin, c, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable x depends on: a, arccos, b, arcsin, c, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "x = function (a, b, c) { return ( a+Math.acos(b)+Math.asin(c) ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 20 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('x = sin(1/10)^2 + cos(1/10)^2');
  if ((testResult[0] === "All local dependencies:  variable x depends on: ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable x depends on: ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "x = 1;")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 21 expected: " + testResult);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('a = unit(b) + c');
  if ((testResult[0] === "All local dependencies:  variable a depends on: b, c, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable a depends on: b, c, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "a = function (c, b) { return ( c+identity(b) ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 22 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('f(x) = x * x');
  if ((testResult[0] === "All local dependencies:  variable f depends on: 'x, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable f depends on: 'x, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "f = function (x) { return ( x*x ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 23 expected: " + testResult);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('f(x) = x * x + g(y)');
  if ((testResult[0] === "All local dependencies:  variable f depends on: 'x, g, y, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable f depends on: 'x, g, y, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "f = function (g, y, x) { return ( g(y)+Math.pow(x, 2) ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 24 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('y = 2\nf(x) = x * x + g(y)');
  if ((testResult[0] === "All local dependencies:  variable y depends on: ;  variable f depends on: 'x, g, y, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable y depends on: ;  variable f depends on: 'x, g, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "y = 2;\nf = function (g, x) { return ( g(2)+Math.pow(x, 2) ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 25 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('g(x) = x + 2\ny = 2\nf(x) = x * x + g(y)');
  if ((testResult[0] === "All local dependencies:  variable g depends on: 'x, ;  variable y depends on: ;  variable f depends on: 'x, g, y, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable g depends on: 'x, ;  variable y depends on: ;  variable f depends on: 'x, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "g = function (x) { return ( 2+x ); }\ny = 2;\nf = function (x) { return ( 4+Math.pow(x, 2) ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 26 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('g(x) = x + 2\nf(x) = x * x + g(y)');
  if ((testResult[0] === "All local dependencies:  variable g depends on: 'x, ;  variable f depends on: 'x, g, y, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable g depends on: 'x, ;  variable f depends on: 'x, y, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "g = function (x) { return ( 2+x ); }\nf = function (y, x) { return ( 2+y+Math.pow(x, 2) ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 27 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  /*
  testResult = algebrite.findDependenciesInScript('g(x) = f(x)\nf(x)=g(x)')
  if testResult[0] == "All local dependencies:  variable g depends on: 'x, f, x, ;  variable f depends on: 'x, g, x, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable g depends on: 'x, ;  g --> f -->  ... then g again,  variable f depends on: 'x, x, ;  f --> g -->  ... then f again, " and
    testResult[1] == "" and
    testResult[2] == "// g is part of a cyclic dependency, no code generated.\n// f is part of a cyclic dependency, no code generated."
      console.log "ok dependency test"
  else
      console.log "fail dependency test 28 expected: " + testResult

  algebrite.do_clearall()
  */

  testResult = algebrite.findDependenciesInScript('piApprox = sum((-1)^k * (1/(2*k + 1)),k,0,iterations)*4');
  if ((testResult[0] === "All local dependencies:  variable piApprox depends on: iterations, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable piApprox depends on: iterations, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "piApprox = function (iterations) { return ( 4*(function(){ var k;  var holderSum = 0;  var lowerlimit = 0;  var upperlimit = iterations;  for (k = lowerlimit; k < upperlimit; k++) {    holderSum += Math.pow((-1), k)/(2*k+1); }  return holderSum;})() ); }") &&
    (testResult[3] === "piApprox(iterations) = 4\\sum_{k=0}^{iterations}{\\frac{(-1)^k}{(2k+1)}}")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 29 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
      console.log("testResult[3]: " + testResult[3]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('piApprox = 2*product(4*k^2/(4*k^2-1),k,1,iterations)');
  if ((testResult[0] === "All local dependencies:  variable piApprox depends on: iterations, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable piApprox depends on: iterations, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "piApprox = function (iterations) { return ( 2*(function(){ var k;  var holderProduct = 1;  var lowerlimit = 1;  var upperlimit = iterations;  for (k = lowerlimit; k < upperlimit; k++) {    holderProduct *= 4*Math.pow(k, 2)/(4*Math.pow(k, 2)-1); }  return holderProduct;})() ); }") &&
    (testResult[3] === "piApprox(iterations) = 2\\prod_{k=1}^{iterations}{\\frac{4k^2}{(4k^2-1)}}")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 30 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
      console.log("testResult[3]: " + testResult[3]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('f = roots(a*x^2 + b*x + c, x)');
  if ((testResult[0] === "All local dependencies:  variable f depends on: a, b, c, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable f depends on: a, b, c, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "f = function (a, b, c) { return ( [-1/2*(Math.sqrt(Math.pow(b, 2)/(Math.pow(a, 2))-4*c/a)+b/a),1/2*(Math.sqrt(Math.pow(b, 2)/(Math.pow(a, 2))-4*c/a)-b/a)] ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 31 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('f = roots(a*x^2 + b*x + c)');
  if ((testResult[0] === "All local dependencies:  variable f depends on: a, b, c, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable f depends on: a, b, c, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "f = function (a, b, c) { return ( [-1/2*(Math.sqrt(Math.pow(b, 2)/(Math.pow(a, 2))-4*c/a)+b/a),1/2*(Math.sqrt(Math.pow(b, 2)/(Math.pow(a, 2))-4*c/a)-b/a)] ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 32 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('f = roots(integral(a*x + b))');
  if ((testResult[0] === "All local dependencies:  variable f depends on: a, b, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable f depends on: a, b, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "f = function (a, b) { return ( [0,-2*b/a] ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 33 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('f = roots(defint(a*x + y,y,0,1))');
  if ((testResult[0] === "All local dependencies:  variable f depends on: a, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable f depends on: a, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "f = function (a) { return ( -1/(2*a) ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 34 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('f = roots(defint(a*x + y + z,y,0,1, z, 0, 1))');
  if ((testResult[0] === "All local dependencies:  variable f depends on: a, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable f depends on: a, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "f = function (a) { return ( -1/a ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 35 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('f = defint(2*x - 3*y,x,0,2*y)');
  if ((testResult[0] === "All local dependencies:  variable f depends on: y, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable f depends on: y, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "f = function (y) { return ( -2*Math.pow(y, 2) ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 36 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('f = defint(12 - x^2 - (y^2)/2,x,0,2,y,0,3)');
  if ((testResult[0] === "All local dependencies:  variable f depends on: ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable f depends on: ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "f = 55;")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 37 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  // this example checks that functions are not meddled with,
  // in particular that in the function body, the variables
  // bound by the parameters remain "separate" from previous
  // variables with the same name.
  testResult = algebrite.findDependenciesInScript('a = 2\nf(a) = a+1+b');
  if ((testResult[0] === "All local dependencies:  variable a depends on: ;  variable f depends on: 'a, b, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable a depends on: ;  variable f depends on: 'a, b, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "a = 2;\nf = function (a, b) { return ( 1+a+b ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 38 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  // similar as test above but this time we are not
  // defining a function, so things are a bit different.
  testResult = algebrite.findDependenciesInScript('a = 2\nf = a+1');
  if ((testResult[0] === "All local dependencies:  variable a depends on: ;  variable f depends on: a, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable a depends on: ;  variable f depends on: ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "a = 2;\nf = 3;")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 39 expected: " + testResult);
    }

  algebrite.do_clearall();

  // similar as test above but this time we do a
  // trick with the quote to see whether we
  // get confused with the indirection
  testResult = algebrite.findDependenciesInScript('a := b\nf = a+1');
  if ((testResult[0] === "All local dependencies:  variable a depends on: b, ;  variable f depends on: a, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable a depends on: b, ;  variable f depends on: b, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "a = function (b) { return ( b ); }\nf = function (b) { return ( 1+b ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 40 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  // another tricky case of indirection through quote
  testResult = algebrite.findDependenciesInScript('a := b\nf(a) = a+1');
  if ((testResult[0] === "All local dependencies:  variable a depends on: b, ;  variable f depends on: 'a, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable a depends on: b, ;  variable f depends on: 'a, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "a = function (b) { return ( b ); }\nf = function (a) { return ( 1+a ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 41 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  // reassignment
  testResult = algebrite.findDependenciesInScript('b = 1\nb=a+b+c');
  if ((testResult[0] === "All local dependencies:  variable b depends on: a, c, ; . Symbols with reassignments: b, . Symbols in expressions without assignments: . All dependencies recursively:  variable b depends on: a, c, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "b = function (a, c) { return ( 1+a+c ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 42 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  // reassignment
  testResult = algebrite.findDependenciesInScript('a = a+1');
  if ((testResult[0] === "All local dependencies:  variable a depends on: ; . Symbols with reassignments: a, . Symbols in expressions without assignments: . All dependencies recursively:  variable a depends on: ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "") &&
    (testResult[5] === "Error: Stop: recursive evaluation of symbols: a -> a")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 43 expected: " + testResult);
    }

  algebrite.do_clearall();

  // reassignment
  testResult = algebrite.computeDependenciesFromAlgebra('pattern(a,b)\nc= d\na=a+1');
  if ((testResult.affectsVariables.length === 3) &&
    (testResult.affectsVariables.indexOf("c") !== -1) &&
    (testResult.affectsVariables.indexOf("a") !== -1) &&
    (testResult.affectsVariables.indexOf("PATTERN_DEPENDENCY") !== -1) &&
    (testResult.affectedBy.length === 3) &&
    (testResult.affectedBy.indexOf("d") !== -1) &&
    (testResult.affectedBy.indexOf("a") !== -1) &&
    (testResult.affectedBy.indexOf("PATTERN_DEPENDENCY") !== -1)) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 44 expected: " + testResult);
    }

  algebrite.do_clearall();

  testResult = algebrite.computeDependenciesFromAlgebra('PCA(M) = eig(Mᵀ⋅M)');
  if ((testResult.affectsVariables.length === 1) &&
    (testResult.affectsVariables.indexOf("PCA") !== -1) &&
    (testResult.affectsVariables.indexOf("PATTERN_DEPENDENCY") === -1) &&
    (testResult.affectedBy.length === 1) &&
    (testResult.affectedBy.indexOf("PATTERN_DEPENDENCY") !== -1)) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 45 expected: " + testResult);
    }

  algebrite.do_clearall();

  testResult = algebrite.computeDependenciesFromAlgebra('pattern(a_ᵀ⋅a_, cov(a_))');
  if ((testResult.affectsVariables.length === 1) &&
    (testResult.affectsVariables.indexOf("PATTERN_DEPENDENCY") !== -1) &&
    (testResult.affectedBy.length === 1) &&
    (testResult.affectedBy.indexOf("PATTERN_DEPENDENCY") !== -1)) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 46 expected: " + testResult);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('a = b\nf = a+1');
  if ((testResult[0] === "All local dependencies:  variable a depends on: b, ;  variable f depends on: a, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable a depends on: b, ;  variable f depends on: b, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "a = function (b) { return ( b ); }\nf = function (b) { return ( 1+b ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 47 obtained: ");
      console.log("testResult[0]: " + testResult[0]);
      console.log("testResult[1]: " + testResult[1]);
      console.log("testResult[2]: " + testResult[2]);
    }

  algebrite.do_clearall();

  testResult = algebrite.findDependenciesInScript('PCA(M) = eig(cov(M))');
  if ((testResult[0] === "All local dependencies:  variable PCA depends on: 'M, ; . Symbols with reassignments: . Symbols in expressions without assignments: . All dependencies recursively:  variable PCA depends on: 'M, ; ") &&
    (testResult[1] === "") &&
    (testResult[2] === "PCA = function (M) { return ( eig(cov(M)) ); }")) {
      console.log("ok dependency test");
  } else {
      console.log("fail dependency test 48 expected: " + testResult);
    }

  algebrite.do_clearall();

  algebrite.computeResultsAndJavaScriptFromAlgebra('PCA(M) = eig(Mᵀ⋅M)');
  testResult = algebrite.run('symbolsinfo');
  if (testResult.indexOf('AVOID_BINDING_TO_EXTERNAL_SCOPE_VALUE') !== -1) { 
      console.log("fail dependency tests 49 found AVOID_BINDING_TO_EXTERNAL_SCOPE_VALUE");
  } else {
      console.log("ok dependency test");
    }

  algebrite.do_clearall();

  // this checks error handling in case of pattern and syntax error
  // picked up during scanning.
  algebrite.computeResultsAndJavaScriptFromAlgebra('pattern(a_ᵀ⋅a_, cov(a_))');
  algebrite.computeResultsAndJavaScriptFromAlgebra('simplify(');
  testResult = algebrite.computeResultsAndJavaScriptFromAlgebra('PCA = Mᵀ·M');

  if ((testResult.code === "PCA = function (M) { return ( cov(M) ); }") &&
    (testResult.latexResult === "$$PCA(M) = cov(M)$$") &&
    (testResult.result === "$$PCA(M) = cov(M)$$") &&
    (testResult.dependencyInfo.affectedBy[0] === "M") &&
    (testResult.dependencyInfo.affectedBy[1] === "PATTERN_DEPENDENCY") &&
    (testResult.dependencyInfo.affectsVariables.length === 1) &&
    (testResult.dependencyInfo.affectsVariables[0] === "PCA")) {
        console.log("ok dependency test");
    } else {
        console.log("fail dependency tests 50 Error handling 1");
        console.log(testResult);
        return;
      }

  algebrite.do_clearall();

  testResult = algebrite.computeResultsAndJavaScriptFromAlgebra('x + x + x');

  if ((testResult.code === "") &&
    (testResult.latexResult === "$$3x$$") &&
    (testResult.result === "$$3x$$") &&
    (testResult.dependencyInfo.affectedBy.length === 2) &&
    (testResult.dependencyInfo.affectedBy[0] === "x") &&
    (testResult.dependencyInfo.affectedBy[1] === "PATTERN_DEPENDENCY") &&
    (testResult.dependencyInfo.affectsVariables.length === 0)) {
        console.log("ok dependency test");
    } else {
        console.log("fail dependency tests 51");
      }

  algebrite.do_clearall();

  algebrite.computeResultsAndJavaScriptFromAlgebra('x = y + 2');
  testResult = algebrite.computeResultsAndJavaScriptFromAlgebra('x + x + x');

  if ((testResult.code === "") &&
    (testResult.latexResult === "$$3y+6$$") &&
    (testResult.result === "$$3y+6$$") &&
    (testResult.dependencyInfo.affectedBy.length === 2) &&
    (testResult.dependencyInfo.affectedBy[0] === "x") &&
    (testResult.dependencyInfo.affectedBy[1] === "PATTERN_DEPENDENCY") &&
    (testResult.dependencyInfo.affectsVariables.length === 0)) {
        console.log("ok dependency test");
    } else {
        console.log("fail dependency tests 52");
      }

  algebrite.do_clearall();

  testResult = algebrite.computeResultsAndJavaScriptFromAlgebra('[[0,1],[1,0]]');

  if ((testResult.latexResult === "$$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$$") &&
    (testResult.result === "$$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$$") &&
    (testResult.dependencyInfo.affectsVariables.length === 0)) {
        console.log("ok dependency test");
    } else {
        console.log("fail dependency tests 53");
      }

  algebrite.do_clearall();

  testResult = algebrite.computeResultsAndJavaScriptFromAlgebra('x = [[0,1],[1,0]]');

  if ((testResult.code === "x = [[0,1],[1,0]];") &&
    (testResult.latexResult === "$$x = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$$") &&
    (testResult.result === "$$x = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$$") &&
    (testResult.dependencyInfo.affectedBy.length === 1) &&
    (testResult.dependencyInfo.affectedBy[0] === "PATTERN_DEPENDENCY") &&
    (testResult.dependencyInfo.affectsVariables.length === 1) &&
    (testResult.dependencyInfo.affectsVariables[0] === "x")) {
        console.log("ok dependency test");
    } else {
        console.log("fail dependency tests 54");
      }

  algebrite.do_clearall();

  // a simple array lookup like this is turned into
  // a function, which is slighly silly but
  // it's orthogonal, this works also if instead of
  // b we have an arbitrary non-trivial function
  // on b, maybe even symbolic e.g. the round
  // of the root of by = 6, i.e. round(root(by-6,y))
  testResult = algebrite.computeResultsAndJavaScriptFromAlgebra('x = a[b]');

  if ((testResult.code === "x = function (a, b) { return ( a[b] ); }") &&
    (testResult.latexResult === "$$x(a, b) = a[b]$$") &&
    (testResult.result === "$$x(a, b) = a[b]$$") &&
    (testResult.dependencyInfo.affectedBy.length === 3) &&
    (testResult.dependencyInfo.affectedBy[0] === "a") &&
    (testResult.dependencyInfo.affectedBy[1] === "b") &&
    (testResult.dependencyInfo.affectedBy[2] === "PATTERN_DEPENDENCY") &&
    (testResult.dependencyInfo.affectsVariables.length === 1) &&
    (testResult.dependencyInfo.affectsVariables[0] === "x")) {
        console.log("ok dependency test");
    } else {
        console.log("fail dependency tests 55");
      }

  algebrite.do_clearall();

  testResult = algebrite.computeResultsAndJavaScriptFromAlgebra('x = a ⋅ b');

  if ((testResult.code === "x = function (a, b) { return ( dot(a, b) ); }") &&
    (testResult.latexResult === "$$x(a, b) = a \\cdot b$$") &&
    (testResult.result === "$$x(a, b) = a \\cdot b$$") &&
    (testResult.dependencyInfo.affectedBy.length === 3) &&
    (testResult.dependencyInfo.affectedBy[0] === "a") &&
    (testResult.dependencyInfo.affectedBy[1] === "b") &&
    (testResult.dependencyInfo.affectedBy[2] === "PATTERN_DEPENDENCY") &&
    (testResult.dependencyInfo.affectsVariables.length === 1) &&
    (testResult.dependencyInfo.affectsVariables[0] === "x")) {
        console.log("ok dependency test");
    } else {
        console.log("fail dependency tests 56");
      }

  algebrite.do_clearall();

  // Here we test an actual sequence of invokations form the
  // notebook.

  let code1 = 'pattern(a_ᵀ⋅a_, cov(a_))';
  let code2 = 'PCA = Mᵀ·M';

  // invokation sequence, we check that the
  // full evaluation of the last piece of code
  // gives the correct result.
  algebrite.computeDependenciesFromAlgebra(code1);
  algebrite.computeDependenciesFromAlgebra(code2);
  algebrite.computeResultsAndJavaScriptFromAlgebra(code1);
  algebrite.computeDependenciesFromAlgebra(code1);
  algebrite.computeDependenciesFromAlgebra(code2);
  let res = algebrite.computeResultsAndJavaScriptFromAlgebra(code2);

  if ((res.code === 'PCA = function (M) { return ( cov(M) ); }') &&
    (res.latexResult === '$$PCA(M) = cov(M)$$') &&
    (res.dependencyInfo.affectsVariables.length === 1) &&
    (res.dependencyInfo.affectsVariables[0] === 'PCA') &&
    (res.dependencyInfo.affectedBy.length === 2) &&
    (res.dependencyInfo.affectedBy[0] === 'M') &&
    (res.dependencyInfo.affectedBy[1] === 'PATTERN_DEPENDENCY')) {
        console.log("ok dependency test");
    } else {
        console.log("fail dependency tests 57");
      }



  algebrite.do_clearall();

  // overwriting a pattern, as seen from the notebook

  code1 = 'pattern(a_ + a_, 42 * a_)';
  code2 = 'pattern(a_ + a_, 21 * a_)';
  const code3 = 'f = x + x';

  algebrite.computeResultsAndJavaScriptFromAlgebra(code1);
  algebrite.computeResultsAndJavaScriptFromAlgebra(code2);
  res = algebrite.computeResultsAndJavaScriptFromAlgebra(code3);

  if ((res.code === 'f = function (x) { return ( 21*x ); }') &&
    (res.latexResult === '$$f(x) = 21x$$') &&
    (res.dependencyInfo.affectsVariables.length === 1) &&
    (res.dependencyInfo.affectsVariables[0] === 'f') &&
    (res.dependencyInfo.affectedBy.length === 2) &&
    (res.dependencyInfo.affectedBy[0] === 'x') &&
    (res.dependencyInfo.affectedBy[1] === 'PATTERN_DEPENDENCY')) {
        console.log("ok dependency test");
    } else {
        console.log("fail dependency tests 58");
      }



  algebrite.do_clearall();

  // tests

  res = algebrite.computeResultsAndJavaScriptFromAlgebra("f=test(x<1,-x-4,3<=x,x*x+7,120/x+5)");

  if ((res.code === 'f = function (x) { return ( (function(){if (((x) < (1))){return (-x-4);} else if (((3) <= (x))){return (x*x+7);}else {return (120/x+5);}})() ); }') &&
    (res.latexResult === '$$f(x) = \\left\\{ \\begin{array}{ll}{-x-4} & if & {x} < {1} \\\\\\\\{xx+7} & if & {3} \\leq {x} \\\\\\\\{\\frac{120}{x}+5} & otherwise  \\end{array} \\right.$$') &&
    (res.dependencyInfo.affectsVariables.length === 1) &&
    (res.dependencyInfo.affectsVariables[0] === 'f') &&
    (res.dependencyInfo.affectedBy.length === 2) &&
    (res.dependencyInfo.affectedBy[0] === 'x') &&
    (res.dependencyInfo.affectedBy[1] === 'PATTERN_DEPENDENCY')) {
        console.log("ok dependency test");
    } else {
        console.log("fail dependency tests 59");
      }


  algebrite.do_clearall();

  // tests

  res = algebrite.computeResultsAndJavaScriptFromAlgebra("f=floor(x) + ceiling(x) + round(x)");

  if ((res.code === 'f = function (x) { return ( ceiling(x)+floor(x)+round(x) ); }') &&
    (res.latexResult === '$$f(x) =  \\lceil {x} \\rceil + \\lfloor {x} \\rfloor +round(x)$$') &&
    (res.dependencyInfo.affectsVariables.length === 1) &&
    (res.dependencyInfo.affectsVariables[0] === 'f') &&
    (res.dependencyInfo.affectedBy.length === 2) &&
    (res.dependencyInfo.affectedBy[0] === 'x') &&
    (res.dependencyInfo.affectedBy[1] === 'PATTERN_DEPENDENCY')) {
        console.log("ok dependency test");
    } else {
        console.log("fail dependency tests 60");
      }


  algebrite.do_clearall();

  return console.log("-- done dependency tests");
};

// sourcefile:  tests/derivative.coffee 
const test_derivative = () => run_test([

  "x=quote(x)",
  "",

  "f=quote(f)",
  "",

  "g=quote(g)",
  "",

  "d(a,x)",
  "0",

  "d(x,x)",
  "1",

  "d(x^2,x)",
  "2*x",

  "d(log(x),x)",
  "1/x",

  "d(exp(x),x)",
  "exp(x)",

  "d(a^x,x)",
  "a^x*log(a)",

  "d(x^x,x)-(x^x+x^x*log(x))",
  "0",

  "d(log(x^2+5),x)-(2*x/(5+x^2))",
  "0",

  "d(d(f(x),x),y)",
  "0",

  "d(d(f(x),y),x)",
  "0",

  "d(d(f(y),x),y)",
  "0",

  "d(d(f(y),y),x)",
  "0",

  "d([x*y*z,y,x+z],[x,y,z])",
  "[[y*z,x*z,x*y],[0,1,0],[1,0,1]]",

  "d(x+z,[x,y,z])",
  "[1,0,1]",

  "d(cos(theta)^2,cos(theta))",
  "2*cos(theta)",

  "d(f())",
  "d(f(),x)",

  "d(x^2)",
  "2*x",

  "d(t^2)",
  "2*t",

  "d(t^2 x^2)",
  "2*t^2*x",

  // trig functions

  "d(sin(x),x)-cos(x)",
  "0",

  "d(cos(x),x)+sin(x)",
  "0",

  "d(tan(x),x)-cos(x)^(-2)",
  "0",

  "d(arcsin(x),x)-1/sqrt(1-x^2)",
  "0",

  "d(arccos(x),x)+1/sqrt(1-x^2)",
  "0",

  "d(arctan(x),x)-1/(1+x^2)",
  "0",

  "d(arctan(y/x),x)",
  "-y/(x^2+y^2)",

  "d(arctan(y/x),y)",
  "x/(x^2+y^2)",

  // hyp functions

  "d(sinh(x),x)-cosh(x)",
  "0",

  "d(cosh(x),x)-sinh(x)",
  "0",

  "d(tanh(x),x)-cosh(x)^(-2)",
  "0",

  "d(arcsinh(x),x)-1/sqrt(x^2+1)",
  "0",

  "d(arccosh(x),x)-1/sqrt(x^2-1)",
  "0",

  "d(arctanh(x),x)-1/(1-x^2)",
  "0",

  "d(sin(cos(x)),x)+cos(cos(x))*sin(x)",
  "0",

  "d(sin(x)^2,x)-2*sin(x)*cos(x)",
  "0",

  "d(sin(cos(x)),cos(x))-cos(cos(x))",
  "0",

  "d(abs(x),x)",
  "sgn(x)",
  
  "d(sgn(x),x)",
  "2*dirac(x)",

  // generic functions

  "d(f(),x)",
  "d(f(),x)",

  "d(f(x),x)",
  "d(f(x),x)",

  "d(f(y),x)",
  "0",

  "d(g(f(x)),f(x))",
  "d(g(f(x)),f(x))",

  "d(g(f(x)),x)",
  "d(g(f(x)),x)",

  // other functions

  "d(erf(x))-2*exp(-x^2)/sqrt(pi)",
  "0",

  // arg lists

  "f=x^5*y^7",
  "",

  "d(f)",
  "5*x^4*y^7",

  "d(f,x)",
  "5*x^4*y^7",

  "d(f,x,0)",
  "x^5*y^7",

  "d(f,x,1)",
  "5*x^4*y^7",

  "d(f,x,2)",
  "20*x^3*y^7",

  "d(f,2)",
  "20*x^3*y^7",

  "d(f,2,y)",
  "140*x^3*y^6",

  "d(f,x,x,y,y)",
  "840*x^3*y^5",

  "f=quote(f)",
  "",
]);

// sourcefile:  tests/dirac.coffee 
const test_dirac = () => run_test([
  "dirac(-x)",
  "dirac(x)",
]);

// sourcefile:  tests/divisors.coffee 
const test_divisors = () => run_test([

  "divisors(12)",
  "[1,2,3,4,6,12]",

  "divisors(-12)",
  "[1,2,3,4,6,12]",

  "divisors(a)",
  "[1,a]",

  "divisors(-a)",
  "[1,a]",

  "divisors(+3*x+3)",
  "[1,3,1+x,3+3*x]",

  "divisors(+3*x-3)",
  "[1,3,-3+3*x,-1+x]",

  "divisors(-3*x+3)",
  "[1,3,1-x,3-3*x]",

  "divisors(-3*x-3)",
  "[1,3,1+x,3+3*x]",
]);

// sourcefile:  tests/eigen.coffee 
const test_eigen = () => run_test([
  "eigen(A)",
  "Stop: eigen: argument is not a square matrix",

  "eigenval(A)",
  "eigenval(A)",

  "eigenvec(A)",
  "eigenvec(A)",

  "eigen([1,2])",
  "Stop: eigen: argument is not a square matrix",

  "eigen([[1,2],[1,2]])",
  "Stop: eigen: matrix is not symmetrical",

  "eigenval([[1,1,1,1],[1,2,3,4],[1,3,6,10],[1,4,10,20]])",
  "[[0.038016...,0.0,0.0,0.0],[0.0,0.453835...,0.0,0.0],[0.0,0.0,2.203446...,0.0],[0.0,0.0,0.0,26.304703...]]",

  "eigenvec([[1,1,1,1],[1,2,3,4],[1,3,6,10],[1,4,10,20]])",
  "[[0.308686...,-0.723090...,0.594551...,-0.168412...],[0.787275...,-0.163234...,-0.532107...,0.265358...],[0.530366...,0.640332...,0.391832...,-0.393897...],[0.060187...,0.201173...,0.458082...,0.863752...]]",
  "eigen(hilbert(20))",
  "",

  // "contract" is the trace, but "trace" is a algebrite.DEBUGging flag in
  // Algebrite/Eigenmath
  // this one takes quite some time to finish because of the
  // "dot(transpose(Q),D,Q))" calculation. Note that since
  // D and Q are matrices of doubles, the whole result is a double.
  // also note that the result gives "-0.000000...", that's why I put the abs there
  // Note that this should be really "0" however, because of calculation errors,
  // it doesn't test equal to "0", so we get to this result
  "abs(contract(hilbert(20))-contract(dot(transpose(Q),D,Q)))",
  "0.000000...",

  "D=quote(D)",
  "",

  "Q=quote(Q)",
  "",

  "A=hilbert(3)",
  "",

  "eigen(A)",
  "",

  "D-eigenval(A)",
  "[[0,0,0],[0,0,0],[0,0,0]]",

  "Q-eigenvec(A)",
  "[[0,0,0],[0,0,0],[0,0,0]]",

  "A=quote(A)",
  "",

  "D=quote(D)",
  "",

  "Q=quote(Q)",
  "",
]);

// sourcefile:  tests/erf.coffee 
const test_erf = () => run_test([

  "erf(a)",
  "erf(a)",

  "erf(0.0) + 1",
  "1.0",

  "float(erf(0))",
  "0.0",

  "erf(0.0)",
  "0.0",

  "erf(-0.0)",
  "0.0",

  "erf(0)",
  "0",

  "erf(-0)",
  "0",

  "float(erf(0)) + 1",
  "1.0",

  "float(erf(1))",
  "0.842701...",

]);


// sourcefile:  tests/erfc.coffee 
const test_erfc = () => run_test([

  "erfc(a)",
  "erfc(a)",

  "erfc(0.0)",
  "1.0",

  "float(erfc(0))",
  "1.0",

  "erfc(0.0)",
  "1.0",

  "erfc(-0.0)",
  "1.0",

  "erfc(0)",
  "1",

  "erfc(-0)",
  "1",

  "float(erfc(1))",
  "0.157299...",
  
]);

// sourcefile:  tests/exp.coffee 
const test_exp = () => run_test([

  "exp(-3/4*i*pi)",
  //"exp(-3/4*i*pi)",
  "-1/2*2^(1/2)-1/2*i*2^(1/2)",

  "simplify(exp(-3/4*i*pi))",
  //"exp(-3/4*i*pi)",
  //"-1/2*2^(1/2)-1/2*i*2^(1/2)",
  "-(1+i)/(2^(1/2))",

]);

// sourcefile:  tests/expand.coffee 
const test_expand = () => run_test([

  // general cases

  "expand(1/(x+1)/(x+2))",
  "1/(x+1)-1/(x+2)",

  "expand((2x^3-x+2)/(x^2-2x+1))",
  "4+2*x+5/(x-1)+3/(x^2-2*x+1)",

  "expand(1/x^2/(x-1))",
  "-1/(x^2)-1/x+1/(x-1)",

  "p=5s+2",
  "",

  "q=(s+1)*(s+2)^2",
  "",

  "expand(p/q)",
  "-3/(s+1)+3/(s+2)+8/(s^2+4*s+4)",

  // ensure denominators are expanded (result seems preferable that way)

  "q=(x-1)*(x-2)^3",
  "",

  "expand(1/q)",
  "1/(x^3-6*x^2+12*x-8)+1/(x-2)-1/(x-1)-1/(x^2-4*x+4)",

  // fractional poles

  "expand(1/(x+1/2)/(x+1/3))",
  "-12/(2*x+1)+18/(3*x+1)",

  // expand tensor

  "f=1/(x+1)/(x+2)",
  "",

  "g=1/(x+1)-1/(x+2)",
  "",

  "expand([[f,f],[f,f]])-[[g,g],[g,g]]",
  "[[0,0],[0,0]]",

  // denominator normalized?

  "expand(1/(1+1/x))",
  "1-1/(x+1)",

  // poles at zero

  "expand(1/x/(x+1))",
  "1/x-1/(x+1)",

  "expand(1/x^2/(x+1))",
  //"x^(-2)-1/x+1/(x+1)",
  "1/x^2-1/x+1/(x+1)",

  // other corner cases

  "expand(1/x)",
  "1/x",

  "expand(1/x^2)",
  //"x^(-2)",
  "1/x^2",

  "expand(1/(x^2-4x+4))",
  "1/(x^2-4*x+4)",

  // cases where nothing can be done

  "expand(sin(x))",
  "sin(x)",

  "expand(x)",
  "x",

  "expand(1/sin(x))",
  // unclear why the extra parens are added but no biggie
  "1/(sin(x))",

  // note that expand isn't needed to execute the
  // multiplications, expand does something
  // different.
  "expand(expand((sin(x)+1)^2))",
  "1+sin(x)^2+2*sin(x)",

]);

// sourcefile:  tests/expcos.coffee 
const test_expcos = () => run_test([

  "expcos(x)",
  "1/2*exp(-i*x)+1/2*exp(i*x)",
]);

// sourcefile:  tests/expsin.coffee 
const test_expsin = () => run_test([

  "expsin(x)",
  "1/2*i*exp(-i*x)-1/2*i*exp(i*x)",
]);

// sourcefile:  tests/factor.coffee 
const test_factor_number = () => run_test([

  "factor(0)",
  "0",

  "factor(1)",
  "1",

  "factor(2)",
  "2",

  "factor(3)",
  "3",

  "factor(4)",
  "2^2",

  "factor(5)",
  "5",

  "factor(6)",
  "2*3",

  "factor(7)",
  "7",

  "factor(8)",
  "2^3",

  "factor(9)",
  "3^2",

  "factor(10)",
  "2*5",

  "factor(100!)",
  "2^97*3^48*5^24*7^16*11^9*13^7*17^5*19^5*23^4*29^3*31^3*37^2*41^2*43^2*47^2*53*59*61*67*71*73*79*83*89*97",

  "factor(2*(2^30-35))",
  "2*1073741789",

  // x is the 10,000th prime

  // Prime factors greater than x^2 are found using the Pollard rho method

  "a=104729",
  "",

  "factor(2*(a^2+6))",
  "2*10968163447",

  "factor((a^2+6)^2)",
  "10968163447*10968163447",  // FIXME should be 10968163447^2

  "factor((a^2+6)*(a^2+60))",
  "10968163501*10968163447",  // FIXME sort order

  "f=(x+1)*(x+2)*(y+3)*(y+4)",
  "",

  "factor(f,x,y)",
  "(x+1)*(x+2)*(y+3)*(y+4)",

  "factor(f,y,x)",
  "(x+1)*(x+2)*(y+3)*(y+4)",

  "f=(x+1)*(x+1)*(y+2)*(y+2)",
  "",

  "factor(f,x,y)",
  "(x+1)^2*(y+2)^2",

  "factor(f,y,x)",
  "(x+1)^2*(y+2)^2",

  "factor((x+1)*(-x^2+x+1),x)",
  "-(x^2-x-1)*(x+1)",
    
  "factor((x+1)*(x^2-x-1),x)",
  "(x^2-x-1)*(x+1)",

  "factor(5*x^3-5)",
  "5*(x-1)*(x^2+x+1)",

  "factor((x+1)*(2x+4))",
  "2*(x+1)*(x+2)",

  "factor(x^8 - 1)",
  "(x-1)*(x+1)*(x^2+1)*(x^4+1)",

  "factor((x-1)*(x+1)*(x^2+1)*(2*x^4+2))",
  "2*(x-1)*(x+1)*(x^2+1)*(x^4+1)",

  "factor((x-1)*(x+1)*(2*x^2+2)*(x^4+1))",
  "2*(x-1)*(x+1)*(x^2+1)*(x^4+1)",

  "factor(x^1 - 1)",
  "x-1",

  "factor(x^2 - 1)",
  "(x-1)*(x+1)",

  "factor(x^3 - 1)",
  "(x-1)*(x^2+x+1)",

  "factor(x^4 - 1)",
  "(x-1)*(x+1)*(x^2+1)",

  "factor(x^5 - 1)",
  "(x-1)*(x^4+x^3+x^2+x+1)",

  "factor(x^6 - 1)",
  "(x-1)*(x+1)*(x^2+x+1)*(x^2+1)",

  "factor(x^7 - 1)",
  "(x-1)*(x^6+x^5+x^4+x^3+x^2+x+1)",

  // irreducible in Z
  "factor(1+x+x^2+x^3+x^4)",
  "x^4+x^3+x^2+x+1",

  "factor(x^4 - 1*x^3 + 4*x^2 + 3*x + 5)",
  "(x^2+x+1)*(x^2-2*x+5)",

  // clean up
  "a = quote(a)",
  "",

  "f = quote(f)",
  "",

]);

// sourcefile:  tests/factorpoly.coffee 
const test_factorpoly = () => run_test([

  "bake=0",
  "",

  "factor((x+1)*(x+2)*(x+3),x)",
  "(1+x)*(2+x)*(3+x)",

  "factor((x+a)*(x^2+x+1),x)",
  "(1+x+x^2)*(a+x)",

  "factor(x*(x+1)*(x+2),x)",
  "x*(1+x)*(2+x)",

  "factor((x+1)*(x+2)*(y+3)*(y+4))",
  "(1+x)*(2+x)*(12+7*y+y^2)",

  "factor((x+1)*(x+2)*(y+3)*(y+4),x,y)",
  "(1+x)*(2+x)*(3+y)*(4+y)",

  "factor((-2*x+3)*(x+4),x)",
  "-(-3+2*x)*(4+x)",

  "(-2*x+3)*(x+4)+(-3+2*x)*(4+x)",
  "0",

  // make sure sign of remaining poly is factored

  "factor((x+1)*(-x^2+x+1),x)",
  "-(-1-x+x^2)*(1+x)",

// sign handling

//++++++

  "factor((x+1/2)*(+x+1/3)*(+x+1/4),x)",
  "1/24*(1+2*x)*(1+3*x)*(1+4*x)",

  "(x+1/2)*(+x+1/3)*(+x+1/4)-1/24*(1+2*x)*(1+3*x)*(1+4*x)",
  "0",

//+++++-

  "factor((x+1/2)*(+x+1/3)*(+x-1/4),x)",
  "1/24*(-1+4*x)*(1+2*x)*(1+3*x)",

  "(x+1/2)*(+x+1/3)*(+x-1/4)-1/24*(-1+4*x)*(1+2*x)*(1+3*x)",
  "0",

//++++-+

  "factor((x+1/2)*(+x+1/3)*(-x+1/4),x)",
  "-1/24*(-1+4*x)*(1+2*x)*(1+3*x)",

  "(x+1/2)*(+x+1/3)*(-x+1/4)+1/24*(-1+4*x)*(1+2*x)*(1+3*x)",
  "0",

//++++--

  "factor((x+1/2)*(+x+1/3)*(-x-1/4),x)",
  "-1/24*(1+2*x)*(1+3*x)*(1+4*x)",

  "(x+1/2)*(+x+1/3)*(-x-1/4)+1/24*(1+2*x)*(1+3*x)*(1+4*x)",
  "0",

//+++-++

  "factor((x+1/2)*(+x-1/3)*(+x+1/4),x)",
  "1/24*(-1+3*x)*(1+2*x)*(1+4*x)",

  "(x+1/2)*(+x-1/3)*(+x+1/4)-1/24*(-1+3*x)*(1+2*x)*(1+4*x)",
  "0",

//+++-+-

  "factor((x+1/2)*(+x-1/3)*(+x-1/4),x)",
  "1/24*(-1+3*x)*(-1+4*x)*(1+2*x)",

  "(x+1/2)*(+x-1/3)*(+x-1/4)-1/24*(-1+3*x)*(-1+4*x)*(1+2*x)",
  "0",

//+++--+

  "factor((x+1/2)*(+x-1/3)*(-x+1/4),x)",
  "-1/24*(-1+3*x)*(-1+4*x)*(1+2*x)",

  "(x+1/2)*(+x-1/3)*(-x+1/4)+1/24*(-1+3*x)*(-1+4*x)*(1+2*x)",
  "0",

//+++---

  "factor((x+1/2)*(+x-1/3)*(-x-1/4),x)",
  "-1/24*(-1+3*x)*(1+2*x)*(1+4*x)",

  "(x+1/2)*(+x-1/3)*(-x-1/4)+1/24*(-1+3*x)*(1+2*x)*(1+4*x)",
  "0",

//++-+++

  "factor((x+1/2)*(-x+1/3)*(+x+1/4),x)",
  "-1/24*(-1+3*x)*(1+2*x)*(1+4*x)",

  "(x+1/2)*(-x+1/3)*(+x+1/4)+1/24*(-1+3*x)*(1+2*x)*(1+4*x)",
  "0",

//++-++-

  "factor((x+1/2)*(-x+1/3)*(+x-1/4),x)",
  "-1/24*(-1+3*x)*(-1+4*x)*(1+2*x)",

  "(x+1/2)*(-x+1/3)*(+x-1/4)+1/24*(-1+3*x)*(-1+4*x)*(1+2*x)",
  "0",

//++-+-+

  "factor((x+1/2)*(-x+1/3)*(-x+1/4),x)",
  "1/24*(-1+3*x)*(-1+4*x)*(1+2*x)",

  "(x+1/2)*(-x+1/3)*(-x+1/4)-1/24*(-1+3*x)*(-1+4*x)*(1+2*x)",
  "0",

//++-+--

  "factor((x+1/2)*(-x+1/3)*(-x-1/4),x)",
  "1/24*(-1+3*x)*(1+2*x)*(1+4*x)",

  "(x+1/2)*(-x+1/3)*(-x-1/4)-1/24*(-1+3*x)*(1+2*x)*(1+4*x)",
  "0",

//++--++

  "factor((x+1/2)*(-x-1/3)*(+x+1/4),x)",
  "-1/24*(1+2*x)*(1+3*x)*(1+4*x)",

  "(x+1/2)*(-x-1/3)*(+x+1/4)+1/24*(1+2*x)*(1+3*x)*(1+4*x)",
  "0",

//++--+-

  "factor((x+1/2)*(-x-1/3)*(+x-1/4),x)",
  "-1/24*(-1+4*x)*(1+2*x)*(1+3*x)",

  "(x+1/2)*(-x-1/3)*(+x-1/4)+1/24*(-1+4*x)*(1+2*x)*(1+3*x)",
  "0",

//++---+

  "factor((x+1/2)*(-x-1/3)*(-x+1/4),x)",
  "1/24*(-1+4*x)*(1+2*x)*(1+3*x)",

  "(x+1/2)*(-x-1/3)*(-x+1/4)-1/24*(-1+4*x)*(1+2*x)*(1+3*x)",
  "0",

//++----

  "factor((x+1/2)*(-x-1/3)*(-x-1/4),x)",
  "1/24*(1+2*x)*(1+3*x)*(1+4*x)",

  "(x+1/2)*(-x-1/3)*(-x-1/4)-1/24*(1+2*x)*(1+3*x)*(1+4*x)",
  "0",

//++++++

  "factor((+x+a)*(+x+b)*(+x+c),x)",
  "(a+x)*(b+x)*(c+x)",

  "(a+x)*(b+x)*(c+x)-(a+x)*(b+x)*(c+x)",
  "0",

//+++++-

  "factor((+x+a)*(+x+b)*(+x-c),x)",
  "(a+x)*(b+x)*(-c+x)",

  "(+x+a)*(+x+b)*(+x-c)-(a+x)*(b+x)*(-c+x)",
  "0",

//++++-+

  "factor((+x+a)*(+x+b)*(-x+c),x)",
  "-(a+x)*(b+x)*(-c+x)",

  "(+x+a)*(+x+b)*(-x+c)+(a+x)*(b+x)*(-c+x)",
  "0",

//++++--

  "factor((+x+a)*(+x+b)*(-x-c),x)",
  "-(a+x)*(b+x)*(c+x)",

  "(+x+a)*(+x+b)*(-x-c)+(a+x)*(b+x)*(c+x)",
  "0",

//++++

  "factor((+a*x+b)*(+c*x+d),x)",
  "(b+a*x)*(d+c*x)",

  "(+a*x+b)*(+c*x+d)-(b+a*x)*(d+c*x)",
  "0",

//+++-

  "factor((+a*x+b)*(+c*x-d),x)",
  "(b+a*x)*(-d+c*x)",

  "(+a*x+b)*(+c*x-d)-(b+a*x)*(-d+c*x)",
  "0",

//++-+

  "factor((+a*x+b)*(-c*x+d),x)",
  "-(b+a*x)*(-d+c*x)",

  "(+a*x+b)*(-c*x+d)+(b+a*x)*(-d+c*x)",
  "0",

//++--

  "factor((+a*x+b)*(-c*x-d),x)",
  "-(b+a*x)*(d+c*x)",

  "(+a*x+b)*(-c*x-d)+(b+a*x)*(d+c*x)",
  "0",

//+-++

  "factor((+a*x-b)*(+c*x+d),x)",
  "(d+c*x)*(-b+a*x)",

  "(+a*x-b)*(+c*x+d)-(d+c*x)*(-b+a*x)",
  "0",

//+-+-

  "factor((+a*x-b)*(+c*x-d),x)",
  "(-b+a*x)*(-d+c*x)",

  "(+a*x-b)*(+c*x-d)-(-b+a*x)*(-d+c*x)",
  "0",

//+--+

  "factor((+a*x-b)*(-c*x+d),x)",
  "-(-b+a*x)*(-d+c*x)",

  "(+a*x-b)*(-c*x+d)+(-b+a*x)*(-d+c*x)",
  "0",

//+---

  "factor((+a*x-b)*(-c*x-d),x)",
  "-(d+c*x)*(-b+a*x)",

  "(+a*x-b)*(-c*x-d)+(d+c*x)*(-b+a*x)",
  "0",

//-+++

  "factor((-a*x+b)*(+c*x+d),x)",
  "-(d+c*x)*(-b+a*x)",

  "(-a*x+b)*(+c*x+d)+(d+c*x)*(-b+a*x)",
  "0",

//-++-

  "factor((-a*x+b)*(+c*x-d),x)",
  "-(-b+a*x)*(-d+c*x)",

  "(-a*x+b)*(+c*x-d)+(-b+a*x)*(-d+c*x)",
  "0",

//-+-+

  "factor((-a*x+b)*(-c*x+d),x)",
  "(-b+a*x)*(-d+c*x)",

  "(-a*x+b)*(-c*x+d)-(-b+a*x)*(-d+c*x)",
  "0",

//-+--

  "factor((-a*x+b)*(-c*x-d),x)",
  "(d+c*x)*(-b+a*x)",

  "(-a*x+b)*(-c*x-d)-(d+c*x)*(-b+a*x)",
  "0",

//--++

  "factor((-a*x-b)*(+c*x+d),x)",
  "-(b+a*x)*(d+c*x)",

  "(-a*x-b)*(+c*x+d)+(b+a*x)*(d+c*x)",
  "0",

//--+-

  "factor((-a*x-b)*(+c*x-d),x)",
  "-(b+a*x)*(-d+c*x)",

  "(-a*x-b)*(+c*x-d)+(b+a*x)*(-d+c*x)",
  "0",

//---+

  "factor((-a*x-b)*(-c*x+d),x)",
  "(b+a*x)*(-d+c*x)",

  "(-a*x-b)*(-c*x+d)-(b+a*x)*(-d+c*x)",
  "0",

//----

  "factor((-a*x-b)*(-c*x-d),x)",
  "(b+a*x)*(d+c*x)",

  "(-a*x-b)*(-c*x-d)-(b+a*x)*(d+c*x)",
  "0",

  // this used to cause divide by zero

  // fixed by calling ispolyexpandedform before calling coeff

//  "factor(1/x+1)",
//  "(1+x)/x",

  // see if poly gets rationalized

//  "(x+1)(x+2)(x+3)/x^3",
//  "1+6/(x^3)+11/(x^2)+6/x",

//  "factor(last)",
//  "(1+x)*(2+x)*(3+x)/(x^3)",

  // this used to fail

  "factor(x,x)",
  "x",

  "factor(x^2,x)",
  "x^2",

  "factor(x^3,x)",
  "x^3",

  "bake=1",
  "",

  "y=(x+1)*(x+2)",
  "",

  "factor(y,z)",
  "x^2+3*x+2",

  "factor(y,y)",
  "x^2+3*x+2",

  "y=x^2+exp(x)",
  "",

  "factor(y)",
  "x^2+exp(x)",
]);

// sourcefile:  tests/float.coffee 
const test_float = () => run_test([

  "1.0+0",
  "1.0",

  "1+0.0",
  "1.0",

  "1+0.0-0.0",
  "1.0",

  "float(0)",
  "0.0",

  "1-float(0)",
  "1.0",

  "float(x)",
  "x",

  "float(1/2)",
  "0.5",

  "float(pi)",
  "3.141593...",

  "float(exp(1))",
  "2.718282...",

  "float(sin(2))",
  "0.909297...",

  "float(cos(2))",
  "-0.416147...",

  "x=[1/2,1/4]",
  "",

  "float(x)",
  "[0.5,0.25]",

  "x",
  "[1/2,1/4]",

  "x=quote(x)",
  "",

  "float((1+2*i)^(1/2))",
  "1.272020...+0.786151...*i",  

  "float((1+2*(-1)^(1/2))^(1/2))",
  "1.272020...+0.786151...*i",

  "float((-1)^(-0.666667+0.0291367/pi))",
  "-0.474559...-0.880224...*i",

  "abs(float((-1)^(-0.666667+0.0291367/pi)))",
  "1.0",

  // using float with an array
  "a = [2,3,4]",
  "",

  "float(a[1])",
  "2.0",

  "a=quote(a)",
  "",


]);


// sourcefile:  tests/floor.coffee 
const test_floor = () => run_test([
  "floor(a)",
  "floor(a)",

  "floor(a+b)",
  "floor(a+b)",

  "floor(5/2)",
  "2",

  "floor(4/2)",
  "2",

  "floor(3/2)",
  "1",

  "floor(2/2)",
  "1",

  "floor(1/2)",
  "0",

  "floor(0/2)",
  "0",

  "floor(-1/2)",
  "-1",

  "floor(-2/2)",
  "-1",

  "floor(-3/2)",
  "-2",

  "floor(-4/2)",
  "-2",

  "floor(-5/2)",
  "-3",

  "floor(5/2.0)",
  "2.0",

  "floor(4/2.0)",
  "2.0",

  "floor(3/2.0)",
  "1.0",

  "floor(2/2.0)",
  "1.0",

  "floor(1/2.0)",
  "0.0",

  "floor(0.0)",
  "0.0",

  "floor(-1/2.0)",
  "-1.0",

  "floor(-2/2.0)",
  "-1.0",

  "floor(-3/2.0)",
  "-2.0",

  "floor(-4/2.0)",
  "-2.0",

  "floor(-5/2.0)",
  "-3.0",
]);

// sourcefile:  tests/for.coffee 
const test_for = () => run_test([

  "x=0\ny=2\nfor(do(x=sqrt(2+x),y=2*y/x), k,1,9)\nfloat(y)",
  "3.141588...",

  "for(do(x=sqrt(2+x),y=2*y/x),k,1,iterations)",
  "for(do(x=sqrt(2+x),y=2*y/x),k,1,iterations)",

]);

// sourcefile:  tests/gamma.coffee 
const test_gamma = () => run_test([
  "Gamma(a)",
  "Gamma(a)",

  //  "float(gamma(10))",
  //  "362880",

  "Gamma(x+1)",
  "x*Gamma(x)",
  
  "Gamma(1/2)",
  "pi^(1/2)",
  
  "Gamma(x-1)-Gamma(x)/(-1+x)",
  "0",

  "Gamma(-x)",
  "-pi/(x*Gamma(x)*sin(pi*x))",
  
]);

// sourcefile:  tests/gcd.coffee 
const test_gcd = function() {

  const gcdTests = [];

  const GCD_TESTS_DONT_TEST_FACTOR = 1;

  const addGcdTest = function(arg1, arg2, result, dontTestFactor) {
    gcdTests.push("gcd(" + arg1 + "," + arg2 + ")");
    gcdTests.push(result);

    gcdTests.push("gcd(" + arg2 + "," + arg1 + ")");
    gcdTests.push(result);

    if ((dontTestFactor == null)) {
      gcdTests.push("gcd(factor(" + arg1 + ")," + arg2 + ")");
      gcdTests.push(result);
    }

    if ((dontTestFactor == null)) {
      gcdTests.push("gcd(factor(" + arg2 + ")," + arg1 + ")");
      gcdTests.push(result);
    }

    if ((dontTestFactor == null)) {
      gcdTests.push("gcd(" + arg1 + ",factor(" + arg2 + "))");
      gcdTests.push(result);
    }

    if ((dontTestFactor == null)) {
      gcdTests.push("gcd(" + arg2 + ",factor(" + arg1 + "))");
      gcdTests.push(result);
    }

    if ((dontTestFactor == null)) {
      gcdTests.push("gcd(factor(" + arg1 + "),factor(" + arg2 + "))");
      gcdTests.push(result);
    }

    if ((dontTestFactor == null)) {
      gcdTests.push("gcd(factor(" + arg2 + "),factor(" + arg1 + "))");
      return gcdTests.push(result);
    }
  };
  

  addGcdTest("30","42","6");
  addGcdTest("-30","42","6");
  addGcdTest("30","-42","6");
  addGcdTest("-30","-42","6", GCD_TESTS_DONT_TEST_FACTOR);

  addGcdTest("x","x","x");
  addGcdTest("-x","x","x");
  addGcdTest("-x","-x","-x");

  addGcdTest("x^2","x^3","x^2");
  addGcdTest("x","y","1");
  addGcdTest("x*y","y","y");
  addGcdTest("x*y","y^2","y");
  addGcdTest("x^2*y^2","x^3*y^3","x^2*y^2");
  addGcdTest("x^2","x^3","x^2");

  // gcd of expr
  addGcdTest("x+y","x+z","1");
  addGcdTest("x+y","x+y","x+y");
  addGcdTest("x+y","2*x+2*y","x+y", GCD_TESTS_DONT_TEST_FACTOR);
  addGcdTest("-x-y","x+y","x+y", GCD_TESTS_DONT_TEST_FACTOR);
  addGcdTest("4*x+4*y","6*x+6*y","2*x+2*y", GCD_TESTS_DONT_TEST_FACTOR);
  addGcdTest("4*x+4*y+4","6*x+6*y+6","2+2*x+2*y", GCD_TESTS_DONT_TEST_FACTOR);
  // TODO this is not really correct, it should give 2
  // however this was failing before all the gcd changes
  // of May 2019, so just leaving it in with a note
  addGcdTest("4*x+4*y+4","6*x+6*y+12","1", GCD_TESTS_DONT_TEST_FACTOR);
  addGcdTest("27*t^3+y^3+9*t*y^2+27*t^2*y","t+y","1");

  // gcd expr factor
  addGcdTest("2*a^2*x^2+a*x+a*b","a","a");
  addGcdTest("2*a^2*x^2+a*x+a*b","a^2","a");
  addGcdTest("2*a^2*x^2+2*a*x+2*a*b","a","a");

  // gcd expr term
  addGcdTest("2*a^2*x^2+2*a*x+2*a*b","2*a","2*a");
  addGcdTest("2*a^2*x^2+2*a*x+2*a*b","3*a","a");
  addGcdTest("2*a^2*x^2+2*a*x+2*a*b","4*a","2*a");

  // gcd factor factor
  addGcdTest("x","x^2","x");
  addGcdTest("x","x^a","1");


  // polynomials
  addGcdTest("(x+1)*(x+1)","x+1","x+1");
  addGcdTest("x*(x+1)","x","x");
  addGcdTest("x^2+7x+6","x^2-5x-6","x+1",
  addGcdTest("x*(x+1)^2","x+1","x+1"));
  addGcdTest("x*(x+1)","x+1","x+1");
  addGcdTest("x^2+3x","x^2+5x","x");
  addGcdTest("6x+20","2x+10","2");
  addGcdTest("x^3-3x^2","4x^2-5x","x");
  addGcdTest("x^2-9","x^2+5x+6","x+3");
  addGcdTest("x^2-3x+2","x^2-1","x-1");
  addGcdTest("x^2-2x-15","x^2+x-6","x+3");
  addGcdTest("10x^3","2x^2-18x","2*x");
  addGcdTest("6x^2","12x^4-9x^3","3*x^2");
  addGcdTest("(3-x)*(x-1)","(x-3)*(x+1)","x-3");
  addGcdTest("(x-2)*(x-5)","(2-x)*(x+5)","x-2");
  addGcdTest("15-10x","8x^3-12x^2","2*x-3");
  addGcdTest("3x","15x^2-6x","3*x");
  addGcdTest("3x^3-15x^2+12x","3x-3","3*x-3");
  addGcdTest("6x^2-12x","6x-3x^2","3*x^2-6*x");
  addGcdTest("2x^2+13x+20","2x^2+17x+30","2*x+5");
  addGcdTest("x^4+8x^2+7","3x^5-3x","x^2+1");
  addGcdTest("x^2+8x*k+16*k^2","x^2-16k^2","x+4*k");


  run_test(gcdTests);

  // multiple arguments
  return run_test([
    "gcd(12,18,9)",
    "3",
  ]);
};


// sourcefile:  tests/hermite.coffee 
const test_hermite = () => run_test([
  "hermite(x,n)",
  "hermite(x,n)",

  "hermite(x,0)-1",
  "0",

  "hermite(x,1)-2*x",
  "0",

  "hermite(x,2)-(4*x^2-2)",
  "0",

  "hermite(x,3)-(8*x^3-12*x)",
  "0",

  "hermite(x,4)-(16*x^4-48*x^2+12)",
  "0",

  "hermite(x,5)-(32*x^5-160*x^3+120*x)",
  "0",

  "hermite(x,6)-(64*x^6-480*x^4+720*x^2-120)",
  "0",

  "hermite(x,7)-(128*x^7-1344*x^5+3360*x^3-1680*x)",
  "0",

  "hermite(x,8)-(256*x^8-3584*x^6+13440*x^4-13440*x^2+1680)",
  "0",

  "hermite(x,9)-(512*x^9-9216*x^7+48384*x^5-80640*x^3+30240*x)",
  "0",

  "hermite(x,10)-(1024*x^10-23040*x^8+161280*x^6-403200*x^4+302400*x^2-30240)",
  "0",

  "hermite(a-b,10)-eval(subst(a-b,x,hermite(x,10)))",
  "0",
]);

// sourcefile:  tests/imag.coffee 
const test_imag = () => run_test([

  "imag(a+i*b)",
  "b",

  "imag(1+exp(i*pi/3))",
  "1/2*3^(1/2)",

  "imag(i)",
  "1",

  "imag((-1)^(1/3))",
  "1/2*3^(1/2)",

  "imag(-i)",
  "-1",
]);

// sourcefile:  tests/index.coffee 
const test_index = () => run_test([

  "A=[[A11,A12],[A21,A22]]",
  "",

  "A[1,1]",
  "A11",

  "A[1,2]",
  "A12",

  "A[2,1]",
  "A21",

  "A[2,2]",
  "A22",

  "A[1]",
  "[A11,A12]",

  "A[1][2]",
  "A12",

  "A[2]",
  "[A21,A22]",

  "A[1]=[B11,B12]",
  "",

  "A",
  "[[B11,B12],[A21,A22]]",

  "A[2]=[B21,B22]",
  "",

  "A",
  "[[B11,B12],[B21,B22]]",

  "A=[[0,0],[0,0]]",
  "",

  "A[1,1]",
  "0",

  // index of scalar should throw an error

  "1[2]",
  "Stop: trying to access a scalar as a tensor",

  // clean up -----------------

  "clearall",
  "",

  // index of a non-allocated tensor
  // or index with a symbol instead of
  // a number

  "a[0]",
  "a[0]",

  "a[0,2]",
  "a[0,2]",


  "a[b]",
  "a[b]",

  "a[b,c]",
  "a[b,c]",

  "a = [1,2,3]",
  "",

  "a[b]",
  "a[b]",

]);

// sourcefile:  tests/inner.coffee 
const test_inner = () => run_test([

  // since we don't know anything about
  // a and b, we have to leave this unevaluated
  // turning this into a normal multiplication (which is
  // commutative) would not be OK
  "inner(a,b)",
  "inner(a,b)",

  // this shouldn't ever go wrong
  // but one never knows
  "inner(b,a)",
  "inner(b,a)",

  "inner(2,a)",
  "2*a",

  "inner(a,2)",
  "2*a",

  "inner(a,[b1,b2])",
  "inner(a,[b1,b2])",

  "inner([a1,a2],b)",
  "inner([a1,a2],b)",

  "inner(2,[b1,b2])",
  "[2*b1,2*b2]",

  "inner([b1,b2],2)",
  "[2*b1,2*b2]",

  "inner([[a11,a12],[a21,a22]],[x1,x2])",
  "[a11*x1+a12*x2,a21*x1+a22*x2]",

  "inner([1,2],[3,4])",
  "11",

  // non-invertible matrix
  "inner([[2,2],[2,2]],[[0],[1]])",
  "[[2],[2]]",

  "inner(inner([1,2],[[3,4],[5,6]]),[7,8])",
  "219",

  "inner([1,2],inner([[3,4],[5,6]],[7,8]))",
  "219",

  "inner([1,2],[[3,4],[5,6]],[7,8])",
  "219",

  "inner(c,a1+b1)",
  "inner(c,a1)+inner(c,b1)",

  "inner(b1+c1,a)",
  "inner(b1,a)+inner(c1,a)",

  "inner(inner(a,b),c)",
  "inner(a,inner(b,c))",

  "inner(inner(a,b),c) - inner(a,inner(b,c))",
  "0",

  "inner(inner(a,b),c,d) - inner(a,b,inner(c,d))",
  "0",

  // trying some associativity and distributivity together
  "inner(inner(a,b),c,d+f) - ( (inner(a,inner(b,c),d)) + inner(inner(a,b),c,f) )",
  "0",

  // bring it to a canonical form
  // using associativity
  "inner(a,b,c)",
  "inner(a,inner(b,c))",

  "inner(a,b+c,d)",
  "inner(a,inner(b,d))+inner(a,inner(c,d))",

  "inner(inner(a,b),inner(c,d))",
  "inner(a,inner(b,inner(c,d)))",

  // scalar product of vectors:
  "inner([a, b, c], [x, y, z])",
  "a*x+b*y+c*z",

  // products of matrices and vectors:
  "inner([[a, b], [c,d]], [x, y])",
  "[a*x+b*y,c*x+d*y]",

  "inner([x, y], [[a, b], [c,d]])",
  "[a*x+c*y,b*x+d*y]",

  "inner([x, y], [[a, b], [c,d]], [r, s])",
  "a*r*x+b*s*x+c*r*y+d*s*y",

  // matrix product:

  "inner([[a,b],[c,d]],[[r,s],[t,u]])",
  "[[a*r+b*t,a*s+b*u],[c*r+d*t,c*s+d*u]]",

  // ---------------------------------------
  // using the dot
  // ---------------------------------------

  "a·b",
  "inner(a,b)",

  "a·b·c",
  "inner(a,inner(b,c))",

  "a·b*c",
  "c*inner(a,b)",

  // note how we use associativity to bring it all
  // to a canonical form
  "((a·b)·c)·d",
  "inner(a,inner(b,inner(c,d)))",

  "a*b·c",
  "a*inner(b,c)",

  "2*a·b",
  "2*inner(a,b)",

  "inv(a)·a",
  "I",

  "a·inv(a)",
  "I",

  "b·a·inv(a)·c",
  "inner(b,c)",

  "b·aᵀ·inv(aᵀ)·c",
  "inner(b,c)",

  "b·inv(aᵀ)·aᵀ·c",
  "inner(b,c)",

  "b·inv((a+b)ᵀ)·(b+a)ᵀ·c",
  "inner(b,c)",

  "(-a)·(-b)",
  "inner(a,b)",

  "I·I",
  "I",

  "I·Iᵀ",
  "I",

  "(-I)·(-I)",
  "I",

  "(-Iᵀ)·(-I)",
  "I",

  "c·(b+a)ᵀ·inv((a+b)ᵀ)·d",
  "inner(c,d)",
    
  "c·inv((b+a)ᵀ)·(a+b)ᵀ·d",
  "inner(c,d)",
    
  "c·(b+a)ᵀ·inv((a+b)ᵀ)·inv(c)",
  "I",

  "c·inv((b+a)ᵀ)·(a+b)ᵀ·inv(c)",
  "I",
    
  "inv(c)·(b+a)ᵀ·inv((a+b)ᵀ)·c",
  "I",

  "inv(c)·inv((b+a)ᵀ)·(a+b)ᵀ·c",
  "I",
    
    
  "c·d·(b+a)ᵀ·inv((a+b)ᵀ)",
  "inner(c,d)",

  "d·(b+a)ᵀ·inv((a+b)ᵀ)",
  "d",
    
  "(b+a)ᵀ·inv((a+b)ᵀ)",
  "I",
    
  "c·d·(b+a)ᵀ·inv((a+b)ᵀ)·inv(d)",
  "c",
        
  "c·d·(b+a)ᵀ·inv((a+b)ᵀ)·inv(d)·inv(c)",
  "I",
    
  "c·d·(b+a)ᵀ·inv((a+b)ᵀ)·inv(c·d)",
  "I",
    
  "c·d·(a+b)ᵀ·inv(c·d·(b+a)ᵀ)",
  "I",
    
  "inv(c)·c",
  "I",
    
  "inv(c·a)·c·a",
  "I",
    
  "inv(c·b·a)·c·b·a",
  "I",
    
  "inv(c)·d·(a+b)ᵀ·inv(inv(c)·d·(b+a)ᵀ)",
  "I",
    
  "inv(c+f)·d·(a+b)ᵀ·inv(inv(f+c)·d·(b+a)ᵀ)",
  "I",
    
  "c·d·inv(a)·inv(c·d·inv(a))",
  "I",

]);

// sourcefile:  tests/integral.coffee 
const test_integral = () => run_test([

  "clearall",
  "",

  "tty=1",
  "",

  "integral(x^2+x)-(1/2*x^2+1/3*x^3)",
  "0",

  //1
  "integral(A,X)",
  "A*X",

  //4
  "integral(A+B,X)-(A*X+B*X)",
  "0",

  //9
  "integral(1/X,X)",
  "log(X)",

  //11
  "integral(exp(X),X)",
  "exp(X)",

  //12
  "integral(exp(A*X),X)-exp(A*X)/A",
  "0",

  //14
  "integral(log(X),X)-X*log(X)+X",
  "0",

  //15
  "integral(3^X*log(3),X)",
  "3^X",

  //16
  "integral(1/(3+x^2),x)-3^(-1/2)*arctan(3^(-1/2)*x)",
  "0",

  //17
  "integral(1/(a-x^2),x)-a^(-1/2)*arctanh(a^(-1/2)*x)",
  "0",

  //19
  "integral(1/sqrt(a-x^2),x)-arcsin(a^(-1/2)*x)",
  "0",

  //20
  "integral(1/sqrt(a+x^2),x)-(log(x+(a+x^2)^(1/2)))",
  "0",

  //27
  "integral(1/(a+b*x),x)-(log(a+b*x)/b)",
  "0",

  //28
  "integral(1/(A+B*X)^2,X)+1/B*1/(A+B*X)",
  "0",

  //29
  "integral(1/(a+b*x)^3,x)+1/2*1/b*(a+b*x)^(-2)",
  "0",

  //30
  "integral(X/(A+B*X),X)+A*B^(-2)*log(A+B*X)-X/B",
  "0",

  //31
  "integral(X/(A+B*X)^2,X)-1/B^2*(log(A+B*X)+A/(A+B*X))",
  "0",

  //33
  "integral(X^2/(A+B*X),X)-1/B^2*(1/2*(A+B*X)^2-2*A*(A+B*X)+A^2*log(A+B*X))",
  "0",

  //34
  "integral(X^2/(A+B*X)^2,X)-1/B^3*(A+B*X-2*A*log(A+B*X)-A^2/(A+B*X))",
  "0",

  //35
  "integral(X^2/(A+B*X)^3,X)-1/B^3*(log(A+B*X)+2*A/(A+B*X)-1/2*A^2/(A+B*X)^2)",
  "0",

  //37
  "integral(1/X*1/(A+B*X),X)+1/A*log((A+B*X)/X)",
  "0",

  //38
  "integral(1/X*1/(A+B*X)^2,X)-1/A*1/(A+B*X)+1/A^2*log((A+B*X)/X)",
  "0",

  //39
  "integral(1/X*1/(A+B*X)^3,X)-1/A^3*(1/2*((2*A+B*X)/(A+B*X))^2+log(X/(A+B*X)))",
  "0",

  //40
  "integral(1/X^2*1/(A+B*X),X)+1/(A*X)-B/A^2*log((A+B*X)/X)",
  "0",

  //41
  "integral(1/X^3*1/(A+B*X),X)-(2*B*X-A)/(2*A^2*X^2)-B^2/A^3*log(X/(A+B*X))",
  "0",

  //42
  "integral(1/X^2*1/(A+B*X)^2,X)+(A+2*B*X)/(A^2*X*(A+B*X))-2*B/A^3*log((A+B*X)/X)",
  "0",

  //60
  "integral(1/(2+3*X^2),X)-1/sqrt(6)*arctan(1/2*X*sqrt(6))",
  "0",
  "integral(1/(-2-3*X^2),X)-1/sqrt(6)*arctan(-1/2*X*sqrt(6))",
  "0",

  //61
  "integral(1/(2-3*X^2),X)-1/2*1/sqrt(6)*log((2+X*sqrt(6))/(2-X*sqrt(6)))",
  "0",
  "integral(1/(-2+3*X^2),X)-1/2*1/sqrt(6)*log((-2+X*sqrt(6))/(-2-X*sqrt(6)))",
  "0",

  //63
  "integral(X/(A+B*X^2),X)-1/2*1/B*log(A+B*X^2)",
  "0",

  //64
  "integral(X^2/(A+B*X^2),X)-X/B+A/B*integral(1/(A+B*X^2),X)",
  "0",

  //65
  "integral(1/(A+B*X^2)^2,X)-X/(2*A*(A+B*X^2))-1/2*1/A*integral(1/(A+B*X^2),X)",
  "0",

  //70
  "integral(1/X*1/(A+B*X^2),X)-1/2*1/A*log(X^2/(A+B*X^2))",
  "0",

  //71
  "integral(1/X^2*1/(A+B*X^2),X)+1/(A*X)+B/A*integral(1/(A+B*X^2),X)",
  "0",

  //74
  "integral(1/(A+B*X^3),X)-1/3*1/A*(A/B)^(1/3)*(1/2*log(((A/B)^(1/3)+X)^3/(A+B*X^3))+sqrt(3)*arctan((2*X-(A/B)^(1/3))*(A/B)^(-1/3)/sqrt(3)))",
  "0",

  //76
  "integral(X^2/(A+B*X^3),X)-1/3*1/B*log(A+B*X^3)",
  "0",

  // commenting this out because the definite integral of this one
  // between 0 and pi was incorrect AND the indefinite integral
  // became incorrect after I avoided having roots in the denominator
  // when doing multiplications. The two things combined made me
  // think to eliminate this test.
  //77
  //"integral(1/(2+3*X^4),X)-1/2*1/2*(2/3/4)^(1/4)*(1/2*log((X^2+2*(2/3/4)^(1/4)*X+2*(2/3/4)^(1/2))/(X^2-2*(2/3/4)^(1/4)*X+2*(2/3/4)^(1/2)))+arctan(2*(2/3/4)^(1/4)*X/(2*(2/3/4)^(1/2)-X^2)))",
  //"0",

  // commenting this out because the definite integral of this one
  // between 0 and pi was incorrect AND the indefinite integral
  // became incorrect after I avoided having roots in the denominator
  // when doing multiplications. The two things combined made me
  // think to eliminate this test.
  //78
  //"integral(1/(2-3*X^4),X)-1/2*(2/3)^(1/4)/2*(1/2*log((X+(2/3)^(1/4))/(X-(2/3)^(1/4)))+arctan(X*(2/3)^(-1/4)))",
  //"0",

  //79
  "integral(X/(2+3*X^4),X)-1/2*1/3*1/sqrt(2/3)*arctan(X^2/sqrt(2/3))",
  "0",

  //80
  "integral(X/(2-3*X^4),X)+1/4*1/3*sqrt(3/2)*log((X^2-sqrt(2/3))/(X^2+sqrt(2/3)))",
  "0",

  // commenting this out because the definite integral of this one
  // between 0 and pi was incorrect AND the indefinite integral
  // became incorrect after I avoided having roots in the denominator
  // when doing multiplications. The two things combined made me
  // think to eliminate this test.
  //81
  //"integral(X^2/(2+3*X^4),X)-1/4*1/3*(2/3/4)^(-1/4)*(1/2*log((X^2-2*(2/3/4)^(1/4)*X+2*sqrt(2/3/4))/(X^2+2*(2/3/4)^(1/4)*X+2*sqrt(2/3/4)))+arctan(2*(2/3/4)^(1/4)*X/(2*sqrt(2/3/4)-X^2)))",
  //"0",

  // commenting this out because the definite integral of this one
  // between 0 and pi was incorrect AND the indefinite integral
  // became incorrect after I avoided having roots in the denominator
  // when doing multiplications. The two things combined made me
  // think to eliminate this test.
  //82
  //"integral(X^2/(2-3*X^4),X)+1/4*1/3*(2/3)^(-1/4)*(log((X-(2/3)^(1/4))/(X+(2/3)^(1/4)))+2*arctan(X*(2/3)^(-1/4)))",
  //"0",

  //83
  "integral(X^3/(A+B*X^4),X)-1/4*1/B*log(A+B*X^4)",
  "0",

  //124
  "integral(sqrt(A+B*X),X)-2/3/B*sqrt((A+B*X)^3)",
  "0",

  //125
  "integral(X*sqrt(A+B*X),X)+2*(2*A-3*B*X)*sqrt((A+B*X)^3)/15*B^(-2)",
  "0",

  //126
  "integral(X^2*sqrt(A+B*X),X)-2*(8*A^2-12*A*B*X+15*B^2*X^2)*sqrt((A+B*X)^3)/105*B^(-3)",
  "0",

  //128
  "integral(sqrt(A+B*X)/X,X)-2*sqrt(A+B*X)-A*integral(1/X*1/sqrt(A+B*X),X)",
  "0",

  //129
  "integral(sqrt(A+B*X)/X^2,X)+sqrt(A+B*X)/X-B/2*integral(1/X*1/sqrt(A+B*X),X)",
  "0",

  //131
  "integral(1/sqrt(A+B*X),X)-2*sqrt(A+B*X)/B",
  "0",

  //132
  "integral(X/sqrt(A+B*X),X)+2/3*(2*A-B*X)*sqrt(A+B*X)/B^2",
  "0",

  //133
  "integral(X^2/sqrt(A+B*X),X)-2/15*(8*A^2-4*A*B*X+3*B^2*X^2)*sqrt(A+B*X)/B^3",
  "0",

  //134
  "integral(1/X*1/sqrt(2+B*X),X)-1/sqrt(2)*log((sqrt(2+B*X)-sqrt(2))/(sqrt(2+B*X)+sqrt(2)))",
  "0",

  //136
  "integral(1/X*1/sqrt(-2+B*X),X)-2/sqrt(2)*arctan(sqrt((-2+B*X)/2))",
  "0",

  //137
  "integral(1/X^2*1/sqrt(A+B*X),X)+sqrt(A+B*X)/A/X+1/2*B/A*integral(1/X*1/sqrt(A+B*X),X)",
  "0",

  //156
  "integral(sqrt(X^2+A),X)-1/2*(X*sqrt(X^2+A)+A*log(X+sqrt(X^2+A)))",
  "0",

  //157
  "integral(1/sqrt(X^2+A),X)-log(X+sqrt(X^2+A))",
  "0",

  //158
  "integral(1/X*1/sqrt(X^2-2),X)-arcsec(X/sqrt(2))/sqrt(2)",
  "0",

  //159
  "integral(1/X*1/sqrt(X^2+2),X)+1/sqrt(2)*log((sqrt(2)+sqrt(X^2+2))/X)",
  "0",

  //160
  "integral(sqrt(X^2+2)/X,X)-sqrt(X^2+2)+sqrt(2)*log((sqrt(2)+sqrt(X^2+2))/X)",
  "0",

  //161
  "integral(sqrt(X^2-2)/X,X)-sqrt(X^2-2)+sqrt(2)*arcsec(X/sqrt(2))",
  "0",

  //162
  "integral(X/sqrt(X^2+A),X)-sqrt(X^2+A)",
  "0",

  //163
  "integral(X*sqrt(X^2+A),X)-1/3*sqrt((X^2+A)^3)",
  "0",

  //164 fails after Jan 2017 changes to abs/mag
  //"integral(sqrt((X^2+A)^3),X)-1/4*(X*sqrt((X^2+A)^3)+3/2*A*X*sqrt(X^2+A)+3/2*A^2*log(X+sqrt(X^2+A)))",
  //"0",

  //"integral(sqrt((X^2-A)^3),X)-1/4*(X*sqrt((X^2-A)^3)-3/2*A*X*sqrt(X^2-A)+3/2*A^2*log(X+sqrt(X^2-A)))",
  //"0",

  //165 fails after Jan 2017 changes to abs/mag
  //"integral(1/sqrt((X^2+A)^3),X)-X/A/sqrt(X^2+A)",
  //"0",

  //166 fails after Jan 2017 changes to abs/mag
  //"integral(X/sqrt((X^2+A)^3),X)+1/sqrt(X^2+A)",
  //"0",

  //167 fails after Jan 2017 changes to abs/mag
  //"integral(X*sqrt((X^2+A)^3),X)-1/5*sqrt((X^2+A)^5)",
  //"0",

  //168
  "integral(X^2*sqrt(X^2+A),X)-1/4*X*sqrt((X^2+A)^3)+1/8*A*X*sqrt(X^2+A)+1/8*A^2*log(X+sqrt(X^2+A))",
  "0",

  //169
  "integral(X^3*sqrt(X^2+7),X)-(1/5*X^2-2/15*7)*sqrt((X^2+7)^3)",
  "0",

  //170
  "integral(X^3*sqrt(X^2-7),X)-(sqrt((X^2-7)^5)/5+7*sqrt((X^2-7)^3)/3)",
  "0",

  //171
  "integral(X^2/sqrt(X^2+A),X)-1/2*X*sqrt(X^2+A)+1/2*A*log(X+sqrt(X^2+A))",
  "0",

  //172
  "integral(X^3/sqrt(X^2+A),X)-1/3*sqrt((X^2+A)^3)+A*sqrt(X^2+A)",
  "0",

  //173
  "integral(1/X^2*1/sqrt(X^2+A),X)+sqrt(X^2+A)/A/X",
  "0",

  //174
  "integral(1/X^3*1/sqrt(X^2+2),X)+1/2*sqrt(X^2+2)/2/X^2-1/2*log((sqrt(2)+sqrt(X^2+2))/X)/(sqrt(2)^3)",
  "0",

  //175
  "integral(1/X^3*1/sqrt(X^2-2),X)-1/2*sqrt(X^2-2)/2/X^2-1/2*1/(2^(3/2))*arcsec(X/(2^(1/2)))",
  "0",

  //176+
  `integral(X^2*sqrt((X^2+2^2)^3),X)\
-1/6*X*sqrt((X^2+2^2)^5)\
+1/24*(2^2)*X*sqrt((X^2+2^2)^3)\
+1/16*(2^4)X*sqrt(X^2+2^2)\
+1/16*(2^6)*log(X+sqrt(X^2+2^2))`,
  "0",

  //176-
  `integral(X^2*sqrt((X^2-2^2)^3),X)\
-1/6*X*sqrt((X^2-2^2)^5)\
-1/24*(2^2)*X*sqrt((X^2-2^2)^3)\
+1/16*(2^4)X*sqrt(X^2-2^2)\
-1/16*(2^6)*log(X+sqrt(X^2-2^2))`,
  "0",

  //177+
  `integral(X^3*sqrt((X^2+7^2)^3),X)\
-1/7*sqrt((X^2+7^2)^7)\
+1/5*(7^2)*sqrt((X^2+7^2)^5)`,
  "0",

  //177-
  `integral(X^3*sqrt((X^2-7^2)^3),X)\
-1/7*sqrt((X^2-7^2)^7)\
-1/5*(7^2)*sqrt((X^2-7^2)^5)`,
  "0",

  //196
  "simplify(integral(1/(X-A)/sqrt(X^2-A^2),X)+sqrt(X^2-A^2)/A/(X-A))",
  "0",
  "simplify(1/(X-A)/sqrt(X^2-A^2)-d(integral(1/(X-A)/sqrt(X^2-A^2),X),X))",
  "0",

  //197
  "integral(1/(X+A)/sqrt(X^2-A^2),X)-sqrt(X^2-A^2)/A/(X+A)",
  "0",
  "simplify(1/(X+A)/sqrt(X^2-A^2)-d(integral(1/(X+A)/sqrt(X^2-A^2),X),X))",
  "0",

  //200
  "integral(sqrt(7-X^2),X)-1/2*(X*sqrt(7-X^2)+7*arcsin(X/sqrt(7)))",
  "0",

  //201
  "integral(1/sqrt(7-X^2),X)-arcsin(X/sqrt(7))",
  "0",

  //202
  "integral(1/X*1/sqrt(7-X^2),X)+1/sqrt(7)*log((sqrt(7)+sqrt(7-X^2))/X)",
  "0",

  //203
  `integral(sqrt(7-X^2)/X,X)\
-sqrt(7-X^2)+sqrt(7)*log((sqrt(7)+sqrt(7-X^2))/X)`,
  "0",

  //204
  `integral(X/sqrt(A-X^2),X)\
+sqrt(A-X^2)`,
  "0",

  //205
  `integral(X*sqrt(A-X^2),X)\
+1/3*sqrt((A-X^2)^3)`,
  "0",

  //210
  `integral(X^2*sqrt(7-X^2),X)\
+1/4*X*sqrt((7-X^2)^3)\
-7/8*(X*sqrt(7-X^2)+7*arcsin(X/sqrt(7)))`,
  "0",

  //211
  `integral(X^3*sqrt(7-X^2),X)\
-(-1/5*X^2-2/15*7)*sqrt((7-X^2)^3)`,
  "0",

  //214
  `integral(X^2/sqrt(7-X^2),X)\
+X/2*sqrt(7-X^2)\
-7/2*arcsin(X/sqrt(7))`,
  "0",

  //215
  `integral(1/X^2*1/sqrt(7-X^2),X)\
+sqrt(7-X^2)/7/X`,
  "0",

  //216
  `integral(sqrt(7-X^2)/X^2,X)\
+sqrt(7-X^2)/X\
+arcsin(X/sqrt(7))`,
  "0",

  //217
  `integral(sqrt(7-X^2)/X^3,X)\
+1/2*sqrt(7-X^2)/X^2\
-1/2*log((sqrt(7)+sqrt(7-X^2))/X)/sqrt(7)`,
  "0",

  //218
  `integral(sqrt(7-X^2)/X^4,X)\
+1/3*sqrt((7-X^2)^3)/7/X^3`,
  "0",

  //273
  "integral(sqrt(7*X^2+C),X)-X*sqrt(7*X^2+C)/2-C*log(X*sqrt(7)+sqrt(7*X^2+C))/2/sqrt(7)",
  "0",

  //274
  "integral(sqrt(-7*X^2+C),X)-X*sqrt(-7*X^2+C)/2-C*arcsin(X*sqrt(7/C))/2/sqrt(7)",
  "0",

  //290
  "integral(sin(A*X),X)+cos(A*X)/A",
  "0",

  //291
  "integral(cos(A*X),X)-sin(A*X)/A",
  "0",

  //292
  "integral(tan(A*X),X)+log(cos(A*X))/A",
  "0",

  //293
  "integral(1/tan(A*X),X)-log(sin(A*X))/A",
  "0",

  //294
  "integral(1/cos(A*X),X)-log(tan(pi/4+A*X/2))/A",
  "0",

  //295
  "integral(1/sin(A*X),X)-log(tan(A*X/2))/A",
  "0",

  //296
  "integral(sin(A*X)^2,X)-X/2+sin(2*A*X)/(4*A)",
  "0",

  //297
  "integral(sin(A*X)^3,X)+cos(A*X)*(sin(A*X)^2+2)/(3*A)",
  "0",

  //298
  "integral(sin(A*X)^4,X)-3/8*X+sin(2*A*X)/(4*A)-sin(4*A*X)/(32*A)",
  "0",

  //302
  "integral(cos(A*X)^2,X)-X/2-sin(2*A*X)/(4*A)",
  "0",

  //303
  "integral(cos(A*X)^3,X)-sin(A*X)*(cos(A*X)^2+2)/(3*A)",
  "0",

  //304
  "integral(cos(A*X)^4,X)-3/8*X-sin(2*A*X)/(4*A)-sin(4*A*X)/(32*A)",
  "0",

  //308
  "integral((1/sin(A*X))^2,X)+1/A*1/tan(A*X)",
  "0",

  //312
  "integral((1/cos(A*X))^2,X)-tan(A*X)/A",
  "0",

  //318
  "integral(sin(A*X)*cos(A*X),X)-sin(A*X)^2/(2*A)",
  "0",

  //320
  "integral(sin(A*X)^2*cos(A*X)^2,X)+sin(4*A*X)/(32*A)-X/8",
  "0",

  //326
  "integral(sin(A*X)/cos(A*X)/cos(A*X),X)-1/(A*cos(A*X))",
  "0",

  //327
  "integral(sin(A*X)^2/cos(A*X),X)+sin(A*X)/A-log(tan(pi/4+A*X/2))/A",
  "0",

  //328
  "integral(cos(A*X)/sin(A*X)^2,X)+1/(A*sin(A*X))",
  "0",

  //329
  "integral(1/sin(A*X)/cos(A*X),X)-log(tan(A*X))/A",
  "0",

  //330
  "integral(1/sin(A*X)/cos(A*X)^2,X)-(1/cos(A*X)+log(tan(A*X/2)))/A",
  "0",

  //332
  "integral(1/sin(A*X)^2/cos(A*X),X)-(log(tan(pi/4+A*X/2))-1/sin(A*X))/A",
  "0",

  //333
  "integral(1/sin(A*X)^2/cos(A*X)^2,X)+2/(A*tan(2*A*X))",
  "0",

  //335
  "integral(sin(A+B*X),X)+cos(A+B*X)/B",
  "0",

  //336
  "integral(cos(A+B*X),X)-sin(A+B*X)/B",
  "0",

  //337+
  "integral(1/(1+sin(A*X)),X)+tan(pi/4-A*X/2)/A",
  "0",

  //337b+
  "integral(1/(B+B*sin(A*X)),X)+tan(pi/4-A*X/2)/A/B",
  "0",

  //337-
  "integral(1/(1-sin(A*X)),X)-tan(pi/4+A*X/2)/A",
  "0",

  //337b-
  "integral(1/(B-B*sin(A*X)),X)-tan(pi/4+A*X/2)/A/B",
  "0",

  //338
  "integral(1/(1+cos(A*X)),X)-tan(A*X/2)/A",
  "0",

  //339
  "integral(1/(1-cos(A*X)),X)+1/(A*tan(A*X/2))",
  "0",

  //340
  "integral(1/(A+B*sin(X)),X)-1/sqrt(B^2-A^2)*log((A*tan(X/2)+B-sqrt(B^2-A^2))/(A*tan(X/2)+B+sqrt(B^2-A^2)))",
  "0",

  //341
  "integral(1/(A+B*cos(X)),X)-1/sqrt(B^2-A^2)*log((sqrt(B^2-A^2)*tan(X/2)+A+B)/(sqrt(B^2-A^2)*tan(X/2)-A-B))",
  "0",

  //389
  "x*sin(A*x)-d(integral(x*sin(A*x)))",
  "0",

  //390
  "x^2*sin(A*x)-d(integral(x^2*sin(A*x)))",
  "0",

  //393
  "x*cos(A*x)-d(integral(x*cos(A*x)))",
  "0",

  //394
  "x^2*cos(A*x)-d(integral(x^2*cos(A*x)))",
  "0",

  //441
  "integral(arcsin(A*X),X)-X*arcsin(A*X)-sqrt(1-A^2*X^2)/A",
  "0",

  //442
  "integral(arccos(A*X),X)-X*arccos(A*X)+sqrt(1-A^2*X^2)/A",
  "0",

  //443
  "integral(arctan(A*X),X)-X*arctan(A*X)+log(1+A^2*X^2)/(2*A)",
  "0",

  //485
  "integral(log(X),X)-X*log(X)+X",
  "0",

  //485a
  "integral(log(A*X),X)-X*log(A*X)+X",
  "0",

  //486
  "integral(X*log(X),X)-1/2*X^2*log(X)+1/4*X^2",
  "0",

  //486a
  "integral(X*log(A*X),X)-1/2*X^2*log(A*X)+1/4*X^2",
  "0",

  //487
  "integral(X^2*log(A*X),X)-1/3*X^3*log(A*X)+X^3/9",
  "0",

  //489
  "integral(log(X)^2,X)-X*log(X)^2+2*X*log(X)-2*X",
  "0",

  //493
  "integral(1/X*1/log(A*X),X)-log(log(A*X))",
  "0",

  //499
  "integral(log(A*X+B),X)-(A*X+B)*log(A*X+B)/A+X",
  "0",

  //500
  "integral(log(A*X+B)/X^2,X)-A*log(X)/B+(A*X+B)*log(A*X+B)/B/X",
  "0",

  //554
  "integral(sinh(X),X)-cosh(X)",
  "0",

  //555
  "integral(cosh(X),X)-sinh(X)",
  "0",

  //556
  "integral(tanh(X),X)-log(cosh(X))",
  "0",

  //560
  "integral(X*sinh(X),X)-X*cosh(X)+sinh(X)",
  "0",

  //562
  "integral(X*cosh(X),X)-X*sinh(X)+cosh(X)",
  "0",

  //566
  "integral(sinh(X)^2,X)-sinh(2*X)/4+X/2",
  "0",

  //569
  "integral(tanh(X)^2,X)-X+tanh(X)",
  "0",

  //572
  "integral(cosh(X)^2,X)-sinh(2*X)/4-X/2",
  "0",

  // test integral(exp(a*x^2))

  "integral(exp(a*x^2))+i*sqrt(pi)*erf(i*sqrt(a)*x)/sqrt(a)/2",
  "0",

  "integral(exp(-x^2))-sqrt(pi)*erf(x)/2",
  "0",

  // before abs/mag changes of Jan 2017
  // this integral gave the more compact result of:
  //   sqrt(pi/3)*erf(sqrt(3)*x)/2
  // but the new given one is still correct
  "integral(exp(-3*x^2))-pi^(1/2)*erf(3^(1/2)*x)/(2*3^(1/2))",
  "0",

  "integral(1/x*1/(a+log(x)),x)-log(a+log(x))",
  "0",

  "integral(exp(a*x+b*x))",
  "exp((a+b)*x)/(a+b)",

  "integral(x*exp(a*x))",
  "-exp(a*x)/(a^2)+x*exp(a*x)/a",
  "derivative",
  "x*exp(a*x)",

  "integral(x*exp(a*x+b))",
  "-exp(a*x+b)/(a^2)+x*exp(a*x+b)/a",
  "derivative",
  "x*exp(a*x+b)",

  "integral(x*exp(-a*x+b))",
  "-exp(-a*x+b)/(a^2)-x*exp(-a*x+b)/a",
  "derivative",
  "x*exp(-a*x+b)",

  "integral(x^2*exp(a*x))",
  "2*exp(a*x)/(a^3)-2*x*exp(a*x)/(a^2)+x^2*exp(a*x)/a",
  "derivative",
  "x^2*exp(a*x)",

  "integral(x^2*exp(a*x+b))",
  "2*exp(a*x+b)/(a^3)-2*x*exp(a*x+b)/(a^2)+x^2*exp(a*x+b)/a",
  "derivative",
  "x^2*exp(a*x+b)",

  "integral(x^3*exp(a*x))",
  "-6*exp(a*x)/(a^4)+6*x*exp(a*x)/(a^3)-3*x^2*exp(a*x)/(a^2)+x^3*exp(a*x)/a",
  "derivative",
  "x^3*exp(a*x)",

  "integral(x^3*exp(a*x+b))",
  "-6*exp(a*x+b)/(a^4)+6*x*exp(a*x+b)/(a^3)-3*x^2*exp(a*x+b)/(a^2)+x^3*exp(a*x+b)/a",
  "derivative",
  "x^3*exp(a*x+b)",

  // here
  "integral(sqrt(a*x^2+b))",
  "Stop: integral: sorry, could not find a solution",

  "integral(x^2*(1-x^2)^(3/2))-(x*sqrt(1-x^2)*(-8*x^4+14*x^2-3)+3*arcsin(x))/48",
  "0",

  "integral(x^4*(1-x^2)^(3/2))-(-x*sqrt(1-x^2)*(16*x^6-24*x^4+2*x^2+3)+3*arcsin(x))/128",
  "0",

  "integral(x^2*(1-x^2)^(5/2))-(x*sqrt(1-x^2)*(48*x^6-136*x^4+118*x^2-15)+15*arcsin(x))/384",
  "0",
]);

// sourcefile:  tests/inv.coffee 
const test_inv = () => run_test([

  "inv(a)",
  "inv(a)",

  "inv(inv(a))",
  "a",

  "inv(inv(inv(a)))",
  "inv(a)",

  "inv(inv(inv(inv(a))))",
  "a",

  "inv(a·b·c)",
  "inner(inv(c),inner(inv(b),inv(a)))",

  "inv(I)",
  "I",

]);



// sourcefile:  tests/isprime.coffee 
const test_isprime = () => run_test([
  // 0 and 1 are not prime numbers

  "isprime(0)",
  "0",

  "isprime(1)",
  "0",

  "isprime(13)",
  "1",

  "isprime(14)",
  "0",

  // from the Prime Curios web page

  "isprime(9007199254740991)",
  "0",

  // The largest prime that JavaScript supports

  "isprime(2^53 - 111)",
  "1",

  // misc. primes

  "isprime(2^50-71)",
  "1",

  "isprime(2^40-87)",
  "1",

]);

// sourcefile:  tests/laguerre.coffee 
const test_laguerre = () => run_test([
  "laguerre(x,n)",
  "laguerre(x,n,0)",

  "laguerre(x,n,k)",
  "laguerre(x,n,k)",

  "laguerre(x,0)-1",
  "0",

  "laguerre(x,1)-(-x+1)",
  "0",

  "laguerre(x,2)-1/2*(x^2-4*x+2)",
  "0",

  "laguerre(x,3)-1/6*(-x^3+9*x^2-18*x+6)",
  "0",

  "laguerre(x,0,k)-1",
  "0",

  "laguerre(x,1,k)-(-x+k+1)",
  "0",

  "laguerre(x,2,k)-1/2*(x^2-2*(k+2)*x+(k+1)*(k+2))",
  "0",

  "laguerre(x,3,k)-1/6*(-x^3+3*(k+3)*x^2-3*(k+2)*(k+3)*x+(k+1)*(k+2)*(k+3))",
  "0",

  "laguerre(a-b,10)-eval(subst(a-b,x,laguerre(x,10)))",
  "0",
]);

// sourcefile:  tests/lcm.coffee 
const test_lcm = () => run_test([

  "lcm(4,6)",
  "12",

  "lcm(4*x,6*x*y)",
  "12*x*y",

  // multiple arguments

  "lcm(2,3,4)",
  "12",
]);

// sourcefile:  tests/legendre.coffee 
const test_legendre = () => run_test([
  "legendre(x,n)",
  "legendre(x,n,0)",

  "legendre(x,n,m)",
  "legendre(x,n,m)",

  "legendre(x,0)-1",
  "0",

  "legendre(x,1)-x",
  "0",

  "legendre(x,2)-1/2*(3*x^2-1)",
  "0",

  "legendre(x,3)-1/2*(5*x^3-3*x)",
  "0",

  "legendre(x,4)-1/8*(35*x^4-30*x^2+3)",
  "0",

  "legendre(x,5)-1/8*(63*x^5-70*x^3+15*x)",
  "0",

  "legendre(x,6)-1/16*(231*x^6-315*x^4+105*x^2-5)",
  "0",

  "legendre(x,0,0)-1",
  "0",

  "legendre(x,1,0)-x",
  "0",

  "legendre(x,1,1)+(1-x^2)^(1/2)",
  "0",

  "legendre(x,2,0)-1/2*(3*x^2-1)",
  "0",

  "legendre(x,2,1)+3*x*(1-x^2)^(1/2)",
  "0",

  "legendre(x,2,2)-3*(1-x^2)",
  "0",

  "legendre(x,3,0)-1/2*x*(5*x^2-3)",
  "0",

  "legendre(x,3,1)-3/2*(1-5*x^2)*(1-x^2)^(1/2)",
  "0",

  "legendre(x,3,2)-15*x*(1-x^2)",
  "0",

  "legendre(x,3,3)+15*(1-x^2)^(3/2)",
  "0",

  "legendre(x,4,0)-1/8*(35*x^4-30*x^2+3)",
  "0",

  "legendre(x,4,1)-5/2*x*(3-7*x^2)*(1-x^2)^(1/2)",
  "0",

  "legendre(x,4,2)-15/2*(7*x^2-1)*(1-x^2)",
  "0",

  "legendre(x,4,3)+105*x*(1-x^2)^(3/2)",
  "0",

  "legendre(x,4,4)-105*(1-x^2)^2",
  "0",

  "legendre(x,5,0)-1/8*x*(63*x^4-70*x^2+15)",
  "0",

  "legendre(cos(theta),0,0)-1",
  "0",

  "legendre(cos(theta),1,0)-cos(theta)",
  "0",

  "legendre(cos(theta),1,1)+abs(sin(theta))",
  "0",

  "legendre(cos(theta),2,0)-1/2*(3*cos(theta)^2-1)",
  "0",

  "legendre(cos(theta),2,1)+3*cos(theta)*abs(sin(theta))",
  "0",

  "legendre(cos(theta),2,2)-3*sin(theta)^2",
  "0",

  "legendre(cos(theta),3,0)-1/2*cos(theta)*(5*cos(theta)^2-3)",
  "0",

  "legendre(cos(theta),3,1)- (3/2*abs(sin(theta))-15/2*cos(theta)^2*abs(sin(theta)))",
  "0",

  "legendre(cos(theta),3,2)-15*cos(theta)*sin(theta)^2",
  "0",

  "legendre(cos(theta),3,3)+15*(sin(theta)^2)^(3/2)",
  "0",

  "legendre(a-b,10)-eval(subst(a-b,x,legendre(x,10)))",
  "0",
]);

// sourcefile:  tests/log.coffee 
const test_log = () => run_test([

  "log(1)",
  "0",

  "log(exp(1))",
  "1",

  "log(exp(x))",
  "x",

  "exp(log(x))",
  "x",

  "log(x^2)",
  "2*log(x)",

  "log(1/x)",
  "-log(x)",

  "log(a^b)",
  "b*log(a)",

  "log(2)",
  "log(2)",

  "log(2.0)",
  "0.693147...",

  "float(log(2))",
  "0.693147...",

  "log(a*b)",
  "log(a)+log(b)",

  "log(1/3)+log(3)",
  "0",

  "log(-1)",
  "i*pi",

  "log(-1.0)",
  "3.141593...*i",
]);

// sourcefile:  tests/madd.coffee 
const test_madd = function() {
  let asc2;
  let i = 0;
  if (algebrite.DEBUG) { console.log("test madd"); }
  const m = algebrite.mtotal;
  for (i = -100, asc2 = -100 <= 100; asc2 ? i < 100 : i > 100; asc2 ? i++ : i--) {
    for (let j = -100, asc3 = -100 <= 100; asc3 ? j < 100 : j > 100; asc3 ? j++ : j--) {
      test_maddf(i, j, i + j);
    }
  }
  //if (m != algebrite.mtotal)
  //  logout("memory leak\n")
  //  errout()
  return logout("ok\n");
};

var test_maddf = function(na, nb, nc) {

  const a = algebrite.mint(na);
  const b = algebrite.mint(nb);
  const c = algebrite.mint(nc);

  const d = algebrite.madd(a, b);

  if (algebrite.mcmp(c, d) === 0) {
    return;
  } else {
    throw new Error("test_maddf");
  }

  //sprintf(logbuf, "%d %d %d %d\n", na, nb, nc, *d * algebrite.MSIGN(d))
  logout(logbuf);
  return errout();
};

const test_msub = function() {
  let asc2;
  let i = 0;
  logout("test msub\n");
  const m = algebrite.mtotal;
  for (i = -100, asc2 = -100 <= 100; asc2 ? i <= 100 : i >= 100; asc2 ? i++ : i--) {
    for (let j = -100, asc3 = -100 <= 100; asc3 ? j <= 100 : j >= 100; asc3 ? j++ : j--) {
      test_msubf(i, j, i - j);
    }
  }
  if (m !== algebrite.mtotal) {
    logout("memory leak\n");
    errout();
  }
  return logout("ok\n");
};

var test_msubf = function(na, nb, nc) {
  //unsigned int *a, *b, *c, *d

  const a = algebrite.mint(na);
  const b = algebrite.mint(nb);
  const c = algebrite.mint(nc);

  const d = algebrite.msub(a, b);

  if (algebrite.mcmp(c, d) === 0) {
    //mfree(a)
    //mfree(b)
    //mfree(c)
    //mfree(d)
    return;
  }

  //sprintf(logbuf, "%d %d %d %d\n", na, nb, nc, *d * algebrite.MSIGN(d))
  logout(logbuf);
  return errout();
};

//endif

// sourcefile:  tests/mgcd.coffee 
const test_mgcd = function() {
  logout("testing mgcd\n");
  for (let i = 1; i < 100; i++) {
    const a = algebrite.mint(i);
    for (let j = 1; j < 100; j++) {
      const b = algebrite.mint(j);
      const c = algebrite.mgcd(a, b);
      const d = egcd(a, b);
      if (algebrite.mcmp(c, d) !== 0) {
        throw new Error("test_mgcd failed");
      }
    }
  }
  return logout("ok\n");
};

// Euclid's algorithm

var egcd = function(a, b) {
  let sign_ = 0;
  if (algebrite.MZERO(b)) {
    stop("divide by zero");
  }
  //b = mcopy(b)
  if (algebrite.MZERO(a)) {
    return b;
  }
  sign_ = algebrite.MSIGN(b);
  //a = mcopy(a)
  while (!algebrite.MZERO(b)) {
    const c = algebrite.mmod(a, b);
    //mfree(a)
    a = b;
    b = c;
  }
  a = algebrite.setSignTo(a,sign_);
  return a;
};


// sourcefile:  tests/mini-test.coffee 
// mini test for distribution builds

const mini_test = () => run_test([
  // static spherical metric

  "clearall",
  "",

  "gdd=[[-exp(2*Phi(r)),0,0,0],[0,exp(2*Lambda(r)),0,0],[0,0,r^2,0],[0,0,0,r^2*sin(theta)^2]]",
  "",

  "X=[t,r,theta,phi]",
  "",

  "guu=inv(gdd)",
  "",

  "gddd=d(gdd,X)",
  "",

  "GAMDDD=1/2*(gddd+transpose(gddd,2,3)-transpose(transpose(gddd,2,3),1,2))",
  "",

  "GAMUDD=contract(outer(guu,GAMDDD),2,3)",
  "",

  "T1=d(GAMUDD,X)",
  "",

  "T2=contract(outer(GAMUDD,GAMUDD),2,4)",
  "",

  "RUDDD=transpose(T1,3,4)-T1+transpose(T2,2,3)-transpose(transpose(T2,2,3),3,4)",
  "",

  "RDD=contract(RUDDD,1,3)",
  "",

  "R=contract(contract(outer(guu,RDD),2,3),1,2)",
  "",

  "GDD=RDD-1/2*gdd*R",
  "",

  "Gtt=1/r^2*exp(2 Phi(r)) d(r*(1 - exp(-2 Lambda(r))),r)",
  "",

  "Grr=-1/r^2*exp(2*Lambda(r))*(1-exp(-2*Lambda(r)))+2/r*d(Phi(r),r)",
  "",

  "Gthetatheta=r^2*exp(-2*Lambda(r))*(d(d(Phi(r),r),r)+d(Phi(r),r)^2+d(Phi(r),r)/r-d(Phi(r),r)*d(Lambda(r),r)-d(Lambda(r),r)/r)",
  "",

  "Gphiphi=sin(theta)^2*Gthetatheta",
  "",

  "T=[[Gtt,0,0,0],[0,Grr,0,0],[0,0,Gthetatheta,0],[0,0,0,Gphiphi]]",
  "",

  "GDD-T",
  "[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]",

  // surface integral example from the manual

  "clearall",
  "",

  "z=1-x^2-y^2",
  "",

  "F=[x*y^2*z,-2*x^3,y*z^2]",
  "",

  "S=[x,y,z]",
  "",

  "s=dot(F,cross(d(S,x),d(S,y)))",
  "",

  "defint(s,y,-sqrt(1-x^2),sqrt(1-x^2),x,-1,1)",
  "1/48*pi",

// hydrogen wavefunction example

  "clearall",
  "",

  "laplacian(f)=1/r^2*d(r^2*d(f,r),r)+1/(r^2*sin(theta))*d(sin(theta)*d(f,theta),theta)+1/(r*sin(theta))^2*d(f,phi,phi)",
  "",

  "n=7",
  "",

  "l=3",
  "",

  "m=1",
  "",

  "R=r^l*exp(-r/n)*laguerre(2*r/n,n-l-1,2*l+1)",
  "",

  "Y=legendre(cos(theta),l,abs(m))*exp(i*m*phi)",
  "",

  "psi=R*Y",
  "",

  "E=psi/n^2",
  "",

  "K=laplacian(psi)",
  "",

  "V=2*psi/r",
  "",

  // after the changes to abs and mag of Jan 2017
  // , some abs/mag are introduced in the results of legendre
  // (correctly, I believe),
  // which makes this expression != 0.
  // TODO this can work only after all the absolute values
  // have been removed
  //"circexp(sin(theta)*(E-K-V))",
  //"0",

// Green's theorem (surface integral)

  "clearall",
  "",

  "P=2x^3-y^3",
  "",

  "Q=x^3+y^3",
  "",

  "f=d(Q,x)-d(P,y)",
  "",

  "x=r*cos(theta)",
  "",

  "y=r*sin(theta)",
  "",

  "defint(f*r,r,0,1,theta,0,2pi)",
  "3/2*pi",

// Green's theorem (line integral)

  "clearall",
  "",

  "x=cos(t)",
  "",

  "y=sin(t)",
  "",

  "P=2x^3-y^3",
  "",

  "Q=x^3+y^3",
  "",

  "f=P*d(x,t)+Q*d(y,t)",
  "",

  "f=circexp(f)",
  "",

  "defint(f,t,0,2pi)",
  "3/2*pi",

// Stokes' theorem (surface integral)

  "clearall",
  "",

  "z=9-x^2-y^2",
  "",

  "F=[3y,4z,-6x]",
  "",

  "S=[x,y,z]",
  "",

  "f=dot(curl(F),cross(d(S,x),d(S,y)))",
  "",

  "x=r*cos(theta)",
  "",

  "y=r*sin(theta)",
  "",

  "defint(f*r,r,0,3,theta,0,2pi)",
  "-27*pi",

// Stokes' theorem (line integral)

  "clearall",
  "",

  "x=3*cos(t)",
  "",

  "y=3*sin(t)",
  "",

  "z=9-x^2-y^2",
  "",

  "P=3y",
  "",

  "Q=4z",
  "",

  "R=-6x",
  "",

  "f=P*d(x,t)+Q*d(y,t)+R*d(z,t)",
  "",

  "f=circexp(f)",
  "",

  "defint(f,t,0,2pi)",
  "-27*pi",
]);


// sourcefile:  tests/mixedprint.coffee 
const test_mixedprint = () => run_test([

  "1.0",
  "1.0",

  "1111 * 1111.0",
  "1234321.0",

  "1111.0 * 1111",
  "1234321.0",

  "1111.0 * 1111.0",
  "1234321.0",

  "11111111 * 11111111.0",
  "123456787654321.0",

  "11111111.0 * 11111111",
  "123456787654321.0",

  "11111111.0 * 11111111.0",
  "123456787654321.0",

  // unfortunately using Numbers
  // at some point we hit the precision
  "111111111 * 111111111.0",
  "12345678987654320.0",

  // unfortunately using Numbers
  // at some point we hit the precision
  "111111111.0 * 111111111",
  "12345678987654320.0",

  // unfortunately using Numbers
  // at some point we hit the precision
  "111111111.0 * 111111111.0",
  "12345678987654320.0",

  "1.0*10^(-6)",
  "0.000001",

  // check that this doesn't return 0.0
  "1.0*10^(-7)",
  "0.000000...",

  // ------------------------------------------
  "maxFixedPrintoutDigits",
  "6",

  "maxFixedPrintoutDigits=20",
  "",

  "maxFixedPrintoutDigits",
  "20",

  "1.0*10^(-15)",
  "0.000000000000001",

  "printhuman",
  "0.000000000000001",

  "printcomputer",
  "0.000000000000001",

  "printlatex",
  "0.000000000000001",

  "printlist",
  "0.000000000000001",

  "print2dascii",
  "0.000000000000001",

  "forceFixedPrintout=0",
  "",

  "1.0*10^(-15)",
  "1.0*10^(-15)",

  "printhuman",
  "1.0*10^(-15)",

  "printcomputer",
  "1.0*10^(-15)",

  "printlatex",
  "1.0\\mathrm{e}{-15}",

  "printlist",
  "1.0*10^(-15)",

  "print2dascii",
  "1.0*10^(-15)",

  "forceFixedPrintout=1",
  "",

  "maxFixedPrintoutDigits=6",
  "",

  // ------------------------------------------

  "float(pi)",
  "3.141593...",

  "print(\"hello\")",
  "\"hello\"",

  "-sqrt(2)/2",
  "-1/2*2^(1/2)",

  // we can't get rid of the multiplication sign
  // in general, because expressions like
  // (x+1)(x-1) actually represent a function call
  // We could get rid of the multiplication sign
  // in these special cases where there are numeric
  // constants but we don't do that yet.
  "printhuman",
  "-1/2 2^(1/2)",

  "printcomputer",
  "-1/2*2^(1/2)",

  "printlatex",
  "-\\frac{\\sqrt{2}}{2}",

  "printlist",
  "(multiply -1/2 (power 2 1/2))",

  "printlist(a+b)\nprintlist(c+d)",
  "(add a b)(add c d)",

  "print2dascii",
  "   1   1/2\n- --- 2\n   2",

  "last2dasciiprint",
  "\"   1   1/2\n- --- 2\n   2\"",

  // checks that no extra newlines are
  // inserted
  "x=0\ny=2\nfor(do(x=sqrt(2+x),y=2*y/x,printcomputer(y)),k,1,2)",
  "2*2^(1/2)4*2^(1/2)/((2+2^(1/2))^(1/2))",

  "clearall",
  "",

  "print2dascii([[a,b],[c,d]])",
  "a   b\n\nc   d",

  "print2dascii(1/sqrt(-15))",
  "        1/2\n    (-1)\n- -----------\n    1/2  1/2\n   3    5",

  "print2dascii(x^(1/a))",
  " 1/a\nx",

  "print2dascii(x^(a/b))",
  " a/b\nx",

  "print2dascii(x^(a/2))",
  " 1/2 a\nx",

  "print2dascii(x^(1/(a+b)))",
  " 1/(a + b)\nx",

  // ------------------------------------------

  "(5/3)!",
  "(5/3)!",

  "printhuman",
  "(5/3)!",

  "printcomputer",
  "(5/3)!",

  "printlatex",
  "(\\frac{5}{3})!",

  "printlist",
  "(factorial 5/3)",

  "print2dascii",
  "  5\n(---)!\n  3",

]);

// sourcefile:  tests/mmul.coffee 
const test_mmul = function() {
  let asc2;
  let i = 0;
  let j = 0;
  const m = 0;
  logout("test mmul\n");
  for (i = -100, asc2 = -100 <= 100; asc2 ? i <= 100 : i >= 100; asc2 ? i++ : i--) {
    var asc3;
    for (j = -100, asc3 = -100 <= 100; asc3 ? j <= 100 : j >= 100; asc3 ? j++ : j--) {
      test_mmulf(i, j, i * j);
    }
  }
  return logout("ok\n");
};

var test_mmulf = function(na, nb, nc) {

  const a = algebrite.mint(na);
  const b = algebrite.mint(nb);
  const c = algebrite.mint(nc);

  const d = algebrite.mmul(a, b);

  if (algebrite.mcmp(c, d) === 0) {
    return;
  } else {
    throw new Error("test_mmulf error");
  }
};

const test_mdiv = function() {
  let asc2;
  let i = 0;
  let j = 0;
  const m = 0;
  logout("test mdiv\n");
  for (i = -100, asc2 = -100 <= 100; asc2 ? i <= 100 : i >= 100; asc2 ? i++ : i--) {
    var asc3;
    for (j = -100, asc3 = -100 <= 100; asc3 ? j <= 100 : j >= 100; asc3 ? j++ : j--) {
      if (j) {
        var expectedResult;
        if ((i/j) > 0) {
          expectedResult = Math.floor(i / j);
        } else {
          expectedResult = Math.ceil(i / j);
        }
        test_mdivf(i, j, expectedResult);
      }
    }
  }
  return logout("ok\n");
};

var test_mdivf = function(na, nb, nc) {

  const a = algebrite.mint(na);
  const b = algebrite.mint(nb);
  const c = algebrite.mint(nc);

  const d = algebrite.mdiv(a, b);

  if (algebrite.mcmp(c, d) === 0) {
    return;
  } else {
    console.log("algebrite.DEBUGger");
    throw new Error("test_mdivf error");
  }
};


const test_mmod = function() {
  let asc2;
  let i = 0;
  let j = 0;
  const m = 0;
  logout("test mmod\n");
  for (i = -100, asc2 = -100 <= 100; asc2 ? i <= 100 : i >= 100; asc2 ? i++ : i--) {
    var asc3;
    for (j = -100, asc3 = -100 <= 100; asc3 ? j <= 100 : j >= 100; asc3 ? j++ : j--) {
      if (j) {
        test_mmodf(i, j, i % j);
      }
    }
  }
  return logout("ok\n");
};

var test_mmodf = function(na,nb,nc) {

  const a = algebrite.mint(na);
  const b = algebrite.mint(nb);
  const c = algebrite.mint(nc);

  const d = algebrite.mmod(a, b);

  if (algebrite.mcmp(c, d) === 0) {
    return;
  } else {
    throw new Error("test_mmodf error");
  }
};




// sourcefile:  tests/mod.coffee 
const test_mod = () => run_test([
  "mod(2.0,3.0)",
  "2",

  "mod(-2.0,3.0)",
  "-2",

  "mod(2.0,-3.0)",
  "2",

  "mod(-2.0,-3.0)",
  "-2",

  "mod(2,3)",
  "2",

  "mod(-2,3)",
  "-2",

  "mod(2,-3)",
  "2",

  "mod(-2,-3)",
  "-2",

  "mod(a,b)",
  "mod(a,b)",

  "mod(2.0,0.0)",
  "Stop: mod function: divide by zero",

  "mod(2,0)",
  "Stop: mod function: divide by zero",

  "mod(1.2,2)",
  "Stop: mod function: cannot convert float value to integer",

  "mod(1/2,3)",
  "Stop: mod function: integer arguments expected",

  "mod(15,8.0)",
  "7",
]);

// sourcefile:  tests/mpow.coffee 
const test_mpow = function() {
  logout("testing mpow\n");


  // small numbers

  for (let i = -10, asc2 = -10 <= 10; asc2 ? i < 10 : i > 10; asc2 ? i++ : i--) {
    const a = algebrite.mint(i);
    let x = 1;
    for (let j = 0; j < 10; j++) {
      const b = algebrite.mpow(a, j);
      const c = algebrite.mint(x);
      if (algebrite.mcmp(b, c) !== 0) {
        throw new Error("failed test_mpow");
      }
      x *= i;
    }
  }


  return logout("ok\n");
};

//endif

// sourcefile:  tests/mprime.coffee 
const test_mprime = function() {
  let i = 0;
  let k = 0;
  const m = 0;
  let t = 0;
  logout("test mprime\n");
  k = 0;
  for (i = 0; i < 10000; i++) {
    const n = algebrite.mint(i);
    t = algebrite.mprime(n);
    if (i === algebrite.primetab[k]) {
      if (t === 0) {
        throw new Error("failed for prime number " + i);
      }
      k++;
    } else if (t === 1) {
      throw new Error("failed for composite number " + i);
    }
  }
  return logout("ok\n");
};

//endif

// sourcefile:  tests/mroot.coffee 
const test_mroot = function() {
  let a, b, c;
  let i = 0;
  let j = 0;
  const mem = 0;

  logout("testing mroot\n");


  // small numbers

  for (i = 0; i < 10; i++) {
    a = algebrite.mint(i);
    for (j = 1; j < 10; j++) {
      //logout(i + " " + j)
      b = algebrite.mpow(a, j);
      c = algebrite.mroot(b, j);
      if ((c === 0) || (algebrite.mcmp(a, c) !== 0)) {
        console.log("algebrite.DEBUGger");
        throw new Error("failed test_mroot");
      }
    }
  }

  logout(" ...mroot small numbers ok\n");

  a = algebrite.mint(12345);

  for (i = 1; i < 10; i++) {
    //logout(i)
    b = algebrite.mpow(a, i);
    c = algebrite.mroot(b, i);
    if ((c === 0) || (algebrite.mcmp(a, c) !== 0)) {
      throw new Error("failed");
    }
  }


  logout(" ...mroot big numbers ok\n");
  return logout("ok");
};

// sourcefile:  tests/multiply.coffee 
const test_multiply = function() {
  if (algebrite.DEBUG) { console.log("test_multiply ----------------------------"); }
  return run_test([

      "0*a",
      "0",

      "a*0",
      "0",

      "1*a",
      "a",

      "a*1",
      "a",

      "0.0*a",
      "0.0",

      "a*0.0",
      "0.0",

      "1.0*a",
      "1.0*a",

      "a*1.0",
      "1.0*a",

      "a*a",
      "a^2",

      "a^2*a",
      "a^3",

      "a*a^2",
      "a^3",

      "a^2*a^2",
      "a^4",

      "2^a*2^(3-a)",    // symbolic exponents cancel
      "8",

      "sqrt(2)/2",
      // leave the roots nice and
      // clean in numerator, avoid these
      // forms
      //"2^(-1/2)",
      "1/2*2^(1/2)",

      "2/sqrt(2)",
      "2^(1/2)",

      "-sqrt(2)/2",
      // avoid having roots in denominator
      //"-1/(2^(1/2))",
      "-1/2*2^(1/2)",

      "2^(1/2-a)*2^a/10",
      // avoid roots in denominator
      //"1/(5*2^(1/2))",
      "1/10*2^(1/2)",

      "i/4",
      "1/4*i",

      "1/(4 i)",
      "-1/4*i",

      // ensure 1.0 is not discarded

      "1.0 pi 1/2",
      "1.570796...",

      "1.0 1/2 pi",
      "1.570796...",
    ]);
};

// sourcefile:  tests/nroots.coffee 
const test_nroots = () => run_test([
  "nroots(x)",
  "0",

  "nroots((1+i)*x^2+1)",
  "[-0.171780...-0.727673...*i,0.171780...+0.727673...*i]",

  "nroots(sqrt(2)*exp(i*pi/4)*x^2+1)",
  "[-0.171780...-0.727673...*i,0.171780...+0.727673...*i]",

//  "nroots(x^4+1)",
//  "(-0.707107+0.707107*i,-0.707107-0.707107*i,0.707107+0.707107*i,0.707107-0.707107*i)",
]);

// sourcefile:  tests/numerator.coffee 
const test_numerator = () => run_test([

  "numerator(2/3)",
  "2",

  "numerator(x)",
  "x",

  "numerator(1/x)",
  "1",

  "numerator(a+b)",
  "a+b",

  "numerator(1/a+1/b)",
  "a+b",
]);

// sourcefile:  tests/outer.coffee 
const test_outer = () => run_test([
  "outer(a,b)",
  "a*b",

  "outer(a,[b1,b2])",
  "[a*b1,a*b2]",

  "outer([a1,a2],b)",
  "[a1*b,a2*b]",

  "H33=hilbert(3)",
  "",

  "H44=hilbert(4)",
  "",

  "H55=hilbert(5)",
  "",

  "H3344=outer(H33,H44)",
  "",

  "H4455=outer(H44,H55)",
  "",

  "H33444455=outer(H33,H44,H44,H55)",
  "",

  "simplify(inner(H3344,H4455)-contract(H33444455,4,5))",
  "0",
]);

// sourcefile:  tests/pattern.coffee 
const test_pattern = () => run_test([

  "pattern(dot(transpose(a_),a_), cov(a_))",
  "dot(transpose(a_),a_)->cov(a_)",

  "pattern(dot(a_,transpose(a_)), cov(a_))",
  "dot(a_,transpose(a_))->cov(a_)",

  //"pattern(cov(transpose(a_)), cov(a_))",
  //"",

  "simplify(1 + eig(dot(transpose(A+B),B+transpose(transpose(A)))))",
  "1+eig(cov(A+B))",
    
  "simplify(1 + eig(dot(x*transpose(transpose(A)), transpose(x*A))))",
  "1+eig(cov(transpose(A)*transpose(x)))",

  // ideally this but we need to make simplifications work better
  // "1+eig(cov(A*x))",
    
  "simplify(1 + eig(dot(x*transpose(transpose(A)), transpose(A*x))))",
  "1+eig(cov(transpose(A)*transpose(x)))",

  "simplify(1 + eig(dot(x*Aᵀᵀ, (A*x)ᵀ)))",
  "1+eig(cov(transpose(A)*transpose(x)))",

  // ideally this but we need to make simplifications work better
  // "1+eig(cov(A*x))",

  "clearpatterns()",
  "",

  // ------------------------------------------------------------------



  "simplify(integral(1/(X-A)/sqrt(X^2-A^2),X)+sqrt(X^2-A^2)/A/(X-A))",
  "0",
    

  // ------------------------------------------------------------------


  "pattern(dot(transpose(a_),a_), cov(a_))",
  "dot(transpose(a_),a_)->cov(a_)",

  "simplify(integral(1/(X-A)/sqrt(X^2-A^2),X)+sqrt(X^2-A^2)/A/(X-A))",
  "0",
    

  // ------------------------------------------------------------------


  "simplify(eig(dot(transpose(A+B),B+transpose(transpose(A)))))",
  "eig(cov(A+B))",
    
  "simplify(eig(dot(x*transpose(transpose(A)), transpose(A*x))))",
  "eig(cov(transpose(A)*transpose(x)))",
    
  "simplify(eig(dot(x*transpose(transpose(A)), transpose(x*A))))",
  "eig(cov(transpose(A)*transpose(x)))",
    

  // ------------------------------------------------------------------


  "pattern(dot(a_,transpose(a_)), cov(a_))",
  "dot(a_,transpose(a_))->cov(a_)",

  "simplify(eig(dot(transpose(A+B),B+transpose(transpose(A)))))",
  "eig(cov(A+B))",
    
  "simplify(eig(dot(x*transpose(transpose(A)), transpose(x*A))))",
  "eig(cov(transpose(A)*transpose(x)))",
    
  "simplify(eig(dot(x*transpose(transpose(A)), transpose(A*x))))",
  "eig(cov(transpose(A)*transpose(x)))",

  "clearpatterns()",
  "",


  // ------------------------------------------------------------------



  "simplify(eig(dot(transpose(A+B),B+transpose(transpose(A)))))",
  "eig(inner(transpose(A),A)+inner(transpose(A),B)+inner(transpose(B),A)+inner(transpose(B),B))",
    

  // ------------------------------------------------------------------


  "pattern(dot(transpose(a_),a_), cov(a_), not(number(a_)))",
  "dot(transpose(a_),a_)->cov(a_)",

  "pattern(dot(transpose(a_),a_), cov(a_), number(a_),a_>0 )",
  "dot(transpose(a_),a_)->cov(a_)",

  "simplify(eig(dot(transpose(3),transpose(transpose(3)))))",
  "eig(9)",

  "simplify(eig(dot(transpose(-3),transpose(transpose(-3)))))",
  "eig(9)",

  "simplify(eig(dot(transpose(-x),transpose(transpose(-x)))))",
  "eig(cov(-x))",

  "clearpatterns()",
  "",


  // ------------------------------------------------------------------



  "pattern(something(a_,b_),b_*somethingElse(a_))",
  "something(a_,b_)->b_*somethingElse(a_)",

  "simplify(something(x,y))",
  "somethingElse(x)*y",

  "clearpatterns()",
  "",


  // ------------------------------------------------------------------



  "pattern(something(a_,b_),b_*somethingElse(a_))",
  "something(a_,b_)->b_*somethingElse(a_)",

  "indirection(h,k) = something(h,k)",
  "",

  "simplify(indirection(x,y))",
  "somethingElse(x)*y",

  "clearpatterns()",
  "",


  // ------------------------------------------------------------------


  "pattern(dot(a_,transpose(a_)), cov(a_))",
  "dot(a_,transpose(a_))->cov(a_)",

  "simplify(1 + eig(dot(transpose(A)+transpose(B),B+transpose(transpose(A)))))",
  "1+eig(inner(transpose(A),A)+inner(transpose(A),B)+inner(transpose(B),A)+inner(transpose(B),B))",

  // catches if a guard works against substituting bare native functions
  "simplify(1 + eig(dot(transpose(A)+transpose(B),B+transpose(transpose(A)))))",
  "1+eig(inner(transpose(A),A)+inner(transpose(A),B)+inner(transpose(B),A)+inner(transpose(B),B))",

  "clearpatterns()",
  "",


  // ------------------------------------------------------------------


  "pattern(dot(transpose(a_),a_), cov(a_))",
  "dot(transpose(a_),a_)->cov(a_)",

  // picks up that transpose(abs(k))
  // is a substitution that works
  "simplify(1 + eig(dot(abs(k),transpose(abs(k)))))",
  "1+eig(cov(transpose(abs(k))))",

  // picks up that transpose(b(2))
  // is a substitution that works
  "simplify(1 + eig(dot(b(2),transpose(b(2)))))",
  "1+eig(cov(transpose(b(2))))",

  "clearpatterns()",
  "",


  // ------------------------------------------------------------------

  "pattern(a_ + b_, dot(cov(b_),cov(a_)))",
  "a_+b_->dot(cov(b_),cov(a_))",

  "simplify(something + somethingelse)",
  "inner(cov(somethingelse),cov(something))",

  "clearpatterns()",
  "",

  // ------------------------------------------------------------------

  "pattern(aFunction(a_), anotherFunction(a_))",
  "aFunction(a_)->anotherFunction(a_)",

  "simplify(aFunction(someArg))",
  "anotherFunction(someArg)",

  "clearpatterns()",
  "",

  // ------------------------------------------------------------------

  "pattern(aFunction(a_), anotherFunction(a_))",
  "aFunction(a_)->anotherFunction(a_)",

  "simplify(1 + aFunction(someArg))",
  "1+anotherFunction(someArg)",

  "clearpatterns()",
  "",

  // ------------------------------------------------------------------

  "pattern(aFunction(a_), anotherFunction(a_))",
  "aFunction(a_)->anotherFunction(a_)",

  "simplify(aFunction(someArg)+aFunction(someOtherArg))",
  "anotherFunction(someArg)+anotherFunction(someOtherArg)",

  "clearpatterns()",
  "",

  // ------------------------------------------------------------------

  "pattern(aFunction(a_), anotherFunction(a_))",
  "aFunction(a_)->anotherFunction(a_)",

  "simplify( a + aFunction(someArg) + b + aFunction(someOtherArg))",
  "a+b+anotherFunction(someArg)+anotherFunction(someOtherArg)",

  "clearpatterns()",
  "",

  // ------------------------------------------------------------------

  "pattern(aFunction(a_), anotherFunction(a_))",
  "aFunction(a_)->anotherFunction(a_)",

  "simplify(aFunction(aFunction(someOtherArg)))",
  "anotherFunction(anotherFunction(someOtherArg))",

  "clearpatterns()",
  "",

  // ------------------------------------------------------------------

  "pattern(aFunction(a_), anotherFunction(a_))",
  "aFunction(a_)->anotherFunction(a_)",

  "pattern(aFunction(a_), anotherFunctionBBBB(a_))",
  "aFunction(a_)->anotherFunctionBBBB(a_)",

  "simplify(aFunction(aFunction(someOtherArg)))",
  "anotherFunctionBBBB(anotherFunctionBBBB(someOtherArg))",

  "clearpatterns()",
  "",

  // ------------------------------------------------------------------

  "pattern(aFunction(a_), anotherFunctionBBBB(a_))",
  "aFunction(a_)->anotherFunctionBBBB(a_)",

  "pattern(aFunction(a_), anotherFunction(a_))",
  "aFunction(a_)->anotherFunction(a_)",

  "simplify(aFunction(aFunction(someOtherArg)))",
  "anotherFunction(anotherFunction(someOtherArg))",

  "clearpatterns()",
  "",

  // ------------------------------------------------------------------

  "pattern(aFunction(a_), anotherFunction(a_))",
  "aFunction(a_)->anotherFunction(a_)",

  "pattern(anotherFunction(a_), YETanotherFunction(a_))",
  "anotherFunction(a_)->YETanotherFunction(a_)",

  "simplify(aFunction(aFunction(someOtherArg)))",
  "YETanotherFunction(YETanotherFunction(someOtherArg))",

  "clearpatterns()",
  "",

  // ------------------------------------------------------------------
  // this one tests if multiple rounds of ruleS applications are
  // done while there are still trasformations succeeding.

  "pattern(anotherFunction(a_), YETanotherFunction(a_))",
  "anotherFunction(a_)->YETanotherFunction(a_)",

  "pattern(aFunction(a_), anotherFunction(a_))",
  "aFunction(a_)->anotherFunction(a_)",

  "simplify(aFunction(aFunction(someOtherArg)))",
  "YETanotherFunction(YETanotherFunction(someOtherArg))",

  "clearpatterns()",
  "",

  // ------------------------------------------------------------------
  // you can use transformation rules to calculate factorials
  // you shouldn't, but you can

  "pattern(fact(0), 1)",
  "fact(0)->1",

  // TODO would be nice to print out the constraints
  // as well.
  "pattern(fact(a_), a_*fact(a_-1), not(a_ == 0))",
  "fact(a_)->a_*fact(a_-1)",

  "simplify(fact(3))",
  "6",

  "clearpatterns()",
  "",

  // ------------------------------------------------------------------

  "pattern(f(a_,b_),f(b_,a_))",
  "f(a_,b_)->f(b_,a_)",

  // TODO would be nice to print out the constraints
  // as well.
  "simplify(f(1,2))",
  "Stop: maximum application of single transformation rule exceeded: f(a_,b_)(f(b_,a_))",

  "clearpatterns()",
  "",

  // overwriting a pattern ---------------------------------------------

  "pattern(a_ + a_ ,42 * a_)",
  "a_+a_->42*a_",

  "pattern(a_ + a_ ,21 * a_)",
  "a_+a_->21*a_",

  "simplify(x+x)",
  "21*x",

  "clearpatterns()",
  "",

  // ------------------------------------------------------------------

  "pattern(f(a_,b_))",
  "Stop: pattern needs at least a template and a transformed version",

  // ------------------------------------------------------------------

  "pattern()",
  "Stop: pattern needs at least a template and a transformed version",

  // ------------------------------------------------------------------

  "pattern(f(a_,b_), f(a_,b_))",
  "Stop: recursive pattern",


]);

// sourcefile:  tests/polar.coffee 
const test_polar = () => run_test([
  "polar(1+i)",
  "2^(1/2)*exp(1/4*i*pi)",

  "polar(-1+i)",
  "2^(1/2)*exp(3/4*i*pi)",

  "polar(-1-i)",
  "2^(1/2)*exp(-3/4*i*pi)",

  "polar(1-i)",
  "2^(1/2)*exp(-1/4*i*pi)",

  "rect(polar(3+4*i))",
  "3+4*i",

  "rect(polar(-3+4*i))",
  "-3+4*i",

  "rect(polar(3-4*i))",
  "3-4*i",

  "rect(polar(-3-4*i))",
  "-3-4*i",

  "rect(polar((-1)^(1/2)))",
  "i",

  "rect(polar((-1)^(-5/6)))",
  "-1/2*i-1/2*3^(1/2)",

  "rect(polar((-1)^(-5/a)))",
  "cos(5*pi/a)-i*sin(5*pi/a)",

  "rect(polar((-1)^(a)))",
  "cos(a*pi)+i*sin(a*pi)",

  "-i*(-2*rect(polar((-1)^(1/6)))/rect(polar((3^(1/2))))+2*rect(polar((-1)^(5/6)))/rect(polar((3^(1/2)))))^(1/4)*(2*rect(polar((-1)^(1/6)))/rect(polar((3^(1/2))))-2*rect(polar((-1)^(5/6)))/rect(polar((3^(1/2)))))^(1/4)/(2^(1/2))",
  //"-(-1)^(3/4)",
  "1/2^(1/2)-i/(2^(1/2))",

  // this is also "-(-1)^(3/4)" but we get to that after the simplification after
  // this test
  "-i*(-2*polar((-1)^(1/6))/polar((3^(1/2)))+2*polar((-1)^(5/6))/polar((3^(1/2))))^(1/4)*(2*polar((-1)^(1/6))/polar((3^(1/2)))-2*polar((-1)^(5/6))/polar((3^(1/2))))^(1/4)/(2^(1/2))",
  "-i*(-2*exp(1/6*i*pi)/(3^(1/2))+2*exp(5/6*i*pi)/(3^(1/2)))^(1/4)*(2*exp(1/6*i*pi)/(3^(1/2))-2*exp(5/6*i*pi)/(3^(1/2)))^(1/4)/(2^(1/2))",

  "simplify",
  "(1-i)/(2^(1/2))",

  "-i*(-2*rect(exp(1/6*i*pi))/(3^(1/2))+2*rect(exp(5/6*i*pi))/(3^(1/2)))^(1/4)*(2*rect(exp(1/6*i*pi))/(3^(1/2))-2*rect(exp(5/6*i*pi))/(3^(1/2)))^(1/4)/(2^(1/2))",
  //"-(-1)^(3/4)",
  "1/2^(1/2)-i/(2^(1/2))",

  "polar(-(-1)^(3/4))",
  "exp(-1/4*i*pi)",

  "polar(-i*(-2*(-1)^(1/6)/(3^(1/2))+2*(-1)^(5/6)/(3^(1/2)))^(1/4)*(2*(-1)^(1/6)/(3^(1/2))-2*(-1)^(5/6)/(3^(1/2)))^(1/4)/(2^(1/2)))",
  "exp(-1/4*i*pi)",

  // nothing to do for polar since we end
  // up with a real
  "polar((-1)^(1/6) - (-1)^(5/6))",
  "3^(1/2)",

]);

// sourcefile:  tests/power.coffee 
const test_power = () => run_test([

  // according to the notorious
  // "PEMDAS" mnemonic, the power
  // operator has the most precedence.
  // Strangely, Mathematica parses
  // a^1/2 as sqrt(a), not following PEMDAS,
  // probably because of some fancy
  // euristics, since, contrarily to the
  // case above, it also parses
  // a^b/2 as (a^b)/2.
  // I think this more standard/uniform handling
  // a-la-sympy is ok.
  "a^1/2 + a^1/2",
  "a",

  "2^(1/2)",
  "2^(1/2)",

  "2^(3/2)",
  "2*2^(1/2)",

  "(-2)^(1/2)",
  "i*2^(1/2)",

  "3^(4/3)",
  "3*3^(1/3)",

  "3^(-4/3)",
  "1/(3*3^(1/3))",

  "3^(5/3)",
  "3*3^(2/3)",

  "3^(2/3)-9^(1/3)",
  "0",

  "3^(10/3)",
  "27*3^(1/3)",

  "3^(-10/3)",
  "1/(27*3^(1/3))",

  "(1/3)^(10/3)",
  "1/(27*3^(1/3))",

  "(1/3)^(-10/3)",
  "27*3^(1/3)",

  "27^(2/3)",
  "9",

  "27^(-2/3)",
  "1/9",

  "102^(1/2)",
  "2^(1/2)*3^(1/2)*17^(1/2)",

  "32^(1/3)",
  "2*2^(2/3)",

  "9999^(1/2)",
  "3*11^(1/2)*101^(1/2)",

  "8^(1/2)",
  "2*2^(1/2)",

  "10000^(1/3)",
  "10*2^(1/3)*5^(1/3)",

  // we could take out a "18" from the radix but
  // we only handle this for small numbers in
  // "quickfactor" routine. TODO
  "8204861575751304355842204^(1/2)",
  "8204861575751304355842204^(1/2)",

  // see above
  "simplify(8204861575751304355842204^(1/2))",
  "8204861575751304355842204^(1/2)",

  "sqrt(-1/2 -1/2 * x)",
  "(-1/2*x-1/2)^(1/2)",

  "sqrt(x*y)",
  "(x*y)^(1/2)",

  "sqrt(1/x)",
  "(1/x)^(1/2)",

  "sqrt(x^y)",
  "(x^y)^(1/2)",

  "sqrt(x)^2",
  "x",

  "sqrt(x^2)",
  "abs(x)",

  // always true, whether x is real or not
   "sqrt(x^2)^2",
   "x^2",

  "3^(1/2)*i/9",
  "1/9*i*3^(1/2)",

  "(-4.0)^(1.5)",
  "-8.0*i",

  "(-4.0)^(3/2)",
  "-8.0*i",

  // usually the rectangular form is returned.
  "(-1)^(1/3)",
  //"(-1)^(1/3)",
  "1/2+1/2*i*3^(1/2)",

  // note how the "double" type
  // is toxic i.e. it propagates through
  // everything it touches.
  // also, that -0.500000... _really_ is 0.5
  // however we get some error in the calculations
  // so it doesn't end up being exactly equal to -0.5
  "(-1.0)^(2/3)",
  "-0.500000...+0.866025...*i",

  // this also has a nested radical
  // form but we are not calculating
  // that.
  "(-1)^(1/3)*2^(1/4)",
  //"(-1)^(1/3)*2^(1/4)",
  "1/2*2^(1/4)+1/2*i*2^(1/4)*3^(1/2)",

  "(-1)^(1/2)",
  "i",

  "sqrt(1000000)",
  "1000",

  "sqrt(-1000000)",
  "1000*i",

  "sqrt(2^60)",
  "1073741824",

  // this is why we factor irrationals

  "6^(1/3) 3^(2/3)",
  "3*2^(1/3)",

  // inverse of complex numbers

  "1/(2+3*i)",
  "2/13-3/13*i",

  "1/(2+3*i)^2",
  "-5/169-12/169*i",

  "(-1+3i)/(2-i)",
  "-1+i",

  // other

  "(0.0)^(0.0)",
  "1.0",

  "(-4.0)^(0.5)",
  "2.0*i",

  "(-4.0)^(-0.5)",
  "-0.5*i",

  "(-4.0)^(-1.5)",
  "0.125*i",

  // more complex number cases

  "(1+i)^2",
  "2*i",

  "(1+i)^(-2)",
  "-1/2*i",

  "(1+i)^(1/2)",
  //"(-1)^(1/8)*2^(1/4)",
  "i*2^(1/4)*sin(1/8*pi)+2^(1/4)*cos(1/8*pi)",

  "(1+i)^(-1/2)",
  "-(-1)^(7/8)/(2^(1/4))",

  "(1+i)^(0.5)",
  "1.098684...+0.455090...*i",

  "(1+i)^(-0.5)",
  "0.776887...-0.321797...*i",

  // test cases for simplification of polar forms, counterclockwise

  "exp(i*pi/2)",
  "i",

  "exp(i*pi)",
  "-1",

  "exp(i*3*pi/2)",
  "-i",

  "exp(i*2*pi)",
  "1",

  "exp(i*5*pi/2)",
  "i",

  "exp(i*3*pi)",
  "-1",

  "exp(i*7*pi/2)",
  "-i",

  "exp(i*4*pi)",
  "1",

  "exp(A+i*pi/2)",
  "i*exp(A)",

  "exp(A+i*pi)",
  "-exp(A)",

  "exp(A+i*3*pi/2)",
  "-i*exp(A)",

  "exp(A+i*2*pi)",
  "exp(A)",

  "exp(A+i*5*pi/2)",
  "i*exp(A)",

  "exp(A+i*3*pi)",
  "-exp(A)",

  "exp(A+i*7*pi/2)",
  "-i*exp(A)",

  "exp(A+i*4*pi)",
  "exp(A)",

  // test cases for simplification of polar forms, clockwise

  "exp(-i*pi/2)",
  "-i",

  "exp(-i*pi)",
  "-1",

  "exp(-i*3*pi/2)",
  "i",

  "exp(-i*2*pi)",
  "1",

  "exp(-i*5*pi/2)",
  "-i",

  "exp(-i*3*pi)",
  "-1",

  "exp(-i*7*pi/2)",
  "i",

  "exp(-i*4*pi)",
  "1",

  "exp(A-i*pi/2)",
  "-i*exp(A)",

  "exp(A-i*pi)",
  "-exp(A)",

  "exp(A-i*3*pi/2)",
  "i*exp(A)",

  "exp(A-i*2*pi)",
  "exp(A)",

  "exp(A-i*5*pi/2)",
  "-i*exp(A)",

  "exp(A-i*3*pi)",
  "-exp(A)",

  "exp(A-i*7*pi/2)",
  "i*exp(A)",

  "exp(A-i*4*pi)",
  "exp(A)",
]);

// sourcefile:  tests/printlatex.coffee 
const test_printlatex = () => run_test([

  "printlatex(pi/2)",
  "\\frac{\\pi}{2}",

  "printlatex(-pi/2)",
  "-\\frac{\\pi}{2}",

  "printlatex(pi/(-2))",
  "-\\frac{\\pi}{2}",

  "printlatex(-pi/(-2))",
  "\\frac{\\pi}{2}",

  "printlatex((1/2)*pi)",
  "\\frac{\\pi}{2}",

  "printlatex((1/(-2))*pi)",
  "-\\frac{\\pi}{2}",

  // note that these two are different:
  //    pi^(1/2) != pi^1/2
  "printlatex(pi^(1/2))",
  "\\sqrt{\\pi}",

  "printlatex(1/x+x^3+1+1)",
  "2+\\frac{1}{x}+x^3",

  "lastlatexprint == \"2+\\frac{1}{x}+x^3\"",
  "1",

  "printlatex(quote(1/x+1+1))",
  "\\frac{1}{x}+1+1",

  "printlatex(quote(defint(a,y,-sqrt(1-x^2),sqrt(1-x^2))))",
  "\\int^{\\sqrt{1-x^2} }_{-\\sqrt{1-x^2} } \\! a \\, \\mathrm{d} y",

  "printlatex(1/(x+1))",
  "\\frac{1}{1+x}",

  "printlatex(1/(x+1)^2)",
  "\\frac{1}{(1+x)^2}",

  "printlatex(quote(1/(2*a*(x+1))))",
  "\\frac{1}{2a(x+1)}",

  "printlatex(j^k^l^m)",
  "j^{k^{l^m}}",

  "printlatex(dot(a,b))",
  "a \\cdot b",

  "printlatex(inner(a,b))",
  "a \\cdot b",

  "printlatex(inv(a))",
  "{a}^{-1}",

  "printlatex(inv(a+1))",
  "{(1+a)}^{-1}",

  "printlatex(12x^11)",
  "12x^{11}",

  // tricky when there are two consecutive
  // numbers, can't just leave a space there.
  "printlatex(5^2 * 3^y)",
  "25 \\cdot 3^y",

  "printlatex(5^2 * 3^(1/2))",
  "25\\sqrt{3}",

  "printlatex(5^2 * 3^(2/3))",
  "25\\sqrt[3]{3^2}",

  "printlatex([[0,1],[1,0]])",
  "\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}",

  "printlatex([0,1])",
  "\\begin{bmatrix} 0 & 1 \\end{bmatrix}",

  "printlatex([[0,1,2],[3,4,5]])",
  "\\begin{bmatrix} 0 & 1 & 2 \\\\ 3 & 4 & 5 \\end{bmatrix}",

  "printlatex([[a]])",
  "\\begin{bmatrix} a \\end{bmatrix}",

  "printlatex([[0],[1]])",
  "\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}",

  "printlatex(quote(sum((-1)^k * (1/(2*k + 1)),k,0,100)*4))",
  "\\sum_{k=0}^{100}{\\frac{(-1)^k}{(2k+1)}}4",

  "printlatex(quote(2*product(4*k^2/(4*k^2-1),k,1,100)))",
  "2\\prod_{k=1}^{100}{\\frac{4k^2}{(4k^2-1)}}",

  "printlatex(quote(a==b))",
  "{a} = {b}",

  "printlatex(quote(a<b))",
  "{a} < {b}",

  "printlatex(quote(a<=b))",
  "{a} \\leq {b}",

  "printlatex(quote(a>b))",
  "{a} > {b}",

  "printlatex(quote(a>=b))",
  "{a} \\geq {b}",

  "printlatex(quote(f(x)=test(x<3,-x-4,3<=x,x*x+7,120/x+5)))",
  "f(x)=\\left\\{ \\begin{array}{ll}{-x-4} & if & {x} < {3} \\\\\\\\{xx+7} & if & {3} \\leq {x} \\\\\\\\{\\frac{120}{x}+5} & otherwise  \\end{array} \\right.",

]);

// sourcefile:  tests/product.coffee 
const test_product = () => run_test([
  
  // compute pi using Viete's formula ------------

  // note that this is not an array, this
  // defines a recursive function
  "a(n)=test(n=0,0,sqrt(2+a(n-1)))",
  "",

  // not very efficient because evaluation of
  // a(n) is not memoized, so there
  // is quadratic cost as n increases.
  "float(2*product(2/a(k),k,1,9))",
  "3.141588...",


  // Wallis' product
  "2*product(float(4*k^2/(4*k^2-1)),k,1,100)",
  "3.133787...",

  // ---------------------------
  "f(a,b)=product(k,k,a,b)",
  "",

  "f(1,2)",
  "2",

  // --- cleanup

  "a = quote(a)",
  "",

  "f = quote(f)",
  "",


]);

// sourcefile:  tests/quickfactor.coffee 
const test_quickfactor = function() {
  let i = 0;
  logout("testing quickfactor\n");
  for (i = 2; i < 10001; i++) {
    if ((i % 1000) === 0) {
      console.log(i);
    }
    let base = i;
    algebrite.push_integer(base);
    algebrite.push_integer(1);
    algebrite.quickfactor();
    const h = algebrite.tos;
    let j = 0;
    while (base > 1) {
      let expo = 0;
      while ((base % algebrite.primetab[j]) === 0) {
        base /= algebrite.primetab[j];
        expo++;
      }
      if (expo) {
        algebrite.push_integer(algebrite.primetab[j]);
        algebrite.push_integer(expo);
        algebrite.quickpower();
      }
      j++;
    }
    algebrite.multiply_all(algebrite.tos - h);
    p2 = algebrite.pop();
    p1 = algebrite.pop();
    if (!algebrite.equal(p1, p2)) {
      logout("failed\n");
      // print_lisp(p1);
      // print_lisp(p2);
      // errout();
      return;
    }
  }
  console.log("quickfactor is ok");
  return logout("ok\n");
};

//endif

// sourcefile:  tests/quotient.coffee 
const test_quotient = () => run_test([
  "quotient(x^2+1,x+1)-x+1",
  "0",

  "quotient(a*x^2+b*x+c,d*x+e)-(-a*e/(d^2)+a*x/d+b/d)",
  "0",
]);

// sourcefile:  tests/rationalize.coffee 
const test_rationalize = () => run_test([

  "rationalize(a/b+c/d)",
  "(a*d+b*c)/(b*d)",

  "rationalize(t*y/(t+y)+2*t^2*y*(2*t+y)^(-2))",
  "t*y*(6*t^2+y^2+6*t*y)/((t+y)*(2*t+y)^2)",

  "rationalize(x^(-2*a)+x^(-4*a))",
  "(1+x^(2*a))/(x^(4*a))",

  "rationalize(x^(1/3)+x^(2/3))",
  "x^(1/3)*(1+x^(1/3))",

  "rationalize(rect(-(-1)^(3/4)))",
  "(1-i)/(2^(1/2))",

]);

// sourcefile:  tests/real.coffee 
const test_real = () => run_test([

  "real(a+i*b)",
  "a",

  "real(1+exp(i*pi/3))",
  "3/2",

  "real(i)",
  "0",

  "real((-1)^(1/3))",
  "1/2",
]);

// sourcefile:  tests/rect.coffee 
const test_rect = () => run_test([

  // check when not assuming real variables ----------
  "assumeRealVariables = 0",
  "",

  "rect(a)",
  "rect(a)",

  // same as rect(a) + i*rect(b)
  // where rect(b) is abs(b)*(cos(arg(b)) + i*sin(arg(b)))
  "rect(a+i*b)",
  "rect(a)-abs(b)*sin(arg(b))+i*abs(b)*cos(arg(b))",

  "assumeRealVariables = 1",
  "",
  // --------------------------------------------------

  "rect(a)",
  "a",

  "rect(a+i*b)",
  "a+i*b",

  "rect(exp(a+i*b))",
  "i*exp(a)*sin(b)+exp(a)*cos(b)",

  "rect(1+exp(i*pi/3))",
  "3/2+1/2*i*3^(1/2)",

  "z=(a+b*i)/(c+d*i)",
  "",

  "rect(z)-real(z)-i*imag(z)",
  "0",

  "z=quote(z)",
  "",

  "rect((-1)^(2/3))",
  "-1/2+1/2*i*3^(1/2)",

  "rect(exp(-3/4*i*pi))",
  "-1/2*2^(1/2)-1/2*i*2^(1/2)",

  "rect(exp(-1/4*i*pi))",
  "1/2*2^(1/2)-1/2*i*2^(1/2)",

  "rect(exp(-2/4*i*pi))",
  "-i",

  "rect(exp(-3/4*i*pi))",
  "-1/2*2^(1/2)-1/2*i*2^(1/2)",

  "rect(exp(-4/4*i*pi))",
  "-1",

  "rect(((-1)^(1/2)/(3^(1/2)))^(1/2))",
  "i*2^(1/2)/(2*3^(1/4))+2^(1/2)/(2*3^(1/4))",

  "rect((-1)^(1/6) - (-1)^(5/6))",
  "3^(1/2)",

]);

// sourcefile:  tests/roots.coffee 
const test_roots = () => run_test([

  "roots(x)",
  "0",

  "roots(2^x-y,y)",
  "2^x",

  "roots(x^2)",
  "0",

  "roots(x^3)",
  "0",

  "roots(2 x)",
  "0",

  "roots(2 x^2)",
  "0",

  "roots(i*x^2-13*i*x+36*i)",
  "[4,9]",

  "roots(2 x^3)",
  "0",

  "roots(6+11*x+6*x^2+x^3)",
  "[-3,-2,-1]",

  "roots(a*x^2+b*x+c)",
  //"[-b/(2*a)-(-4*a*c+b^2)^(1/2)/(2*a),-b/(2*a)+(-4*a*c+b^2)^(1/2)/(2*a)]",
  "[-1/2*(b^2/(a^2)-4*c/a)^(1/2)-b/(2*a),1/2*(b^2/(a^2)-4*c/a)^(1/2)-b/(2*a)]",

  "roots(3+7*x+5*x^2+x^3)",
  "[-3,-1]",

  "roots(x^3+x^2+x+1)",
  "[-1,-i,i]",

  "roots(x^2==1)",
  "[-1,1]",

  "roots(3 x + 12 == 24)",
  "4",

  "y=roots(x^2+b*x+c/k)[1]",
  "",

  "y^2+b*y+c/k",
  "0",

  "y=roots(x^2+b*x+c/k)[2]",
  "",

  "y^2+b*y+c/k",
  "0",

  "y=roots(a*x^2+b*x+c/4)[1]",
  "",

  "a*y^2+b*y+c/4",
  "0",

  "y=roots(a*x^2+b*x+c/4)[2]",
  "",

  "a*y^2+b*y+c/4",
  "0",

  "y=quote(y)",
  "",

  // --------------------------------------------
  // some more tests with 3rd degree polynomials
  // including use of cubic formula.
  // Only the ones marked "DOES use cubic formula"
  // actually do so, all other examples manage to
  // be reduced via factoring.
  // --------------------------------------------

  "roots(x^3 + x^2 + x + 1)",
  "[-1,-i,i]",
  
  "roots(2*x^3 + 3*x^2 - 11*x - 6)",
  "[-3,-1/2,2]",

  "roots(x^3 - 7*x^2 + 4*x + 12)",
  "[-1,2,6]",

  "roots(x^3 + 1)",
  "[-1,1/2-1/2*i*3^(1/2),1/2+1/2*i*3^(1/2)]",
  // also: "[-1,-(-1)^(2/3),(-1)^(1/3))",
  
  "roots(x^3 - 1)",
  "[1,-1/2-1/2*i*3^(1/2),-1/2+1/2*i*3^(1/2)]",
  // also: "[1,-(-1)^(1/3),(-1)^(2/3))",
  
  "clearall",
  "",

  // DOES use cubic formula
  "thePoly = x^3 + d",
  "",

  "roots(thePoly)",
  // also OK:
  //    "[-d^(1/3),1/2*d^(1/3)*(1-i*3^(1/2)),1/2*d^(1/3)*(1+i*3^(1/2)))",
  // or "[-(-1)^(2/3)*d^(1/3),-d^(1/3),(-1)^(1/3)*d^(1/3))",
  "[1/2*d^(1/3)-1/2*i*3^(1/2)*d^(1/3),1/2*d^(1/3)+1/2*i*3^(1/2)*d^(1/3),-d^(1/3)]",
    
  "and((simplify(subst(last[1],x,thePoly)) == 0),(simplify(subst(last[2],x,thePoly)) == 0),(simplify(subst(last[3],x,thePoly)) == 0))",
  "1",

  // DOES use cubic formula
  // the actual format of this solution might change, the important thing
  // is that the next few tests work, where we plug in the
  // symbolic solutions in the polynomial again and we check that we
  // get the zeroes.

  "clearall",
  "",

  "thePoly = a*x^3 + b*x^2 + c*x + d",
  "",
    
  "roots(thePoly)",
  "[-1/3*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(1/3)-b^2/(3*a^2*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(1/3))-b/(3*a)+c/(a*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(1/3)),(-1/3*a*b*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(1/3)-1/2*a*c+1/6*b^2-1/2*i*3^(1/2)*a*c-1/6*i*3^(1/2)*a^2*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(2/3)+1/6*i*3^(1/2)*b^2+1/6*a^2*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(2/3))/(a^2*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(1/3)),(-1/3*a*b*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(1/3)-1/2*a*c+1/6*b^2+1/2*i*3^(1/2)*a*c+1/6*i*3^(1/2)*a^2*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(2/3)-1/6*i*3^(1/2)*b^2+1/6*a^2*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(2/3))/(a^2*(1/2*(-27*b^2*c^2/(a^4)+108*b^3*d/(a^4)-486*b*c*d/(a^3)+108*c^3/(a^3)+729*d^2/(a^2))^(1/2)+b^3/(a^3)-9*b*c/(2*a^2)+27*d/(2*a))^(1/3))]",
    
  "and((simplify(subst(last[1],x,thePoly)) == 0),(simplify(subst(last[2],x,thePoly)) == 0),(simplify(subst(last[3],x,thePoly)) == 0))",
  "1",

  "roots(x^3 + 6x - 20)",
  "[2,-1-3*i,-1+3*i]",

  "roots(x^3 - 6x - 40)",
  "[4,-2-i*2^(1/2)*3^(1/2),-2+i*2^(1/2)*3^(1/2)]",
    
  "roots(x^3 + x^2 - 5x - 5)",
  "[-1,-5^(1/2),5^(1/2)]",
    
  "roots(x^3 - 8x + 3)",
  "[-3,3/2-1/2*5^(1/2),3/2+1/2*5^(1/2)]",
    
  "roots(x^3 - 8x - 3)",
  "[3,-3/2-1/2*5^(1/2),-3/2+1/2*5^(1/2)]",
    
  "roots(x^3 - 18x + 35)",
  "[-5,5/2-1/2*i*3^(1/2),5/2+1/2*i*3^(1/2)]",

  "clearall",
  "",

  // DOES use cubic formula
  "thePoly = x^3 - 3x + 1",
  "",
    
  "roots(thePoly)",
  "[-(-1)^(1/9)+(-1)^(8/9),1/2*cos(1/9*pi)-1/2*cos(8/9*pi)+1/2*i*sin(1/9*pi)-1/2*i*sin(8/9*pi)-3^(1/2)*cos(11/18*pi),1/2*cos(1/9*pi)-1/2*cos(8/9*pi)+1/2*i*sin(1/9*pi)-1/2*i*sin(8/9*pi)+3^(1/2)*cos(11/18*pi)]",
  // also: "[(3+1/3*(27/2+27/2*i*3^(1/2))^(2/3)-3*i*3^(1/2)+1/3*i*3^(1/2)*(27/2+27/2*i*3^(1/2))^(2/3))/(2*(27/2+27/2*i*3^(1/2))^(1/3)),(3+1/3*(27/2+27/2*i*3^(1/2))^(2/3)+3*i*3^(1/2)-1/3*i*3^(1/2)*(27/2+27/2*i*3^(1/2))^(2/3))/(2*(27/2+27/2*i*3^(1/2))^(1/3)),(-3-1/3*(27/2+27/2*i*3^(1/2))^(2/3))/((27/2+27/2*i*3^(1/2))^(1/3)))",
        
  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-15))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-15))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-15))))",
  "1",
    
  "clearall",
  "",

  // DOES use cubic formula
  "thePoly = x^3 - 3x - 1",
  "",
    
  "roots(thePoly)",
  "[-(-1)^(2/9)+(-1)^(7/9),1/2*cos(2/9*pi)-1/2*cos(7/9*pi)+1/2*i*sin(2/9*pi)-1/2*i*sin(7/9*pi)-3^(1/2)*cos(13/18*pi),1/2*cos(2/9*pi)-1/2*cos(7/9*pi)+1/2*i*sin(2/9*pi)-1/2*i*sin(7/9*pi)+3^(1/2)*cos(13/18*pi)]",
  // also: "[(3+1/3*(-27/2+27/2*i*3^(1/2))^(2/3)-3*i*3^(1/2)+1/3*i*3^(1/2)*(-27/2+27/2*i*3^(1/2))^(2/3))/(2*(-27/2+27/2*i*3^(1/2))^(1/3)),(3+1/3*(-27/2+27/2*i*3^(1/2))^(2/3)+3*i*3^(1/2)-1/3*i*3^(1/2)*(-27/2+27/2*i*3^(1/2))^(2/3))/(2*(-27/2+27/2*i*3^(1/2))^(1/3)),(-3-1/3*(-27/2+27/2*i*3^(1/2))^(2/3))/((-27/2+27/2*i*3^(1/2))^(1/3)))",
    
  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-15))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-15))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-15))))",
  "1",
    
  "roots(x^3 - 15x - 4)",
  "[4,-2-3^(1/2),-2+3^(1/2)]",
    
  "roots(2*x^3 - 4x^2 - 22*x + 24)",
  "[-3,1,4]",

  "clearall",
  "",

  // DOES use cubic formula
  "thePoly = 3*x^3 - 10*x^2 - 14*x + 27",
  "",
    
  "roots(thePoly)",
  "[1/3*(10/3-226/(9*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3))-(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3)),1/3*(10/3+113/(9*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3))+1/2*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3)-113*i*3^(1/2)/(9*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3))+1/2*i*3^(1/2)*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3)),1/3*(10/3+113/(9*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3))+1/2*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3)+113*i*3^(1/2)/(9*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3))-1/2*i*3^(1/2)*(781/54+i*97^(1/2)*1933^(1/2)/(2*3^(1/2)))^(1/3))]",
    
  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(10^(-13))),(abs(float(subst(float(last[2]),x,thePoly))) < float(10^(-13))), (abs(float(subst(float(last[3]),x,thePoly))) < float(10^(-13))))",
  "1",
    

  "clearall",
  "",

  // DOES use cubic formula
  "thePoly = 1*x^3 + 6*x^2 - 12*x + 8",
  "",
    
  "roots(thePoly)",
  "[-2+2^(1/3)+2^(2/3)-i*2^(1/3)*3^(1/2)+i*2^(2/3)*3^(1/2),-2+2^(1/3)+2^(2/3)+i*2^(1/3)*3^(1/2)-i*2^(2/3)*3^(1/2),-2*(1+2^(1/3)+2^(2/3))]",
    
  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-14))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-14))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-14))))",
  "1",


  "roots(1*x^3 + 6*x^2 + 12*x + 8)",
  "-2",
    
  "clearall",
  "",

  // DOES use cubic formula
  "thePoly = 1*x^3 + 0*x^2 + 12*x - 10",
  "",
    
  "roots(thePoly)",
  "[(-6+1/6*(-135+27*89^(1/2))^(2/3)-6*i*3^(1/2)-1/6*i*3^(1/2)*(-135+27*89^(1/2))^(2/3))/((-135+27*89^(1/2))^(1/3)),(-6+1/6*(-135+27*89^(1/2))^(2/3)+6*i*3^(1/2)+1/6*i*3^(1/2)*(-135+27*89^(1/2))^(2/3))/((-135+27*89^(1/2))^(1/3)),(12-1/3*(-135+27*89^(1/2))^(2/3))/((-135+27*89^(1/2))^(1/3))]",
    
  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-14))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-14))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-14))))",
  "1",
    
  "roots(1*x^3 + 0*x^2 - 18*x + 35)",
  "[-5,5/2-1/2*i*3^(1/2),5/2+1/2*i*3^(1/2)]",

  "clearall",
  "",

  // DOES use cubic formula
  "thePoly = 1*x^3 + 0*x^2 - 3*x - 6",
  "",
    
  "roots(thePoly)",
  "[(3+1/3*(-81+54*2^(1/2))^(2/3)-3*i*3^(1/2)+1/3*i*3^(1/2)*(-81+54*2^(1/2))^(2/3))/(2*(-81+54*2^(1/2))^(1/3)),(3+1/3*(-81+54*2^(1/2))^(2/3)+3*i*3^(1/2)-1/3*i*3^(1/2)*(-81+54*2^(1/2))^(2/3))/(2*(-81+54*2^(1/2))^(1/3)),(-3-1/3*(-81+54*2^(1/2))^(2/3))/((-81+54*2^(1/2))^(1/3))]",
    
  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-14))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-14))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-14))))",
  "1",
    
  "roots(2*x^3 - 30*x^2 + 162*x - 350)",
  "[7,4-3*i,4+3*i]",

  "roots(1*x^3 - 4*x^2 - 6*x + 5)",
  "[5,-1/2-1/2*5^(1/2),-1/2+1/2*5^(1/2)]",

  "clearall",
  "",

  // DOES use cubic formula
  "thePoly = 3*x^3 + 6*x^2 + 4*x + 9",
  "",
    
  "roots(thePoly)",
  "[1/3*(-2-73^(1/3)),1/3*(-2+1/2*73^(1/3)-1/2*i*3^(1/2)*73^(1/3)),1/3*(-2+1/2*73^(1/3)+1/2*i*3^(1/2)*73^(1/3))]",
    
  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-14))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-14))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-14))))",
  "1",

  "clearall",
  "",

  // DOES use cubic formula
  "thePoly = 3*x^3 + 21*x^2 + 2*x + 3",
  "",
    
  "roots(thePoly)",
  "[1/3*(-7-47/((671/2+1/2*34949^(1/2))^(1/3))-(671/2+1/2*34949^(1/2))^(1/3)),1/3*(-7+47/(2*(671/2+1/2*34949^(1/2))^(1/3))+1/2*(671/2+1/2*34949^(1/2))^(1/3)-47*i*3^(1/2)/(2*(671/2+1/2*34949^(1/2))^(1/3))+1/2*i*3^(1/2)*(671/2+1/2*34949^(1/2))^(1/3)),1/3*(-7+47/(2*(671/2+1/2*34949^(1/2))^(1/3))+1/2*(671/2+1/2*34949^(1/2))^(1/3)+47*i*3^(1/2)/(2*(671/2+1/2*34949^(1/2))^(1/3))-1/2*i*3^(1/2)*(671/2+1/2*34949^(1/2))^(1/3))]",
    
  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(10^(-12))))",
  "1",

  "clearall",
  "",

  // DOES use cubic formula
  "thePoly = 3*x^3 - 6*x^2 + 4*x - 5",
  "",
    
  "roots(thePoly)",
  // also these ones could be sort of OK:
  //  "[2/3-1/3*(-1)^(1/3)*37^(1/3),2/3+1/6*(-1)^(1/3)*37^(1/3)-(-1)^(5/6)*37^(1/3)/(2*3^(1/2)),2/3+1/6*(-1)^(1/3)*37^(1/3)+(-1)^(5/6)*37^(1/3)/(2*3^(1/2)))",
  //  "[2/3-1/3*(-1)^(1/3)*37^(1/3),2/3-1/6*37^(1/3)+i*37^(1/3)/(2*3^(1/2)),2/3+1/3*37^(1/3))",
  //  "[1/3*(2-(-1)^(1/3)*37^(1/3)),1/3*(2-1/2*37^(1/3)+1/2*i*3^(1/2)*37^(1/3)),1/3*(2+37^(1/3)))",
  "[2/3-1/3*(-1)^(1/3)*37^(1/3),1/3*(2-1/2*37^(1/3)+1/2*i*3^(1/2)*37^(1/3)),1/3*(2+37^(1/3))]",
  
  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-14))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-14))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-14))))",
  "1",

  "roots(8*x^3 - 36*x^2 + 54*x - 27)",
  "3/2",

  "roots(3*x^3 - 5*x^2 - 1*x - 2)",
  "[2,-1/6-1/6*i*11^(1/2),-1/6+1/6*i*11^(1/2)]",


  "clearall",
  "",

  // DOES use cubic formula
  "thePoly = 3*x^3 - 6*x^2 + 4*x - i",
  "",
    
  "roots(thePoly)",
  "[1/3*(2-(8-9*i)^(1/3)),1/3*(2+1/2*(8-9*i)^(1/3)-1/2*i*3^(1/2)*(8-9*i)^(1/3)),1/3*(2+1/2*(8-9*i)^(1/3)+1/2*i*3^(1/2)*(8-9*i)^(1/3))]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-15))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-15))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-15))))",
  "1",


  "clearall",
  "",

  // DOES use cubic formula
  "thePoly = x^3+i",
  "",
    
  "roots(thePoly)",
  // also these could be OK:
  // "[1/2*(-1)^(1/6)-1/2*(-1)^(2/3)*3^(1/2),-(-1)^(1/6),1/2*(-1)^(1/6)*(1+i*3^(1/2)))",
  // "[-1/2*i+1/2*3^(1/2),-(-1)^(1/6),i)",
  // "[-(-1)^(1/6),-(-1)^(5/6),i)",
  "[-1/2*i-1/2*3^(1/2),-1/2*i+1/2*3^(1/2),i]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-15))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-15))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-15))))",
  "1",


  "clearall",
  "",

  // DOES use cubic formula
  "thePoly = x^3-i",
  "",
    
  "roots(thePoly)",
  // "[-i,1/2*(i-3^(1/2)),1/2*(i+3^(1/2)))",
  // "[-i,(-1)^(1/6),(-1)^(5/6))",
  "[-3/4*i-1/2*(-1)^(5/6)-1/4*3^(1/2),3/4*i-1/2*(-1)^(5/6)+1/4*3^(1/2),(-1)^(5/6)]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-15))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-15))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-15))))",
  "1",

  // some quartics

  "clearall",
  "",

  "thePoly = x^4 + 1",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  // "[-(-1)^(1/4),-(-1)^(3/4),(-1)^(1/4),(-1)^(3/4))",
  "[-1/2*2^(1/2)-1/2*i*2^(1/2),-1/2*2^(1/2)+1/2*i*2^(1/2),1/2*2^(1/2)-1/2*i*2^(1/2),1/2*2^(1/2)+1/2*i*2^(1/2)]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-15))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-15))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-15))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-15))))",
  "1",

  "clearall",
  "",

  "thePoly = 4*x^4 - 1*x^3 + 4*x^2 + 3*x + 5",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  "[1/16-1/2*(-125/96-447/(256*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2))-265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)-265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2)+1/2*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2),1/16-1/2*(-125/96+447/(256*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2))-265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)-265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2)-1/2*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2),1/16+1/2*(-125/96-447/(256*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2))-265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)-265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2)+1/2*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2),1/16+1/2*(-125/96+447/(256*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2))-265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)-265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2)-1/2*(-125/192+265/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))+1/3*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3)+265*i*3^(1/2)/(192*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))-1/3*i*3^(1/2)*(4417/1024+9/1024*i*461^(1/2)*1471^(1/2))^(1/3))^(1/2)]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-12))))",
  "1",

  "clearall",
  "",

  "thePoly = x^5 + 1",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  // "[-1,-(-1)^(2/5),-(-1)^(4/5),(-1)^(1/5),(-1)^(3/5))",
  "[-1,cos(1/5*pi)+i*sin(1/5*pi),cos(3/5*pi)+i*sin(3/5*pi),-cos(2/5*pi)-i*sin(2/5*pi),-cos(4/5*pi)-i*sin(4/5*pi)]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[5]),x,thePoly))) < float(2*10^(-12))))",
  "1",

  "clearall",
  "",

  "thePoly = a*x^5 + k",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  "theRoots[1] = simplify(theRoots[1])",
  "",

  "theRoots[1]",
  "-(-1)^(2/5)*((k/a)^(2/5))^(1/2)",

  "theRoots[2] = simplify(theRoots[2])",
  "",

  "theRoots[2]",
  "-(-1)^(4/5)*((k/a)^(2/5))^(1/2)",

  "theRoots[3] = circexp(theRoots[3])",
  "",

  "theRoots[3]",
  "exp(1/5*i*pi)*(k/a)^(1/5)",

  "theRoots[4] = circexp(theRoots[4])",
  "",

  "theRoots[4]",
  "exp(3/5*i*pi)*(k/a)^(1/5)",

  "theRoots[5] = simplify(theRoots[5])",
  "",

  "theRoots[5]",
  "-(k/a)^(1/5)",

  // unfortunately the comparison here doesn't work,
  // due to rounding errors float() produces expressions that still hve
  // a and k, albeit with really small
  // coefficients, and hence the "<" comparison finds variables with
  // undefined values and
  // fails.

  //"and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[5]),x,thePoly))) < float(2*10^(-12))))",
  //"1",

  "clearall",
  "",

  "thePoly = x^3 - 7*x^2 + 41*x - 87",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  "[3,2-5*i,2+5*i]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))))",
  "1",

  "clearall",
  "",

  "thePoly = 398683376+1720835*x+2320*x^2+x^3",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  // root 1 ~= -961.79, root 2 ~= -895.12, root 3 ~= -463.09
  // all three of them have a very small "error" imaginary part ~= 10^-13
  "theRoots",
  "[-2320/3-219895/(3*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3))-1/3*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3),-2320/3+219895/(6*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3))+1/6*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3)-219895*i*3^(1/2)/(6*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3))+1/6*i*3^(1/2)*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3),-2320/3+219895/(6*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3))+1/6*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3)+219895*i*3^(1/2)/(6*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3))-1/6*i*3^(1/2)*(-96123824+9*i*7^(1/2)*79^(1/2)*2297^(1/2)*13538519^(1/2))^(1/3)]",

  // the error here is particularly high because of the big coefficients
  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-7))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-7))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-7))))",
  "1",

  "clearall",
  "",

  "thePoly = x^4 - 1*x^3 + 4*x^2 + 3*x + 5",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  "[-1/2-1/2*i*3^(1/2),-1/2+1/2*i*3^(1/2),1-2*i,1+2*i]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-12))))",
  "1",

  "clearall",
  "",

  "thePoly = x^4 - 2*x^3 - 7*x^2 + 8*x + 12",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  "[-2,-1,2,3]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-12))))",
  "1",

  "clearall",
  "",

  "thePoly = x^4+8*x^2+3",
  "",
  
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  "[-(-4-13^(1/2))^(1/2),-(-4+13^(1/2))^(1/2),(-4-13^(1/2))^(1/2),(-4+13^(1/2))^(1/2)]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-12))))",
  "1",

  "clearall",
  "",

  "thePoly = -1*x^3-1*x^2+10*x - 8",
  "",
  
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  "[-4,1,2]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))))",
  "1",

  "clearall",
  "",

  "thePoly = -3-9*x+3*x^2+x^3",
  "",
  
  "theRoots = roots(thePoly)",
  "",

  // these solutions are slightly verbose but they are essentially good,
  // take into account that ((108+108*i*3^(1/2))^(1/3)) is
  // really just a compact version (in terms of number of nodes)
  // for 3*2^(2/3)*(1+i*sqrt(3))^(1/3)
  // (just take out 108 from the radical, and 108 is 2x2x3x3x3)
  // so essentially these are written a little redundantly but
  // they actually are in pretty good form.
  "theRoots",
  // "[-1-12/((108+108*i*3^(1/2))^(1/3))-1/3*(108+108*i*3^(1/2))^(1/3),-1+6/((108+108*i*3^(1/2))^(1/3))+1/6*(108+108*i*3^(1/2))^(1/3)-6*i*3^(1/2)/((108+108*i*3^(1/2))^(1/3))+1/6*i*3^(1/2)*(108+108*i*3^(1/2))^(1/3),-1+6/((108+108*i*3^(1/2))^(1/3))+1/6*(108+108*i*3^(1/2))^(1/3)+6*i*3^(1/2)/((108+108*i*3^(1/2))^(1/3))-1/6*i*3^(1/2)*(108+108*i*3^(1/2))^(1/3))",
  "[-1+cos(1/9*pi)-cos(8/9*pi)+i*sin(1/9*pi)-i*sin(8/9*pi)-2*3^(1/2)*cos(11/18*pi),-1+cos(1/9*pi)-cos(8/9*pi)+i*sin(1/9*pi)-i*sin(8/9*pi)+2*3^(1/2)*cos(11/18*pi),-1-2*cos(1/9*pi)+2*cos(8/9*pi)-2*i*sin(1/9*pi)+2*i*sin(8/9*pi)]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))))",
  "1",

  "clearall",
  "",

  "thePoly = x^4 + 8*x^3 + 12*x^2 + (2*30^(1/2) -16)*x + 4*30^(1/2)-28",
  "",
  
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  "[-2-1/2*(18-4*5^(1/2))^(1/2)+3^(1/2)/(2^(1/2)),-2-1/2*(18+4*5^(1/2))^(1/2)-1/2*2^(1/2)*3^(1/2),-2+1/2*(18-4*5^(1/2))^(1/2)+3^(1/2)/(2^(1/2)),-2+1/2*(18+4*5^(1/2))^(1/2)-1/2*2^(1/2)*3^(1/2)]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-12))))",
  "1",

  "clearall",
  "",

  "thePoly = x^3 + x - 2",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  "[1,-1/2-1/2*i*7^(1/2),-1/2+1/2*i*7^(1/2)]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))))",
  "1",


  "clearall",
  "",

  "thePoly = x^3 + x^2 - 7",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  // note how we can't use "last" here because the assignment returns nothing
  "and(abs(float(subst(theRoots[1],x,thePoly))) < float(2*10^(-12)),abs(float(subst(theRoots[2],x,thePoly))) < float(2*10^(-12)),abs(float(subst(theRoots[3],x,thePoly))) < float(2*10^(-12)))",
  "1",

  // some quartics

  "clearall",
  "",

  "thePoly = x^4 + 8*x^2 + 3",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  "[-(-4-13^(1/2))^(1/2),-(-4+13^(1/2))^(1/2),(-4-13^(1/2))^(1/2),(-4+13^(1/2))^(1/2)]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(8*10^(-15))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-15))), (abs(float(subst(float(last[3]),x,thePoly))) < float(8*10^(-15))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-15))))",
  "1",

  "clearall",
  "",

  "thePoly = x^4 - 10*x^3 + 21*x^2 + 40*x - 100",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  "[-2,2,5]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))))",
  "1",

  "clearall",
  "",

  "thePoly = 2*x^4 - 8*x^3 + 2*x^2 + 24*x - 14",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  "clearall",
  "",

  "thePoly = x^4 - 4*x^3 + x^2 + 12*x - 7",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  "[-1/2-1/2*5^(1/2),-1/2+1/2*5^(1/2),5/2-1/2*i*3^(1/2),5/2+1/2*i*3^(1/2)]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-12))))",
  "1",

  "clearall",
  "",

  "thePoly = 2*x^4 - 8*x^3 + 2*x^2 + 24*x - 14",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  "[-1/2-1/2*5^(1/2),-1/2+1/2*5^(1/2),5/2-1/2*i*3^(1/2),5/2+1/2*i*3^(1/2)]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-12))))",
  "1",

  "clearall",
  "",

  "thePoly = x^4 - 9*x^3 + 22*x^2 + 28*x - 120",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  "[-2,3,4-2*i,4+2*i]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-12))))",
  "1",

  
  //"thePoly = 4* x^4 - 9*x^3 + 22*x^2 + 28*x - 120",
  //"",
  //  
  // these are really ugly - sympy or wolfram alpha don't give clean symbolic solutions either
  //"theRoots = roots(thePoly)",
  //"",
  //
  //"and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-12))))",
  //"1",
  //
  //"thePoly = -20*x^4 + 5*x^3 + 17*x^2 - 29*x + 87",
  //"",
  //  
  // these are really ugly - sympy or wolfram alpha don't give clean symbolic solutions either
  //"theRoots = roots(thePoly)",
  //"",
  //
  //"and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-12))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-12))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-12))))",
  //"1",
  //

  "clearall",
  "",

  "thePoly = x^4 + 2*x^3 - 41*x^2 - 42*x + 360",
  "",
    
  "theRoots = roots(thePoly)",
  "",

  "theRoots",
  "[-6,-4,3,5]",

  "and((abs(float(subst(float(last[1]),x,thePoly))) < float(2*10^(-15))),(abs(float(subst(float(last[2]),x,thePoly))) < float(2*10^(-15))), (abs(float(subst(float(last[3]),x,thePoly))) < float(2*10^(-15))), (abs(float(subst(float(last[4]),x,thePoly))) < float(2*10^(-15))))",
  "1",



  // clean up
  "thePoly = quote(thePoly)",
  "",

  "theRoots = quote(theRoots)",
  "",

]);

// sourcefile:  tests/round.coffee 
const test_round = () => run_test([
  "round(a)",
  "round(a)",

  "round(a+b)",
  "round(a+b)",

  "round(5/2)",
  "3",

  "round(5/2 - 1/10)",
  "2",

  "round(4/2)",
  "2",

  "round(3/2)",
  "2",

  "round(2/2)",
  "1",

  "round(1/2)",
  "1",

  "round(0/2)",
  "0",

  "round(-1/2)",
  "0",

  "round(-2/2)",
  "-1",

  "round(-3/2)",
  "-1",

  "round(-4/2)",
  "-2",

  "round(-5/2)",
  "-2",

  "round(-5/2 + 1/10)",
  "-2",

  "round(5/2) - round(5/2.0)",
  "0.0",

  "round(4/2) - round(4/2.0)",
  "0.0",

  "round(3/2) - round(3/2.0)",
  "0.0",

  "round(2/2) - round(2/2.0)",
  "0.0",

  "round(1/2) - round(1/2.0)",
  "0.0",

  "round(0.0)",
  "0.0",

  "round(-1/2) - round(-1/2.0)",
  "0.0",

  "round(-2/2) - round(-2/2.0)",
  "0.0",

  "round(-3/2) - round(-3/2.0)",
  "0.0",

  "round(-4/2) - round(-4/2.0)",
  "0.0",

  "round(-5/2) - round(-5/2.0)",
  "0.0",
]);

// sourcefile:  tests/scan.coffee 
const test_scan = function() {
  if (algebrite.DEBUG) { console.log("test_scan ----------------------------"); }

  return run_test([

    "a^^b",
    "a^^ ? b\nStop: syntax error",

    "(a+b",
    "(a+b ? \nStop: ) expected",

    "quote(1/(x*log(a*x)))",  // test case A
    "1/(x*log(a*x))",

    "\"hello",
    "\"hello ? \nStop: runaway string",

    // make sure question mark can appear after newlines

    "a+\nb+\nc+",
    "a+\nb+\nc+ ? \nStop: syntax error",

    // this bug fixed in version 30 (used to give one result, 14)

    "(1+1)",
    "2",

    "2+2\n(3+3)",
    "4\n6",

    // plus and minus cannot cross newline

    "1\n-1",
    "1\n-1",

    "1\n+1",
    "1\n1",

    // implicit multiplication is parsed fine in
    // in the obvious cases where the first factor
    // is a "naked" number. Note that
    // (2)(a) doesn't work (yet) instead.
    // In many other cases such as a(b) it's in
    // principle impossible at parse time to turn that
    // into a multiplication because the first factor
    // could be a function, so that'd be a function
    // call.

    "2(a) * 2a",
    "4*a^2",

    "2a3b",
    "2*a3b",

    "2a 3b",
    "6*a*b",

    "2 a 3b",
    "6*a*b",

    "2 a 3 b",
    "6*a*b",

    "2(a)3(b)",
    "6*a*b",

    "2(a)b*3",
    "6*a*b",

    "(a)2 * 2a",
    "4*a^2",

    "3 (2 x^3 + x^2 - 23 x + 20)",
    "6*x^3+3*x^2-69*x+60",

  ]);
};


// sourcefile:  tests/sgn.coffee 
const test_sgn = () => run_test([

  "sgn(-3)",
  "-1",
  

  "sgn(0)",
  "0",
  
  "sgn(3)",
  "1",

]);

// sourcefile:  tests/shape.coffee 
const test_shape = () => run_test([

  // see transpose function source to see why
  // transposition has no effect on vectors
  // of dimension (rank) 1

  "shape([A,B,C])",
  "[3]",

  "shape(transpose([A,B,C]))",
  "[3]",

  "shape([[A],[B],[C]])",
  "[3,1]",

  "shape(transpose([[A],[B],[C]]))",
  "[1,3]",

  "shape([[A,B],[C,D],[E,F]])",
  "[3,2]",

  "shape(transpose([[A,B],[C,D],[E,F]]))",
  "[2,3]",

]);


// sourcefile:  tests/simplify.coffee 
const test_simplify = () => run_test([

  // the system normally tries to
  // arrange polynomials in a normal
  // form, without the need for simplify
  "x+a*x",
  "(1+a)*x",

  "simplify(A)",
  "A",

  "simplify(A+B)",
  "A+B",

  "simplify(A B)",
  "A*B",

  "simplify(A^B)",
  "A^B",

  "simplify(A/(A+B)+B/(A+B))",
  "1",

  "simplify((A-B)/(B-A))",
  "-1",

  "A=[[A11,A12],[A21,A22]]",
  "",

  "simplify(det(A) inv(A) - adj(A))",
  "0",

  "A=quote(A)",
  "",

  `simplify(-3 exp(-1/3 r + i phi) cos(theta) / sin(theta)\
+ 3 exp(-1/3 r + i phi) cos(theta) sin(theta)\
+ 3 exp(-1/3 r + i phi) cos(theta)^3 / sin(theta))`,
  "0",

  "simplify((A^2 C^2 + A^2 D^2 + B^2 C^2 + B^2 D^2)/(A^2+B^2)/(C^2+D^2))",
  "1",

  "simplify(d(arctan(y/x),y))",
  "x/(x^2+y^2)",

  "simplify(d(arctan(y/x),x))",
  "-y/(x^2+y^2)",

  "simplify(1-sin(x)^2)",
  "cos(x)^2",

  "simplify(1-cos(x)^2)",
  "sin(x)^2",

  "simplify(sin(x)^2-1)",
  "-cos(x)^2",

  "simplify(cos(x)^2-1)",
  "-sin(x)^2",

  // tries to get rid of sin and cos if there are more
  // compact clockforms or exponential forms
  "simplify(-cos(2/5*pi)*(k/a)^(1/5)-i*(k/a)^(1/5)*sin(2/5*pi))",
  "((k/a)^(2/5))^(1/2)/((-1)^(3/5))",

  //"simfac(n!/n)-(n-1)!",
  //"0",

  //"simfac(n/n!)-1/(n-1)!",
  //"0",

  //"simfac(rationalize((n+k+1)/(n+k+1)!))-1/(n+k)!",
  //"0",

  //"simfac(condense((n+1)*n!))-(n+1)!",
  //"0",

  //"simfac(1/((n+1)*n!))-1/(n+1)!",
  //"0",

  //"simfac((n+1)!/n!)-n-1",
  //"0",

  //"simfac(n!/(n+1)!)-1/(n+1)",
  //"0",

  //"simfac(binomial(n+1,k)/binomial(n,k))",
  //"(1+n)/(1-k+n)",

  //"simfac(binomial(n,k)/binomial(n+1,k))",
  //"(1-k+n)/(1+n)",

  //"F(nn,kk)=kk*binomial(nn,kk)",
  //"",

  //"simplify(simfac((F(n,k)+F(n,k-1))/F(n+1,k))-n/(n+1))",
  //"0",

  //"F=quote(F)",
  //"",

  "simplify(n!/n)-(n-1)!",
  "0",

  "simplify(n/n!)-1/(n-1)!",
  "0",

  "simplify(rationalize((n+k+1)/(n+k+1)!))-1/(n+k)!",
  "0",

  "simplify(condense((n+1)*n!))-(n+1)!",
  "0",

  "simplify(1/((n+1)*n!))-1/(n+1)!",
  "0",

  "simplify((n+1)!/n!)-n-1",
  "0",

  "simplify(n!/(n+1)!)-1/(n+1)",
  "0",

  "simplify(binomial(n+1,k)/binomial(n,k))",
  "(1+n)/(1-k+n)",

  "simplify(binomial(n,k)/binomial(n+1,k))",
  "(1-k+n)/(1+n)",

  "F(nn,kk)=kk*binomial(nn,kk)",
  "",

  "simplify((F(n,k)+F(n,k-1))/F(n+1,k))-n/(n+1)",
  "0",

  "F=quote(F)",
  "",

  "simplify((n+1)/(n+1)!)-1/n!",
  "0",

  "simplify(a*b+a*c)",
  "a*(b+c)",

  // Symbol's binding is evaluated, undoing simplify

  "x=simplify(a*b+a*c)",
  "",

  "x",
  "a*b+a*c",

  "x=quote(x)",
  "",

  "simplify((6 - 4*2^(1/2))^(1/2))",
  "2-2^(1/2)",

  "4-4*(-1)^(1/3)+4*(-1)^(2/3)",
  "0",

  "simplify(4-4*(-1)^(1/3)+4*(-1)^(2/3))",
  "0",

  // this requires some simplification to be
  // further done after the de-nesting
  "simplify(14^(1/2) - (16 - 4*7^(1/2))^(1/2))",
  "2^(1/2)",


  "simplify(-(2^(1/2)*(-1+7^(1/2)))+2^(1/2)*7^(1/2))",
  "2^(1/2)",


  "simplify((9 + 6*2^(1/2))^(1/2))",
  "3^(1/2)*(1+2^(1/2))",


  "simplify((7 + 13^(1/2))^(1/2))",
  "(1+13^(1/2))/(2^(1/2))",

  // two nested radicals at the same time
  "simplify((17 + 12*2^(1/2))^(1/2) + (17 - 12*2^(1/2))^(1/2))",
  "6",

  "simplify((2 + 3^(1/2))^(1/2))",
  "(1+3^(1/2))/(2^(1/2))",

  "simplify((1/2 + (39^(1/2)/16))^(1/2))",
  "(3^(1/2)+13^(1/2))/(4*2^(1/2))",

  // there would be a slightly better presentation for this,
  // where 108 is factored and some parts get out of the
  // radical but there is no way to de-nest this.
  "simplify((-108+108*(-1)^(1/2)*3^(1/2))^(1/3))",
  "6*(-1)^(2/9)",
  // also: "(-108+108*i*3^(1/2))^(1/3)" is a possible result

  // you can take that 4 out of the radical
  // but other than that there is no
  // "sum or radicals" form of this
  "simplify((-4+4*(-1)^(1/2)*3^(1/2))^(1/3))",
  "2*(-1)^(2/9)",
  // also: "(-4+4*i*3^(1/2))^(1/3)" is a possible result


  // scrambling the order of things a little
  // and checking whether the nested radical
  // still gets simplified.
  "simplify((((-3)^(1/2) + 1)/2)^(1/2))",
  //"(-1)^(1/6)",
  "1/2*(i+3^(1/2))",

  "simplify((1/2 + (-3)^(1/2)/2)^(1/2))",
  //"(-1)^(1/6)",
  "1/2*(i+3^(1/2))",

  // no possible de-nesting, should
  // leave unchanged.
  "simplify((2 +2^(1/2))^(1/2))",
  "(2+2^(1/2))^(1/2)",

  "simplify((1 +3^(1/2)/2)^(1/2) + (1 -3^(1/2)/2)^(1/2))",
  "3^(1/2)",

  "simplify((1 +3^(1/2)/2)^(1/2))",
  "1/2*(1+3^(1/2))",

  // not quite perfect as there is a radical at the
  // denominator, but the de-nesting happens.
  "simplify(((1 +39^(1/2)/8)/2)^(1/2))",
  "(3^(1/2)+13^(1/2))/(4*2^(1/2))",

  "simplify((5 +24^(1/2))^(1/2))",
  "2^(1/2)+3^(1/2)",

  "simplify((3 +4*i)^(1/2))",
  "2+i",

  "simplify((3 -4*i)^(1/2))",
  "2-i",

  "simplify((-2 +2*3^(1/2)*i)^(1/2))",
  //"2*(-1)^(1/3)",
  "1+i*3^(1/2)",

  "simplify((9 - 4*5^(1/2))^(1/2))",
  "-2+5^(1/2)",

  "simplify((61 - 24*5^(1/2))^(1/2))",
  "-4+3*5^(1/2)",

  "simplify((-352+936*(-1)^(1/2))^(1/3))",
  "2*(4+3*i)",


  "simplify((3 - 2*2^(1/2))^(1/2))",
  "-1+2^(1/2)",

  "simplify((27/2+27/2*(-1)^(1/2)*3^(1/2))^(1/3))",
  "3*(-1)^(1/9)",
  // also good: (27/2+27/2*i*3^(1/2))^(1/3)

  // this nested radical is also equal to
  // (-1)^(1/9)
  // but there is no "sum of radicals" form
  // for this.
  "simplify((1/2+1/2*(-1)^(1/2)*3^(1/2))^(1/3))",
  "(-1)^(1/9)",
  // also good: (1/2+1/2*i*3^(1/2))^(1/3)

  "simplify((2 + 5^(1/2))^(1/3))",
  "1/2*(1+5^(1/2))",

  "simplify((-3 + 10*3^(1/2)*i/9)^(1/3))",
  "1+2/3*i*3^(1/2)",

  "simplify((1-3*x^2+3*x^4-x^6)^(1/2))",
  "(-x^6+3*x^4-3*x^2+1)^(1/2)",

  "simplify(subst((-1)^(1/2),i,(-3 + 10*3^(1/2)*i/9)^(1/3)))",
  "1+2/3*i*3^(1/2)",

  "simplify(rationalize(-3 + 10*3^(1/2)*i/9)^(1/3))",
  "1+2/3*i*3^(1/2)",

  // note that sympy doesn't give a straight symbolic answer to
  // this one, the result to this is numeric instead, and with
  // a near-zero imaginary part.
  // In Sympy one can get to the answer obliquely with minpoly instead,
  // as minpoly((-1)^(1/6) - (-1)^(5/6)) -> x^2−3
  "simplify((-1)^(1/6) - (-1)^(5/6))",
  "3^(1/2)",

  "simplify((7208+2736*5^(1/2))^(1/3))",
  "17+3*5^(1/2)",

  "simplify((901+342*5^(1/2))^(1/3))",
  "1/2*(17+3*5^(1/2))",

  "-i*(-2*(-1)^(1/6)/(3^(1/2))+2*(-1)^(5/6)/(3^(1/2)))^(1/4)*(2*(-1)^(1/6)/(3^(1/2))-2*(-1)^(5/6)/(3^(1/2)))^(1/4)/(2^(1/2))",
  "1/2^(1/2)-i/(2^(1/2))",

  "simplify(-i*(-2*(-1)^(1/6)/(3^(1/2))+2*(-1)^(5/6)/(3^(1/2)))^(1/4)*(2*(-1)^(1/6)/(3^(1/2))-2*(-1)^(5/6)/(3^(1/2)))^(1/4)/(2^(1/2)))",
  // this one simplifies to any of these two, these are all the same:
  "(1-i)/(2^(1/2))",
  //    -(-1)^(3/4)
  //"-(-1)^(3/4)",

  "(-1)^(-5/a)",
  //"(-1)^(-5/a)",
  "1/(-1)^(5/a)",


  // -----------------------
  "simplify((-1)^(-5))",
  "-1",

  "simplify((-1)^(5))",
  "-1",

  "simplify((1)^(-5))",
  "1",

  "simplify((1)^(5))",
  "1",

  // seems here that the simplification
  // has more nodes than the result but
  // it's not the case: the 1/... inversion
  // is just done at the print level for
  // legibility
  "simplify((-1)^(-5/a))",
  //"(-1)^(-5/a)",
  "1/(-1)^(5/a)",

  "simplify((-1)^(5/a))",
  "(-1)^(5/a)",

  "simplify((1)^(-5/a))",
  "1",

  "simplify((1)^(5/a))",
  "1",

  // -----------------------
  "simplify((-1)^(-6))",
  "1",

  "simplify((-1)^(6))",
  "1",

  "simplify((1)^(-6))",
  "1",

  "simplify((1)^(6))",
  "1",

  // clockform can be much more compact than the
  // rectangular format so we return that one,
  // the user can always do a rect or a circexp on
  // the result if she desires other forms
  "simplify(i*2^(1/4)*sin(1/8*pi)+2^(1/4)*cos(1/8*pi))",
  "(-1)^(1/8)*2^(1/4)",
  // the circexp of the above is
  // 2^(1/4) exp(1/8 i pi), which is less compact


  // seems here that the simplification
  // has more nodes than the result but
  // it's not the case: the 1/... inversion
  // is just done at the print level for
  "simplify((-1)^(-6/a))",
  //"(-1)^(-6/a)",
  "1/(-1)^(6/a)",

  "simplify((-1)^(6/a))",
  "(-1)^(6/a)",

  "simplify((1)^(-6/a))",
  "1",

  "simplify((1)^(6/a))",
  "1",

  "simplify(transpose(A)*transpose(x))",
  "transpose(A*x)",

  "simplify(inner(transpose(A),transpose(x)))",
  "transpose(inner(x,A))",

  // ---------------------------------------------
  // checking that simplify doesn't make incorrect
  // simplifications

  "simplify(sqrt(-1/2 -1/2 * x))",
  "(-1/2*x-1/2)^(1/2)",

  "simplify(sqrt(x*y))",
  "(x*y)^(1/2)",

  "simplify(sqrt(1/x))",
  "(1/x)^(1/2)",

  "simplify(sqrt(x^y))",
  "(x^y)^(1/2)",

  "simplify(sqrt(x)^2)",
  "x",

  "simplify(sqrt(x^2))",
  "abs(x)",

  // simplifying rational expressions

  "simplify((x+1)*(x+1)/(x+1))",
  "x+1",

  "simplify(x*(x+1)/x)",
  "x+1",

  "simplify((x^2+7x+6)/(x^2-5x-6))",
  "(x+6)/(x-6)",

  "simplify(x*(x+1)/(x+1)+1)",
  "x+1",

  "simplify(x*(x+1)/(x+1))",
  "x",

  "simplify((x^2+3x)/(x^2+5x))",
  "(x+3)/(x+5)",

  "simplify((6x+20)/(2x+10))",
  "(3*x+10)/(x+5)",

  "simplify((x^3-3x^2)/(4x^2-5x))",
  "x*(x-3)/(4*x-5)",

  "simplify((x^2-9)/(x^2+5x+6))",
  "(x-3)/(x+2)",

  "simplify((x^2-3x+2)/(x^2-1))",
  "(x-2)/(x+1)",

  "simplify((x^2-2x-15)/(x^2+x-6))",
  "(x-5)/(x-2)",

  "simplify(10x^3/(2x^2-18x))",
  "5*x^2/(x-9)",

  "simplify(6x^2/(12x^4-9x^3))",
  "1/(x*(2*x-3/2))",

  "simplify(((3-x)*(x-1))/((x-3)*(x+1)))",
  "(-x+1)/(x+1)",

  "simplify(((x-2)*(x-5))/((2-x)*(x+5)))",
  "(-x+5)/(x+5)",

  "simplify((15-10x)/(8x^3-12x^2))",
  "-5/(4*x^2)",

  "simplify(3x/(15x^2-6x))",
  "1/(5*x-2)",

  "simplify((3x^3-15x^2+12x)/(3x-3))",
  "x*(x-4)",

  "simplify((6x^2-12x)/(6x-3x^2))",
  "-2",

  "simplify((2x^2+13x+20)/(2x^2+17x+30))",
  "(x+4)/(x+6)",

  "simplify((x^4+8x^2+7)/(3x^5-3x))",
  "(x^2+7)/(3*x*(x^2-1))",

  "simplify((x^2+8x*k+16*k^2)/(x^2-16k^2))",
  "(x+4*k)/(x-4*k)",

  "simplify((x^2-2x-8)/(x^2-9x+20))",
  "(x+2)/(x-5)",

  "simplify((x^2-25)/(5x-x^2))",
  "-1-5/x",

  "simplify((x^7+2x^6+x^5)/(x^3*(x+1)^8))",
  "x^2/((x+1)^6)",

  "simplify((x^2+2*x+1)/((x+1)^8))",
  "1/((x+1)^6)",

  "simplify(((x^2-5x-14)/(x^2-3x+2))*((x^2-4)/(x^2-14x+49)))",
  "(x+2)^2/((x-7)*(x-1))",

  "simplify(((x^2-9)/(x^2+5x+6))/((3-x)/(x+2)))",
  "-1",

  "simplify((x^2+5x+4)/((x^2-1)/(x+5)))",
  "(x^2+9*x+20)/(x-1)",

  "simplify((x^2-6x-7)/(x^2-10x+21))",
  "(x+1)/(x-3)",

  "simplify((x^2+6x+9)/(x^2-9))",
  "(x+3)/(x-3)",

  "simplify((2x^2-x-28)/(20-x-x^2))",
  "(-2*x-7)/(x+5)",

  "simplify(((x^2+5x-24)/(x^2+6x+8))*((x^2+4x+4)/(x^2-3x)))",
  "(10+x+16/x)/(x+4)",

  "simplify(((x^2-49)/(2x^2-3x-5))/((x^2-x-42)/(x^2+7x+6)))",
  "(x+7)/(2*x-5)",

  "simplify(((x^2-2x-8)/(2x^2-8x-24))/((x^2-9x+20)/(x^2-11x+30)))",
  "1/2",

  "simplify((3/(x+1))/((x+4)/(x^2+11x+10)))",
  "3*(x+10)/(x+4)",

  "simplify((x^3+10x^2)/(x^2+6x-40))",
  "x^2/(x-4)",

  "simplify((x^2+18x+72)/(2x^2+11x-6))",
  "(x+12)/(2*x-1)",

  "simplify((x^2-3x-28)/(49-x^2))",
  "(-x-4)/(x+7)",

  "simplify((6x^2+13x+5)/(3x^2+26x+35))",
  "(2*x+1)/(x+7)",

  "simplify((-x^2+10x-9)/(-x^2+6x+27))",
  "(x-1)/(x+3)",

  "simplify((x-6)*(x^3+x^2-20x)/(x^4-12x^3+36x^2))",
  "(1+x-20/x)/(x-6)",

  // somewhat strange simplification but it's correct
  "simplify(((4x^3-x^2-3x)/(x^2-10x+25))*((10+3x-x^2)/(x^4-x^3)))",
  "(-4-6/(x^2)-11/x)/(x-5)",

  "simplify(((x^2+5x-24)/(x^2-5x+4))/((x^2+x-12)/(x-1)))",
  "(x+8)/(x^2-16)",

  "simplify(((6x^2+x^3-x^4)/(x^2-4))/((3x^3-9x^2)/(x^2+6x-16)))",
  "1/3*(-x-8)",

  "simplify(((3x^2+23x+14)/(x^2+4x+3))/((6x^2+13x+6)/(x^2+2x+1)))",
  "(x^2+8*x+7)/((x+3)*(2*x+3))",

  "simplify((5x^2-18x-8)/((x-4)/(x+6)))",
  "5*x^2+32*x+12",

  "simplify((2/(x+4))/((6x^3+17x^2)/(x^2+3x-4)))",
  "(x-1)/(x^2*(3*x+17/2))",

  // sum of rational expressions
  "simplify(((x^2+1)/(2x^2-4x+2))+((x)/((x-1)^2))+((-x-1)/(x^2-2x+1)))",
  "(x+1)/(2*(x-1))",

  "simplify((4/(6x^2))-(1/(3x^5))+(5/(2x^3)))",
  "(2/3*x^3+5/2*x^2-1/3)/(x^5)",

  "simplify((x/(x^2-2x+1))-(2/(x-1))+(3/(x+2)))",
  "(2*x^2-6*x+7)/(x^3-3*x+2)",

  "simplify((2x/(x^2-9))-(1/(x+3))-(2/(x-3)))",
  "-1/(x-3)",

  "simplify((4/(x+2)-(1/x)+1)*(x+2)*x)",
  "x^2+5*x-2",

  "simplify(((3/(x-4))+x/(2x+7))*(x-4)*(2x+7))",
  "x^2+2*x+21",

  "simplify((x/(x^2+12x+36))-((x-8)/(x+6)))",
  "(-x^2+3*x+48)/((x+6)^2)",

  "simplify(((x^2+14x+40)/(x^2+2x-8))*((x^2+5x-14)/(x^2+7x-30)))",
  "(x+7)/(x-3)",

  // could be cleaner but it's correct
  "simplify(1/(x^2-13x+42)+(x+1)/(x-6)-x^2/(x-7))",
  "1/(x-7)+x/(x-6)-x^2/(x-7)",

  "simplify((x+10)/((3x+8)^3)+x/((3x+8)^2))",
  "(3*x^2+9*x+10)/((3*x+8)^3)",

  "simplify(2/(3x^2)-1/(4x^7)+7/(6x^3))",
  "(2/3*x^5+7/6*x^4-1/4)/(x^7)",

  "simplify(2x/(x+9)-(x-1)/(x))",
  "-1+1/x+2*x/(x+9)",

  "simplify((x+1)/(x-1)+6/(x-7))",
  "(x^2-13)/((x-7)*(x-1))",

  "simplify(9/(x^2-4)-7x/(x^2-4x+4))",
  "(-7*x^2-5*x-18)/((x-2)^2*(x+2))",

  "simplify((2x+1)/(4x^2-3x-7)-(x+3)/(x+1)+x/(4x-7))",
  "x/(4*x-7)-x/(x+1)+2*(-5*x+11)/((4*x-7)*(x+1))",

  "simplify(simplify((2x+1)/(4x^2-3x-7)-(x+3)/(x+1)+x/(4x-7))*(x+1)*(4x-7))",
  "-3*x^2-2*x+22",

  // could be cleaner but it's correct
  "simplify(3/(6x-x^2)-x/(x^2-5x-6))",
  "(-3-x-3/x)/((x-6)*(x+1))",

  // could be cleaner but it's correct
  "simplify(3/(x^2)+(x+9)/(x^2+5x)-2/(x^2+10x+25))",
  "(15+x+75/(x^2)+75/x)/((x+5)^2)",

  "simplify(1/(x+1)-2/((x+1)^2)-3/((x+1)^3))",
  "(x^2-4)/((x+1)^3)",

]);

// sourcefile:  tests/sin.coffee 
const test_sin = () => run_test([

  "sin(x)",
  "sin(x)",

  "sin(-x)",
  "-sin(x)",

  "sin(b-a)",
  "-sin(a-b)",

  // check against the floating point math library

  "f(a,x)=1+sin(float(a/360*2*pi))-float(x)+sin(a/360*2*pi)-x",
  "",

  "f(0,0)",      // 0
  "1.0",

  "f(90,1)",      // 90
  "1.0",

  "f(180,0)",      // 180
  "1.0",

  "f(270,-1)",      // 270
  "1.0",

  "f(360,0)",      // 360
  "1.0",

  "f(-90,-1)",      // -90
  "1.0",

  "f(-180,0)",      // -180
  "1.0",

  "f(-270,1)",      // -270
  "1.0",

  "f(-360,0)",      // -360
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(45,sqrt(2)/2)",    // 45
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(135,sqrt(2)/2)",    // 135
  "1.000000...",

  "f(225,-sqrt(2)/2)",    // 225
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(315,-sqrt(2)/2)",    // 315
  "1.000000...",

  "f(-45,-sqrt(2)/2)",    // -45
  "1.0",

  "f(-135,-sqrt(2)/2)",    // -135
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-225,sqrt(2)/2)",    // -225
  "1.000000...",

  "f(-315,sqrt(2)/2)",    // -315
  "1.0",

  "f(30,1/2)",      // 30
  "1.0",

  "f(150,1/2)",      // 150
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(210,-1/2)",      // 210
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(330,-1/2)",      // 330
  "1.000000...",

  "f(-30,-1/2)",      // -30
  "1.0",

  "f(-150,-1/2)",      // -150
  "1.0",

  "f(-210,1/2)",      // -210
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-330,1/2)",      // -330
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(60,sqrt(3)/2)",    // 60
  "1.000000...",

  "f(120,sqrt(3)/2)",    // 120
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(240,-sqrt(3)/2)",    // 240
  "1.000000...",

  "f(300,-sqrt(3)/2)",    // 300
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-60,-sqrt(3)/2)",    // -60
  "1.000000...",

  "f(-120,-sqrt(3)/2)",    // -120
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-240,sqrt(3)/2)",    // -240
  "1.000000...",

  "f(-300,sqrt(3)/2)",    // -300
  "1.0",

  "f=quote(f)",
  "",

  "sin(arcsin(x))",
  "x",

  // check the default case

  "sin(1/12*pi)",
  "sin(1/12*pi)",

  "sin(arctan(4/3))",
  "4/5",

  "sin(-arctan(4/3))",
  "-4/5",

  // phase

  "sin(x-8/2*pi)",
  "sin(x)",

  "sin(x-7/2*pi)",
  "cos(x)",

  "sin(x-6/2*pi)",
  "-sin(x)",

  "sin(x-5/2*pi)",
  "-cos(x)",

  "sin(x-4/2*pi)",
  "sin(x)",

  "sin(x-3/2*pi)",
  "cos(x)",

  "sin(x-2/2*pi)",
  "-sin(x)",

  "sin(x-1/2*pi)",
  "-cos(x)",

  "sin(x+0/2*pi)",
  "sin(x)",

  "sin(x+1/2*pi)",
  "cos(x)",

  "sin(x+2/2*pi)",
  "-sin(x)",

  "sin(x+3/2*pi)",
  "-cos(x)",

  "sin(x+4/2*pi)",
  "sin(x)",

  "sin(x+5/2*pi)",
  "cos(x)",

  "sin(x+6/2*pi)",
  "-sin(x)",

  "sin(x+7/2*pi)",
  "-cos(x)",

  "sin(x+8/2*pi)",
  "sin(x)",
]);

// sourcefile:  tests/sinh.coffee 
const test_sinh = () => run_test([
  "sinh(x)",
  "sinh(x)",

  "sinh(0)",
  "0",

  "sinh(arcsinh(x))",
  "x",
]);

// sourcefile:  tests/strings.coffee 
const test_strings = () => run_test([

  "\"hey\" + \"you\"",
  "\"hey\"+\"you\"",

  "\"hey\" + \"hey\"",
  "2*\"hey\"",

  "\"hey\" / \"hey\"",
  "1",

  "\"hey\" - \"hey\"",
  "0",

  "\"hey\" * \"hey\"",
  "\"hey\"^2",

  "\"aaaaaaaaaa\nbbbbbbbbbb\"",
  "\"aaaaaaaaaa\nbbbbbbbbbb\"",

]);

// sourcefile:  tests/subst.coffee 
const test_subst = () => run_test([

  "subst((-1)^(1/2),i,-3 + 10*3^(1/2)*i/9)",
  "-3+10/9*i*3^(1/2)",

]);

// sourcefile:  tests/sum.coffee 
const test_sum = () => run_test([

  // no evaluation in case there are
  // symbolic variables
  "sum(body + k,k,b,c)",
  "sum(body+k,k,b,c)",

  "f=sum(a^k,k,0,9)",
  "",

  "eval(f,a,-1/2)",
  "341/512",

  // Leibniz formula for π as a series
  "sum(float((-1)^k * (1/(2*k + 1))),k,0,100)*4",
  "3.151493...",

  // -------------------

  "f(a,b)=sum(k,k,a,b)",
  "",

  "f(0,1)",
  "1",

  // --- cleanup

  "f = quote(f)",
  "",

]);

// sourcefile:  tests/tan.coffee 
const test_tan = () => run_test([
  "tan(x)",
  "tan(x)",

  "tan(-x)",
  "-tan(x)",

  "tan(b-a)",
  "-tan(a-b)",

  // check against the floating point math library

  "f(a,x)=1+tan(float(a/360*2*pi))-float(x)+tan(a/360*2*pi)-x",
  "",

  "f(0,0)",      // 0
  "1.0",

  "f(180,0)",      // 180
  "1.0",

  "f(360,0)",      // 360
  "1.0",

  "f(-180,0)",      // -180
  "1.0",

  "f(-360,0)",      // -360
  "1.0",

  "f(45,1)",      // 45
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(135,-1)",      // 135
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(225,1)",      // 225
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(315,-1)",      // 315
  "1.000000...",

  "f(-45,-1)",      // -45
  "1.0",

  "f(-135,1)",      // -135
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-225,-1)",      // -225
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-315,1)",      // -315
  "1.000000...",

  "f(30,sqrt(3)/3)",    // 30
  "1.0",

  "f(150,-sqrt(3)/3)",    // 150
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(210,sqrt(3)/3)",    // 210
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(330,-sqrt(3)/3)",    // 330
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-30,-sqrt(3)/3)",    // -30
  "1.000000...",

  "f(-150,sqrt(3)/3)",    // -150
  "1.0",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-210,-sqrt(3)/3)",    // -210
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-330,sqrt(3)/3)",    // -330
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(60,sqrt(3))",    // 60
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(120,-sqrt(3))",    // 120
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(240,sqrt(3))",    // 240
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(300,-sqrt(3))",    // 300
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-60,-sqrt(3))",    // -60
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-120,sqrt(3))",    // -120
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-240,-sqrt(3))",    // -240
  "1.000000...",

  // this should really be 1.0 , however
  // we have errors doing the calculations so
  // we don't get to that exact 1.0 float
  "f(-300,sqrt(3))",    // -300
  "1.000000...",

  "f=quote(f)",
  "",

  "tan(arctan(x))",
  "x",

  // check the default case

  "tan(1/12*pi)",
  "tan(1/12*pi)",
]);

// sourcefile:  tests/tanh.coffee 
const test_tanh = () => run_test([
  "tanh(x)",
  "tanh(x)",

  "tanh(0)",
  "0",

  "tanh(arctanh(x))",
  "x",
]);

// sourcefile:  tests/taylor.coffee 
const test_taylor = () => run_test([
  "taylor(1/(5+4*cos(x)),x,6,0)-(1/9+2/81*x^2+5/1458*x^4+49/131220*x^6)",
  "0",

  "taylor(1/(5+4*cos(x)),x,6)-(1/9+2/81*x^2+5/1458*x^4+49/131220*x^6)",
  "0",
]);

// sourcefile:  tests/tensor.coffee 
const test_tensor = () => run_test([

  "[[a]]",
  "[[a]]",

  // ---------------------------------
  // basic parsing, promotion and printout
  // ---------------------------------

  "[[1,0],[0,0]]",
  "[[1,0],[0,0]]",

  // ---------------------------------
  // basic rank and shape checks
  // ---------------------------------

  // in general, the trick to count
  // rank (i.e. dimensions) is to count the
  // number of nested brackets
  // and the trick to determine the shape
  // is to count the commas proceeding
  // from the outermost to the
  // inner-most brackets.

  "rank(a)",
  "0",

  "rank([a,b,c])",
  "1",

  "shape([a,b,c])",
  "[3]",

  "rank([[a,b,c]])",
  "2",

  // traditional matrix 1x3
  // i.e. one row three columns
  // i.e. row vector
  "shape([[a,b,c]])",
  "[1,3]",

  "rank([[a],[b],[c]])",
  "2",

  // traditional matrix 3x1
  // i.e. one columns three rows
  // i.e. column vector
  "shape([[a],[b],[c]])",
  "[3,1]",

  "rank([[[a,b,c]]])",
  "3",

  "shape([[[a,b,c]]])",
  "[1,1,3]",

  "rank([[[a],[b],[c]]])",
  "3",

  "shape([[[a],[b],[c]]])",
  "[1,3,1]",

  "rank([[[a]],[[b]],[[c]]])",
  "3",

  "shape([[[a]],[[b]],[[c]]])",
  "[3,1,1]",


  // ---------------------------------
  // check tensor promotion
  // ---------------------------------

  "a=[1,2,3]",
  "",

  "rank(a)",
  "1",

  "b=[4,5,6]",
  "",

  "c=[7,8,9]",
  "",

  "rank([a,b,c])",
  "2",

  "[a,b,c]",
  "[[1,2,3],[4,5,6],[7,8,9]]",


  // -------------------------------------------------------
  // parsing, assigments and invokations calisthenics
  // mixes [] used for a) tensor building and b) tensor indexing
  // and mixes () used for a) function declarations
  // b) function invokation and c) precedence
  // Nests functions and matrices inside one another.
  // -------------------------------------------------------

  // --------------------

  "f(x) = x + 1",
  "",

  "a=[1,f,3]",
  "",

  "a[2]",
  "function (x) -> x+1",

  "a[f(1)]",
  "function (x) -> x+1",

  "a[a[f(1)](1)]",
  "function (x) -> x+1",

  "a[2](9)",
  "10",

  "a[f(1)](f(8))",
  "10",

  "a[a[f(1)](1)](a[f(1)](8))",
  "10",

  // --------------------

  "g(x) = x + 1",
  "",

  "f() = [1,g,3]",
  "",

  "a=[1,f,3]",
  "",

  "a[2]()[2](7)",
  "8",

  // --------------------

  "g(x) = x + 1",
  "",

  "f() = [[1,g,3],[0,0,0],[0,0,0]]",
  "",

  "a=[1,f,3]",
  "",

  "a[2]()[1][2](8)",
  "9",

  "(a[2]())[1][2](8)",
  "9",

  "((a[2]())[1])[2](8)",
  "9",

  "(((a[2]())[1])[2])(8)",
  "9",

  "(((a[a[1]+a[1]]())[a[1]])[a[1]+a[1]])(8)",
  "9",

  "f()[1][2](8)",
  "9",

  "f()[a[1]][a[1]+a[1]](8)",
  "9",

  // --------------------

  "g(x) = transpose(x)",
  "",

  "f() = [[1,g,3],[0,0,0],[0,0,0]]",
  "",

  "a=[1,f,3]",
  "",

  "a[2]()[1][2]([[1,2,3,4]])",
  "[[1],[2],[3],[4]]",

  // --------------------

  "unit(x)",
  "unit(x)",

  "unit(3)",
  "[[1,0,0],[0,1,0],[0,0,1]]",

  "unit(1)",
  "[[1]]",

  // cleanup

  "a=quote(a)",
  "",

  "b=quote(b)",
  "",

  "c=quote(c)",
  "",

  "f=quote(f)",
  "",

  "g=quote(g)",
  "",
]);

// sourcefile:  tests/test.coffee 
const test_test = () => run_test([
  "a<a+1",
  "1",

  "a-1<a",
  "1",

  "0==-0",
  "1",

  "0!=-0",
  "0",

  "1==1",
  "1",

  "1==2",
  "0",

  "1!=1",
  "0",

  "1!=2",
  "1",

  "1>=1",
  "1",

  "1>=2",
  "0",

  "2>=1",
  "1",

  "1>1",
  "0",

  "1>2",
  "0",

  "2>1",
  "1",

  "1<=1",
  "1",

  "1<=2",
  "1",

  "2<=1",
  "0",

  "1<1",
  "0",

  "1<2",
  "1",

  "2<1",
  "0",

  "-1<-2",
  "0",

  "-2<-1",
  "1",

  "test(0,A,B)",
  "B",

  "test(1,A,B)",
  "A",

  "test(0,A,0,B)",
  "0",

  "test(0,A,0,B,C)",
  "C",

  "test(x<3,-x-4,3<=x,x*x+7,120/x+5)",
  "test(testlt(x,3),-x-4,testle(3,x),x^2+7,120/x+5)",

  "x = -1",
  "",

  "test(x<1,-x-4,3<=x,x*x+7,120/x+5)",
  "-3",

  "x = 3",
  "",

  "test(x<1,-x-4,3<=x,x*x+7,120/x+5)",
  "16",

  "x = 2",
  "",

  "test(x<1,-x-4,3<=x,x*x+7,120/x+5)",
  "65",

  "x=quote(x)",
  "",

  // not ---------------------------------

  "not(a=b)",
  "not(a=b)",

  "a",
  "a",

  "not(a)",
  "not(a)",

  "not(not(a))",
  "not(not(a))",

  "not(a=a)",
  "0",

  "not(not(a=a))",
  "1",

  "not(a==a)",
  "0",

  "not(a===a)",
  "not(a=== ? a)\nStop: syntax error",

  "not(a+1=a)",
  "1",

  "not(a+1==a)",
  "1",

  "not(a+1===a)",
  "not(a+1=== ? a)\nStop: syntax error",

  "not(1)",
  "0",

  "not(0)",
  "1",

  "not(and(1,0))",
  "1",

  "not(and(1,1))",
  "0",

  // if passed a value, check if non-zero
  "not(pi)",
  "0",

  "not(2)",
  "0",

  "not(-2)",
  "0",

  "not(sqrt(2))",
  "0",

  "not(sqrt(-1))",
  "0",

  "not(sqrt(pi/4)-sqrt(i))",
  "0",

  "not(1+i)",
  "0",

  "not([0,0])",
  "1",

  "not([1,2])",
  "0",

  "not([1+i,2])",
  "0",

  "not([a,2])",
  "not([a,2])",

  "not(1-i)",
  "0",


  // and ---------------------------------

  // and with the first predicate being true 

  "and(1,1)",
  "1",

  "and(1,a=a,b=b)",
  "1",

  "and(1,0)",
  "0",

  "and(1,2)",
  "1",

  "and(1,-2)",
  "1",

  "and(1,sqrt(2))",
  "1",

  "and(1,sqrt(-1))",
  "1",

  "and(1,sqrt(pi/4)-sqrt(i))",
  "1",

  "and(1,1+i)",
  "1",


  "and(1,a)",
  "and(1,a)",


  "and(1,[0,0])",
  "0",

  "and(1,[1,2])",
  "1",

  "and(1,[1+i,2])",
  "1",

  "and(1,[a,2])",
  "and(1,[a,2])",

  "and(1,1-i)",
  "1",

  // and with the first predicate being false

  "and(0,1)",
  "0",

  "and(0,a=a,b=b)",
  "0",

  "and(0,0)",
  "0",

  "and(0,2)",
  "0",

  "and(0,-2)",
  "0",

  "and(0,sqrt(2))",
  "0",

  "and(0,sqrt(-1))",
  "0",

  "and(0,sqrt(pi/4)-sqrt(i))",
  "0",

  "and(0,1+i)",
  "0",

  "and(0,a)",
  "0",

  "and(0,[0,0])",
  "0",

  "and(0,[1,2])",
  "0",

  "and(0,[1+i,2])",
  "0",

  "and(0,[a,2])",
  "0",

  "and(0,1-i)",
  "0",

  // and with last predicate being true

  "and(1,1)",
  "1",

  "and(a=a,b=b,1)",
  "1",

  "and(0,1)",
  "0",

  "and(2,1)",
  "1",

  "and(-2,1)",
  "1",

  "and(sqrt(2),1)",
  "1",

  "and(sqrt(-1),1)",
  "1",

  "and(sqrt(pi/4)-sqrt(i),1)",
  "1",

  "and(1+i,1)",
  "1",


  "and(a,1)",
  "and(a,1)",


  "and([0,0],1)",
  "0",

  "and([1,2],1)",
  "1",

  "and([1+i,2],1)",
  "1",

  "and([a,2],1)",
  "and([a,2],1)",

  "and(1-i,1)",
  "1",

  // and with last predicate being false

  "and(1,0)",
  "0",

  "and(a=a,b=b,0)",
  "0",

  "and(0,0)",
  "0",

  "and(2,0)",
  "0",

  "and(-2,0)",
  "0",

  "and(sqrt(2),0)",
  "0",

  "and(sqrt(-1),0)",
  "0",

  "and(sqrt(pi/4)-sqrt(i),0)",
  "0",

  "and(1+i,0)",
  "0",

  "and(a,0)",
  "0",


  "and([0,0],0)",
  "0",

  "and([1,2],0)",
  "0",

  "and([1+i,2],0)",
  "0",

  "and([a,2],0)",
  "0",

  "and(1-i,0)",
  "0",

  // or ----------------------------------------------

  // or with the first predicate being true 

  "or(1,1)",
  "1",

  "or(1,a=a,b=b)",
  "1",

  "or(1,0)",
  "1",

  "or(1,2)",
  "1",

  "or(1,-2)",
  "1",

  "or(1,sqrt(2))",
  "1",

  "or(1,sqrt(-1))",
  "1",

  "or(1,sqrt(pi/4)-sqrt(i))",
  "1",

  "or(1,1+i)",
  "1",

  "or(1,a)",
  "1",

  "or(1,[0,0])",
  "1",

  "or(1,[1,2])",
  "1",

  "or(1,[1+i,2])",
  "1",

  "or(1,[a,2])",
  "1",

  "or(1,1-i)",
  "1",

  // or with the first predicate being false

  "or(0,1)",
  "1",

  "or(0,a=a,b=b)",
  "1",

  "or(0,0)",
  "0",

  "or(0,2)",
  "1",

  "or(0,-2)",
  "1",

  "or(0,sqrt(2))",
  "1",

  "or(0,sqrt(-1))",
  "1",

  "or(0,sqrt(pi/4)-sqrt(i))",
  "1",

  "or(0,1+i)",
  "1",

  "or(0,a)",
  "or(0,a)",

  "or(0,[0,0])",
  "0",

  "or(0,[1,2])",
  "1",

  "or(0,[1+i,2])",
  "1",

  "or(0,[a,2])",
  "or(0,[a,2])",

  "or(0,1-i)",
  "1",

  // or with last predicate being true

  "or(1,1)",
  "1",

  "or(a=a,b=b,1)",
  "1",

  "or(0,1)",
  "1",

  "or(2,1)",
  "1",

  "or(-2,1)",
  "1",

  "or(sqrt(2),1)",
  "1",

  "or(sqrt(-1),1)",
  "1",

  "or(sqrt(pi/4)-sqrt(i),1)",
  "1",

  "or(1+i,1)",
  "1",

  "or(a,1)",
  "1",

  "or([0,0],1)",
  "1",

  "or([1,2],1)",
  "1",

  "or([1+i,2],1)",
  "1",

  "or([a,2],1)",
  "1",

  "or(1-i,1)",
  "1",

  // or with last predicate being false

  "or(1,0)",
  "1",

  "or(a=a,b=b,0)",
  "1",

  "or(0,0)",
  "0",

  "or(2,0)",
  "1",

  "or(-2,0)",
  "1",

  "or(sqrt(2),0)",
  "1",

  "or(sqrt(-1),0)",
  "1",

  "or(sqrt(pi/4)-sqrt(i),0)",
  "1",

  "or(1+i,0)",
  "1",

  "or(a,0)",
  "or(a,0)",


  "or([0,0],0)",
  "0",

  "or([1,2],0)",
  "1",

  "or([1+i,2],0)",
  "1",

  "or([a,2],0)",
  "or([a,2],0)",

  "or(1-i,0)",
  "1",

  // ------------------------------------------------

  // zero and all zero vectors are considered equal.
  // The reason being that the test checks whether
  // [0,0]-0 is zero. Since anything minus zero is
  // equal to itself, we effectively check if [0,0]
  // is zero, which it is.
  "[0,0]==0",
  "1",

  "[1,2]==[1,2]",
  "1",

  "[1,2]==[a,2]",
  "testeq([1,2],[a,2])",

  "[1,2]==[3,4]",
  "0",

  "[1,2]==[cos(x)^2 + sin(x)^2,2]",
  "1",

  "1<sqrt(3)",
  "1",

  "cos(x)^2 + sin(x)^2 == 1",
  "1",

  "cos(x)^2 + sin(x)^2 >= 1",
  "1",

  "cos(x)^2 + sin(x)^2 <= 1",
  "1",

  "cos(x)^2 + sin(x)^2 < 1",
  "0",

  "cos(x)^2 + sin(x)^2 + 1 > 1",
  "1",

  "x + x > x",
  "testgt(2*x,x)",

  "a > x",
  "testgt(a,x)",

  "a >= x",
  "testge(a,x)",

  "a == x",
  "testeq(a,x)",

  "a < x",
  "testlt(a,x)",

  "a <= x",
  "testle(a,x)",

  // clean up -----------------

  "a=quote(a)",
  "",

  "x=quote(x)",
  "",

  "b=quote(b)",
  "",

  "A=quote(A)",
  "",

  "B=quote(B)",
  "",

  "C=quote(C)",
  "",

]);


// sourcefile:  tests/transpose.coffee 
const test_transpose = () => run_test([

  "transpose(0)",
  "0",

  "transpose([[1,2,3,4]])",
  "[[1],[2],[3],[4]]",

  "transpose([[1],[2],[3],[4]])",
  "[[1,2,3,4]]",

  "transpose(0.0)",
  "0.0",

  "transpose([[a,b],[c,d]])",
  "[[a,c],[b,d]]",

  "transpose([[a,b],[c,d]],1,2)",
  "[[a,c],[b,d]]",

  "transpose([[a,b,c],[d,e,f]],1,2)",
  "[[a,d],[b,e],[c,f]]",

  "transpose([[a,d],[b,e],[c,f]],1,2)",
  "[[a,b,c],[d,e,f]]",

  // not how one-dimensional vectors
  // don't have a transposition.
  "transpose([a,b,c])",
  "[a,b,c]",


  "transpose(a)",
  "transpose(a)",

  "transpose(a,1,2)",
  "transpose(a)",

  "transpose(a,2,1)",
  "transpose(a)",

  "transpose(1+10)",
  "11",

  "transpose(1+10,2,3)",
  "11",

  "transpose(a*b)",
  "transpose(a)*transpose(b)",
    
  "transpose(a*b,3,4)",
  "transpose(a,3,4)*transpose(b,3,4)",
    
  "transpose(b*2*a)",
  "2*transpose(a)*transpose(b)",

  "transpose(b*2*a,3,4)",
  "2*transpose(a,3,4)*transpose(b,3,4)",
    
  "transpose(b+a)",
  "transpose(a)+transpose(b)",
    
  "transpose(b+a,3,4)",
  "transpose(a,3,4)+transpose(b,3,4)",
    
  "transpose(inner(a,b))",
  "inner(transpose(b),transpose(a))",
    
  "transpose(inner(a,b),3,4)",
  "inner(transpose(b,3,4),transpose(a,3,4))",

  "transpose(transpose(a))",
  "a",
        
  "transpose(transpose(transpose(a)))",
  "transpose(a)",

  "transpose(transpose(transpose(transpose(a))))",
  "a",

  "transpose(transpose(a),3,4)",
  "transpose(transpose(a),3,4)",

  "transpose(transpose(transpose(a),3,4))",
  "transpose(transpose(transpose(a),3,4))",
    
  "transpose(transpose(transpose(a),3,4))",
  "transpose(transpose(transpose(a),3,4))",

  "transpose(transpose(transpose(a),1,2))",
  "transpose(a)",

  "transpose(transpose(transpose(a),2,1))",
  "transpose(a)",
    
  "transpose(transpose(a,3,4),4,3)",
  "a",
    
  "transpose(transpose(a,3,4),5,6)",
  "transpose(transpose(a,3,4),5,6)",
    
  "transpose(a) - transpose(a)",
  "0",
    
  "transpose(a,1,2) - transpose(a,1,2)",
  "0",
    
  "transpose(a,3,4) - transpose(a,3,4)",
  "0",

  "aᵀ^b",
  "transpose(a)^b",

  "a^ᵀb",
  "a^ᵀ ? b\nStop: syntax error",

  "aᵀ^2^3",
  "transpose(a)^8",

  "aᵀ",
  "transpose(a)",

  "aᵀᵀ",
  "a",

  "aᵀᵀᵀ",
  "transpose(a)",

  "aᵀᵀᵀᵀ",
  "a",

  "aᵀ+b",
  "b+transpose(a)",

  "aᵀ*b",
  "b*transpose(a)",

  // this output could be written out more
  // cleanly without extra parens
  "aᵀ^bᵀ",
  "transpose(a)^(transpose(b))",

  "aᵀ*bᵀ",
  "transpose(a)*transpose(b)",

  "a^bᵀ",
  "a^(transpose(b))",

  "(a^b)ᵀ",
  "transpose(a^b)",

  "(a*b)ᵀ",
  "transpose(a)*transpose(b)",

  "inner(a,b)ᵀ",
  "inner(transpose(b),transpose(a))",

  "dot(a,b)ᵀ",
  "inner(transpose(b),transpose(a))",

  "(a·b·c)ᵀ",
  "inner(transpose(c),inner(transpose(b),transpose(a)))",

  "Iᵀᵀᵀ",
  "I",

  // Note that we are using the
  // standard commutative multiplication here,
  // not the dot product.
  // So, one of the two arguments should
  // be a scalar, but we don't know
  // which one, so we have to transpose
  // both. Note that we
  // don't invert the order because
  // we know it's a normal
  // multiplication.
  "transpose(A)*transpose(x)",
  "transpose(A)*transpose(x)",

]);

// sourcefile:  tests/zero.coffee 
const test_zero = () => run_test([
  "zero(2,2)",
  "[[0,0],[0,0]]",

  "zero(1,1)",
  "[[0]]",

  "zero(1)",
  "[0]",

  "zero(2)",
  "[0,0]",

  "zero(1,2)",
  "[[0,0]]",

  "zero(2,1)",
  "[[0],[0]]",

  "zero(0)",
  "0",

  "zero(0,0)",
  "0",

  // it's relevant to handle the case of tensor
  // being passed because if you type
  //  2
  //  zero
  //  > (0,0)
  //  zero # now the last result is passed to zero
  //  > 0 # (0,0) being passed, but it's handled!
  // before some adjustments this used to crash.
  // And it happened to me, so it can happen.
  "zero([2,3])",
  "0",

]);

// sourcefile:  test-harness.coffee 
let ok_tests = 0;
let ko_tests = 0;

var logout = s => console.log(s);


// var run_test = function(s) {
//   let end2 = s.length;

//   algebrite.run("clearall");
//   algebrite.run("e=quote(e)");

//   for (let i = 0; i < end2; i += 2) {
//     var resultFromRun;
//     console.log("starting example: " + s[i]);

//     try {
//       console.log("starting run")
//       resultFromRun = algebrite.run(s[i]);
//       console.log("successful run")
//     } catch (error) {
//       console.log("failed to run");
//       algebrite.init();
//     }

//     if (resultFromRun === s[i+1]) {
//       console.log("ok example: " + s[i]);
//       ok_tests++;
//       continue;
//     }

//     ko_tests++;
//     console.log("\n");
//     console.log("test failed: " + s[i]);
//     console.log("expected: " + s[i+1]);
//     console.log("obtained: " + resultFromRun);
//     console.log("\n");
//   }
// };

// these tests do not use "run" but still need a "stop" context
// sourcefile:  run-tests.coffee 
// self test functions

const test_low_level = function() {
  algebrite.run("clearall"); // to initialize stack and memory

  if (algebrite.exec("factor","(x^2-1)").toString() === "(x-1)*(x+1)") {
    console.log("exec text ok");
  } else {
    console.log("exec text failed");
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

// use the window.selftest version
// for running the tests from the
// browser console ("run npm build-for-browser")
//window.selftest  = ->
export function selftest() {
  //test_low_level();
  //test_pattern();
  test_abs();  
  test_sum();
  test_product();
  test_for();
  test_exp();
  test_expand();
  test_factorpoly();
  test_subst();
  test_simplify();

  test_multiply();
  test_scan();
  test_power();
  test_factor_number(); // long
  test_tensor();
  test_bake();
  test_adj();
  test_arg();
  test_approxratio();
  test_besselj();
  test_bessely();
  test_ceiling();
  test_choose();
  test_circexp();
  test_clock();
  test_cofactor();
  test_condense();
  test_contract();
  test_defint(); // very long
  test_denominator();
  test_derivative();
  test_dirac();
  test_erf();
  test_erfc();
  test_expcos();
  test_expsin();
  test_float();
  test_floor();
  test_gamma();
  test_gcd();
  test_imag();
  test_lcm();
  test_log();
  test_mod();
  test_nroots();
  test_numerator();
  test_outer();
  test_polar();
  test_quotient();
  test_rationalize();
  test_real();
  test_rect();
  test_round();
  test_sgn();
  test_taylor();
  test_zero();
  test_hermite();
  test_laguerre();
  test_legendre();
  test_binomial();
  test_divisors();
  test_coeff();
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
  test_index();
  test_isprime();
  test_eigen();
  test_shape();
  mini_test();
  test_quickfactor();
  test_integral();
  test_roots();


  console.log("passed tests: " + ok_tests + " / failed tests: " + ko_tests);
  return ko_tests;
};

// remove this selftest()
// for running the tests from the
// browser console ("run npm build-for-browser")

selftest();
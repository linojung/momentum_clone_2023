const calc = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calc.plus(1, 6);
const minusResult = calc.minus(plusResult, 10);
const timesResult = calc.times(1, minusResult);
const divideResult = calc.divide(timesResult, plusResult);
const powerResult = calc.power(divideResult, minusResult);

console.log(plusResult, minusResult, timesResult, divideResult, powerResult);

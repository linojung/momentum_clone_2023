const calculate = {
  a: 9,
  b: 10,
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  multiple: function (a, b) {
    console.log(a * b);
  },
};

calculate.plus(calculate.a, calculate.b);
calculate.minus(calculate.a, calculate.b);
calculate.multiple(calculate.a, calculate.b);

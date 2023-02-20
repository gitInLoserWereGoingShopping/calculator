const numClickHandler = (e, calc, callback) => {
  e.preventDefault();
  const value = e.target.innerHTML;
  if (calc.num.toString().length < 16) {
    /*setCalc*/callback({
      ...calc,
      num: calc.num === 0 && value === '0'
        ? 0
        : calc.num === 0
          ? value
          : calc.num + value,
      res: !calc.sign ? 0 : calc.res,
    })
  }
};

const mathOpClickHandler = (e, calc, callback) => {
  e.preventDefault();
  const mathOperator = e.target.innerHTML;
  if (calc.num.toString().length < 16) {
    callback({
      ...calc,
      sign: mathOperator,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    })
  }
  console.log(calc);
};

const equalsClickHandler = (calc, callback) => {
  const { sign, res, num } = calc;

  const mathHelper = (num1, num2, sign) => {
    let a = Number(num1);
    let b = Number(num2);
    return sign === '+'
      ? a + b
      : sign === '-'
      ? a - b
      : sign === 'X'
      ? a * b
      : sign === '%'
      ? a % b
      : b === 0
        ? `Can't divide by zero`
        : a / b
  };

  if (calc.num.toString().length < 16) {
    callback({
      ...calc,
      res: mathHelper(res, num, sign),
      num: mathHelper(res, num, sign), //not sure on this yet
      sign: '',
    })
  }
  console.log(calc);
};

const clearClickHandler = (callback) => {
  callback({
    sign: '',
    num: 0,
    res: 0,
  })
};

const flipSignClickHandler = (calc, callback) => {
  callback({
    ...calc,
    num: -1 * calc.num,
  })
};

export {
  numClickHandler,
  equalsClickHandler,
  clearClickHandler,
  flipSignClickHandler,
  mathOpClickHandler,
}
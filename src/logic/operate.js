import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);
  switch (operation) {
    case '+':
      return numOne.plus(numTwo);
    case '-':
      return numOne.minus(numTwo);
    case '÷':
      if (numTwo === 0) return 0;
      return numOne.div(numTwo);
    case 'X':
      return numOne.times(numTwo);
    case '%':
      return numOne.mod(numTwo);
    default:
      return 0;
  }
};

export default operate;

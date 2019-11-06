import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);
  switch (operation) {
    case '+':
      return numOne.plus(numTwo).toString();
    case '-':
      return numOne.minus(numTwo).toString();
    case '÷':
      if (numTwo === 0) return 0;
      return numOne.div(numTwo).toString();
    case 'X':
      return numOne.times(numTwo).toString();
    case '%':
      return numOne.mod(numTwo).toString();
    default:
      return 0;
  }
};

export default operate;

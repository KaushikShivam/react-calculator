import operate from './operate';

const calculate = (calcData, btnName) => {
  const { total, next, operation } = calcData;

  switch (btnName) {
    case 'AC':
      return {
        total: null,
        next: null,
        operation: null,
      };
    case '+/-':
      if (next) return { total, next: next * -1, operation };
      return { total: total * -1, next, operation };
    case '+':
    case '-':
    case '÷':
    case 'X':
    case '%':
      if (next && operation) {
        return {
          total: operate(total, next, operation),
          next: null,
          operation: btnName,
        };
      }
      return { total, next: null, operation: btnName };

    default:
      break;
  }
};

export default calculate;

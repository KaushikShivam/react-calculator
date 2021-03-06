import operate from './operate';

const calculate = (calcData, btnName) => {
  const { total, next, operation, didCalc } = calcData;

  switch (btnName) {
    case 'AC':
      return {
        total: null,
        next: null,
        operation: null,
        didCalc: false,
      };
    case '+/-':
      if (next) return { total, next: next * -1, operation, didCalc: false };
      return { total: total * -1, next, operation: null, didCalc: false };
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
          didCalc: false,
        };
      }
      return { total, next: null, operation: btnName, didCalc: false };
    case '=':
      if (operation)
        return {
          total: operate(total, next, operation),
          next: null,
          operation: null,
          didCalc: true,
        };
      return { total, next: null, operation: null, didCalc: true };
    case '.':
      if (next) {
        return { total, next: `${next}.`, operation, didCalc: false };
      }
      if (total) {
        return { total: `${total}.`, next, operation, didCalc: false };
      }
      return { total: '0.', next, operation };
    default:
      if (operation) return { total, next: next ? next + btnName : btnName, operation };
      if (didCalc) return { total: btnName, next, operation, didCalc: true };
      return { total: total ? total + btnName : btnName, next, operation };
  }
};

export default calculate;

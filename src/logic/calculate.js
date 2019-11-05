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
      return { total: total * -1, next, operation: null };
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
    case '=':
      if (operation) return { total: operate(total, next, operation), next: null, operation: null };
      return { total, next: null, operation: null };
    case '.':
      if (next) {
        if (next.includes('')) return {};
        return { total, next: `${next}.`, operation };
      }
      if (total) {
        if (total.includes('')) return {};
        return { total: `${total}.`, next, operation };
      }
      return { total: '0.', next, operation };
    default:
      if (operation) return { total, next: next + btnName, operation };
      return { total: total ? total : total + btnName, next, operation };
  }
};

export default calculate;

import operate from './operate';

const calculate = (calcData, buttonName) => {
  const { total, next, operation } = calcData;

  switch (buttonName) {
    case 'AC':
      return {
        total: null,
        next: null,
        operation: null,
      };
    case '+/-':
      if (next) return { total, next: next * -1, operation };
      return { total: total * -1, next, operation };
    default:
      break;
  }
};

export default calculate;

import operate from './operate';

const calculate = (data, btnName) => {
  let total = null;
  let next = null;
  const operation = null;

  const op = ['X', '+', '-', '÷'];

  if (operation === '+/-') {
    total *= -1;
    next *= -1;
  } else if (operation === 'AC') {
    total = null;
    next = null;
    operate = null;
  } else if (operation === '%') {
    total /= 100;
    next /= 100;
  } else if (operation === '.') {
    total += '.';
    next += '.';
  }

  if (op.includes(btnName)) total = operate(total, next, btnName);

  return total;
};

export default calculate;

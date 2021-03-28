import operate from './operate';

const calculate = (data, btnName) => {
  let { total, next, operator } = data;

  const op = ['X', '+', '-', '÷', '='];
  const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (btnName === 'AC') {
    total = null;
    next = null;
    operator = null;
  } else if (btnName === '%') {
    total = String(total / 100);
    next = String(next / 100);
  } else if (btnName === '.') {
    total += '.';
    next += '.';
  }

  if (op.includes(btnName)) {
    if (operator != null) {
      total = String(operate(total, next, operator));
      next = null;
    } else if (next != null) {
      total = next;
      next = null;
    }

    if (btnName !== '=') operator = btnName;
    else operator = null;
  }

  if (num.includes(btnName)) {
    if (next != null) next += btnName;
    else next = btnName;
  }

  return { total, next, operator };
};

export default calculate;

import Big from 'big.js';

const operate = (nOne, nTwo, operation) => {
  let total = null;
  const n1 = Big(nOne);
  const n2 = Big(nTwo);
  if (operation === '-') total = n1 - n2;
  else if (operation === '+') total = n1 + n2;
  else if (operation === 'X') total = n1 * n2;
  else if (operation === '÷') {
    if (n2 === '0') total = 'Cant divide by 0';
    else total = n1 / n2;
  }

  return total;
};

export default operate;

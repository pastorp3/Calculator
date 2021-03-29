/* eslint-disable radix */

import Big from 'big.js';

const operate = (nOne = '0', nTwo = '0', operation) => {
  let total = null;
  const n1 = nOne === null ? Big('0') : Big(nOne);
  const n2 = nTwo === null ? Big('0') : Big(nTwo);
  if (operation === '-') total = n1.minus(n2);
  else if (operation === '+') total = n1.plus(n2);
  else if (operation === 'X') total = n1.times(n2);
  else if (operation === '÷') {
    if (n2.c[0] === 0) total = 'Cant divide by 0';
    else total = n1.div(n2);
  }

  return total;
};

export default operate;

/* eslint-disable radix */

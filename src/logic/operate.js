import Big from 'big.js';

const operate = (one, two, operation) => {
  let calcResult = new Big(0);
  const numOne = new Big(one);
  let numTwo;
  let temp = false;
  if (two) numTwo = new Big(two);
  switch (operation) {
    case '+':
      calcResult = numOne.plus(numTwo);
      break;
    case '-':
      calcResult = numOne.minus(numTwo);
      break;
    case 'x':
      calcResult = numOne.times(numTwo);
      break;
    case '/':
      if (one === '0' || two === '0') temp = true;
      calcResult = temp ? 'no division by 0' : numOne.div(numTwo);
      break;
    case '%':
      calcResult = numOne.times('0.01');
      break;
    default:
  }
  return calcResult.toString();
};

export default { operate };

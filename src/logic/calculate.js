import operate from './operate';

const calculate = (data, name) => {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operations = ['+', '-', '/', '*'];
  // const { operate } = operationsMethod;
  if (digits.includes(name) && data.next === null) {
    data.next = name;
  } else if (name === '.' && data.operation === null) {
    data.next += name;
  } else if (digits.includes(name) && data.operation === null && data.next) {
    data.next += name;
  } else if (operations.includes(name)) {
    data.operation = name;
  } else if (data.next && data.operation && digits.includes(name) && !data.total) {
    data.total = name;
  } else if (name === '.' && data.operation) {
    data.total += name;
  } else if (digits.includes(name) && data.operation && data.total) {
    data.total += name;
  }

  if (name === '=') {
    data.total = operate(data.next, data.total, data.operation);
  } else if (name === 'AC') {
    data.total = null;
    data.next = null;
    data.operation = null;
  } else if (name === '+/-') {
    if (data.next) data.next *= -1;
    if (data.total) data.total *= -1;
  } else if (name === '%') {
    data.total = operate(data.next, null, data.operation);
  }
  return data;
};

export default { calculate };

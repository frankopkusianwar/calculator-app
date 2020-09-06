/* eslint-disable no-param-reassign */
import operationMethod from './operate';

const calculate = (data, name) => {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operations = ['+', '-', '/', 'x'];
  const { operate } = operationMethod;
  if (data.total && data.total.includes('no')) {
    data.next = null;
    data.total = null;
  }
  if (digits.includes(name) && data.next === null) {
    data.next = name;
  } else if (name === '.' && data.operation === null) {
    data.next += name;
  } else if (
    digits.includes(name)
    && data.operation === null
    && data.next
  ) {
    data.next += name;
  } else if (operations.includes(name)) {
    if (data.next && data.total && data.operation !== '=') {
      data.total = operate(data.next, data.total, data.operation);
    }
    data.operation = name;
    if (data.next && data.total) {
      data.next = data.total;
      data.total = null;
    }
  } else if (data.next && data.operation && digits.includes(name) && !data.total) {
    data.total = name;
  } else if (name === '.' && data.operation) {
    data.total += name;
  } else if (
    digits.includes(name)
    && data.operation
    && data.total
  ) {
    data.total += name;
  }

  if (name === '=') {
    data.total = operate(
      data.next,
      data.total,
      data.operation,
    );
    data.operation = '=';
  } else if (name === 'AC') {
    data.total = null;
    data.next = null;
    data.operation = null;
  } else if (name === '+/-') {
    if (!data.total) {
      data.next *= -1;
      data.next = data.next.toString();
    } else if (data.next) {
      data.total *= -1;
      data.total = data.total.toString();
    }
  } else if (name === '%') {
    data.operation = name;
    data.total = operate(data.next, null, data.operation);
  }
  return data;
};

export default { calculate };

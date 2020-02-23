/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
module.exports = {
  sum(num1, num2) {
    return num1 + num2;
  },
  sub(num1, num2) {
    return num1 - num2;
  },
  div(num1, num2) {
    return num2 === 0 ? 'Nao pode dividir por 0' : num1 / num2;
  },
  mult(num1, num2) {
    return num1 * num2;
  },
};

const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) =>
  num2 === 0 ? 'Nao pode dividir por 0' : num1 / num2;

// eslint-disable-next-line object-curly-newline
export { sum, sub, mult, div };

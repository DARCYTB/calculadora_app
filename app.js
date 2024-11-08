const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let previousInput = "";
let operator = null;

const updateScreen = (value) => {
  screen.textContent = value;
};

const calculate = (val1, val2, operator) => {
  const num1 = parseFloat(val1);
  const num2 = parseFloat(val2);

  switch (operator) {
    case "+":
      return (num1 + num2).toString();

    case "-":
      return (num1 - num2).toString();

    case "*":
      return (num1 * num2).toString();

    case "/":
      return num2 !==0 ? (num1 / num2).toString() : 'Error operación invalida';

    case "%":
      return (num1 % num2).toString();

    default:
      return b;
  }
};

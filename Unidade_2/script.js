let currentInput = "0";
let operator = null;
let firstOperand = null;
let waitingForSecondOperand = false;

const display = document.getElementById("display");

function updateDisplay() {
  display.value = currentInput;
}

function inputDigit(digit) {
  if (waitingForSecondOperand === true) {
    currentInput = digit;
    waitingForSecondOperand = false;
  } else {
    currentInput = currentInput === "0" ? digit : currentInput + digit;
  }
  updateDisplay();
}

function inputDecimal(dot) {
  if (!currentInput.includes(dot)) {
    currentInput += dot;
  }
  updateDisplay();
}

function resetCalculator() {
  currentInput = "0";
  operator = null;
  firstOperand = null;
  waitingForSecondOperand = false;
  updateDisplay();
}

function performCalculation() {
  if (operator === null || waitingForSecondOperand) {
    return;
  }

  const inputValue = parseFloat(currentInput);
  const firstValue = parseFloat(firstOperand);
  let result;

  switch (operator) {
    case "+":
      result = firstValue + inputValue;
      break;
    case "-":
      result = firstValue - inputValue;
      break;
    case "*":
      result = firstValue * inputValue;
      break;
    case "/":
      if (inputValue === 0) {
        currentInput = "Erro";
        operator = null;
        firstOperand = null;
        waitingForSecondOperand = true;
        updateDisplay();
        return;
      }
      result = firstValue / inputValue;
      break;
    default:
      return;
  }

  currentInput = String(result);
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = true;
  updateDisplay();
}

function handleOperator(nextOperator) {
  const inputValue = parseFloat(currentInput);

  if (firstOperand === null) {
    firstOperand = inputValue;
  } else if (operator) {
    performCalculation();
    firstOperand = parseFloat(currentInput);
  }

  waitingForSecondOperand = true;
  operator = nextOperator;
}

const buttons = document.querySelector(".botoes");

buttons.addEventListener("click", (event) => {
  if (!event.target.tagName === "BUTTON") {
    return;
  }

  const target = event.target;
  const value = target.getAttribute("data-value");
  const action = target.getAttribute("data-action");

  if (value && value !== ".") {
    inputDigit(value);
  } else if (value === ".") {
    inputDecimal(value);
  } else if (action === "calculate") {
    performCalculation();
  } else if (action === "clear") {
    resetCalculator();
  } else if (target.textContent.match(/[\+\-\*\/]/)) {
    handleOperator(target.textContent);
  }
});

updateDisplay();

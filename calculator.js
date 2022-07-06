// Operations
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return null;
    }
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            return null;
    }
}

// Buttons
const numberBtns = document.querySelectorAll('number');
const operatorBtns = document.querySelectorAll('operator');
const display = document.getElementById('display');
const equalBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');

var num1 = 0;
var num2 = 0;
var displayVal = "";

numberBtns.forEach((btn) =>
    btn.addEventListener('click', () => appendNum(Number(btn.textContent)))
);

operatorBtns.forEach((button) =>
    btn.addEventListener('click', () => setOperator(btn.textContent))
);

equalBtn.addEventListener('click', () => operateDisplay);
clearBtn.addEventListener('click', () => clearDisplay());

function appendNum(num) {

}

function setOperator(operator) {

}

function clearDisplay() {

}

function operateDisplay() {
    display.textContent = operate(num1, num2);
}
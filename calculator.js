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
    return Math.round(num1 / num2 * 1000)/1000;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
        default:
            return null;
    }
}

// Buttons
const numberBtns = document.querySelectorAll('[number]');
const operatorBtns = document.querySelectorAll('[operator]');
const display = document.querySelector('.display');
const equalBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');

var num1 = "";
var num2 = "";
var operator = "";
var operatorSelected = false;
var displayVal = "";

numberBtns.forEach((btn) =>
    btn.addEventListener('click', () => appendNum(btn.textContent))
);

operatorBtns.forEach((btn) =>
    btn.addEventListener('click', () => setOperator(btn.textContent))
);

equalBtn.addEventListener('click', () => equalsDisplay());
clearBtn.addEventListener('click', () => clearDisplay());

// Number button clicked
function appendNum(num) {
    if (!operatorSelected) {
        if (num == "0" && num1 == "0") return;
        if (num1 == "0") num1 = "";
        num1 += num;
    } else {
        if (num == "0" && num2 == "0") return;
        if (num2 == "0") num2 = "";
        num2 += num;
    }
    setDisplay();
}

// Operator button pressed
function setOperator(operand) {
    if (num1.length > 0) {
        operatorSelected = true;
        operator = operand;
        setDisplay();
    }
}

// Equals button pressed
function equalsDisplay() {
    if (num1 == "" || num2 == "" || operator == "") {
        return;
    }
    let res = operate(operator, Number(num1), Number(num2));
    display.textContent = res != null ? res : "Cannot divide by zero!";
    reset();
    num1 = res != null ? res.toString() : "";
}

// Clear button pressed
function clearDisplay() {
    display.textContent = "";
    reset();
}

// Sets display based on global vars
function setDisplay() {
    display.textContent = `${num1} ${operator} ${num2}`;
}

// Clears all variables
function reset() {
    operatorSelected = false;
    num1 = "";
    num2 = "";
    operator = "";
}